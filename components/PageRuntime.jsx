'use client';
import { useEffect } from 'react';
import { PAGES } from '@/lib/pages.generated';
import { NAV_SCRIPT, FOOTER_SCRIPT } from '@/lib/scripts.generated';

// Minimal stand-in for the Claude-design runtime base class the page scripts extend.
class DCLogic {
  constructor(props) {
    this.props = props || {};
    this.state = {};
  }
  setState(update, cb) {
    const patch = typeof update === 'function' ? update(this.state) : update;
    this.state = { ...this.state, ...patch };
    if (cb) cb();
  }
  forceUpdate() {}
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  renderVals() {
    return {};
  }
}

const ReactShim = { createRef: () => ({ current: null }) };

// Run one page script (a `class Component extends DCLogic { ... }` source) against `root`.
function runScript(src, root, props) {
  if (!src) return null;
  let inst;
  try {
    const factory = new Function('DCLogic', 'React', src + '\n;return Component;');
    const Component = factory(DCLogic, ReactShim);
    inst = new Component(props || {});
    inst._cleanups = inst._cleanups || [];
    let vals = {};
    try {
      vals = inst.renderVals() || {};
    } catch (e) {}
    if (vals.rootRef) vals.rootRef.current = root;
    if (inst.rootRef && typeof inst.rootRef === 'object' && 'current' in inst.rootRef) {
      inst.rootRef.current = root;
    }
    inst.componentDidMount();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('[PageRuntime] script failed:', e);
    return null;
  }
  return inst;
}

// Reproduce the runtime's `style-hover="..."` pseudo-class via JS listeners.
function wireHover(root) {
  const handlers = [];
  root.querySelectorAll('[style-hover]').forEach((el) => {
    const raw = el.getAttribute('style-hover') || '';
    const decls = raw
      .split(';')
      .map((d) => d.trim())
      .filter(Boolean)
      .map((d) => {
        const i = d.indexOf(':');
        return [d.slice(0, i).trim(), d.slice(i + 1).trim()];
      })
      .filter(([k]) => k);
    if (!decls.length) return;
    const saved = {};
    const enter = () => {
      for (const [k, v] of decls) {
        saved[k] = el.style.getPropertyValue(k);
        el.style.setProperty(k, v);
      }
    };
    const leave = () => {
      for (const [k] of decls) el.style.setProperty(k, saved[k] || '');
    };
    el.addEventListener('mouseenter', enter);
    el.addEventListener('mouseleave', leave);
    handlers.push(() => {
      el.removeEventListener('mouseenter', enter);
      el.removeEventListener('mouseleave', leave);
    });
  });
  return () => handlers.forEach((fn) => fn());
}

export default function PageRuntime({ name }) {
  useEffect(() => {
    const root = document.getElementById('dc-root');
    if (!root) return;
    const page = PAGES[name];
    const instances = [
      runScript(page?.script, root, {}),
      runScript(NAV_SCRIPT, root, { active: page?.active }),
      runScript(FOOTER_SCRIPT, root, {}),
    ].filter(Boolean);
    const unhover = wireHover(root);
    return () => {
      unhover();
      for (const inst of instances.reverse()) {
        try {
          inst.componentWillUnmount();
        } catch (e) {}
        if (Array.isArray(inst._cleanups)) {
          for (const fn of inst._cleanups) {
            try {
              fn();
            } catch (e) {}
          }
        }
      }
    };
  }, [name]);
  return null;
}
