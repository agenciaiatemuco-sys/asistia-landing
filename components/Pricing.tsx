const plans = [
  {
    key: "starter",
    name: "Starter",
    price: "$95.000",
    interactions: "1.000/mes",
    daily: "~7/día",
    ideal: "Profesional independiente",
    url: process.env.NEXT_PUBLIC_FLOW_URL_STARTER || "#",
  },
  {
    key: "pro",
    name: "Pro",
    price: "$150.000",
    interactions: "2.500/mes",
    daily: "~17/día",
    ideal: "Negocio en crecimiento",
    popular: true,
    url: process.env.NEXT_PUBLIC_FLOW_URL_PRO || "#",
  },
  {
    key: "business",
    name: "Business",
    price: "$220.000",
    interactions: "7.000/mes",
    daily: "~47/día",
    ideal: "Clínica o alto flujo",
    url: process.env.NEXT_PUBLIC_FLOW_URL_BUSINESS || "#",
  },
  {
    key: "enterprise",
    name: "Enterprise",
    price: "$320.000",
    interactions: "15.000/mes",
    daily: "~100/día",
    ideal: "Centro de alta concurrencia",
    url: process.env.NEXT_PUBLIC_FLOW_URL_ENTERPRISE || "#",
  },
];

const features = ["Dashboard", "Google Calendar", "CRM", "Kill Switch"];

export default function Pricing() {
  return (
    <section id="precios" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Launch banner */}
        <div
          className="rounded-2xl px-6 py-4 text-center text-sm font-medium mb-12"
          style={{ backgroundColor: "#d1fae5", color: "#065f46" }}
        >
          🎉 Oferta de lanzamiento: Instalación{" "}
          <strong>$100.000 CLP</strong> (pago único) + primer mes completamente gratis.
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
          Planes y precios
        </h2>
        <p className="text-center text-gray-500 mb-14 text-sm">
          Sin costos ocultos ni permanencia mínima.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.key}
              className={`rounded-2xl p-6 flex flex-col relative ${
                plan.popular
                  ? "shadow-xl"
                  : "shadow-sm border border-gray-100"
              }`}
              style={
                plan.popular
                  ? {
                      border: "2px solid #10b981",
                      boxShadow: "0 8px 40px rgba(16,185,129,0.15)",
                    }
                  : {}
              }
            >
              {plan.popular && (
                <span
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold text-white rounded-full whitespace-nowrap shadow"
                  style={{ backgroundColor: "#10b981" }}
                >
                  ⭐ Más popular
                </span>
              )}

              <p className="font-bold text-gray-900 text-lg mb-1">{plan.name}</p>
              <p className="text-3xl font-bold text-gray-900 leading-none mb-0.5">
                {plan.price}
                <span className="text-sm font-normal text-gray-400">/mes</span>
              </p>
              <p className="text-xs text-gray-400 mb-3">
                {plan.interactions} · {plan.daily}
              </p>
              <p className="text-xs text-gray-500 italic mb-5">
                Ideal para: {plan.ideal}
              </p>

              <ul className="space-y-2 mb-6 flex-1">
                {features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-xs text-gray-600"
                  >
                    <span className="font-bold" style={{ color: "#10b981" }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={plan.url}
                className={`block text-center py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  plan.popular
                    ? "text-white hover:opacity-90"
                    : "text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
                style={plan.popular ? { backgroundColor: "#10b981" } : {}}
              >
                Contratar
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-10">
          Una interacción = una respuesta generada por tu asistente. Sin costos ocultos ni permanencia mínima.
        </p>
      </div>
    </section>
  );
}
