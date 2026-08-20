# Changelog

## 2026-08-20 — Estructura de planes 2026: Pro 2.500, Business 5.000

Ajuste de volúmenes de la estructura de planes post tarifas Meta Chile
(`DECISION_PLANES_PRECIOS_2026.md` §2). **Los precios no se tocan** — solo baja
el volumen incluido de Pro y Business. Es cambio de copy: la landing no tiene
lógica de planes.

### Qué cambió

Los tres valores viven en `components/Pricing.tsx` y en ningún otro lugar del
repo (verificado con grep sobre `interacc` en todo el árbol):

- **Pro:** `3.000 → 2.500` interacciones/mes (línea del array `PLANS`).
- **Business:** `10.000 → 5.000` interacciones/mes.
- **Banner Enterprise:** «¿Más de 10.000 interacciones al mes?» →
  «¿Más de **5.000** interacciones al mes?».

### Qué quedó igual (a propósito)

- **Todos los precios:** Micro `$39.900`, Starter `$79.900`, Pro `$139.900`,
  Business `$199.900`. La decisión baja volumen, no cambia tarifa.
- **Micro y Starter:** 400 y 1.000 interacciones, sin cambio, trials de 14d
  intactos.
- **Enterprise sigue sin precio ni bandas.** Por §6 del documento, la landing
  publica solo «conversemos»: no se menciona Enterprise 1/2 ni la banda
  $299.900-$499.900, que son internos. CTA sigue siendo «Solicitar reunión →»
  al `waLink` de siempre.
- **«Hasta 5.000 interacciones/mes»** en Business, en vez de redactar el «tope
  duro» del documento. El tope es real, pero «hasta» ya es el patrón de las
  otras 3 cards y el comportamiento al límite (§4) se comunica en el panel, no
  acá.
- **Colaboradores, features, tags, badges y CTAs:** sin tocar. Los
  colaboradores de la estructura nueva (0/1/3/5) ya coincidían con la landing.

### Lo que NO está en este repo

- **`lib/plan.ts` / `PLAN_CONFIGS`** no existe acá — `lib/` solo tiene
  `links.ts`. El gate técnico de límites vive en el dashboard, así que el
  cambio de §7 (Pro 2.500, Business 5.000 aplicados de verdad) es un PR aparte
  en ese repo. **Hasta que se haga, la landing promete menos de lo que el
  sistema deja consumir** — desalineado a favor del cliente, no al revés.
- **`/contratar`** también vive en el dashboard (`DASHBOARD_URL`); los botones
  de acá solo linkean con `?plan=`.
- No hay `/api/chat` ni prompts en este repo: el cambio no toca el hot-path.

### Pendientes del documento que esta entrada NO cubre

- **Recordatorios como feature «desde Starter» con su tope** (§6) — no existe
  hoy en las cards; es copy nuevo, no un número a corregir.
- **Hito de septiembre (§8):** Meta publica las tarifas definitivas de octubre
  a más tardar el 1-sep. Los precios se congelan ahí. Estos volúmenes son la
  estructura de trabajo.

### Verificación

- `npm run build` ✅ · `npm run lint` ✅ (1 warning preexistente de `<img>` en
  `app/layout.tsx`).
- Confirmado sobre el HTML prerenderizado del build: las 5 cifras salen
  400 / 1.000 / 2.500 / 5.000 y el banner en 5.000. Cero ocurrencias de
  «3.000 interacciones» o «10.000 interacciones» en el bundle.


## 2026-08-20 — Número de WhatsApp nuevo (`56985614833`)

El número anterior (`56981748168`) ya no existe. El bot de Alkia atiende ahora
en **+56 9 8561 4833**. Cambio de una línea: `WA_NUMBER` en `lib/links.ts` es
la única fuente del número, así que ningún componente se toca.

### Qué cambió

- **`lib/links.ts`:** `WA_NUMBER` pasa de `56981748168` a `56985614833`.

### Qué quedó igual (verificado en el bundle compilado)

- **Los 12 `wa.me` con mensaje precargado:** los 10 `d.tag` del Showroom
  (`?text=demo-salud`, `demo-medico`, `demo-despachos`, `demo-odonto`,
  `demo-estetica`, `demo-legal`, `demo-ecommerce`, `demo-stock`,
  `demo-restaurant`, `demo-hoteleria`), el de Enterprise y el de plantillas.
  Solo cambia el número: el `?text=` y su URL-encode quedan idénticos.
