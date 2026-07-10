import { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=selvanayagamabilasha@gmail.com&su=${encodeURIComponent(form.subject || 'Job opportunity / Collaboration')}&body=${encodeURIComponent(form.message + '\n\n---\nFrom: ' + (form.name || 'N/A') + '\nEmail: ' + (form.email || 'N/A'))}`;

  return (
    <main style={{ paddingTop: 80, minHeight: '100vh' }}>
      <section style={{ padding: '4rem 1.5rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--violet)', marginBottom: '0.5rem' }}>Get In Touch</p>
          <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            Let's <span style={{ color: 'var(--violet2)' }}>Connect</span>
          </h1>
          <p style={{ color: 'var(--sub)', maxWidth: 480, margin: '0 auto', fontSize: '0.925rem', lineHeight: 1.8 }}>
            Open to junior developer roles, internships & remote opportunities. Based in Jaffna, Sri Lanka.
          </p>
        </div>
      </section>

      <section style={{ padding: '2rem 1.5rem 5rem' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', marginBottom: '3rem' }}>
            <a href="mailto:selvanayagamabilasha@gmail.com" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.15rem 1.25rem' }}>
                <div style={{ color: 'var(--violet2)', marginBottom: '0.5rem' }}><Mail size={18} /></div>
                <div style={{ fontSize: '0.72rem', color: 'var(--sub)', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Email</div>
                <span style={{ fontSize: '0.82rem', color: 'var(--text)', fontWeight: 500, wordBreak: 'break-all' }}>selvanayagamabilasha@gmail.com</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/abilashaselvanayakam2k06" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.15rem 1.25rem' }}>
                <div style={{ color: 'var(--violet2)', marginBottom: '0.5rem' }}><Linkedin size={18} /></div>
                <div style={{ fontSize: '0.72rem', color: 'var(--sub)', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>LinkedIn</div>
                <span style={{ fontSize: '0.82rem', color: 'var(--text)', fontWeight: 500 }}>abilashaselvanayakam2k06</span>
              </div>
            </a>

            <a href="https://github.com/abilasha24" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.15rem 1.25rem' }}>
                <div style={{ color: 'var(--violet2)', marginBottom: '0.5rem' }}><Github size={18} /></div>
                <div style={{ fontSize: '0.72rem', color: 'var(--sub)', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>GitHub</div>
                <span style={{ fontSize: '0.82rem', color: 'var(--text)', fontWeight: 500 }}>abilasha24</span>
              </div>
            </a>

            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.15rem 1.25rem' }}>
              <div style={{ color: 'var(--violet2)', marginBottom: '0.5rem' }}><MapPin size={18} /></div>
              <div style={{ fontSize: '0.72rem', color: 'var(--sub)', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Location</div>
              <span style={{ fontSize: '0.82rem', color: 'var(--text)', fontWeight: 500 }}>Jaffna, Sri Lanka</span>
            </div>
          </div>

          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: '2rem' }}>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: 8 }}>
              <Send size={17} color="var(--violet2)" /> Send a Message
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.78rem', color: 'var(--sub)', display: 'block', marginBottom: '0.4rem' }}>Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" style={{ width: '100%', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 8, padding: '0.65rem 0.9rem', color: 'var(--text)', fontSize: '0.875rem', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ fontSize: '0.78rem', color: 'var(--sub)', display: 'block', marginBottom: '0.4rem' }}>Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" style={{ width: '100%', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 8, padding: '0.65rem 0.9rem', color: 'var(--text)', fontSize: '0.875rem', outline: 'none' }} />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', color: 'var(--sub)', display: 'block', marginBottom: '0.4rem' }}>Subject</label>
                <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Job opportunity / Collaboration" style={{ width: '100%', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 8, padding: '0.65rem 0.9rem', color: 'var(--text)', fontSize: '0.875rem', outline: 'none' }} />
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', color: 'var(--sub)', display: 'block', marginBottom: '0.4rem' }}>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message..." rows={5} style={{ width: '100%', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 8, padding: '0.65rem 0.9rem', color: 'var(--text)', fontSize: '0.875rem', outline: 'none', resize: 'vertical', fontFamily: 'Inter, sans-serif' }} />
              </div>

              <a href={mailtoLink} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, background: 'var(--violet)', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: 8, fontSize: '0.875rem', fontWeight: 600, fontFamily: 'Space Grotesk, sans-serif', textDecoration: 'none' }}>
  <Send size={15} /> Send via Email
</a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}