import { useEffect, useRef } from "react";

export const useFadeUpAnimation = (threshold: number) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let timeouts: number[] = [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
            const timeoutId = window.setTimeout(() => {
              target.classList.add("animate-fade-up");
            }, index * 300);
            timeouts.push(timeoutId);
          } else {
            target.classList.remove("animate-fade-up");
          }
        });
      },
      { threshold },
    );

    const section = sectionRef.current;
    if (section) {
      const elements = section.querySelectorAll(".fade-up-element");
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (section) {
        const elements = section.querySelectorAll(".fade-up-element");
        elements.forEach((el) => observer.unobserve(el));
      }
      timeouts.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, []);

  return sectionRef;
};
