"use client";

import { useState, useEffect } from "react";

const DASHBOARD_URL =
  process.env.NEXT_PUBLIC_DASHBOARD_URL ?? "https://panel.miasistia.cl/login";

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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-bold" style={{ color: "#10b981" }}>
          ✦ AsistIA
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#como-funciona" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Cómo funciona
          </a>
          <a href="#precios" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Precios
          </a>
          <a href="#faq" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            FAQ
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={DASHBOARD_URL}
            className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#10b981" }}
          >
            Empezar ahora
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-4">
          <a href="#como-funciona" className="text-sm text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>
            Cómo funciona
          </a>
          <a href="#precios" className="text-sm text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>
            Precios
          </a>
          <a href="#faq" className="text-sm text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>
            FAQ
          </a>
        </div>
      )}
    </nav>
  );
}
