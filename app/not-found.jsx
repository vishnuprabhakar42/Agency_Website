import Link from 'next/link';

export const metadata = { title: 'Page not found — Go Unmanual' };

export default function NotFound() {
  return (
    <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F7F6F2', padding: '40px 24px' }}>
      <div style={{ textAlign: 'center', maxWidth: 480 }}>
        <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 13, color: '#7A828F', letterSpacing: '.08em' }}>ERROR 404</div>
        <h1 style={{ margin: '14px 0 0', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 300, letterSpacing: '-.02em', color: '#11161F' }}>
          This page went <span style={{ fontWeight: 700 }}>unmanual.</span>
        </h1>
        <p style={{ margin: '14px 0 0', fontSize: 15.5, lineHeight: 1.6, color: '#6A7180' }}>
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        </p>
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 26, fontSize: 14.5, fontWeight: 600, color: '#fff', background: '#11161F', textDecoration: 'none', padding: '12px 20px', borderRadius: 10 }}>
          Back to home
        </Link>
      </div>
    </div>
  );
}
