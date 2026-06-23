const DASHBOARD_URL =
  process.env.NEXT_PUBLIC_DASHBOARD_URL ?? "https://panel.miasistia.cl";
const WA_NUMBER = "56981748168";

export default function CTAFinal() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Tu negocio merece atender mejor
        </h2>
        <p className="text-gray-500 mb-10 text-lg leading-relaxed">
          Empieza gratis hoy. Sin tarjeta, sin técnicos, sin compromiso.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`${DASHBOARD_URL}/contratar`}
            className="px-8 py-3.5 rounded-xl font-semibold text-white transition-opacity hover:opacity-90 shadow-sm"
            style={{ backgroundColor: "#10b981" }}
          >
            Ver planes →
          </a>
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            💬 Hablar con AsistIA
          </a>
        </div>
      </div>
    </section>
  );
}
