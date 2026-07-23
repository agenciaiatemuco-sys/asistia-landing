import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones — Alkia",
  description:
    "Términos y condiciones de uso de la plataforma Alkia para asistentes de WhatsApp con IA.",
};

// Contenido final (fuente: docs/TERMINOS_Y_CONDICIONES_ALKIA.md del repo
// dashboard-saas). Ante una nueva versión legal, reemplazar el contenido de
// <main> en un commit de este archivo.
export default function TerminosPage() {
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
          Términos y Condiciones de Uso
        </h1>
        <p className="text-gray-400 text-sm mb-12">
          Última actualización: 22 de julio de 2026
        </p>

        <div className="space-y-10 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              1. Identificación del proveedor
            </h2>
            <p className="mb-3">
              Los presentes Términos y Condiciones regulan el acceso y uso de la
              plataforma <strong className="text-white">Alkia</strong> (en
              adelante, “la Plataforma” o “el Servicio”), operada por{" "}
              <strong className="text-white">Alkia SpA</strong>, RUT
              78.469.837-8, con domicilio en Temuco, Región de La Araucanía,
              Chile (en adelante, “Alkia”).
            </p>
            <p>
              Contacto:{" "}
              <a
                href="mailto:soporte@alkia.cl"
                className="underline underline-offset-2"
                style={{ color: "#0d9373" }}
              >
                soporte@alkia.cl
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              2. Descripción del Servicio
            </h2>
            <p className="mb-3">
              Alkia es una plataforma de software como servicio (SaaS) que
              permite a empresas y negocios (en adelante, “el Cliente”)
              implementar asistentes virtuales automatizados con inteligencia
              artificial para la atención de sus propios clientes a través de
              WhatsApp, incluyendo funcionalidades de respuesta automatizada,
              gestión de citas y reservas, gestión de pedidos, y derivación a
              atención humana.
            </p>
            <p>
              El Servicio utiliza la API oficial de WhatsApp Business (Meta
              Platforms, Inc.) a través de proveedores autorizados, y modelos de
              inteligencia artificial de terceros para la generación de
              respuestas.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              3. Aceptación de los términos
            </h2>
            <p className="mb-3">
              Al contratar, registrarse o utilizar la Plataforma, el Cliente
              declara haber leído, comprendido y aceptado íntegramente estos
              Términos y Condiciones y la Política de Privacidad de Alkia. Si el
              Cliente no está de acuerdo, debe abstenerse de utilizar el
              Servicio.
            </p>
            <p>
              La contratación del Servicio está dirigida a personas jurídicas y
              personas naturales con iniciación de actividades que actúen en el
              marco de su actividad empresarial o profesional.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              4. Cuentas y acceso
            </h2>
            <p className="mb-3">
              4.1. El Cliente es responsable de mantener la confidencialidad de
              sus credenciales de acceso al panel de administración y de toda
              actividad realizada bajo su cuenta.
            </p>
            <p className="mb-3">
              4.2. El Cliente se obliga a entregar información veraz y
              actualizada durante el registro y la configuración de su asistente
              virtual.
            </p>
            <p>
              4.3. Alkia podrá suspender o cancelar cuentas que infrinjan estos
              términos, la normativa vigente o las políticas de las plataformas
              de terceros de las que depende el Servicio (incluyendo las
              políticas de WhatsApp Business y Meta).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              5. Planes, precios y facturación
            </h2>
            <p className="mb-3">
              5.1. El Servicio se ofrece bajo planes de suscripción con cargos
              periódicos, cuyas características, límites de uso y precios se
              informan en alkia.cl o en la propuesta comercial correspondiente.
            </p>
            <p className="mb-3">
              5.2. Los precios podrán ser actualizados por Alkia, notificando al
              Cliente con al menos 30 días de anticipación. El uso continuado
              del Servicio tras la entrada en vigencia de nuevos precios
              constituye aceptación.
            </p>
            <p className="mb-3">
              5.3. Algunos planes pueden incluir períodos de prueba gratuita. Al
              término del período de prueba, el Servicio se suspende salvo
              contratación de un plan de pago.
            </p>
            <p>
              5.4. Los cargos por mensajería de WhatsApp establecidos por Meta
              y/o el proveedor de mensajería podrán trasladarse al Cliente según
              lo indicado en el plan contratado o en la propuesta comercial
              correspondiente.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              6. Obligaciones y uso aceptable
            </h2>
            <p className="mb-3">
              6.1. El Cliente se obliga a utilizar el Servicio conforme a la ley
              chilena, a estos términos y a las políticas de WhatsApp Business y
              Meta, incluyendo la obtención de los consentimientos necesarios de
              sus propios clientes para ser contactados por WhatsApp cuando
              corresponda.
            </p>
            <p className="mb-3">
              6.2. Queda prohibido utilizar el Servicio para: (a) enviar
              comunicaciones masivas no solicitadas (spam); (b) actividades
              ilícitas, fraudulentas o engañosas; (c) difundir contenido que
              infrinja derechos de terceros; (d) recopilar datos personales sin
              base de licitud.
            </p>
            <p>
              6.3. El Cliente es el único responsable de la información de su
              negocio configurada en la Plataforma (precios, horarios,
              servicios, preparaciones, políticas), así como de mantenerla
              actualizada. Las respuestas del asistente se generan a partir de
              dicha configuración.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              7. Naturaleza del servicio de inteligencia artificial
            </h2>
            <p className="mb-3">
              7.1. El Cliente reconoce que las respuestas del asistente virtual
              son generadas por modelos de inteligencia artificial y, pese a los
              controles implementados por Alkia, pueden ocasionalmente contener
              imprecisiones. El Servicio incluye mecanismos de derivación a
              atención humana.
            </p>
            <p>
              7.2. El asistente virtual no entrega asesoría médica, legal ni
              financiera. En rubros sensibles (por ejemplo, salud), el asistente
              se limita a informar datos operativos configurados por el Cliente
              (horarios, preparación de exámenes, agendamiento) y deriva al
              personal correspondiente.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              8. Datos personales
            </h2>
            <p>
              El tratamiento de datos personales se rige por la{" "}
              <Link
                href="/privacidad"
                className="underline underline-offset-2"
                style={{ color: "#0d9373" }}
              >
                Política de Privacidad
              </Link>{" "}
              de Alkia, disponible en alkia.cl/privacidad, que forma parte
              integrante de estos términos. En síntesis: respecto de los datos
              personales de los clientes finales del Cliente tratados a través
              del asistente, el Cliente actúa como responsable del tratamiento y
              Alkia como encargado (mandatario) que trata los datos por cuenta y
              bajo instrucciones del Cliente.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              9. Propiedad intelectual
            </h2>
            <p className="mb-3">
              9.1. La Plataforma, su software, diseño, marcas y documentación
              son de propiedad de Alkia SpA o de sus licenciantes. La
              contratación del Servicio otorga al Cliente una licencia limitada,
              no exclusiva e intransferible de uso durante la vigencia de su
              suscripción.
            </p>
            <p>
              9.2. La información y contenidos del negocio del Cliente cargados
              a la Plataforma son y seguirán siendo de propiedad del Cliente.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              10. Disponibilidad y dependencia de terceros
            </h2>
            <p className="mb-3">
              10.1. Alkia realizará esfuerzos razonables para mantener la
              disponibilidad continua del Servicio, sin garantizar un
              funcionamiento ininterrumpido o libre de errores.
            </p>
            <p>
              10.2. El Servicio depende de plataformas y servicios de terceros
              (incluyendo WhatsApp/Meta, proveedores de mensajería, proveedores
              de inteligencia artificial e infraestructura en la nube). Alkia no
              responde por interrupciones, restricciones, suspensiones de
              números o cambios de políticas imputables a dichos terceros.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              11. Limitación de responsabilidad
            </h2>
            <p className="mb-3">
              11.1. En la máxima medida permitida por la ley chilena, la
              responsabilidad total de Alkia frente al Cliente por cualquier
              causa se limita al monto efectivamente pagado por el Cliente por
              el Servicio en los 6 meses anteriores al hecho que la origina.
            </p>
            <p>
              11.2. Alkia no responde por lucro cesante, pérdida de datos
              imputable al Cliente, daño indirecto ni por decisiones comerciales
              adoptadas por el Cliente o sus clientes finales a partir de la
              información entregada por el asistente.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              12. Vigencia y término
            </h2>
            <p className="mb-3">
              12.1. El Cliente puede poner término a su suscripción en cualquier
              momento; el término rige desde el fin del período ya facturado,
              sin derecho a reembolso proporcional, salvo que la ley disponga
              otra cosa.
            </p>
            <p className="mb-3">
              12.2. Alkia puede poner término al contrato en caso de
              incumplimiento grave del Cliente, con aviso previo, o de inmediato
              cuando el incumplimiento ponga en riesgo la Plataforma, a terceros
              o el cumplimiento de políticas de Meta/WhatsApp.
            </p>
            <p>
              12.3. Al término del contrato, el Cliente podrá solicitar la
              exportación de su información dentro de 30 días, tras lo cual los
              datos serán eliminados conforme a la Política de Privacidad.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              13. Modificaciones
            </h2>
            <p>
              Alkia podrá modificar estos términos, notificando los cambios
              relevantes al Cliente por correo electrónico o mediante aviso en
              la Plataforma con anticipación razonable. El uso continuado del
              Servicio implica aceptación de los términos modificados.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              14. Ley aplicable y jurisdicción
            </h2>
            <p>
              Estos términos se rigen por las leyes de la República de Chile.
              Toda controversia será sometida a los tribunales ordinarios de
              justicia de la ciudad de Temuco, sin perjuicio de las normas de
              competencia irrenunciables que resulten aplicables.
            </p>
          </section>

          <p className="text-sm text-gray-500 pt-6 border-t border-white/10">
            Alkia SpA · RUT 78.469.837-8 · Temuco, Chile ·{" "}
            <a
              href="mailto:soporte@alkia.cl"
              className="underline underline-offset-2"
              style={{ color: "#0d9373" }}
            >
              soporte@alkia.cl
            </a>
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
