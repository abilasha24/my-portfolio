import { Github, ExternalLink } from 'lucide-react';
import {
  FarmerIcon,
  ShopIcon,
  FitnessIcon,
  MLIcon,
  PortfolioIcon,
} from '../components/ProjectIcons';
import Reveal from '../components/Reveal';

const projects = [
  {
    name: 'Tamil Farmer Assistant',
    date: 'Jun 2026 · Kaggle AI Agents Capstone',
    desc: 'Tamil-language AI assistant for farmers in Jaffna, providing agriculture guidance and real-time weather information. Built with LLaMA 3.3 via Groq API and multi-tool orchestration using Google ADK.',
    tech: [
      'Python',
      'Google ADK',
      'Groq API',
      'LLaMA 3.3',
      'OpenWeatherMap',
      'Streamlit',
    ],
    github: 'https://github.com/abilasha24/Tamil-farmer-agent',
    live: 'https://tamil-farmer-agent-j3cyzcehjeedshdjfmt3mw.streamlit.app',
    icon: FarmerIcon,
  },

  {
    name: 'AuraShop — E-Commerce Platform',
    date: 'Jun 2026 · Full Stack',
    desc: 'Full-stack e-commerce platform with product listing, search, category filtering, shopping cart, JWT authentication, and role-based access control. Built with Next.js and a RESTful Express.js backend with PostgreSQL and Prisma ORM.',
    tech: [
      'Next.js 14',
      'TypeScript',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Prisma ORM',
      'JWT',
      'Tailwind CSS',
    ],
    github: 'https://github.com/abilasha24/Aura_shop-ecommerce',
    live: 'https://aura-shop-ecommerce-frontend.vercel.app',
    icon: ShopIcon,
  },

  {
    name: 'SmartFit System',
    date: 'Dec 2025 – Mar 2026 · Personal Project',
    desc: 'Role-based fitness management system featuring separate dashboards for administrators, trainers, and members. Implemented session-based authentication, role authorization, CRUD functionality, and a normalized MySQL database.',
    tech: [
      'PHP',
      'MySQL',
      'JavaScript',
      'HTML',
      'CSS',
    ],
    github: 'https://github.com/abilasha24/smart_fit',
    live: 'http://smartfitweb.rf.gd',
    icon: FitnessIcon,
  },

  {
    name: 'Student Score Predictor',
    date: 'Jan – Feb 2026 · Machine Learning',
    desc: 'Machine learning web application for predicting student performance using regression models. Implemented data preprocessing and feature engineering with Random Forest and Gradient Boosting, then integrated the trained model into an interactive Streamlit application.',
    tech: [
      'Python',
      'Scikit-learn',
      'Streamlit',
      'Random Forest',
      'Gradient Boosting',
    ],
    github: 'https://github.com/abilasha24/student-score-prediction1-app',
    live: 'https://student-score-prediction1-app-an5yveweb5jgse5c7c7kcg.streamlit.app/',
    icon: MLIcon,
  },

  {
    name: 'Personal Portfolio Website',
    date: '2026 · Personal Project',
    desc: 'Responsive developer portfolio designed and developed to showcase full-stack, AI, and machine-learning projects using React, TypeScript, and Tailwind CSS.',
    tech: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
    ],
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

      {/* Header */}
      <section
        style={{
          padding: '4rem 1.5rem 2rem',
          textAlign: 'center',
        }}
      >
        <Reveal>
          <div
            style={{
              maxWidth: 900,
              margin: '0 auto',
            }}
          >
            <p
              style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--violet)',
                marginBottom: '0.5rem',
              }}
            >
              Work
            </p>

            <h1
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                marginBottom: '1rem',
              }}
            >
              Featured{' '}
              <span style={{ color: 'var(--violet2)' }}>
                Projects
              </span>
            </h1>

            <p
              style={{
                color: 'var(--sub)',
                maxWidth: 520,
                margin: '0 auto',
                fontSize: '0.925rem',
                lineHeight: 1.8,
              }}
            >
              A selection of projects showcasing my experience in
              full-stack development, AI integration, and machine learning.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Projects */}
      <section
        style={{
          padding: '2rem 1.5rem 5rem',
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div
                className="hover-card"
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 14,
                  padding: '1.5rem',
                  display: 'grid',
                  gridTemplateColumns: '64px 1fr auto',
                  gap: '1.1rem',
                  alignItems: 'start',
                }}
              >

                {/* Project Icon */}
                <div
                  style={{
                    width: 56,
                    height: 56,
                    flexShrink: 0,
                  }}
                >
                  <p.icon />
                </div>

                {/* Project Information */}
                <div>

                  {/* Project Name */}
                  <div
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '1rem',
                      fontWeight: 700,
                      marginBottom: '0.2rem',
                    }}
                  >
                    {p.name}
                  </div>

                  {/* Project Date */}
                  <div
                    style={{
                      fontSize: '0.72rem',
                      color: 'var(--sub)',
                      marginBottom: '0.6rem',
                    }}
                  >
                    {p.date}
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.865rem',
                      color: 'var(--sub)',
                      lineHeight: 1.75,
                      marginBottom: '0.9rem',
                    }}
                  >
                    {p.desc}
                  </p>

                  {/* Technologies */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.35rem',
                    }}
                  >
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="hover-badge"
                        style={techBadge}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Project Links */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem',
                    alignItems: 'flex-end',
                  }}
                >
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover-btn"
                    style={linkStyle}
                  >
                    <Github size={13} />
                    GitHub
                  </a>

                  {p.live !== '' && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="hover-btn"
                      style={linkStyle}
                    >
                      <ExternalLink size={13} />
                      Live
                    </a>
                  )}
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </section>

    </main>
  );
}