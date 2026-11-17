
import { Github, Linkedin, Mail, Code2, ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: 'https://github.com/abilasha24',
      label: 'GitHub',
      icon: <Github size={19} />,
    },
    {
      href: 'https://www.linkedin.com/in/abilashaselvanayakam2k06',
      label: 'LinkedIn',
      icon: <Linkedin size={19} />,
    },
    {
      href: 'mailto:selvanayagamabilasha@gmail.com',
      label: 'Email',
      icon: <Mail size={19} />,
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">

        <a href="/" className="footer-brand" aria-label="Go to homepage">
          <Code2 size={20} />
          <span>abi.dev</span>
        </a>

        <p className="footer-description">
          Software Engineering Graduate | Aspiring Python Developer & AI Engineer
        </p>

        <div className="footer-socials">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              title={link.label}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>
            © {currentYear} Abilasha Selvanayakam. All rights reserved.
          </p>

          <p className="footer-built">
            Built with React, TypeScript & Vite
          </p>
        </div>

        <a
          href="#top"
          className="footer-back-top"
          aria-label="Back to top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <ArrowUp size={17} />
        </a>

      </div>
    </footer>
  );
}
