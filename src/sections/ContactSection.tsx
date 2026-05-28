import { Mail, MapPin, Phone } from "lucide-react";
import { useApp } from "../context/AppContext";

export function ContactSection() {
  const { t, contact, brandWebsite } = useApp();
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      data-surface="dark"
      className="section-pad overflow-hidden bg-theme-footer py-14 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center" data-animate="title">
          <h2 className="text-2xl font-black uppercase tracking-tight text-on-surface-heading sm:text-3xl md:text-4xl">
            {t.contact.title}
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-white/80" aria-hidden />
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          <div
            data-animate="contact-col"
            className="flex flex-col items-center text-center sm:items-start sm:text-left"
          >
            <MapPin className="mb-3 h-5 w-5 text-on-surface-accent" />
            <p className="text-sm leading-relaxed text-on-surface-body">{contact.address}</p>
          </div>
          <div
            data-animate="contact-col"
            className="flex flex-col items-center text-center sm:items-start sm:text-left"
          >
            <Phone className="mb-3 h-5 w-5 text-on-surface-accent" />
            {contact.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="block text-sm text-on-surface-body transition-opacity hover:text-on-surface-strong hover:opacity-100"
              >
                {phone}
              </a>
            ))}
          </div>
          <div
            data-animate="contact-col"
            className="flex flex-col items-center text-center sm:items-start sm:text-left"
          >
            <Mail className="mb-3 h-5 w-5 text-on-surface-accent" />
            <a
              href={`mailto:${contact.email}`}
              className="text-sm text-on-surface-body transition-opacity hover:text-on-surface-strong"
            >
              {contact.email}
            </a>
            <p className="mt-3 text-xs text-on-surface-muted">
              {t.contact.checkInOut(contact.checkIn, contact.checkOut)}
            </p>
          </div>
        </div>

        <div
          data-animate="footer-line"
          className="mt-14 border-t border-white/15 pt-8 text-center"
        >
          <a
            href={brandWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="font-brand text-lg text-on-surface-strong transition-opacity hover:opacity-80"
          >
            ridvanotel.com
          </a>
          <p className="mt-3 text-xs text-on-surface-muted">{contact.license}</p>
          <p className="mt-2 text-xs uppercase tracking-widest text-on-surface-muted">
            {t.brand.footer} · {year}
          </p>
          <p data-animate="footer-copy" className="mt-4 text-xs text-on-surface-muted">
            © {year} {t.brand.name}. {t.contact.rightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}
