# El prompt para las secciones a medida

Quedan tres cosas del prototipo que Dawn no da de fábrica (la [parte 2](GUIA-SHOPIFY-PARTE-2.md) §D):
la tarjeta de categoría con icono y botón, la descripción corta en la tarjeta de
producto y el desplegable del formulario de contacto.

Este archivo es el **prompt** para encargarlas, escrito para que lo que salga
respete la configuración del tema en vez de traerse la suya. Es el problema que
ya tuvimos: el bloque «Diseñado para la élite» que generó la IA de Shopify
llegó con su propia fuente (Assistant, fija), su propio CSS de botón que ganaba
a la hoja del tema, su propio ancho máximo de 1400 px y colores escritos a mano
en `#121212`. Hubo que reescribirlo entero — está en
[`bloques/tecnologia.liquid`](bloques/tecnologia.liquid) con el detalle de los
siete cambios. **El prompt de abajo existe para cerrar esas siete puertas de
antemano.**

## Antes de copiarlo: a quién se lo das

| | La IA de Shopify (Shopify Magic) | Una IA que escribe archivos (Claude, Cursor…) |
|---|---|---|
| Qué produce | Un **bloque** dentro de una sección, con su `{% style %}` y su `{% schema %}` | Un archivo `sections/*.liquid` de verdad |
| Ancho de página | No usa `page-width`: se inventa un ajuste propio | Usa las clases del tema |
| Fuentes y colores | Tiende a fijarlos a mano aunque se le pida que no | Los toma de las variables si se le dice |
| Recomendado para | Retoques rápidos | **Las tres secciones de aquí** |

Para lo que queda **recomiendo la segunda vía**. Si acabas usando Shopify Magic,
pásale igualmente el prompt y después la lista de comprobación del final: por
experiencia, aunque se lo pidas, va a fijar algo a mano.

---

## 1. El prompt base

Esto es el contrato. Va **delante** de cualquiera de los tres encargos.
Cópialo tal cual.

