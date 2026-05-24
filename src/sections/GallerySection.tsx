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
      className={`group relative shrink-0 overflow-hidden rounded-2xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tone-accent)] ${className}`}
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

      {/* Mobil: grid */}
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2 sm:gap-3 md:hidden md:px-10">
        {GALLERY_IMAGES.map((src, i) => (
          <GalleryTile
            key={`m-${src}`}
            src={src}
            animate
            className={i === 0 ? "col-span-2 aspect-[4/3]" : "aspect-square"}
            onOpen={() => setLightboxIndex(i)}
            alt={t.gallery.imageAlt(i + 1)}
            openLabel={t.gallery.openImage(i + 1)}
          />
        ))}
      </div>

      {/* Masaüstü: yatay scroll-driven */}
      <div className="hidden md:block">
        <div data-gallery-track className="flex w-max gap-4 px-10 pb-4">
          {GALLERY_IMAGES.map((src, i) => (
            <GalleryTile
              key={`d-${src}`}
              src={src}
              className={`h-[min(72vh,520px)] ${
                i === 0 ? "w-[min(85vw,720px)]" : "w-[min(42vw,380px)]"
              }`}
              onOpen={() => setLightboxIndex(i)}
              alt={t.gallery.imageAlt(i + 1)}
              openLabel={t.gallery.openImage(i + 1)}
            />
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-theme-muted">{t.gallery.scrollHint}</p>
      </div>

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
