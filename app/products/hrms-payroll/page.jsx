import Link from 'next/link';
import { CtaFinal, Faq, SectionHead } from '@/components/Blocks';
import { Arrow, Building, Calendar, Chart, Check, Doc, Shield, Users, Wallet, Clock, Layers, Bolt } from '@/components/Icons';

export const metadata = {
  title: 'HRMS, Payroll & Compliance Software: Go Unmanual',
  description:
    'Payroll, attendance, leave, core HR, statutory compliance (PF, ESI, PT, TDS, LWF) and staffing in one system, for small, mid-sized and large businesses.',
};

const MODULES = [
  [Wallet, 'Payroll', 'Salary structures, arrears, reimbursements, loans, LOP and full & final settlements. Payslips and bank transfer files in one run.'],
  [Calendar, 'Attendance & leave', 'Shifts, rosters, overtime, holidays and leave policies, all feeding payroll directly with no re-typing.'],
  [Shield, 'Statutory compliance', 'PF, ESI, Professional Tax, TDS and LWF worked out every cycle, with the returns and registers your auditors ask for.'],
  [Users, 'Core HR', 'Employee records, documents, onboarding, assets, letters and exits, on one timeline for each employee.'],
  [Building, 'Staffing & contract workforce', 'Deploy people across clients and sites, track who is where, and bill clients accurately for deployed staff.'],
  [Chart, 'Reports & analytics', 'Headcount, attrition, cost-to-company, overtime and compliance status, always up to date.'],
];

const FAQ = [
  ['Is this only for large companies?', 'No. It works for a 20-person firm running payroll on Excel and for a multi-site company with hundreds of employees. You start with the modules you need and add more later.'],
  ['Which compliances does it cover?', 'Indian statutory compliance: PF, ESI, Professional Tax, TDS and LWF, plus the registers and reports that go with them. Tell us about any state-specific or industry-specific requirements in the demo.'],
  ['Can we move from our current payroll setup?', 'Yes. We migrate employee masters, salary structures and opening balances, and run a parallel payroll with you before you switch over.'],
  ['Do you support staffing / manpower companies?', 'Yes. Staffing is a core module. You can deploy contract staff to client sites, track their attendance by site, and handle payroll and client billing together.'],
  ['Is our employee data secure?', 'Access is role-based, the data is backed up regularly, and every engagement is NDA-backed. Your data belongs to you and can be exported at any time.'],
];

