'use client';
import { useEffect, useRef } from 'react';

// The hero product demo starts tilted back in 3D and flattens as you scroll.
export default function HeroTilt({ children }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.setProperty('--tilt', '1');
      return;
    }
    let id = 0;
    const update = () => {
      id = 0;
      const p = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.55)));
      el.style.setProperty('--tilt', p.toFixed(4));
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
    <div ref={ref} className="tilt">
      {children}
    </div>
  );
}
