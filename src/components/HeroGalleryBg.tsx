import { useEffect, useState } from "react";

const INTERVAL_MS = 8000;
const FADE_MS = 2800;
const FADE_EASING = "cubic-bezier(0.33, 0, 0.2, 1)";

type Props = {
  images: readonly string[];
  className?: string;
};

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function HeroGalleryBg({ images, className }: Props) {
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const reducedMotion = prefersReducedMotion();

  useEffect(() => {
    if (images.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [images.length]);

  useEffect(() => {
    setReady(false);
    const first = new Image();
    first.src = images[0] ?? "";
    const done = () => setReady(true);
    first.onload = done;
    first.onerror = done;
  }, [images[0]]);

  useEffect(() => {
    if (images.length <= 1) return;
    const preload = new Image();
    preload.src = images[(index + 1) % images.length];
  }, [index, images]);

  if (images.length === 0) return null;

  return (
    <div className={className ?? "absolute inset-0 h-full w-full"} aria-hidden>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          width={1920}
          height={1080}
          decoding={i === 0 ? "sync" : "async"}
          fetchPriority={i === 0 ? "high" : "low"}
          loading={i === 0 ? "eager" : "lazy"}
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            opacity: i === index && ready ? 1 : 0,
            transition: reducedMotion ? "none" : `opacity ${FADE_MS}ms ${FADE_EASING}`,
            zIndex: i === index ? 2 : 1,
          }}
        />
      ))}
    </div>
  );
}
