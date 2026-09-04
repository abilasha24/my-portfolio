'use client';

import {
  GraduationCap,
  Award,
  MapPin,
  Mail,
} from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Junior Software Engineer · Full-Stack & AI Developer
            <span className="block text-muted-foreground text-2xl md:text-3xl mt-2">
              Based in Jaffna, Sri Lanka
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            B.Sc. (Hons) Software Engineering graduate focused on building
            full-stack web applications and AI-powered solutions.
          </p>
        </div>

        {/* Who I Am */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">

          <div>
            <h3 className="text-2xl font-bold mb-6">
              Who I Am
            </h3>

            <div className="space-y-5 text-muted-foreground leading-relaxed">

  <p>
    I'm a{' '}
    <strong className="text-foreground">
      Junior Software Engineer
    </strong>{' '}
    focused on building full-stack web applications using React,
    Next.js, TypeScript, Node.js, Express.js, and PostgreSQL.
  </p>

  <p>
    I also build{' '}
    <strong className="text-foreground">
      AI-integrated and machine-learning applications
    </strong>{' '}
    using Python, Google ADK, LLM APIs, and Scikit-learn.
  </p>

  <p>
    I hold a{' '}
    <strong className="text-foreground">
      B.Sc. (Hons) in Software Engineering
    </strong>{' '}
    from Cardiff Metropolitan University through ICBT Campus Jaffna,
    awarded in May 2026. I also completed a Higher Diploma in
    Computing & Software Engineering with Merit Pass in November 2024.
  </p>

  <p>
    My goal is to combine{' '}
    <strong className="text-foreground">
      full-stack engineering and AI technologies
    </strong>{' '}
    to build practical, intelligent, and real-world software solutions.
  </p>

</div>

            {/* Technology Pills */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                'React',
                'Next.js',
                'TypeScript',
                'Node.js',
                'Python',
                'PostgreSQL',
                'Google ADK',
                'Tailwind CSS',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full border text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Info */}
          <div className="rounded-2xl border p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-6">
              Quick Info
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Location
                  </p>
                  <p className="font-medium">
                    Jaffna, Sri Lanka
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Email
                  </p>
                  <a
                    href="mailto:selvanayagamabilasha@gmail.com"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    selvanayagamabilasha@gmail.com
                  </a>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Degree
                </p>
                <p className="font-medium">
                  B.Sc. (Hons) Software Engineering
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  University
                </p>
                <p className="font-medium">
                  Cardiff Metropolitan University · ICBT Campus Jaffna
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Languages
                </p>
                <p className="font-medium">
                  Tamil · English · Sinhala
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Status
                </p>
                <p className="font-medium text-green-600">
                  Open to Junior Software Engineering Opportunities
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-20">

          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-7 h-7 text-primary" />

            <h3 className="text-2xl font-bold">
              Education
            </h3>
          </div>

          <div className="space-y-6">

            {/* BSc */}
            <div className="rounded-2xl border p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

                <div>
                  <h4 className="text-xl font-semibold">
                    B.Sc. (Hons) Software Engineering
                  </h4>

                  <p className="text-muted-foreground mt-2">
                    ICBT Campus, Jaffna · Cardiff Metropolitan University
                  </p>

                  <p className="text-sm text-muted-foreground mt-2">
                    Second Class Division One
                  </p>
                </div>

                <span className="text-sm font-medium text-primary whitespace-nowrap">
                  Awarded: May 2026
                </span>

              </div>
            </div>

            {/* Higher Diploma */}
            <div className="rounded-2xl border p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

                <div>
                  <h4 className="text-xl font-semibold">
                    Higher Diploma in Computing & Software Engineering
                  </h4>

                  <p className="text-muted-foreground mt-2">
                    ICBT Campus, Jaffna · Merit Pass
                  </p>
                </div>

                <span className="text-sm font-medium text-primary whitespace-nowrap">
                  Mar 2023 – Nov 2024
                </span>

              </div>
            </div>

          </div>
        </div>

        {/* Certifications & Workshops */}
        <div>

          <div className="flex items-center gap-3 mb-8">
            <Award className="w-7 h-7 text-primary" />

            <h3 className="text-2xl font-bold">
              Certifications & Workshops
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-5">

            <div className="rounded-2xl border p-6">
              <h4 className="font-semibold">
                AI Agents Intensive Vibe Coding Course
              </h4>
              <p className="text-sm text-muted-foreground mt-2">
                Kaggle & Google · Jun 2026
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h4 className="font-semibold">
                Advanced Python Programming
              </h4>
              <p className="text-sm text-muted-foreground mt-2">
                i-Tech Academy · May 2025
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h4 className="font-semibold">
                Certificate of Completion in Python
              </h4>
              <p className="text-sm text-muted-foreground mt-2">
                GUVI · May 2025
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h4 className="font-semibold">
                Diploma in IT & Artificial Intelligence
              </h4>
              <p className="text-sm text-muted-foreground mt-2">
                CASED Institute · 2025
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h4 className="font-semibold">
                NLP & Computer Vision Workshop
              </h4>
              <p className="text-sm text-muted-foreground mt-2">
                ICBT Campus Jaffna · May 2026
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h4 className="font-semibold">
                IoT & Smart Solutions Workshop
              </h4>
              <p className="text-sm text-muted-foreground mt-2">
                ICBT Campus Jaffna · Aug 2026
              </p>
            </div>


            <div className="rounded-2xl border p-6">
              <h4 className="font-semibold">
                AI Master Class
              </h4>
              <p className="text-sm text-muted-foreground mt-2">
                LP Campus · Jul 2024
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}