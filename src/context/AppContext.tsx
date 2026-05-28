import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { translations, type Locale, type Translation } from "../i18n/translations";
import { SITE } from "../config/site";

gsap.registerPlugin(ScrollTrigger);

export type Theme = "light" | "dark";

interface AppContextValue {
  theme: Theme;
  locale: Locale;
  localeSwitching: boolean;
  t: Translation;
  toggleTheme: () => void;
  setLocale: (locale: Locale) => void;
  contact: typeof SITE.contact;
  cta: typeof SITE.cta;
  brandWebsite: string;
}

const AppContext = createContext<AppContextValue | null>(null);

const THEME_KEY = "ridvan-theme";
const LOCALE_KEY = "ridvan-locale";

function readTheme(): Theme {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function readLocale(): Locale {
  const stored = localStorage.getItem(LOCALE_KEY);
  if (stored === "tr" || stored === "en") return stored;
  return "tr";
}

const LOCALE_SWITCH_MS = 220;

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => readTheme());
  const [locale, setLocaleState] = useState<Locale>(() => readLocale());
  const [displayLocale, setDisplayLocale] = useState<Locale>(() => readLocale());
  const [localeSwitching, setLocaleSwitching] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, [theme]);

  useEffect(() => {
    const meta = translations[displayLocale].meta;
    document.documentElement.lang = displayLocale;
    localStorage.setItem(LOCALE_KEY, displayLocale);
    document.title = meta.title;

    let desc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!desc) {
      desc = document.createElement("meta");
      desc.name = "description";
      document.head.appendChild(desc);
    }
    desc.content = meta.description;
  }, [displayLocale]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const setLocale = useCallback(
    (next: Locale) => {
      if (next === locale) return;
      setLocaleSwitching(true);
      setLocaleState(next);

      window.setTimeout(() => {
        setDisplayLocale(next);
        window.setTimeout(() => {
          setLocaleSwitching(false);
          ScrollTrigger.refresh();
        }, LOCALE_SWITCH_MS);
      }, LOCALE_SWITCH_MS);
    },
    [locale]
  );

  const value = useMemo<AppContextValue>(
    () => ({
      theme,
      locale,
      localeSwitching,
      t: translations[displayLocale],
      toggleTheme,
      setLocale,
      contact: SITE.contact,
      cta: SITE.cta,
      brandWebsite: SITE.brand.website,
    }),
    [theme, locale, localeSwitching, displayLocale, toggleTheme, setLocale]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
