'use client';
import { useEffect, useRef, useState } from 'react';
import { Bell, Check, Clock, Home, Users, Bolt } from './Icons';

/* ---------------- demo data (illustrative) ---------------- */
const SOURCES = {
  meta: { label: 'Meta Ads', c: '#2f55ff' },
  portal: { label: 'Portal API', c: '#7a5cff' },
  web: { label: 'Website', c: '#0fb07a' },
};
const AGENTS = [
  { n: 'Priya', c: '#ff5a26' },
  { n: 'Arjun', c: '#2f55ff' },
  { n: 'Neha', c: '#0fb07a' },
  { n: 'Kabir', c: '#7a5cff' },
];
const POOL = [
  { name: 'Rahul Sharma', need: '3 BHK · Sector 65', src: 'meta' },
  { name: 'Ananya Gupta', need: 'Builder floor · DLF 3', src: 'portal' },
  { name: 'Vikram Singh', need: 'Plot · Sohna Rd', src: 'web' },
  { name: 'Meera Kapoor', need: '4 BHK · Golf Course Ext', src: 'meta' },
  { name: 'Rohit Bansal', need: 'Office · Sector 44', src: 'portal' },
  { name: 'Isha Malhotra', need: '2 BHK · Dwarka Exp', src: 'meta' },
  { name: 'Aman Khanna', need: 'Kothi · Sushant Lok', src: 'web' },
  { name: 'Sneha Arora', need: '3 BHK · Sector 56', src: 'portal' },
];
const STATUS = {
  new: ['st-new', 'New · assigned'],
  due: ['st-due', 'Follow-up due'],
  done: ['st-done', 'Site visit fixed'],
  esc: ['st-esc', 'Escalated'],
};

const initials = (s) => s.split(' ').map((w) => w[0]).join('');

const PAY_STEPS = [
  { t: 'Attendance synced', m: '248 employees' },
  { t: 'Leave & LOP applied', m: '31 adjustments' },
  { t: 'Salaries computed', m: '₹1.84 Cr gross' },
  { t: 'Statutory deductions', m: 'PF · ESI · PT · TDS' },
  { t: 'Payslips & bank file', m: 'ready to release' },
];
const COMP = ['PF ECR', 'ESIC', 'Prof. Tax', 'TDS 24Q', 'LWF', 'Bonus Act'];

const TAB_TICKS = 9; // ticks per tab while auto-playing
const TICK = 1250;

