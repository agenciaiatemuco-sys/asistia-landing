"use client";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const DASHBOARD_URL =
  process.env.NEXT_PUBLIC_DASHBOARD_URL ?? "https://panel.miasistia.cl";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 px-4 bg-white overflow-hidden">
      {/* Radial glow background */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* Copy */}
        <div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-5 leading-tight">
            Tu WhatsApp contesta solo.{" "}
            <span className="gradient-text">Tú, a lo tuyo.</span>
          </h1>

          <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-lg">
            Alkia responde precios, agenda citas y toma pedidos 24/7, con tu
            mismo número. Sin instalaciones, sin cambiar nada.
          </p>

          <div className="flex flex-wrap gap-4 mb-3">
            <a
              href={`${DASHBOARD_URL}/contratar`}
              onClick={() => {
                if (typeof window.fbq !== "undefined") window.fbq("track", "Lead");
              }}
              className="px-6 py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90 shadow-sm"
              style={{ backgroundColor: "#0d9373" }}
            >
              Pruébalo 14 días gratis
            </a>
            <a
              href="#showroom"
              className="px-6 py-3 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              Ver demo en WhatsApp
            </a>
          </div>

          <p className="text-xs text-gray-400 mb-8">
            Sin tarjeta de crédito · Activo en 10 minutos
          </p>

          {/* 3 checkmarks */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {["Sin permanencia", "Sin instalación", "Soporte incluido"].map((c) => (
              <span key={c} className="flex items-center gap-1.5 text-sm text-gray-500">
                <span className="text-emerald-500 font-bold">✓</span>
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* WhatsApp chat mockup — pedido de agua */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="animate-float w-72 rounded-3xl overflow-hidden shadow-2xl border border-black/5"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            {/* WA Header */}
            <div
              className="px-4 py-3 flex items-center gap-3"
              style={{ backgroundColor: "#075e54" }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                style={{ backgroundColor: "#0d9373" }}
              >
                A
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-tight">Agua Pura Express ✦</p>
                <p className="text-xs" style={{ color: "#a7f3d0" }}>en linea</p>
              </div>
            </div>

            {/* Chat body */}
            <div
              className="p-3 space-y-2.5 min-h-64"
              style={{ backgroundColor: "#e5ddd5" }}
            >
              {/* User 1 */}
              <div className="flex justify-end bubble-appear bubble-1">
                <div
                  className="max-w-[85%] px-3 py-2 rounded-lg rounded-tr-sm text-sm text-gray-800 shadow-sm"
                  style={{ backgroundColor: "#dcf8c6" }}
                >
                  Hola, quiero pedir 2 bidones de agua para Av. Alemania 456
                  <span className="block text-right text-[10px] text-gray-400 mt-1">10:31 ✓✓</span>
                </div>
              </div>

              {/* Bot 1 */}
              <div className="flex justify-start bubble-appear bubble-2">
                <div className="max-w-[85%] px-3 py-2 rounded-lg rounded-tl-sm text-sm text-gray-800 bg-white shadow-sm">
                  ¡Hola! Con gusto 😊 Son 2 bidones de 20L a Av. Alemania 456. ¿Para hoy o mañana?
                  <span className="block text-right text-[10px] text-gray-400 mt-1">10:31</span>
                </div>
              </div>

              {/* User 2 */}
              <div className="flex justify-end bubble-appear bubble-3">
                <div
                  className="max-w-[85%] px-3 py-2 rounded-lg rounded-tr-sm text-sm text-gray-800 shadow-sm"
                  style={{ backgroundColor: "#dcf8c6" }}
                >
                  Para hoy en la tarde porfa
                  <span className="block text-right text-[10px] text-gray-400 mt-1">10:32 ✓✓</span>
                </div>
              </div>

              {/* Bot 2 */}
              <div className="flex justify-start bubble-appear bubble-4">
                <div className="max-w-[85%] px-3 py-2 rounded-lg rounded-tl-sm text-sm text-gray-800 bg-white shadow-sm">
                  ✅ Pedido registrado: 2 bidones para hoy entre 15:00 y 18:00. ¡Te avisamos cuando salga! 🚚
                  <span className="block text-right text-[10px] text-gray-400 mt-1">10:32</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
