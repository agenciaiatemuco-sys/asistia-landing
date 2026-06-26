const WA_NUMBER = "56981748168";

const DEMOS = [
  {
    tag: "demo-salud",
    emoji: "🏥",
    title: "Clínica / Salud",
    desc: "Agendamiento de horas médicas, respuestas sobre especialidades y horarios.",
  },
  {
    tag: "demo-medico",
    emoji: "👨‍⚕️",
    title: "Médico independiente",
    desc: "Consultas privadas, valor de la consulta y disponibilidad de agenda.",
  },
  {
    tag: "demo-estetica",
    emoji: "💅",
    title: "Centro de estética",
    desc: "Tratamientos faciales, corporales, precios y reservas.",
  },
  {
    tag: "demo-legal",
    emoji: "⚖️",
    title: "Estudio jurídico",
    desc: "Consulta de áreas de práctica, honorarios y primeras consultas.",
  },
  {
    tag: "demo-ecommerce",
    emoji: "🛍️",
    title: "E-commerce",
    desc: "Estado de pedidos, catálogo, métodos de pago y despacho.",
  },
  {
    tag: "demo-odonto",
    emoji: "🦷",
    title: "Dental / Odontología",
    desc: "Agendamiento de urgencias, procedimientos y aranceles.",
  },
];

export default function Showroom() {
  return (
    <section id="showroom" className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-3">
          Pruébalo ahora mismo
        </h2>
        <p className="text-center text-slate-400 mb-12 text-sm">
          Escríbele a AsistIA por WhatsApp y experimenta la demo de tu rubro.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DEMOS.map((d) => (
            <a
              key={d.tag}
              href={`https://wa.me/${WA_NUMBER}?text=${d.tag}`}
              target="_blank"
              rel="noopener noreferrer"
              className="demo-card block p-5 rounded-2xl border border-slate-700 bg-slate-800 transition-all cursor-pointer"
            >
              <div className="text-3xl mb-3">{d.emoji}</div>
              <h3 className="font-semibold text-white mb-1">{d.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{d.desc}</p>
              <p className="mt-3 text-xs font-medium" style={{ color: "#10b981" }}>
                Probar demo →
              </p>
            </a>
          ))}
        </div>

        <p className="text-center text-slate-500 text-xs mt-8">
          Al escribir se abrirá WhatsApp con el mensaje de inicio precargado.
        </p>

        {/* Banner plantillas */}
        <div className="mt-8 max-w-2xl mx-auto py-4 px-6 rounded-xl bg-green-50 border border-green-200 text-sm text-gray-600 text-center">
          🗂️ Más de 60 plantillas base disponibles para distintos rubros.{" "}
          ¿Quieres una personalizada para tu negocio?{" "}
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20las%20plantillas%20de%20AsistIA`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 font-medium hover:underline"
          >
            Pregúntale a AsistIA →
          </a>
        </div>
      </div>
    </section>
  );
}
