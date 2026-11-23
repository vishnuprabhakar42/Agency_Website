import Link from 'next/link';
import { Arrow } from '@/components/Icons';

export const metadata = { title: 'Page not found: Go Unmanual' };

export default function NotFound() {
  return (
    <section className="p-hero" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="wrap center" style={{ position: 'relative' }}>
        <span className="eyebrow">Error 404</span>
        <h1 className="display" style={{ marginTop: 22, maxWidth: 'none' }}>
          This page went <span className="mark">unmanual.</span>
        </h1>
        <p className="lede" style={{ margin: '24px auto 36px' }}>The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.</p>
        <Link href="/" className="btn">
          Back to home <Arrow size={16} className="arr" />
        </Link>
      </div>
    </section>
  );
}
