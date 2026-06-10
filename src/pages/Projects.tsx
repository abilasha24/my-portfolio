type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  techStack: string[];
  features: string[];
  github?: string;
  liveDemo?: string;
  driveLink?: string;
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(cardRef);

  return (
    <div
      ref={cardRef}
      className={`group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >

      {/* IMAGE */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="p-6">

        {/* CATEGORY */}
        <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full mb-3">
          {categoryLabels[project.category] ?? "Project"}
        </span>

        {/* TITLE */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          {project.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
          {project.description}
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* FEATURES */}
        <ul className="space-y-1 mb-4">
          {project.features.slice(0, 3).map((feature, i) => (
            <li key={i} className="flex gap-2 text-sm text-slate-500">
              <span className="w-1.5 h-1.5 mt-2 bg-blue-500 rounded-full" />
              {feature}
            </li>
          ))}
        </ul>

        {/* BUTTONS */}
        <div className="flex gap-3">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}

          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              Live
            </a>
          )}

        </div>

      </div>
    </div>
  );
}