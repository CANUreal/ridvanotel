import type { Locale } from "../i18n/translations";

export type ReservationPayload = {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  guests: string;
  message: string;
};

const labels = {
  tr: {
    subject: "Rezervasyon Talebi",
    name: "Ad Soyad",
    email: "E-posta",
    phone: "Telefon",
    checkIn: "Giriş",
    checkOut: "Çıkış",
    roomType: "Oda tipi",
    guests: "Misafir sayısı",
    message: "Not",
  },
  en: {
    subject: "Reservation Request",
    name: "Name",
    email: "Email",
    phone: "Phone",
    checkIn: "Check-in",
    checkOut: "Check-out",
    roomType: "Room type",
    guests: "Guests",
    message: "Notes",
  },
} as const;

export function buildReservationMailto(
  to: string,
  locale: Locale,
  data: ReservationPayload
): string {
  const L = labels[locale];
  const lines = [
    `${L.name}: ${data.name}`,
    `${L.email}: ${data.email}`,
    `${L.phone}: ${data.phone}`,
    `${L.checkIn}: ${data.checkIn}`,
    `${L.checkOut}: ${data.checkOut}`,
    `${L.roomType}: ${data.roomType}`,
    `${L.guests}: ${data.guests}`,
    data.message ? `${L.message}: ${data.message}` : "",
  ].filter(Boolean);

  const params = new URLSearchParams({
    subject: L.subject,
    body: lines.join("\n"),
  });

  return `mailto:${to}?${params.toString().replace(/\+/g, "%20")}`;
}
