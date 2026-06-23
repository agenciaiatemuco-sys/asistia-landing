"use client";

import { useState } from "react";

const ITEMS = [
  {
    q: "¿Necesito instalar algo en mi teléfono?",
    a: "No. AsistIA se conecta a tu número de WhatsApp Business actual mediante un código QR. Nada que instalar, sin cambios de número.",
  },
  {
    q: "¿Qué pasa cuando termina el período de prueba?",
    a: "Al vencer los 14 días te avisamos por WhatsApp. Si no contratas, el bot queda pausado y tus datos se conservan por 30 días.",
  },
  {
    q: "¿Puedo cancelar cuando quiera?",
    a: "Sí, sin penalidades ni permanencia mínima. Puedes cancelar desde tu panel en cualquier momento.",
  },
  {
    q: "¿El bot puede agendar citas en Google Calendar?",
    a: "Sí. AsistIA se integra con tu Google Calendar y gestiona la disponibilidad en tiempo real para evitar doble booking.",
  },
  {
    q: "¿Puedo personalizar las respuestas del asistente?",
    a: "Sí. Desde el panel editas la personalidad, el tono de comunicación, el catálogo de servicios y las instrucciones específicas del bot.",
  },
  {
    q: "¿Qué pasa si el bot no sabe responder algo?",
    a: "El bot escala automáticamente al equipo humano cuando detecta que la consulta supera su alcance o el cliente lo solicita.",
  },
  {
    q: "¿Mis datos y los de mis clientes están seguros?",
    a: "Sí. Usamos Supabase y Airtable con acceso cifrado. Los datos de tus clientes nunca se comparten con terceros.",
  },
  {
    q: "¿Funciona para rubros fuera de salud?",
    a: "Absolutamente. AsistIA está activo en clínicas, estudios jurídicos, centros de estética, e-commerce y más. El asistente se adapta a cualquier negocio.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
          Preguntas frecuentes
        </h2>
        <p className="text-center text-gray-500 mb-12 text-sm">
          Todo lo que necesitas saber antes de empezar.
        </p>

        <div className="bg-slate-50 rounded-2xl overflow-hidden divide-y divide-gray-200">
          {ITEMS.map((item, i) => (
            <div key={i}>
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-slate-100 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-medium text-gray-900 text-sm">{item.q}</span>
                <span
                  className="text-gray-400 shrink-0 text-lg transition-transform duration-200"
                  style={{ transform: open === i ? "rotate(45deg)" : "none" }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
