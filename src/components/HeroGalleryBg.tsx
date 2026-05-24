import { useEffect, useState } from "react";

const INTERVAL_MS = 5500;
const FADE_MS = 1400;

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

  useEffect(() => {
    if (images.length <= 1 || prefersReducedMotion()) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [images]);

  useEffect(() => {
    const first = new Image();
    first.src = images[0];
    first.onload = () => setReady(true);
  }, [images]);

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
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            opacity: i === index && ready ? 1 : 0,
            transition: `opacity ${FADE_MS}ms ease-in-out`,
            zIndex: i === index ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
}
