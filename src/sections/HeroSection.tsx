import { ArrowRight } from "lucide-react";
import HeroGalleryBg from "../components/HeroGalleryBg";
import { HERO_SLIDES } from "../data/gallery";
import { useApp } from "../context/AppContext";

export function HeroSection() {
  const { t } = useApp();

  return (
    <section id="top" data-surface="dark" className="relative min-h-[100dvh] w-full overflow-hidden">
      <div className="hero-bg-wrap absolute inset-0">
        <HeroGalleryBg images={HERO_SLIDES} className="absolute inset-0 h-full w-full" />
      </div>
      <div className="hero-scrim absolute inset-0 z-[1]" aria-hidden />

      <div className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center px-4 pb-20 pt-[max(6rem,env(safe-area-inset-top,0px)+4.5rem)] text-center sm:px-6 sm:pb-16">
        <div className="hero-content w-full max-w-4xl">
          <h1 className="hero-title-line font-brand text-3xl text-white hero-text-shadow sm:text-5xl md:text-6xl lg:text-7xl">
            {t.hero.title}
          </h1>
          <p className="hero-title-line mt-4 text-lg font-medium text-zinc-100 hero-text-shadow sm:text-2xl md:text-3xl">
            {t.hero.subtitle}
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-zinc-200 hero-text-shadow sm:text-base md:text-lg">
            {t.hero.tagline}
          </p>

          <div className="hero-highlight mt-8 flex flex-wrap justify-center gap-6 sm:mt-10 sm:gap-10 md:gap-12">
            {t.highlights.map((item) => (
              <div key={item.label} className="hero-highlight-item min-w-[5.5rem] text-center">
                <p className="text-xl font-bold text-white hero-text-shadow sm:text-3xl">{item.value}</p>
                <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-widest text-zinc-300 hero-text-shadow sm:text-xs">
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
