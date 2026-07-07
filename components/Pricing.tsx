"use client";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function trackLead() {
  if (typeof window.fbq !== "undefined") window.fbq("track", "Lead");
}

export default function Pricing() {
  return (
    <section id="planes" className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-3 text-slate-900">Planes que crecen con tu negocio</h2>
          <p className="text-slate-500 text-lg">Todos incluyen panel completo, agendamiento y soporte. Sin costo de activacion.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6 items-start">

          {/* Micro */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200 flex flex-col shadow-sm hover:shadow-md transition-shadow">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Para empezar</div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-1">Micro</h3>
            <div className="flex items-end gap-1 mb-3">
              <span className="text-4xl font-extrabold text-slate-900">$39.900</span>
              <span className="text-slate-400 text-sm mb-1">/mes</span>
            </div>
            <p className="text-slate-500 text-sm mb-4">Para quienes atienden su negocio solos.</p>
            <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-5 w-fit">🎉 14 dias gratis</span>
            <ul className="space-y-2.5 text-sm text-slate-600 mb-7 flex-1">
              <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> 400 interacciones/mes</li>
              <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Solo administrador</li>
              <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Panel completo</li>
              <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Pedidos y agendamiento</li>
              <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Soporte por WhatsApp</li>
            </ul>
            <a href="https://panel.miasistia.cl/contratar?plan=micro"
               onClick={trackLead}
               className="block w-full py-3 text-center bg-white border-2 border-emerald-600 text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 transition text-sm">
              Comenzar gratis
            </a>
          </div>

          {/* Starter — destacado */}
          <div className="bg-emerald-700 rounded-2xl p-7 border-2 border-emerald-500 flex flex-col shadow-xl shadow-emerald-900/20 lg:-translate-y-2">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Mas popular</div>
              <span className="text-[11px] font-bold text-white/80 border border-white/25 px-2 py-0.5 rounded-full">⭐ Top</span>
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-1">Starter</h3>
            <div className="flex items-end gap-1 mb-3">
              <span className="text-4xl font-extrabold text-white">$79.900</span>
              <span className="text-emerald-300 text-sm mb-1">/mes</span>
            </div>
            <p className="text-emerald-200 text-sm mb-4">Para negocios con equipo pequeno que necesitan colaboracion.</p>
            <span className="inline-block bg-emerald-500/30 text-emerald-200 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/40 mb-5 w-fit">🎉 14 dias gratis</span>
            <ul className="space-y-2.5 text-sm text-emerald-100 mb-7 flex-1">
              <li className="flex items-center gap-2"><span className="text-emerald-300 font-bold">✓</span> 1.000 interacciones/mes</li>
              <li className="flex items-center gap-2"><span className="text-emerald-300 font-bold">✓</span> 1 colaborador</li>
              <li className="flex items-center gap-2"><span className="text-emerald-300 font-bold">✓</span> Panel completo</li>
              <li className="flex items-center gap-2"><span className="text-emerald-300 font-bold">✓</span> Pedidos y agendamiento</li>
              <li className="flex items-center gap-2"><span className="text-emerald-300 font-bold">✓</span> Soporte por WhatsApp</li>
            </ul>
            <a href="https://panel.miasistia.cl/contratar?plan=starter"
               onClick={trackLead}
               className="block w-full py-3 text-center bg-white text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 transition text-sm">
              Comenzar gratis
            </a>
          </div>

          {/* Pro */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200 flex flex-col shadow-sm hover:shadow-md transition-shadow">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Para crecer</div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-1">Pro</h3>
            <div className="flex items-end gap-1 mb-3">
              <span className="text-4xl font-extrabold text-slate-900">$139.900</span>
              <span className="text-slate-400 text-sm mb-1">/mes</span>
            </div>
            <p className="text-slate-500 text-sm mb-4">Para negocios con mayor volumen de mensajes y pedidos.</p>
            <span className="inline-block bg-slate-100 text-slate-500 text-xs font-bold px-3 py-1 rounded-full mb-5 w-fit">Pago adelantado</span>
            <ul className="space-y-2.5 text-sm text-slate-600 mb-7 flex-1">
              <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> 3.000 interacciones/mes</li>
              <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> 3 colaboradores</li>
              <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Panel completo</li>
              <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Google Calendar</li>
              <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Soporte prioritario</li>
            </ul>
            <a href="https://panel.miasistia.cl/contratar?plan=pro"
               onClick={trackLead}
               className="block w-full py-3 text-center bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition text-sm">
              Contratar ahora
            </a>
          </div>

          {/* Business */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200 flex flex-col shadow-sm hover:shadow-md transition-shadow">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Alto volumen</div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-1">Business</h3>
            <div className="flex items-end gap-1 mb-3">
              <span className="text-4xl font-extrabold text-slate-900">$199.900</span>
              <span className="text-slate-400 text-sm mb-1">/mes</span>
            </div>
            <p className="text-slate-500 text-sm mb-4">Para empresas con alto volumen y multiples agentes.</p>
            <span className="inline-block bg-slate-100 text-slate-500 text-xs font-bold px-3 py-1 rounded-full mb-5 w-fit">Pago adelantado</span>
            <ul className="space-y-2.5 text-sm text-slate-600 mb-7 flex-1">
              <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> 10.000 interacciones/mes</li>
              <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> 5 colaboradores</li>
              <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Panel completo</li>
              <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Google Calendar</li>
              <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Soporte dedicado</li>
            </ul>
            <a href="https://panel.miasistia.cl/contratar?plan=business"
               onClick={trackLead}
               className="block w-full py-3 text-center bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition text-sm">
              Contratar ahora
            </a>
          </div>
        </div>

        {/* Enterprise */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div>
            <div className="text-emerald-400 font-bold text-xs tracking-widest uppercase mb-2">A Medida</div>
            <h3 className="text-2xl font-extrabold text-white mb-2">Plan Enterprise</h3>
            <p className="text-slate-400 text-sm max-w-lg">Mas de 10.000 interacciones, multiples instancias, integraciones personalizadas. Diseñamos la solucion para tu operacion.</p>
          </div>
          <a href="https://wa.me/56981748168?text=Hola%2C%20me%20interesa%20el%20Plan%20Enterprise"
             target="_blank"
             onClick={trackLead}
             className="shrink-0 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-8 rounded-xl transition text-sm whitespace-nowrap">
            Solicitar reunion →
          </a>
        </div>
      </div>
    </section>
  );
}
