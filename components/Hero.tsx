const WA_NUMBER = "56981748168";
const DASHBOARD_URL =
  process.env.NEXT_PUBLIC_DASHBOARD_URL ?? "https://panel.miasistia.cl";

const CHECKMARKS = [
  "Sin permanencia",
  "14 días gratis",
  "Activo en 10 min",
  "Sin tarjeta al inicio",
];

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 px-4 bg-white overflow-hidden">
      {/* Radial glow background */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* Copy */}
        <div>
          {/* Badge oferta */}
          <span
            className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4"
            style={{ backgroundColor: "#fef3c7", color: "#92400e" }}
          >
            🎉 14 días gratis — Oferta de lanzamiento
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-5 leading-tight">
            Tu negocio se atiende solo,{" "}
            <span className="gradient-text">las 24 horas</span>
          </h1>

          <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-lg">
            AsistIA conecta tu WhatsApp con inteligencia artificial. Responde
            consultas, agenda citas y atiende clientes automáticamente —
            mientras tú te dedicas a lo que importa.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#planes"
              className="px-6 py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90 shadow-sm"
              style={{ backgroundColor: "#10b981" }}
            >
              Ver planes →
            </a>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              💬 Hablar con AsistIA
            </a>
          </div>

          {/* Link al Showroom */}
          <div className="mt-4 mb-6 text-center sm:text-left">
            <span className="text-sm text-gray-500">
              👀 ¿Quieres ver el bot en acción?{" "}
              <a href="#showroom" className="text-green-600 font-medium hover:underline">
                Prueba una demo interactiva gratis →
              </a>
            </span>
          </div>

          {/* 4 checkmarks */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {CHECKMARKS.map((c) => (
              <span key={c} className="flex items-center gap-1.5 text-sm text-gray-500">
                <span className="text-emerald-500 font-bold">✓</span>
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* WhatsApp chat mockup — kinesiología */}
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
                style={{ backgroundColor: "#10b981" }}
              >
                K
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-tight">Kinesiología Salud ✦</p>
                <p className="text-xs" style={{ color: "#a7f3d0" }}>en línea</p>
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
                  Hola, me duele la espalda baja, ¿tienen hora para mañana?
                  <span className="block text-right text-[10px] text-gray-400 mt-1">10:31 ✓✓</span>
                </div>
              </div>

              {/* Bot 1 */}
              <div className="flex justify-start bubble-appear bubble-2">
                <div className="max-w-[85%] px-3 py-2 rounded-lg rounded-tl-sm text-sm text-gray-800 bg-white shadow-sm">
                  ¡Hola! Soy Ana 😊 Con gusto te ayudo. ¿A qué hora te acomoda mañana?
                  <span className="block text-right text-[10px] text-gray-400 mt-1">10:31</span>
                </div>
              </div>

              {/* User 2 */}
              <div className="flex justify-end bubble-appear bubble-3">
                <div
                  className="max-w-[85%] px-3 py-2 rounded-lg rounded-tr-sm text-sm text-gray-800 shadow-sm"
                  style={{ backgroundColor: "#dcf8c6" }}
                >
                  A las 11:00 me viene bien
                  <span className="block text-right text-[10px] text-gray-400 mt-1">10:32 ✓✓</span>
                </div>
              </div>

              {/* Bot 2 */}
              <div className="flex justify-start bubble-appear bubble-4">
                <div className="max-w-[85%] px-3 py-2 rounded-lg rounded-tl-sm text-sm text-gray-800 bg-white shadow-sm">
                  ✅ Cita agendada para mañana a las 11:00. ¡Te esperamos, cuídate mucho! 😊
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
