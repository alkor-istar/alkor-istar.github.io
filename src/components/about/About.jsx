import Reveal from "../common/Reveal";

export default function About() {

    return (
        <section id="about" className="py-20 px-6">
            <Reveal>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-heading mb-12 text-center text-white">About Me</h2>
                    <div className="gradient-border p-8">
                        <p className="text-gray-300 leading-relaxed text-lg">
                            <span className="text-2xl font-bold">R</span>esults-oriented, self-taught <span
                                className="text-fuchsia-500 font-semibold">Full-Stack Software Developer</span> with <span
                                    className="text-orange-500 font-semibold">14 years of experience</span>
                            delivering robust, scalable systems across industries including e-commerce, telecommunications,
                            logistics, and digital services.
                        </p>
                        <p className="text-gray-300 leading-relaxed text-lg mt-6">
                            <span className="text-2xl font-bold">S</span>killed in PHP, Laravel, modern JavaScript frameworks,
                            relational
                            databases, and distributed architectures, with a track record of improving system performance,
                            reliability, and developer workflows.
                        </p>
                        <p className="text-gray-300 leading-relaxed text-lg mt-6">
                            <span className="text-2xl font-bold">K</span>nown for taking ownership, <span
                                className="text-fuchsia-500 font-semibold">leading projects end-to-end</span>, collaborating
                            effectively with stakeholders, and mentoring
                            teams to achieve high-quality engineering outcomes.
                        </p>
                        <p className="text-gray-300 leading-relaxed text-lg mt-6">
                            <span className="text-2xl font-bold">D</span>riven by continuous learning, optimisation, and
                            clean software design, and <span className="text-orange-500 font-semibold">ready to contribute deep
                                technical expertise and practical
                                problem-solving</span> to a forward-thinking organization.
                        </p>
                    </div>
                </div>
            </Reveal>
        </section>

    );
}
