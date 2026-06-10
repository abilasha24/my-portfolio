import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Download } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />

        {/* Glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

          <p className="text-blue-400 text-sm tracking-widest uppercase mb-4">
            Available for Internship / Junior Developer Roles
          </p>

          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Abilasha Selvanayakam
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-3">
            Full Stack Developer (React / PHP / Node.js)
          </p>

          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            I build real-world full-stack applications with authentication systems,
            database design, and deployed production projects using PHP, MySQL, React, and Python.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">

            <Link
              to="/projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2 transition"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20"
            >
              Hire Me / Contact
            </Link>

          </div>

          {/* SOCIAL */}
          <div className="flex justify-center gap-4">

            <a
              href="https://github.com/abilasha24"
              target="_blank"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <Github className="w-5 h-5 text-white" />
            </a>

            <a
              href="https://www.linkedin.com/in/abilashaselvanayakam2k06"
              target="_blank"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>

            <a
              href="/Abilasha_Resume.pdf"
              download
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <Download className="w-5 h-5 text-white" />
            </a>

          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-white dark:bg-slate-900">

        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            { value: "2+", label: "Full Stack Projects" },
            { value: "1", label: "ML Project" },
            { value: "Intern Ready", label: "Career Status" },
            { value: "PHP + React", label: "Core Stack" }
          ].map((item, i) => (
            <div
              key={i}
              className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl hover:-translate-y-1 transition"
            >
              <h2 className="text-3xl font-bold text-blue-600">
                {item.value}
              </h2>
              <p className="text-sm text-slate-500 mt-2">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </section>

    </div>
  );
}