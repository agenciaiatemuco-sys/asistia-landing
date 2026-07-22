import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad — Alkia",
  description:
    "Conoce cómo Alkia recopila, usa y protege la información de tus clientes y la tuya.",
};

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
          <p>
            Alkia SpA (RUT 78.469.837-8), operadora de la plataforma Alkia
            con domicilio en Temuco, Chile, se compromete a proteger la
            privacidad de sus clientes y usuarios finales, en cumplimiento
            de la Ley N° 19.628 sobre protección de la vida privada y demás
            normativa aplicable.
          </p>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              1. ¿Quién es responsable del tratamiento?
            </h2>
            <p>
              <strong className="text-white">Responsable:</strong> Alkia SpA (RUT 78.469.837-8)
              <br />
              <strong className="text-white">Contacto:</strong>{" "}
              <a href="mailto:soporte@alkia.cl" className="underline underline-offset-2" style={{ color: "#10b981" }}>
                soporte@alkia.cl
              </a>
              <br />
              <strong className="text-white">Web:</strong>{" "}
              <a href="https://alkia.cl" className="underline underline-offset-2" style={{ color: "#10b981" }}>
                alkia.cl
              </a>
              <br />
              <strong className="text-white">Domicilio:</strong> Temuco, Región de La Araucanía, Chile
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              2. ¿Qué datos recopilamos?
            </h2>

            <h3 className="text-sm font-semibold text-white mt-4 mb-2">
              2.1 Datos de clientes del SaaS (negocios que contratan Alkia)
            </h3>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Nombre, email y teléfono de contacto del negocio.</li>
              <li>Datos de facturación.</li>
              <li>Información del negocio ingresada en el panel (descripción, servicios, horarios, etc.).</li>
              <li>Datos de uso del servicio (interacciones, citas, logs).</li>
            </ul>

            <h3 className="text-sm font-semibold text-white mt-4 mb-2">
              2.2 Datos de usuarios finales del bot (clientes de nuestros clientes)
            </h3>
            <p className="mb-2">
              Cuando un usuario final interactúa con un bot de WhatsApp powered by Alkia, podemos procesar:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Número de teléfono de WhatsApp.</li>
              <li>Nombre proporcionado por el usuario.</li>
              <li>Contenido de las conversaciones.</li>
              <li>Email y datos de agenda cuando son proporcionados voluntariamente para agendar una cita.</li>
            </ul>
            <p className="mt-3">
              Alkia actúa como <strong className="text-white">encargado de tratamiento</strong> respecto
              a los datos de los usuarios finales. El <strong className="text-white">responsable</strong> es
              el negocio (cliente de Alkia) que opera el bot.
            </p>

            <h3 className="text-sm font-semibold text-white mt-4 mb-2">
              2.3 Datos técnicos
            </h3>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Dirección IP, tipo de dispositivo y navegador (solo para accesos al panel web).</li>
              <li>Logs de actividad del sistema para seguridad y debugging.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              3. ¿Para qué usamos los datos?
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-white py-2 pr-4">Dato</th>
                    <th className="text-left text-white py-2">Finalidad</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr><td className="py-2 pr-4">Email y teléfono del negocio</td><td className="py-2">Comunicaciones del servicio, soporte, facturación</td></tr>
                  <tr><td className="py-2 pr-4">Conversaciones del bot</td><td className="py-2">Proveer el servicio de IA, historial de atención</td></tr>
                  <tr><td className="py-2 pr-4">Datos de citas y pedidos</td><td className="py-2">Gestión de la agenda del negocio cliente</td></tr>
                  <tr><td className="py-2 pr-4">Logs técnicos</td><td className="py-2">Seguridad, mejora del servicio, resolución de errores</td></tr>
                  <tr><td className="py-2 pr-4">Datos anonimizados</td><td className="py-2">Mejora de modelos y funcionalidades (sin identificación personal)</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              No usamos los datos para publicidad de terceros ni los vendemos bajo ninguna circunstancia.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              4. ¿Con quién compartimos los datos?
            </h2>
            <p className="mb-3">
              Alkia puede compartir datos con los siguientes proveedores de servicios,
              únicamente en la medida necesaria para operar la plataforma:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-white py-2 pr-4">Proveedor</th>
                    <th className="text-left text-white py-2 pr-4">Servicio</th>
                    <th className="text-left text-white py-2">Datos compartidos</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr><td className="py-2 pr-4">OpenAI (EE.UU.)</td><td className="py-2 pr-4">Procesamiento de IA</td><td className="py-2">Conversaciones anonimizadas</td></tr>
                  <tr><td className="py-2 pr-4">Airtable (EE.UU.)</td><td className="py-2 pr-4">Base de datos</td><td className="py-2">Datos de negocio y conversaciones</td></tr>
                  <tr><td className="py-2 pr-4">Vercel (EE.UU.)</td><td className="py-2 pr-4">Infraestructura web</td><td className="py-2">Logs técnicos</td></tr>
                  <tr><td className="py-2 pr-4">Supabase (EE.UU.)</td><td className="py-2 pr-4">Autenticación</td><td className="py-2">Email y datos de cuenta</td></tr>
                  <tr><td className="py-2 pr-4">Make.com (EE.UU.)</td><td className="py-2 pr-4">Automatización</td><td className="py-2">Datos necesarios para los flujos</td></tr>
                  <tr><td className="py-2 pr-4">Meta (WhatsApp)</td><td className="py-2 pr-4">Canal de mensajería</td><td className="py-2">Mensajes del bot</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              Todos estos proveedores cuentan con políticas de privacidad propias y estándares de seguridad adecuados.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              5. ¿Cuánto tiempo guardamos los datos?
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><strong className="text-white">Datos de cuenta:</strong> durante la vigencia del servicio más 1 año adicional.</li>
              <li><strong className="text-white">Conversaciones del bot:</strong> según el plan contratado (historial de 30 a 90 días activos).</li>
              <li><strong className="text-white">Logs técnicos:</strong> 90 días.</li>
              <li><strong className="text-white">Datos de citas:</strong> 2 años desde la fecha de la cita.</li>
            </ul>
            <p className="mt-3">
              Al cancelar el servicio, el Cliente tiene 30 días para exportar sus datos.
              Transcurrido ese plazo, los datos se eliminan de forma segura.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              6. Derechos de los titulares
            </h2>
            <p className="mb-3">
              De conformidad con la Ley N° 19.628, usted tiene derecho a:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><strong className="text-white">Acceder</strong> a sus datos personales que Alkia trate.</li>
              <li><strong className="text-white">Rectificar</strong> datos incorrectos o desactualizados.</li>
              <li><strong className="text-white">Cancelar</strong> (eliminar) sus datos cuando ya no sean necesarios.</li>
              <li><strong className="text-white">Oponerse</strong> al tratamiento de sus datos en determinadas circunstancias.</li>
            </ul>
            <p className="mt-3">
              Para ejercer estos derechos, envíe un email a{" "}
              <a href="mailto:soporte@alkia.cl" className="underline underline-offset-2" style={{ color: "#10b981" }}>
                soporte@alkia.cl
              </a>{" "}
              con asunto &quot;Derechos ARCO&quot; indicando su nombre y la solicitud.
              Responderemos en un plazo máximo de 15 días hábiles.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              7. Seguridad de los datos
            </h2>
            <p className="mb-3">
              Alkia implementa medidas técnicas y organizativas para proteger los datos, incluyendo:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Transmisión cifrada mediante HTTPS/TLS.</li>
              <li>Acceso restringido por roles (solo personal autorizado).</li>
              <li>Tokens de API almacenados de forma segura.</li>
              <li>Monitoreo de accesos anómalos.</li>
            </ul>
            <p className="mt-3">
              Sin embargo, ningún sistema es 100% seguro. En caso de una brecha de seguridad que
              afecte sus datos, le notificaremos en el menor tiempo posible.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              8. Cookies
            </h2>
            <p>
              El panel web (panel.miasistia.cl) utiliza cookies esenciales para la autenticación
              y funcionamiento básico del servicio. No utilizamos cookies de publicidad ni de
              seguimiento de terceros.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              9. Transferencias internacionales
            </h2>
            <p>
              Algunos de nuestros proveedores operan fuera de Chile (principalmente en Estados Unidos).
              Al usar Alkia, usted acepta que sus datos puedan ser transferidos y procesados en
              dichos países, los cuales pueden tener normativas de protección de datos distintas a las chilenas.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              10. Cambios a esta política
            </h2>
            <p>
              Podemos actualizar esta Política en cualquier momento. Los cambios relevantes serán
              notificados por email con al menos 15 días de anticipación.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              11. Contacto
            </h2>
            <p>
              Para consultas sobre privacidad o ejercer sus derechos:
            </p>
            <p className="mt-2">
              <strong className="text-white">Email:</strong>{" "}
              <a href="mailto:soporte@alkia.cl" className="underline underline-offset-2" style={{ color: "#10b981" }}>
                soporte@alkia.cl
              </a>
              <br />
              <strong className="text-white">Asunto sugerido:</strong> &quot;Privacidad&quot; o &quot;Derechos ARCO&quot;
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
