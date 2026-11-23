import Link from 'next/link';
import LeakPipe from '@/components/LeakPipe';
import LeakCalculator from '@/components/LeakCalculator';
import { CtaFinal, Faq, SectionHead } from '@/components/Blocks';
import { Arrow, Bell, Chart, Check, Clock, Doc, Funnel, Layers, Megaphone, Plug, Target, Users, Bolt, Shield } from '@/components/Icons';

export const metadata = {
  title: 'Lead Management System for Real Estate: Go Unmanual',
  description:
    'Stop lead leakage. Capture leads from Meta Ads and property consolidators via API, track every follow-up, and escalate misses automatically. Trusted by Opaks Realty, Gurugram.',
};

const FAQ = [
  ['Which lead sources can you connect?', 'Meta (Facebook & Instagram) Lead Ads and lead consolidators come in through APIs. Website and landing-page forms and bulk imports work too. If you get leads from another source, tell us and we will connect it.'],
  ['How quickly can we go live?', 'Setup means connecting your sources, importing your existing leads and configuring your follow-up rules and team structure. We give you a firm go-live date in the demo, once we have seen your setup.'],
  ['What happens to our existing leads in Excel or another CRM?', 'We import them, with history where it is available, so your team starts with the full pipeline on day one rather than an empty screen.'],
  ['Can it fit how our team already works?', 'Yes. Stages, assignment rules, follow-up timelines and escalation chains are set up around your process. You won’t have to change how you work to suit the software.'],
  ['Who owns the lead data?', 'You do. The data is yours, access is role-based, and you can export everything whenever you like.'],
];

