const steps = [
  {
    n: "1",
    title: "Conecta tu WhatsApp",
    body: "Escanea un QR desde tu celular. Sin apps adicionales.",
  },
  {
    n: "2",
    title: "Configura tu asistente",
    body: "Cuéntale sobre tu negocio en menos de 10 minutos.",
  },
  {
    n: "3",
    title: "Listo, a trabajar",
    body: "Responde solo, agenda citas y atiende 24/7.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
          Activa tu asistente en 3 pasos simples
        </h2>
        <p className="text-center text-gray-500 mb-16 text-sm">
          Sin técnicos. Sin complicaciones. Sin código.
        </p>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:grid md:grid-cols-3 gap-0 relative">
          {/* Connector line */}
          <div
            className="absolute top-6 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-0.5"
            style={{ backgroundColor: "#d1fae5" }}
          />

          {steps.map((s) => (
            <div key={s.n} className="flex flex-col items-center text-center px-8 relative">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mb-5 relative z-10 shadow-md"
                style={{ backgroundColor: "#10b981" }}
              >
                {s.n}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden space-y-8 relative">
          <div
            className="absolute left-5 top-6 bottom-6 w-0.5"
            style={{ backgroundColor: "#d1fae5" }}
          />
          {steps.map((s) => (
            <div key={s.n} className="flex gap-5 relative">
              <div
                className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-white font-bold z-10 shadow-sm"
                style={{ backgroundColor: "#10b981" }}
              >
                {s.n}
              </div>
              <div className="pt-1">
                <h3 className="font-semibold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
