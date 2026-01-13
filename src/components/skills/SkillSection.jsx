
import { skills } from "../../data/skills";

export default function SkillSection() {
    return (
        <section id="skills" className="py-20 px-6 bg-black bg-opacity-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-heading mb-12 text-center text-white">Skills</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="">
                        <h3 className="text-2xl font-semibold mb-6 text-gray-500 font-mono">Backend</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.backend.map((skill, index) =>
                                <span
                                    key={index}
                                    className={`inline-flex items-center gap-2 rounded-lg tech-badge px-4 py-1 bg-opacity-10 rounded-lg border border-opacity-30 font-mono ${skill.class}`}
                                >
                                    <img src={skill.icon} alt={skill.name} className="" />
                                    {skill.name}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="">
                        <h3 className="text-2xl font-semibold mb-6 text-gray-500 font-mono">Frontend</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.frontend.map((skill, index) =>
                                <span
                                    key={index}
                                    className={`inline-flex items-center gap-2 rounded-lg tech-badge px-4 py-1 bg-opacity-10 rounded-lg border border-opacity-30 font-mono ${skill.class}`}
                                >
                                    <img src={skill.icon} alt={skill.name} className="" />
                                    {skill.name}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="">
                        <h3 className="text-2xl font-semibold mb-6 text-gray-500 font-mono">DevOps & Tools</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.devops.map((skill, index) =>
                                <span
                                    key={index}
                                    className={`inline-flex items-center gap-2 rounded-lg tech-badge px-4 py-1 bg-opacity-10 rounded-lg border border-opacity-30 font-mono ${skill.class}`}
                                >
                                    <img src={skill.icon} alt={skill.name} className="" />
                                    {skill.name}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="">
                        <h3 className="text-2xl font-semibold mb-6 text-gray-500 font-mono">Architecture & Patterns</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.architecture.map((skill, index) =>
                                <span
                                    key={index}
                                    className={`inline-flex items-center gap-2 rounded-lg tech-badge px-4 py-1 bg-opacity-10 rounded-lg border border-opacity-30 font-mono ${skill.class}`}
                                >
                                    {skill.name}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
