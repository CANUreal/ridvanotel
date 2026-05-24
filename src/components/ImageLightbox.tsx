import { useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useApp } from "../context/AppContext";

type Props = {
  images: readonly string[];
  index: number | null;
  altForIndex: (i: number) => string;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function ImageLightbox({ images, index, altForIndex, onClose, onChange }: Props) {
  const { t } = useApp();
  const open = index !== null;
  const current = index ?? 0;
  const total = images.length;

  const goPrev = useCallback(() => {
    onChange((current - 1 + total) % total);
  }, [current, total, onChange]);

  const goNext = useCallback(() => {
    onChange((current + 1) % total);
  }, [current, total, onChange]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, goPrev, goNext]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/92 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={t.a11y.lightbox}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        aria-label={t.a11y.lightboxClose}
      >
        <X className="h-6 w-6" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-4 sm:h-12 sm:w-12"
        aria-label={t.a11y.lightboxPrev}
      >
        <ChevronLeft className="h-7 w-7" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-4 sm:h-12 sm:w-12"
        aria-label={t.a11y.lightboxNext}
      >
        <ChevronRight className="h-7 w-7" />
      </button>

      <figure
        className="relative flex max-h-[90vh] max-w-6xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[current]}
          alt={altForIndex(current + 1)}
          className="max-h-[82vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
        />
        <figcaption className="mt-3 text-center text-sm text-white/70">
          {current + 1} / {total}
        </figcaption>
      </figure>
    </div>
  );
}
