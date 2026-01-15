import ProfileImage from "./ProfileImage";
import Badge from "./Badge";
import Reveal from "../common/Reveal";

export default function Greet() {

    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-10 md:pt-20">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-12">
                    {/* Left */}
                    <div>
                        <ProfileImage />
                        <Reveal fadeType="slide-in-left">
                            <div className="w-full mt-4">
                                <div className="text-4xl md:text-5xl text-gray-200 text-center mb-4 mt-6 font-extralight">
                                    Gabriel Rodriguez
                                </div>
                                <div className="flex flex-wrap justify-center w-72 m-auto text-center font-sans hidden md:flex gap-x-1 gap-y-1">

                                    <span className="px-4 py-1 text-xs text-accent min-w-0">Problem Solving</span>
                                    <span className="px-4 py-1 text-xs text-primary min-w-0">Communication</span>
                                    <span className="px-4 py-1 text-xs text-primary min-w-0">Ownership</span>
                                    <span className="px-4 py-1 text-xs text-accent min-w-0">Leadership</span>
                                    <span className="px-4 py-1 text-xs text-accent min-w-0">Discipline</span>
                                    <span className="px-4 py-1 text-xs text-primary min-w-0">Pragmatic</span>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right */}
                    <div className="text-center md:text-left visible">
                        <Reveal fadeType="slide-in-right">
                            <div className="text-gray-600 mb-4 font-mono">
                                Welcome to my portfolio!
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold mb-6">
                                <span className="text-white font-heading">
                                    <span className="font-mono block text-3xl gradient-text">
                                        "Results-focused"
                                    </span>
                                    Software Engineer
                                </span>
                            </h1>
                            <div className="flex gap-4 justify-center md:justify-start mb-12 flex-wrap">
                                <span className="font-departure-mono px-4 py-2 bg-primary bg-opacity-10 text-primary rounded-lg border border-primary border-opacity-30">
                                    Full-Stack Developer
                                </span>

                                <Badge />
                            </div>
                        </Reveal>

                        <Reveal><div className="flex gap-4 justify-center md:justify-start mb-12 flex-wrap text-center">
                            <div className="is-uppercase p-0">
                                <p className="text-5xl md:text-6xl font-heading text-accent glow animate-pulse ">
                                    +{new Date().getFullYear() - 2019}
                                </p>
                                <span className="text-white">Years of experience</span>
                            </div>
                        </div>

                            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                                <a
                                    href="#about"
                                    className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
                                >
                                    View My Work
                                </a>

                                <a
                                    href="https://github.com/alkor-istar/cv-resume/releases/latest/download/Gabriel_Rodriguez_CV.pdf"
                                    target="_blank"
                                    download
                                    className="flex items-center px-8 py-3 text-white border border-default-medium font-semibold rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
                                >
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Resume
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}