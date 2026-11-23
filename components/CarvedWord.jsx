'use client';
import { useRef } from 'react';

// Footer wordmark that looks carved into the surface. A soft light follows the
// pointer across the letters (desktop only; static on touch).
export default function CarvedWord({ children }) {
  const ref = useRef(null);
  const raf = useRef(0);

  const move = (e) => {
    const el = ref.current;
    if (!el || e.pointerType === 'touch') return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.setProperty('--mx', `${x}px`);
      el.style.setProperty('--my', `${y}px`);
      el.style.setProperty('--lit', '1');
    });
  };
  const leave = () => ref.current?.style.setProperty('--lit', '0');

  return (
    <div ref={ref} className="f-word" aria-hidden="true" onPointerMove={move} onPointerLeave={leave}>
      {children}
    </div>
  );
}
