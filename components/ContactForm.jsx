'use client';
import { useEffect, useState } from 'react';
import { CONTACT, FORM_ENDPOINT } from '@/lib/site';
import { Arrow, Check } from './Icons';

const NEEDS = [
  ['leads', 'Lead Management System'],
  ['hr', 'HRMS & Payroll'],
  ['insurance', 'Insurance CRM & bots'],
  ['software', 'Custom software'],
  ['ai', 'AI & automation'],
  ['other', 'Something else'],
];
const SIZES = ['1–20', '20–100', '100–500', '500+'];

export default function ContactForm() {
  const [needs, setNeeds] = useState([]);
  const [size, setSize] = useState('');
  const [state, setState] = useState('idle'); // idle | sending | sent
  const [err, setErr] = useState('');
  const [bad, setBad] = useState('');
  const [first, setFirst] = useState('');

  // Pre-select a need from ?need=leads etc.
  useEffect(() => {
    const n = new URLSearchParams(window.location.search).get('need');
    if (n && NEEDS.some(([k]) => k === n)) setNeeds([n]);
  }, []);

  const toggle = (k) => setNeeds((cur) => (cur.includes(k) ? cur.filter((x) => x !== k) : [...cur, k]));

  async function submit(e) {
    e.preventDefault();
    setErr('');
    setBad('');
    const f = new FormData(e.currentTarget);
    const v = (k) => String(f.get(k) || '').trim();
    for (const k of ['name', 'email', 'company', 'message']) {
      if (!v(k)) {
        setBad(k);
        setErr('Please fill in all required fields.');
        return;
      }
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v('email'))) {
      setBad('email');
      setErr('Please enter a valid work email address.');
      return;
    }
    const needLabels = needs.map((k) => NEEDS.find(([x]) => x === k)[1]).join(', ');
    const payload = {
      name: v('name'),
      email: v('email'),
      company: v('company'),
      role: v('role'),
      phone: v('phone'),
      size,
      needs: needLabels,
      message: (needLabels ? `[${needLabels}] ` : '') + (size ? `[${size} people] ` : '') + v('message'),
      _subject: 'New enquiry: Go Unmanual website',
    };
    setState('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, { method: 'POST', body: JSON.stringify(payload) });
      if (!res.ok) throw new Error('send failed');
      setFirst(payload.name.split(' ')[0] || 'there');
      setState('sent');
    } catch {
      setState('idle');
      setErr(`Something went wrong sending your message. Please email us directly at ${CONTACT.email}.`);
    }
  }

  if (state === 'sent') {
    return (
      <div style={{ padding: '48px 0', textAlign: 'center' }}>
        <div style={{ width: 64, height: 64, borderRadius: 20, background: 'var(--mint)', color: '#fff', display: 'grid', placeItems: 'center', margin: '0 auto 24px' }}>
          <Check size={28} sw={2.4} />
        </div>
        <h3 className="h3">Request received.</h3>
        <p className="lede" style={{ margin: '12px auto 0' }}>
          Thanks, {first}. We&rsquo;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  const cls = (k) => `field${bad === k ? ' err' : ''}`;

  return (
    <form className="form" onSubmit={submit} noValidate>
      <div className="field">
        <label>What are you interested in?</label>
        <div className="opt-group">
          {NEEDS.map(([k, l]) => (
            <label className="opt" key={k}>
              <input type="checkbox" checked={needs.includes(k)} onChange={() => toggle(k)} />
              <span>{l}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="f-row">
        <div className={cls('name')}>
          <label htmlFor="f-name">Full name *</label>
          <input id="f-name" name="name" autoComplete="name" />
        </div>
        <div className={cls('email')}>
          <label htmlFor="f-email">Work email *</label>
          <input id="f-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" />
        </div>
      </div>
      <div className="f-row">
        <div className={cls('company')}>
          <label htmlFor="f-company">Company *</label>
          <input id="f-company" name="company" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="f-phone">Phone</label>
          <input id="f-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91" />
        </div>
      </div>
      <div className="f-row">
        <div className="field">
          <label htmlFor="f-role">Role</label>
          <input id="f-role" name="role" autoComplete="organization-title" />
        </div>
        <div className="field">
          <label>Team size</label>
          <div className="opt-group">
            {SIZES.map((s) => (
              <label className="opt" key={s}>
                <input type="radio" name="size" checked={size === s} onChange={() => setSize(s)} />
                <span>{s}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className={cls('message')}>
        <label htmlFor="f-msg">What do you want to fix or build? *</label>
        <textarea id="f-msg" name="message" placeholder="e.g. We get 600 leads a month from Meta and portals and lose track of follow-ups…" />
      </div>
      {err && <div className="form-err" role="alert">{err}</div>}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
        <button className="btn" type="submit" disabled={state === 'sending'} style={{ opacity: state === 'sending' ? 0.7 : 1 }}>
          {state === 'sending' ? 'Sending…' : 'Book my demo'} <Arrow size={16} className="arr" />
        </button>
        <span className="small">No spam. We only use this to reply to you.</span>
      </div>
    </form>
  );
}
