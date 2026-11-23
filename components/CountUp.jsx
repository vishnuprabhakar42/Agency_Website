'use client';
import { useEffect, useRef, useState } from 'react';

// Counts from 0 to `to` the first time it scrolls into view.
// Server-renders the final value so crawlers and no-JS visitors see the real number.
export default function CountUp({ to, decimals = 0, prefix = '', suffix = '', duration = 1600 }) {
  const ref = useRef(null);
  const [val, setVal] = useState(to);
  const fmt = (v) => prefix + v.toLocaleString('en-IN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) return; // already on screen: leave as is
    setVal(0);
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (t) => {
          const k = Math.min(1, (t - t0) / duration);
          const eased = 1 - Math.pow(1 - k, 4);
          setVal(to * eased);
          if (k < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  const shown = decimals ? Number(val.toFixed(decimals)) : Math.round(val);
  return (
    <span ref={ref} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {fmt(shown)}
    </span>
  );
}
