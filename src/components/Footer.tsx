import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--card)', borderTop: '1px solid var(--border)', padding: '2.5rem 1.5rem' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Code2 size={18} color="var(--violet2)" />
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1rem', color: 'var(--violet2)' }}>abi.dev</span>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a href="https://github.com/abilasha24" target="_blank" rel="noreferrer" style={{ color: 'var(--sub)', display: 'flex' }}>
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/abilashaselvanayakam2k06" target="_blank" rel="noreferrer" style={{ color: 'var(--sub)', display: 'flex' }}>
            <Linkedin size={18} />
          </a>
          <a href="mailto:selvanayagamabilasha@gmail.com" style={{ color: 'var(--sub)', display: 'flex' }}>
            <Mail size={18} />
          </a>
        </div>
        <p style={{ fontSize: '0.78rem', color: 'var(--sub)' }}>
          © 2026 Abilasha Selvanayakam · Built with React, TypeScript & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
