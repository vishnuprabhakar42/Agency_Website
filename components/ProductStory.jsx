'use client';
import { useEffect, useRef, useState } from 'react';
import { Bell, Bolt, Check, Clock, Home, Users, Shield } from './Icons';

/* Pinned, scroll-driven walkthrough of both products. The section is tall; an
   inner stage stays stuck to the viewport while scroll progress picks the step. */

const STEPS = [
  { p: 'leads', k: 'A lead lands', d: 'An enquiry arrives from Meta Ads or a lead consolidator. It goes straight into the pipeline, with no CSV downloads and no copy-pasting.' },
  { p: 'leads', k: 'Owned in seconds', d: 'It’s assigned to the right agent instantly, with an alert. The response-time clock starts now, and everyone can see it.' },
  { p: 'leads', k: 'Follow-ups that never slip', d: 'Every call and next step is scheduled and reminded. If a follow-up is missed, it goes to the team lead automatically.' },
  { p: 'leads', k: 'Closed, not leaked', d: 'Site visit, negotiation, closed. Every touchpoint is logged on the lead, so nothing walks out of the door with an agent.' },
  { p: 'hr', k: 'Attendance flows in', d: 'Shifts, leave and overtime are recorded through the month and locked when payroll starts. No re-typing.' },
  { p: 'hr', k: 'Payroll runs itself', d: 'Salaries, arrears, LOP and deductions are calculated in one pass, and payslips and the bank file come out together.' },
  { p: 'hr', k: 'Compliance, done', d: 'PF, ESI, Professional Tax, TDS and LWF are worked out every cycle, with registers ready for filing and audits.' },
];

function Visual({ i }) {
  switch (i) {
    case 0:
      return (
        <div className="sv">
          <div className="sv-note">
            <span className="sv-ico" style={{ background: '#2f55ff' }}><Bolt size={16} /></span>
            <div style={{ flex: 1 }}>
              <div className="sv-t">New lead · Meta Ads</div>
              <div className="sv-s">Rahul Sharma · 3 BHK, Sector 65 · ₹1.8 Cr budget</div>
            </div>
            <span className="sv-time">now</span>
          </div>
          <div className="sv-note faded">
            <span className="sv-ico" style={{ background: '#7a5cff' }}><Bolt size={16} /></span>
            <div style={{ flex: 1 }}>
              <div className="sv-t">New lead · Portal API</div>
              <div className="sv-s">Ananya Gupta · Builder floor, DLF 3</div>
            </div>
            <span className="sv-time">2m</span>
          </div>
          <div className="sv-note faded2">
            <span className="sv-ico" style={{ background: '#0fb07a' }}><Bolt size={16} /></span>
            <div style={{ flex: 1 }}>
              <div className="sv-t">New lead · Website</div>
              <div className="sv-s">Vikram Singh · Plot, Sohna Road</div>
            </div>
            <span className="sv-time">6m</span>
          </div>
        </div>
      );
    case 1:
      return (
        <div className="sv sv-card">
          <div className="sv-row">
            <span className="av" style={{ background: '#2b303b', width: 44, height: 44, fontSize: 15 }}>RS</span>
            <div style={{ flex: 1 }}>
              <div className="sv-t" style={{ fontSize: 17 }}>Rahul Sharma</div>
              <div className="sv-s">3 BHK · Sector 65 · via Meta Ads</div>
            </div>
          </div>
          <div className="sv-assign">
            <span className="av" style={{ background: '#ff5a26', width: 34, height: 34 }}>P</span>
            <div style={{ flex: 1 }}>
              <div className="sv-t">Assigned to Priya</div>
              <div className="sv-s">Round-robin · Gurugram team</div>
            </div>
            <span className="sv-clock">00:03</span>
          </div>
          <div className="sv-chips"><span className="st st-new">New · assigned</span><span className="chip">Agent alerted instantly</span></div>
        </div>
      );
    case 2:
      return (
        <div className="sv sv-card">
          <div className="sv-t" style={{ marginBottom: 14 }}>Follow-up timeline · Rahul Sharma</div>
          {[
            ['done', 'Call: interested, wants site visit', 'Mon 11:04'],
            ['done', 'Brochure + price sheet sent', 'Mon 11:20'],
            ['esc', 'Callback missed → team lead alerted', 'Tue 17:00'],
            ['due', 'Callback rescheduled', 'Wed 10:30'],
          ].map(([s, t, w]) => (
            <div className="sv-tl" key={t}>
              <span className={`sv-dot ${s}`}>{s === 'done' ? <Check size={11} sw={3} /> : s === 'esc' ? <Bell size={11} /> : <Clock size={11} />}</span>
              <span style={{ flex: 1 }}>{t}</span>
              <span className="sv-time">{w}</span>
            </div>
          ))}
        </div>
      );
    case 3:
      return (
        <div className="sv sv-card">
          <div className="sv-stages">
            {['New', 'Contacted', 'Site visit', 'Negotiation', 'Closed'].map((s, k) => (
              <div key={s} className="on" style={{ '--k': k }}>
                <i />
                <span>{s}</span>
              </div>
            ))}
          </div>
          <div className="sv-won">
            <div>
              <div className="sv-s">Deal closed</div>
              <div className="sv-big">₹1.76 Cr</div>
            </div>
            <span className="st st-done" style={{ fontSize: 13 }}>Closed won</span>
          </div>
          <div className="sv-row" style={{ justifyContent: 'space-between' }}>
            <span className="sv-s">Leads untouched &gt; 24h</span>
            <span className="sv-t" style={{ color: 'var(--mint)' }}>0</span>
          </div>
        </div>
      );
    case 4:
      return (
        <div className="sv sv-card">
          <div className="sv-row" style={{ justifyContent: 'space-between', marginBottom: 14 }}>
            <div className="sv-t">November attendance</div>
            <span className="chip" style={{ background: 'var(--mint-soft)', color: '#08744f' }}>96% present</span>
          </div>
          <div className="sv-cal">
            {Array.from({ length: 35 }).map((_, k) => (
              <i key={k} className={k % 7 >= 5 ? 'w' : [8, 9, 22].includes(k) ? 'l' : k === 16 ? 'a' : 'p'} style={{ '--k': k }} />
            ))}
          </div>
          <div className="legend" style={{ color: 'var(--muted)' }}>
            <span><i style={{ background: 'var(--mint)' }} />Present</span>
            <span><i style={{ background: 'var(--amber)' }} />Leave</span>
            <span><i style={{ background: 'var(--red)' }} />Absent</span>
            <span><i style={{ background: '#e4e1da' }} />Weekly off</span>
          </div>
        </div>
      );
    case 5:
      return (
        <div className="sv sv-card">
          <div className="sv-row" style={{ justifyContent: 'space-between', marginBottom: 12 }}>
            <div className="sv-t">Payslip · Neha Arora</div>
            <span className="sv-s">Nov 2026</span>
          </div>
          <div className="payslip" style={{ background: 'var(--paper)' }}>
            <div className="ps-row"><span>Basic + HRA</span><span>₹62,500</span></div>
            <div className="ps-row"><span>Special allowance</span><span>₹18,200</span></div>
            <div className="ps-row"><span>Overtime (6h)</span><span>₹2,400</span></div>
            <div className="ps-row"><span>PF · ESI · PT</span><span>−₹7,940</span></div>
            <div className="ps-row"><span>TDS</span><span>−₹4,120</span></div>
            <div className="ps-row"><span>Net pay</span><span>₹71,040</span></div>
          </div>
          <div className="sv-chips"><span className="chip">248 payslips generated</span><span className="chip">Bank file ready</span></div>
        </div>
      );
    default:
      return (
        <div className="sv sv-card">
          <div className="sv-t" style={{ marginBottom: 12 }}>Statutory compliance · November</div>
          {['Provident Fund', 'ESI', 'Professional Tax', 'TDS on salary', 'Labour Welfare Fund'].map((c, k) => (
            <div className="sv-comp" key={c} style={{ '--k': k }}>
              <Shield size={16} />
              <span style={{ flex: 1 }}>{c}</span>
              <span className="sv-ok"><Check size={12} sw={3} /> ready</span>
            </div>
          ))}
        </div>
      );
  }
}

