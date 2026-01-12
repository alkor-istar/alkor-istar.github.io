import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import { useInView } from "../../hooks/useInView";

export default function ProjectsSection() {
    const { ref, inView } = useInView({
        threshold: 0.2,
    });

    return (
        <section id="projects" className="py-32 px-6">
            <div className="max-w-6xl mx-auto">
                <div
                    ref={ref}
                    className={`fade-in ${inView ? "visible" : ""}`}
                >
                    <h2 className="text-4xl md:text-5xl font-heading text-white mb-4 text-center">
                        Projects
                    </h2>

                    <p className="text-gray-500 text-center mb-16 max-w-2xl mx-auto">
                        A selection of projects focusing on reliability, performance,
                        and pragmatic engineering.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`fade-in ${inView ? "visible" : ""
                                }`}
                            style={{
                                transitionDelay: `${index * 120}ms`,
                            }}
                        >
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
