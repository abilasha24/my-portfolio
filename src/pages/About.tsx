import { useRef } from 'react';
import { Download, Code, Database, Globe, Palette, Wrench } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skills = {
  programming: {
    icon: Code,
    title: 'Programming',
    items: ['Java', 'Python', 'SQL'],
    note: 'Problem solving & backend logic development',
  },
  web: {
    icon: Globe,
    title: 'Web Development',
    items: ['HTML', 'CSS', 'JavaScript', 'PHP', 'React'],
    note: 'Full-stack web application development',
  },
  database: {
    icon: Database,
    title: 'Database',
    items: ['MySQL'],
    note: 'Database design & management',
  },
  tools: {
    icon: Wrench,
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Microsoft Office'],
    note: 'Development & version control tools',
  },
  design: {
    icon: Palette,
    title: 'UI/UX & Design',
    items: ['Basic Design', 'Adobe Photoshop'],
    note: 'Basic UI/UX understanding',
  },
};

const education = [
  {
    degree: 'BSc Software Engineering',
    institution: 'ICBT Campus',
    year: '2025 - 2026',
    description:
      'Focused on software engineering principles, system design, databases, and application development with hands-on full-stack projects.',
    current: true,
  },
  {
    degree: 'Higher Diploma in Computing & Software Engineering',
    institution: 'ICBT Campus',
    year: '2023 - 2024',
    description:
      'Built strong foundation in programming, databases, and software development lifecycle.',
    current: false,
  },
  {
    degree: 'A/L Mathematics Stream',
    institution: 'J/ Nelliady Central College',
    year: 'Completed',
    description:
      'Developed strong analytical and logical thinking skills through mathematics studies.',
    current: false,
  },
];

export default function About() {
  const profileRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);

  const profileVisible = useScrollAnimation(profileRef);
  const skillsVisible = useScrollAnimation(skillsRef);
  const educationVisible = useScrollAnimation(educationRef);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Software developer focused on building real-world full-stack and machine learning applications
          </p>
        </div>

        {/* Professional Summary */}
        <section
          ref={profileRef}
          className={`mb-20 transition-all duration-700 ${
            profileVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 md:p-12">

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Professional Summary
            </h2>

            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
              Software Engineering undergraduate focused on building scalable full-stack web applications
              and machine learning systems. Experienced in developing role-based systems, backend logic,
              database design, and deploying real-world applications using PHP, MySQL, and Python.
            </p>

            <a
              href="/resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>

          </div>
        </section>

        {/* Skills Section */}
        <section
          ref={skillsRef}
          className={`mb-20 transition-all duration-700 ${
            skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {Object.entries(skills).map(([key, skill]) => (
              <div
                key={key}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >

                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                    <skill.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>

                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {skill.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                  {skill.note}
                </p>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>

              </div>
            ))}

          </div>
        </section>

        {/* Education Section */}
        <section
          ref={educationRef}
          className={`transition-all duration-700 ${
            educationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Education
          </h2>

          <div className="relative max-w-3xl mx-auto">

            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900/50 transform md:-translate-x-1/2" />

            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-start mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >

                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-slate-900 transform -translate-x-1/2 z-10" />

                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">

                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {edu.year}
                      </span>

                      {edu.current && (
                        <span className="px-2 py-0.5 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                      {edu.degree}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
                      {edu.institution}
                    </p>

                    <p className="text-slate-500 dark:text-slate-500 text-sm">
                      {edu.description}
                    </p>

                  </div>
                </div>

              </div>
            ))}

          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center mt-16">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            What I'm Looking For
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Seeking internship or junior developer opportunities in full-stack development or software engineering roles.
          </p>
        </section>

      </div>
    </div>
  );
}