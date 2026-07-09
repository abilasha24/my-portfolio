import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: scrolled ? 'rgba(13,13,20,0.95)' : 'transparent', backdropFilter: scrolled ? 'blur(16px)' : 'none', borderBottom: scrolled ? '1px solid var(--border)' : 'none', transition: 'all 0.3s ease' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <Code2 size={20} color="var(--violet2)" />
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1rem', color: 'var(--violet2)' }}>abi.dev</span>
        </Link>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map(link => (
            <Link key={link.path} to={link.path} style={{ fontSize: '0.85rem', fontWeight: 500, textDecoration: 'none', color: location.pathname === link.path ? 'var(--violet2)' : 'var(--sub)' }}>
              {link.label}
            </Link>
          ))}
          <a href="/Abilasha_Resume.pdf" download style={{ fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', color: 'var(--violet2)', border: '1px solid var(--violet)', padding: '0.35rem 0.9rem', borderRadius: 7 }}>
            Resume
          </a>
        </div>
      </div>
      {menuOpen && (
        <div style={{ background: 'var(--card)', borderTop: '1px solid var(--border)', padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {navLinks.map(link => (
            <Link key={link.path} to={link.path} style={{ fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none', color: location.pathname === link.path ? 'var(--violet2)' : 'var(--sub)' }}>
              {link.label}
            </Link>
          ))}
          <a href="/Abilasha_Resume.pdf" download style={{ fontSize: '0.9rem', color: 'var(--violet2)', fontWeight: 600 }}>Resume</a>
        </div>
      )}
    </nav>
  );
}