export default function LeadManagementPage() {
  return (
    <>
      <section className="p-hero">
        <div className="hero-bg" style={{ background: 'radial-gradient(55% 55% at 85% 10%, rgba(255,90,38,.16), transparent 70%)' }} />
        <div className="hero-grid" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="crumbs rv"><Link href="/">Home</Link> / <span>Products</span> / <span style={{ color: 'var(--ink)' }}>Lead Management</span></div>
          <div className="p-hero-split">
            <div>
              <span className="eyebrow ember rv">Lead Management System · Built for real estate</span>
              <h1 className="display rv" style={{ marginTop: 22, '--d': '.06s' }}>
                Every lead <span className="mark ember">followed up.</span> Every time.
              </h1>
            </div>
            <div>
              <p className="lede rv" style={{ '--d': '.12s' }}>
                Bring in leads from Meta Ads and lead consolidators through APIs. Track every follow-up, send the right alerts at the right time,
                and see exactly where leads leak, so you can stop it.
              </p>
              <div className="btn-row rv" style={{ '--d': '.18s' }}>
                <Link href="/contact?need=leads" className="btn btn-ember">Book a demo <Arrow size={16} className="arr" /></Link>
                <Link href="#calculator" className="btn btn-ghost">Calculate your leakage</Link>
              </div>
            </div>
          </div>
          <div className="proof-card rv" style={{ marginTop: 64 }}>
            <img src="/clients/opaks-realty.png" alt="Opaks Realty" className="proof-logo" width="190" height="62" />
            <span className="sep" />
            <div className="proof-stat">
              <span className="num">15%</span>
              <p><b>less lead leakage at Opaks Realty, Gurugram</b>, through follow-up tracking on this system.</p>
            </div>
            <Link href="/case-studies#opaks" className="link-arrow">Case study <Arrow size={15} className="arr" /></Link>
          </div>
        </div>
      </section>

      {/* problem */}
      <section className="section dark spot noise">
        <div className="spot-glow" style={{ background: 'radial-gradient(closest-side, rgba(255,90,38,.3), transparent)', left: -400, bottom: -500 }} />
        <div className="wrap">
          <div className="spot-grid" style={{ alignItems: 'center' }}>
            <div>
              <span className="eyebrow ember rv">The problem</span>
              <h2 className="h2 rv" style={{ marginTop: 22, '--d': '.06s' }}>
                Leads don&rsquo;t die. <span className="c-ember">They leak.</span>
              </h2>
              <p className="lede rv" style={{ marginTop: 24, '--d': '.12s' }}>
                In real estate, buyers enquire with several brokers at once. The first one to call back with the right
                property usually wins. A lead that waits a few hours, or gets one call and is then forgotten, is money you already spent on ads and then
                gave to a competitor.
              </p>
              <p className="lede rv" style={{ marginTop: 16, '--d': '.16s' }}>
                The system plugs each of those leaks, one by one, as shown on the right.
              </p>
            </div>
            <div className="rv" style={{ '--d': '.1s' }}>
              <LeakPipe />
            </div>
          </div>
        </div>
      </section>

      {/* flow */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="How it works"
            tone="ember"
            title={<>From ad click to site visit, <span className="thin">with nothing slipping through.</span></>}
            lede="Leads stream in from your sources, get assigned in seconds, and sit in a follow-up loop that only ends when the lead is won or consciously marked lost."
          />
          <div className="flow rv">
            <div className="flow-col">
              {[
                [Megaphone, 'Meta Lead Ads', 'var(--brand)'],
                [Layers, 'Lead consolidators (API)', 'var(--violet)'],
                [Doc, 'Website & landing pages', 'var(--mint)'],
                [Users, 'Walk-ins & referrals', 'var(--amber)'],
              ].map(([I, t, c]) => (
                <div className="flow-node" key={t}>
                  <span className="fi" style={{ background: c, color: '#fff' }}><I size={16} /></span>
                  {t}
                </div>
              ))}
            </div>
            <div className="flow-line" />
            <div className="flow-core">
              <span className="eyebrow ember" style={{ marginBottom: 14 }}>Go Unmanual LMS</span>
              <h4>One pipeline. One owner per lead. One next step.</h4>
              <div>
                {['De-duplication', 'Auto-assignment', 'Follow-up scheduler', 'Reminders', 'Escalations', 'Activity log', 'Reports'].map((c) => (
                  <span className="chip" key={c}>{c}</span>
                ))}
              </div>
            </div>
            <div className="flow-line" />
            <div className="flow-col">
              {[
                [Bell, 'Agent alerted instantly', 'var(--ember)'],
                [Clock, 'Follow-ups on schedule', 'var(--ember)'],
                [Target, 'Site visit booked', 'var(--ember)'],
                [Check, 'Deal closed', 'var(--mint)'],
              ].map(([I, t, c]) => (
                <div className="flow-node" key={t}>
                  <span className="fi" style={{ background: c, color: '#fff' }}><I size={16} /></span>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* features */}
      <section className="section-tight paper-2">
        <div className="wrap">
          <SectionHead eyebrow="What's inside" tone="ember" title={<>Everything a real-estate sales team needs. <span className="thin">Nothing it doesn&rsquo;t.</span></>} />
          <div className="grid-3">
            {[
              [Plug, 'API-connected lead capture', 'Meta Ads and consolidators push leads straight in. No more downloading CSVs every morning.'],
              [Bolt, 'Instant assignment', 'Assign by project, location, budget or round-robin, so the right agent gets the lead in seconds.'],
              [Clock, 'Follow-up tracking', 'Every lead carries its next action and due time. Overdue follow-ups are flagged, never hidden.'],
              [Bell, 'Robust notifications', 'New-lead alerts, reminders before a follow-up is due, and escalations when one is missed.'],
              [Funnel, 'Pipeline & stages', 'Track each lead from new to contacted, site visit, negotiation and closed, built around your own stages.'],
              [Chart, 'Leakage & performance reports', 'See response time, follow-up compliance and conversion by agent, project and source.'],
              [Users, 'Team & role control', 'Separate views for agents, team leads and owners, so everyone sees exactly what they should.'],
              [Shield, 'Leads stay with the company', 'Full call and visit history lives on the lead. When an agent leaves, reassign in a click.'],
              [Target, 'Source ROI', 'Find out which campaigns and portals bring deals, not just enquiries, and shift your budget to match.'],
            ].map(([I, t, d], i) => (
              <div className="tile rv" key={t} style={{ '--d': `${0.04 * (i % 3)}s` }}>
                <span className="feat-ico" style={{ background: 'var(--ember-soft)', color: 'var(--ember)', marginBottom: 24 }}><I size={20} /></span>
                <h3 style={{ fontSize: 22 }}>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* calculator */}
      <section className="section" id="calculator">
        <div className="wrap">
          <SectionHead
            eyebrow="Do the maths"
            tone="ember"
            title={<>Even a small leak is a <span className="c-ember">big number.</span></>}
            lede="A rough estimate of the revenue you lose to leads that never got a proper follow-up. Your real numbers come out in the demo."
          />
          <div className="rv"><LeakCalculator /></div>
        </div>
      </section>

      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="s-head" style={{ alignItems: 'start' }}>
            <div>
              <span className="eyebrow ember rv">FAQ</span>
              <h2 className="h2 rv">Questions realtors ask us.</h2>
            </div>
            <div className="rv"><Faq items={FAQ} /></div>
          </div>
        </div>
      </section>

      <CtaFinal title={<>Stop paying for leads<br />you <span className="ital c-ember">never follow up.</span></>} lede="See the Lead Management System on your own lead flow in a 30-minute demo." />
    </>
  );
}
