"use client";

import {
  Truck,
  Stethoscope,
  Smile,
  ScanLine,
  Sparkles,
  Scale,
  ShoppingBag,
  Package,
  UtensilsCrossed,
  Building2,
} from "lucide-react";
import { waLink } from "@/lib/links";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

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
        icon: Truck,
        title: "Reparto / Delivery",
        desc: "Toma de pedidos, dirección de entrega, horarios de despacho y seguimiento.",
      },
    ],
  },
  {
    group: "Salud",
    demos: [
      {
        tag: "demo-medico",
        icon: Stethoscope,
        title: "Consulta médica",
        desc: "Agendamiento de horas, especialidades, valores y disponibilidad de agenda.",
      },
      {
        tag: "demo-odonto",
        icon: Smile,
        title: "Dental / Odontología",
        desc: "Agendamiento de urgencias, procedimientos y aranceles.",
      },
      {
        tag: "demo-salud",
        icon: ScanLine,
        title: "Centro de imágenes",
        desc: "Exámenes, preparación, órdenes médicas y agendamiento de horas.",
      },
    ],
  },
  {
    group: "Estetica",
    demos: [
      {
        tag: "demo-estetica",
        icon: Sparkles,
        title: "Centro de estética",
        desc: "Tratamientos faciales, corporales, precios y reservas.",
      },
    ],
  },
  {
    group: "Profesionales",
    demos: [
      {
        tag: "demo-legal",
        icon: Scale,
        title: "Estudio jurídico",
        desc: "Consulta de áreas de práctica, honorarios y primeras consultas.",
      },
    ],
  },
  {
    group: "Comercio",
    demos: [
      {
        tag: "demo-ecommerce",
        icon: ShoppingBag,
        title: "Tienda online",
        desc: "Catálogo de productos, estado de pedidos, métodos de pago y despacho.",
      },
      {
        tag: "demo-stock",
        icon: Package,
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
        icon: UtensilsCrossed,
        title: "Restaurante",
        desc: "Menú del día, consultas y toma de pedidos.",
      },
      {
        tag: "demo-hoteleria",
        icon: Building2,
        title: "Hoteleria",
        desc: "Disponibilidad de habitaciones, tarifas y consultas de reserva.",
      },
    ],
  },
];

export default function Showroom() {
  return (
    <section id="showroom" className="py-20 px-4 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
          Pruébalo ahora mismo
        </h2>
        <p className="text-center text-gray-500 mb-12 text-sm">
          Escríbele a Alkia por WhatsApp y experimenta la demo de tu rubro.
        </p>

        <div className="space-y-10">
          {GROUPS.map((g) => (
            <div key={g.group}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
                {g.group}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {g.demos.map((d) => (
                  <a
                    key={d.tag}
                    href={waLink(d.tag)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)] block p-5 rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-alkia/30"
                    onClick={() => {
                      if (typeof window.fbq !== "undefined")
                        window.fbq("track", "ViewContent", {
                          content_name: d.tag,
                          content_category: "demo",
                        });
                    }}
                  >
                    <div className="w-11 h-11 rounded-xl bg-alkia-light text-alkia flex items-center justify-center mb-3">
                      <d.icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{d.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{d.desc}</p>
                    <p className="mt-3 text-xs font-medium text-alkia">
                      Probar demo →
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-xs mt-8">
          Al escribir se abrirá WhatsApp con el mensaje de inicio precargado.
        </p>

        {/* Banner plantillas */}
        <div className="mt-8 max-w-2xl mx-auto py-4 px-6 rounded-xl bg-alkia-light border border-alkia/20 text-sm text-gray-600 text-center">
          🗂️ Más de 80 plantillas base disponibles para distintos rubros.{" "}
          ¿Quieres una personalizada para tu negocio?{" "}
          <a
            href={waLink("Hola, me interesa saber más sobre las plantillas de Alkia")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-alkia-dark font-medium hover:underline"
          >
            Pregúntale a Alkia →
          </a>
        </div>
      </div>
    </section>
  );
}
