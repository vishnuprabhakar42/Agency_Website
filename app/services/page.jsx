import Link from 'next/link';
import { CtaFinal, SectionHead } from '@/components/Blocks';
import { Arrow, Bot, Chart, Code, Flow, Megaphone, Wrench, Home, Users } from '@/components/Icons';

export const metadata = {
  title: 'Services: AI, Custom Software, Automation | Go Unmanual',
  description:
    'Alongside our Lead Management and HRMS products, we build AI agents and chatbots, custom software, process automation, dashboards and digital marketing, delivered on time.',
};

const SERVICES = [
  {
    I: Bot, t: 'AI & AI agents', sub: 'Software that reads, decides and acts.',
    p: 'Reading documents, answering the same customer questions, sorting and entering data: this work eats hours every day, and ordinary software can’t handle the judgement it needs.',
    b: ['AI chatbots & support agents on WhatsApp and web', 'Document & data extraction: invoices, forms, KYC', 'Custom AI agents & copilots, with a human in control'],
  },
  {
    I: Code, t: 'Custom software', sub: 'Web, mobile & SaaS, built to fit.',
    p: 'Off-the-shelf tools force your business to work within their limits, and the gaps get filled with spreadsheets and workarounds that don’t scale.',
    b: ['Web & mobile apps, internal tools & customer portals', 'Full SaaS products, from idea to launch', 'APIs & integrations that connect your existing tools'],
  },
  {
    I: Flow, t: 'Process & workflow automation', sub: 'Fix the process, then automate it.',
    p: 'Automating a broken process only makes the waste run faster. Most teams have never mapped where their time actually goes.',
    b: ['Process mapping to surface bottlenecks & rework', 'Re-engineering: remove steps before automating', 'RPA for legacy systems with no API'],
  },
  {
    I: Chart, t: 'Data, dashboards & integrations', sub: 'Decide on facts, not guesses.',
    p: 'Your numbers live in five systems and nobody trusts the spreadsheet that tries to combine them.',
    b: ['Live BI dashboards', 'ERP / CRM / Tally / Zoho sync', 'Automated reports'],
  },
  {
    I: Megaphone, t: 'Digital marketing & growth', sub: 'Leads that turn into revenue.',
    p: 'Campaigns that chase clicks waste money. We run performance campaigns tied to real pipeline, and they plug straight into our Lead Management System.',
    b: ['Meta Ads & Google Ads', 'SEO & content', 'Analytics & attribution'],
  },
  {
    I: Wrench, t: 'Maintenance & support', sub: 'We don’t disappear after launch.',
    p: 'Software needs looking after. You get a dedicated team that keeps it fast, secure and growing.',
    b: ['Bug fixes & updates', 'Monitoring', 'New features'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="p-hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="p-hero-split">
            <div>
              <span className="eyebrow brand rv">Services</span>
              <h1 className="display rv" style={{ marginTop: 22, '--d': '.06s' }}>
                Custom work, built by a <span className="mark">product team.</span>
              </h1>
            </div>
            <div>
              <p className="lede rv" style={{ '--d': '.12s' }}>
                We build and run our own products, so we know what it takes to ship software people actually use. We bring that same discipline to
                custom work: understand the business, build what it needs, deliver on time, and stay on to support it.
              </p>
              <div className="btn-row rv" style={{ '--d': '.18s' }}>
                <Link href="/contact" className="btn">Get a free quote <Arrow size={16} className="arr" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="grid-2">
            {[
              ['/products/lead-management', Home, 'var(--ember)', 'Product', 'Lead Management System', 'For real estate: no more lead leakage.'],
              ['/products/hrms-payroll', Users, 'var(--mint)', 'Product', 'HRMS, Payroll & Compliance', 'For every business that runs payroll.'],
            ].map(([href, I, c, k, t, d]) => (
              <Link href={href} key={href} className="tile ink rv" style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <span className="ind-ico" style={{ background: c, flex: 'none' }}><I size={24} /></span>
                <div style={{ flex: 1 }}>
                  <div className="t-k" style={{ marginBottom: 4 }}>{k}</div>
                  <div style={{ fontWeight: 600, fontSize: 19, color: '#fff' }}>{t}</div>
                  <p style={{ fontSize: 14.5 }}>{d}</p>
                </div>
                <Arrow size={20} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <SectionHead eyebrow="What we build" title={<>Six ways we take <span className="thin">the manual out of your business.</span></>} />
          <div style={{ display: 'grid', gap: 16 }}>
            {SERVICES.map((s, i) => (
              <div key={s.t} className="tile rv split-2" style={{ padding: 'clamp(22px,3.4vw,44px)' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 }}>
                    <span className="ind-ico" style={{ background: 'var(--ink)', width: 48, height: 48, borderRadius: 14 }}><s.I size={22} /></span>
                    <span className="ind-n">0{i + 1}</span>
                  </div>
                  <h3 style={{ fontSize: 'clamp(26px,3vw,36px)' }}>{s.t}</h3>
                  <p style={{ fontWeight: 500, color: 'var(--ink)', marginBottom: 12 }}>{s.sub}</p>
                  <p>{s.p}</p>
                </div>
                <div style={{ alignSelf: 'end' }}>
                  <div className="t-k">What we build</div>
                  <ul className="tick-list" style={{ marginTop: 0 }}>
                    {s.b.map((x) => (
                      <li key={x} style={{ padding: '12px 0', borderTop: '1px solid var(--line)' }}>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--faint)', width: 20 }}>→</span>{x}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaFinal title={<>Not sure where<br />to <span className="ital c-brand">start?</span></>} lede="Tell us what you’re trying to build or fix. We’ll come back with a clear plan, a timeline and a fixed quote before you commit to anything." />
    </>
  );
}
