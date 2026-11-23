import Link from 'next/link';
import { CONTACT } from '@/lib/site';
import { Arrow, Mail, Phone, Plus } from './Icons';
import { InstagramLogo } from './BrandIcons';

export function CtaFinal({
  title = (
    <>
      Let&rsquo;s make your
      <br />
      business <span className="ital c-brand">unmanual.</span>
    </>
  ),
  lede = 'Book a 30-minute demo of either product, or tell us what you want built. You will hear back within one business day.',
}) {
  return (
    <section className="section dark cta-final noise">
      <div className="cta-orb" />
      <div className="wrap" style={{ position: 'relative' }}>
        <span className="eyebrow brand rv">Next step</span>
        <h2 className="display rv" style={{ marginTop: 24, '--d': '.08s' }}>
          {title}
        </h2>
        <p className="lede rv" style={{ '--d': '.16s' }}>
          {lede}
        </p>
        <div className="btn-row rv" style={{ '--d': '.24s' }}>
          <Link href="/contact" className="btn btn-light">
            Book a demo <Arrow size={16} className="arr" />
          </Link>
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            WhatsApp us
          </a>
        </div>
        <div className="cta-contacts">
          <a href={`mailto:${CONTACT.email}`}>
            <Mail size={16} /> {CONTACT.email}
          </a>
          <a href={CONTACT.phoneHref}>
            <Phone size={16} /> {CONTACT.phone}
          </a>
          <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">
            <InstagramLogo size={16} id="ig-cta" /> {CONTACT.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Faq({ items }) {
  return (
    <div className="faq">
      {items.map(([q, a]) => (
        <details key={q}>
          <summary>
            {q}
            <span className="pm">
              <Plus size={16} />
            </span>
          </summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}

export function SectionHead({ eyebrow, tone = '', title, lede, center }) {
  return (
    <div className={`s-head${center ? ' center' : ''}`}>
      <div>
        <span className={`eyebrow ${tone} rv`}>{eyebrow}</span>
        <h2 className="h2 rv" style={{ '--d': '.06s' }}>
          {title}
        </h2>
      </div>
      {lede && (
        <p className="lede rv" style={{ '--d': '.12s' }}>
          {lede}
        </p>
      )}
    </div>
  );
}
