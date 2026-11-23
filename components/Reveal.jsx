'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Adds `.in` to every `.rv` element as it scrolls into view.
// - Watches the DOM, so content swapped in later (client navigation, hot reload,
//   streamed sections) is picked up too, instead of staying invisible.
// - Anything already above the viewport (scrolled past quickly) is revealed at once.
// - Safety net: if the observer never reports (e.g. a throttled background tab),
//   everything is revealed after a few seconds rather than left blank.
export default function Reveal() {
  const path = usePathname();

  useEffect(() => {
    const reveal = (el) => el.classList.add('in');
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.rv').forEach(reveal);
      return;
    }

    let fired = false;
    const io = new IntersectionObserver(
      (entries) => {
        fired = true;
        entries.forEach((e) => {
          if (e.isIntersecting || e.boundingClientRect.bottom < 0) {
            reveal(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.01 }
    );

    const scan = (root) => {
      const list = root.matches?.('.rv:not(.in)') ? [root] : [];
      root.querySelectorAll?.('.rv:not(.in)').forEach((el) => list.push(el));
      list.forEach((el) => io.observe(el));
    };
    scan(document.body);

    const mo = new MutationObserver((muts) => {
      for (const m of muts) m.addedNodes.forEach((n) => n.nodeType === 1 && scan(n));
    });
    mo.observe(document.body, { childList: true, subtree: true });

    const failsafe = setTimeout(() => {
      if (!fired) document.querySelectorAll('.rv').forEach(reveal);
    }, 4000);

    return () => {
      io.disconnect();
      mo.disconnect();
      clearTimeout(failsafe);
    };
  }, [path]);

  return null;
}
