import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { ROOM_IMAGES } from "../data/rooms";
import { useApp } from "../context/AppContext";

export function RoomsSection() {
  const { t } = useApp();

  return (
    <section
      id="suites"
      data-surface="light"
      className="section-pad overflow-hidden bg-theme-section py-16 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={t.rooms.title} subtitle={t.rooms.subtitle} />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {t.rooms.items.map((room, i) => {
            const meta = ROOM_IMAGES[i] ?? ROOM_IMAGES[0];
            return (
              <article key={room.number} data-animate="room-card" className="card-editorial overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    data-room-img
                    src={meta.image}
                    alt={room.name}
                    width={640}
                    height={480}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-5 sm:p-8">
                  <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <span className="font-brand text-3xl text-theme-muted">{room.number}</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-theme-accent sm:text-right">
                      {room.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-theme-strong sm:text-2xl">{room.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-theme-body">{room.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {room.features.map((f) => (
                      <li
                        key={f}
                        className="rounded-full border border-theme bg-theme-chip px-3 py-1 text-xs font-semibold text-theme-strong"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a href="#reservation" className="btn-dark inline-flex w-full justify-center text-sm sm:w-auto">
                      {t.cta.primaryShort}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
