import { useEffect, useRef, useState } from "react";

export function useInView({
    threshold = 0,
    root = null,
    rootMargin = "0px",
    once = true,
}) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (once) observer.unobserve(entry.target);
                } else if (!once) {
                    setInView(false);
                }
            },
            { threshold, root, rootMargin }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [threshold, root, rootMargin, once]);

    return { ref, inView };
}
