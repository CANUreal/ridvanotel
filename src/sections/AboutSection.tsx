import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { useApp } from "../context/AppContext";

export function AboutSection() {
  const { t } = useApp();

  return (
    <section
      id="about"
      data-surface="light"
      className="bg-theme-section px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading title={t.about.heading} />
        <p data-animate="about-text" className="text-lg leading-relaxed text-theme-body">
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
