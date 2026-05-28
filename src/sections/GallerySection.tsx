import { useState } from "react";
import { ZoomIn } from "lucide-react";
import { ImageLightbox } from "../components/ImageLightbox";
import { SectionHeading } from "../components/SectionHeading";
import { GALLERY_IMAGES } from "../data/gallery";
import { useApp } from "../context/AppContext";

function GalleryTile({
  src,
  className,
  onOpen,
  alt,
  openLabel,
  animate = false,
}: {
  src: string;
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
      className={`gallery-tile group relative shrink-0 snap-center overflow-hidden rounded-2xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tone-accent)] ${className}`}
      aria-label={openLabel}
    >
      <img
        src={src}
        alt={alt}
        width={640}
        height={480}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/25">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-theme-section text-theme-strong opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
          <ZoomIn className="h-5 w-5" />
        </span>
      </span>
    </button>
  );
}

export function GallerySection() {
  const { t } = useApp();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      data-surface="light"
      className="bg-theme-section px-4 py-20 sm:px-6 md:overflow-hidden md:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl md:px-2">
        <SectionHeading title={t.gallery.title} subtitle={t.gallery.subtitle} />
      </div>

      <div
        data-gallery-track
        className="gallery-scroll mt-10 flex w-max snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain scroll-smooth px-4 pb-3 pt-1 max-md:touch-pan-x sm:gap-4 sm:px-6 md:gap-4 md:overflow-visible md:px-10 md:pb-4 md:snap-none md:pt-0"
        aria-label={t.gallery.scrollHint}
      >
        {GALLERY_IMAGES.map((src, i) => (
          <GalleryTile
            key={src}
            src={src}
            animate
            className={`h-64 w-[min(82vw,300px)] sm:h-80 sm:w-[min(72vw,360px)] md:h-[min(72vh,520px)] ${
              i === 0 ? "md:w-[min(85vw,720px)]" : "md:w-[min(42vw,380px)]"
            }`}
            onOpen={() => setLightboxIndex(i)}
            alt={t.gallery.imageAlt(i + 1)}
            openLabel={t.gallery.openImage(i + 1)}
          />
        ))}
      </div>

      <p className="gallery-hint mt-4 px-4 text-center text-sm md:mt-6">{t.gallery.scrollHint}</p>

      <ImageLightbox
        images={GALLERY_IMAGES}
        index={lightboxIndex}
        altForIndex={(n) => t.gallery.imageAlt(n)}
        onClose={() => setLightboxIndex(null)}
        onChange={setLightboxIndex}
      />
    </section>
  );
}
