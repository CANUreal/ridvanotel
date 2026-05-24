import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { useApp } from "../context/AppContext";
import { buildReservationMailto } from "../utils/reservationMailto";

const initial = {
  name: "",
  email: "",
  phone: "",
  checkIn: "",
  checkOut: "",
  roomType: "",
  guests: "2",
  message: "",
};

export function ReservationSection() {
  const { t, contact, locale } = useApp();
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof typeof initial, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailto = buildReservationMailto(contact.email, locale, {
      ...form,
      roomType:
        t.reservation.roomOptions.find((o) => o.value === form.roomType)?.label ?? form.roomType,
    });
    window.location.href = mailto;
    setSubmitted(true);
  };

  const inputClass = "input-theme";

  return (
    <section
      id="reservation"
      data-surface="light"
      className="bg-theme-section-alt px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-2xl">
        <SectionHeading title={t.reservation.title} subtitle={t.reservation.subtitle} />

        <form data-reservation-form onSubmit={onSubmit} className="card-editorial space-y-5 p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-theme-strong">
                {t.reservation.fields.name} *
              </span>
              <input
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className={inputClass}
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-theme-strong">
                {t.reservation.fields.email} *
              </span>
              <input
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className={inputClass}
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-theme-strong">
                {t.reservation.fields.phone} *
              </span>
              <input
                type="tel"
                required
                autoComplete="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className={inputClass}
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-theme-strong">
                {t.reservation.fields.checkIn} *
              </span>
              <input
                type="date"
                required
                value={form.checkIn}
                min={new Date().toISOString().slice(0, 10)}
                onChange={(e) => update("checkIn", e.target.value)}
                className={inputClass}
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-theme-strong">
                {t.reservation.fields.checkOut} *
              </span>
              <input
                type="date"
                required
                value={form.checkOut}
                min={form.checkIn || new Date().toISOString().slice(0, 10)}
                onChange={(e) => update("checkOut", e.target.value)}
                className={inputClass}
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-theme-strong">
                {t.reservation.fields.roomType} *
              </span>
              <select
                required
                value={form.roomType}
                onChange={(e) => update("roomType", e.target.value)}
                className={inputClass}
              >
                <option value="">{t.reservation.fields.roomPlaceholder}</option>
                {t.reservation.roomOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-theme-strong">
                {t.reservation.fields.guests} *
              </span>
              <select
                required
                value={form.guests}
                onChange={(e) => update("guests", e.target.value)}
                className={inputClass}
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={String(n)}>
                    {n}
                  </option>
                ))}
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-theme-strong">
                {t.reservation.fields.message}
              </span>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                className={`${inputClass} resize-y`}
                placeholder={t.reservation.fields.messagePlaceholder}
              />
            </label>
          </div>

          <button type="submit" className="btn-dark w-full justify-center py-3.5 sm:w-auto">
            {t.reservation.submit}
            <ArrowRight className="h-4 w-4" />
          </button>

          {submitted && (
            <p className="text-center text-sm text-theme-muted" role="status">
              {t.reservation.mailtoHint}
            </p>
          )}

          <p className="text-center text-xs text-theme-muted">{t.reservation.note}</p>
        </form>
      </div>
    </section>
  );
}
