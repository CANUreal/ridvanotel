import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AppProvider } from "./context/AppContext";
import { translations } from "./i18n/translations";
import "./index.css";

const theme = localStorage.getItem("ridvan-theme");
if (theme === "light" || theme === "dark") {
  document.documentElement.setAttribute("data-theme", theme);
}

const storedLocale = localStorage.getItem("ridvan-locale");
const activeLocale = storedLocale === "en" ? "en" : "tr";
if (storedLocale === "tr" || storedLocale === "en") {
  document.documentElement.lang = storedLocale;
}

const bootMeta = translations[activeLocale].meta;
document.title = bootMeta.title;
const bootDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
if (bootDesc) bootDesc.content = bootMeta.description;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