export default function ProductStory() {
  const ref = useRef(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let id = 0;
    const update = () => {
      id = 0;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = Math.min(1, Math.max(0, -r.top / total));
      el.style.setProperty('--sp', p.toFixed(4));
      setStep(Math.min(STEPS.length - 1, Math.floor(p * STEPS.length)));
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

  const s = STEPS[step];
  const isHr = s.p === 'hr';
  const local = isHr ? step - 4 : step;
  const count = isHr ? 3 : 4;

  return (
    <section ref={ref} className={`story ${isHr ? 'is-hr' : 'is-leads'}`} style={{ height: `${STEPS.length * 75 + 100}vh` }} aria-label="How the products work, step by step">
      <div className="story-stage">
        <div className="wrap story-grid">
          <div className="story-copy">
            <div className="story-tabs">
              <span className={!isHr ? 'on' : ''}><Home size={15} /> Lead Management</span>
              <span className={isHr ? 'on' : ''}><Users size={15} /> HRMS &amp; Payroll</span>
            </div>
            <div className="story-num">
              {String(local + 1).padStart(2, '0')} <span>/ {String(count).padStart(2, '0')}</span>
            </div>
            <div className="story-text" key={step}>
              <h3>{s.k}</h3>
              <p>{s.d}</p>
            </div>
            <div className="story-bar">
              {STEPS.map((_, k) => (
                <i key={k} className={k < step ? 'done' : k === step ? 'on' : ''} />
              ))}
            </div>
          </div>
          <div className="story-visual">
            <div className="story-glow" />
            {STEPS.map((_, k) => (
              <div key={k} className={`story-layer${k === step ? ' on' : k < step ? ' past' : ''}`} aria-hidden={k !== step}>
                <Visual i={k} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
