"use client";

import { DASHBOARD_URL } from "@/lib/links";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function trackLead() {
  if (typeof window.fbq !== "undefined") window.fbq("track", "Lead");
}

export default function CTAFinal() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-[image:var(--gradient-alkia)] px-8 py-14 text-center text-white shadow-lg">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-white/10 blur-2xl"
          />

          <h2 className="relative text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Tu negocio merece atender mejor
          </h2>
          <p className="relative mx-auto max-w-lg text-lg leading-relaxed opacity-90 mb-10">
            Empieza gratis hoy. Sin tarjeta, sin técnicos, sin compromiso.
          </p>

          <div className="relative flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`${DASHBOARD_URL}/contratar`}
              onClick={trackLead}
              className="px-8 py-3.5 rounded-xl font-bold text-alkia-dark bg-white shadow-md transition-transform hover:scale-[1.03]"
            >
              Pruébalo 14 días gratis
            </a>
            <a
              href="#showroom"
              className="px-8 py-3.5 rounded-xl font-semibold text-white bg-white/10 border border-white/30 hover:bg-white/20 transition-colors"
            >
              Ver demo en WhatsApp
            </a>
          </div>
          <p className="relative text-xs opacity-80 mt-4">
            Sin tarjeta de crédito · Activo en 10 minutos
          </p>
        </div>
      </div>
    </section>
  );
}
