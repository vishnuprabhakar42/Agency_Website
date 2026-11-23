import Link from 'next/link';
import { CONTACT, PRODUCTS } from '@/lib/site';
import { InstagramLogo, LinkedInLogo } from './BrandIcons';
import CarvedWord from './CarvedWord';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="f-grid">
          <div>
            <div className="f-brand">
              <img src="/logo-white.png" alt="" width="38" height="30" />
              <span className="wm">
                <span className="wm-go">Go</span> <span className="wm-un">Unmanual</span>
              </span>
            </div>
            <p style={{ maxWidth: '36ch', fontSize: 15 }}>
              Products and custom software that take the manual work out of sales, HR and operations, built in India.
            </p>
            <div style={{ marginTop: 22, display: 'grid', gap: 4, fontSize: 14.5 }}>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            </div>
            <div className="f-social">
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Go Unmanual on Instagram">
                <InstagramLogo size={20} id="ig-foot-btn" />
              </a>
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Go Unmanual on LinkedIn">
                <LinkedInLogo size={20} />
              </a>
            </div>
          </div>
          <div>
            <h5>Products</h5>
            {PRODUCTS.map((p) => (
              <Link key={p.key} href={p.href}>
                {p.name}
              </Link>
            ))}
            <Link href="/industries#insurance">Insurance CRM &amp; bots</Link>
          </div>
          <div>
            <h5>Industries</h5>
            <Link href="/industries#real-estate">Real estate</Link>
            <Link href="/industries#hr">Businesses of every size</Link>
            <Link href="/industries#insurance">Insurance brokers</Link>
            <Link href="/services">Custom software &amp; AI</Link>
          </div>
          <div>
            <h5>Company</h5>
            <Link href="/case-studies">Work</Link>
            <Link href="/pricing">How we engage</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="f-icon-link">
              <LinkedInLogo size={16} /> LinkedIn
            </a>
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="f-icon-link">
              <InstagramLogo size={16} id="ig-foot-link" /> Instagram
            </a>
          </div>
        </div>
        <CarvedWord>Go Unmanual</CarvedWord>
        <div className="f-bottom">
          <span>© {new Date().getFullYear()} Go Unmanual. All rights reserved.</span>
          <span>Bhiwadi · Gurugram · Remote across India</span>
        </div>
      </div>
    </footer>
  );
}
