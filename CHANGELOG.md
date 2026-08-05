# Changelog

## 2026-08-05 — Rediseño de la landing (referencia Lovable)

Rediseño visual completo de la home, ejecutado en 6 PRs pequeños y mergeables,
cada uno con build + lint + preview de Vercel revisado en móvil y desktop antes
de aprobar. Referencia de diseño: `12714068-REFERENCIA_LOVABLE_LANDING.md`
(TanStack Router + Tailwind v4, adaptado a este stack Next.js).

**PRs mergeados:** #5 (PR 0 — higiene) · #6 (PR 1 — tokens) · #7 (PR 2 — chrome)
· #8 (PR 3 — secciones) · #9 (PR 4 — Showroom) · #10 (PR 5 — Pricing + limpieza).

**PR 6 (restyling de las páginas legales — `/terminos`, `/privacidad`,
`/eliminacion-de-datos`) queda pospuesto, sin fecha.**

### Qué cambió

- **PR 0 — Higiene:** eliminado el `WhatsAppButton` duplicado (se renderizaba
  en `layout.tsx` y en `page.tsx` a la vez), borrado `Comparison.tsx` (código
  muerto), centralizados `WA_NUMBER`/`DASHBOARD_URL`/`waLink()` en
  `lib/links.ts` como fuente única.
- **PR 1 — Tokens:** tokens de marca en oklch (`alkia`, `alkia-dark`,
  `alkia-light`, `alkia-accent`, `wa-header`, `wa-bubble`, `wa-canvas`,
  `gradient-alkia`, `shadow-soft`) en `app/globals.css` vía `@theme inline`.
  Fuente Geist → Plus Jakarta Sans (`next/font`). Instalado `lucide-react`.
- **PR 2 — Chrome:** `Navbar` y `Footer` restyleados con los tokens nuevos e
  iconos lucide (hamburguesa mobile `Menu`/`X`).
- **PR 3 — Secciones:** `Hero`, `Problem`, `HowItWorks` (Steps), `UseCases`
  (Industries), `FAQ` y `CTAFinal` migrados al sistema de diseño — emojis →
  iconos lucide, `CTAFinal` adopta la tarjeta con gradiente de la referencia.
  **`Testimonials` se eliminó por completo** (decisión revertida a último
  momento: se había planeado mantenerla, se sacó del PR antes de mergear).
- **PR 4 — Showroom:** la sección de demos pasó de fondo oscuro
  (`bg-slate-900`) a tema claro, mismo lenguaje visual que el resto de la
  home (cards blancas, badge `alkia-light` + icono lucide por rubro).
- **PR 5 — Pricing + limpieza:** los 4 planes (Micro/Starter/Pro/Business) +
  bloque Enterprise migrados a tokens `alkia-*` (Starter destacado en verde
  sólido). Limpieza final: retirado el override `--color-emerald-400/500/
  600/700` de `globals.css` (ya no queda ningún componente usando clases
  `emerald-*`), y los hex de marca inline restantes (`Hero`, `HowItWorks`,
  `.gradient-text`, `.hero-glow`) migrados a `var(--alkia)` / tokens. De paso
  se corrigieron tildes faltantes detectadas en auditoría (`FAQ`, `UseCases`,
  `Showroom` — solo texto, ningún `tag`/`href` tocado).

### Qué quedó igual (decisión explícita, verificado en cada PR)

- **Logo:** el PNG wordmark real (`/brand/alkia-wordmark.png`) en vez del SVG
  de la referencia.
- **Número de WhatsApp real** (`56981748168`): una sola fuente
  (`lib/links.ts`), nunca duplicado.
- **Todos los `href`/deep-links:** `/login`, `/contratar`, `/contratar?plan=
  {micro,starter,pro,business}`, los `wa.me` de cada demo del Showroom
  (`d.tag`) y del Enterprise.
- **Tracking:** `fbq("track","Lead")` en los 5 CTAs (Navbar, Hero, Pricing ×4,
  CTAFinal) y `fbq("track","ViewContent", {content_name, content_category:
  "demo"})` en las 10 cards del Showroom — verificados en el bundle JS
  compilado en cada PR, sin cambios.
- **Los 3 links legales** (Términos, Privacidad, Eliminación de datos) +
  `soporte@alkia.cl` + WhatsApp en el Footer.
- **Los 4 IDs de ancla:** `#como-funciona`, `#showroom`, `#planes`, `#faq`
  (no se adoptaron los IDs de la referencia).
- **Las 3 fuentes de verdad de las demos** (Airtable `[DEMO] Plantillas` ↔
  `DEMO_TAGS` en `dashboard-saas` ↔ cards de `Showroom.tsx`): los 10 `tag`
  del Showroom no se tocaron en ningún PR. `validate-demos.mjs` se corrió en
  cada PR que tocó `Showroom.tsx` (baseline antes de PR 4, gate obligatorio
  antes/después en PR 4, y de nuevo en PR 5) — siempre exit 0.
- **El mockup animado de WhatsApp del Hero** — no se reemplazó por el
  estático de la referencia.
- **Enterprise:** se mantuvo completo, con sus 4 planes activos + el bloque
  de contacto a medida (no se simplificó a un tier separado).

### Verificación de cierre (sobre `master`, post-merge del PR 5)

- `npm run build` ✅ (incluye `tsc`) · `npm run lint` ✅ (0 errores, 1 warning
  preexistente de `<img>` en `layout.tsx`, fuera de alcance).
- `validate-demos.mjs` ✅ exit 0 — 11 tags en Airtable/`DEMO_TAGS`, 10 cards
  en la landing, `demo-rm` huérfana (demo fiel, esperado).
- `grep` de hex de marca (`#0d9373`, `#0b7d62`, `#096750`, `#35a487`) en todo
  el repo: **0 ocurrencias** fuera de las 3 páginas legales (a propósito,
  diferidas al PR 6).
- `grep` de clases `emerald-*` y de `--color-emerald-*` en `globals.css`:
  **0 ocurrencias** en todo el repo.
