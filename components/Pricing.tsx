"use client";

import { Check } from "lucide-react";
import { DASHBOARD_URL, waLink } from "@/lib/links";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function trackLead() {
  if (typeof window.fbq !== "undefined") window.fbq("track", "Lead");
}

type Plan = {
  tag: string;
  name: string;
  price: string;
  plan: string;
  desc: string;
  features: string[];
  cta: string;
  badge?: string;
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    tag: "Para empezar",
    name: "Micro",
    price: "$39.900",
    plan: "micro",
    desc: "Para quienes atienden su negocio solos.",
    badge: "14 días gratis, sin tarjeta",
    features: [
      "Hasta 400 interacciones/mes",
      "Solo administrador",
      "Panel completo",
      "Pedidos y agendamiento",
      "Soporte por WhatsApp",
    ],
    cta: "Comenzar gratis",
  },
  {
    tag: "Más popular",
    name: "Starter",
    price: "$79.900",
    plan: "starter",
    featured: true,
    desc: "Para negocios con equipo pequeño que necesitan colaboración.",
    badge: "14 días gratis, sin tarjeta",
    features: [
      "Hasta 1.000 interacciones/mes",
      "1 colaborador",
      "Panel completo",
      "Pedidos y agendamiento",
      "Soporte por WhatsApp",
    ],
    cta: "Comenzar gratis",
  },
  {
    tag: "Para crecer",
    name: "Pro",
    price: "$139.900",
    plan: "pro",
    desc: "Para negocios con mayor volumen de mensajes y pedidos.",
    features: [
      "Hasta 3.000 interacciones/mes",
      "3 colaboradores",
      "Panel completo",
      "Pedidos y agendamiento",
      "Soporte prioritario",
    ],
    cta: "Contratar ahora",
  },
  {
    tag: "Alto volumen",
    name: "Business",
    price: "$199.900",
    plan: "business",
    desc: "Para empresas con alto volumen y múltiples agentes.",
    features: [
      "Hasta 10.000 interacciones/mes",
      "5 colaboradores",
      "Panel completo",
      "Pedidos y agendamiento",
      "Soporte dedicado",
    ],
    cta: "Contratar ahora",
  },
];

export default function Pricing() {
  return (
    <section id="planes" className="py-20 px-4 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-4xl font-extrabold mb-3 text-slate-900">
            Planes que crecen con tu negocio
          </h2>
          <p className="text-slate-500 text-lg">
            Todos los planes incluyen las mismas funciones. Solo cambia el
            volumen de conversaciones y los colaboradores.
          </p>
        </div>
        <p className="text-center text-sm text-slate-400 mb-12">
          Sin costo de instalación · Sin contrato de permanencia
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6 items-start">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 flex flex-col transition-all ${
                plan.featured
                  ? "bg-alkia border-2 border-alkia-dark shadow-xl lg:-translate-y-2"
                  : "bg-white border border-slate-200 shadow-sm hover:shadow-md"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 right-6 rounded-full bg-alkia-accent px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-alkia-dark">
                  ★ Top
                </span>
              )}

              <div
                className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                  plan.featured ? "text-white/80" : "text-slate-400"
                }`}
              >
                {plan.tag}
              </div>
              <h3
                className={`text-2xl font-extrabold mb-1 ${
                  plan.featured ? "text-white" : "text-slate-900"
                }`}
              >
                {plan.name}
              </h3>
              <div className="flex items-end gap-1 mb-5">
                <span
                  className={`text-4xl font-extrabold ${
                    plan.featured ? "text-white" : "text-slate-900"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm mb-1 ${
                    plan.featured ? "text-white/70" : "text-slate-400"
                  }`}
                >
                  /mes
                </span>
              </div>

              <p
                className={`text-sm mb-4 ${
                  plan.featured ? "text-white/80" : "text-slate-500"
                }`}
              >
                {plan.desc}
              </p>

              {plan.badge && (
                <span
                  className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-5 w-fit ${
                    plan.featured
                      ? "bg-white/15 text-white border border-white/25"
                      : "bg-alkia-light text-alkia-dark"
                  }`}
                >
                  {plan.badge}
                </span>
              )}

              <ul
                className={`space-y-2.5 text-sm mb-7 flex-1 ${
                  plan.featured ? "text-white/90" : "text-slate-600"
                }`}
              >
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check
                      className={`w-4 h-4 shrink-0 ${
                        plan.featured ? "text-alkia-accent" : "text-alkia"
                      }`}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={`${DASHBOARD_URL}/contratar?plan=${plan.plan}`}
                onClick={trackLead}
                className={`block w-full py-3 text-center font-bold rounded-xl transition text-sm ${
                  plan.featured
                    ? "bg-white text-alkia-dark hover:bg-alkia-light"
                    : plan.name === "Micro"
                    ? "bg-white border-2 border-alkia text-alkia-dark hover:bg-alkia-light"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Enterprise */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div>
            <div className="text-alkia-accent font-bold text-xs tracking-widest uppercase mb-2">
              A medida
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-2">
              ¿Más de 10.000 interacciones al mes?
            </h3>
            <p className="text-slate-400 text-sm max-w-lg">
              Conversemos un plan a tu medida. Múltiples instancias,
              integraciones personalizadas y soporte dedicado.
            </p>
          </div>
          <a
            href={waLink("Hola, me interesa el Plan Enterprise")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackLead}
            className="shrink-0 bg-alkia hover:bg-alkia-dark text-white font-bold py-3.5 px-8 rounded-xl transition text-sm whitespace-nowrap"
          >
            Solicitar reunión →
          </a>
        </div>
      </div>
    </section>
  );
}
