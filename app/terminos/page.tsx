import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos de Servicio — Alkia",
  description:
    "Términos y condiciones de uso de la plataforma Alkia para asistentes de WhatsApp con IA.",
};

export default function TerminosPage() {
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
          Términos de Servicio
        </h1>
        <p className="text-gray-400 text-sm mb-12">
          Última actualización: 22 de julio de 2026
        </p>

        <div className="space-y-10 text-gray-300 leading-relaxed">
          <p>
            Estos Términos de Servicio (&quot;Términos&quot;) regulan el acceso y uso de la
            plataforma Alkia, operada por Alkia SpA (RUT 78.469.837-8), con domicilio
            en Temuco, Región de La Araucanía, Chile (en adelante &quot;Alkia&quot;,
            &quot;nosotros&quot; o &quot;la empresa&quot;).
          </p>
          <p>
            Al contratar, acceder o utilizar nuestros servicios, usted (&quot;Cliente&quot; o
            &quot;usuario&quot;) acepta quedar vinculado por estos Términos. Si no está de acuerdo,
            no utilice el servicio.
          </p>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              1. Descripción del servicio
            </h2>
            <p className="mb-3">
              Alkia es una plataforma SaaS (Software como Servicio) que provee asistentes de
              inteligencia artificial para WhatsApp, incluyendo:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Bot de WhatsApp personalizable con IA</li>
              <li>Panel de administración web en panel.miasistia.cl</li>
              <li>Agendamiento de citas y gestión de pedidos</li>
              <li>Automatización de comunicaciones con clientes finales</li>
              <li>Funcionalidades adicionales según el plan contratado</li>
            </ul>
            <p className="mt-3">
              El servicio se presta exclusivamente a través de internet. No incluye instalación
              de software en equipos del Cliente.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              2. Planes y precios
            </h2>

            <h3 className="text-sm font-semibold text-white mt-4 mb-2">2.1 Planes disponibles</h3>
            <p>
              Alkia ofrece planes de suscripción mensual con distintos límites de interacciones
              y colaboradores. Los precios vigentes se publican en{" "}
              <a href="https://alkia.cl" className="underline underline-offset-2" style={{ color: "#10b981" }}>
                alkia.cl
              </a>.
            </p>

            <h3 className="text-sm font-semibold text-white mt-4 mb-2">2.2 Trial gratuito</h3>
            <p>
              Los planes Micro y Starter incluyen un período de prueba gratuito de 14 días sin
              necesidad de tarjeta de crédito. Al finalizar el trial, el servicio se pausará
              automáticamente si no se contrata un plan.
            </p>

            <h3 className="text-sm font-semibold text-white mt-4 mb-2">2.3 Facturación</h3>
            <p>
              El cobro se realiza mensualmente. Los precios están expresados en pesos chilenos (CLP)
              e incluyen IVA cuando corresponda. Alkia se reserva el derecho de modificar los
              precios con un aviso previo de 30 días.
            </p>

            <h3 className="text-sm font-semibold text-white mt-4 mb-2">2.4 Reembolsos</h3>
            <p>
              No se realizan reembolsos por períodos parciales ya facturados. En caso de fallas graves
              atribuibles a Alkia, se evaluarán compensaciones caso a caso.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              3. Obligaciones del Cliente
            </h2>
            <p className="mb-3">El Cliente se compromete a:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Proporcionar información veraz al momento del registro.</li>
              <li>Usar el servicio de conformidad con la legislación chilena vigente.</li>
              <li>No usar el bot para enviar spam, contenido ilegal, engañoso o que infrinja derechos de terceros.</li>
              <li>Mantener la confidencialidad de sus credenciales de acceso.</li>
              <li>Obtener los consentimientos necesarios de sus propios clientes finales para el tratamiento de sus datos personales.</li>
              <li>No intentar acceder a cuentas de otros clientes ni vulnerar la seguridad de la plataforma.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              4. Obligaciones de Alkia
            </h2>
            <p className="mb-3">Alkia se compromete a:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Mantener el servicio disponible con un objetivo de uptime del 99% mensual, excluyendo mantenimientos programados.</li>
              <li>Notificar al Cliente con al menos 24 horas de anticipación ante mantenimientos que afecten la disponibilidad.</li>
              <li>Proteger los datos del Cliente conforme a la Ley N° 19.628 sobre protección de la vida privada.</li>
              <li>No vender ni ceder los datos del Cliente a terceros sin su consentimiento expreso.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              5. Limitación de responsabilidad
            </h2>
            <p className="mb-3">Alkia no será responsable por:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Interrupciones del servicio de WhatsApp (Meta Platforms) ajenas a su control.</li>
              <li>Respuestas del bot que el Cliente considere inadecuadas para su negocio y que no hayan sido configuradas correctamente.</li>
              <li>Pérdidas de negocio, lucro cesante o daños indirectos derivados del uso del servicio.</li>
              <li>Fallos en servicios de terceros integrados (Google Calendar, pasarelas de pago, proveedores de infraestructura).</li>
            </ul>
            <p className="mt-3">
              La responsabilidad máxima de Alkia frente al Cliente, en cualquier caso, no excederá
              el monto pagado en los últimos 3 meses de servicio.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              6. Propiedad intelectual
            </h2>
            <p>
              Alkia y todos sus componentes (software, diseño, marca, documentación) son propiedad
              de Alkia SpA. El Cliente recibe una licencia de uso no exclusiva, intransferible
              y revocable para usar el servicio durante la vigencia de su suscripción.
            </p>
            <p className="mt-3">
              Los datos, conversaciones y configuraciones generadas por el Cliente son de su propiedad.
              Alkia puede usarlos de forma anonimizada para mejorar el servicio.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              7. Suspensión y término
            </h2>

            <h3 className="text-sm font-semibold text-white mt-4 mb-2">7.1 Por parte del Cliente</h3>
            <p>
              El Cliente puede cancelar su suscripción en cualquier momento. La cancelación es
              efectiva al final del período facturado.
            </p>

            <h3 className="text-sm font-semibold text-white mt-4 mb-2">7.2 Por parte de Alkia</h3>
            <p className="mb-2">
              Alkia puede suspender o terminar el acceso del Cliente en caso de:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Incumplimiento de estos Términos.</li>
              <li>Falta de pago por más de 15 días.</li>
              <li>Uso del servicio para actividades ilegales o dañinas.</li>
            </ul>
            <p className="mt-3">
              En caso de término injustificado por parte de Alkia, se reembolsará el proporcional
              del período no utilizado.
            </p>

            <h3 className="text-sm font-semibold text-white mt-4 mb-2">7.3 Efecto del término</h3>
            <p>
              Al terminar el servicio, el Cliente tendrá 30 días para exportar sus datos.
              Transcurrido ese plazo, los datos podrán ser eliminados.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              8. Modificaciones a los Términos
            </h2>
            <p>
              Alkia puede modificar estos Términos en cualquier momento, notificando al Cliente
              por email con al menos 15 días de anticipación. El uso continuado del servicio tras
              la fecha efectiva implica aceptación de los nuevos Términos.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              9. Legislación aplicable y jurisdicción
            </h2>
            <p>
              Estos Términos se rigen por las leyes de la República de Chile. Cualquier controversia
              se someterá a la jurisdicción de los Tribunales Ordinarios de Justicia de la ciudad de
              Temuco, renunciando las partes a cualquier otro fuero.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              10. Contacto
            </h2>
            <p>Para consultas sobre estos Términos:</p>
            <p className="mt-2">
              <strong className="text-white">Email:</strong>{" "}
              <a href="mailto:soporte@alkia.cl" className="underline underline-offset-2" style={{ color: "#10b981" }}>
                soporte@alkia.cl
              </a>
              <br />
              <strong className="text-white">Web:</strong>{" "}
              <a href="https://alkia.cl" className="underline underline-offset-2" style={{ color: "#10b981" }}>
                alkia.cl
              </a>
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-8">
            Alkia SpA (RUT 78.469.837-8) — Temuco, Chile
          </p>
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
          © {new Date().getFullYear()} Alkia. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
