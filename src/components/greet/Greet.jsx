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

                        <div className="w-full mt-4">
                            <div className="text-4xl md:text-5xl text-gray-200 text-center mb-4 mt-6 font-extralight">
                                Gabriel Rodriguez
                            </div>
                            <div className="flex flex-wrap justify-center w-72 m-auto text-center font-sans hidden md:flex gap-x-1 gap-y-1">

                                <span className="px-4 py-1 text-xs text-fuchsia-500 min-w-0">Problem Solving</span>
                                <span className="px-4 py-1 text-xs text-orange-500 min-w-0">Communication</span>
                                <span className="px-4 py-1 text-xs text-orange-600 min-w-0">Ownership</span>
                                <span className="px-4 py-1 text-xs text-fuchsia-500 min-w-0">Leadership</span>
                                <span className="px-4 py-1 text-xs text-fuchsia-600 min-w-0">Discipline</span>
                                <span className="px-4 py-1 text-xs text-orange-600 min-w-0">Pragmatic</span>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="text-center md:text-left fade-in visible">
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
                            <span className="font-departure-mono px-4 py-2 bg-orange-500 bg-opacity-10 text-orange-500 rounded-lg border border-orange-500 border-opacity-30">
                                Full-Stack Developer
                            </span>

                            <Badge />
                        </div>

                        <div className="flex gap-4 justify-center md:justify-start mb-12 flex-wrap text-center">
                            <div className="is-uppercase p-0">
                                <p className="text-5xl md:text-6xl font-heading text-fuchsia-400 glow animate-pulse ">
                                    +14
                                </p>
                                <span className="text-white">Years of experience</span>
                            </div>
                        </div>

                        <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                            <a
                                href="#about"
                                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-fuchsia-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
                            >
                                View My Work
                            </a>

                            <a
                                href="/cv-en.pdf"
                                target="_blank"
                                download
                                className="flex items-center px-8 py-3 text-white border border-default-medium font-semibold rounded-full hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
                            >
                                Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}