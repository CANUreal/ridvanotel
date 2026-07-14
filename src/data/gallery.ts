const IMG = "/images/ro";

export const HERO_START = `${IMG}/herobaslangici.jpg`;
export const DENIZ = `${IMG}/deniz.jpg`;
export const KALE = `${IMG}/kale.jpg`;

export interface GalleryItem {
  src: string;
  tag?: string;
}

/** WhatsApp fotoğrafları — Deluxe Oda */
const WHATSAPP: GalleryItem[] = [
  { src: `${IMG}/wa-15-13-12.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-12-1.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-12-2.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-13.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-13-1.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-14.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-14-1.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-14-2.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-14-3.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-14-4.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-14-5.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-15.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-15-3.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-15-4.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-16.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-16-1.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-16-2.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-16-3.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-16-4.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-16-5.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-17.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-17-1.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-17-2.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-17-3.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-18.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-18-1.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-18-2.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-18-3.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-18-4.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-19.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-19-1.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-19-2.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-19-3.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-19-4.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-19-5.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-20-3.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-20-4.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-21.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-21-1.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-21-2.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-21-4.jpg`, tag: "Deluxe Oda" },
  { src: `${IMG}/wa-15-13-22-1.jpg`, tag: "Deluxe Oda" },
];

/** Yeni oda fotoğrafları — dosya isimlerine göre etiketlenmiş */
const ROOM_PHOTOS: GalleryItem[] = [
  { src: `${IMG}/deniz-manzaralı.jpeg`, tag: "Deniz Manzaralı" },
  { src: `${IMG}/deniz-manzaralı2.jpeg`, tag: "Deniz Manzaralı" },
  { src: `${IMG}/deniz-manzarası2.jpeg`, tag: "Deniz Manzarası" },
  { src: `${IMG}/deniz-manzararsı.jpeg`, tag: "Deniz Manzararsı" },
  { src: `${IMG}/meydan-manzaralı.jpeg`, tag: "Meydan Manzaralı" },
  { src: `${IMG}/sokak-manzaralı.jpeg`, tag: "Sokak Manzaralı" },
  { src: `${IMG}/sokak-manzaralı2.jpeg`, tag: "Sokak Manzaralı" },
  { src: `${IMG}/sokak_manzaralı.jpeg`, tag: "Sokak Manzaralı" },
  { src: `${IMG}/balkonsuz-oda.jpeg`, tag: "Balkonsuz Oda" },
  { src: `${IMG}/balkonsuz-oda2.jpeg`, tag: "Balkonsuz Oda" },
  { src: `${IMG}/standart-oda-wc.jpeg`, tag: "Standart Oda WC" },
];

/** Galeri — yeni odalar önde, sonra Deluxe Oda */
export const GALLERY_IMAGES: GalleryItem[] = [
  { src: HERO_START },
  ...ROOM_PHOTOS,
  ...WHATSAPP,
];

/** Hero slayt — string dizisi olarak */
export const HERO_SLIDES: readonly string[] = [HERO_START, ...WHATSAPP.slice(0, 19).map((i) => i.src)];
