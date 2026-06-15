const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "56912345678";

export default function Hero() {
  return (
    <section className="pt-28 pb-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* Copy */}
        <div>
          <span
            className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-6"
            style={{ backgroundColor: "#d1fae5", color: "#065f46" }}
          >
            Asistente IA para WhatsApp
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Tu negocio se atiende solo,{" "}
            <span style={{ color: "#10b981" }}>las 24 horas</span>
          </h1>

          <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-lg">
            AsistIA conecta tu WhatsApp con inteligencia artificial. Responde
            consultas, agenda citas y atiende clientes automáticamente —
            mientras tú te dedicas a lo que importa.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#precios"
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

          {/* Social proof mini */}
          <p className="mt-8 text-sm text-gray-400">
            ✓ Sin permanencia &nbsp;·&nbsp; ✓ Primer mes gratis &nbsp;·&nbsp; ✓ Activo en 10 min
          </p>
        </div>

        {/* WhatsApp chat mockup */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="w-72 rounded-3xl overflow-hidden shadow-2xl border border-black/5"
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
                A
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-tight">AsistIA ✦</p>
                <p className="text-xs" style={{ color: "#a7f3d0" }}>en línea</p>
              </div>
            </div>

            {/* Chat body */}
            <div
              className="p-3 space-y-2.5 min-h-60"
              style={{ backgroundColor: "#e5ddd5" }}
            >
              {/* User bubble 1 */}
              <div className="flex justify-end bubble-appear bubble-1">
                <div
                  className="max-w-[82%] px-3 py-2 rounded-lg rounded-tr-sm text-sm text-gray-800 shadow-sm"
                  style={{ backgroundColor: "#dcf8c6" }}
                >
                  Hola, ¿tienen hora disponible para mañana?
                  <span className="block text-right text-[10px] text-gray-400 mt-1">10:31 ✓✓</span>
                </div>
              </div>

              {/* Bot bubble 1 */}
              <div className="flex justify-start bubble-appear bubble-2">
                <div className="max-w-[82%] px-3 py-2 rounded-lg rounded-tl-sm text-sm text-gray-800 bg-white shadow-sm">
                  ¡Hola! Soy AsistIA 🤖 Con gusto te ayudo. ¿Cuál es tu nombre completo?
                  <span className="block text-right text-[10px] text-gray-400 mt-1">10:31</span>
                </div>
              </div>

              {/* User bubble 2 */}
              <div className="flex justify-end bubble-appear bubble-3">
                <div
                  className="max-w-[82%] px-3 py-2 rounded-lg rounded-tr-sm text-sm text-gray-800 shadow-sm"
                  style={{ backgroundColor: "#dcf8c6" }}
                >
                  Me llamo María González
                  <span className="block text-right text-[10px] text-gray-400 mt-1">10:32 ✓✓</span>
                </div>
              </div>

              {/* Bot bubble 2 */}
              <div className="flex justify-start bubble-appear bubble-4">
                <div className="max-w-[82%] px-3 py-2 rounded-lg rounded-tl-sm text-sm text-gray-800 bg-white shadow-sm">
                  ¡Perfecto, María! ✅ Te agendé para mañana a las 10:00 AM. ¡Hasta pronto! 😊
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
