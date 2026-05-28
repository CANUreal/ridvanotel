export type Locale = "tr" | "en";

export const translations = {
  tr: {
    brand: {
      name: "Rıdvan Otel",
      logo: "RIDVAN",
      logoMuted: "OTEL",
      footer: "Rıdvan Otel · Çeşme",
    },
    nav: [
      { href: "#top", label: "Anasayfa" },
      { href: "#suites", label: "Odalar" },
      { href: "#gallery", label: "Galeri" },
      { href: "#reviews", label: "Yorumlar" },
      { href: "#reservation", label: "Rezervasyon" },
      { href: "#contact", label: "İletişim" },
    ],
    cta: {
      primary: "Rezervasyon Yap",
      primaryShort: "Rezervasyon",
      hero: "Bizimle İletişime Geçin",
      secondary: "Galeriyi Gör",
      galleryLink: "Galeri",
      roomsLink: "Odalarımız",
      roomDetail: "Detaylar",
    },
    hero: {
      title: "Rıdvan Otel Çeşme",
      subtitle: "Hoş geldiniz.",
      tagline:
        "Kale karşısında, sahile 50 metre — açık büfe kahvaltı, deniz ve şehir manzaralı odalar.",
    },
    highlights: [
      { value: "36", label: "Oda" },
      { value: "50m", label: "Sahile" },
      { value: "24/7", label: "Resepsiyon" },
    ],
    testimonials: {
      title: "Misafir Deneyimleri",
      source: "Google Maps Yorumlar",
      items: [
        {
          initials: "NG",
          avatarClass: "bg-blue-600",
          name: "Naciye Güneş",
          quote:
            "Merkezde olması çok avantajlı, temiz ve düzenli bir otel. Erdal Bey'in ilgisi için çok teşekkür ederiz. Kesinlikle gönül rahatlığıyla kalabilirsiniz.",
        },
        {
          initials: "OM",
          avatarClass: "bg-emerald-600",
          name: "Özlem M.",
          quote:
            "Fiyat-performans açısından mükemmel. Konumu harika, kalenin tam karşısında. Deniz manzaralı odalar çok güzel, resepsiyondaki Tahsin Bey'e teşekkürler.",
        },
        {
          initials: "ÇE",
          avatarClass: "bg-violet-600",
          name: "Çiğdem Eryılmaz",
          quote:
            "Sahile çok yakın, odalar tertemiz ve her gün temizlik yapılıyor. Personel güler yüzlü ve çok ilgili. Çeşme'ye tekrar gelirsek yine burada kalırız.",
        },
      ],
    },
    about: {
      heading: "Neden Rıdvan Otel?",
      text: "Cumhuriyet Meydanı'na bakan otelimiz Çeşme'nin kalbinde: sahile 50 metre, marinaya 100 metre. Her sabah 07:30–10:30 açık büfe kahvaltı; kale, kafeler ve restoranlar yürüme mesafesinde. 36 oda, yılın 12 ayı açık.",
    },
    amenities: { title: "Olanaklar" },
    services: [
      {
        number: "01",
        name: "Açık Büfe Kahvaltı",
        description:
          "Her sabah 07:30–10:30 arası ücretsiz açık büfe kahvaltı. Odaya kahvaltı seçeneği de mevcuttur.",
      },
      {
        number: "02",
        name: "Ücretsiz Wi-Fi",
        description:
          "Tesis genelinde ve tüm odalarda ücretsiz internet. 24 saat resepsiyon, bagaj muhafazası ve emanet kasası.",
      },
      {
        number: "03",
        name: "Konforlu Odalar",
        description:
          "Klima, dijital TV, direkt telefon, mini bar, buzdolabı, banyo, terlik, saç kurutma makinesi, 24 saat sıcak su.",
      },
      {
        number: "04",
        name: "Oda Servisi & Asansör",
        description:
          "Oda servisi, emanet kasası ve asansör. Belboy, danışma, ücretli ütü, telefon ve faks hizmetleri.",
      },
      {
        number: "05",
        name: "Transfer Servisi",
        description:
          "Havalimanına 90 km. İstek üzerine ücretli transfer. Giriş 14:00, çıkış 12:00.",
      },
    ],
    rooms: {
      title: "Odalar",
      subtitle: "İki oda kategorisi — toplam 36 oda",
      items: [
        {
          number: "01",
          name: "Deniz Manzaralı",
          category: "24 Oda · Lüks",
          description:
            "Deniz manzaralı lüks odalarımız evinizdeki huzuru sunar. Klima, direkt telefon, dijital TV, Wi-Fi, mini bar ve saç kurutma makinesi.",
          features: ["Deniz manzarası", "Klima", "Mini bar", "Dijital TV", "Wi-Fi"],
        },
        {
          number: "02",
          name: "Kale & Meydan Manzaralı",
          category: "12 Oda · Balkonlu",
          description:
            "Çeşme Kalesi ve meydanı gören odalarımızda balkonunuzda tarihin esintisini yaşayın. Isı cam, 24 saat sıcak su, Wi-Fi ve mini bar.",
          features: ["Kale manzarası", "Balkon", "Isı cam", "24 saat sıcak su", "Wi-Fi"],
        },
      ],
    },
    gallery: {
      title: "Galeri",
      subtitle: "Rıdvan Otel'den kareler — büyütmek için fotoğrafa tıklayın",
      imageAlt: (n: number) => `Rıdvan Otel galeri fotoğrafı ${n}`,
      openImage: (n: number) => `Fotoğraf ${n} — büyüt`,
      scrollHint: "Yana kaydırarak galeriyi gezin",
    },
    reservation: {
      title: "Rezervasyon",
      subtitle:
        "Formu doldurun; e-posta uygulamanız açılarak talebiniz info@ridvanotel.com adresine iletilir.",
      submit: "Talebi gönder",
      mailtoHint: "E-posta uygulamanız açılmadıysa info@ridvanotel.com adresine yazabilirsiniz.",
      note: "Giriş 14:00 · Çıkış 12:00. Onay için otelimiz sizinle iletişime geçecektir.",
      fields: {
        name: "Ad Soyad",
        email: "E-posta",
        phone: "Telefon",
        checkIn: "Giriş tarihi",
        checkOut: "Çıkış tarihi",
        roomType: "Oda tipi",
        roomPlaceholder: "Seçiniz",
        guests: "Misafir sayısı",
        message: "Ek notlarınız",
        messagePlaceholder: "Özel istek, çocuk yaşı, transfer talebi…",
      },
      roomOptions: [
        { value: "sea", label: "Deniz Manzaralı" },
        { value: "castle", label: "Kale & Meydan Manzaralı" },
      ],
    },
    contact: {
      title: "İletişim",
      checkInOut: (inT: string, outT: string) => `Giriş ${inT} · Çıkış ${outT}`,
      rightsReserved: "Tüm hakları saklıdır.",
    },
    a11y: {
      mainNav: "Ana menü",
      mobileNav: "Mobil menü",
      skipToContent: "İçeriğe atla",
      openMenu: "Menüyü aç",
      closeMenu: "Menüyü kapat",
      themeLight: "Açık temaya geç",
      themeDark: "Koyu temaya geç",
      langSwitch: "Dili değiştir",
      lightbox: "Fotoğraf galerisi",
      lightboxClose: "Kapat",
      lightboxPrev: "Önceki fotoğraf",
      lightboxNext: "Sonraki fotoğraf",
    },
    meta: {
      title: "Rıdvan Otel — Çeşme | Oda & Kahvaltı",
      description:
        "Çeşme merkezde, sahile 50 metre — deniz ve kale manzaralı odalar, açık büfe kahvaltı, 24 saat resepsiyon.",
    },
  },
  en: {
    brand: {
      name: "Ridvan Hotel",
      logo: "RIDVAN",
      logoMuted: "HOTEL",
      footer: "Ridvan Hotel · Cesme",
    },
    nav: [
      { href: "#top", label: "Home" },
      { href: "#suites", label: "Rooms" },
      { href: "#gallery", label: "Gallery" },
      { href: "#reviews", label: "Reviews" },
      { href: "#reservation", label: "Book" },
      { href: "#contact", label: "Contact" },
    ],
    cta: {
      primary: "Book Now",
      primaryShort: "Book",
      hero: "Get in Touch",
      secondary: "View Gallery",
      galleryLink: "Gallery",
      roomsLink: "Our Rooms",
      roomDetail: "Details",
    },
    hero: {
      title: "Ridvan Hotel Cesme",
      subtitle: "Welcome.",
      tagline:
        "Facing the castle, 50m from the beach — open buffet breakfast and sea or town view rooms.",
    },
    highlights: [
      { value: "36", label: "Rooms" },
      { value: "50m", label: "To beach" },
      { value: "24/7", label: "Reception" },
    ],
    testimonials: {
      title: "Guest Experiences",
      source: "Google Maps Reviews",
      items: [
        {
          initials: "NG",
          avatarClass: "bg-blue-600",
          name: "Naciye Gunes",
          quote:
            "Very convenient central location, clean and well-kept hotel. Thank you Mr. Erdal for your kindness. You can stay here with complete peace of mind.",
        },
        {
          initials: "OM",
          avatarClass: "bg-emerald-600",
          name: "Ozlem M.",
          quote:
            "Excellent value for money. Great location right across from the castle. Beautiful sea-view rooms — thanks to Tahsin at reception.",
        },
        {
          initials: "CE",
          avatarClass: "bg-violet-600",
          name: "Cigdem Eryilmaz",
          quote:
            "Very close to the beach, rooms are spotless with daily cleaning. Friendly, attentive staff. We would stay here again on our next trip to Cesme.",
        },
      ],
    },
    about: {
      heading: "Why Ridvan Hotel?",
      text: "Overlooking Republic Square in the heart of Cesme: 50 meters to the beach, 100 meters to the marina. Open buffet breakfast daily 7:30–10:30 AM; castle, cafes, and restaurants within walking distance. 36 rooms, open year-round.",
    },
    amenities: { title: "Amenities" },
    services: [
      {
        number: "01",
        name: "Open Buffet Breakfast",
        description:
          "Complimentary open buffet breakfast daily from 7:30 to 10:30 AM. In-room breakfast option available.",
      },
      {
        number: "02",
        name: "Free Wi-Fi",
        description:
          "Free internet throughout the property and in all rooms. 24-hour reception, luggage storage, and safe deposit box.",
      },
      {
        number: "03",
        name: "Comfortable Rooms",
        description:
          "Air conditioning, digital TV, direct phone, minibar, refrigerator, bathroom, slippers, hair dryer, and 24-hour hot water.",
      },
      {
        number: "04",
        name: "Room Service & Elevator",
        description:
          "Room service, safe deposit box, and elevator. Bellboy, concierge, paid ironing, phone, and fax services.",
      },
      {
        number: "05",
        name: "Transfer Service",
        description:
          "90 km to the airport. Paid transfer on request. Check-in 2:00 PM, check-out 12:00 PM.",
      },
    ],
    rooms: {
      title: "Rooms",
      subtitle: "Two room categories — 36 rooms in total",
      items: [
        {
          number: "01",
          name: "Sea View",
          category: "24 Rooms · Luxury",
          description:
            "Our luxury sea-view rooms offer the comfort of home. Air conditioning, direct phone, digital TV, Wi-Fi, minibar, and hair dryer.",
          features: ["Sea view", "A/C", "Minibar", "Digital TV", "Wi-Fi"],
        },
        {
          number: "02",
          name: "Castle & Square View",
          category: "12 Rooms · Balcony",
          description:
            "Rooms overlooking Cesme Castle and the square. Enjoy history from your balcony. Insulated glass, 24-hour hot water, Wi-Fi, and minibar.",
          features: ["Castle view", "Balcony", "Insulated glass", "24h hot water", "Wi-Fi"],
        },
      ],
    },
    gallery: {
      title: "Gallery",
      subtitle: "Photos from Ridvan Hotel — click any image to enlarge",
      imageAlt: (n: number) => `Ridvan Hotel gallery photo ${n}`,
      openImage: (n: number) => `Photo ${n} — enlarge`,
      scrollHint: "Swipe sideways to browse the gallery",
    },
    reservation: {
      title: "Reservation",
      subtitle:
        "Fill out the form; your email app will open to send your request to info@ridvanotel.com.",
      submit: "Send request",
      mailtoHint: "If your email app did not open, you can write to info@ridvanotel.com directly.",
      note: "Check-in 2:00 PM · Check-out 12:00 PM. Our team will confirm your booking.",
      fields: {
        name: "Full name",
        email: "Email",
        phone: "Phone",
        checkIn: "Check-in date",
        checkOut: "Check-out date",
        roomType: "Room type",
        roomPlaceholder: "Select",
        guests: "Number of guests",
        message: "Additional notes",
        messagePlaceholder: "Special requests, child ages, transfer needs…",
      },
      roomOptions: [
        { value: "sea", label: "Sea View" },
        { value: "castle", label: "Castle & Square View" },
      ],
    },
    contact: {
      title: "Contact",
      checkInOut: (inT: string, outT: string) => `Check-in ${inT} · Check-out ${outT}`,
      rightsReserved: "All rights reserved.",
    },
    a11y: {
      mainNav: "Main navigation",
      mobileNav: "Mobile navigation",
      skipToContent: "Skip to content",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      themeLight: "Switch to light theme",
      themeDark: "Switch to dark theme",
      langSwitch: "Change language",
      lightbox: "Photo gallery",
      lightboxClose: "Close",
      lightboxPrev: "Previous photo",
      lightboxNext: "Next photo",
    },
    meta: {
      title: "Ridvan Hotel — Cesme | Room & Breakfast",
      description:
        "Central Cesme, 50m from the beach — sea and castle view rooms, open buffet breakfast, 24-hour reception.",
    },
  },
} as const;

export type Translation = (typeof translations)[Locale];
