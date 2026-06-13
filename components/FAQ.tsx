"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Necesito saber programar?",
    a: "No. El proceso es 100% visual. Configuras tu asistente respondiendo preguntas simples sobre tu negocio, sin código ni técnicos.",
  },
  {
    q: "¿Funciona con mi número de WhatsApp actual?",
    a: "Sí. Simplemente escaneas un código QR desde tu celular y tu número queda conectado. No necesitas cambiar de número ni de app.",
  },
  {
    q: "¿Qué pasa si se acaban las interacciones del mes?",
    a: "El asistente se pausa automáticamente cuando alcanza el límite. Te notificamos antes de llegar al tope para que puedas ampliar tu plan si lo necesitas.",
  },
  {
    q: "¿Puedo cancelar cuando quiera?",
    a: "Sí. Sin cláusulas de permanencia ni multas. Cancelas cuando quieras sin costos adicionales.",
  },
  {
    q: "¿En cuánto tiempo está activo mi asistente?",
    a: "Menos de 10 minutos. Escaneas el QR, respondes algunas preguntas sobre tu negocio y tu asistente queda activo inmediatamente.",
  },
  {
    q: "¿Qué diferencia hay con un chatbot normal?",
    a: "Un chatbot sigue menús fijos y opciones predefinidas. Asistia entiende lenguaje natural — interpreta preguntas libres, responde de forma fluida y se adapta a cada conversación como lo haría una persona.",
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full flex justify-between items-center py-4 text-left text-gray-900 font-medium text-sm hover:text-emerald-600 transition-colors gap-4"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <span
          className="text-xl shrink-0 leading-none transition-transform duration-200"
          style={{
            color: "#10b981",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>

      {open && (
        <p className="pb-4 text-sm text-gray-500 leading-relaxed pr-8">{a}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
          Preguntas frecuentes
        </h2>
        <p className="text-center text-gray-500 mb-12 text-sm">
          ¿Tienes más dudas? Escríbenos por WhatsApp.
        </p>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-2">
          {faqs.map((faq) => (
            <AccordionItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
