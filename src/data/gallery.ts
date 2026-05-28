const IMG = "/images/ro";

export const HERO_START = `${IMG}/herobaslangici.jpg`;
export const DENIZ = `${IMG}/deniz.jpg`;
export const KALE = `${IMG}/kale.jpg`;

/** WhatsApp fotoğrafları — zaman sırasına göre */
const WHATSAPP = [
  `${IMG}/wa-15-13-12.jpg`,
  `${IMG}/wa-15-13-12-1.jpg`,
  `${IMG}/wa-15-13-12-2.jpg`,
  `${IMG}/wa-15-13-13.jpg`,
  `${IMG}/wa-15-13-13-1.jpg`,
  `${IMG}/wa-15-13-13-2.jpg`,
  `${IMG}/wa-15-13-13-3.jpg`,
  `${IMG}/wa-15-13-13-4.jpg`,
  `${IMG}/wa-15-13-14.jpg`,
  `${IMG}/wa-15-13-14-1.jpg`,
  `${IMG}/wa-15-13-14-2.jpg`,
  `${IMG}/wa-15-13-14-3.jpg`,
  `${IMG}/wa-15-13-14-4.jpg`,
  `${IMG}/wa-15-13-14-5.jpg`,
  `${IMG}/wa-15-13-15.jpg`,
  `${IMG}/wa-15-13-15-1.jpg`,
  `${IMG}/wa-15-13-15-3.jpg`,
  `${IMG}/wa-15-13-15-4.jpg`,
  `${IMG}/wa-15-13-16.jpg`,
  `${IMG}/wa-15-13-16-1.jpg`,
  `${IMG}/wa-15-13-16-2.jpg`,
  `${IMG}/wa-15-13-16-3.jpg`,
  `${IMG}/wa-15-13-16-4.jpg`,
  `${IMG}/wa-15-13-16-5.jpg`,
  `${IMG}/wa-15-13-17.jpg`,
  `${IMG}/wa-15-13-17-1.jpg`,
  `${IMG}/wa-15-13-17-2.jpg`,
  `${IMG}/wa-15-13-17-3.jpg`,
  `${IMG}/wa-15-13-18.jpg`,
  `${IMG}/wa-15-13-18-1.jpg`,
  `${IMG}/wa-15-13-18-2.jpg`,
  `${IMG}/wa-15-13-18-3.jpg`,
  `${IMG}/wa-15-13-18-4.jpg`,
  `${IMG}/wa-15-13-19.jpg`,
  `${IMG}/wa-15-13-19-1.jpg`,
  `${IMG}/wa-15-13-19-2.jpg`,
  `${IMG}/wa-15-13-19-3.jpg`,
  `${IMG}/wa-15-13-19-4.jpg`,
  `${IMG}/wa-15-13-19-5.jpg`,
  `${IMG}/wa-15-13-20-1.jpg`,
  `${IMG}/wa-15-13-20-2.jpg`,
  `${IMG}/wa-15-13-20-3.jpg`,
  `${IMG}/wa-15-13-20-4.jpg`,
  `${IMG}/wa-15-13-21.jpg`,
  `${IMG}/wa-15-13-21-1.jpg`,
  `${IMG}/wa-15-13-21-2.jpg`,
  `${IMG}/wa-15-13-21-4.jpg`,
  `${IMG}/wa-15-13-22.jpg`,
  `${IMG}/wa-15-13-22-1.jpg`,
] as const;

/** Galeri — isimli odalar önde, sonra kronolojik */
export const GALLERY_IMAGES = [HERO_START, DENIZ, KALE, ...WHATSAPP] as const;

/** Hero slayt — herobaslangici ile başlar */
export const HERO_SLIDES = [HERO_START, ...WHATSAPP.slice(0, 19)] as const;
