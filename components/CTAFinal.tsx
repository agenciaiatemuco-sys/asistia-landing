const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "56912345678";

export default function CTAFinal() {
  return (
    <section
      className="py-24 px-4"
      style={{ background: "linear-gradient(135deg, #059669 0%, #10b981 100%)" }}
    >
      <div className="max-w-3xl mx-auto text-center text-white">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          ¿Listo para que tu negocio se atienda solo?
        </h2>
        <p className="text-emerald-100 text-lg mb-10 max-w-xl mx-auto">
          Activa tu asistente hoy. Primer mes gratis, sin permanencia.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#precios"
            className="px-8 py-3.5 bg-white rounded-xl font-semibold transition-colors hover:bg-emerald-50"
            style={{ color: "#059669" }}
          >
            Ver planes →
          </a>
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl font-semibold text-white border-2 border-white/60 hover:border-white hover:bg-white/10 transition-all"
          >
            💬 Hablar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
