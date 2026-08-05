import { DASHBOARD_URL, waLink } from "@/lib/links";

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <span className="text-lg font-bold" style={{ color: "#0d9373" }}>
          ✦ Alkia
        </span>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
          <a href="/terminos" className="hover:text-gray-700 transition-colors">
            Términos
          </a>
          <a href="/privacidad" className="hover:text-gray-700 transition-colors">
            Privacidad
          </a>
          <a
            href="/eliminacion-de-datos"
            className="hover:text-gray-700 transition-colors"
          >
            Eliminación de datos
          </a>
          <a href={DASHBOARD_URL} className="hover:text-gray-700 transition-colors">
            Panel
          </a>
          <a
            href="mailto:soporte@alkia.cl"
            className="hover:text-gray-700 transition-colors"
          >
            soporte@alkia.cl
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition-colors"
          >
            WhatsApp
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Alkia. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
