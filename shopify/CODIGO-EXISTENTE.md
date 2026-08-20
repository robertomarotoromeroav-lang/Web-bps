# El código que ya hay en la tienda

Inventario del código a medida que se ha ido añadiendo a bpsperformance.com con
el tiempo, con **dónde está cada trozo** y qué hacer con él al aplicar el
rediseño.

Sacado del HTML y del CSS que sirve la tienda: **34 páginas** —home, catálogo,
las cuatro categorías, las doce fichas, las tres páginas, el blog, el artículo,
el carrito y las seis políticas— y los **65 archivos** de `assets/` que carga el
tema.

## Resumen

| # | Qué | Dónde | Qué hacer |
|---|---|---|---|
| 1 | Botones con borde degradado (`.btn-grad-custom`) | 3 en la home + 1 en contacto, y un *snippet* del tema | **Quitar** |
| 2 | «RINDE.» en azul dentro del titular del banner | Home → Banner de imagen → Título | **Quitar** |
| 3 | CSS propio en la sección de texto enriquecido | Home → Texto enriquecido → CSS personalizado | **Quitar** |
| 4 | **CSS que redefine `body`, `h1`, `h2` y `.container`** | Página «Sobre nosotros» | **Quitar — es el más dañino** |
| 5 | **CSS muerto de un bloque de IA en las 32 páginas** | Final de `layout/theme.liquid` | **Quitar** |
| 6 | Secciones personalizadas generadas con IA | 2 en la home, 1 en contacto | **Decidir una a una** |
| 7 | La fuente del tema es Space Grotesk | Configuración → Tipografía | **Cambiar a Inter** |

## Los archivos de `assets/` están intactos

Esto se comprobó archivo por archivo, descargando los 65 que carga el tema y
comparándolos con los mismos archivos de **Dawn v15.4.1** sin tocar:

- **Cero** apariciones de los colores a medida (`#0080FF`, `#00B2FF`, `#0057FF`),
  de `btn-grad` o de `Space Grotesk` en ningún archivo del tema.
- El número de `!important` **coincide exactamente** en los 65.
- Todas las diferencias de bytes son de la **minificación** que Shopify aplica al
  servirlos: `::before` → `:before`, `translateX(0)` → `translate(0)`,
  `padding: 1.1rem 1.1rem` → `padding: 1.1rem`, `rgba(0,0,0,.5)` → `#00000080`,
  y comentarios y espacios fuera.

Conclusión: **no hay que restaurar ningún archivo de `assets/`**. Todo el código a
medida vive en el editor (bloques y CSS de sección), en `layout/theme.liquid` y en
un *snippet*.

> **Sí hay un archivo del tema creado a mano:** un comentario en el código de la
> página de contacto lo nombra —
> *«puedes copiar y pegar el bloque `<style>` completo de
> `boton-personalizado.liquid` aquí»*. Búscalo en **`snippets/boton-personalizado.liquid`**:
> es el que genera los botones degradados de la home.

---

## 1. Los botones con borde degradado

Es el efecto que buscabas. La clase se llama **`.btn-grad-custom`**:

- Borde degradado `linear-gradient(90deg, #00B2FF, #0057FF)`, con radio `20px`
- Relleno interior `#121212`, o `#FFFFFF` en la variante `.btn-grad-custom--fondo-claro`
- Al pasar el ratón, el relleno se vuelve transparente y asoma el degradado
- Texto de `18px` y peso `600`, con `padding: 14px 32px`

Montado con dos pseudoelementos (`::before` para el degradado, `::after` para
tapar el centro) y `translate3d` para forzar aceleración por GPU.

Está en el *snippet* **`snippets/boton-personalizado.liquid`**, que en la home se
renderiza **tres veces** —y cada vez repite las 90 líneas de CSS enteras—. En
contacto hay además **una copia distinta**, pegada a mano y ya divergida: le han
añadido `cursor: pointer` y `border: none`, y arranca con dos comentarios que
delatan el copiado:

```css
.btn-grad-custom {
  /* ... (todo el código de estilo que ya tienes en el otro snippet) ... */
  /* Para no duplicar, puedes copiar y pegar el bloque <style> completo
     de 'boton-personalizado.liquid' aquí */
```

**Dónde está cada uso:**

| Plantilla | Sección | Texto del botón | Enlace |
|---|---|---|---|
| Home | **Banner de imagen** (`image_banner_aAmiiK`) | `VER PRODUCTOS →` | `/collections/all` |
| Home | Sección de IA `1779030352a3a6d6ad` | `CONOCE LA TECNOLOGÍA →` | `/collections/all` |
| Home | **Imagen con texto** (`image_with_text_JArLRM`) | `VER PRESOTERAPIA BPS PRO →` | `/products/presoterapia-bps-plus` |
| Contacto | **Formulario de contacto** (`contact_form_hkdRLY`) | `Enviar` | *(envía el formulario)* |

