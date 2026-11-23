import Link from 'next/link';
import { CtaFinal, SectionHead } from '@/components/Blocks';
import { Arrow, Bot, Building, Check, Home, Umbrella, Users, Flow, Chart, Doc, Bell } from '@/components/Icons';

export const metadata = {
  title: 'Industries: Real Estate, HR & Payroll, Insurance | Go Unmanual',
  description:
    'Lead management for realtors, HRMS and payroll for businesses of every size, and AI-driven CRM, agent management and bots for insurance brokers and consolidators.',
};

function Industry({ id, n, tone, I, eyebrow, title, lede, pains, gets, cta, href, dark, extra }) {
  return (
    <section id={id} className={`section${dark ? ' dark spot noise' : ''}`} style={{ scrollMarginTop: 80 }}>
      {dark && <div className="dot-grid" />}
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="spot-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }} className="rv">
              <span className="ind-ico" style={{ background: `var(--${tone})` }}><I size={26} /></span>
              <span className="spot-num" style={{ color: dark ? undefined : 'var(--muted)' }}>INDUSTRY {n} / 03</span>
            </div>
            <span className={`eyebrow ${tone} rv`} style={{ marginTop: 28 }}>{eyebrow}</span>
            <h2 className="h2 rv" style={{ marginTop: 20 }}>{title}</h2>
            <p className="lede rv" style={{ marginTop: 22 }}>{lede}</p>
            <div className="btn-row rv" style={{ marginTop: 32 }}>
              <Link href={href} className={`btn btn-${tone === 'violet' ? 'brand' : tone}`} style={tone === 'violet' ? { '--bg': 'var(--violet)' } : undefined}>
                {cta} <Arrow size={16} className="arr" />
              </Link>
            </div>
            {extra}
          </div>
          <div className="rv" style={{ '--d': '.08s' }}>
            <div className={dark ? 'leak' : 'tile'} style={{ padding: 28 }}>
              <div className="t-k" style={{ color: dark ? 'var(--d-muted)' : undefined }}>What&rsquo;s hurting</div>
              <ul style={{ display: 'grid', gap: 10, marginBottom: 28 }}>
                {pains.map((p) => (
                  <li key={p} style={{ display: 'flex', gap: 10, fontSize: 15, color: dark ? 'var(--d-text)' : 'var(--text)' }}>
                    <span style={{ color: 'var(--red)', fontWeight: 700 }}>×</span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="t-k" style={{ color: dark ? 'var(--d-muted)' : undefined }}>What we deploy</div>
              <div style={{ display: 'grid', gap: 10 }}>
                {gets.map(([GI, t, d]) => (
                  <div key={t} style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 14, padding: 14, borderRadius: 14, background: dark ? 'rgba(255,255,255,.05)' : 'var(--paper)' }}>
                    <span className="feat-ico" style={{ width: 40, height: 40, background: `var(--${tone})`, color: '#fff' }}><GI size={18} /></span>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 15, color: dark ? '#fff' : 'var(--ink)' }}>{t}</div>
                      <div style={{ fontSize: 14, color: dark ? 'var(--d-text)' : 'var(--text)', marginTop: 2 }}>{d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function IndustriesPage() {
  return (
    <>
      <section className="p-hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="wrap" style={{ position: 'relative' }}>
          <span className="eyebrow rv">Industries</span>
          <h1 className="display rv" style={{ marginTop: 22, '--d': '.06s' }}>
            Deep in three industries. <span className="thin">Useful in all of them.</span>
          </h1>
          <p className="lede rv" style={{ '--d': '.12s' }}>
            We focus where we have built real products and seen real results: real estate, HR and payroll, and insurance distribution.
            The same team also builds for every other industry.
          </p>
          <div className="also rv" style={{ marginTop: 36 }}>
            <a href="#real-estate" className="chip" style={{ height: 40, padding: '0 16px', fontSize: 14.5 }}><span className="dot" style={{ color: 'var(--ember)' }} /> Real estate</a>
            <a href="#hr" className="chip" style={{ height: 40, padding: '0 16px', fontSize: 14.5 }}><span className="dot" style={{ color: 'var(--mint)' }} /> Every business with a payroll</a>
            <a href="#insurance" className="chip" style={{ height: 40, padding: '0 16px', fontSize: 14.5 }}><span className="dot" style={{ color: 'var(--violet)' }} /> Insurance brokers &amp; consolidators</a>
            <a href="#others" className="chip" style={{ height: 40, padding: '0 16px', fontSize: 14.5 }}>Everyone else</a>
          </div>
        </div>
      </section>

      <Industry
        id="real-estate"
        n="01"
        tone="ember"
        I={Home}
        dark
        eyebrow="Realtors, brokers & developers"
        title={<>Protect every lead <span className="c-ember">you paid for.</span></>}
        lede="Real-estate businesses spend heavily on Meta Ads and portals, then lose enquiries to slow callbacks and forgotten follow-ups. Our Lead Management System puts every lead in one place, makes sure someone follows up, and shows you exactly where leads leak."
        pains={['Leads spread across portals, Meta, WhatsApp and Excel', 'Callbacks happen hours late, or not at all', 'No idea which agent dropped which lead', 'Agents leave and take their pipeline with them']}
        gets={[
          [Flow, 'Lead Management System', 'Meta Ads + consolidator APIs, one pipeline'],
          [Bell, 'Follow-up tracking & alerts', 'Reminders, escalations, nothing forgotten'],
          [Chart, 'Leakage reporting', 'Response time and follow-up discipline per agent'],
        ]}
        cta="See Lead Management"
        href="/products/lead-management"
        extra={
          <div className="rv" style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 20, padding: 20, borderRadius: 20, background: '#fff', maxWidth: 480 }}>
            <img src="/clients/opaks-realty.png" alt="Opaks Realty" style={{ width: 130 }} />
            <div style={{ color: 'var(--ink)', fontSize: 14.5, lineHeight: 1.45 }}>
              <b style={{ fontFamily: 'var(--display)', fontSize: 28, color: 'var(--ember)', letterSpacing: '-.03em' }}>15%</b> less lead leakage at Opaks Realty, Gurugram.
            </div>
          </div>
        }
      />

      <Industry
        id="hr"
        n="02"
        tone="mint"
        I={Building}
        eyebrow="Small, mid & large businesses"
        title={<>Payroll, attendance and compliance, <span className="c-mint">finally in one system.</span></>}
        lede="It doesn’t matter whether you run a factory, a hospital, a retail chain or a staffing agency. If you pay people, you deal with attendance, payroll, compliance and HR paperwork. Our HRMS brings all of it together."
        pains={['Payroll rebuilt in Excel every month', 'Attendance and leave fixed by hand before payroll', 'Compliance deadlines handled by a stressed consultant', 'Contract staff across sites, tracked on paper']}
        gets={[
          [Users, 'HRMS & Payroll', 'Payroll, attendance, leave and core HR in one system'],
          [Doc, 'Compliance management', 'PF, ESI, PT, TDS, LWF and registers'],
          [Building, 'Staffing', 'Multi-site deployment and client billing'],
        ]}
        cta="See HRMS & Payroll"
        href="/products/hrms-payroll"
      />

      <Industry
        id="insurance"
        n="03"
        tone="violet"
        I={Umbrella}
        dark
        eyebrow="Insurance brokers & consolidators"
        title={<>An AI-driven CRM <span className="c-violet">that does the chasing.</span></>}
        lede="Brokers and consolidators run large agent networks, high policy volumes and constant renewals, mostly on spreadsheets and WhatsApp. We build AI-driven CRMs, agent-management systems and bots that run the process for you."
        pains={['Renewals missed because nobody followed up', 'Agent and POSP networks managed on spreadsheets', 'Quote, proposal and claim steps chased by hand', 'Customers waiting hours for simple answers']}
        gets={[
          [Flow, 'AI-driven CRM & process management', 'Leads, quotes, policies and renewals as one workflow'],
          [Users, 'Agent management', 'Onboarding, hierarchy, targets, payouts and performance'],
          [Bot, 'AI bots', 'Answer, qualify and follow up with customers 24×7'],
        ]}
        cta="Talk to us about insurance"
        href="/contact?need=insurance"
      />

      <section id="others" className="section paper-2" style={{ scrollMarginTop: 80 }}>
        <div className="wrap">
          <SectionHead
            eyebrow="Every other industry"
            title={<>Not on the list? <span className="thin">We still build for you.</span></>}
            lede="The same team that builds our products takes on custom software, AI and automation work for any industry."
          />
          <div className="grid-3">
            {[
              ['Manufacturing', 'Production dashboards, quality tracking, plant-floor apps.'],
              ['Logistics', 'Order-to-dispatch workflows, tracking, billing automation.'],
              ['Healthcare', 'Patient intake, billing and records automation.'],
              ['Financial services', 'Loan ops, KYC extraction, AI-assisted underwriting.'],
              ['Retail & D2C', 'Inventory, order and customer-support automation.'],
              ['Professional services', 'Time-tracking, billing and client portals.'],
            ].map(([t, d], i) => (
              <Link href="/services" className="tile rv" key={t} style={{ '--d': `${0.04 * (i % 3)}s` }}>
                <h3 style={{ fontSize: 22, display: 'flex', justifyContent: 'space-between' }}>{t} <Arrow size={18} /></h3>
                <p>{d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
