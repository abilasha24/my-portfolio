
import { useState, type ChangeEvent, type FormEvent } from 'react';
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Send,
  ArrowUpRight,
} from 'lucide-react';
import Reveal from '../components/Reveal';
import './Contact.css';

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject =
      form.subject.trim() || 'Job Opportunity / Collaboration';

    const body = `${form.message}

---
From: ${form.name}
Email: ${form.email}`;

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=selvanayagamabilasha@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(gmailLink, '_blank', 'noopener,noreferrer');
  };

  const contactCards = [
    {
      href: 'mailto:selvanayagamabilasha@gmail.com',
      icon: <Mail size={19} />,
      label: 'Email',
      value: 'selvanayagamabilasha@gmail.com',
    },
    {
      href: 'https://www.linkedin.com/in/abilashaselvanayakam2k06',
      icon: <Linkedin size={19} />,
      label: 'LinkedIn',
      value: 'abilashaselvanayakam2k06',
    },
    {
      href: 'https://github.com/abilasha24',
      icon: <Github size={19} />,
      label: 'GitHub',
      value: 'abilasha24',
    },
  ];

  return (
    <main className="contact-page">
      <section className="contact-header">
        <Reveal>
          <div className="contact-header-content">
            <p className="section-eyebrow">GET IN TOUCH</p>

            <h1>
              Let's Connect
              <br />
              <span>I'm Open to Opportunities</span>
            </h1>

            <p className="contact-intro">
              I'm a Software Engineering graduate interested in entry-level
              software development, Python development, and AI-focused
              opportunities. Feel free to contact me about jobs, internships,
              or collaborations.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="contact-content">
        <div className="contact-container">

          <div className="contact-cards">
            {contactCards.map((card, index) => (
              <Reveal key={card.label} delay={index * 100}>
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card hover-card"
                >
                  <div className="contact-card-icon">{card.icon}</div>

                  <div className="contact-card-label">{card.label}</div>

                  <div className="contact-card-value">
                    {card.value}
                    <ArrowUpRight size={14} />
                  </div>
                </a>
              </Reveal>
            ))}

            <Reveal delay={300}>
              <div className="contact-card location-card hover-card">
                <div className="contact-card-icon">
                  <MapPin size={19} />
                </div>

                <div className="contact-card-label">Location</div>

                <div className="contact-card-value">
                  Jaffna, Sri Lanka
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="contact-form-card">
              <div className="contact-form-heading">
                <div className="contact-form-icon">
                  <Send size={18} />
                </div>

                <div>
                  <h2>Send a Message</h2>
                  <p>I'd be happy to hear from you.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Your Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Job Opportunity / Internship / Collaboration"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows={6}
                    required
                  />
                </div>

                <button type="submit" className="contact-submit-button">
                  <Send size={16} />
                  Send via Email
                  <ArrowUpRight size={16} />
                </button>

                <p className="contact-form-note">
                  This button opens Gmail with your message prepared.
                  You can review and send it from there.
                </p>
              </form>
            </div>
          </Reveal>

        </div>
      </section>
    </main>
  );
}
