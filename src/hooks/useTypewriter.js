import { useEffect, useState } from "react";

export function useTypewriter({
    base,
    endings,
    typingDelay = 70,
    deletingDelay = 50,
    pauseAfterTyping = 900,
}) {
    const [text, setText] = useState("");
    const [endingIndex, setEndingIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    const currentEnding = endings[endingIndex];
    const fullText = base + currentEnding;
    const minLength = base.length;

    useEffect(() => {
        const delay =
            deleting
                ? deletingDelay + Math.random() * 30
                : typingDelay + Math.random() * 50;

        const timeout = setTimeout(() => {
            if (!deleting) {
                setText(fullText.slice(0, charIndex + 1));
                setCharIndex((i) => i + 1);

                if (charIndex + 1 === fullText.length) {
                    setTimeout(() => setDeleting(true), pauseAfterTyping);
                }
            } else {
                setText(fullText.slice(0, Math.max(charIndex - 1, minLength)));
                setCharIndex((i) => i - 1);

                if (charIndex - 1 === minLength) {
                    setDeleting(false);
                    setEndingIndex((i) => (i + 1) % endings.length);
                }
            }
        }, delay);

        return () => clearTimeout(timeout);
    }, [
        charIndex,
        deleting,
        endings.length,
        fullText,
        minLength,
        pauseAfterTyping,
        typingDelay,
        deletingDelay,
    ]);

    return text;
}
