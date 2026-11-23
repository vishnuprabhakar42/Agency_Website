'use client';
import { useEffect, useRef, useState } from 'react';
import { Check } from './Icons';

const LEAKS = [
  { t: 'Lead sits uncalled for hours', s: 'Instant alert + auto-assignment the moment it lands' },
  { t: 'Follow-up promised, never made', s: 'Every follow-up scheduled, tracked and reminded' },
  { t: 'Missed follow-up goes unnoticed', s: 'Escalation to the team lead, automatically' },
  { t: 'Leads scattered across portals & sheets', s: 'Meta Ads + consolidator APIs into one pipeline' },
  { t: 'Agent leaves, takes the leads with them', s: 'Full history stays with the company, reassign in a click' },
];

// Leak points "get plugged" one by one when the card scrolls into view.
export default function LeakPipe() {
  const ref = useRef(null);
  const [fixed, setFixed] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        let n = 0;
        timer = setInterval(() => {
          n += 1;
          setFixed(n);
          if (n >= LEAKS.length) clearInterval(timer);
        }, 700);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearInterval(timer);
    };
  }, []);

  const pct = Math.round((fixed / LEAKS.length) * 100);

  return (
    <div className="leak" ref={ref}>
      <div className="leak-head">
        <b>Where real-estate leads leak</b>
        <span className="chip">{fixed}/{LEAKS.length} plugged</span>
      </div>
      {LEAKS.map((l, i) => {
        const ok = i < fixed;
        return (
          <div key={l.t} className={`leak-row${ok ? '' : ' is-leaking'}`}>
            <span className="drip" />
            <div>
              <div className="lr-t">{l.t}</div>
              <div className="lr-s">{l.s}</div>
            </div>
            <span className={`leak-badge ${ok ? 'fixed' : 'leaking'}`}>
              {ok ? (
                <>
                  <Check size={12} sw={2.6} /> plugged
                </>
              ) : (
                <>
                  <span className="dot" /> leaking
                </>
              )}
            </span>
          </div>
        );
      })}
      <div className="leak-foot">
        <span style={{ fontSize: 13, color: 'var(--d-muted)', whiteSpace: 'nowrap' }}>Pipeline sealed</span>
        <div className="leak-meter">
          <i style={{ width: `${pct}%` }} />
        </div>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 13, color: '#fff' }}>{pct}%</span>
      </div>
    </div>
  );
}
