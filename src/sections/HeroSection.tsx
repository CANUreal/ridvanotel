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

      <div className="section-pad relative z-10 flex min-h-[100dvh] flex-col items-center justify-center pb-24 pt-[max(5.5rem,env(safe-area-inset-top,0px)+4rem)] text-center sm:pb-20 sm:pt-[max(6rem,env(safe-area-inset-top,0px)+4.5rem)]">
        <div className="hero-content w-full max-w-4xl min-w-0">
          <h1 className="hero-title-line font-brand text-[clamp(1.75rem,8vw,2.5rem)] leading-tight text-white hero-text-shadow sm:text-5xl md:text-6xl lg:text-7xl">
            {t.hero.title}
          </h1>
          <p className="hero-title-line mt-3 text-base font-medium text-zinc-100 hero-text-shadow sm:mt-4 sm:text-2xl md:text-3xl">
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

          <a href="#reservation" className="btn-primary hero-bottom group mt-10 w-full max-w-sm sm:mt-12 sm:w-auto">
            <span className="min-w-0">{t.cta.hero}</span>
            <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
