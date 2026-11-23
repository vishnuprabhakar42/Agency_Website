import ContactForm from '@/components/ContactForm';
import { CONTACT } from '@/lib/site';
import { Mail, Phone, Pin } from '@/components/Icons';
import { InstagramLogo, LinkedInLogo } from '@/components/BrandIcons';

const IgIcon = ({ size }) => <InstagramLogo size={size + 4} id="ig-contact" />;
const LiIcon = ({ size }) => <LinkedInLogo size={size + 4} />;

export const metadata = {
  title: 'Book a Demo: Go Unmanual',
  description: 'Book a demo of our Lead Management System or HRMS & Payroll, or tell us what you want to build. We reply within one business day.',
};

export default function ContactPage() {
  return (
    <section className="p-hero" style={{ paddingBottom: 'clamp(88px, 10vw, 140px)' }}>
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="split-2 contact-grid" style={{ alignItems: 'start' }}>
          <div>
            <span className="eyebrow rv">Book a demo</span>
            <h1 className="display rv" style={{ marginTop: 22, '--d': '.06s', fontSize: 'clamp(44px,6vw,84px)' }}>
              Let&rsquo;s <span className="mark">talk.</span>
            </h1>
            <p className="lede rv" style={{ marginTop: 24, '--d': '.12s' }}>
              See a product on your own data, or tell us what you want to build. You get a reply within one business day.
            </p>

            <div className="rv" style={{ marginTop: 40, '--d': '.18s' }}>
              <div className="t-k" style={{ fontFamily: 'var(--mono)', fontSize: 11.5, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 14 }}>What happens next</div>
              {[
                ['1', 'Discovery call · 30 min', 'Your goals, your current setup, a live demo.'],
                ['2', 'Proposal · within days', 'Clear scope, timeline and pricing.'],
                ['3', 'Go live', 'Set up, migrated and trained, with you in the loop.'],
              ].map(([n, t, d]) => (
                <div key={n} style={{ display: 'grid', gridTemplateColumns: '36px 1fr', gap: 14, padding: '14px 0', borderTop: '1px solid var(--line)' }}>
                  <span style={{ width: 30, height: 30, borderRadius: 10, background: 'var(--ink)', color: '#fff', display: 'grid', placeItems: 'center', fontFamily: 'var(--mono)', fontSize: 13 }}>{n}</span>
                  <div>
                    <div style={{ fontWeight: 600 }}>{t}</div>
                    <div className="small">{d}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rv" style={{ marginTop: 32, display: 'grid', gap: 10 }}>
              {[
                [Mail, CONTACT.email, `mailto:${CONTACT.email}`, 'Replies within a day'],
                [Phone, CONTACT.phone, CONTACT.phoneHref, CONTACT.hours],
                [IgIcon, CONTACT.instagramHandle, CONTACT.instagram, 'Instagram: behind the build'],
                [LiIcon, 'LinkedIn', CONTACT.linkedin, 'Follow our work'],
              ].map(([I, t, h, s]) => (
                <a key={t} href={h} target={h.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="tile" style={{ padding: 16, display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span className="feat-ico" style={{ width: 40, height: 40, background: 'var(--paper)' }}><I size={18} /></span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 15 }}>{t}</div>
                    <div className="small">{s}</div>
                  </div>
                </a>
              ))}
              <div className="small" style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
                <Pin size={16} /> {CONTACT.offices.map((o) => `${o.city} (${o.tag})`).join(' · ')}
              </div>
            </div>
          </div>

          <div className="tile static rv" style={{ padding: 'clamp(22px,3.4vw,44px)', boxShadow: 'inset 0 0 0 1px var(--line), var(--shadow-lg)', '--d': '.1s' }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
