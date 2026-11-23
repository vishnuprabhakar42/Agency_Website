'use client';
import { useEffect, useRef } from 'react';

// Large statement whose words light up one by one as it scrolls through the viewport.
// `parts` is an array of [text, tone?] so key words can light up in a product colour.
export default function Manifesto({ parts }) {
  const ref = useRef(null);
  const words = [];
  parts.forEach(([text, tone]) => text.split(' ').filter(Boolean).forEach((w) => words.push([w, tone])));
  const n = words.length;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.setProperty('--p', '1');
      return;
    }
    let id = 0;
    const update = () => {
      id = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the block's top reaches 85% of the screen, 1 when its bottom reaches 45%.
      const start = vh * 0.85;
      const end = vh * 0.45;
      const p = (start - r.top) / (start - end + r.height);
      el.style.setProperty('--p', Math.min(1, Math.max(0, p)).toFixed(4));
    };
    const on = () => {
      if (!id) id = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => {
      window.removeEventListener('scroll', on);
      window.removeEventListener('resize', on);
      cancelAnimationFrame(id);
    };
  }, []);

  return (
    <p ref={ref} className="manifesto" style={{ '--n': n }}>
      {words.map(([w, tone], i) => (
        <span key={i} className={`mw${tone ? ' ' + tone : ''}`} style={{ '--i': i }}>
          {w}{' '}
        </span>
      ))}
    </p>
  );
}
