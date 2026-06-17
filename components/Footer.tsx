export default function Footer() {
  return (
    <footer className="py-12 px-4" style={{ backgroundColor: "#111827" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        <a href="#" className="text-xl font-bold" style={{ color: "#10b981" }}>
          ✦ AsistIA
        </a>

        <div className="flex flex-col items-center gap-1">
          <p className="text-gray-500 text-xs">
            © 2026 AsistIA. Todos los derechos reservados.
          </p>
          <a
            href="/privacidad"
            className="text-gray-600 hover:text-gray-400 transition-colors text-xs underline underline-offset-2"
          >
            Política de Privacidad
          </a>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors text-xs"
          >
            WhatsApp
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors text-xs"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors text-xs"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