```
CONTEXTO

Trabajas sobre la tienda Shopify de bpsperformance.com, con el tema DAWN 15.4.1
en español. La tienda tiene una hoja de estilos propia, bps-hyperice.css, que se
carga DESPUÉS de las de Dawn y que ya redefine: tipografía, cabecera, menú
móvil, botones, banner principal, tarjeta de producto, tarjeta de colección,
medios y formularios, galería de ficha, ritmo vertical, pie y multicolumna.

El diseño imita a hyperice.com/es-es. Sus valores son:

- Tipografía Inter. Titulares en peso 500, tracking -0.01em, interlineado corto.
  h1 clamp(45px, 4.51389vw, 65px) · h2 clamp(38px, 3.33333vw, 48px) ·
  h3 clamp(32px, 2.77778vw, 40px) · h5 24px · cuerpo 16px · secundario 14px.
- Colores: negro #000, blanco #fff, hueso #f7f5f5, gris de texto secundario
  #505050, líneas #dfdfdf. El azul #0b59f8 es EXCLUSIVO del logotipo: no
  aparece en ningún componente.
- Botones: píldora completa (radio 62.5rem), alto 40px, texto 14px peso 500,
  sin sombra. Sólido = fondo negro y letra blanca. Contorno = borde de 1px del
  color de la letra y fondo transparente.
- Radios: tarjeta 4px, medios 2px, campos de formulario 4px.
- Ancho de página 1536px, con 30px de margen lateral en escritorio y 15 en móvil.
- Ritmo vertical: 80px de relleno arriba y abajo en cada sección (Dawn lo escala
  solo a 60 en móvil), sin márgenes entre secciones.

REGLAS OBLIGATORIAS

Estas reglas están para que la sección herede la configuración del tema y siga
cambiando si mañana se cambia un ajuste en el editor. Incumplir cualquiera de
ellas invalida el resultado.

1. PROHIBIDO escribir a mano, en CSS o en atributos style: familias de fuente,
   tamaños de titular, colores, estilos de botón, ancho máximo de página y
   radios de botón o tarjeta. Todo eso lo pone el tema.

2. FUENTES: solo var(--font-heading-family) y var(--font-body-family), con sus
   var(--font-heading-weight), var(--font-body-weight), var(--font-heading-style)
   y var(--font-body-style). Nunca un nombre de fuente literal. Nunca un enlace
   ni un @import a Google Fonts ni a ninguna fuente externa.

3. COLORES: solo del esquema de color de la sección, con la sintaxis de Dawn:
   rgb(var(--color-foreground)), rgba(var(--color-foreground), 0.75),
   rgb(var(--color-background)), rgb(var(--color-button)),
   rgb(var(--color-button-text)). Nunca un hexadecimal.

4. TITULARES: usa las clases del tema —h0, h1, h2, h3, h4, h5— en el HTML.
   Nunca font-size en píxeles para un titular. El tamaño se ofrece, si hace
   falta, con un ajuste heading_size de tipo select igual que el de Dawn.

5. ANCHO: la clase page-width de Dawn. Nunca un ajuste de ancho máximo propio
   ni un max-width en píxeles.

6. BOTONES: <a class="button"> o <button class="button">, y class="button
   button--secondary" para el de contorno. CERO CSS de botón: ni relleno, ni
   radio, ni color, ni borde, ni :hover. Si el botón no se ve como el resto de
   la web, es que has escrito CSS que no debías.

7. RADIOS: var(--media-radius) para imágenes, var(--product-card-corner-radius)
   para tarjetas, var(--inputs-radius) para campos, var(--buttons-radius) para
   botones.

8. NADA de !important en ningún sitio.

9. RELLENO VERTICAL: usa el patrón exacto de Dawn, con el escalado a 0.75 en
   móvil:

   {%- style -%}
     .section-{{ section.id }}-padding {
       padding-top: {{ section.settings.padding_top | times: 0.75 | round: 0 }}px;
       padding-bottom: {{ section.settings.padding_bottom | times: 0.75 | round: 0 }}px;
     }
     @media screen and (min-width: 750px) {
       .section-{{ section.id }}-padding {
         padding-top: {{ section.settings.padding_top }}px;
         padding-bottom: {{ section.settings.padding_bottom }}px;
       }
     }
   {%- endstyle -%}

   Y en el schema, padding_top y padding_bottom como range de 0 a 100, paso 4,
   unidad px, con DEFAULT 80 (no 36, que es el de Dawn: nuestro ritmo son 80).

10. ESQUEMA DE COLOR: incluye un ajuste color_scheme con default "scheme-1", y
    aplícalo en el envoltorio con class="... color-{{ section.settings.color_scheme }} gradient",
    igual que hace Dawn.

11. NOMBRES DE CLASE: prefija todas las tuyas con bps- (por ejemplo
    bps-categoria__titulo). NO reutilices las clases de tarjeta de Dawn
    —card, card--card, card__content, card__heading, collection-list__item—
    porque bps-hyperice.css ya las estiliza y se pisarían.

12. ETIQUETAS DEL SCHEMA en español, escritas directamente en el JSON (no uses
    claves de traducción t:). Los ajustes de relleno se llaman «Arriba» y
    «Abajo» bajo un header «Relleno», como en Dawn.

13. ACCESIBILIDAD: los iconos decorativos con aria-hidden="true"; las imágenes
    con su alt; un solo h2 por sección y los títulos de tarjeta en h3.

14. IMÁGENES: usa el filtro image_url con srcset y loading="lazy", con width y
    height para que no baile el layout. Nunca una URL de imagen escrita a mano.

15. Incluye un bloque presets al final del schema para que la sección se pueda
    añadir desde el editor.

ENTREGA

Un solo archivo Liquid completo, listo para pegar en sections/. Empiézalo con un
{% comment %} de cuatro o cinco líneas que diga qué hace la sección y qué
ajustes ofrece. Comenta en el código solo lo que no se explique solo.
No expliques nada fuera del archivo.
```

---

## 2. Encargo A · La tarjeta de categoría (§D-2)

