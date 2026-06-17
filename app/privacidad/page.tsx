import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad — AsistIA",
  description:
    "Conoce cómo AsistIA recopila, usa y protege la información de tus clientes y la tuya.",
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0f172a" }}>
      {/* Header simple */}
      <header className="border-b border-white/10 px-4 py-5">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="text-xl font-bold"
            style={{ color: "#10b981" }}
          >
            ✦ AsistIA
          </Link>
        </div>
      </header>

      {/* Contenido */}
      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-white mb-2">
          Política de Privacidad
        </h1>
        <p className="text-gray-400 text-sm mb-12">
          Última actualización: junio de 2026
        </p>

        <div className="space-y-10 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              1. Quién somos
            </h2>
            <p>
              AsistIA es un servicio SaaS que provee asistentes de inteligencia
              artificial para WhatsApp, diseñados para que negocios respondan
              consultas, agenden citas y atiendan clientes de forma automática.
              El titular del servicio es <strong className="text-white">Agencia IA Temuco</strong>,
              con domicilio en Temuco, Chile.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              2. Información que recopilamos
            </h2>
            <p className="mb-3">Recopilamos dos tipos de información:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong className="text-white">Datos de clientes del servicio</strong> (negocios que contratan AsistIA):
                nombre, correo electrónico, teléfono, nombre del negocio y rubro.
                Esta información se usa para crear y administrar la cuenta.
              </li>
              <li>
                <strong className="text-white">Datos de usuarios finales</strong> (personas que escriben al bot de WhatsApp
                de un negocio): número de WhatsApp, nombre y contenido de las conversaciones.
                Esta información es procesada en nombre del negocio cliente para
                operar el asistente.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              3. Cómo usamos la información
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Prestar el servicio de asistente IA contratado.</li>
              <li>Procesar y responder mensajes de WhatsApp mediante OpenAI.</li>
              <li>Agendar citas y registrar interacciones en nombre del negocio.</li>
              <li>Enviar recordatorios de citas a los usuarios finales.</li>
              <li>Generar estadísticas de uso para el panel del negocio.</li>
              <li>Mejorar la calidad del servicio.</li>
            </ul>
            <p className="mt-3">
              No vendemos, arrendamos ni compartimos información personal con
              terceros con fines publicitarios.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              4. Proveedores externos
            </h2>
            <p className="mb-3">
              Para operar el servicio utilizamos los siguientes proveedores, cada uno
              con sus propias políticas de privacidad:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong className="text-white">OpenAI</strong> — procesamiento de mensajes mediante inteligencia artificial.
              </li>
              <li>
                <strong className="text-white">Meta (WhatsApp Business API)</strong> — transmisión de mensajes de WhatsApp.
              </li>
              <li>
                <strong className="text-white">Supabase</strong> — autenticación y almacenamiento de datos de cuentas.
              </li>
              <li>
                <strong className="text-white">Airtable</strong> — almacenamiento de datos operacionales (citas, contactos, configuración del bot).
              </li>
              <li>
                <strong className="text-white">Google Calendar</strong> — agendamiento de citas (solo si el negocio lo activa).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              5. Retención de datos
            </h2>
            <p>
              Los datos de conversaciones y citas se conservan mientras la cuenta
              del negocio esté activa. Al cancelar el servicio, los datos son
              eliminados dentro de los 30 días siguientes, salvo que la ley chilena
              exija conservarlos por un período mayor.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              6. Seguridad
            </h2>
            <p>
              Aplicamos medidas técnicas y organizativas para proteger la información:
              comunicaciones cifradas (TLS), control de acceso por rol, tokens de API
              almacenados únicamente en variables de entorno del servidor y sin acceso
              público. Ningún sistema es 100 % infalible; en caso de incidente de
              seguridad notificaremos a los afectados dentro de las 72 horas.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              7. Derechos de los titulares
            </h2>
            <p className="mb-3">
              De acuerdo con la legislación chilena vigente (Ley N° 19.628 sobre
              protección de la vida privada), tienes derecho a:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Acceder a los datos personales que tenemos sobre ti.</li>
              <li>Solicitar la rectificación de datos incorrectos.</li>
              <li>Solicitar la eliminación de tus datos.</li>
              <li>Oponerte al tratamiento de tus datos.</li>
            </ul>
            <p className="mt-3">
              Para ejercer cualquiera de estos derechos, escríbenos al correo
              indicado en la sección de contacto.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              8. Uso exclusivo del número de WhatsApp
            </h2>
            <p>
              El número de WhatsApp registrado en AsistIA se destina exclusivamente
              a la operación del asistente del negocio contratante. No se usa para
              enviar publicidad no solicitada ni se comparte con terceros. El negocio
              cliente es responsable del contenido que el asistente comunica a sus
              usuarios finales.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              9. Cambios a esta política
            </h2>
            <p>
              Podemos actualizar esta política en cualquier momento. Si los cambios
              son significativos, notificaremos a los clientes por correo electrónico
              con al menos 15 días de anticipación. El uso continuado del servicio
              tras la notificación implica aceptación de la nueva política.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              10. Contacto
            </h2>
            <p>
              Consultas sobre privacidad o ejercicio de derechos:
            </p>
            <p className="mt-2">
              <strong className="text-white">Correo:</strong>{" "}
              <a
                href="mailto:agencia.ia.temuco@gmail.com"
                className="underline underline-offset-2"
                style={{ color: "#10b981" }}
              >
                agencia.ia.temuco@gmail.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <Link
            href="/"
            className="text-sm font-medium transition-opacity hover:opacity-80"
            style={{ color: "#10b981" }}
          >
            ← Volver al inicio
          </Link>
        </div>
      </main>

      <footer className="py-8 px-4 border-t border-white/10 text-center">
        <p className="text-gray-500 text-xs">
          © 2026 AsistIA. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
