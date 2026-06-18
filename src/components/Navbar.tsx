import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useApp } from "../context/AppContext";
import { useActiveNav } from "../hooks/useActiveNav";
import { useNavTone } from "../hooks/useNavTone";
import type { Locale } from "../i18n/translations";
import { smoothScrollToHash } from "../utils/smoothScroll";

function useNavIndicator(activeHref: string, deps: unknown[] = []) {
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef(new Map<string, HTMLAnchorElement>());
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false });

  const measure = useCallback(() => {
    const nav = navRef.current;
    const link = linkRefs.current.get(activeHref);
    if (!nav || !link) return;

    const navRect = nav.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    setIndicator({
      left: linkRect.left - navRect.left,
      width: linkRect.width,
      ready: true,
    });
  }, [activeHref]);

  useLayoutEffect(() => {
    measure();
  }, [measure, activeHref, ...deps]);

  useEffect(() => {
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const setLinkRef = (href: string) => (el: HTMLAnchorElement | null) => {
    if (el) linkRefs.current.set(href, el);
    else linkRefs.current.delete(href);
  };

  return { navRef, setLinkRef, indicator, measure };
}

function NavLink({
  href,
  label,
  isActive,
  setRef,
  onNavigate,
  className = "",
}: {
  href: string;
  label: string;
  isActive: boolean;
  setRef?: (el: HTMLAnchorElement | null) => void;
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  className?: string;
}) {
  return (
    <a
      ref={setRef}
      href={href}
      onClick={(e) => onNavigate(e, href)}
      className={`nav-link whitespace-nowrap px-2 py-2 text-sm text-nav md:px-2.5 lg:px-3 ${isActive ? "is-active" : ""} ${className}`}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </a>
  );
}

export function Navbar() {
  const { t, theme, locale, toggleTheme, setLocale } = useApp();
  const navTone = useNavTone();
  const navHrefs = t.nav.map((l) => l.href);
  const activeHref = useActiveNav(navHrefs);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuPanelId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  const { navRef, setLinkRef, indicator } = useNavIndicator(activeHref, [locale]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    firstMenuLinkRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      menuButtonRef.current?.focus();
    };
  }, [menuOpen]);

  const handleNavigate = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.startsWith("#")) {
        e.preventDefault();
        document.body.style.overflow = "";
        smoothScrollToHash(href);
      }
      setMenuOpen(false);
    },
    []
  );

  return (
    <>
      <header
        className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6 md:px-10"
        data-nav-tone={navTone}
      >
        <div className="pointer-events-auto mx-auto grid w-full max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-1.5 sm:gap-4">
          <div className="flex justify-start">
            <a
              href="#top"
              onClick={(e) => handleNavigate(e, "#top")}
              className="liquid-glass flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-transform duration-200 active:scale-95 sm:h-12 sm:w-12"
              aria-label={t.brand.name}
            >
              <span className="font-brand text-xl text-nav sm:text-2xl">r</span>
            </a>
          </div>

          <div className="flex min-w-0 justify-center overflow-hidden">
            <nav
              ref={navRef}
              className="nav-pill-track liquid-glass relative hidden min-w-0 max-w-full items-center rounded-full px-1.5 py-1.5 md:flex"
              aria-label={t.a11y.mainNav}
            >
              <span
                className="nav-pill-indicator"
                style={{
                  left: indicator.left,
                  width: indicator.width,
                  opacity: indicator.ready ? undefined : 0,
                }}
                aria-hidden
              />
              {t.nav.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  isActive={activeHref === link.href}
                  setRef={setLinkRef(link.href)}
                  onNavigate={handleNavigate}
                />
              ))}
            </nav>
          </div>

          <div className="flex shrink-0 items-center justify-end gap-1 sm:gap-2">
            <div className="hidden sm:block">
              <LangToggle locale={locale} setLocale={setLocale} />
            </div>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            <a
              href="#reservation"
              onClick={(e) => handleNavigate(e, "#reservation")}
              className="btn-nav-primary hidden items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium transition-transform duration-200 active:scale-95 lg:flex lg:gap-1.5 lg:px-4 lg:py-2.5 lg:text-sm"
            >
              <span className="hidden xl:inline">{t.cta.primary}</span>
              <span className="xl:hidden">{t.cta.primaryShort}</span>
              <ArrowUpRight className="h-3.5 w-3.5 lg:h-4 lg:w-4" aria-hidden />
            </a>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="liquid-glass relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-nav transition-all duration-300 active:scale-95 md:hidden"
              aria-label={menuOpen ? t.a11y.closeMenu : t.a11y.openMenu}
              aria-expanded={menuOpen}
              aria-controls={menuPanelId}
            >
              <Menu
                className={`absolute h-5 w-5 transition-all duration-300 ${
                  menuOpen ? "scale-50 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
                }`}
                aria-hidden
              />
              <X
                className={`absolute h-5 w-5 transition-all duration-300 ${
                  menuOpen ? "scale-100 rotate-0 opacity-100" : "scale-50 -rotate-90 opacity-0"
                }`}
                aria-hidden
              />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[45] transition-opacity duration-300 md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      <div
        id={menuPanelId}
        role="dialog"
        aria-modal="true"
        aria-label={t.a11y.mobileNav}
        aria-hidden={!menuOpen}
        data-nav-tone="on-light"
        data-surface="light"
        className={`fixed bottom-0 right-0 top-0 z-[46] w-[min(100vw-3rem,20rem)] max-w-sm bg-theme-section shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col px-6 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(6rem,env(safe-area-inset-top,0px)+4rem)] sm:px-8">
          <div className="mb-6 flex items-center gap-2">
            <LangToggle locale={locale} setLocale={setLocale} />
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
          <nav className="flex flex-col gap-1" aria-label={t.a11y.mobileNav}>
            {t.nav.map((link, i) => (
              <a
                key={link.href}
                ref={i === 0 ? firstMenuLinkRef : undefined}
                href={link.href}
                onClick={(e) => handleNavigate(e, link.href)}
                className={`break-words border-b border-theme py-3.5 text-xl font-semibold transition-all duration-500 sm:py-4 sm:text-2xl ${
                  activeHref === link.href ? "text-theme-strong" : "text-theme-body"
                } ${menuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
                style={{ transitionDelay: menuOpen ? `${150 + i * 70}ms` : "0ms" }}
                tabIndex={menuOpen ? 0 : -1}
                aria-current={activeHref === link.href ? "page" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#reservation"
            onClick={(e) => handleNavigate(e, "#reservation")}
            className={`btn-nav-primary mt-8 flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-500 active:scale-95 ${
              menuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
            style={{ transitionDelay: menuOpen ? "400ms" : "0ms" }}
            tabIndex={menuOpen ? 0 : -1}
          >
            {t.cta.primary}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </>
  );
}

function ThemeToggle({
  theme,
  toggleTheme,
}: {
  theme: "light" | "dark";
  toggleTheme: () => void;
}) {
  const { t } = useApp();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="liquid-glass flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-nav transition-all duration-200 hover:opacity-80 active:scale-95"
      aria-label={theme === "dark" ? t.a11y.themeLight : t.a11y.themeDark}
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

function LangToggle({
  locale,
  setLocale,
}: {
  locale: Locale;
  setLocale: (l: Locale) => void;
}) {
  const { t } = useApp();

  return (
    <div
      className="lang-track liquid-glass shrink-0 rounded-full p-1 text-xs font-semibold uppercase tracking-wider"
      role="group"
      aria-label={t.a11y.langSwitch}
    >
      <span
        className={`lang-pill ${locale === "tr" ? "is-tr" : ""}`}
        aria-hidden
      />
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`lang-option col-start-1 row-start-1 rounded-full px-0 py-1.5 ${
          locale === "en" ? "text-[var(--nav-btn-fg)]" : "text-nav-muted"
        }`}
        style={locale === "en" ? { color: "var(--nav-btn-fg)" } : undefined}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale("tr")}
        className={`lang-option col-start-2 row-start-1 rounded-full px-0 py-1.5 ${
          locale === "tr" ? "" : "text-nav-muted"
        }`}
        style={locale === "tr" ? { color: "var(--nav-btn-fg)" } : undefined}
        aria-pressed={locale === "tr"}
      >
        TR
      </button>
    </div>
  );
}
