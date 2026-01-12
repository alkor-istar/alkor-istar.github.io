import { useEffect, useState } from "react";


export function useScrollSpy(
    sectionIds,
    { rootMargin = "-40% 0px -40% 0px", threshold = 0 } = {}
) {
    const [activeId, setActiveId] = useState(null);

    useEffect(() => {
        const observers = [];

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (!element) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveId(id);
                    }
                },
                { rootMargin, threshold }
            );

            observer.observe(element);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, [sectionIds, rootMargin, threshold]);

    return activeId;
}
