import { QrCode, Settings2, Rocket } from "lucide-react";

const steps = [
  {
    n: "1",
    icon: QrCode,
    title: "Conecta tu WhatsApp",
    body: "Escanea un QR desde tu celular. Sin apps adicionales ni cambios de número.",
  },
  {
    n: "2",
    icon: Settings2,
    title: "Configura tu asistente",
    body: "Cuéntale sobre tu negocio en un cuestionario guiado. Menos de 10 minutos.",
  },
  {
    n: "3",
    icon: Rocket,
    title: "Listo, a trabajar",
    body: "Tu asistente responde consultas, toma pedidos y agenda citas 24/7 desde ese momento.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 px-4 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
          Activa tu asistente en 3 pasos
        </h2>
        <p className="text-center text-gray-500 mb-16 text-sm">
          Sin técnicos. Sin complicaciones. Sin código.
        </p>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:grid md:grid-cols-3 relative">
          {/* Gradient connector line */}
          <div
            className="absolute top-6 left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-0.5"
            style={{
              background: "linear-gradient(to right, var(--alkia), var(--alkia-dark))",
              opacity: 0.4,
            }}
          />

          {steps.map((s) => (
            <div key={s.n} className="flex flex-col items-center text-center px-8 relative">
              <div className="w-12 h-12 rounded-xl bg-alkia-light border-2 border-alkia flex items-center justify-center mb-5 relative z-10 shadow-md">
                <s.icon className="w-5 h-5 text-alkia" />
              </div>
              <span className="text-xs font-bold text-alkia mb-1">
                Paso {s.n}
              </span>
              <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden space-y-8 relative">
          <div
            className="absolute left-6 top-6 bottom-6 w-0.5"
            style={{
              background: "linear-gradient(to bottom, var(--alkia), var(--alkia-dark))",
              opacity: 0.4,
            }}
          />
          {steps.map((s) => (
            <div key={s.n} className="flex gap-5 relative">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-alkia-light border-2 border-alkia flex items-center justify-center z-10 shadow-sm">
                <s.icon className="w-5 h-5 text-alkia" />
              </div>
              <div className="pt-1">
                <span className="text-xs font-bold text-alkia block mb-0.5">
                  Paso {s.n}
                </span>
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
