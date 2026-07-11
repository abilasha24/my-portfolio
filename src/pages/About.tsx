import { MapPin, Mail, GraduationCap, Award } from 'lucide-react';
import Reveal from '../components/Reveal';

export default function About() {
  return (
    <main style={{ paddingTop: 80, minHeight: '100vh' }}>

      {/* HEADER */}
      <section style={{ padding: '4rem 1.5rem 2rem', textAlign: 'center' }}>
        <Reveal>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{
            fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'var(--violet)', marginBottom: '0.5rem',
          }}>About Me</p>
          <h1 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '1rem',
          }}>
            Full Stack Developer based in <span style={{ color: 'var(--violet2)' }}>Jaffna, Sri Lanka</span>
          </h1>
          <p style={{ color: 'var(--sub)', maxWidth: 520, margin: '0 auto', fontSize: '0.925rem', lineHeight: 1.8 }}>
            Junior Full Stack Developer with a passion for building AI-integrated web applications.
          </p>
        </div>
        </Reveal>
      </section>

      {/* ABOUT GRID */}
      <section style={{ padding: '2rem 1.5rem', background: 'var(--card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>

          {/* Left */}
          <Reveal delay={0}>
          <div>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem' }}>
              Who I Am
            </h2>
            <p style={{ color: 'var(--sub)', fontSize: '0.9rem', lineHeight: 1.85, marginBottom: '1rem' }}>
              I'm a Junior Full Stack Developer specializing in React, Next.js, TypeScript, and PostgreSQL — with growing expertise in AI-integrated applications using Python and Google ADK.
              I build role-based web applications, REST APIs, and authentication systems.
            </p>
            <p style={{ color: 'var(--sub)', fontSize: '0.9rem', lineHeight: 1.85, marginBottom: '1rem' }}>
              I hold a B.Sc. (Hons) in Software Engineering from Cardiff Metropolitan
              University (ICBT Campus, Jaffna) and an HND in Computing with Merit Pass.
            </p>
            <p style={{ color: 'var(--sub)', fontSize: '0.9rem', lineHeight: 1.85 }}>
              I am focused on combining full-stack engineering with AI technologies to create intelligent, real-world applications.
            </p>

            {/* Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.25rem' }}>
              {['React', 'TypeScript', 'Next.js', 'PHP', 'Python', 'PostgreSQL', 'Google ADK', 'Tailwind CSS'].map((s, i) => (
                <span key={s} className="hover-badge" style={{
                  background: 'rgba(139,92,246,0.1)',
                  border: '1px solid rgba(139,92,246,0.2)',
                  color: 'var(--violet2)', fontSize: '0.78rem',
                  padding: '0.3rem 0.75rem', borderRadius: 99,
                  transitionDelay: `${i * 40}ms`,
                }}>{s}</span>
              ))}
            </div>
          </div>
          </Reveal>

          {/* Right — Info */}
          <Reveal delay={150}>
          <div>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem' }}>
              Quick Info
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                { icon: <MapPin size={15} />, label: 'Location', value: 'Jaffna, Sri Lanka' },
                { icon: <Mail size={15} />, label: 'Email', value: 'selvanayagamabilasha@gmail.com', link: 'mailto:selvanayagamabilasha@gmail.com' },
                { icon: <GraduationCap size={15} />, label: 'Degree', value: 'B.Sc. (Hons) Software Engineering' },
                { icon: <GraduationCap size={15} />, label: 'University', value: 'Cardiff Metropolitan University (ICBT Campus Jaffna)' },
                { label: '🌐', value: 'Tamil · English · Sinhala', plainLabel: 'Languages' },
                { label: '💼', value: 'Open to opportunities', plainLabel: 'Status', green: true },
              ].map((row, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '0.7rem 0', borderBottom: '1px solid var(--border)',
                  fontSize: '0.85rem',
                }}>
                  <span style={{ color: 'var(--sub)', display: 'flex', alignItems: 'center', gap: 6 }}>
                    {row.icon || row.label} {row.plainLabel || row.label}
                  </span>
                  {row.link ? (
                    <a href={row.link} style={{ color: 'var(--violet2)', fontWeight: 500, textAlign: 'right' }}>{row.value}</a>
                  ) : (
                    <span style={{ color: row.green ? 'var(--green)' : 'var(--text)', fontWeight: 500, textAlign: 'right' }}>{row.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* EDUCATION */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <Reveal>
          <div>
            <p style={{
              fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--violet)', marginBottom: '0.5rem',
            }}>Background</p>
            <h2 style={{
              fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
              fontWeight: 700, marginBottom: '2rem', letterSpacing: '-0.02em',
            }}>
              Education & <span style={{ color: 'var(--violet2)' }}>Certifications</span>
            </h2>
          </div>
          </Reveal>

          {/* Education list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
            {[
              { deg: 'B.Sc. (Hons) Software Engineering', school: 'ICBT Campus – Cardiff Metropolitan University, Jaffna', year: ' 2025 –  2026 (Expected Completion)' },
              { deg: 'Higher Diploma in Computing & Software Engineering', school: 'ICBT Campus – Cardiff Metropolitan University · Merit Pass', year: 'Mar 2023 – Nov 2024' },
            ].map((e, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="hover-card" style={{
                  background: 'var(--card)', border: '1px solid var(--border)',
                  borderRadius: 12, padding: '1.15rem 1.35rem',
                  display: 'flex', gap: '1rem', alignItems: 'flex-start',
                }}>
                  <div style={{
                    width: 10, height: 10, borderRadius: '50%',
                    background: 'var(--violet)', flexShrink: 0, marginTop: 5,
                  }} />
                  <div>
                    <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.9rem', fontWeight: 700 }}>{e.deg}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--violet2)', marginTop: 3 }}>{e.school}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--sub)', marginTop: 3 }}>{e.year}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Certifications */}
          <Reveal>
          <h3 style={{
            fontFamily: 'Space Grotesk, sans-serif', fontSize: '1rem',
            fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <Award size={18} color="var(--violet2)" /> Certifications & Workshops
          </h3>
          </Reveal>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.65rem',
          }}>
            {[
              { name: ' Higher Diploma in Computing & Software Engineering', org: 'ICBT Campus (Cardiff Met), Nov 2024' },
              { name: 'AI Agents Intensive Vibe Coding Course', org: 'Kaggle & Google · Jun 2026' },
              { name: 'Advanced Python Programming', org: 'i-Tech Academy · May 2025' },
              { name: 'Python Certificate', org: 'GUVI (HCL & Google) · May 2025' },
              { name: 'Diploma in IT & Artificial Intelligence', org: 'CASED Institute · 2025' },
              { name: 'Workshop on NLP & Computer Vision', org: 'ICBT Campus Jaffna · May 2026' },
              { name: 'Advanced Graphic Design', org: 'Orinsto Institute · Jun 2025' },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="hover-card" style={{
                  background: 'var(--card)', border: '1px solid var(--border)',
                  borderRadius: 10, padding: '0.85rem 1rem',
                }}>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text)', fontWeight: 500 }}>{c.name}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--sub)', marginTop: 3 }}>{c.org}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}