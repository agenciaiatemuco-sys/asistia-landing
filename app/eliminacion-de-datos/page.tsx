import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Eliminación de Datos — Alkia",
  description:
    "Instrucciones para solicitar la eliminación de tus datos personales de la plataforma Alkia.",
};

// NOTA: este contenido es la versión operativa inicial. Cuando llegue el texto
// final revisado por el abogado, reemplazar SOLO el contenido de <main> (un
// commit de este archivo) manteniendo estructura, header y footer.
export default function EliminacionDeDatosPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0f172a" }}>
      <header className="border-b border-white/10 px-4 py-5">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="text-xl font-bold"
            style={{ color: "#10b981" }}
          >
            ✦ Alkia
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-white mb-2">
          Eliminación de Datos
        </h1>
        <p className="text-gray-400 text-sm mb-12">
          Última actualización: 22 de julio de 2026
        </p>

        <div className="space-y-10 text-gray-300 leading-relaxed">
          <p>
            En Alkia SpA (RUT 78.469.837-8), operadora de la plataforma Alkia,
            respetamos tu derecho a solicitar la eliminación de tus datos
            personales, en conformidad con la Ley N° 19.628 sobre protección de
            la vida privada y la normativa aplicable en Chile.
          </p>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              1. ¿Qué datos podemos eliminar?
            </h2>
            <p className="mb-3">
              Puedes solicitar la eliminación de los datos personales que Alkia
              trate sobre ti, entre ellos:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Tu número de WhatsApp y nombre de perfil, si interactuaste con
                un asistente de WhatsApp operado por Alkia.
              </li>
              <li>
                El historial de conversaciones con dicho asistente.
              </li>
              <li>
                Citas, reservas o pedidos registrados a través del asistente.
              </li>
              <li>
                Si eres cliente de la plataforma: los datos de tu cuenta y de tu
                negocio.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              2. Cómo solicitar la eliminación
            </h2>
            <p className="mb-3">
              Envía un correo a{" "}
              <a
                href="mailto:soporte@alkia.cl"
                className="underline underline-offset-2"
                style={{ color: "#10b981" }}
              >
                soporte@alkia.cl
              </a>{" "}
              con el asunto <strong className="text-white">&quot;Eliminación de datos&quot;</strong>,
              indicando:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>El número de WhatsApp desde el cual interactuaste con el asistente.</li>
              <li>
                Si corresponde, el nombre del negocio con cuyo asistente
                conversaste.
              </li>
            </ul>
            <p className="mt-3">
              Si interactuaste con el asistente a través de la plataforma de
              WhatsApp (Meta), esta misma vía cubre la eliminación de los datos
              asociados a esa interacción que estén en poder de Alkia.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              3. Plazos y confirmación
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Confirmaremos la recepción de tu solicitud dentro de{" "}
                <strong className="text-white">5 días hábiles</strong>.
              </li>
              <li>
                La eliminación se completará dentro de{" "}
                <strong className="text-white">30 días corridos</strong> desde
                la verificación de tu identidad, y te enviaremos una
                confirmación por la misma vía.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              4. Excepciones
            </h2>
            <p>
              Podremos conservar cierta información cuando exista una obligación
              legal que lo exija (por ejemplo, registros tributarios o de
              facturación) o para la defensa de reclamos, limitándola al mínimo
              necesario y por el tiempo estrictamente requerido.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              5. Contacto
            </h2>
            <p>
              Ante cualquier duda sobre este procedimiento o sobre el
              tratamiento de tus datos, escríbenos a{" "}
              <a
                href="mailto:soporte@alkia.cl"
                className="underline underline-offset-2"
                style={{ color: "#10b981" }}
              >
                soporte@alkia.cl
              </a>
              . Más información en nuestra{" "}
              <Link
                href="/privacidad"
                className="underline underline-offset-2"
                style={{ color: "#10b981" }}
              >
                Política de Privacidad
              </Link>
              .
            </p>
          </section>

          <p className="text-sm text-gray-500 pt-6 border-t border-white/10">
            Alkia SpA (RUT 78.469.837-8) — Temuco, Chile
          </p>
        </div>
      </main>

      <footer className="border-t border-white/10 px-4 py-8">
        <p className="max-w-3xl mx-auto text-xs text-gray-500">
          © {new Date().getFullYear()} Alkia. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
