import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const NAV_OFFSET = 96;

export function smoothScrollToHash(hash: string) {
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  const target = document.getElementById(id);
  if (!target) return;

  gsap.to(window, {
    duration: 0.8,
    scrollTo: { y: target, offsetY: NAV_OFFSET },
    ease: "power3.inOut",
    overwrite: true,
  });

  history.pushState(null, "", `#${id}`);
}
