"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { DASHBOARD_URL } from "@/lib/links";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const NAV_LINKS = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Demo",          href: "#showroom" },
  { label: "Precios",       href: "#planes" },
  { label: "FAQ",           href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-slate-100 shadow-sm"
          : "bg-white border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo — PNG wordmark real, no el SVG del referente */}
        <a href="#" className="flex items-center">
          <Image
            src="/brand/alkia-wordmark.png"
            alt="Alkia"
            width={112}
            height={36}
            style={{ height: "auto" }}
            priority
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-600 hover:text-alkia-dark transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`${DASHBOARD_URL}/login`}
            className="hidden sm:block text-sm font-semibold text-gray-600 hover:text-alkia-dark transition-colors"
          >
            Entrar
          </a>
          <a
            href={`${DASHBOARD_URL}/contratar`}
            onClick={() => {
              if (typeof window.fbq !== "undefined") window.fbq("track", "Lead");
            }}
            className="px-4 py-2 rounded-xl text-sm font-bold text-white bg-alkia shadow-sm transition-all hover:bg-alkia-dark"
          >
            Empezar gratis →
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-700 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={`${DASHBOARD_URL}/login`}
            className="text-sm font-semibold text-alkia-dark"
            onClick={() => setMenuOpen(false)}
          >
            Iniciar sesión
          </a>
        </div>
      )}
    </nav>
  );
}