Es la que más se nota, porque está en la portada. Pega el prompt base y detrás
esto:

```
ENCARGO

Crea la sección «Categorías BPS» (archivo sections/bps-categorias.liquid).

Reproduce la rejilla de categorías de la portada del prototipo. Ahora mismo se
intenta con la «Lista de colecciones» de Dawn, que no admite ni icono ni botón:
eso es justo lo que esta sección tiene que resolver.

CABECERA DE LA SECCIÓN
- Titular (inline_richtext), a la izquierda. Por defecto: «Recuperación,
  rendimiento y resultados».
- Un enlace opcional a la derecha del titular, en la misma línea, con etiqueta y
  URL. Por defecto «Ver todo» con una flecha →. Usa class="button
  button--tertiary" para que salga como enlace subrayado del sistema.
- En móvil el enlace baja debajo del titular.

REJILLA
- 2 columnas en escritorio, 1 en móvil. Ajuste «Columnas» con opciones 1 y 2.
- Hueco entre tarjetas: var(--grid-desktop-horizontal-spacing) y
  var(--grid-desktop-vertical-spacing).

BLOQUE «Categoría», hasta 8, con estos ajustes:
- Colección (collection)
- Imagen (image_picker). Si está vacía, usa la de la colección.
- Icono (image_picker), pensado para un SVG de línea
- Título (text). Si está vacío, el de la colección
- Descripción (text)
- Etiqueta del botón (text), por defecto «Ver» + el título
- El enlace del botón y de la imagen es la URL de la colección

MAQUETACIÓN DE LA TARJETA, medida sobre el prototipo:
- Móvil: columna. Imagen arriba en proporción 350/250, radio var(--media-radius),
  overflow hidden. Como fondo del hueco de la imagen, mientras carga, usa
  rgba(var(--color-foreground), 0.04): NO escribas el hueso a mano; si se quiere
  la sección entera en hueso se le pone el esquema de color 2 desde el editor.
  Debajo el cuerpo en columna, alineado a la izquierda, con 15px de hueco:
  icono, luego título y descripción juntos, luego botón. Hueco imagen-cuerpo:
  20px.
- Escritorio (min-width: 990px): rejilla de dos columnas 40% y 1fr, hueco 24px,
  alineadas al centro verticalmente. La imagen pasa a proporción 200/250.
- Icono: 22px de lado, color currentColor.
- Título: clase h5 del tema, con 5px de margen inferior.
- Descripción: 14px, rgba(var(--color-foreground), 0.75), text-wrap: pretty.
- La imagen hace un scale(1.02) al pasar el ratón por la tarjeta, con la
  transición del tema.
- El botón es un button--primary del sistema. No le pongas CSS.
```

## 3. Encargo B · La descripción en la tarjeta de producto (§D-1)

Esta **no es una sección nueva**: es un metacampo y tres líneas en un snippet que
ya existe. Conviene hacerlo así y no con una sección, porque la tarjeta se pinta
en la portada, en las colecciones, en el buscador y en los productos
relacionados, y todos usan el mismo snippet.

```
ENCARGO

En la tienda hay que enseñar una descripción corta bajo el título en la tarjeta
de producto —una línea como «Recuperación muscular profesional para piernas»—.
La tarjeta de Dawn no tiene ese campo.

1. Dime los pasos exactos para crear en el admin de Shopify una definición de
   metacampo de producto: espacio de nombres y clave custom.descripcion_corta,
   de tipo texto de una línea, con límite de unos 90 caracteres.

2. Modifica snippets/card-product.liquid para pintarlo justo DEBAJO del título
   de la tarjeta y ENCIMA del precio, solo cuando el metacampo tenga valor.
   Envuélvelo en <p class="bps-card__descripcion">.

3. Dame las reglas CSS para añadir a bps-hyperice.css: 14px,
   rgba(var(--color-foreground), 0.75), interlineado 1.4, y que no se muestre en
   las tarjetas de artículo del blog.

Muéstrame el fragmento de card-product.liquid con tres líneas de contexto antes
y después, para que sepa exactamente dónde va, y avísame si el archivo de la
tienda no coincide con el de Dawn 15.4.1 de fábrica.
```

