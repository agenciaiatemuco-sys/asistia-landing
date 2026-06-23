const problems = [
  {
    icon: "📵",
    title: "Mensajes sin responder",
    body: "Cada mensaje que demora en responderse es un cliente que se va con la competencia. WhatsApp no espera.",
  },
  {
    icon: "🔁",
    title: "Las mismas preguntas",
    body: "Horarios, precios, disponibilidad. Respondes lo mismo 20 veces al día. Tu tiempo vale mucho más que eso.",
  },
  {
    icon: "📅",
    title: "Agenda caótica",
    body: "Citas por WhatsApp, llamadas, anotaciones en papel. Sin un sistema claro, los errores y olvidos son inevitables.",
  },
];

export default function Problem() {
  return (
    <section className="py-20 px-4 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          El problema que resolvemos
        </h2>
        <p className="text-center text-gray-500 mb-12 text-sm">
          Si alguna de estas situaciones te describe, AsistIA es para ti.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