- **Los `wa.me` sin mensaje** de `WhatsAppButton` y `Footer`.
- **`waLink()`, el `CHANGELOG` histórico y todo lo demás:** sin tocar. La
  entrada del 2026-08-10 sigue citando el número viejo a propósito — es el
  registro de lo que era cierto en esa fecha, no se reescribe.

## 2026-08-10 — Logo v2: paleta corregida (`alkia-wordmark-paleta-v2.png`)

Segundo swap del logo el mismo día, sobre el que se mergeó en #14. Corrige la
paleta y, de paso, el halo. Los 4 assets se regeneran desde el archivo nuevo.

**Se creó `docs/SEGUIMIENTO_ALKIA.md`** — no existía en este repo (ni en el
árbol ni en el historial de git). Queda como el hilo del logo; este CHANGELOG
sigue siendo la fuente de detalle.

### Qué cambió

- **Degradado del cuerpo** ahora `#0c5b45 → #2d8368` — exactamente
  `--alkia-dark` y `--alkia` de `globals.css` convertidos de oklch a hex.
  Verificado: coinciden byte a byte con los tokens del sitio. El v1 se iba a
  `#5eea32`, un verde brillante fuera de paleta.
- **Destello de la "A" y aro/puntitos de la burbuja** en `#42d46c`, que es
  exactamente `--alkia-accent`, separados del degradado del cuerpo. Son el
  3.2% de los píxeles opacos.
- **El halo del v1 desapareció.** El anillo más externo pasó de RGB
  `(2, 32, 11)` — casi negro — a `(13, 92, 70)`, verde del cuerpo.
- **La máscara alpha es idéntica al v1, bit a bit** — v2 es el mismo recorte
  recoloreado, no uno nuevo. Arrastra el **alpha binario** (0% de píxeles
  semitransparentes) y los **13 píxeles sueltos** de 1‑2px en la zona
  transparente. Ninguno se ve al render; el recorte del ícono sí los filtra.
- Mismas dimensiones que el v1 (1487×534), así que **ningún componente se
  tocó** — los `height` ya estaban en el aspect ratio correcto.

> **⚠️ Sigue siendo provisional.** Deriva de una foto recortada, no del export
> vectorial original.

### Verificación

- `npm run build` ✅ · `npm run lint` ✅ (1 warning preexistente de `<img>`).
- Capturas del build de producción a DPR 2 en navbar, navbar con scroll,
  footer y el header de las 3 legales, más mobile a DPR 3.
- Revisado sobre blanco, `slate-50`, el `bg-white/90` + blur de la navbar con
  scroll y `#e4f6ee`: limpio en los cuatro.
- **Ojo:** el footer de esta landing es `bg-white`, no `#e4f6ee`. Ese hex es
  el token `--alkia-light`, que se usa en badges/chips (UseCases, Pricing,
  Problem, HowItWorks, Showroom) — el logo nunca se muestra encima.

### Hallazgos del audit (no tocados en este PR)

- **No hay `og:image` ni `twitter:image`** — `openGraph` en `layout.tsx` solo
  define `title`/`description`/`type`. Compartir alkia.cl va sin imagen.
- **No hay manifest** (`manifest.json`/`.ts`/`site.webmanifest`).
- **`public/logo.svg` es basura muerta:** dice **"✦ Asistia"** — el nombre
  viejo de la marca — en `#10b981`, fuera de paleta. Sin referencias, igual
  que los SVG del scaffold de Next (`file`, `globe`, `next`, `vercel`,
  `window`).
- **`public/brand/alkia-icon.png` sigue sin referencias** en el código.

---

## 2026-08-10 — Swap del logo Alkia (wordmark con transparencia real)

Reemplazo de los 4 assets de marca por el wordmark nuevo
(`alkia-wordmark-transparente.png`, 1487×534 RGBA, bajado de Drive → carpeta
Alkia). Los anteriores eran PNG **opacos con fondo blanco pintado** — se veían
bien solo porque el header y el footer también son blancos; sobre cualquier
fondo que no fuera `#fff` aparecía el recuadro.

