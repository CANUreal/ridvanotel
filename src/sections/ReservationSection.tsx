import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { useApp } from "../context/AppContext";

export function ReservationSection() {
  const { t } = useApp();

  return (
    <section
      id="reservation"
      data-surface="light"
      className="section-pad overflow-hidden bg-theme-section-alt py-16 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading title={t.reservation.title} subtitle={t.reservation.subtitle} />
        <div className="mt-10">
          <a
            href="https://ridvan.rezervasyonal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark inline-flex items-center gap-2 px-8 py-4 text-base"
          >
            Rezervasyon Yap
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
