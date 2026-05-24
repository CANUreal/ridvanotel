const IMG = "/images/ro";

/** Hero arka plan slaytı */
export const HERO_SLIDES = [
  `${IMG}/001.jpg`,
  `${IMG}/002.jpg`,
  `${IMG}/cesme.jpg`,
  `${IMG}/NuErA12.jpg`,
  `${IMG}/NuErA21.jpg`,
  `${IMG}/NuErA34.jpg`,
  `${IMG}/17.jpg`,
  `${IMG}/18.jpg`,
  `${IMG}/14.jpg`,
  `${IMG}/6.jpg`,
] as const;

/** Galeri grid + lightbox */
export const GALLERY_IMAGES = [
  ...HERO_SLIDES,
  `${IMG}/04.jpg`,
  `${IMG}/denizmanzaralı.jpg`,
  `${IMG}/kalemanzaralı.jpg`,
  `${IMG}/oda1.jpg`,
  `${IMG}/oda2.jpg`,
] as const;
