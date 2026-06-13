// TODO: reemplazar con testimonios reales
const testimonials = [
  {
    initials: "CM",
    name: "Carolina Muñoz",
    role: "Dueña de Salón de Belleza, Temuco",
    text: "Antes perdía clientes porque no podía responder al tiro. Con Asistia, todo llega ordenado y mis clientes quedan felices. ¡Una maravilla!",
  },
  {
    initials: "RC",
    name: "Roberto Castillo",
    role: "Director de Clínica Veterinaria, Santiago",
    text: "Las consultas a deshora eran un problema enorme. Ahora el asistente atiende de noche y yo duermo tranquilo. El ROI fue inmediato.",
  },
  {
    initials: "VR",
    name: "Valentina Rojas",
    role: "Emprendedora E-commerce, Concepción",
    text: "Mis clientes reciben respuesta en segundos, incluso los fines de semana. Las ventas aumentaron notablemente en el primer mes.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
          Lo que dicen nuestros clientes
        </h2>
        <p className="text-center text-gray-500 mb-12 text-sm">
          Negocios reales que automatizaron su atención al cliente.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4" style={{ color: "#f59e0b" }}>
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0"
                  style={{ backgroundColor: "#9ca3af" }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
