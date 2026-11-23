'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV, PRODUCTS } from '@/lib/site';
import { Arrow, Chevron, Close, Menu, Home, Users } from './Icons';

const productIcon = { leads: { Icon: Home, bg: 'var(--ember)' }, hr: { Icon: Users, bg: 'var(--mint)' } };

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  const isActive = (href) => path === href || path.startsWith(href + '/');

  return (
    <header className={`nav${open ? ' open' : ''}${scrolled ? ' scrolled' : ''}`}>
      <div className="wrap">
        <nav className="nav-bar" aria-label="Main">
          <Link href="/" className="nav-logo" aria-label="Go Unmanual home">
            <img src="/logo.png" alt="" width="32" height="25" />
            <span className="wm">
              <span className="wm-go">Go</span> <span className="wm-un">Unmanual</span>
            </span>
          </Link>

          <div className="nav-links">
            <div className="nav-dd">
              <button className={`nav-link${path.startsWith('/products') ? ' active' : ''}`} aria-haspopup="true">
                Products <Chevron size={14} />
              </button>
              <div className="nav-dd-panel" role="menu">
                {PRODUCTS.map((p) => {
                  const { Icon, bg } = productIcon[p.key];
                  return (
                    <Link key={p.key} href={p.href} className="dd-item" role="menuitem">
                      <div className="dd-ico" style={{ background: bg }}>
                        <Icon size={20} />
                      </div>
                      <div className="dd-tag">{p.tag}</div>
                      <div className="dd-name">{p.name}</div>
                      <div className="dd-blurb">{p.blurb}</div>
                    </Link>
                  );
                })}
              </div>
            </div>
            {NAV.map((n, i) => (
              <Link key={n.href} href={n.href} className={`nav-link${isActive(n.href) ? ' active' : ''}${i > 2 ? ' hide-md' : ''}`}>
                {n.label}
              </Link>
            ))}
          </div>

          <div className="nav-cta">
            <Link href="/contact" className="btn btn-sm">
              Book a demo <Arrow size={16} className="arr" />
            </Link>
            <button className="nav-burger" onClick={() => setOpen((o) => !o)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
              {open ? <Close /> : <Menu />}
            </button>
          </div>
        </nav>

        <div className="nav-mobile">
          <div className="nm-label">Products</div>
          {PRODUCTS.map((p) => (
            <Link key={p.key} href={p.href}>
              {p.name} <Arrow size={16} />
            </Link>
          ))}
          <div className="nm-label">Company</div>
          {NAV.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label} <Arrow size={16} />
            </Link>
          ))}
          <Link href="/contact" className="btn">
            Book a demo <Arrow size={16} className="arr" />
          </Link>
        </div>
      </div>
    </header>
  );
}