> El cuarto es el que menos esperarías: **el botón «Enviar» del formulario de
> contacto** también lleva la clase degradada.

> ⚠️ **Un fallo ajeno al rediseño, pero conviene arreglarlo de paso.** El tercer
> botón dice «VER PRESOTERAPIA BPS **PRO**» y enlaza al **PLUS**. Manda a quien lo
> pulse a un producto distinto del que anuncia.

**Qué hacer: quitarlo.** Choca con el sistema nuevo en cuatro cosas a la vez
—degradado, radio de 20px, texto de 18px y peso 600— cuando el botón de Hyperice
es una píldora monocroma de 40 px de alto, radio `62.5rem`, texto de 14 px y peso
500.

En cada uso, cambia la clase y borra el `<style>`:

```html
<!-- antes -->
<a href="/collections/all" class="btn-grad-custom">VER PRODUCTOS →</a>

<!-- después -->
<a href="/collections/all" class="button button--primary">Comprar ahora</a>
```

Con `button button--primary` hereda píldora, alto, tipografía y hover. Y quita la
flecha `→` (ver §6 de la guía). Cuando no quede ningún uso, **borra también
`snippets/boton-personalizado.liquid`**.

En el banner de la home, mejor todavía: borra el bloque de HTML a medida y usa
**los dos botones nativos** de la sección, que ya vienen configurables.

---

## 2. La palabra en azul del titular del banner

No es CSS: es **HTML escrito a mano en el campo del título**:

```html
<h2 class="banner__heading inline-richtext hxl">
  RECUPERA.<br>
  <span style="color:#0080FF;">RINDE.</span><br>
  REPITE.
</h2>
```

Las mayúsculas están **escritas en mayúsculas** —así que ninguna hoja de estilos
las va a arreglar— y el azul es un `<span style>` metido a mano.

**Dónde:** Personalizar → Home → **Banner de imagen** → **Título**.

**Qué hacer:** dejarlo en `Recupera. Rinde. Repite.`, sin `<span>` y sin
mayúsculas. Está en la §6 de la guía con el resto de textos.

---

## 3. El CSS de la sección de texto enriquecido

La sección de texto enriquecido de la home (`rich_text_9BdQDE`) tiene su propio
**CSS personalizado** —los comentarios son los originales:

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
personalizado**, abajo en el panel.

**Qué hacer: borrarlo entero.** El `color: #0080ff` es azul donde el sistema pide
negro, y la regla de móvil lleva **`!important`**, así que **ganaría a la hoja
nueva**: el primer párrafo seguiría azul y centrado en móvil por más CSS que
añadiéramos, y costaría entender por qué.

---

## 4. El CSS de «Sobre nosotros» — el más dañino

La página **Sobre nosotros** lleva un `<style>` de 1.093 bytes que no estiliza
componentes: **redefine las etiquetas base**.

```css
/* Estilos básicos para la visualización - Shopify tendrá sus propios estilos */
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
       Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; }
.container { max-width: 800px; margin: 20px auto; padding: 0 20px; }
h1 { font-size: 2.5em; color: #111; }
h2 { font-size: 1.8em; color: #222; border-bottom: 2px solid #f0f0f0;
     padding-bottom: 10px; margin-top: 40px; }
p, li, tbody td:nth-child(2) { font-size: 1.1em; text-align: justify; }
strong { color: #000; }
table { width: 100%; border-collapse: collapse; margin-top: 20px; }
th, td { padding: 15px; border-bottom: 1px solid #ddd; }
th { background-color: #f9f9f9; text-align: left; }
.final-cta { text-align: center; margin-top: 50px; font-weight: bold; font-size: 1.2em; }
```

Su propio comentario explica de dónde viene: es el `<style>` de una página HTML
suelta, pegado junto al contenido sin quitarlo. «Shopify tendrá sus propios
estilos» era la intención; el `<style>` se quedó.

**Por qué es el peor de la lista:**

- **Cambia la `font-family` del `body`.** En esa página la tipografía del tema
  **no se aplica**: ni la Space Grotesk de ahora ni la Inter de después. Es la
  única página de la tienda que se ve con la fuente del sistema, y explica por qué
  nunca va a parecerse al resto por más ajustes que toques.
- **Redefine `h1` y `h2` en `em`**, saltándose la escala tipográfica completa.
- **Pone una línea gris bajo cada `h2`** (`border-bottom: 2px solid #f0f0f0`).
- **Justifica todos los párrafos y elementos de lista.** Hyperice alinea a la
  izquierda; el texto justificado abre calles blancas entre palabras.
- **Se apropia de `.container`**, un nombre de clase genérico, y lo limita a
  800 px.

**Dónde:** Personalizar → página **Sobre nosotros** → el bloque de contenido o el
Liquid personalizado que lo lleva.

**Qué hacer:** borrar el `<style>` completo y dejar solo el HTML del contenido
(los `<h2>`, los `<p>`, la tabla). El tema ya sabe cómo pintar todo eso.