export default function HrmsPage() {
  return (
    <>
      <section className="p-hero">
        <div className="hero-bg" style={{ background: 'radial-gradient(55% 55% at 85% 10%, rgba(15,176,122,.18), transparent 70%)' }} />
        <div className="hero-grid" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="crumbs rv"><Link href="/">Home</Link> / <span>Products</span> / <span style={{ color: 'var(--ink)' }}>HRMS &amp; Payroll</span></div>
          <div className="p-hero-split">
            <div>
              <span className="eyebrow mint rv">HRMS · Payroll · Attendance · Compliance · Staffing</span>
              <h1 className="display rv" style={{ marginTop: 22, '--d': '.06s' }}>
                All of HR, <span className="mark mint">one roof.</span>
              </h1>
            </div>
            <div>
              <p className="lede rv" style={{ '--d': '.12s' }}>
                Stop juggling a biometric export, a payroll spreadsheet and a compliance consultant. Attendance feeds payroll, payroll feeds
                compliance, and your team gets its weekends back. Built for businesses of every size.
              </p>
              <div className="btn-row rv" style={{ '--d': '.18s' }}>
                <Link href="/contact?need=hr" className="btn btn-mint">Book a demo <Arrow size={16} className="arr" /></Link>
                <Link href="#modules" className="btn btn-ghost">See modules</Link>
              </div>
            </div>
          </div>

          {/* payroll timeline */}
          <div className="tile rv" style={{ marginTop: 64, padding: 'clamp(22px,3vw,36px)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 24 }}>
              <div>
                <div className="t-k" style={{ marginBottom: 6 }}><Clock size={14} /> A payroll cycle, without the chaos</div>
                <h3 style={{ margin: 0 }}>Attendance in, payslips out, compliance done.</h3>
              </div>
              <span className="chip" style={{ background: 'var(--mint-soft)', color: '#08744f' }}><span className="dot" /> One continuous flow</span>
            </div>
            <div className="grid-5">
              {[
                ['01', 'Attendance locks', 'Shifts, leave & OT finalised'],
                ['02', 'Payroll computes', 'Structures, LOP, arrears'],
                ['03', 'Deductions apply', 'PF · ESI · PT · TDS · LWF'],
                ['04', 'Payslips go out', 'Plus the bank transfer file'],
                ['05', 'Returns ready', 'Challans, registers, reports'],
              ].map(([n, t, d]) => (
                <div key={n} style={{ borderTop: '2px solid var(--mint)', paddingTop: 16 }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--mint)' }}>{n}</div>
                  <div style={{ fontWeight: 600, marginTop: 6 }}>{t}</div>
                  <div className="small" style={{ marginTop: 2 }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section paper-2" id="modules">
        <div className="wrap">
          <SectionHead
            eyebrow="Modules"
            tone="mint"
            title={<>Six modules. <span className="thin">One employee record.</span></>}
            lede="Every module shares the same employee data, so a change in one place, like a promotion, a transfer or a leave, shows up everywhere it should."
          />
          <div className="grid-3">
            {MODULES.map(([I, t, d], i) => (
              <div className="tile rv" key={t} style={{ '--d': `${0.04 * (i % 3)}s` }}>
                <span className="feat-ico" style={{ background: 'var(--mint-soft)', color: 'var(--mint)', marginBottom: 24 }}><I size={20} /></span>
                <h3 style={{ fontSize: 22 }}>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark spot noise">
        <div className="spot-glow" style={{ background: 'radial-gradient(closest-side, rgba(15,176,122,.3), transparent)', right: -400, top: -400 }} />
        <div className="wrap">
          <div className="spot-grid" style={{ alignItems: 'center' }}>
            <div>
              <span className="eyebrow rv" style={{ color: 'var(--mint)' }}>Compliance</span>
              <h2 className="h2 rv" style={{ marginTop: 22 }}>
                Compliance is not a side task. <span style={{ color: 'var(--mint)' }}>It&rsquo;s built in.</span>
              </h2>
              <p className="lede rv" style={{ marginTop: 24 }}>
                Every payroll run works out statutory deductions automatically and keeps the registers and reports you need for filing and
                audits. No separate spreadsheets, and no last-minute scramble with your consultant.
              </p>
              <ul className="tick-list rv">
                <li><Check size={18} />Provident Fund: contributions and ECR-ready data</li>
                <li><Check size={18} />ESI: contributions and eligibility tracking</li>
                <li><Check size={18} />Professional Tax: state-wise slabs</li>
                <li><Check size={18} />TDS on salary: projections and declarations</li>
                <li><Check size={18} />Labour Welfare Fund, plus statutory registers</li>
              </ul>
            </div>
            <div className="rv" style={{ '--d': '.1s' }}>
              <div className="leak">
                <div className="leak-head"><b>Compliance calendar · this month</b><span className="chip">all on track</span></div>
                {[
                  ['PF contribution', 'Deposit & ECR', 'due 15th'],
                  ['ESI contribution', 'Monthly deposit', 'due 15th'],
                  ['TDS on salary', 'Deposit', 'due 7th'],
                  ['Professional Tax', 'State-wise', 'as per state'],
                  ['Labour Welfare Fund', 'Periodic', 'as per state'],
                ].map(([t, s, d]) => (
                  <div className="leak-row" key={t}>
                    <div><div className="lr-t">{t}</div><div className="lr-s">{s}</div></div>
                    <span className="leak-badge fixed"><Check size={12} sw={2.6} /> {d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Who it's for" tone="mint" title={<>Sized for the business <span className="thin">you are, and the one you&rsquo;re becoming.</span></>} />
          <div className="grid-3">
            {[
              [Bolt, 'Small businesses', '10–100 people', 'Move payroll off Excel. Get compliance right from the first month, without hiring an HR team.'],
              [Layers, 'Mid-sized companies', '100–1,000 people', 'Multiple locations, shifts and salary structures, handled by one system in place of five.'],
              [Building, 'Large & staffing firms', '1,000+ people', 'Multi-entity, multi-site and contract workforces, with deployment and client billing built in.'],
            ].map(([I, t, s, d], i) => (
              <div className="tile rv" key={t} style={{ '--d': `${0.06 * i}s` }}>
                <span className="ind-ico" style={{ background: 'var(--mint)', width: 48, height: 48, borderRadius: 14, marginBottom: 28 }}><I size={22} /></span>
                <div className="t-k">{s}</div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="s-head" style={{ alignItems: 'start' }}>
            <div>
              <span className="eyebrow mint rv">FAQ</span>
              <h2 className="h2 rv">Questions HR teams ask us.</h2>
            </div>
            <div className="rv"><Faq items={FAQ} /></div>
          </div>
        </div>
      </section>

      <CtaFinal title={<>Close payroll in hours,<br /><span className="ital" style={{ color: 'var(--mint)' }}>not days.</span></>} lede="Walk through payroll, attendance and compliance on your own employee structure in a 30-minute demo." />
    </>
  );
}
