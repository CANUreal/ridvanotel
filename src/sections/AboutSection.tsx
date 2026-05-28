import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { useApp } from "../context/AppContext";

export function AboutSection() {
  const { t } = useApp();

  return (
    <section
      id="about"
      data-surface="light"
      className="section-pad overflow-hidden bg-theme-section py-16 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading title={t.about.heading} />
        <p data-animate="about-text" className="px-1 text-base leading-relaxed text-theme-body sm:px-0 sm:text-lg">
          {t.about.text}
        </p>
        <a
          data-animate="reveal"
          href="#reservation"
          className="btn-dark mt-10 inline-flex"
        >
          {t.cta.primary}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
