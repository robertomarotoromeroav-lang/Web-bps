# El código que ya hay en la tienda

Inventario del código a medida que se ha ido añadiendo a bpsperformance.com con
el tiempo, con **dónde está cada trozo** y qué hacer con él al aplicar el
rediseño.

Todo esto está sacado del HTML servido por la tienda el 17 de agosto de 2026,
recorriendo la home, el catálogo, una categoría, una ficha, el blog y contacto.
No es una lista de sospechas: son las reglas que se están aplicando hoy.

## Resumen

| # | Qué | Dónde | Qué hacer |
|---|---|---|---|
| 1 | Botones con borde degradado (`.btn-grad-custom`) | 3 sitios en la home + 1 en contacto | **Quitar** |
| 2 | «RINDE.» en azul dentro del titular del banner | Home → Banner con imagen → Título | **Quitar** |
| 3 | CSS propio en la sección de texto enriquecido | Home → Texto enriquecido → CSS personalizado | **Quitar** |
| 4 | Secciones personalizadas generadas con IA | 2 en la home, 1 en contacto | **Decidir una a una** |
| 5 | La fuente del tema es Space Grotesk | Configuración → Tipografía | **Cambiar a Inter** |

**Buena noticia:** categoría, ficha de producto, catálogo y blog **están
limpios**. Todo el código a medida está concentrado en la **home** y en
**contacto**. Lo único que aparece en todas las plantillas es un bloque vacío del
grupo del pie (`sections--28689033298267__blocks_HmdiyQ`), que no pinta nada.

---

## 1. Los botones con borde degradado

Es el efecto que buscabas. La clase se llama **`.btn-grad-custom`** y son unas 90
líneas de CSS **pegadas dentro del propio bloque**, en un `<style>` que va justo
al lado del enlace que lo usa. Por eso cuesta encontrarlo: no está en ningún
archivo del tema, sino repetido **cuatro veces**, una por botón.

Lo que hace:

- Borde degradado `linear-gradient(90deg, #00B2FF, #0057FF)`, con radio `20px`
- Relleno interior `#121212`, o `#FFFFFF` en la variante `.btn-grad-custom--fondo-claro`
- Al pasar el ratón, el relleno se vuelve transparente y asoma el degradado
- Texto de `18px` y peso `600`, con `padding: 14px 32px`

Está montado con dos pseudoelementos (`::before` para el degradado y `::after`
para tapar el centro), más `translate3d` y `backface-visibility` para forzar
aceleración por GPU.

**Dónde está cada copia:**

| Plantilla | Sección | Texto del botón | Enlace |
|---|---|---|---|
| Home | **Banner con imagen** (`image_banner_aAmiiK`) | `VER PRODUCTOS →` | `/collections/all` |
| Home | Sección de IA `1779030352a3a6d6ad` | `CONOCE LA TECNOLOGÍA →` | `/collections/all` |
| Home | **Imagen con texto** (`image_with_text_JArLRM`) | `VER PRESOTERAPIA BPS PRO →` | `/products/presoterapia-bps-plus` |
| Contacto | **Formulario de contacto** (`contact_form_hkdRLY`) | `Enviar` | *(envía el formulario)* |

> El cuarto es el que menos esperarías: **el botón «Enviar» del formulario de
> contacto** también lleva la clase degradada. Al quitarla recupera el botón
> nativo de Dawn, que es lo que quieres —y de paso deja de ser un `<a>` estilado
> como botón dentro de un formulario.

> ⚠️ **Un fallo que no tiene que ver con el rediseño, pero conviene arreglar de
> paso.** El tercer botón dice «VER PRESOTERAPIA BPS **PRO**» y enlaza al
> **PLUS** (`/products/presoterapia-bps-plus`). Manda a quien lo pulse a un
> producto distinto del que anuncia.

**Qué hacer: quitarlo.** Choca de frente con el sistema nuevo en cuatro cosas a
la vez —degradado, radio de 20px, texto de 18px y peso 600— cuando el botón de
Hyperice es una píldora monocroma de 40 px de alto, radio `62.5rem`, texto de
14 px y peso 500. Convivir no es opción: son dos botones distintos en la misma
página.

En cada uno de los cuatro sitios:

1. Borra el bloque `<style>` completo, desde `.btn-grad-custom {` hasta el
   último `}`.
2. Cambia la clase del enlace:

   ```html
   <!-- antes -->
   <a href="/collections/all" class="btn-grad-custom">VER PRODUCTOS →</a>

   <!-- después -->
   <a href="/collections/all" class="button button--primary">Comprar ahora</a>
   ```

Con `button button--primary` el botón hereda ya todo: la píldora, el alto, la
tipografía y el hover. Y quita la flecha `→` del texto (ver §5 de la guía).

En el banner de la home, mejor todavía: **borra el bloque de HTML a medida y usa
el botón nativo de la sección**. El banner de Dawn ya trae dos botones
configurables, y así el texto y el enlace se editan desde el panel en vez de
tocando código.

---

## 2. La palabra en azul del titular del banner

Esto no es CSS: es **HTML escrito a mano en el campo del título**. El titular de
la home es literalmente esto:

```html
<h2 class="banner__heading inline-richtext hxl">
  RECUPERA.<br>
  <span style="color:#0080FF;">RINDE.</span><br>
  REPITE.
</h2>
```

Es decir, las mayúsculas están **escritas en mayúsculas** (no forzadas con CSS,
así que ninguna hoja de estilos las va a arreglar) y el azul es un
`<span style="color:#0080FF">` metido a mano.

**Dónde:** Personalizar → Home → **Banner con imagen** → **Título**.

