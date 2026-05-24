import { useEffect, useState } from "react";

/** Metin tonu: açık zemin üstünde koyu yazı, koyu zemin üstünde açık yazı */
export type NavTone = "on-light" | "on-dark";

function surfaceToTone(surface: string | null): NavTone {
  return surface === "light" ? "on-light" : "on-dark";
}

export function useNavTone() {
  const [tone, setTone] = useState<NavTone>("on-dark");

  useEffect(() => {
    const pickTone = () => {
      const navY = 72;
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-surface]")
      );

      let bestEl: HTMLElement | null = null;
      let bestScore = 0;

      for (const el of sections) {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < navY || rect.top > window.innerHeight) continue;

        const overlap = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, navY);
        const score = overlap > 0 ? overlap : 0;
        if (score > bestScore) {
          bestScore = score;
          bestEl = el;
        }
      }

      if (bestEl) {
        setTone(surfaceToTone(bestEl.getAttribute("data-surface")));
        return;
      }

      const hero = document.querySelector<HTMLElement>('[data-surface="dark"]');
      if (hero) {
        setTone(surfaceToTone(hero.getAttribute("data-surface")));
      }
    };

    pickTone();
    window.addEventListener("scroll", pickTone, { passive: true });
    window.addEventListener("resize", pickTone);

    const observer = new IntersectionObserver(pickTone, {
      threshold: [0, 0.05, 0.15, 0.3, 0.5],
      rootMargin: "-64px 0px 0px 0px",
    });

    document.querySelectorAll<HTMLElement>("[data-surface]").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", pickTone);
      window.removeEventListener("resize", pickTone);
      observer.disconnect();
    };
  }, []);

  return tone;
}
