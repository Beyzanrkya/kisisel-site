"use client";

import { useEffect, useState } from "react";
import { profil } from "@/data/profil";

const links = [
  { href: "#hakkimda", label: "Hakkımda" },
  { href: "#yetenekler", label: "Yetenekler" },
  { href: "#projeler", label: "Projeler" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="font-display text-xl font-bold">
          <span className="gradient-text">{profil.ad}</span>
          <span className="text-pink-400">.</span>
        </a>

        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-2xl"
          aria-label="Menüyü aç/kapat"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <ul className="glass mx-4 mt-3 flex flex-col gap-4 rounded-2xl p-6 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block text-lg">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
