const NAV_OFFSET = 88;

export function smoothScrollToHash(hash: string) {
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  const target = document.getElementById(id);
  if (!target) return;

  const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: "smooth",
  });

  history.pushState(null, "", `#${id}`);
}
