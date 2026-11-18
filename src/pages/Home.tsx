
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code2,
  Sparkles,
} from 'lucide-react';
import Reveal from '../components/Reveal';
import './Home.css';

const socialLinks = [
  {
    label: 'GitHub',
    url: 'https://github.com/abilasha24',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/abilashaselvanayakam2k06',
    icon: Linkedin,
  },
  {
    label: 'Email',
    url: 'mailto:selvanayagamabilasha@gmail.com',
    icon: Mail,
  },
];


const skillGroups = [
  {
    title: 'Programming & Query Languages',
    skills: [
      { name: 'Python', logo: 'python/python-original.svg' },
      { name: 'JavaScript', logo: 'javascript/javascript-original.svg' },
      { name: 'TypeScript', logo: 'typescript/typescript-original.svg' },
      { name: 'PHP', logo: 'php/php-original.svg' },
      { name: 'SQL', logo: null },
    ],
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5', logo: 'html5/html5-original.svg' },
      { name: 'CSS3', logo: 'css3/css3-original.svg' },
      { name: 'React', logo: 'react/react-original.svg' },
      { name: 'Next.js', logo: 'nextjs/nextjs-original.svg' },
      { name: 'Tailwind CSS', logo: 'tailwindcss/tailwindcss-original.svg' },
    ],
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'Node.js', logo: 'nodejs/nodejs-original.svg' },
      { name: 'Express.js', logo: null },
      { name: 'REST APIs', logo: null },
      { name: 'PostgreSQL', logo: 'postgresql/postgresql-original.svg' },
      { name: 'MySQL', logo: 'mysql/mysql-original.svg' },
      { name: 'Prisma ORM', logo: null },
      { name: 'JWT Authentication', logo: null },
    ],
  },
  {
    title: 'AI & Machine Learning',
    skills: [
      { name: 'Google ADK', logo: null },
      { name: 'Groq API', logo: null },
      { name: 'OpenWeatherMap API', logo: null },
      { name: 'Scikit-learn', logo: null },
      { name: 'Streamlit', logo: null },
    ],
  },
  {
    title: 'Developer Tools & Platforms',
    skills: [
      { name: 'Git', logo: 'git/git-original.svg' },
      { name: 'GitHub', logo: 'github/github-original.svg' },
      { name: 'Postman', logo: 'postman/postman-original.svg' },
      { name: 'Vercel', logo: 'vercel/vercel-original.svg' },
    ],
  },
];

const deviconBase =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/';

export default function Home() {
  return (
    <main className="home-page">
      {/* HERO SECTION */}
      
<section className="hero-section">
  <div className="hero-background-glow" />

  <Reveal>
    <div className="hero-layout">

      {/* LEFT SIDE - INTRODUCTION */}
      <div className="hero-content">
        <div className="availability-badge">
          <span className="availability-dot" />
          Open to Entry-Level Opportunities
        </div>

        <p className="hero-greeting">HELLO, I'M</p>

        <h1 className="hero-name">
          Abilasha
          <span> Selvanayakam</span>
        </h1>

        <h2 className="hero-role">
          Software Engineering Graduate
        </h2>

        <p className="hero-career">
          Aspiring Python Developer
        </p>

        <p className="hero-description">
          A Software Engineering graduate interested in Python
          development, Machine Learning and AI-powered applications.
          I have also built full-stack web applications using modern
          frontend, backend and database technologies.
        </p>

        <div className="hero-location">
          <MapPin size={16} />
          Jaffna, Sri Lanka
        </div>

        <div className="hero-buttons">
          <Link to="/projects" className="primary-button">
            Explore My Projects
            <ArrowRight size={17} />
          </Link>

          <Link to="/contact" className="secondary-button">
            Get In Touch
          </Link>
        </div>

        <div className="hero-socials">
          {socialLinks.map(({ label, url, icon: Icon }) => (
            <a
              key={label}
              href={url}
              target={label === 'Email' ? undefined : '_blank'}
              rel={label === 'Email' ? undefined : 'noopener noreferrer'}
              aria-label={label}
              title={label}
              className="social-link"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <strong>04</strong>
            <span>Projects Built</span>
          </div>

          <div className="stat-item">
            <strong>2026</strong>
            <span>Graduate</span>
          </div>

          <div className="stat-item">
            <strong>Python + AI</strong>
            <span>Career Direction</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - CIRCULAR PROFILE PHOTO */}
      <div className="hero-profile">
        <div className="hero-photo-wrapper">
          <img
            src="/profile.jpg"
            alt="Abilasha Selvanayakam"
            className="hero-photo"
          />
          <span className="photo-status" />
        </div>

        <div className="profile-caption">
          <span>Software Engineering Graduate</span>
          <span>Jaffna, Sri Lanka</span>
        </div>
      </div>

    </div>
  </Reveal>
</section>


      {/* SKILLS PREVIEW */}
      <section className="skills-section">
        <Reveal>
          <div className="section-heading">
            <span className="section-eyebrow">
              <Code2 size={15} />
              TECHNICAL EXPERTISE
            </span>

            <h2>
              Technologies & <span>Tools</span>
            </h2>

            <p>
              Technologies and tools I have used while learning and
              building my software development projects.
            </p>
          </div>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 100}>
              <div className="skill-card">
                <h3>{group.title}</h3>

                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <div className="skill-item" key={skill.name}>
                      {skill.logo ? (
                        <img
                          src={`${deviconBase}${skill.logo}`}
                          alt=""
                          className="skill-logo"
                          loading="lazy"
                        />
                      ) : (
                        <Sparkles
                          size={15}
                          className="skill-fallback-icon"
                        />
                      )}

                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="all-skills-link">
          <Link to="/about">
            Learn More About My Skills
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
