const DASHBOARD_URL =
  process.env.NEXT_PUBLIC_DASHBOARD_URL ?? "https://panel.miasistia.cl";
const WA_NUMBER = "56981748168";

type Plan = {
  key: string;
  name: string;
  price: string;
  priceNote: string;
  desc: string;
  features: string[];
  cta: string;
  ctaHref: string;
  badge?: string;
  highlighted?: boolean;
};

const PLANS: Plan[] = [
  {
    key: "micro",
    name: "Micro",
    price: "$39.900",
    priceNote: "/ mes",
    desc: "Para profesionales independientes que atienden solos.",
    features: [
      "400 interacciones/mes",
      "1 número de WhatsApp",
      "Respuesta automática 24/7",
      "Panel de administración",
      "Solo perfil admin",
    ],
    badge: "14 días gratis",
    cta: "Empezar gratis",
    ctaHref: `${DASHBOARD_URL}/contratar?plan=micro`,
  },
  {
    key: "starter",
    name: "Starter",
    price: "$79.900",
    priceNote: "/ mes",
    desc: "Para negocios con equipo pequeño que necesitan colaboración.",
    features: [
      "1.000 interacciones/mes",
      "1 número de WhatsApp",
      "Agendamiento automático",
      "CRM de contactos",
      "1 colaborador incluido",
    ],
    badge: "⭐ Más popular",
    highlighted: true,
    cta: "Empezar gratis",
    ctaHref: `${DASHBOARD_URL}/contratar?plan=starter`,
  },
  {
    key: "pro",
    name: "Pro",
    price: "$139.900",
    priceNote: "/ mes",
    desc: "Para clínicas y centros con mayor volumen de atención.",
    features: [
      "3.000 interacciones/mes",
      "1 número de WhatsApp",
      "Todo lo de Starter",
      "Hasta 3 colaboradores",
      "Soporte prioritario",
    ],
    badge: "Pago adelantado",
    cta: "Contratar Plan Pro",
    ctaHref: `${DASHBOARD_URL}/contratar?plan=pro`,
  },
  {
    key: "business",
    name: "Business",
    price: "$199.900",
    priceNote: "/ mes",
    desc: "Para empresas con alto volumen y múltiples agentes.",
    features: [
      "10.000 interacciones/mes",
      "1 número de WhatsApp",
      "Todo lo de Pro",
      "Hasta 5 colaboradores",
      "SLA de respuesta",
    ],
    badge: "Pago adelantado",
    cta: "Contratar Business",
    ctaHref: `${DASHBOARD_URL}/contratar?plan=business`,
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
          Planes simples, sin sorpresas
        </h2>
        <p className="text-center text-gray-500 mb-4 text-sm">
          Todos incluyen 14 días gratuitos en Micro y Starter. Sin tarjeta de crédito al inicio.
        </p>

        {/* Offer banner */}
        <div
          className="mx-auto max-w-xl text-center py-2 px-4 rounded-full text-sm font-medium mb-12"
          style={{ backgroundColor: "#fef3c7", color: "#92400e" }}
        >
          🎉 14 días gratis en Plan Micro y Starter — hasta el 30/06 o primeros 10 cupos
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {PLANS.map((p) => (
            <div
              key={p.key}
              className={`rounded-2xl p-6 flex flex-col border transition-shadow hover:shadow-md ${
                p.highlighted
                  ? "border-emerald-500 shadow-lg"
                  : "border-gray-200"
              }`}
            >
              {p.badge && (
                p.highlighted ? (
                  <span
                    className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit border"
                    style={{
                      backgroundColor: "#064e3b",
                      color: "#a7f3d0",
                      borderColor: "rgba(16,185,129,0.5)",
                    }}
                  >
                    {p.badge}
                  </span>
                ) : (
                  <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3 w-fit bg-amber-50 text-amber-700">
                    {p.badge}
                  </span>
                )
              )}

              <h3 className="text-lg font-bold text-gray-900">{p.name}</h3>
              <div className="mt-2 mb-1">
                <span className="text-3xl font-bold text-gray-900">{p.price}</span>
                <span className="text-sm text-gray-400">{p.priceNote}</span>
              </div>
              <p className="text-xs text-gray-500 mb-4 leading-relaxed">{p.desc}</p>

              <ul className="space-y-2 mb-6 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={p.ctaHref}
                className={`block text-center py-2.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90 ${
                  p.highlighted
                    ? "text-white"
                    : "text-gray-700 border border-gray-300 hover:border-gray-400"
                }`}
                style={p.highlighted ? { backgroundColor: "#10b981" } : {}}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Enterprise card */}
        <div
          className="rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: "linear-gradient(135deg, #0f172a, #1e293b)" }}
        >
          <div>
            <h3 className="text-xl font-bold mb-1">Enterprise — A medida</h3>
            <p className="text-slate-400 text-sm max-w-xl">
              Volumen ilimitado de interacciones, múltiples números, integración personalizada,
              SLA garantizado y soporte dedicado. Hablemos de lo que necesitas.
            </p>
          </div>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hola, me interesa el plan Enterprise`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-xl font-semibold transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{ backgroundColor: "#10b981", color: "white" }}
          >
            Solicitar reunión →
          </a>
        </div>
      </div>
    </section>
  );
}
