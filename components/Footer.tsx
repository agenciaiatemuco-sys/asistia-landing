import Image from "next/image";
import { DASHBOARD_URL, waLink } from "@/lib/links";

export default function Footer() {
  return (
    <footer className="py-10 px-4 border-t border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo — PNG wordmark real, no el SVG del referente */}
        <Image
          src="/brand/alkia-wordmark.png"
          alt="Alkia"
          width={96}
          height={31}
          style={{ height: "auto" }}
        />

        {/* Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-gray-500">
          <a href="/terminos" className="hover:text-alkia-dark transition-colors">
            Términos
          </a>
          <a href="/privacidad" className="hover:text-alkia-dark transition-colors">
            Privacidad
          </a>
          <a
            href="/eliminacion-de-datos"
            className="hover:text-alkia-dark transition-colors"
          >
            Eliminación de datos
          </a>
          <a href={DASHBOARD_URL} className="hover:text-alkia-dark transition-colors">
            Panel
          </a>
          <a
            href="mailto:soporte@alkia.cl"
            className="hover:text-alkia-dark transition-colors"
          >
            soporte@alkia.cl
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-alkia-dark transition-colors"
          >
            WhatsApp
          </a>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Alkia. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