> **⚠️ Asset provisional.** Este archivo **no** es el export vectorial
> original: sale de un recorte + remoción de fondo hecha a mano sobre una
> imagen generada. Reemplazar por el export vectorial (SVG/PNG desde el
> archivo de diseño) cuando esté disponible. Ver "Deuda del asset" abajo.

### Qué cambió

- **`public/brand/alkia-wordmark.png`** ← el archivo de Drive tal cual, sin
  reprocesar. 830×266 RGB opaco → 1487×534 RGBA con alpha real.
- **`public/brand/alkia-icon.png`** ← 512×512 transparente, recortado del
  **ícono de chat** del wordmark (componente aislado en x 958‑1156, y 20‑210)
  y centrado con 8% de margen. El archivo de Drive no trae versión cuadrada
  separada; letterboxear el wordmark completo en un cuadrado daba un asset
  ilegible, y el burbuja-chat es la única forma cuadrada que el propio
  wordmark contiene. **Este archivo no está referenciado por ningún
  componente** — ya era así antes del swap, se actualizó por consistencia.
- **`app/apple-icon.png`** ← 180×180, mismo recorte del ícono, **fondo blanco
  opaco** (iOS no respeta alpha en apple-touch-icons; el archivo anterior
  también era opaco).
- **`app/favicon.ico`** ← 16/32/48 desde el mismo recorte, con transparencia
  (el anterior era opaco). Ambos los toma Next por convención de `app/`, no
  hay ningún `<link rel="icon">` ni referencia en `layout.tsx` que tocar.
- **Los 2 íconos anteriores eran de la marca vieja** (el "spark" teal, no el
  verde actual) — el swap los alinea con el wordmark por primera vez.
- **`height` de los 5 `<Image>` del wordmark** ajustado al aspect ratio nuevo
  (2.78 vs 3.12 del anterior): Navbar `36 → 40`, Footer y las 3 páginas
  legales `31 → 34`. El `width` **no** se tocó, y los 5 usos ya traían
  `style={{ height: "auto" }}`, así que **el tamaño renderizado no cambia** —
  el ajuste solo corrige la caja que Next reserva para evitar CLS.

### Deuda del asset (medido, no estimado)

- **Halo oscuro en los bordes:** real y confirmado. El píxel más externo de
  todo el contorno promedia RGB `(2, 32, 11)` — casi negro — contra el verde
  de marca `(27, 148, 66)` del interior; el segundo anillo, `(19, 95, 46)`.
  Es un borde oscuro de ~2px sobre una imagen de 1487px de ancho.
- **A tamaño real no se nota.** El wordmark se renderiza a 112px (Navbar) y
  96px (Footer/legales) — un downscale de 13×, que deja el halo en fracción
  de píxel. Verificado con screenshots del build de producción a DPR 2
  (Navbar arriba, Navbar con scroll sobre `bg-white/90` + blur, header de
  `/terminos`, Footer): en todos se ve limpio. Recién al ampliar 4× aparece
  un borde apenas más oscuro, y solo en las letras claras (`ia`), donde
  contrasta con el verde brillante; en la mitad verde oscura (`Alk`) es
  invisible. **No bloquea el merge.**
- **Alpha binario:** 0% de píxeles semitransparentes (51.7% transparente,
  48.3% opaco). El recorte no tiene antialiasing propio; los bordes suaves
  del render final los produce el downscale del navegador. Se notaría si
  alguna vez se usa el wordmark a tamaño cercano al nativo.
- **~14 píxeles sueltos** (componentes de 1‑2px) flotando en la zona
  transparente, residuo de la remoción de fondo. Invisibles al render; se
  dejaron tal cual para no alterar el archivo que entregó el diseño. El
  recorte del ícono sí los excluye (se filtró por componente conexo).

### Qué NO se tocó

- **No había archivos `.jpg`** en el repo (ni en el árbol actual ni en el
  historial de git) — no hubo nada que borrar ni que dejar igual.
- Ningún `href`, `tag` de demo, número de WhatsApp, texto legal ni evento
  `fbq`. El swap es assets + 5 valores de `height`.

### Verificación

- `npm run build` ✅ · `npm run lint` ✅ (1 warning preexistente de `<img>` en
  `layout.tsx`, fuera de alcance).
- `grep` de `alkia-wordmark` / `alkia-icon` en todo el repo: los 5 usos del
  wordmark siguen apuntando a la misma ruta, `alkia-icon.png` sigue sin
  referencias.

---

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
