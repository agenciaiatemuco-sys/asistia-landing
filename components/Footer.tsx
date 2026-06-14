export default function Footer() {
  return (
    <footer className="py-12 px-4" style={{ backgroundColor: "#111827" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        <a href="#" className="text-xl font-bold" style={{ color: "#10b981" }}>
          ✦ AsistIA
        </a>

        <p className="text-gray-500 text-xs">
          © 2026 AsistIA. Todos los derechos reservados.
        </p>

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
