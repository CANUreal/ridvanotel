import { Navbar } from "./components/Navbar";
import { useApp } from "./context/AppContext";
import { useScrollAnimations } from "./hooks/useScrollAnimations";
import { HeroSection } from "./sections/HeroSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { AboutSection } from "./sections/AboutSection";
import { AmenitiesSection } from "./sections/AmenitiesSection";
import { RoomsSection } from "./sections/RoomsSection";
import { GallerySection } from "./sections/GallerySection";
import { ReservationSection } from "./sections/ReservationSection";
import { ContactSection } from "./sections/ContactSection";

export default function App() {
  const { t, localeSwitching } = useApp();
  useScrollAnimations();

  return (
    <div className="min-h-full bg-theme-page transition-colors duration-300">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-theme-section focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-theme-strong focus:shadow-lg"
      >
        {t.a11y.skipToContent}
      </a>
      <Navbar />
      <main className={localeSwitching ? "locale-content is-switching" : "locale-content"}>
        <HeroSection />
        <TestimonialsSection />
        <AboutSection />
        <AmenitiesSection />
        <RoomsSection />
        <GallerySection />
        <ReservationSection />
        <ContactSection />
      </main>
    </div>
  );
}
