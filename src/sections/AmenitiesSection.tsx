import { SectionHeading } from "../components/SectionHeading";
import { useApp } from "../context/AppContext";

export function AmenitiesSection() {
  const { t } = useApp();

  return (
    <section
      id="amenities"
      data-surface="light"
      className="bg-theme-section-alt px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading title={t.amenities.title} />
        <ul className="space-y-4">
          {t.services.map((service) => (
            <li
              key={service.number}
              data-animate="amenity"
              className="card-editorial flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:gap-8 sm:p-8"
            >
              <span className="shrink-0 font-brand text-4xl text-theme-muted sm:text-5xl">
                {service.number}
              </span>
              <div>
                <h3 className="text-xl font-bold text-theme-strong">{service.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-theme-body sm:text-base">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
