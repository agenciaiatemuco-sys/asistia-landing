# Seguimiento Alkia — assets de marca (landing pública, alkia.cl)

Historial de los assets de marca de este repo. El detalle de cada PR (y del
resto de los cambios de la landing) vive en `CHANGELOG.md`; este archivo es
solo el hilo del logo.

> **Nota:** este archivo se creó el 2026-08-10. Antes no existía en este repo
> — ni en el árbol ni en el historial de git. El seguimiento del logo estaba
> en `CHANGELOG.md`, que sigue siendo la fuente de detalle.

## Estado actual

| Archivo | Dimensiones | Origen | Quién lo usa |
|---|---|---|---|
| `public/brand/alkia-wordmark.png` | 1487×534 RGBA | `alkia-wordmark-paleta-v2.png` (Drive → Alkia) | Navbar, Footer, y el header de las 3 páginas legales — 5 usos |
| `public/brand/alkia-icon.png` | 512×512 RGBA | recorte del ícono de chat del wordmark | **nadie** — sin referencias en el código |
| `app/apple-icon.png` | 180×180, fondo blanco opaco | mismo recorte | Next, por convención de `app/` |
| `app/favicon.ico` | 16/32/48 RGBA | mismo recorte | Next, por convención de `app/` |

**⚠️ Los cuatro son assets provisionales.** Derivan de una foto recortada, no
del export vectorial original. Reemplazar los cuatro cuando esté el export
desde el archivo de diseño.

## Historial

### 2026-08-10 — v2: paleta corregida (`alkia-wordmark-paleta-v2.png`)

Segundo swap, el mismo día. Corrige la paleta del v1 y, de paso, el halo.

- **Degradado del cuerpo** ahora `#0c5b45 → #2d8368`, que son exactamente
  `--alkia-dark` y `--alkia` de `app/globals.css` convertidos de oklch a hex.
  Verificado: los dos coinciden byte a byte con los tokens del sitio.
- **Destello de la "A" y aro/puntitos de la burbuja** en `#42d46c`, que es
  exactamente `--alkia-accent`. Separados del degradado del cuerpo para no
  perder contraste. Son el 3.2% de los píxeles opacos de la marca.
- **El halo oscuro del v1 desapareció.** El anillo más externo pasó de RGB
  `(2, 32, 11)` — casi negro — a `(13, 92, 70)`, que ya es verde del cuerpo.
- **La máscara alpha es idéntica al v1, bit a bit.** O sea: v2 es el mismo
  recorte recoloreado, no un recorte nuevo. Por eso arrastra dos cosas del
  v1: **alpha binario** (0% de píxeles semitransparentes, sin antialiasing
  propio) y **13 píxeles sueltos** de 1‑2px flotando en la zona transparente.
  Ninguna de las dos se ve al render; el recorte del ícono sí filtra los
  píxeles sueltos.
- Dimensiones iguales al v1 (1487×534), así que **no hubo que tocar ningún
  componente** — los `height` ya estaban en el aspect ratio correcto.

Verificado sobre los fondos reales de la landing: blanco (navbar, footer, las
3 legales), `slate-50`, el `bg-white/90` + blur de la navbar con scroll, y
`#e4f6ee`. En los cuatro se ve limpio.

### 2026-08-10 — v1: transparencia real (PR #14, mergeado)

`alkia-wordmark-transparente.png`. Primer swap. Lo que resolvió:

- Los PNG anteriores eran **opacos con fondo blanco pintado** — se veían bien
  solo porque el header y el footer son blancos.
- `favicon.ico` y `apple-icon.png` **todavía eran de la marca vieja** (el
  "spark" teal, no el verde actual). Este swap los alineó con el wordmark por
  primera vez.
- Se ajustó el `height` de los 5 `<Image>` al aspect ratio nuevo (2.78 vs
  3.12): Navbar `36 → 40`, Footer y las 3 legales `31 → 34`. Como los 5 ya
  traían `style={{ height: "auto" }}`, el tamaño renderizado no cambió — solo
  corrige la caja que Next reserva, para evitar CLS.

Su problema conocido, corregido en el v2: un halo casi negro de ~2px en todo
el contorno, y un degradado que se iba a verde brillante fuera de paleta.

## Pendientes

- **Reemplazar por el export vectorial** cuando esté. Se va el alpha binario,
  los píxeles sueltos y cualquier resto de halo.
- **`public/brand/alkia-icon.png` no lo usa nadie.** Se mantiene actualizado
  por consistencia, pero o se le da un uso o se borra.
- **No hay `og:image` ni `twitter:image`.** El `openGraph` de `app/layout.tsx`
  solo define `title`, `description` y `type`, así que las veces que alguien
  comparte alkia.cl en WhatsApp o redes, el enlace va sin imagen. Fuera del
  alcance de este PR, pero es el lugar natural para el wordmark.
- **`public/logo.svg` es basura muerta:** un SVG de texto que dice
  **"✦ Asistia"** — el nombre viejo de la marca — en `#10b981`, un verde que
  no está en la paleta. No lo referencia nadie. Junto a él quedan los SVG del
  scaffold de Next (`file`, `globe`, `next`, `vercel`, `window`), también sin
  referencias.
