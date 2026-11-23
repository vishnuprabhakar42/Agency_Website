'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Arrow } from './Icons';

const inr = (n) => '₹' + Math.round(n).toLocaleString('en-IN');
const crore = (n) => (n >= 1e7 ? `₹${(n / 1e7).toFixed(2)} Cr` : n >= 1e5 ? `₹${(n / 1e5).toFixed(1)} L` : inr(n));

function Range({ label, value, set, min, max, step, fmt }) {
  const p = ((value - min) / (max - min)) * 100;
  return (
    <div className="range">
      <label>
        {label}
        <output>{fmt ? fmt(value) : value}</output>
      </label>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(+e.target.value)} style={{ '--p': `${p}%` }} aria-label={label} />
    </div>
  );
}

export default function LeakCalculator() {
  const [leads, setLeads] = useState(400);
  const [leak, setLeak] = useState(20);
  const [conv, setConv] = useState(2);
  const [comm, setComm] = useState(150000);

  const leakedLeads = (leads * leak) / 100;
  const lostDeals = (leakedLeads * conv) / 100;
  const lostMonth = lostDeals * comm;
  const lostYear = lostMonth * 12;

  return (
    <div className="calc">
      <div className="calc-in">
        <div>
          <span className="eyebrow ember">Leak calculator</span>
          <h3 className="h3" style={{ marginTop: 14 }}>What is lead leakage costing you?</h3>
          <p className="small" style={{ marginTop: 8 }}>Move the sliders to match your business. Everything is calculated in your browser.</p>
        </div>
        <Range label="Leads per month" value={leads} set={setLeads} min={50} max={3000} step={50} />
        <Range label="Leads that leak (no timely follow-up)" value={leak} set={setLeak} min={5} max={50} step={1} fmt={(v) => v + '%'} />
        <Range label="Lead-to-deal conversion" value={conv} set={setConv} min={0.5} max={10} step={0.5} fmt={(v) => v + '%'} />
        <Range label="Average commission per deal" value={comm} set={setComm} min={25000} max={1000000} step={25000} fmt={inr} />
      </div>
      <div className="calc-out">
        <span className="eyebrow" style={{ color: 'var(--d-muted)' }}>Revenue slipping away</span>
        <div className="calc-big">{crore(lostYear)}</div>
        <div style={{ color: 'var(--d-text)', fontSize: 15 }}>estimated per year, from leads that were never followed up</div>
        <div className="calc-rows">
          <div>
            Leaked leads / month <b>{Math.round(leakedLeads).toLocaleString('en-IN')}</b>
          </div>
          <div>
            Deals lost / month <b>{lostDeals.toFixed(1)}</b>
          </div>
          <div>
            Commission lost / month <b>{crore(lostMonth)}</b>
          </div>
        </div>
        <Link href="/contact?need=leads" className="btn btn-ember" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
          Plug the leaks <Arrow size={16} className="arr" />
        </Link>
      </div>
    </div>
  );
}
