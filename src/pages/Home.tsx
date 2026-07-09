import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh' }}>

      {/* HERO */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', textAlign: 'center',
        padding: '100px 1.5rem 60px',
      }}>
        <div style={{ maxWidth: 640 }}>

          {/* Avatar */}
          <div style={{
            width: 100, height: 100, borderRadius: '50%',
            background: 'linear-gradient(135deg, #8B5CF6, #4C1D95)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1.5rem',
            border: '3px solid var(--border)',
            fontSize: '2rem', fontWeight: 700, color: '#fff',
            fontFamily: 'Space Grotesk, sans-serif',
          }}>
            AS
          </div>

          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(139,92,246,0.12)',
            border: '1px solid rgba(139,92,246,0.25)',
            color: 'var(--violet2)', fontSize: '0.78rem',
            padding: '0.3rem 1rem', borderRadius: 99,
            marginBottom: '1.25rem', fontWeight: 500,
          }}>
            <span style={{ width: 7, height: 7, background: 'var(--green)', borderRadius: '50%', display: 'inline-block' }} />
            Open to opportunities
          </div>

          {/* Name */}
          <h1 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(2rem, 5vw, 3.25rem)',
            fontWeight: 700, lineHeight: 1.1,
            letterSpacing: '-0.03em', marginBottom: '0.75rem',
          }}>
            Hi, I'm{' '}
            <span style={{ color: 'var(--violet2)' }}>Abilasha</span>
            <br />Selvanayakam
          </h1>

          {/* Role */}
          <p style={{ color: 'var(--sub)', fontSize: '1rem', marginBottom: '0.75rem' }}>
            Junior Full Stack Developer · AI-Integrated Apps
          </p>

          {/* Description */}
          <p style={{
            color: 'var(--sub)', fontSize: '0.925rem',
            lineHeight: 1.8, marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem',
          }}>
            Building production-ready web apps with React, Next.js, PHP & Python.
            Adding AI — from LLM agents to ML models — into real-world projects
            from Jaffna, Sri Lanka.
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/projects" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'var(--violet)', color: '#fff',
              padding: '0.7rem 1.5rem', borderRadius: 8,
              fontSize: '0.875rem', fontWeight: 600,
              fontFamily: 'Space Grotesk, sans-serif', textDecoration: 'none',
            }}>
              View Projects <ArrowRight size={15} />
            </Link>

            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'transparent', color: 'var(--text)',
              border: '1px solid var(--border)',
              padding: '0.7rem 1.5rem', borderRadius: 8,
              fontSize: '0.875rem', fontWeight: 500,
              fontFamily: 'Space Grotesk, sans-serif', textDecoration: 'none',
            }}>
              Contact Me
            </Link>

            

          {/* Social links */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.75rem' }}>
            <a href="https://github.com/abilasha24" target="_blank" rel="noreferrer"
              style={{ color: 'var(--sub)', transition: 'color 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseOut={e => (e.currentTarget.style.color = 'var(--sub)')}>
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/abilashaselvanayakam2k06" target="_blank" rel="noreferrer"
              style={{ color: 'var(--sub)', transition: 'color 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseOut={e => (e.currentTarget.style.color = 'var(--sub)')}>
              <Linkedin size={20} />
            </a>
            <a href="mailto:selvanayagamabilasha@gmail.com"
              style={{ color: 'var(--sub)', transition: 'color 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseOut={e => (e.currentTarget.style.color = 'var(--sub)')}>
              <Mail size={20} />
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex', justifyContent: 'center', gap: '3rem',
            marginTop: '3rem', paddingTop: '2rem',
            borderTop: '1px solid var(--border)',
          }}>
            {[
              { num: '5+', label: 'Projects Shipped' },
              { num: '2', label: 'Degrees' },
              { num: '2030', label: 'AI Dev Goal' },
            ].map(s => (
              <div key={s.label}>
                <div style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '1.6rem', fontWeight: 700, color: 'var(--violet2)',
                }}>{s.num}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--sub)', marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SKILLS PREVIEW */}
      <section style={{
        padding: '4rem 1.5rem',
        background: 'var(--card)',
        borderTop: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{
            textAlign: 'center', fontSize: '0.72rem', fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--violet)', marginBottom: '0.5rem',
          }}>Tech Stack</p>
          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif', textAlign: 'center',
            fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 700,
            marginBottom: '2rem', letterSpacing: '-0.02em',
          }}>
            Skills & <span style={{ color: 'var(--violet2)' }}>Technologies</span>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
          }}>
            {[
              { cat: 'Frontend', skills: ['React', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Vite'] },
              { cat: 'Backend', skills: ['PHP', 'Node.js', 'Express', 'REST APIs', 'JWT Auth'] },
              { cat: 'Database', skills: ['MySQL', 'PostgreSQL', 'Prisma ORM', 'Neon DB'] },
              { cat: 'AI & ML', skills: ['Google ADK', 'Groq API', 'LLaMA 3.3', 'Scikit-learn', 'Streamlit'] },
              { cat: 'Languages', skills: ['JavaScript', 'TypeScript', 'PHP', 'Python', 'SQL'] },
              { cat: 'Tools', skills: ['Git', 'GitHub', 'Vercel', 'VS Code', 'Postman', 'Vite'] },
            ].map(({ cat, skills }) => (
              <div key={cat} style={{
                background: 'var(--bg)', border: '1px solid var(--border)',
                borderRadius: 12, padding: '1.15rem',
              }}>
                <p style={{
                  fontSize: '0.72rem', fontWeight: 600,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: 'var(--violet)', marginBottom: '0.85rem',
                }}>{cat}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {skills.map(s => (
                    <span key={s} style={{
                      background: 'var(--card2)', color: 'var(--sub)',
                      fontSize: '0.78rem', padding: '0.25rem 0.65rem',
                      borderRadius: 6, border: '1px solid var(--border)',
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}