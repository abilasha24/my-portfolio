
import {
  MapPin,
  Mail,
  GraduationCap,
  Award,
  Code2,
  Briefcase,
} from 'lucide-react';

import Reveal from '../components/Reveal';
import './About.css';
import { useState } from 'react';

const quickInfo = [
  {
    icon: <MapPin size={17} />,
    label: 'Location',
    value: 'Jaffna, Sri Lanka',
  },
  {
    icon: <Mail size={17} />,
    label: 'Email',
    value: 'selvanayagamabilasha@gmail.com',
    link: 'mailto:selvanayagamabilasha@gmail.com',
  },
  {
    icon: <GraduationCap size={17} />,
    label: 'Qualification',
    value: 'B.Sc. (Hons) Software Engineering',
  },
  {
    icon: <Briefcase size={17} />,
    label: 'Career Direction',
    value: 'Python Developer | AI Engineer',
  },
];

const experience = [
  {
    role: 'Artificial Intelligence Intern',
    company: 'DecodeLabs',
    type: 'Remote Internship',
    location: 'India · Remote',
    period: 'September 2026 – October 2026',
    responsibilities: [
      'Completed a remote virtual internship in Artificial Intelligence.',
      'Developed a Python-based rule-based chatbot as part of the internship project.',
      'Practiced Python programming, debugging and software testing.',
      'Worked on project implementation and documentation.',
    ],
    skills: ['Python', 'Debugging', 'Software Testing'],
  },
];
const education = [
  {
    degree: 'B.Sc. (Hons) Software Engineering',
    institution: 'Cardiff Metropolitan University, UK',
    campus: 'ICBT Campus, Jaffna',
    result: 'Second Class, Division One',
    period: 'Awarded: May 2026',
  },
  {
    degree: 'Higher Diploma in Computing & Software Engineering',
    institution: 'Cardiff Metropolitan University',
    campus: 'ICBT Campus, Jaffna',
    result: 'Merit Pass',
    period: 'March 2023 – November 2024',
  },
];

const certifications = [
  {
    name: 'Artificial Intelligence Internship Completion',
    org: 'DecodeLabs · October 2026',
    image: '/certificates/decodelabs.jpg',
  },
  {
    name: 'AI Agents Intensive Vibe Coding Course',
    org: 'Kaggle & Google · June 2026',
    image: '/certificates/kaggle-google.jpg',
  },
  {
    name: 'Advanced Python Programming',
    org: 'i-Tech Academy · May 2025',
    image: '/certificates/advanced-python.jpg',
  },
  {
    name: 'Python Certificate',
    org: 'GUVI (HCL & Google) · May 2025',
    image: '/certificates/guvi-python.jpg',
  },
  {
    name: 'Diploma in IT & Artificial Intelligence',
    org: 'CASED Institute · 2025',
    image: '/certificates/cased-ai.jpg',
  },
  {
    name: 'Workshop on NLP & Computer Vision',
    org: 'ICBT Campus, Jaffna · May 2026',
    image: '/certificates/nlp-computer-vision.jpg',
  },
  {
    name: 'IoT & Smart Solutions Workshop',
    org: 'ICBT Campus, Jaffna · August 2026',
    image: '/certificates/iot-workshop.jpg',
  },
  {
    name: 'AI Master Class',
    org: 'LP Campus · July 2024',
    image: '/certificates/ai-master-class.jpg',
  },
];

const interests = [
  'Python Development',
  'Artificial Intelligence',
  'Machine Learning',
  'AI-powered Applications',
  'Full-Stack Development',
  'Problem Solving',
];

