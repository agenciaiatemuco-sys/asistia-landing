import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad — Alkia",
  description:
    "Conoce cómo Alkia recopila, usa y protege la información de tus clientes y la tuya.",
};

// Contenido final (fuente: docs/POLITICA_PRIVACIDAD_ALKIA.md del repo
// dashboard-saas). Ante una nueva versión legal, reemplazar el contenido de
// <main> en un commit de este archivo.
export default function PrivacidadPage() {
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
          Política de Privacidad
        </h1>
        <p className="text-gray-400 text-sm mb-12">
          Última actualización: 22 de julio de 2026
        </p>

        <div className="space-y-10 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              1. Quiénes somos
            </h2>
            <p className="mb-3">
              <strong className="text-white">Alkia SpA</strong>, RUT
              78.469.837-8, con domicilio en Temuco, Región de La Araucanía,
              Chile, opera la plataforma Alkia, un servicio de asistentes
              virtuales con inteligencia artificial para WhatsApp dirigido a
              empresas.
            </p>
            <p>
              Contacto para materias de privacidad:{" "}
              <a
                href="mailto:soporte@alkia.cl"
                className="underline underline-offset-2"
                style={{ color: "#10b981" }}
              >
                soporte@alkia.cl
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              2. Los dos roles en que tratamos datos
            </h2>
            <p className="mb-3">
              Para entender esta política es clave distinguir dos situaciones:
            </p>
            <p className="mb-3">
              <strong className="text-white">
                a) Datos de nuestros Clientes (las empresas que contratan
                Alkia).
              </strong>{" "}
              Respecto de los datos de contacto, facturación y uso de la
              plataforma de nuestros Clientes y sus usuarios administradores,{" "}
              <strong className="text-white">
                Alkia actúa como responsable del tratamiento
              </strong>
              .
            </p>
            <p>
              <strong className="text-white">
                b) Datos de los clientes finales de nuestros Clientes.
              </strong>{" "}
              Cuando una persona conversa con el asistente virtual de un negocio
              que usa Alkia, los datos de esa conversación (nombre, teléfono,
              contenido de los mensajes, citas o pedidos) son tratados por Alkia{" "}
              <strong className="text-white">
                por cuenta y bajo las instrucciones del negocio
              </strong>
              . En esa relación,{" "}
              <strong className="text-white">
                el negocio es el responsable del tratamiento y Alkia actúa como
                encargado (mandatario)
              </strong>
              . Las solicitudes de derechos sobre esos datos pueden dirigirse al
              negocio con el que la persona conversó, o a Alkia, que las
              canalizará al responsable.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              3. Qué datos tratamos
            </h2>
            <p className="mb-3">
              <strong className="text-white">
                De nuestros Clientes (rol responsable):
              </strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                Identificación y contacto: nombre, razón social, RUT, correo,
                teléfono.
              </li>
              <li>
                Datos de facturación y pagos (procesados a través de pasarelas
                de pago; Alkia no almacena números de tarjeta).
              </li>
              <li>
                Datos de configuración del negocio: servicios, precios,
                horarios, catálogos.
              </li>
              <li>
                Datos de uso de la plataforma: registros técnicos, métricas de
                conversaciones.
              </li>
            </ul>
            <p className="mb-3">
              <strong className="text-white">
                De los clientes finales de nuestros Clientes (rol encargado):
              </strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Número de teléfono de WhatsApp y nombre de perfil.</li>
              <li>Contenido de las conversaciones con el asistente virtual.</li>
              <li>
                Datos entregados durante la conversación para gestionar citas,
                reservas o pedidos: nombre, dirección de entrega, correo
                electrónico, fechas y servicios solicitados, y RUT u otros datos
                de identificación cuando el agendamiento o la gestión del
                servicio solicitado lo requiera.
              </li>
              <li>
                Archivos multimedia enviados a la conversación, cuando aplique.
              </li>
            </ul>
            <p>
              <strong className="text-white">
                Datos sensibles / datos de salud:
              </strong>{" "}
              cuando el negocio que usa Alkia pertenece al rubro de salud (por
              ejemplo, centros de imagenología), las conversaciones pueden
              contener datos relativos a la salud (por ejemplo, el tipo de
              examen que una persona desea agendar). Estos datos: (i) se tratan
              exclusivamente para gestionar la atención solicitada por la propia
              persona; (ii) no se utilizan para otros fines ni se comparten con
              terceros distintos de los proveedores tecnológicos necesarios para
              prestar el servicio; (iii) reciben las medidas de seguridad
              descritas en la sección 7. El asistente solicita únicamente los
              datos necesarios para gestionar la atención requerida por la
              propia persona.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              4. Para qué usamos los datos (finalidades)
            </h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                Prestar el servicio contratado: operar los asistentes virtuales,
                gestionar citas, reservas y pedidos, y derivar conversaciones a
                atención humana.
              </li>
              <li>
                Gestionar la relación comercial con nuestros Clientes: soporte,
                facturación, comunicaciones operativas.
              </li>
              <li>
                Seguridad y continuidad: prevención de abuso, límites de uso,
                respaldos.
              </li>
              <li>
                Mejora del servicio, sobre la base de métricas agregadas de
                funcionamiento.
              </li>
              <li>Cumplimiento de obligaciones legales.</li>
            </ul>
            <p>
              <strong className="text-white">
                No vendemos datos personales ni los utilizamos para publicidad
                de terceros.
              </strong>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              5. Con quién compartimos datos (destinatarios y encargados)
            </h2>
            <p className="mb-4">
              Para prestar el servicio, Alkia utiliza proveedores tecnológicos
              que tratan datos por cuenta de Alkia, bajo sus propios compromisos
              de seguridad y protección de datos:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full min-w-[520px] text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-left">
                    <th className="py-2 pr-4 text-white font-semibold">
                      Proveedor
                    </th>
                    <th className="py-2 pr-4 text-white font-semibold">
                      Función
                    </th>
                    <th className="py-2 text-white font-semibold">
                      Ubicación de datos
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="py-2 pr-4">
                      Meta Platforms (WhatsApp Business Platform)
                    </td>
                    <td className="py-2 pr-4">Canal de mensajería</td>
                    <td className="py-2">EE.UU. / internacional</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Twilio</td>
                    <td className="py-2 pr-4">Proveedor de mensajería</td>
                    <td className="py-2">EE.UU.</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">OpenAI</td>
                    <td className="py-2 pr-4">
                      Generación de respuestas del asistente
                    </td>
                    <td className="py-2">EE.UU.</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Supabase</td>
                    <td className="py-2 pr-4">
                      Almacenamiento de historial de conversaciones y archivos
                    </td>
                    <td className="py-2">EE.UU. / internacional</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Airtable</td>
                    <td className="py-2 pr-4">
                      Configuración de negocios y gestión operativa
                    </td>
                    <td className="py-2">EE.UU.</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Vercel</td>
                    <td className="py-2 pr-4">
                      Infraestructura de la aplicación
                    </td>
                    <td className="py-2">EE.UU. / internacional</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Make</td>
                    <td className="py-2 pr-4">
                      Automatización de flujos operativos
                    </td>
                    <td className="py-2">Unión Europea</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Flow</td>
                    <td className="py-2 pr-4">Procesamiento de pagos</td>
                    <td className="py-2">Chile</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-3">
              Esto implica{" "}
              <strong className="text-white">
                transferencias internacionales de datos
              </strong>
              . Alkia selecciona proveedores que ofrecen garantías contractuales
              y estándares de seguridad reconocidos internacionalmente.
            </p>
            <p>
              Además, los datos podrán comunicarse a autoridades competentes
              cuando una norma legal lo exija.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              6. Plazos de conservación
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">
                  Contenido de conversaciones:
                </strong>{" "}
                se conserva mientras la cuenta del Cliente esté activa, para dar
                continuidad y contexto a la atención, con un máximo de 6 meses
                desde el último mensaje de la conversación.
              </li>
              <li>
                <strong className="text-white">Archivos multimedia:</strong> 30
                días desde su recepción, tras lo cual se eliminan.
              </li>
              <li>
                <strong className="text-white">
                  Datos de citas y pedidos:
                </strong>{" "}
                mientras la cuenta del Cliente esté activa y por los plazos
                necesarios para fines contables y tributarios.
              </li>
              <li>
                <strong className="text-white">Datos de facturación:</strong>{" "}
                por los plazos exigidos por la normativa tributaria chilena.
              </li>
              <li>
                <strong className="text-white">Respaldos técnicos:</strong>{" "}
                hasta 30 días.
              </li>
              <li>
                Al término del contrato con un Cliente, sus datos y los de sus
                clientes finales se eliminan o anonimizan dentro de 30 días,
                salvo obligación legal de conservación.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              7. Seguridad
            </h2>
            <p>
              Aplicamos medidas técnicas y organizativas apropiadas, entre
              ellas: cifrado en tránsito (HTTPS/TLS), control de acceso por
              roles al panel, almacenamiento de archivos en repositorios
              privados con acceso mediante enlaces firmados de duración
              limitada, aislamiento lógico de los datos de cada Cliente,
              respaldos periódicos, y registro de actividad del sistema. Ningún
              sistema es infalible; en caso de una vulneración de seguridad que
              afecte datos personales, actuaremos conforme al deber de
              notificación previsto en la normativa aplicable.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              8. Derechos de las personas
            </h2>
            <p className="mb-3">
              De acuerdo con la legislación chilena de protección de datos
              personales, las personas titulares de datos tienen derecho a
              solicitar:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong className="text-white">Acceso</strong> a sus datos
                personales.
              </li>
              <li>
                <strong className="text-white">Rectificación</strong> de datos
                inexactos o incompletos.
              </li>
              <li>
                <strong className="text-white">Supresión (eliminación)</strong>{" "}
                de sus datos, cuando corresponda.
              </li>
              <li>
                <strong className="text-white">Oposición</strong> al tratamiento
                y <strong className="text-white">portabilidad</strong>, en los
                términos que establece la ley.
              </li>
            </ul>
            <p className="mb-3">
              <strong className="text-white">Cómo ejercerlos:</strong>{" "}
              escribiendo a{" "}
              <a
                href="mailto:soporte@alkia.cl"
                className="underline underline-offset-2"
                style={{ color: "#10b981" }}
              >
                soporte@alkia.cl
              </a>{" "}
              desde el correo o número de teléfono asociado a los datos,
              indicando el derecho que desea ejercer y el negocio con el que
              conversó (si aplica). Responderemos dentro de los plazos legales.
              Si la solicitud recae sobre datos tratados por cuenta de un
              negocio Cliente, la canalizaremos a dicho negocio y colaboraremos
              en su respuesta. También puede consultarse la página{" "}
              <Link
                href="/eliminacion-de-datos"
                className="underline underline-offset-2"
                style={{ color: "#10b981" }}
              >
                alkia.cl/eliminacion-de-datos
              </Link>{" "}
              para el procedimiento específico de eliminación.
            </p>
            <p>
              Las personas también tienen derecho a reclamar ante la autoridad
              de protección de datos personales que establece la ley.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              9. Cookies y sitio web
            </h2>
            <p>
              El sitio alkia.cl utiliza únicamente cookies técnicas necesarias
              para su funcionamiento. Si en el futuro se incorporan herramientas
              de analítica, esta política se actualizará indicando el proveedor
              y su finalidad.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              10. Menores de edad
            </h2>
            <p>
              La Plataforma está dirigida a empresas. Los asistentes virtuales
              no están diseñados para recopilar deliberadamente datos de menores
              de 14 años. Si un responsable detecta un tratamiento indebido de
              datos de un menor, puede solicitarnos su eliminación en{" "}
              <a
                href="mailto:soporte@alkia.cl"
                className="underline underline-offset-2"
                style={{ color: "#10b981" }}
              >
                soporte@alkia.cl
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              11. Cambios a esta política
            </h2>
            <p>
              Podremos actualizar esta política para reflejar cambios normativos
              o del servicio. Publicaremos la versión vigente en
              alkia.cl/privacidad indicando su fecha de actualización, y
              notificaremos a nuestros Clientes los cambios sustanciales.
            </p>
          </section>

          <p className="text-sm text-gray-500 pt-6 border-t border-white/10">
            Alkia SpA · RUT 78.469.837-8 · Temuco, Chile ·{" "}
            <a
              href="mailto:soporte@alkia.cl"
              className="underline underline-offset-2"
              style={{ color: "#10b981" }}
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
