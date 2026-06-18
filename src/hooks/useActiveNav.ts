import { useEffect, useState } from "react";

const NAV_OFFSET = 96;

export function useActiveNav(hrefs: readonly string[]) {
  const [active, setActive] = useState(hrefs[0] ?? "#top");

  const serializedHrefs = hrefs.join(",");

  useEffect(() => {
    const ids = serializedHrefs.split(",").map((h) => (h.startsWith("#") ? h.slice(1) : h));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const pick = () => {
      let bestId = ids[0];
      let bestScore = -Infinity;

      for (let i = 0; i < sections.length; i++) {
        const el = sections[i];
        const rect = el.getBoundingClientRect();
        if (rect.bottom < NAV_OFFSET) continue;

        const visible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, NAV_OFFSET);
        const score = visible > 0 ? visible - i * 0.01 : 0;
        if (score > bestScore) {
          bestScore = score;
          bestId = ids[i];
        }
      }

      if (bestScore <= 0 && window.scrollY < 120) {
        setActive("#top");
        return;
      }

      setActive(`#${bestId}`);
    };

    pick();
    window.addEventListener("scroll", pick, { passive: true });
    window.addEventListener("resize", pick);

    const observer = new IntersectionObserver(pick, {
      threshold: [0, 0.1, 0.25, 0.5],
      rootMargin: `-${NAV_OFFSET}px 0px -40% 0px`,
    });

    sections.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", pick);
      window.removeEventListener("resize", pick);
      observer.disconnect();
    };
  }, [serializedHrefs]);

  return active;
}
