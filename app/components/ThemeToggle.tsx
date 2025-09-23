"use client";

export default function ThemeToggle() {
  function toggle() {
    const r = document.documentElement;
    r.setAttribute("data-theme", r.getAttribute("data-theme") === "dark" ? "light" : "dark");
  }
  return (
    <button
      onClick={toggle}
      className="rounded-2xl px-3 py-2 border border-gray-300 hover:border-brand-primary"
      aria-label="Cambiar tema claro/oscuro"
      type="button"
    >
      Tema
    </button>
  );
}