---

## 5. El CSS muerto que va en las 32 páginas

Hay un bloque de 345 bytes que se sirve en **todas** las páginas del sitio:

```css
.ai-info-multicolumn__container-…aigenblock7ca83b5… {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 30px; width: auto; margin-left: 10px; margin-right: 10px;
}
.ai-info-multicolumn-…aigenblock7ca83b5… {
  display: block; width: 100%; max-width: 100%;
  padding: 30px 0; background-color: black;
}
```

Y **no estiliza nada**: en 31 de las 32 páginas no existe ni un elemento con esas
clases. Es CSS huérfano de un bloque que se borró o se movió.

**Dónde:** se emite **al final de `<body>`, fuera de todas las secciones**, justo
antes del widget de WhatsApp. Esa posición apunta a **`layout/theme.liquid`**:
alguien lo pegó ahí en vez de dentro de la sección.

**Qué hacer:** borrarlo. No cambia nada visualmente —no casa con ningún
elemento—, pero **el `background-color: black` es una bomba de relojería**: el día
que alguien reutilice ese bloque, se pintará negro sin motivo aparente.

---

## 6. Las secciones personalizadas generadas con IA

Tres secciones con `aigenblock` en las clases, del generador de bloques de
Shopify. Traen **su propio sistema de diseño**:

| Clase | Sección | Qué trae |
|---|---|---|
| `.ai-tech-section-…aigenblock3879acf…` | Home → `1779030352a3a6d6ad` | Rejilla de 2 columnas con `gap: 60px`, contenedor a `max-width: 1200px`, `border-radius: 8px`, un rótulo con `text-transform: uppercase` |
| `.ai-info-multicolumn-…aigenblock7ca83b5…` | Home → `blocks_wKFLHw` | Tres columnas con `gap: 25px`, tarjetas con `border-radius: 8px` y fondo blanco propio |
| `.ai-info-multicolumn-…` (otra instancia) | Contacto → `17754325730b143d3f` | Lo mismo, repetido |

Los choques con el sistema nuevo:

- **Ancho:** `1200px` propio frente a los `1536px` del resto. Se verán más
  estrechas que las secciones de al lado.
- **Radios:** `8px` frente a los `4px` de tarjeta del sistema.
- **Mayúsculas:** `.ai-tech-badge` fuerza `text-transform: uppercase`. Es el único
  sitio donde las versalitas vienen por CSS, así que ahí sí se pueden quitar sin
  reescribir el texto.

**Qué hacer: decidirlo sección por sección**, y esto sí es decisión vuestra:

- **Sustituirlas por secciones nativas de Dawn** («Imagen con texto» y
  «Multicolumna» hacen lo mismo). Deja la página entera bajo un solo sistema, y es
  lo que recomienda la §5 de la guía.
- **Conservarlas y ajustarles el CSS**: `1200px` → `1536px`, `8px` → `4px`, fuera
  el `uppercase`. Menos trabajo ahora, más que mantener después.

Recomiendo lo primero para la home, que es la que más se mira, y valorar lo
segundo en contacto.

---

## 7. La fuente del tema es Space Grotesk

El tema sirve **Space Grotesk** en 400 y 700, no la *Assistant* de fábrica.
Conviene saberlo por dos cosas:

- El cambio a **Inter** (§1 de la guía) se va a notar en toda la tienda.
- Space Grotesk tiene un carácter geométrico muy marcado. Inter es más neutra,
  que es justo lo que acerca a *Suisse Intl*.

Y recuerda que en «Sobre nosotros» **ninguna de las dos se aplica**, por el §4.

---

## Los tres azules en circulación

| Color | Dónde |
|---|---|
| `#0080FF` | La palabra «RINDE.» del banner y el primer párrafo del texto enriquecido |
| `#00B2FF` → `#0057FF` | El degradado del borde de los botones |
| `#0B59F8` | El del logotipo — **el único que debe sobrevivir** |

El sistema nuevo es estrictamente monocromo y reserva el azul al logotipo. Los
dos primeros desaparecen al hacer los pasos 1 a 3.

---

## Orden sugerido

Hazlo **antes** de pegar `bps-hyperice.css`, o no sabrás qué falla por el código
viejo y qué por el nuevo:

1. **Borrar el `<style>` de «Sobre nosotros»** (§4). El de mayor efecto: es el que
   deja una página entera fuera del sistema tipográfico.
2. **Borrar el CSS de la sección de texto enriquecido** (§3). Lleva `!important` y
   es el que más confusión daría después.
3. **Quitar los cuatro `.btn-grad-custom`** y, al final, el *snippet* (§1).
4. **Borrar el bloque muerto de `theme.liquid`** (§5).
5. **Reescribir el titular del banner** (§2).
6. **Decidir qué hacer con las secciones de IA** (§6).

Y **antes de tocar nada, duplica el tema**, como dice la guía.
