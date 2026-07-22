const rows = [
  {
    label: "Costo mensual",
    human: "$500.000–$700.000 CLP",
    alkia: "Desde $39.900 CLP",
  },
  {
    label: "Horario",
    human: "8–10 hrs/día hábil",
    alkia: "24/7 todos los días",
  },
  {
    label: "Tiempo de respuesta",
    human: "Minutos u horas",
    alkia: "Segundos",
  },
  {
    label: "Vacaciones / licencias",
    human: "Sí, con costo adicional",
    alkia: "No aplica",
  },
  {
    label: "Costo de inicio",
    human: "Contratación + capacitación",
    alkia: "$0 — sin instalación",
  },
  {
    label: "Ahorro anual",
    human: "—",
    alkia: "$5.500.000–$7.900.000 CLP",
    highlight: true,
  },
];

export default function Comparison() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#f9fafb" }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
          ¿Cuánto te cuesta no tener Alkia?
        </h2>
        <p className="text-center text-gray-500 mb-12 text-sm">
          Compara el costo real de una persona vs. tu asistente IA.
        </p>

        <div className="overflow-hidden rounded-2xl shadow-md border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: "#111827" }}>
                <th className="py-4 px-6 text-left text-gray-400 font-medium w-1/3"></th>
                <th className="py-4 px-6 text-center text-gray-300 font-medium">
                  Empleado dedicado
                </th>
                <th className="py-4 px-6 text-center font-semibold" style={{ color: "#10b981" }}>
                  ✦ Alkia
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {rows.map((row) => (
                <tr
                  key={row.label}
                  style={row.highlight ? { backgroundColor: "#f0fdf4" } : {}}
                >
                  <td className="py-3.5 px-6 font-medium text-gray-700">{row.label}</td>
                  <td className="py-3.5 px-6 text-center text-gray-500">{row.human}</td>
                  <td
                    className="py-3.5 px-6 text-center font-semibold"
                    style={{ color: row.highlight ? "#059669" : "#10b981" }}
                  >
                    {row.alkia}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Comparación basada en el Plan Micro ($39.900/mes) vs. sueldo mínimo de un ejecutivo de atención.
        </p>
      </div>
    </section>
  );
}
