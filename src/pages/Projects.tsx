import { Github, ExternalLink } from 'lucide-react';
import { FarmerIcon, ShopIcon, FitnessIcon, MLIcon, PortfolioIcon } from '../components/ProjectIcons';

const projects = [
  {
    name: 'Tamil Farmer Assistant',
    date: 'Jun 2026 · Kaggle AI Agents Capstone',
    desc: 'Tamil-language AI agent for farmers in Jaffna — real-time weather, crop suggestions & market prices using LLaMA 3.3 via Groq. Multi-tool orchestration with Google ADK.',
    tech: ['Python', 'Google ADK', 'Groq API', 'LLaMA 3.3', 'Streamlit'],
    github: 'https://github.com/abilasha24/Tamil-farmer-agent',
    live: 'https://tamil-farmer-agent-j3cyzcehjeedshdjfmt3mw.streamlit.app',
    icon: FarmerIcon,
  },
  {
    name: 'AuraShop — E-Commerce Platform',
    date: 'Jun 2026 · Full Stack',
    desc: 'Production-level e-commerce with product listing, search & filtering, shopping cart, JWT auth, and role-based access. Deployed on Vercel.',
    tech: ['Next.js 14', 'TypeScript', 'Express', 'PostgreSQL', 'Prisma', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com/abilasha24/Aura_shop-ecommerce',
    live: 'https://aura-shop-ecommerce-frontend.vercel.app',
    icon: ShopIcon,
  },
  {
    name: 'SmartFit System',
    date: 'Dec 2025 – Mar 2026 · Personal Project',
    desc: 'Role-based fitness management system with admin, trainer, and member dashboards. Secure session-based authentication and normalized MySQL database.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/abilasha24/smart_fit',
    live: 'http://smartfitweb.rf.gd',
    icon: FitnessIcon,
  },
  {
    name: 'Student Score Predictor',
    date: 'Jan – Feb 2026 · ML Project',
    desc: 'Regression-based ML model predicting student performance using Random Forest and Gradient Boosting, integrated into an interactive Streamlit web app.',
    tech: ['Python', 'Scikit-learn', 'Streamlit', 'Random Forest', 'Gradient Boosting'],
    github: 'https://github.com/abilasha24/student-score-prediction1-app',
    live: 'https://student-score-prediction1-app-an5yveweb5jgse5c7c7kcg.streamlit.app/',
    icon: MLIcon,
  },
  {
    name: 'Personal Portfolio Website',
    date: '2026 · Personal Project',
    desc: 'This portfolio — responsive dark-themed site with project showcase. Built with React, TypeScript, Tailwind CSS and Vite.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/abilasha24/my-portfolio',
    live: '',
    icon: PortfolioIcon,
  },
];

const linkStyle = {
  display: 'inline-flex' as const,
  alignItems: 'center' as const,
  gap: 5,
  fontSize: '0.78rem',
  color: 'var(--sub)',
  border: '1px solid var(--border)',
  borderRadius: 6,
  padding: '0.25rem 0.7rem',
  textDecoration: 'none',
  whiteSpace: 'nowrap' as const,
};

const techBadge = {
  background: 'rgba(139,92,246,0.1)',
  color: 'var(--violet2)',
  fontSize: '0.72rem',
  padding: '0.2rem 0.55rem',
  borderRadius: 5,
};

export default function Projects() {
  return (
    <main style={{ paddingTop: 80, minHeight: '100vh' }}>

      <section style={{ padding: '4rem 1.5rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--violet)', marginBottom: '0.5rem' }}>
            Work
          </p>
          <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            Featured <span style={{ color: 'var(--violet2)' }}>Projects</span>
          </h1>
          <p style={{ color: 'var(--sub)', maxWidth: 480, margin: '0 auto', fontSize: '0.925rem', lineHeight: 1.8 }}>
            A collection of projects I have built — from full stack web apps to AI-powered agents.
          </p>
        </div>
      </section>

      <section style={{ padding: '2rem 1.5rem 5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          {projects.map((p) => (
            <div
              key={p.name}
              style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', display: 'grid', gridTemplateColumns: '64px 1fr auto', gap: '1.1rem', alignItems: 'start' }}
              onMouseOver={e => (e.currentTarget.style.borderColor = 'rgba(139,92,246,0.4)')}
              onMouseOut={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              <div style={{ width: 56, height: 56, flexShrink: 0 }}>
                <p.icon />
              </div>

              <div>
                <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                  {p.name}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--sub)', marginBottom: '0.6rem' }}>
                  {p.date}
                </div>
                <p style={{ fontSize: '0.865rem', color: 'var(--sub)', lineHeight: 1.75, marginBottom: '0.9rem' }}>
                  {p.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {p.tech.map(t => (
                    <span key={t} style={techBadge}>{t}</span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', alignItems: 'flex-end' }}>
                <a href={p.github} target="_blank" rel="noreferrer" style={linkStyle}>
                  <Github size={13} /> GitHub
                </a>
                {p.live !== '' && (
                  <a href={p.live} target="_blank" rel="noreferrer" style={linkStyle}>
                    <ExternalLink size={13} /> Live
                  </a>
                )}
              </div>

            </div>
          ))}

        </div>
      </section>

    </main>
  );
}