import Link from 'next/link';
import HeroConsole from '@/components/HeroConsole';
import HeroTilt from '@/components/HeroTilt';
import CountUp from '@/components/CountUp';
import Manifesto from '@/components/Manifesto';
import ProductStory from '@/components/ProductStory';
import LeakPipe from '@/components/LeakPipe';
import { CtaFinal, SectionHead } from '@/components/Blocks';
import {
  Arrow, ArrowUR, Bell, Bot, Building, Calendar, Chart, Check, Clock, Code, Flow, Funnel,
  Home as HomeIco, Megaphone, Plug, Shield, Umbrella, Users, Wallet, Wrench, Sparkle,
} from '@/components/Icons';

export const metadata = {
  title: 'Go Unmanual: Lead Management for Real Estate, HRMS & Payroll',
};

const SOURCES = ['Social media lead ads', 'Property portals & consolidators (API)', 'Website forms', 'Landing pages', 'Bulk import', 'Walk-ins', 'Channel partners', 'Referrals'];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="aurora" aria-hidden="true">
          <i className="a1" />
          <i className="a2" />
          <i className="a3" />
        </div>
        <div className="hero-grid" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="hero-top">
            <div>
              <div className="status-pill intro">
                <span className="sp-tag">NEW</span> Trusted by Opaks Realty, Gurugram
              </div>
              <h1 className="display words">
                <span className="w" style={{ '--i': 0 }}>Never</span> <span className="w" style={{ '--i': 1 }}>lose</span>{' '}
                <span className="w" style={{ '--i': 2 }}>a</span>{' '}
                <span className="w" style={{ '--i': 3 }}><span className="mark ember">lead.</span></span>
                <br />
                <span className="w" style={{ '--i': 4 }}>Never</span> <span className="w" style={{ '--i': 5 }}>miss</span>{' '}
                <span className="w" style={{ '--i': 6 }}>a</span>{' '}
                <span className="w" style={{ '--i': 7 }}><span className="mark mint">payday.</span></span>
              </h1>
            </div>
            <div className="hero-side">
              <p className="lede intro" style={{ '--d': '.55s' }}>
                Two products that run the busiest parts of your business: a <b>Lead Management System</b> that stops real-estate lead
                leakage, and an <b>HRMS</b> that handles payroll, attendance, compliance and staffing in one place.
              </p>
              <div className="btn-row hero-ctas intro" style={{ '--d': '.68s' }}>
                <Link href="/contact" className="btn">
                  Book a demo <Arrow size={16} className="arr" />
                </Link>
                <Link href="#products" className="btn btn-ghost">
                  Explore products
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-stage">
            <HeroTilt>
              <HeroConsole />
            </HeroTilt>
          </div>
        </div>
      </section>

      {/* ============ PROOF ============ */}
      <section className="proof">
        <div className="wrap">
          <div className="proof-card rv">
            <img src="/clients/opaks-realty.png" alt="Opaks Realty" className="proof-logo" width="190" height="62" />
            <span className="sep" />
            <div className="proof-stat">
              <span className="num"><CountUp to={15} suffix="%" /></span>
              <p>
                <b>less lead leakage at Opaks Realty, Gurugram</b>, after moving every enquiry and follow-up onto our Lead Management
                System.
              </p>
            </div>
            <Link href="/case-studies#opaks" className="link-arrow">
              Read the story <Arrow size={15} className="arr" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ MANIFESTO ============ */}
      <section className="section manifesto-wrap">
        <div className="wrap">
          <span className="eyebrow rv">Why we exist</span>
          <Manifesto
            parts={[
              ['Every'],
              ['lead', 'ember'],
              ['you don’t follow up was already paid for. Every'],
              ['payroll', 'mint'],
              ['done by hand is a week your team never gets back. We build software that makes sure'],
              ['neither happens again.', 'ink'],
            ]}
          />
        </div>
      </section>

      {/* ============ PINNED PRODUCT STORY ============ */}
      <ProductStory />

      {/* ============ PRODUCT 01: LEADS ============ */}
      <section id="products" className="section dark spot noise">
        <div className="spot-glow" style={{ background: 'radial-gradient(closest-side, rgba(255,90,38,.35), transparent)', right: -300, top: -300 }} />
        <div className="dot-grid" />
        <div className="wrap">
          <div className="spot-grid">
            <div>
              <div className="spot-num rv">PRODUCT 01 / 02</div>
              <span className="eyebrow ember rv" style={{ marginTop: 22, '--d': '.04s' }}>
                Lead Management System · Real estate
              </span>
              <h2 className="h2 rv" style={{ marginTop: 22, '--d': '.08s' }}>
                Your ads bring the leads.
                <br />
                <span className="c-ember">We make sure none of them leak.</span>
              </h2>
              <p className="lede rv" style={{ marginTop: 24, '--d': '.12s' }}>
                Realtors pay for every enquiry, then lose a big share of them to slow callbacks and forgotten follow-ups. Our system catches every
                lead, puts an owner on it in seconds, and keeps following up until the lead is closed or marked lost.
              </p>
              <div className="feat-list">
                {[
                  [Plug, 'Every source, one pipeline', 'Meta Ads and lead consolidators come in through APIs, so you stop copying leads out of spreadsheets.'],
                  [Clock, 'Follow-up tracking that sticks', 'Every call, visit and next step gets scheduled, reminded and logged against the lead.'],
                  [Bell, 'Robust notifications & escalation', 'Instant alerts on new leads. Missed follow-ups go to the team lead automatically.'],
                  [Chart, 'Leakage you can actually see', 'See response time, follow-up discipline and source ROI for each agent and each campaign.'],
                ].map(([I, t, d], i) => (
                  <div className="feat rv" key={t} style={{ '--d': `${0.05 * i}s` }}>
                    <span className="feat-ico"><I size={20} /></span>
                    <div>
                      <h4>{t}</h4>
                      <p>{d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="btn-row rv" style={{ marginTop: 36 }}>
                <Link href="/products/lead-management" className="btn btn-ember">
                  Explore Lead Management <Arrow size={16} className="arr" />
                </Link>
              </div>
            </div>
            <div className="rv" style={{ '--d': '.1s', position: 'sticky', top: 110 }}>
              <LeakPipe />
              <div className="marquee" style={{ marginTop: 22 }}>
                <div className="marquee-track">
                  {[...SOURCES, ...SOURCES].map((s, i) => (
                    <span className="chip" key={i} style={{ height: 34, padding: '0 14px' }}>
                      <span className="dot" style={{ color: 'var(--ember)' }} /> {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRODUCT 02: HRMS ============ */}
      <section className="section">
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="spot-num rv" style={{ color: 'var(--muted)' }}>PRODUCT 02 / 02</div>
              <span className="eyebrow mint rv" style={{ marginTop: 22 }}>HRMS · Payroll · Compliance · Staffing</span>
              <h2 className="h2 rv" style={{ marginTop: 22, '--d': '.06s' }}>
                From attendance to payslip to compliance, <span className="c-mint">under one roof.</span>
              </h2>
            </div>
            <div>
              <p className="lede rv" style={{ '--d': '.12s' }}>
                For small, mid-sized and large companies that are tired of stitching together a biometric export, an Excel payroll sheet and a
                consultant for filings. One system. One source of truth. Payroll in hours.
              </p>
              <div className="btn-row rv" style={{ marginTop: 28, '--d': '.18s' }}>
                <Link href="/products/hrms-payroll" className="btn btn-mint">
                  Explore HRMS &amp; Payroll <Arrow size={16} className="arr" />
                </Link>
              </div>
            </div>
          </div>

          <div className="bento">
            <div className="tile span-4 rv">
              <div className="t-k"><Wallet size={15} /> Payroll</div>
              <h3>Run payroll in hours, with every deduction worked out for you.</h3>
              <p>Salary structures, arrears, reimbursements, LOP and loans are calculated straight from attendance. Payslips and bank files come out in the same run.</p>
              <div className="tile-viz grid-2" style={{ alignItems: 'end' }}>
                <div className="payslip">
                  <div className="ps-row"><span>Basic + HRA</span><span>₹62,500</span></div>
                  <div className="ps-row"><span>Special allowance</span><span>₹18,200</span></div>
                  <div className="ps-row"><span>PF · ESI · PT</span><span>−₹7,940</span></div>
                  <div className="ps-row"><span>TDS</span><span>−₹4,120</span></div>
                  <div className="ps-row"><span>Net pay</span><span>₹68,640</span></div>
                </div>
                <div style={{ display: 'grid', gap: 10 }}>
                  {[['Attendance', 100], ['Salary calc', 100], ['Statutory', 100], ['Payslips', 72]].map(([k, v]) => (
                    <div key={k}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 6 }}>
                        <span>{k}</span>
                        <span style={{ fontFamily: 'var(--mono)', color: 'var(--muted)' }}>{v}%</span>
                      </div>
                      <div className="bar"><i style={{ width: `${v}%`, background: 'var(--mint)' }} /></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="tile span-2 mint rv" style={{ '--d': '.06s' }}>
              <div className="t-k"><Shield size={15} /> Compliance</div>
              <h3>Statutory compliance, handled.</h3>
              <div className="comp-list tile-viz">
                {['PF', 'ESI', 'Professional Tax', 'TDS', 'LWF'].map((c) => (
                  <div key={c}>{c} <span>✓ on track</span></div>
                ))}
              </div>
            </div>
            <div className="tile span-2 ink rv">
              <div className="t-k"><Calendar size={15} /> Attendance &amp; leave</div>
              <h3>Shifts, leave and overtime that flow straight into pay.</h3>
              <div className="tile-viz">
                <div className="cal">
                  {Array.from({ length: 28 }).map((_, i) => (
                    <i key={i} className={i % 7 >= 5 ? 'w' : i === 9 || i === 10 ? 'l' : i === 17 ? 'a' : 'p'} />
                  ))}
                </div>
                <div className="legend">
                  <span><i style={{ background: 'var(--mint)' }} />Present</span>
                  <span><i style={{ background: 'var(--amber)' }} />Leave</span>
                  <span><i style={{ background: 'var(--red)' }} />Absent</span>
                </div>
              </div>
            </div>
            <div className="tile span-2 rv" style={{ '--d': '.06s' }}>
              <div className="t-k"><Users size={15} /> Core HR</div>
              <h3>Every employee record, from offer letter to exit.</h3>
              <p>Onboarding, documents, assets, appraisals and exits, all on one employee timeline.</p>
            </div>
            <div className="tile span-2 rv" style={{ '--d': '.12s' }}>
              <div className="t-k"><Building size={15} /> Staffing</div>
              <h3>Contract and multi-site workforce, managed.</h3>
              <p>Deploy staff across clients and sites, track who is where, and bill for it accurately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ INDUSTRIES ============ */}
      <section className="section paper-2">
        <div className="wrap">
          <SectionHead
            eyebrow="Who we build for"
            title={<>Three industries come first. <span className="thin">Every business is welcome.</span></>}
            lede="We go deep where the pain is sharpest and the problems repeat: leads that leak, payroll that never closes on time, and agent networks that run on WhatsApp and memory."
          />
          <div className="ind-grid">
            {[
              {
                id: 'real-estate', n: '01', I: HomeIco, bg: 'var(--ember)', title: 'Realtors & real-estate developers',
                d: 'You pay for every enquiry, so you shouldn’t lose any of them to a slow follow-up.',
                pts: ['Lead capture from Meta Ads & consolidators', 'Follow-up tracking & reminders', 'Escalations so nothing slips', 'Agent-level leakage reports'],
                cta: 'Lead Management System',
              },
              {
                id: 'hr', n: '02', I: Building, bg: 'var(--mint)', title: 'Small, mid & large businesses',
                d: 'If you run payroll, we can make it faster, accurate and compliant, whatever your industry.',
                pts: ['Payroll & payslips', 'Attendance, leave & shifts', 'PF, ESI, PT, TDS compliance', 'Staffing & contract workforce'],
                cta: 'HRMS & Payroll',
              },
              {
                id: 'insurance', n: '03', I: Umbrella, bg: 'var(--violet)', title: 'Insurance brokers & consolidators',
                d: 'You manage hundreds of agents, thousands of policies and endless renewals. AI can do the chasing for you.',
                pts: ['AI-driven CRM for policies & renewals', 'Agent & POSP management', 'Process automation end to end', 'Bots that answer and qualify, 24×7'],
                cta: 'AI CRM & bots',
              },
            ].map((x, i) => (
              <Link href={`/industries#${x.id}`} className="ind rv" key={x.id} style={{ '--d': `${0.08 * i}s` }}>
                <div className="ind-top">
                  <span className="ind-ico" style={{ background: x.bg }}><x.I size={26} /></span>
                  <span className="ind-n">{x.n}</span>
                </div>
                <h3>{x.title}</h3>
                <p>{x.d}</p>
                <ul>
                  {x.pts.map((p) => (
                    <li key={p}><Check size={16} style={{ color: x.bg }} />{p}</li>
                  ))}
                </ul>
                <div className="ind-foot">
                  {x.cta}
                  <span className="arr-c"><Arrow size={16} /></span>
                </div>
              </Link>
            ))}
          </div>
          <div className="also rv">
            <span className="small" style={{ marginRight: 6 }}>We also build for</span>
            {['Manufacturing', 'Logistics', 'Healthcare', 'Financial services', 'Retail & D2C', 'Professional services', 'Education'].map((s) => (
              <span className="chip" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CASE STUDY ============ */}
      <section className="section" id="opaks">
        <div className="wrap">
          <SectionHead eyebrow="Proof, not promises" tone="ember" title={<>Opaks Realty stopped losing leads they had already paid for.</>} />
          <div className="case rv">
            <div className="case-l">
              <img src="/clients/opaks-realty.png" alt="Opaks Realty" className="case-logo" width="220" height="72" />
              <p className="lede">
                Opaks Realty is a real-estate advisory firm in Gurugram with a large inventory of plots, builder floors and homes. Their leads came
                in from many channels, and follow-ups lived in people&rsquo;s phones. We moved everything onto our Lead Management System, and every
                lead now has an owner, a next step and a deadline.
              </p>
              <ul className="tick-list">
                <li><Check size={18} />Every lead source in one pipeline</li>
                <li><Check size={18} />Follow-ups tracked, reminded and escalated</li>
                <li><Check size={18} />Clear visibility of every agent&rsquo;s follow-up discipline</li>
              </ul>
              <dl className="case-kv">
                <div><dt>Client</dt><dd>Opaks Realty, Gurugram</dd></div>
                <div><dt>Product</dt><dd>Lead Management System</dd></div>
              </dl>
            </div>
            <div className="case-r noise">
              <div className="dot-grid" />
              <span className="eyebrow" style={{ color: 'var(--d-muted)', position: 'relative' }}>Result</span>
              <div style={{ position: 'relative' }}>
                <div className="case-num"><CountUp to={15} /><sup>%</sup></div>
                <p style={{ fontSize: 20, color: '#fff', marginTop: 18, maxWidth: '22ch', lineHeight: 1.35, fontWeight: 500 }}>
                  less lead leakage, through disciplined follow-up tracking.
                </p>
              </div>
              <Link href="/case-studies#opaks" className="btn btn-light" style={{ alignSelf: 'flex-start', position: 'relative' }}>
                Full case study <Arrow size={16} className="arr" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS + INTEGRATIONS ============ */}
      <section className="stats-band dark noise">
        <div className="dot-grid" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="sb-grid">
            {[
              [<CountUp key="a" to={15} suffix="%" />, 'less lead leakage at Opaks Realty', 'ember'],
              [<CountUp key="b" to={30} suffix="+" />, 'projects delivered across India', ''],
              [<CountUp key="c" to={1.4} decimals={1} prefix="₹" suffix=" Cr" />, 'saved a year for an NBFC client', 'mint'],
              [<CountUp key="d" to={2} />, 'products live, built in India', 'brand'],
            ].map(([v, k, tone], i) => (
              <div className={`sb rv ${tone}`} key={k} style={{ '--d': `${0.06 * i}s` }}>
                <div className="sb-v">{v}</div>
                <div className="sb-k">{k}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="sb-marquees" aria-label="Works with">
          <div className="marquee">
            <div className="marquee-track">
              {[0, 1].flatMap((r) =>
                ['Social media lead ads', 'Property portals (API)', 'Lead consolidators', 'Search ads', 'Website forms', 'Landing pages', 'Chat & messaging', 'Spreadsheets & CSV'].map((t) => (
                  <span className="mq" key={r + t}><span className="dot" style={{ color: 'var(--ember)' }} />{t}</span>
                ))
              )}
            </div>
          </div>
          <div className="marquee rev">
            <div className="marquee-track">
              {[0, 1].flatMap((r) =>
                ['Accounting software', 'ERP & CRM systems', 'Bank payout files', 'PF · ECR', 'ESIC', 'Professional Tax', 'TDS', 'Biometric & attendance exports'].map((t) => (
                  <span className="mq" key={r + t}><span className="dot" style={{ color: 'var(--mint)' }} />{t}</span>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="section-tight">
        <div className="wrap">
          <SectionHead
            eyebrow="Beyond our products"
            title={<>Need something custom? <span className="thin">We build that too.</span></>}
            lede="The team behind our products also takes on custom work: AI agents, software, automation and growth, all scoped, priced and delivered on time."
          />
          <div className="svc-list">
            {[
              [Bot, 'AI agents & chatbots', 'WhatsApp & web bots, document extraction, copilots with a human in control.'],
              [Code, 'Custom software', 'Web & mobile apps, internal tools, portals and full SaaS products.'],
              [Flow, 'Process automation', 'Map the process, cut the waste, then automate what’s left.'],
              [Chart, 'Data & dashboards', 'Live dashboards from your ERP, CRM, Tally, Zoho and spreadsheets.'],
              [Megaphone, 'Digital marketing', 'Meta & Google Ads, SEO and analytics that bring in qualified leads.'],
              [Wrench, 'Support & maintenance', 'Fixes, monitoring and new features, from a team that stays.'],
            ].map(([I, t, d], i) => (
              <Link href="/services" className="svc rv" key={t} style={{ '--d': `${0.04 * i}s` }}>
                <span className="n">0{i + 1}</span>
                <h3>{t}</h3>
                <p className="svc-d">{d}</p>
                <span className="arr-c"><ArrowUR size={18} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRINCIPLES ============ */}
      <section className="section-tight paper-2">
        <div className="wrap">
          <div className="trio">
            {[
              [Sparkle, 'Built by operators', 'We built these products because we watched businesses lose money to the same problems again and again.'],
              [Shield, 'Your data stays yours', 'NDA-backed engagements, secure access and regular backups. You can export everything, any time.'],
              [Funnel, 'Measured on outcomes', 'We judge ourselves on leakage closed, hours saved and filings on time, not on features shipped.'],
            ].map(([I, t, d], i) => (
              <div className="tile rv" key={t} style={{ '--d': `${0.06 * i}s` }}>
                <span className="ind-ico" style={{ background: 'var(--ink)', width: 48, height: 48, borderRadius: 14, marginBottom: 28 }}><I size={22} /></span>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
