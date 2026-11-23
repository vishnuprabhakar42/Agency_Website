import Link from 'next/link';
import { CtaFinal, SectionHead } from '@/components/Blocks';
import { Arrow, Check } from '@/components/Icons';

export const metadata = {
  title: 'Work & Case Studies: Go Unmanual',
  description: 'How Opaks Realty, Gurugram cut lead leakage by 15% with our Lead Management System, plus selected custom software, AI and automation projects.',
};

const MORE = [
  ['Financial services', '₹1.4 Cr', 'saved a year', 'An NBFC lender cut loan approval from 3 days to 20 minutes.', 'An AI-assisted underwriting workflow, with a human approving every sanction.'],
  ['Logistics', '−90%', 'errors', 'A logistics company put order-to-dispatch live in 6 weeks.', 'One workflow across three systems, with human approval only above ₹5L.'],
  ['Manufacturing', '−40%', 'manual handling', 'A manufacturer replaced 14 spreadsheets with one live dashboard.', 'Production and quality data in one place, with AI defect classification.'],
  ['Healthcare', '1,800h', 'saved', 'A clinic chain automated patient intake and billing.', 'Intake forms, records and billing connected end to end.'],
  ['Professional services', '+22%', 'billable time', 'A consulting firm recovered billable hours it had been losing.', 'A custom time-tracking and billing tool closed the gap between work done and work invoiced.'],
  ['SaaS & tech', '3×', 'faster', 'An e-commerce platform deflected support tickets 3× faster.', 'An AI chatbot with guard-railed auto-resolution handled the repetitive 60% of queries.'],
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="p-hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="wrap" style={{ position: 'relative' }}>
          <span className="eyebrow rv">Work</span>
          <h1 className="display rv" style={{ marginTop: 22, '--d': '.06s' }}>
            Outcomes, with the <span className="mark ember">receipts.</span>
          </h1>
          <p className="lede rv" style={{ '--d': '.12s' }}>We measure ourselves by results: leads saved, hours returned and costs removed.</p>
        </div>
      </section>

      <section id="opaks" className="section-tight" style={{ paddingTop: 0, scrollMarginTop: 80 }}>
        <div className="wrap">
          <div className="case rv">
            <div className="case-l">
              <span className="eyebrow ember" style={{ marginBottom: 24 }}>Featured · Real estate · Lead Management System</span>
              <img src="/clients/opaks-realty.png" alt="Opaks Realty" className="case-logo" width="220" height="72" />
              <h2 className="h3" style={{ fontSize: 'clamp(28px,3vw,40px)' }}>
                How Opaks Realty, Gurugram cut lead leakage by 15%.
              </h2>
              <div className="split-2" style={{ marginTop: 32, gap: 28 }}>
                <div>
                  <div className="t-k" style={{ fontFamily: 'var(--mono)', fontSize: 11.5, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8 }}>Challenge</div>
                  <p style={{ fontSize: 15, color: 'var(--text)' }}>
                    Opaks Realty advises buyers on plots, builder floors and homes across Gurugram. Enquiries came from several channels, and
                    follow-ups depended on individual agents remembering them. Leads they had already paid for were slipping away.
                  </p>
                </div>
                <div>
                  <div className="t-k" style={{ fontFamily: 'var(--mono)', fontSize: 11.5, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8 }}>Solution</div>
                  <p style={{ fontSize: 15, color: 'var(--text)' }}>
                    We rolled out our Lead Management System, with every lead in one pipeline, an owner and a next step for each, and follow-up
                    tracking with reminders and escalations so nothing went quiet.
                  </p>
                </div>
              </div>
              <ul className="tick-list">
                <li><Check size={18} />Centralised lead capture</li>
                <li><Check size={18} />Follow-up tracking with reminders & escalations</li>
                <li><Check size={18} />Visibility into every agent&rsquo;s follow-up discipline</li>
              </ul>
            </div>
            <div className="case-r noise">
              <div className="dot-grid" />
              <span className="eyebrow" style={{ color: 'var(--d-muted)', position: 'relative' }}>Result</span>
              <div style={{ position: 'relative' }}>
                <div className="case-num">15<sup>%</sup></div>
                <p style={{ fontSize: 20, color: '#fff', marginTop: 18, maxWidth: '22ch', lineHeight: 1.35, fontWeight: 500 }}>
                  less lead leakage, through follow-up tracking.
                </p>
              </div>
              <Link href="/products/lead-management" className="btn btn-ember" style={{ alignSelf: 'flex-start', position: 'relative' }}>
                See the product <Arrow size={16} className="arr" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section paper-2">
        <div className="wrap">
          <SectionHead eyebrow="Custom engagements" title={<>More work, <span className="thin">across industries.</span></>} lede="Selected custom software, AI and automation projects. Client names are withheld under NDA." />
          <div className="grid-3">
            {MORE.map(([ind, v, k, t, d], i) => (
              <div className="tile rv" key={t} style={{ '--d': `${0.04 * (i % 3)}s`, display: 'flex', flexDirection: 'column' }}>
                <div className="t-k">{ind}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 18 }}>
                  <span style={{ fontFamily: 'var(--display)', fontSize: 52, fontWeight: 600, letterSpacing: '-.05em', lineHeight: 1 }}>{v}</span>
                  <span className="small">{k}</span>
                </div>
                <h3 style={{ fontSize: 21 }}>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaFinal title={<>Your result could be<br />the <span className="ital c-brand">next one here.</span></>} />
    </>
  );
}
