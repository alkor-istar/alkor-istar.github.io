export default function ProjectCard({ project }) {
    return (
        <div className="h-full p-6 rounded-xl border border-gray-800 bg-black/60 backdrop-blur hover:border-orange-500 transition-colors">
            <h3 className="text-xl font-heading mb-3 text-white">
                {project.title}
            </h3>

            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex gap-4 text-sm">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-orange-500 transition"
                    >
                        GitHub →
                    </a>
                )}
                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-orange-500 transition"
                    >
                        Live demo →
                    </a>
                )}
            </div>
        </div>
    );
}
