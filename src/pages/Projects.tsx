
import { Github, ExternalLink, Bot } from 'lucide-react';

import {
  FarmerIcon,
  ShopIcon,
  FitnessIcon,
  MLIcon,
  PortfolioIcon,
} from '../components/ProjectIcons';

import Reveal from '../components/Reveal';
import './Projects.css';

const projects = [
  {
    name: 'Tamil Farmer Assistant',
    category: 'AI Agent · Personal Project',
    date: 'June 2026',
    desc: 'A Tamil-language AI assistant designed to support farmers in Jaffna with agricultural guidance, weather information, crop suggestions and market prices.',
    tech: [
      'Python',
      'Google ADK',
      'Groq API',
      'GPT-OSS 120B',
      'OpenWeatherMap API',
      'Streamlit',
    ],
    github: 'https://github.com/abilasha24/Tamil-farmer-agent',
    live: 'https://tamil-farmer-agent-j3cyzcehjeedshdjfmt3mw.streamlit.app',
    icon: FarmerIcon,
  },
  {
    name: 'AuraShop',
    category: 'Full-Stack Development · Personal Project',
    date: 'June 2026',
    desc: 'A full-stack e-commerce platform featuring product listings, search, category filtering and shopping cart functionality. Includes a RESTful backend API with JWT authentication and role-based access control.',
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
    name: 'Student Score Prediction',
    category: 'Machine Learning · Personal Project',
    date: 'January – February 2026',
    desc: 'A machine learning web application that predicts student performance using regression models. Includes data preprocessing, feature engineering, model training and an interactive web interface.',
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
    name: 'Rule-Based AI Chatbot',
    category: 'Artificial Intelligence · DecodeLabs Internship',
    date: 'September – October 2026',
    desc: 'A Python-based rule-driven chatbot developed as part of my Artificial Intelligence internship at DecodeLabs. It uses conditional logic and predefined responses to handle user messages such as greetings, help requests and basic AI-related questions.',
    tech: [
      'Python',
      'Conditional Statements',
      'Loops',
      'Rule-Based Logic',
    ],
    github: 'https://github.com/abilasha24/DecodeLabs-AI-Rule-Based-Chatbot',
    icon: Bot,
  },
  {
    name: 'SmartFit System',
    category: 'Web Development · Personal Project',
    date: 'December 2025 – March 2026',
    desc: 'A role-based fitness management system with separate dashboards for administrators, trainers and members. Includes session-based authentication, authorization, CRUD operations and MySQL database management.',
    tech: [
      'PHP',
      'MySQL',
      'JavaScript',
      'HTML5',
      'CSS3',
    ],
    github: 'https://github.com/abilasha24/smart_fit',
    icon: FitnessIcon,
  },
  {
    name: 'Personal Portfolio Website',
    category: 'Frontend Development · Personal Project',
    date: '2026',
    desc: 'A responsive, dark-themed portfolio website developed to present my background, technical skills and software projects. Built using reusable React components and deployed through Vercel.',
    tech: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
    ],
    github: 'https://github.com/abilasha24/my-portfolio',
    icon: PortfolioIcon,
  },
];

export default function Projects() {
  return (
    <main className="projects-page">

      {/* HEADER */}
      <section className="projects-header">
        <Reveal>
          <div className="projects-header-content">
            <p className="projects-eyebrow">MY WORK</p>

            <h1>
              Featured <span>Projects</span>
            </h1>

            <p>
              A collection of personal and internship projects
              demonstrating my work in Python development,
              Artificial Intelligence, Machine Learning and
              full-stack web development.
            </p>
          </div>
        </Reveal>
      </section>

      {/* PROJECT LIST */}
      <section className="projects-section">
        <div className="projects-container">

          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 80}>
              <article className="project-card">

                {/* ICON */}
                <div className="project-icon">
                  <project.icon />
                </div>

                {/* DETAILS */}
                <div className="project-content">
                  <div className="project-category">
                    {project.category}
                  </div>

                  <h2>{project.name}</h2>

                  <p className="project-date">
                    {project.date}
                  </p>

                  <p className="project-description">
                    {project.desc}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="project-tech-list">
                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="project-tech"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* LINKS */}
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`View ${project.name} source code on GitHub`}
                  >
                    <Github size={16} />
                    GitHub
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-live-link"
                      aria-label={`View ${project.name} live demo`}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>

              </article>
            </Reveal>
          ))}

        </div>
      </section>

    </main>
  );
}
