# Changelog

## 2026-08-05 — Rediseño de la landing (referencia Lovable)

Rediseño visual completo de la home y las páginas legales, ejecutado en PRs
pequeños y mergeables, cada uno con build + lint + preview de Vercel revisado
en móvil y desktop antes de aprobar. Referencia de diseño:
`12714068-REFERENCIA_LOVABLE_LANDING.md` (TanStack Router + Tailwind v4,
adaptado a este stack Next.js).

**PRs mergeados:** #5 (PR 0 — higiene) · #6 (PR 1 — tokens) · #7 (PR 2 — chrome)
· #8 (PR 3 — secciones) · #9 (PR 4 — Showroom) · #10 (PR 5 — Pricing + limpieza)
· #11 (PR 6 — legales) · #13 (filtro por categoría del Showroom, follow-up
post-cierre). #12 se cerró **sin mergear** — intento intermedio de layout del
Showroom, superado por #13 antes de llegar a revisión.

**El plan de 6 PRs quedó completo — PR 6 (legales) se retomó y mergeó el mismo
día, ya no está pospuesto.**

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
- **PR 6 — Legales:** restyle de `/terminos`, `/privacidad`,
  `/eliminacion-de-datos` — el wrapper `bg-[#0f172a]` (oscuro) pasó a
  `bg-white`, con textos, bordes y links migrados a los tokens `alkia-*`/
  `gray-*` claros. El header/footer de estas 3 páginas es **propio y
  simplificado** (logo + link a inicio, copyright) — decisión explícita de
  **no** reutilizar el `Navbar`/`Footer` reales del sitio, porque las
  páginas legales que Meta revisa para verificación de negocio deben quedar
  neutras: sin CTAs de venta, sin links circulares a sí mismas, sin el JS
  interactivo del Navbar. El contenido legal (numeración, montos, RUT,
  fechas, la tabla de proveedores de `/privacidad`) **no se tocó un solo
  carácter** — verificado con `git diff` línea por línea de los 3 archivos.
- **Filtro por categoría del Showroom (post-cierre):** el layout apilado de
  6 grupos de tamaños dispares (1, 3, 1, 1, 2, 2 cards) se veía descuadrado
  en el preview real — dos intentos de ajustar el grid/flex *dentro* de
  cada grupo no resolvían el problema de raíz. Se reemplazó por pills de
  categoría (`Todos` + las 6 categorías) que filtran una única grilla, así
  nunca hay más de un grupo visible a la vez y nunca una fila incompleta.
  `GROUPS` y los 10 `tag` no se tocaron — se derivan `ALL_DEMOS`/
  `CATEGORIES` a partir del array existente. El `fbq("track","ViewContent")`
  sigue disparándose únicamente en el click de cada card (decisión explícita:
  cambiar de categoría no cuenta como "vista" del contenido, para no inflar
  el volumen del evento ni redefinir su semántica sin decisión de negocio).

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
- **Contenido legal de las 3 páginas** (Términos, Privacidad, Eliminación de
  datos) — cero cambios de texto en el PR 6, solo restyle visual.

### Verificación de cierre (sobre `master`, post-merge de #11 y #13 — estado final)

- `npm run build` ✅ (incluye `tsc`) · `npm run lint` ✅ (0 errores, 1 warning
  preexistente de `<img>` en `layout.tsx`, fuera de alcance).
- `validate-demos.mjs` ✅ exit 0 — 11 tags en Airtable/`DEMO_TAGS`, 10 cards
  en la landing, `demo-rm` huérfana (demo fiel, esperado). Corrido en cada
  PR que tocó `Showroom.tsx` (PR 4, PR 5, filtro por categoría) — siempre
  exit 0, antes y después de cada cambio.
- `grep` de hex de marca (`#0d9373`, `#0b7d62`, `#096750`, `#35a487`) en todo
  el repo: **0 ocurrencias** — incluidas las 3 páginas legales, ya migradas
  en el PR 6.
- `grep` de clases `emerald-*` y de `--color-emerald-*` en `globals.css`:
  **0 ocurrencias** en todo el repo.
- 0 PRs abiertos en el repo — confirmado con `list_pull_requests` post-merge.