export default function About() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<(typeof certifications)[number] | null>(null);

  return (
    <main className="about-page">

      {/* PAGE INTRO */}
      <section className="about-header">
        <Reveal>
          <div className="about-header-content">
            <p className="about-eyebrow">GET TO KNOW ME</p>

            <h1>
              About <span>Me</span>
            </h1>

            <p className="about-header-description">
              Software Engineering Graduate with an interest in Python
              Development, Artificial Intelligence and building practical
              software applications.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ABOUT ME */}
      <section className="about-main-section">
        <div className="about-container about-grid">

          <Reveal>
            <div className="about-story">
              <p className="about-eyebrow">MY BACKGROUND</p>

              <h2>
                Who <span>I Am</span>
              </h2>

              <p>
                I am a Software Engineering graduate from Cardiff
                Metropolitan University, UK, through ICBT Campus, Jaffna.
                I am interested in developing software applications,
                particularly in Python development and Artificial
                Intelligence.
              </p>

              <p>
                Through my personal projects, I have worked with Python,
                machine learning, AI agent development and full-stack web
                technologies. My projects include a Tamil-language
                agriculture AI assistant, a student score prediction
                application, an e-commerce platform and a fitness
                management system.
              </p>

              <p>
                I am currently strengthening my Python programming,
                database and software development foundations while
                exploring AI technologies and their practical
                applications.
              </p>

              <p>
                My long-term goal is to become an AI Engineer by first
                building strong software development and Python
                programming skills.
              </p>

              <div className="about-interest-list">
                {interests.map((interest) => (
                  <span key={interest} className="about-interest">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* QUICK INFORMATION */}
          <Reveal delay={150}>
            <div className="about-info-card">
              <h2>
                <Code2 size={20} />
                Quick Information
              </h2>

              <div className="about-info-list">
                {quickInfo.map((item) => (
                  <div className="about-info-row" key={item.label}>
                    <div className="about-info-label">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>

                    {item.link ? (
                      <a href={item.link}>{item.value}</a>
                    ) : (
                      <span className="about-info-value">
                        {item.value}
                      </span>
                    )}
                  </div>
                ))}

                <div className="about-info-row">
                  <div className="about-info-label">
                    <span>🌐</span>
                    <span>Languages</span>
                  </div>
                  <span className="about-info-value">
                    Tamil · English · Sinhala
                  </span>
                </div>

                <div className="about-info-row">
                  <div className="about-info-label">
                    <Briefcase size={17} />
                    <span>Availability</span>
                  </div>
                  <span className="about-availability">
                    Open to Entry-Level Opportunities
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

            {/* EXPERIENCE */}
      <section className="about-education-section">
        <div className="about-container">

          <Reveal>
            <div className="about-section-heading">
              <p className="about-eyebrow">PROFESSIONAL EXPERIENCE</p>
              <h2>
                Internship <span>Experience</span>
              </h2>
            </div>
          </Reveal>

          <div className="about-education-list">
            {experience.map((item, index) => (
              <Reveal key={item.role} delay={index * 100}>
                <article className="about-education-card">

                  <div className="about-education-icon">
                    <Briefcase size={23} />
                  </div>

                  <div className="about-education-content">
                    <h3>{item.role}</h3>

                    <p className="about-education-institution">
                      {item.company} · {item.type}
                    </p>

                    <p className="about-education-campus">
                      {item.location}
                    </p>

                    <div className="about-education-meta">
                      <span>Completed Internship</span>
                      <span>{item.period}</span>
                    </div>

                    <ul className="about-experience-points">
                      {item.responsibilities.map((responsibility) => (
                        <li key={responsibility}>
                          {responsibility}
                        </li>
                      ))}
                    </ul>

                    <div className="about-experience-skills">
                      {item.skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>

                  </div>
                </article>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* EDUCATION */}
      <section className="about-education-section">
        <div className="about-container">

          <Reveal>
            <div className="about-section-heading">
              <p className="about-eyebrow">ACADEMIC BACKGROUND</p>
              <h2>
                Education & <span>Qualifications</span>
              </h2>
            </div>
          </Reveal>

          <div className="about-education-list">
            {education.map((item, index) => (
              <Reveal key={item.degree} delay={index * 100}>
                <article className="about-education-card">
                  <div className="about-education-icon">
                    <GraduationCap size={23} />
                  </div>

                  <div className="about-education-content">
                    <h3>{item.degree}</h3>

                    <p className="about-education-institution">
                      {item.institution}
                    </p>

                    <p className="about-education-campus">
                      {item.campus}
                    </p>

                    <div className="about-education-meta">
                      <span>{item.result}</span>
                      <span>{item.period}</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* CERTIFICATIONS */}
          <Reveal>
            <div className="about-certification-heading">
              <Award size={21} />
              <h2>Certifications & Workshops</h2>
            </div>
          </Reveal>

          <div className="about-certification-grid">
  {certifications.map((item, index) => (
    <Reveal key={item.name} delay={index * 60}>
      <button
        type="button"
        className="about-certification-card"
        onClick={() => setSelectedCertificate(item)}
        aria-label={`View ${item.name} certificate`}
      >
        <div className="about-certification-icon">
          <Award size={18} />
        </div>

        <div>
          <h3>{item.name}</h3>
          <p>{item.org}</p>
          <span className="certificate-view-text">
            View Certificate ↗
          </span>
        </div>
      </button>
    </Reveal>
  ))}
</div>

{selectedCertificate && (
  <div
    className="certificate-modal"
    onClick={() => setSelectedCertificate(null)}
  >
    <div
      className="certificate-modal-content"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        className="certificate-close"
        onClick={() => setSelectedCertificate(null)}
        aria-label="Close certificate"
      >
        ×
      </button>

      <h2>{selectedCertificate.name}</h2>

      <img
        src={selectedCertificate.image}
        alt={selectedCertificate.name}
      />

    </div>
  </div>
)}
        </div>
      </section>
    </main>
  );
}