"use client";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const DASHBOARD_URL =
  process.env.NEXT_PUBLIC_DASHBOARD_URL ?? "https://panel.miasistia.cl";

function trackLead() {
  if (typeof window.fbq !== "undefined") window.fbq("track", "Lead");
}

export default function CTAFinal() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Tu negocio merece atender mejor
        </h2>
        <p className="text-gray-500 mb-10 text-lg leading-relaxed">
          Empieza gratis hoy. Sin tarjeta, sin técnicos, sin compromiso.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`${DASHBOARD_URL}/contratar`}
            onClick={trackLead}
            className="px-8 py-3.5 rounded-xl font-semibold text-white transition-opacity hover:opacity-90 shadow-sm"
            style={{ backgroundColor: "#0d9373" }}
          >
            Pruébalo 14 días gratis
          </a>
          <a
            href="#showroom"
            className="px-8 py-3.5 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            Ver demo en WhatsApp
          </a>
        </div>
        <p className="text-xs text-gray-400 mt-4">
          Sin tarjeta de crédito · Activo en 10 minutos
        </p>
      </div>
    </section>
  );
}
