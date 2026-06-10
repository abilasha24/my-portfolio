import { useState, useRef, FormEvent } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'selvanayagamabilasha@gmail.com',
    href: 'mailto:selvanayagamabilasha@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+94 774115526',
    href: 'tel:+94774115526',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Jaffna, Sri Lanka',
    href: null,
  },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/abilashaselvanayakam2k06',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/abilasha24',
    icon: Github,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const headerVisible = useScrollAnimation(headerRef);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      // REAL ACTION (instead of fake timeout)
      await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      alert("Message failed to send. Try email directly.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <section
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Let’s Work Together
          </h1>

          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Open for internship and junior developer opportunities in full-stack development and software engineering.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* FORM */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Send Message
            </h2>

            {isSubmitted ? (
              <div className="text-center py-10">
                <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Message Sent</h3>
                <p className="text-slate-500 mt-2">I’ll respond soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-700"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-700"
                />

                <textarea
                  placeholder="Your Message (project / internship / collaboration)"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-700"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

          {/* INFO SIDE */}
          <div className="space-y-8">

            {/* CONTACT INFO */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">

              <h2 className="text-2xl font-bold mb-6">Contact Info</h2>

              {contactInfo.map((info) => (
                <div key={info.label} className="flex gap-4 mb-6">

                  <info.icon className="text-blue-500 w-5 h-5 mt-1" />

                  <div>
                    <p className="text-sm text-slate-500">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="font-medium hover:text-blue-500">
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium">{info.value}</p>
                    )}
                  </div>

                </div>
              ))}

              {/* SOCIAL */}
              <div className="flex gap-4 mt-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-blue-600 hover:text-white transition"
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

            </div>

            {/* CTA BOX */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-8 rounded-2xl">

              <h3 className="text-xl font-bold mb-2">
                Available for Internships
              </h3>

              <p className="text-blue-100 mb-4">
                Looking for junior developer / internship roles in full-stack or backend development.
              </p>

              <a
                href="mailto:selvanayagamabilasha@gmail.com"
                className="inline-block bg-white text-blue-600 px-5 py-2 rounded-lg font-medium"
              >
                Quick Email
              </a>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}