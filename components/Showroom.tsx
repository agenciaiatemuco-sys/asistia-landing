"use client";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const WA_NUMBER = "56981748168";

// Demos agrupadas por nicho. Cada `tag` DEBE existir como Tag_Trigger activo en
// [DEMO] Plantillas (Airtable) y estar en el array DEMO_TAGS de /api/chat del
// dashboard, o la demo no dispara (lead perdido). Ver docs/ARQUITECTURA_PROMPTS.md
// y el mapeo de las 3 fuentes (landing / código / Airtable).
const GROUPS = [
  {
    group: "Reparto y despacho",
    demos: [
      {
        tag: "demo-despachos",
        emoji: "🚚",
        title: "Reparto / Delivery",
        desc: "Toma de pedidos, direccion de entrega, horarios de despacho y seguimiento.",
      },
    ],
  },
  {
    group: "Salud",
    demos: [
      {
        tag: "demo-medico",
        emoji: "👨‍⚕️",
        title: "Consulta medica",
        desc: "Agendamiento de horas, especialidades, valores y disponibilidad de agenda.",
      },
      {
        tag: "demo-odonto",
        emoji: "🦷",
        title: "Dental / Odontologia",
        desc: "Agendamiento de urgencias, procedimientos y aranceles.",
      },
      {
        tag: "demo-salud",
        emoji: "🏥",
        title: "Centro de imagenes",
        desc: "Examenes, preparacion, ordenes medicas y agendamiento de horas.",
      },
    ],
  },
  {
    group: "Estetica",
    demos: [
      {
        tag: "demo-estetica",
        emoji: "💅",
        title: "Centro de estetica",
        desc: "Tratamientos faciales, corporales, precios y reservas.",
      },
    ],
  },
  {
    group: "Profesionales",
    demos: [
      {
        tag: "demo-legal",
        emoji: "⚖️",
        title: "Estudio juridico",
        desc: "Consulta de areas de practica, honorarios y primeras consultas.",
      },
    ],
  },
  {
    group: "Comercio",
    demos: [
      {
        tag: "demo-ecommerce",
        emoji: "🛍️",
        title: "Tienda online",
        desc: "Catalogo de productos, estado de pedidos, metodos de pago y despacho.",
      },
      {
        tag: "demo-stock",
        emoji: "📦",
        title: "Tienda con stock",
        desc: "Consulta de disponibilidad de productos, precios y reservas.",
      },
    ],
  },
  {
    group: "Otros rubros",
    demos: [
      {
        tag: "demo-restaurant",
        emoji: "🍽️",
        title: "Restaurante",
        desc: "Menu del dia, consultas y toma de pedidos.",
      },
      {
        tag: "demo-hoteleria",
        emoji: "🏨",
        title: "Hoteleria",
        desc: "Disponibilidad de habitaciones, tarifas y consultas de reserva.",
      },
    ],
  },
];

export default function Showroom() {
  return (
    <section id="showroom" className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-3">
          Pruebalo ahora mismo
        </h2>
        <p className="text-center text-slate-400 mb-12 text-sm">
          Escribele a Alkia por WhatsApp y experimenta la demo de tu rubro.
        </p>

        <div className="space-y-10">
          {GROUPS.map((g) => (
            <div key={g.group}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
                {g.group}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {g.demos.map((d) => (
                  <a
                    key={d.tag}
                    href={`https://wa.me/${WA_NUMBER}?text=${d.tag}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo-card block p-5 rounded-2xl border border-slate-700 bg-slate-800 transition-all cursor-pointer"
                    onClick={() => {
                      if (typeof window.fbq !== "undefined")
                        window.fbq("track", "ViewContent", {
                          content_name: d.tag,
                          content_category: "demo",
                        });
                    }}
                  >
                    <div className="text-3xl mb-3">{d.emoji}</div>
                    <h4 className="font-semibold text-white mb-1">{d.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{d.desc}</p>
                    <p className="mt-3 text-xs font-medium" style={{ color: "#10b981" }}>
                      Probar demo →
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-xs mt-8">
          Al escribir se abrira WhatsApp con el mensaje de inicio precargado.
        </p>

        {/* Banner plantillas */}
        <div className="mt-8 max-w-2xl mx-auto py-4 px-6 rounded-xl bg-green-50 border border-green-200 text-sm text-gray-600 text-center">
          🗂️ Más de 80 plantillas base disponibles para distintos rubros.{" "}
          ¿Quieres una personalizada para tu negocio?{" "}
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20las%20plantillas%20de%20Alkia`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 font-medium hover:underline"
          >
            Preguntale a Alkia →
          </a>
        </div>
      </div>
    </section>
  );
}