export default function HeroConsole() {
  const [tab, setTab] = useState('leads');
  const [auto, setAuto] = useState(true);
  const [tick, setTick] = useState(0);
  const [rows, setRows] = useState(() =>
    POOL.slice(0, 5).map((p, i) => ({ ...p, id: i, agent: AGENTS[i % 4], status: ['due', 'done', 'new', 'done', 'due'][i], when: ['in 12 min', 'Today 4:30', 'just now', 'Tomorrow', 'in 40 min'][i] }))
  );
  const [toasts, setToasts] = useState([]);
  const nextId = useRef(5);
  const reduce = useRef(false);

  useEffect(() => {
    reduce.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce.current) return;
    const id = setInterval(() => setTick((t) => t + 1), TICK);
    return () => clearInterval(id);
  }, []);

  // auto-switch tabs
  useEffect(() => {
    if (!auto || tick === 0 || tick % TAB_TICKS !== 0) return;
    setTab((t) => (t === 'leads' ? 'pay' : 'leads'));
  }, [tick, auto]);

  // lead feed animation
  useEffect(() => {
    if (tab !== 'leads' || tick === 0) return;
    const phase = tick % 3;
    if (phase === 1) {
      const p = POOL[nextId.current % POOL.length];
      const agent = AGENTS[nextId.current % AGENTS.length];
      const row = { ...p, id: nextId.current++, agent, status: 'new', when: 'just now', fresh: true };
      setRows((r) => [row, ...r.map((x) => ({ ...x, fresh: false }))].slice(0, 6));
      pushToast({
        key: row.id,
        ico: <Bolt size={14} />,
        bg: SOURCES[p.src].c,
        title: `New lead from ${SOURCES[p.src].label}`,
        sub: `${p.name} → auto-assigned to ${agent.n} in 3s`,
      });
    } else if (phase === 2) {
      const i = rows.findIndex((x) => x.status === 'due');
      if (i >= 0) {
        const esc = tick % 2 === 0;
        const target = rows[i];
        setRows((r) => r.map((x) => (x.id === target.id ? { ...x, status: esc ? 'esc' : 'done', when: esc ? 'TL notified' : 'Sat 11:00' } : x)));
        pushToast({
          key: 'f' + tick,
          ico: esc ? <Bell size={14} /> : <Check size={14} />,
          bg: esc ? '#ee4436' : '#0fb07a',
          title: esc ? 'Follow-up missed: escalated' : 'Follow-up done on time',
          sub: esc ? `${target.name} · team lead alerted` : `${target.name} · site visit booked`,
        });
      }
    } else {
      setRows((r) => {
        const i = r.findIndex((x) => x.status === 'new' && !x.fresh);
        if (i < 0) return r;
        const copy = r.slice();
        copy[i] = { ...copy[i], status: 'due', when: 'in 15 min' };
        return copy;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tick]);

  function pushToast(t) {
    setToasts((ts) => [...ts.filter((x) => x.key !== t.key).slice(-1), t]);
  }

  const payStep = tab === 'pay' ? Math.min(tick % TAB_TICKS, PAY_STEPS.length) : 0;
  const switchTo = (t) => {
    setAuto(false);
    setTab(t);
    setToasts([]);
  };

  const followOn = 92 + (tick % 5);
  const leaked = Math.max(0, 7 - Math.floor(tick / 6));

  return (
    <div className="console" role="img" aria-label="Animated preview of the Go Unmanual lead management and payroll products">
      <div className="console-chrome">
        <div className="lights">
          <i /> <i /> <i />
        </div>
        <div className="console-tabs" role="tablist">
          <button role="tab" aria-selected={tab === 'leads'} className={`console-tab${tab === 'leads' ? ' on' : ''}`} onClick={() => switchTo('leads')} style={{ '--dur': `${(TAB_TICKS * TICK) / 1000}s` }}>
            <Home size={15} /> Lead Management
            {auto && tab === 'leads' && <span className="prog" style={{ color: 'var(--ember)' }} />}
          </button>
          <button role="tab" aria-selected={tab === 'pay'} className={`console-tab${tab === 'pay' ? ' on' : ''}`} onClick={() => switchTo('pay')} style={{ '--dur': `${(TAB_TICKS * TICK) / 1000}s` }}>
            <Users size={15} /> HRMS &amp; Payroll
            {auto && tab === 'pay' && <span className="prog" style={{ color: 'var(--mint)' }} />}
          </button>
        </div>
        <span className="console-url">demo data · app.gounmanual</span>
      </div>

      {tab === 'leads' ? (
        <div className="console-body" key="leads">
          <aside className="cs-side">
            <h6>Pipeline</h6>
            <div className="cs-nav">
              <div className="on">All leads <span className="n">1,284</span></div>
              <div>New <span className="n">36</span></div>
              <div>Follow-up today <span className="n">58</span></div>
              <div>Site visits <span className="n">21</span></div>
              <div>Negotiation <span className="n">9</span></div>
              <div>Closed won <span className="n">14</span></div>
            </div>
            <h6>Sources</h6>
            <div className="cs-nav">
              {Object.values(SOURCES).map((s) => (
                <div key={s.label}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <i style={{ width: 7, height: 7, borderRadius: 2, background: s.c }} /> {s.label}
                  </span>
                  <span className="n">live</span>
                </div>
              ))}
            </div>
          </aside>
          <div className="cs-main">
            <div className="cs-head">
              <div>
                <div className="cs-title">Today&rsquo;s leads</div>
                <div className="cs-sub">Every enquiry, every follow-up, one place</div>
              </div>
              <span className="chip" style={{ background: 'var(--ember-soft)', color: '#c2410c' }}>
                <span className="dot pulse" /> Live
              </span>
            </div>
            <table className="cs-table">
              <thead>
                <tr>
                  <th>Lead</th>
                  <th className="hide-sm">Source</th>
                  <th className="hide-sm">Owner</th>
                  <th>Status</th>
                  <th className="hide-sm">Next action</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.id} className={r.fresh ? 'new' : ''}>
                    <td>
                      <div className="who">
                        <span className="av" style={{ background: '#2b303b' }}>{initials(r.name)}</span>
                        <span>
                          <b>{r.name}</b>
                          <small>{r.need}</small>
                        </span>
                      </div>
                    </td>
                    <td className="hide-sm">
                      <span className="src">
                        <i style={{ background: SOURCES[r.src].c }} /> {SOURCES[r.src].label}
                      </span>
                    </td>
                    <td className="hide-sm">
                      <div className="who">
                        <span className="av" style={{ background: r.agent.c, width: 22, height: 22, fontSize: 10 }}>{r.agent.n[0]}</span>
                        <span style={{ fontSize: 13 }}>{r.agent.n}</span>
                      </div>
                    </td>
                    <td>
                      <span className={`st ${STATUS[r.status][0]}`}>{STATUS[r.status][1]}</span>
                    </td>
                    <td className="hide-sm" style={{ color: 'var(--muted)', fontSize: 12.5 }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                        <Clock size={13} /> {r.when}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <aside className="cs-right">
            <div className="cs-card">
              <h6>First response</h6>
              <div className="big-num">3m 40s</div>
              <div className="cs-sub" style={{ marginTop: 6 }}>average, this week</div>
            </div>
            <div className="cs-card">
              <h6>Follow-ups on time</h6>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
                <span className="big-num" style={{ fontSize: 30 }}>{followOn}%</span>
                <span className="cs-sub">target 90%</span>
              </div>
              <div className="bar"><i style={{ width: `${followOn}%`, background: 'var(--mint)' }} /></div>
            </div>
            <div className="cs-card">
              <h6>Untouched leads (&gt;24h)</h6>
              <div className="big-num" style={{ color: leaked ? 'var(--ember)' : 'var(--mint)' }}>{leaked}</div>
              <div className="cs-sub" style={{ marginTop: 6 }}>{leaked ? 'owners being nudged' : 'nothing leaking'}</div>
            </div>
          </aside>
          <div className="toast-stack" aria-live="polite">
            {toasts.map((t) => (
              <div className="toast" key={t.key}>
                <span className="t-ico" style={{ background: t.bg }}>{t.ico}</span>
                <span>
                  {t.title}
                  <small>{t.sub}</small>
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="console-body" key="pay">
          <aside className="cs-side">
            <h6>People</h6>
            <div className="cs-nav">
              <div>Employees <span className="n">248</span></div>
              <div>Attendance <span className="n">96%</span></div>
              <div>Leave requests <span className="n">12</span></div>
              <div className="on">Payroll <span className="n">Nov</span></div>
              <div>Compliance <span className="n">6/6</span></div>
              <div>Staffing <span className="n">3 sites</span></div>
            </div>
          </aside>
          <div className="cs-main">
            <div className="cs-head">
              <div>
                <div className="cs-title">November payroll run</div>
                <div className="cs-sub">Attendance → payslip → compliance, in one pass</div>
              </div>
              <span className="chip" style={{ background: 'var(--mint-soft)', color: '#08744f' }}>
                {payStep >= PAY_STEPS.length ? 'Completed' : 'Running…'}
              </span>
            </div>
            <div className="steps">
              {PAY_STEPS.map((s, i) => (
                <div key={s.t} className={`step${i < payStep ? ' done' : ''}${i === payStep ? ' run' : ''}`}>
                  <span className="s-ico"><Check size={13} sw={2.6} /></span>
                  <b>{s.t}</b>
                  <span className="s-meta">{s.m}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 18 }}>
              <div className="cs-sub" style={{ marginBottom: 10, fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: '.07em', textTransform: 'uppercase' }}>
                Statutory compliance
              </div>
              <div className="comp-grid">
                {COMP.map((c, i) => (
                  <div key={c} className={`comp${payStep >= 4 || i < payStep - 1 ? ' on' : ''}`}>
                    {c} <span className="ok">✓ filed</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <aside className="cs-right">
            <div className="cs-card">
              <h6>Net payout</h6>
              <div className="big-num">₹1.52 Cr</div>
              <div className="cs-sub" style={{ marginTop: 6 }}>248 payslips</div>
            </div>
            <div className="cs-card">
              <h6>Attendance this month</h6>
              <div className="cal" style={{ gridTemplateColumns: 'repeat(10,1fr)', gap: 4 }}>
                {Array.from({ length: 30 }).map((_, i) => (
                  <i key={i} style={{ background: i % 7 === 6 ? '#eee' : i === 11 || i === 23 ? 'var(--amber)' : 'var(--mint)', opacity: i % 7 === 6 ? 1 : 0.85, borderRadius: 4 }} />
                ))}
              </div>
            </div>
            <div className="cs-card">
              <h6>Time to close payroll</h6>
              <div className="big-num" style={{ color: 'var(--mint)' }}>Hours</div>
              <div className="cs-sub" style={{ marginTop: 6 }}>not the last week of the month</div>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
