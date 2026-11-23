import Link from 'next/link';
import { CtaFinal, Faq, SectionHead } from '@/components/Blocks';
import { Arrow, Check, Home, Users } from '@/components/Icons';

export const metadata = {
  title: 'How We Engage: Products & Projects | Go Unmanual',
  description: 'Subscribe to our Lead Management or HRMS products, or engage us for custom builds: free consultation, pilot, full build or retainer.',
};

const MODELS = [
  ['01 · Discovery', 'Consultation', 'A short discovery call and a proposal with scope, timeline and a fixed quote. No obligation.', ['Understand your goals', 'Clear scope & timeline', 'Fixed quote you keep'], 'Free'],
  ['02 · MVP', 'Pilot build', 'A first module or MVP, built and shipped fast, so you can see it working before committing to more.', ['Live, working software', 'Fixed scope & timeline', 'Easy to expand later'], 'Fixed quote'],
  ['03 · Project', 'Full build', 'A complete product or multi-module build, designed, developed and delivered end to end, with training for your team.', ['Full design & build', 'On-time delivery', 'Team training', 'Full code & IP handover'], 'Custom quote'],
  ['04 · Ongoing', 'Retainer', 'Ongoing development, support and improvements from a dedicated team that keeps your software growing.', ['Fixes & updates', 'Monitoring', 'New features'], 'Monthly'],
];

const FAQ = [
  ['How are the products priced?', 'The Lead Management System and the HRMS are priced on your team size and the modules you use. We share a clear quote after a short demo, with no hidden setup surprises.'],
  ['How long does a custom project take?', 'It depends on scope. A small app or automation often ships in 2–6 weeks, and a full product in a few months. Your proposal includes a fixed timeline, and we deliver on it.'],
  ['Do we have to replace our existing systems?', 'No. We build around what you already use, like Tally, Zoho, your CRM, ERP or spreadsheets, and connect to them through APIs and integrations.'],
  ['Who owns the code on a custom build?', 'You do, 100%. All source code, IP and accounts are handed over to you on delivery.'],
  ['How do you handle security?', 'Every engagement is NDA-backed. We follow ISO 27001-aligned practices, with secure access controls and regular backups.'],
];

export default function PricingPage() {
  return (
    <>
      <section className="p-hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="wrap" style={{ position: 'relative' }}>
          <span className="eyebrow rv">How we engage</span>
          <h1 className="display rv" style={{ marginTop: 22, '--d': '.06s' }}>
            Start small. <span className="mark">Scale on proof.</span>
          </h1>
          <p className="lede rv" style={{ '--d': '.12s' }}>Subscribe to a product, or engage us for a custom build. Either way, you see it working before you commit.</p>
        </div>
      </section>

      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="grid-2">
            {[
              [Home, 'var(--ember)', 'btn-ember', 'Lead Management System', 'For realtors & developers', ['Meta Ads & consolidator API capture', 'Follow-up tracking & escalations', 'Leakage & agent reports', 'Onboarding & data import'], '/contact?need=leads'],
              [Users, 'var(--mint)', 'btn-mint', 'HRMS, Payroll & Compliance', 'For businesses of every size', ['Payroll, attendance & leave', 'PF, ESI, PT, TDS, LWF', 'Core HR & staffing', 'Migration & parallel run'], '/contact?need=hr'],
            ].map(([I, c, b, t, s, pts, href]) => (
              <div className="tile rv" key={t} style={{ padding: 'clamp(24px,3vw,40px)', display: 'flex', flexDirection: 'column' }}>
                <span className="ind-ico" style={{ background: c, marginBottom: 28 }}><I size={24} /></span>
                <div className="t-k">{s}</div>
                <h3>{t}</h3>
                <ul className="tick-list" style={{ marginBottom: 32 }}>
                  {pts.map((p) => <li key={p}><Check size={18} style={{ color: c }} />{p}</li>)}
                </ul>
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', paddingTop: 24, borderTop: '1px solid var(--line)' }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 18 }}>Subscription</div>
                    <div className="small">priced on team size</div>
                  </div>
                  <Link href={href} className={`btn ${b}`}>Get pricing <Arrow size={16} className="arr" /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section paper-2">
        <div className="wrap">
          <SectionHead eyebrow="Custom builds" title={<>Four ways to work with us <span className="thin">on custom software.</span></>} lede="Every project is scoped and priced to fit. You get a clear plan, timeline and fixed quote before you commit to anything." />
          <div className="grid-4">
            {MODELS.map(([k, t, d, pts, price], i) => (
              <div key={t} className={`tile rv${i === 2 ? ' ink' : ''}`} style={{ '--d': `${0.05 * i}s`, display: 'flex', flexDirection: 'column' }}>
                <div className="t-k">{k}{i === 2 && <span className="chip" style={{ height: 22, fontSize: 11, marginLeft: 'auto' }}>Most chosen</span>}</div>
                <h3>{t}</h3>
                <p>{d}</p>
                <ul className="tick-list" style={{ marginBottom: 24 }}>
                  {pts.map((p) => <li key={p} style={{ fontSize: 14 }}><Check size={16} />{p}</li>)}
                </ul>
                <div style={{ marginTop: 'auto', fontFamily: 'var(--display)', fontSize: 26, fontWeight: 600, letterSpacing: '-.03em' }}>{price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="s-head" style={{ alignItems: 'start' }}>
            <div>
              <span className="eyebrow rv">FAQ</span>
              <h2 className="h2 rv">Straight answers.</h2>
            </div>
            <div className="rv"><Faq items={FAQ} /></div>
          </div>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
