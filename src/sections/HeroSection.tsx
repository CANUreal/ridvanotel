import { ArrowRight } from "lucide-react";
import HeroGalleryBg from "../components/HeroGalleryBg";
import { HERO_SLIDES } from "../data/gallery";
import { useApp } from "../context/AppContext";

export function HeroSection() {
  const { t } = useApp();

  return (
    <section id="top" data-surface="dark" className="relative min-h-screen w-full overflow-hidden">
      <div className="hero-bg-wrap absolute inset-0">
        <HeroGalleryBg images={HERO_SLIDES} className="absolute inset-0 h-full w-full" />
      </div>
      <div className="hero-scrim absolute inset-0 z-[1]" aria-hidden />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pb-16 pt-24 text-center sm:px-6">
        <div className="hero-content max-w-4xl">
          <h1 className="hero-title-line font-brand text-4xl text-white drop-shadow-2xl sm:text-6xl md:text-7xl">
            {t.hero.title}
          </h1>
          <p className="hero-title-line mt-4 text-xl font-medium text-zinc-200 sm:text-2xl md:text-3xl">
            {t.hero.subtitle}
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base md:text-lg">
            {t.hero.tagline}
          </p>

          <div className="hero-highlight mt-10 flex flex-wrap justify-center gap-8 sm:gap-12">
            {t.highlights.map((item) => (
              <div key={item.label} className="hero-highlight-item text-center">
                <p className="text-2xl font-bold text-white sm:text-3xl">{item.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-zinc-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <a href="#reservation" className="btn-primary hero-bottom group mt-12">
            <span>{t.cta.hero}</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
