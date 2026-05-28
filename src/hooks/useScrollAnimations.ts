import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function reveal(
  targets: gsap.TweenTarget,
  vars: gsap.TweenVars,
  trigger: Element | string,
  start = "top 88%"
) {
  return gsap.from(targets, {
    ...vars,
    immediateRender: false,
    scrollTrigger: {
      trigger,
      start,
      toggleActions: "play none none none",
      once: true,
      invalidateOnRefresh: true,
    },
  });
}

export function useScrollAnimations() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      /* ── Hero: giriş ── */
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

      /* Hero parallax — sadece tablet+ (mobilde taşma/jank önlenir) */
      mm.add("(min-width: 768px)", () => {
        gsap.to(".hero-bg-wrap", {
          scrollTrigger: {
            trigger: "#top",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
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
            invalidateOnRefresh: true,
          },
          y: 80,
          ease: "none",
        });
      });

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

      /* Olanaklar — mobil: dikey, masaüstü: yatay kayma */
      mm.add("(max-width: 767px)", () => {
        gsap.utils.toArray<HTMLElement>("[data-animate='amenity']").forEach((el) => {
          reveal(el, { autoAlpha: 0, y: 24, duration: 0.85, ease: "power2.out" }, el, "top 92%");
        });
      });

      mm.add("(min-width: 768px)", () => {
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
      });

      mm.add("(max-width: 767px)", () => {
        gsap.utils.toArray<HTMLElement>("[data-animate='room-card']").forEach((el) => {
          reveal(el, { autoAlpha: 0, y: 28, duration: 0.9, ease: "power3.out" }, el, "top 92%");
        });
      });

      mm.add("(min-width: 768px)", () => {
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
      });

      mm.add("(max-width: 767px)", () => {
        gsap.utils.toArray<HTMLElement>("[data-animate='gallery-item']").forEach((el) => {
          reveal(
            el,
            { autoAlpha: 0, scale: 0.96, y: 16, duration: 0.65, ease: "power2.out" },
            el,
            "top 95%"
          );
        });
      });

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

      const form = document.querySelector("[data-reservation-form]");
      if (form) {
        reveal(
          form,
          { autoAlpha: 0, y: 40, duration: 0.95, ease: "power3.out" },
          "#reservation",
          "top 82%"
        );
      }

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
    window.addEventListener("resize", refresh);
    const t = window.setTimeout(refresh, 800);

    const onImageLoad = () => refresh();
    document.querySelectorAll<HTMLImageElement>("img").forEach((img) => {
      if (!img.complete) img.addEventListener("load", onImageLoad, { once: true });
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
      window.clearTimeout(t);
      document.querySelectorAll<HTMLImageElement>("img").forEach((img) => {
        img.removeEventListener("load", onImageLoad);
      });
      mm.revert();
      ctx.revert();
    };
  }, []);
}
