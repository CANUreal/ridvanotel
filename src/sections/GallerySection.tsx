import { useState } from "react";
import { ZoomIn } from "lucide-react";
import { ImageLightbox } from "../components/ImageLightbox";
import { SectionHeading } from "../components/SectionHeading";
import { GALLERY_IMAGES, GalleryItem } from "../data/gallery";
import { useApp } from "../context/AppContext";

function GalleryTile({
  item,
  className,
  onOpen,
  alt,
  openLabel,
  animate = false,
}: {
  item: GalleryItem;
  className: string;
  onOpen: () => void;
  alt: string;
  openLabel: string;
  animate?: boolean;
}) {
  return (
    <button
      type="button"
      {...(animate ? { "data-animate": "gallery-item" as const } : {})}
      onClick={onOpen}
      className={`gallery-tile group relative shrink-0 snap-center overflow-hidden rounded-xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tone-accent)] sm:rounded-2xl ${className}`}
      aria-label={openLabel}
    >
      <img
        src={item.src}
        alt={alt}
        width={640}
        height={480}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-500 md:group-hover:scale-105"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-black/0 md:transition-colors md:duration-300 md:group-hover:bg-black/25">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-theme-section text-theme-strong opacity-90 shadow-lg md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100">
          <ZoomIn className="h-5 w-5" />
        </span>
      </span>
      {item.tag && (
        <span className="pointer-events-none absolute bottom-2.5 left-2.5 rounded-full bg-black/55 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-white/95 backdrop-blur-sm">
          {item.tag}
        </span>
      )}
    </button>
  );
}

export function GallerySection() {
  const { t } = useApp();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const srcs = GALLERY_IMAGES.map((item) => item.src);

  return (
    <section
      id="gallery"
      data-surface="light"
      className="section-pad overflow-hidden bg-theme-section py-16 sm:py-20 md:overflow-hidden md:py-28"
    >
      <div className="mx-auto max-w-7xl md:px-2">
        <SectionHeading title={t.gallery.title} subtitle={t.gallery.subtitle} />
      </div>

      <div className="-mx-4 mt-8 overflow-x-auto sm:-mx-6 md:mx-0 md:mt-10 md:overflow-visible">
        <div
          data-gallery-track
          className="gallery-scroll flex w-max snap-x snap-mandatory gap-3 px-4 pb-3 pt-1 sm:gap-4 sm:px-6 md:gap-4 md:overflow-visible md:px-10 md:pb-4 md:snap-none md:pt-0"
          aria-label={t.gallery.scrollHint}
        >
          {GALLERY_IMAGES.map((item, i) => (
            <GalleryTile
              key={item.src}
              item={item}
              animate
              className={`h-56 w-[82vw] max-w-[300px] sm:h-72 sm:w-[72vw] sm:max-w-[360px] md:h-[min(72vh,520px)] ${
                i === 0 ? "md:w-[min(85vw,720px)]" : "md:w-[min(42vw,380px)]"
              }`}
              onOpen={() => setLightboxIndex(i)}
              alt={t.gallery.imageAlt(i + 1)}
              openLabel={t.gallery.openImage(i + 1)}
            />
          ))}
        </div>
      </div>

      <p className="gallery-hint mt-4 text-center text-sm md:mt-6">{t.gallery.scrollHint}</p>

      <ImageLightbox
        images={srcs}
        index={lightboxIndex}
        altForIndex={(n) => t.gallery.imageAlt(n)}
        onClose={() => setLightboxIndex(null)}
        onChange={setLightboxIndex}
      />
    </section>
  );
}
