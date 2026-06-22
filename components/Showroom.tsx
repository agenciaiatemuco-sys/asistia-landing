const WA_NUMBER = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(/\D/g, "");

const verticals = [
  { icon: "🏥", label: "Salud e Imagenología", desc: "Exámenes, laboratorio, radiología", tag: "demo-salud" },
  { icon: "👨‍⚕️", label: "Clínica Médica", desc: "Consultas médicas y especialidades", tag: "demo-medico" },
  { icon: "💆", label: "Estética y Belleza", desc: "Depilación, tratamientos faciales, peluquería", tag: "demo-estetica" },
  { icon: "⚖️", label: "Legal y Consultoría", desc: "Abogados, contadores, asesorías", tag: "demo-legal" },
  { icon: "🛍️", label: "E-commerce", desc: "Tiendas online, catálogos, ventas", tag: "demo-ecommerce" },
  { icon: "🦷", label: "Odontología", desc: "Clínicas dentales y salud bucal", tag: "demo-odonto" },
];

export default function Showroom() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <span
            className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-3"
            style={{ backgroundColor: "#d1fae5", color: "#065f46" }}
          >
            ✦ Demo interactiva
          </span>
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
          Prueba AsistIA en tu rubro
        </h2>
        <p className="text-center text-gray-500 text-sm mb-12">
          Elige tu tipo de negocio y chatea ahora mismo con un asistente real por WhatsApp
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {verticals.map((v) => (
            <div
              key={v.tag}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="text-4xl mb-3">{v.icon}</div>
              <p className="font-semibold text-gray-800 text-sm mb-1">{v.label}</p>
              <p className="text-xs text-gray-400 mb-4">{v.desc}</p>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${v.tag}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-xl text-white text-xs font-semibold"
                style={{ backgroundColor: "#10b981" }}
              >
                Probar ahora 💬
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
