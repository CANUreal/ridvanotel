import { Star } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { useApp } from "../context/AppContext";

export function TestimonialsSection() {
  const { t } = useApp();

  return (
    <section id="reviews" data-surface="light" className="section-pad overflow-hidden bg-theme-section-alt py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title={t.testimonials.title} />

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.testimonials.items.map((item) => (
            <article
              key={item.name}
              data-animate="testimonial"
              className="card-editorial flex min-w-0 flex-col justify-between p-5 sm:p-8"
            >
              <div>
                <div className="mb-6 flex gap-0.5 text-amber-400" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-lg font-medium italic leading-relaxed text-theme-body">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4 border-t border-theme pt-6">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-lg ${item.avatarClass}`}
                >
                  {item.initials}
                </div>
                <div>
                  <p className="font-bold text-theme-strong">{item.name}</p>
                  <p className="text-xs font-semibold text-theme-muted">{t.testimonials.source}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