**Qué hacer:** dejarlo en `Recupera. Rinde. Repite.`, sin `<span>` y sin
mayúsculas. Es el cambio que más transforma la percepción de la marca y el que
ninguna hoja de estilos puede hacer por ti — está en la §5 de la guía con el
resto de textos.

---

## 3. El CSS de la sección de texto enriquecido

La sección de texto enriquecido de la home (`rich_text_9BdQDE`) tiene su propio
**CSS personalizado**, con este contenido —los comentarios son los originales:

```css
/* --- INICIO DE NUESTRAS MODIFICACIONES --- */
.…-padding .rich-text__wrapper,
.…-padding .rich-text__blocks   { max-width: none !important; }
.…-padding .rich-text__blocks > *:first-child { color: #0080ff; }

@media screen and (max-width: 749px) {
  .…-padding .rich-text__blocks              { text-align: center !important; }
  .…-padding .rich-text__blocks > *:first-child { color: #0080ff !important; }
}
/* --- FIN DE NUESTRAS MODIFICACIONES --- */
```

**Dónde:** Personalizar → Home → sección **Texto enriquecido** → campo **CSS
personalizado** (abajo, en el panel de la sección).

**Qué hacer: borrarlo entero.** Dos motivos, y el segundo es el importante:

- El `color: #0080ff` es azul en un sitio donde el sistema nuevo pide negro.
- La regla de móvil lleva **`!important`**, así que **ganaría a la hoja nueva**.
  Si lo dejas, el primer párrafo seguirá azul y centrado en móvil por más CSS que
  añadamos, y costará entender por qué.

---

## 4. Las secciones personalizadas generadas con IA

Hay tres secciones cuyas clases llevan `aigenblock` en el nombre, señal de que se
crearon con el generador de bloques de Shopify. Traen **su propio sistema de
diseño**, y ahí está el problema:

| Clase | Sección | Qué trae |
|---|---|---|
| `.ai-tech-section-…aigenblock3879acf…` | Home → `1779030352a3a6d6ad` | Rejilla de 2 columnas con `gap: 60px`, contenedor a `max-width: 1200px`, `border-radius: 8px`, un rótulo con `text-transform: uppercase` |
| `.ai-info-multicolumn-…aigenblock7ca83b5…` | Home → `blocks_wKFLHw` | Tres columnas con `gap: 25px`, tarjetas con `border-radius: 8px` y fondo blanco propio |
| `.ai-info-multicolumn-…` (otra instancia) | Contacto → `17754325730b143d3f` | Lo mismo que la anterior, repetido |

La de tres columnas está **duplicada**: una copia en la home y otra en contacto,
cada una con su CSS. Si decides ajustarla en vez de sustituirla, acuérdate de que
hay que hacerlo dos veces.

Los choques concretos con el sistema nuevo:

- **Ancho:** `1200px` propio frente a los `1536px` del resto de la página. Se
  verán más estrechas que las secciones de al lado.
- **Radios:** `8px` frente a los `4px` de tarjeta del sistema.
- **Mayúsculas:** el rótulo de `.ai-tech-badge` fuerza `text-transform: uppercase`.
  Es el único sitio donde las versalitas vienen por CSS, y ahí sí se pueden
  quitar sin reescribir el texto.

**Qué hacer: decidirlo sección por sección**, y esto sí es decisión vuestra, no
mía. Dos caminos:

- **Sustituirlas por secciones nativas de Dawn** («Imagen con texto» y «Texto con
  iconos» hacen lo mismo). Es lo que recomienda la §4 de la guía para la home, y
  deja la página entera bajo un solo sistema.
- **Conservarlas y ajustarles el CSS**: cambiar `1200px` por `1536px`, `8px` por
  `4px` y quitar el `uppercase`. Menos trabajo ahora, pero se queda código a
  medida que habrá que mantener aparte.

Recomiendo lo primero para la home, que es la página que más se mira, y valorar
lo segundo en contacto.

---

## 5. La fuente del tema es Space Grotesk

El tema está sirviendo **Space Grotesk** en 400 y 700, no la *Assistant* que trae
Dawn de fábrica. Conviene saberlo por dos cosas:

- El cambio a **Inter** (§1 de la guía) es un cambio real y se va a notar en toda
  la tienda, no un ajuste cosmético.
- Space Grotesk tiene un carácter geométrico y bastante marcado. Inter es más
  neutra, que es justo lo que se busca para parecerse a *Suisse Intl*.

---

## Los tres azules en circulación

Aparecen **tres azules distintos** en la tienda, ninguno de ellos el del
logotipo:

| Color | Dónde |
|---|---|
| `#0080FF` | La palabra «RINDE.» del banner y el primer párrafo del texto enriquecido |
| `#00B2FF` → `#0057FF` | El degradado del borde de los botones |
| `#0B59F8` | El del logotipo — **el único que debe sobrevivir** |

El sistema nuevo es estrictamente monocromo y reserva el azul al logotipo. Los
dos primeros desaparecen al hacer los pasos 1 a 3 de este documento.

---

## Orden sugerido

Hazlo **antes** de pegar `bps-hyperice.css`, o te costará distinguir qué falla
por el código viejo y qué por el nuevo:

1. Quitar los cuatro `.btn-grad-custom` (§1)
2. Borrar el CSS de la sección de texto enriquecido (§3) — es el que lleva
   `!important` y el que más confusión daría después
3. Reescribir el titular del banner (§2)
4. Decidir qué hacer con las secciones de IA (§4)

Y **antes de tocar nada, duplica el tema**, como dice la guía.
