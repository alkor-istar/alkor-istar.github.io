import { ReactNode } from "react";
import { useInView } from "../../hooks/useInView";


export default function Reveal({
    children,
    className = "",
    once = true,
}) {
    const { ref, inView } = useInView({ once });

    return (
        <div
            ref={ref}
            className={`fade-in ${inView ? "visible" : ""} ${className}`}
        >
            {children}
        </div>
    );
}
