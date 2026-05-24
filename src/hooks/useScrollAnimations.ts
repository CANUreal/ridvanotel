import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Scroll ile görünür olunca bir kez oynat; metinler varsayılan olarak görünür kalır */
function reveal(
  targets: gsap.TweenTarget,
  vars: gsap.TweenVars,
  trigger: Element | string,
  start = "top 88%"
) {
  return gsap.from(targets, {
    ...vars,
    scrollTrigger: {
      trigger,
      start,
      toggleActions: "play none none none",
      once: true,
    },
  });
}

export function useScrollAnimations() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      /* ── Hero: giriş (scroll yok) ── */
      gsap.from(".hero-title-line", {
        autoAlpha: 0,
        y: 48,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.1,
      });

      gsap.from(".hero-content > p", {
        autoAlpha: 0,
        y: 24,
        duration: 0.85,
        ease: "power3.out",
        delay: 0.35,
      });

      gsap.from(".hero-highlight-item", {
        autoAlpha: 0,
        y: 28,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.45,
      });

      gsap.from(".hero-bottom", {
        autoAlpha: 0,
        y: 32,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.6,
      });

      /* ── Hero: hafif parallax (sadece transform, opacity dokunma) ── */
      mm.add("(min-width: 0px)", () => {
        gsap.to(".hero-bg-wrap", {
          scrollTrigger: {
            trigger: "#top",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
          scale: 1.08,
          yPercent: 12,
          ease: "none",
        });

        gsap.to(".hero-content", {
          scrollTrigger: {
            trigger: "#top",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
          y: 80,
          ease: "none",
        });
      });

      /* ── Bölüm başlıkları & reveal ── */
      gsap.utils.toArray<HTMLElement>("[data-animate='title']").forEach((el) => {
        reveal(el, { autoAlpha: 0, y: 48, duration: 0.9, ease: "power3.out" }, el);
      });

      gsap.utils.toArray<HTMLElement>("[data-animate='reveal']").forEach((el) => {
        reveal(el, { autoAlpha: 0, y: 36, duration: 0.85, ease: "power3.out" }, el);
      });

      gsap.utils.toArray<HTMLElement>("[data-animate='about-text']").forEach((el) => {
        reveal(el, { autoAlpha: 0, y: 32, duration: 0.9, ease: "power3.out" }, el);
      });

      gsap.utils.toArray<HTMLElement>("[data-animate='testimonial']").forEach((el) => {
        reveal(el, { autoAlpha: 0, y: 40, duration: 0.85, ease: "power3.out" }, el, "top 88%");
      });

      /* ── Olanaklar ── */
      gsap.utils.toArray<HTMLElement>("[data-animate='amenity']").forEach((el, i) => {
        reveal(
          el,
          {
            autoAlpha: 0,
            x: i % 2 === 0 ? -36 : 36,
            duration: 0.85,
            ease: "power2.out",
          },
          el,
          "top 90%"
        );
      });

      /* ── Odalar ── */
      gsap.utils.toArray<HTMLElement>("[data-animate='room-card']").forEach((el, i) => {
        reveal(
          el,
          {
            autoAlpha: 0,
            x: i % 2 === 0 ? -48 : 48,
            y: 32,
            duration: 1,
            ease: "power3.out",
          },
          el
        );
      });

      /* ── Galeri (mobil grid) ── */
      gsap.utils.toArray<HTMLElement>("[data-animate='gallery-item']").forEach((el) => {
        reveal(
          el,
          { autoAlpha: 0, scale: 0.94, y: 20, duration: 0.7, ease: "power2.out" },
          el,
          "top 92%"
        );
      });

      /* ── Galeri yatay (masaüstü) ── */
      mm.add("(min-width: 768px)", () => {
        const track = document.querySelector<HTMLElement>("[data-gallery-track]");
        if (!track) return;

        const getScroll = () => Math.max(0, track.scrollWidth - window.innerWidth + 48);

        gsap.to(track, {
          x: () => -getScroll(),
          ease: "none",
          scrollTrigger: {
            trigger: "#gallery",
            start: "top top",
            end: () => `+=${getScroll()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
      });

      /* ── Rezervasyon ── */
      const form = document.querySelector("[data-reservation-form]");
      if (form) {
        reveal(
          form,
          { autoAlpha: 0, y: 40, duration: 0.95, ease: "power3.out" },
          "#reservation",
          "top 82%"
        );
      }

      /* ── İletişim ── */
      reveal(
        "[data-animate='contact-col']",
        { autoAlpha: 0, y: 28, stagger: 0.12, duration: 0.8, ease: "power3.out" },
        "#contact",
        "top 85%"
      );

      reveal(
        "[data-animate='footer-line']",
        { autoAlpha: 0, scaleX: 0.6, duration: 0.8, ease: "power2.out", transformOrigin: "center" },
        "[data-animate='footer-line']",
        "top 95%"
      );

      reveal(
        "[data-animate='footer-copy']",
        { autoAlpha: 0, y: 12, duration: 0.7, ease: "power2.out" },
        "[data-animate='footer-copy']",
        "top 98%"
      );
    });

    const refresh = () => ScrollTrigger.refresh();
    const raf = requestAnimationFrame(refresh);
    window.addEventListener("load", refresh);
    const t = window.setTimeout(refresh, 600);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("load", refresh);
      window.clearTimeout(t);
      mm.revert();
      ctx.revert();
    };
  }, []);
}
