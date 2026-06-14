const cases = [
  { icon: "💆", label: "Centros médicos y estéticos" },
  { icon: "🛍️", label: "Comercios y tiendas" },
  { icon: "✂️", label: "Barberías y belleza" },
  { icon: "🛒", label: "Ventas y catálogos" },
  { icon: "🏋️", label: "Fitness y educación" },
  { icon: "⚖️", label: "Servicios profesionales" },
];

export default function UseCases() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#f9fafb" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
          Funciona para tu tipo de negocio
        </h2>
        <p className="text-center text-gray-500 mb-12 text-sm">
          AsistIA se adapta a cualquier industria que use WhatsApp para atender clientes.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {cases.map((c) => (
            <div
              key={c.label}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="text-4xl mb-3">{c.icon}</div>
              <p className="font-medium text-gray-800 text-sm">{c.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