⚠️ `snippets/card-product.liquid` lo usa media tienda. Si lo tocas, apúntalo en
[`ARCHIVOS-MODIFICADOS.md`](ARCHIVOS-MODIFICADOS.md) y guarda antes la copia de
fábrica, igual que se hizo con los otros cuatro archivos.

## 4. Encargo C · El desplegable del formulario (§D-3)

Este ya está resuelto: el Liquid está escrito en la
[parte 2 §G-2](GUIA-SHOPIFY-PARTE-2.md#g-2-contacto--página-con-plantilla-pagecontact)
y son cinco líneas. Solo necesitas un prompt si además quieres las dos columnas
del prototipo:

```
ENCARGO

Crea la sección «Contacto BPS» (sections/bps-contacto.liquid) con el formulario
y una columna lateral, porque Dawn apila las secciones y el prototipo las pone
al lado.

- Escritorio (min-width: 990px): dos columnas, la del formulario de 520px y la
  lateral ocupando el resto, con 72px de hueco. En móvil, una debajo de otra.
- El formulario, copiado del de sections/contact-form.liquid de Dawn 15.4.1 para
  no perder ni el envío ni los mensajes de error ni el foco al enviar, con los
  campos Nombre, Correo electrónico, un desplegable «¿Qué te interesa?» y
  Mensaje. El teléfono de Dawn no lo pongas. Las opciones del desplegable:
  Presoterapia, Terapia de luz roja, Recuperación fría, Liberación muscular,
  Recovery, Equipar un centro o clínica.
- La columna lateral, con bloques: Leyenda, Título, Texto, Lista de enlaces
  (hasta 5, con etiqueta y URL) y Botón.
- Los campos usan las clases de formulario de Dawn —field, field__input,
  select__select— para que hereden el radio y el borde de los ajustes del tema.
  No les pongas CSS propio.
```

---

## 5. Lista de comprobación

Cuando te devuelvan el archivo, antes de subirlo. Los cinco primeros son los que
falló el bloque de la IA, así que empieza por ahí.

| | Qué buscar | Cómo |
|---|---|---|
| 1 | Ninguna fuente escrita a mano | Busca `font-family` en el archivo: solo debe aparecer con `var(--font-` |
| 2 | Ningún color escrito a mano | Busca `#`: no debe haber hexadecimales en el CSS |
| 3 | Ningún CSS de botón | Busca `button`: solo en el HTML como clase, nunca como selector CSS |
| 4 | Ningún ancho propio | Busca `max-width`: no debe fijar el ancho de página. Debe estar la clase `page-width` |
| 5 | Ningún titular en píxeles | Busca `font-size`: no debe aparecer sobre un titular |
| 6 | Sin `!important` | Busca `!important`: cero resultados |
| 7 | Sin fuentes externas | Busca `fonts.googleapis`, `@import`, `<link`: cero resultados |
| 8 | Relleno con el patrón de Dawn | Debe estar el `times: 0.75` y el `@media screen and (min-width: 750px)` |
| 9 | Relleno por defecto a 80 | En el schema, `"default": 80` en `padding_top` y `padding_bottom` |
| 10 | Esquema de color aplicado | `color-{{ section.settings.color_scheme }} gradient` en el envoltorio |
| 11 | Clases propias prefijadas | Todas empiezan por `bps-`, y ninguna se llama `card`, `card__content` ni `collection-list__item` |
| 12 | Se puede añadir desde el editor | Debe existir el bloque `presets` al final del schema |

Y después, en la vista previa del tema:

- [ ] El botón de la sección se ve **igual** que los del resto de la web: píldora, 40px de alto, texto de 14px
- [ ] Cambia el esquema de color de la sección en el editor: los textos y el fondo deben cambiar con él
- [ ] El titular tiene el mismo tamaño que los de las demás secciones
- [ ] Los márgenes laterales cuadran con los de la sección de arriba y la de abajo
- [ ] En móvil, el relleno vertical es 60px, no 80
