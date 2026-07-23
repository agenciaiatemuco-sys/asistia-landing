import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Eliminación de Datos — Alkia",
  description:
    "Instrucciones para solicitar la eliminación de tus datos personales de la plataforma Alkia.",
};

// Contenido final (fuente: docs/ELIMINACION_DE_DATOS_ALKIA.md del repo
// dashboard-saas). Ante una nueva versión legal, reemplazar el contenido de
// <main> en un commit de este archivo.
export default function EliminacionDeDatosPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0f172a" }}>
      <header className="border-b border-white/10 px-4 py-5">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="text-xl font-bold"
            style={{ color: "#0d9373" }}
          >
            ✦ Alkia
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-white mb-2">
          Eliminación de datos de usuario
        </h1>
        <p className="text-gray-400 text-sm mb-12">
          Última actualización: 22 de julio de 2026
        </p>

        <div className="space-y-10 text-gray-300 leading-relaxed">
          <p>
            Alkia SpA respeta tu derecho a decidir sobre tus datos personales.
            En esta página te explicamos cómo solicitar la eliminación de los
            datos asociados a tus conversaciones con asistentes virtuales
            operados por Alkia.
          </p>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              ¿Qué datos podemos eliminar?
            </h2>
            <p className="mb-3">
              Si conversaste por WhatsApp con el asistente virtual de un negocio
              que utiliza la plataforma Alkia, podemos eliminar:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>El historial de tus conversaciones con ese asistente.</li>
              <li>
                Tu número de teléfono y nombre de perfil asociados a esas
                conversaciones.
              </li>
              <li>
                Los datos que hayas entregado durante la conversación (por
                ejemplo, nombre, dirección, correo electrónico, RUT).
              </li>
              <li>
                Los archivos multimedia que hayas enviado (estos, además, se
                eliminan automáticamente a los 30 días).
              </li>
            </ul>
            <p>
              <strong className="text-white">Nota:</strong> los registros de
              citas, reservas o pedidos ya gestionados pueden requerir
              conservación por parte del negocio con el que contrataste (por
              ejemplo, por razones contables o de atención médica). En esos
              casos, coordinaremos la solicitud con el negocio responsable, que
              es quien decide sobre esos registros.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              ¿Cómo solicito la eliminación?
            </h2>
            <p className="mb-3">
              <strong className="text-white">
                Opción 1 — Por correo electrónico (recomendada):
              </strong>{" "}
              Escribe a{" "}
              <a
                href="mailto:soporte@alkia.cl"
                className="underline underline-offset-2"
                style={{ color: "#0d9373" }}
              >
                soporte@alkia.cl
              </a>{" "}
              con el asunto “Eliminación de datos”, indicando:
            </p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>
                El número de teléfono de WhatsApp desde el cual conversaste.
              </li>
              <li>
                El nombre del negocio con cuyo asistente conversaste (si lo
                recuerdas).
              </li>
            </ol>
            <p className="mb-3">
              Para tu seguridad, podremos pedirte una verificación simple de que
              eres el titular del número (por ejemplo, responder desde ese mismo
              número o correo).
            </p>
            <p>
              <strong className="text-white">
                Opción 2 — Directamente con el negocio:
              </strong>{" "}
              También puedes pedir la eliminación directamente al negocio con el
              que conversaste; Alkia ejecutará la eliminación siguiendo sus
              instrucciones como responsable de esos datos.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Plazos</h2>
            <p>
              Confirmaremos la recepción de tu solicitud dentro de 5 días
              hábiles y completaremos la eliminación dentro de un máximo de 30
              días corridos, salvo que exista una obligación legal de
              conservación, en cuyo caso te lo informaremos.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              ¿Y los datos que guarda WhatsApp?
            </h2>
            <p>
              Alkia solo puede eliminar los datos almacenados en su plataforma.
              Los mensajes que permanecen en tu propia aplicación de WhatsApp o
              en los servidores de WhatsApp/Meta se rigen por la política de
              privacidad de WhatsApp. Puedes gestionar esos datos directamente
              en tu aplicación.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Contacto</h2>
            <p>
              Para cualquier duda sobre este procedimiento o sobre el
              tratamiento de tus datos, revisa nuestra{" "}
              <Link
                href="/privacidad"
                className="underline underline-offset-2"
                style={{ color: "#0d9373" }}
              >
                Política de Privacidad
              </Link>{" "}
              o escríbenos a{" "}
              <a
                href="mailto:soporte@alkia.cl"
                className="underline underline-offset-2"
                style={{ color: "#0d9373" }}
              >
                soporte@alkia.cl
              </a>
              .
            </p>
          </section>

          <p className="text-sm text-gray-500 pt-6 border-t border-white/10">
            Alkia SpA · RUT 78.469.837-8 · Temuco, Chile
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
