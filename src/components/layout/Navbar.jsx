import { useScrollSpy } from "../../hooks/useScrollSpy";

const links = [
    { href: "#home", label: "Home", id: "home" },
    { href: "#about", label: "About", id: "about" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#recommendations", label: "Recommendations", id: "recommendations" },
    { href: "#contact", label: "Contact", id: "contact" },
];

export default function Navbar() {
    const activeId = useScrollSpy(links.map((l) => l.id));

    return (
        <nav className="hidden md:block fixed top-0 w-full bg-black bg-opacity-90 backdrop-blur-sm z-50 border-b border-gray-800">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-xl font-bold font-mono">
                        <span className="text-orange-500">&lt;</span>{" "}
                        <span className="gradient-text">GR</span>{" "}
                        <span className="text-orange-500">/&gt;</span>
                    </div>

                    {/* Navigation */}
                    <div className="flex gap-8">
                        {links.map((link) => {
                            const isActive = activeId === link.id;

                            return (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    className={`nav-link transition-colors ${isActive
                                        ? "text-orange-500"
                                        : "text-gray-400 hover:text-orange-500"
                                        }`}
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
}
