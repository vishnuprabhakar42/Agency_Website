import { CtaFinal, SectionHead } from '@/components/Blocks';
import { Shield } from '@/components/Icons';

export const metadata = {
  title: 'About: Go Unmanual',
  description: 'Go Unmanual is a product and engineering team building lead management, HRMS and AI software for Indian businesses.',
};

export default function AboutPage() {
  return (
    <>
      <section className="p-hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="wrap" style={{ position: 'relative' }}>
          <span className="eyebrow rv">About Go Unmanual</span>
          <h1 className="display rv" style={{ marginTop: 22, '--d': '.06s', maxWidth: '17ch' }}>
            We build the software businesses actually <span className="mark">run on.</span>
          </h1>
          <p className="lede rv" style={{ '--d': '.12s' }}>
            We started by building custom software for Indian businesses. We kept seeing the same expensive problems: leads leaking out
            of sales teams, and HR teams buried under payroll and compliance. So we turned those fixes into products.
          </p>
        </div>
      </section>

      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="trio">
            {[
              ['01', 'Scope before we build', 'You get a clear plan, timeline and fixed quote before any work starts. No surprises, no scope creep.'],
              ['02', 'Deliver on time', 'We build in short sprints and ship on the date we promised. You see working software every week.'],
              ['03', 'You stay in control', 'Your data is always yours. On custom builds, the source code and IP are documented and handed over. No lock-in.'],
            ].map(([n, t, d], i) => (
              <div className="tile rv" key={n} style={{ '--d': `${0.06 * i}s` }}>
                <div className="big-idx">{n}</div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark spot noise">
        <div className="dot-grid" />
        <div className="wrap" style={{ position: 'relative' }}>
          <SectionHead eyebrow="Timeline" tone="brand" title={<>From a small team <span className="thin">to two products.</span></>} />
          <div className="grid-4">
            {[
              ['2023', 'Go Unmanual started', 'A small team of engineers, tired of slow, overpriced software projects.'],
              ['2024', 'First clients shipped', 'Custom apps and automations, delivered on time for Indian businesses.'],
              ['2025', 'AI & growth added', 'AI agents, dashboards and digital marketing, all under one roof.'],
              ['Today', 'Two products live', 'Lead Management for real estate and HRMS & Payroll, with Opaks Realty among our clients.'],
            ].map(([y, t, d], i) => (
              <div key={y} className="rv" style={{ '--d': `${0.06 * i}s`, borderTop: '1px solid var(--d-line-2)', paddingTop: 22 }}>
                <div style={{ fontFamily: 'var(--display)', fontSize: 44, fontWeight: 600, letterSpacing: '-.04em', color: i === 3 ? 'var(--brand-2)' : '#fff' }}>{y}</div>
                <div style={{ fontWeight: 600, fontSize: 17, color: '#fff', margin: '12px 0 6px' }}>{t}</div>
                <p style={{ fontSize: 15 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Leadership" title={<>The people accountable <span className="thin">for your outcome.</span></>} />
          <div className="team">
            {[
              ['GB', 'Garvit Bhardwaj', 'Director, Product & Strategy', 'Owns the product vision and the strategy behind every engagement, making sure what we build moves your numbers.', 'var(--brand)'],
              ['VP', 'Vishnu Prabhakar', 'Director, Tech & Operations', 'Runs engineering and operations, so our systems ship fast, stay secure and scale without drama.', 'var(--ink)'],
            ].map(([i, n, r, d, c]) => (
              <div className="tile person rv" key={n}>
                <span className="pa" style={{ background: c }}>{i}</span>
                <div>
                  <h3 style={{ fontSize: 26 }}>{n}</h3>
                  <div className="t-k" style={{ marginBottom: 12 }}>{r}</div>
                  <p>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight paper-2">
        <div className="wrap">
          <div className="split-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="eyebrow rv">Security</span>
              <h2 className="h2 rv" style={{ marginTop: 22 }}>Security isn&rsquo;t a feature. <span className="thin">It&rsquo;s the foundation.</span></h2>
            </div>
            <div className="grid-3 sec-grid rv">
              {['NDA-backed', 'ISO 27001 aligned', 'Role-based access', 'Regular backups', 'Your data, exportable', 'Code & IP yours'].map((s) => (
                <div key={s} className="tile" style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <Shield size={20} style={{ color: 'var(--mint)' }} />
                  <span style={{ fontWeight: 600, fontSize: 14.5 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaFinal title={<>Want a team that<br /><span className="ital c-brand">actually delivers?</span></>} />
    </>
  );
}
