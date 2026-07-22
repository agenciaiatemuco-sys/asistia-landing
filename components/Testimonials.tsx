export default function Testimonials() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Negocios reales ya atienden con Alkia
        </h2>
        <p className="text-gray-500 mb-10 text-sm">
          Casos de uso en producción, no demos.
        </p>

        <div className="max-w-xl mx-auto rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <div className="text-4xl mb-4">🚚</div>
          <h3 className="text-lg font-bold text-slate-900 mb-1">
            Distribuidora de agua, Temuco
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            Toma sus pedidos completos por WhatsApp — producto, dirección y
            confirmación — mientras el equipo está repartiendo.
          </p>
        </div>
      </div>
    </section>
  );
}
