# Llevar el rediseño a bpsperformance.com

Plan de ejecución para aplicar en la tienda real lo que muestra el prototipo.

La tienda corre sobre **Shopify con el tema Dawn 15.4.1** (verificado en el HTML
de producción: `Shopify.theme = {"name":"Dawn","schema_version":"15.4.1"}`). Eso
es una buena noticia: buena parte se consigue **cambiando ajustes en el editor
de temas**, sin tocar código.

> **Antes de empezar:** Tienda online → Temas → ⋯ → **Duplicar**. Trabaja sobre
> la copia y publícala solo cuando esté validada. Así la tienda sigue vendiendo
> mientras tanto y puedes abandonar sin consecuencias.

## Orden recomendado

| Paso | Qué es | Dónde |
|---|---|---|
| 1 | Ajustes del tema | Editor, sin código |
| 2 | **Retirar el código antiguo** | Editor y código |
| 3 | Hoja de estilos y dos snippets | Código |
| 4 | Logotipo y favicon | Editor |
| 5 | Estructura de la home | Editor |
| 6 | Reescribir textos a caja baja | Editor |
| 7 | Fotografía | Encargo externo |
| 8 | Comprobar y publicar | — |

Los pasos 1 a 4 ya dan el 80 % del cambio visual. El 6 es el que más tiempo
come. El 7 es el único que no depende de vosotros.

**El paso 2 es nuevo y va antes de la hoja de estilos a propósito.** La tienda
lleva código a medida acumulado —botones con borde degradado, una palabra en azul
en el titular, CSS con `!important` en una sección— y si lo dejas puesto no
sabrás qué falla por lo viejo y qué por lo nuevo. Está inventariado, con su
ubicación exacta, en **[`CODIGO-EXISTENTE.md`](CODIGO-EXISTENTE.md)**.

---

## 1. Ajustes del tema

**Personalizar → Configuración.** Aquí está **todo** lo configurable de Dawn, con
el valor que hay que dejar en cada ajuste. Nombres, rangos y valores de fábrica
salen de `config/settings_schema.json` y de la traducción al español de la
etiqueta **v15.4.1**, así que son literalmente los que verás en pantalla.

Configuración tiene 21 apartados en este orden. Ojo, porque **varios no se
llaman como uno esperaría**:

> Logo · Colores · Tipografía · Diseño · Animaciones · Botones · Botones de
> variantes · **Entradas** *(= campos de formulario)* · Tarjetas de producto ·
> Tarjetas de colección · Tarjetas de blogs · Contenedores de contenido ·
> **Multimedia** *(= imágenes y vídeo)* · Menús desplegables y ventanas
> emergentes · Cajones · **Emblemas** *(= distintivos de oferta y agotado)* ·
> Información de marca · Redes sociales · Comportamiento de búsqueda · Formato
> de moneda · Carrito

### Regla que ahorra 40 ajustes

**Hyperice no usa sombras en ningún componente.** Nueve apartados tienen un
bloque **Sombra** con cuatro controles cada uno. En todos ellos, sin excepción:

> **Opacidad `0`** · Desalineación horizontal `0` · Desalineación vertical `0` ·
> Difuminar `0`

Con la opacidad a `0` los otros tres dan igual, así que basta con bajar esa. Las
tablas de abajo **ya no repiten el bloque Sombra**: dalo por hecho en todas.

Los apartados afectados: Botones, Botones de variantes, Entradas, Tarjetas de
producto, Tarjetas de colección, Tarjetas de blogs, Contenedores de contenido,
Multimedia, Menús desplegables, Cajones. Tres traen la opacidad a `10` de
fábrica —las tres familias de tarjetas—, así que esas hay que bajarlas a mano.

---

### Logo

| Ajuste | Valor | Nota |
|---|---|---|
| Logo | `logo-horizontal-white.svg` | Blanco, porque la cabecera es oscura. Ver §4 |
| Ancho | `200` | |
| Favicon | `favicon-512.png` | Recién generado. Hoy sigue el logotipo antiguo. Ver §4 |

### Colores

Dawn trae **cinco** esquemas de fábrica y los usa por defecto en sitios que no
son evidentes, así que hay que repasar los cinco. Cada uno tiene siete campos:

| Esquema | Fondo | Texto | Fondo de botón sólido | Etiqueta de botón sólido | Botón de contorno | Uso |
|---|---|---|---|---|---|---|
| **1** | `#FFFFFF` | `#000000` | `#000000` | `#FFFFFF` | `#000000` | Por defecto |
| **2** | `#F7F5F5` | `#000000` | `#000000` | `#FFFFFF` | `#000000` | Tarjeta de producto y secciones alternas |
| **3** | `#000000` | `#FFFFFF` | `#FFFFFF` | `#000000` | `#FFFFFF` | Bloques oscuros y emblemas |
| **4** | `#212121` | `#CBCBCB` | `#FFFFFF` | `#000000` | `#FFFFFF` | Pie de página |
| **5** | `#000000` | `#FFFFFF` | `#FFFFFF` | `#000000` | `#FFFFFF` | Ver aviso |

En los cinco, además:

- **Degradado de fondo:** quítalo. Hyperice usa planos de color puros.
- **Sombra:** el color da igual, porque la opacidad va a `0` en todas partes.

> **El esquema 5 viene azul `#334FB4` de fábrica**, y Dawn lo usa por defecto
> para el distintivo de «Oferta». Si no lo tocas, aparecerá una etiqueta azul
> sobre las tarjetas y romperá el monocromo, que es la regla más visible de todo
> el rediseño. Pásalo a negro como en la tabla —y aparte, en **Emblemas**, apunta
> el distintivo de oferta al esquema 3.

> El texto va en **`#000000` puro**, no en el `#121212` de fábrica.

### Tipografía

Se divide en **Títulos** y **Cuerpo**, cada uno con *Fuente* y *Escala*.

| Ajuste | Valor |
|---|---|
| Títulos → Fuente | **Inter** |
| Títulos → Escala | `100` % |
| Cuerpo → Fuente | **Inter**, la misma |
| Cuerpo → Escala | `100` % |

Hyperice usa *Suisse Intl* (de pago, Swiss Typefaces). Alternativas del catálogo
de Shopify, de más a menos parecida: **Inter** → **Helvetica Now** →
**Assistant**. Assistant es la que trae Dawn de fábrica: hay que cambiarla.

### Diseño

| Ajuste | Valor | Nota |
|---|---|---|
| Ancho de página | `1500` | Ver aviso |
| Espacio entre las secciones de la plantilla | `80` | De fábrica viene `0` |
| Cuadrícula → Espacio horizontal | `20` | |
| Cuadrícula → Espacio vertical | `20` | |

> **Por qué 1500 y no 1536.** El ancho de Hyperice es 1536 px, pero el control va
> de 1000 a 1600 **de 100 en 100**: 1536 no se puede elegir. Pon 1500 y el CSS
> fija el 1536 exacto. Evita `1600`: con ese valor concreto Dawn suma además
> 2 rem de margen propio.

### Animaciones

| Ajuste | Valor | Nota |
|---|---|---|
| Revelar secciones al desplazarse | **Sí** | El prototipo lo hace |
| Efecto hover | **Predeterminado** | Ni «Elevación vertical» ni «Elevación 3D»: Hyperice solo amplía la imagen un 2 %, sin mover la tarjeta |

### Botones

| Ajuste | Valor |
|---|---|
| Borde → Grosor | `1` |
| Borde → Opacidad | `100` % |
| Borde → Radio de esquina | `40` |

`40` es el máximo del control y es lo que da la píldora.

### Botones de variantes

Son los selectores de talla o color de la ficha.

| Ajuste | Valor |
|---|---|
| Borde → Grosor | `1` |
| Borde → Opacidad | `100` % |
| Borde → Radio de esquina | `40` |

### Entradas

Son los campos de formulario. **No se llama «Campos de formulario».**

| Ajuste | Valor | Nota |
|---|---|---|
| Borde → Grosor | `1` | |
| Borde → Opacidad | `15` % | El borde de Hyperice es `#DFDFDF`, que sobre blanco es un 13 % de negro. Con `100` saldría negro puro y pesaría demasiado |
| Borde → Radio de esquina | `4` | |

### Tarjetas de producto

| Ajuste | Valor |
|---|---|
| Estilo | **Tarjeta** |
| Relleno de imagen | `0` % |
| Alineación de texto | **Izquierda** |
| Esquema de color | **Esquema 2** (`#F7F5F5`) |
| Borde → Grosor | `0` |
| Borde → Opacidad | `0` % |
| Borde → Radio de esquina | `4` |

> En vuestra tienda **esto ya está así**. Compruébalo y sigue.

> La tarjeta de Hyperice **no es una imagen con el texto suelto debajo**: es una
> caja con fondo `#F7F5F5` y 4 px de radio, partida por una línea `#DFDFDF`
> entre la imagen y el panel de texto. Por eso las secciones que muestran
> productos deben ir sobre **fondo blanco** (esquema 1): sobre el esquema 2 la
> tarjeta se funde con la sección y desaparece.

### Tarjetas de colección

| Ajuste | Valor |
|---|---|
| Estilo | **Estándar** ← *al contrario que las de producto* |
| Relleno de imagen | `0` % |
| Alineación de texto | **Izquierda** |
| Esquema de color | **Esquema 1** (blanco) |
| Borde → Grosor | `0` |
| Borde → Radio de esquina | `2` |

> No es un descuido. La tarjeta de categoría de Hyperice **no es una caja**: pone
> la imagen a un lado y el texto al otro. El CSS construye ese diseño a partir de
> `card--standard`; si eliges «Tarjeta» aquí, esas reglas no se aplican y las
> categorías salen como cajas de producto.

### Tarjetas de blogs

| Ajuste | Valor |
|---|---|
| Estilo | **Estándar** |
| Relleno de imagen | `0` % |
| Alineación de texto | **Izquierda** |
| Esquema de color | **Esquema 1** (blanco) |
| Borde → Grosor | `0` |
| Borde → Radio de esquina | `2` |

El listado del blog no lo cubre el CSS (ver el final de la guía), así que estos
valores son lo que lo acerca al prototipo sin escribir una línea.

### Contenedores de contenido

Son las cajas de texto sobre imagen de algunas secciones.

| Ajuste | Valor |
|---|---|
| Borde → Grosor | `0` |
| Borde → Opacidad | `0` % |
| Borde → Radio de esquina | `4` |

### Multimedia

Es el apartado de las imágenes y los vídeos. **No se llama «Medios».**

| Ajuste | Valor | Nota |
|---|---|---|
| Borde → Grosor | `0` | De fábrica viene `1`: hay que quitarlo. Las imágenes de Hyperice no llevan marco |
| Borde → Opacidad | `0` % | |
| Borde → Radio de esquina | `2` | |

### Menús desplegables y ventanas emergentes

| Ajuste | Valor |
|---|---|
| Borde → Grosor | `1` |
| Borde → Opacidad | `15` % |
| Borde → Radio de esquina | `4` |

### Cajones

| Ajuste | Valor | Nota |
|---|---|---|
| Borde → Grosor | `0` | El menú móvil va a fondo oscuro translúcido, sin línea. De fábrica viene `1` |
| Borde → Opacidad | `0` % | |

### Emblemas

Son los distintivos de «Oferta» y «Agotado». **No se llama «Distintivos».**

| Ajuste | Valor | Nota |
|---|---|---|
| Posición de las tarjetas | **Arriba a la izquierda** | De fábrica viene abajo a la izquierda; el prototipo lo pone arriba |
| Radio de esquina | `40` | Ya viene así |
| Esquema de color de distintivo de oferta | **Esquema 3** | De fábrica apunta al **5, que es azul** |
| Esquema de color de emblema de agotado | **Esquema 3** | Ya viene así |

### Información de marca

Alimenta el bloque de marca del pie. **Opcional**, pero si lo dejas vacío el pie
sale más pobre que el del prototipo.

| Ajuste | Valor |
|---|---|
| Titular | Una línea corta de marca, en caja baja |
| Descripción | Dos o tres líneas |
| Imagen | `logo-horizontal-white.svg` |
| Ancho de imagen | `160` |

### Redes sociales

Pon las URL reales de BPS en las redes que tengáis y **deja vacías las demás**:
Dawn solo dibuja el icono de las que tienen URL, así que una casilla vacía no
deja hueco.

### Comportamiento de búsqueda

| Ajuste | Valor |
|---|---|
| Sugerencias de búsqueda | **Sí** |
| Proveedor de producto | **No** |
| Precio del producto | **Sí** |

### Formato de moneda

| Ajuste | Valor | Nota |
|---|---|---|
| Códigos de moneda | **No** | De fábrica está activado y escribe «649,00 € EUR». Hyperice pone solo «649,00 €» |

### Carrito

| Ajuste | Valor | Nota |
|---|---|---|
| Tipo | **Notificación emergente** | Es lo que tenéis hoy. Ver aviso |
| Proveedor | **No** | |
| Nota del carrito | **No** | |
| Esquema de color | **Esquema 1** | |

> **Por qué no el carrito lateral.** Hyperice usa cajón, y por fidelidad sería lo
> suyo. Pero el cajón de carrito de Dawn **no lo toca esta hoja de estilos**, así
> que saldría blanco y de serie: cambiar a cajón empeoraría el resultado, no lo
> mejoraría. Déjalo en notificación hasta que se estilice.

---

## Lo que **no** está en Configuración

Tres cosas de este paso viven en **secciones**, no en Configuración. Es la causa
más habitual de buscar un ajuste y no encontrarlo — y el nombre no ayuda:

| Lo buscarías como | Se llama |
|---|---|
| Cabecera | **«Encabezado»** |
| Ficha de producto | **«Información de producto»** |
| Banner con imagen | **«Banner de imagen»** |
| Proporción de la imagen | **«Relación de aspecto de imagen»** |

Los tres ajustes clave:

- **Encabezado fijo → Siempre.** Está en la sección **Encabezado**, y es el
  **quinto ajuste**, justo debajo de «Tipo de menú». Hoy está en «Al desplazarse
  hacia arriba», que esconde la cabecera al bajar.
- **Diseño → Carrusel de miniaturas.** En la sección **Información de producto**,
  bajo «Multimedia». Hoy está en «Apilado», que es lo que deja las tres imágenes
  seguidas de arriba abajo.
- **Relación de aspecto de imagen → Cuadrado.** En cada sección que muestre
  productos. En Dawn no existe ninguna opción «personalizada»: solo *Adaptar a la
  imagen*, *Retrato* (125 %) y *Cuadrado* (100 %). El 92,31 % que corresponde a la
  proporción 13/12 lo fija `bps-hyperice.css`.

**Todos los ajustes de todas las secciones que hay que tocar están en
[`AJUSTES-SECCIONES.md`](AJUSTES-SECCIONES.md)**, con sus opciones completas, sus
valores de fábrica y el valor que debe quedar. Trece secciones, y ahí va también
un aviso que afecta a casi todas: **el relleno de sección hay que bajarlo a `0`**,
porque los 36 px que trae de fábrica se suman a los 80 del ajuste global y dejan
152 px entre secciones.

---

## 2. Retirar el código antiguo

Está todo en **[`CODIGO-EXISTENTE.md`](CODIGO-EXISTENTE.md)**: qué hay, en qué
sección vive y qué hacer con cada trozo. En resumen, y en este orden:

1. **Borrar el `<style>` de la página «Sobre nosotros»**. Es el de mayor efecto:
   redefine `body`, `h1`, `h2` y `.container`, y cambia la `font-family` del
   `body`, así que en esa página **la tipografía del tema no se aplica** — ni la
   de ahora ni la nueva.
2. **Borrar el CSS personalizado de la sección «Texto enriquecido»** de la home.
   Lleva `!important`, así que ganaría a la hoja nueva y dejaría el primer párrafo
   azul y centrado en móvil sin explicación aparente.
3. **Quitar los cuatro botones `.btn-grad-custom`** —borde degradado azul, radio
   de 20 px— del banner de la home, de la sección de tecnología, de «Imagen con
   texto» y del botón «Enviar» de contacto. Y al final, el *snippet* que los
   genera: `snippets/boton-personalizado.liquid`.
4. **Borrar el bloque de CSS muerto del final de `layout/theme.liquid`**, que se
   sirve en las 32 páginas y no estiliza nada.
5. **Reescribir el titular del banner**, que hoy es `RECUPERA.` /
   `<span style="color:#0080FF">RINDE.</span>` / `REPITE.` escrito a mano.
6. **Decidir qué hacer con las tres secciones generadas con IA**, que traen su
   propio ancho de 1200 px y radios de 8 px.

7. **Restaurar los cuatro archivos del tema que están modificados** y borrar el
   *snippet* del botón degradado. Están en
   **[`ARCHIVOS-MODIFICADOS.md`](ARCHIVOS-MODIFICADOS.md)**, con el Liquid exacto
   que debe quedar en cada uno, y los originales de Dawn en
   `dawn-original/`. **Esto no es opcional:** mientras el botón degradado siga en
   su sitio, ni los ajustes de Configuración ni la hoja de estilos le llegan,
   porque no lleva la clase `button`.

**Los archivos de `assets/` están intactos**: se compararon los 65 que carga el
tema contra Dawn v15.4.1 y no hay ni una edición. Lo modificado está en
`sections/`, en `snippets/` y en `layout/theme.liquid`.

---

## 3. Código

### 3a. La hoja de estilos

1. Tienda online → Temas → ⋯ → **Editar código**
2. `Assets` → **Añadir un archivo nuevo** → `bps-hyperice.css`, pega el contenido
3. En `layout/theme.liquid`, pega **esta línea** justo antes de `</body>`
   —**no** antes de `</head>`:

   ```liquid
   {{ 'bps-hyperice.css' | asset_url | stylesheet_tag }}
   ```

`layout/theme.liquid` es un archivo largo, pero solo tiene dos cierres que
importan: `</head>` sobre la línea 299 y `</body>` sobre la 375. La línea va en el
segundo. El final del archivo queda así —las tres últimas líneas son las de Dawn,
que ya estaban:

```liquid
    {%- if settings.cart_type == 'drawer' -%}
      <script src="{{ 'cart-drawer.js' | asset_url }}" defer="defer"></script>
    {%- endif -%}

    {{ 'bps-hyperice.css' | asset_url | stylesheet_tag }}   <-- aquí
  </body>
</html>
```

Es la misma línea que ya tienes puesta arriba: se trata de **cortarla de donde
está y pegarla aquí**, no de duplicarla. Junto a ella deben quedar los dos
`<script>` de §3b y §3c; el orden entre los tres es indiferente.

**Cómo comprobar que quedó bien:** abre la tienda, mira el código fuente
(Ctrl+U) y busca `bps-hyperice.css`. Tiene que aparecer **por debajo** de
`component-menu-drawer.css`. Si aparece por encima, sigue en el `<head>`.

> **Por qué al final del `<body>` y no en el `<head>`.** Dawn no carga el CSS de
> sus componentes en la cabecera del documento: lo va inyectando **dentro del
> cuerpo**, una etiqueta `<link>` por sección, a medida que las pinta. En la home
> son **veinte hojas** —entre ellas `component-menu-drawer.css`,
> `component-card.css`, `section-footer.css` y `section-image-banner.css`.
>
> Puestas después de la nuestra, y con la misma especificidad —una clase contra
> una clase—, **ganan por ir más abajo en el documento**. Medido: con la hoja en
> el `<head>`, el cajón del menú sale a 390 px de ancho y negro opaco; movida al
> final del `<body>`, sale a 343 px y negro al 80 %, que es lo que pide el diseño.
>
> Cargarla al final es exactamente lo que hace Dawn con sus propias hojas, así
> que no introduce ningún parpadeo que el tema no tenga ya.

**Alternativa sin editar código:** Personalizar → Configuración → **CSS
personalizado**. Es más rápida, pero ese campo lo inyecta Shopify por su cuenta y
no controlas en qué orden acaba, así que pueden repetirse los problemas de arriba.
Si la usas y algo no cambia, pásate al archivo del tema.

### 3b. Esconder la barra de anuncios al bajar

Sin esto la cabecera queda fija pero la barra de anuncios no se esconde.
En `layout/theme.liquid`, antes de `</body>`:

```html
<script>
  // Pasados 50px, sube el bloque superior el alto de la barra de anuncios.
  (function () {
    var root = document.documentElement
    var bar = document.querySelector('.announcement-bar, .utility-bar')
    if (!bar) return
    var hidden = false

    document.addEventListener('scroll', function () {
      var y = root.scrollTop || document.body.scrollTop
      if (y >= 50 && !hidden) {
        root.style.setProperty('--header-top-position', '-' + bar.offsetHeight + 'px')
        hidden = true
      } else if (y < 50 && hidden) {
        root.style.setProperty('--header-top-position', '0px')
        hidden = false
      }
    }, { passive: true })
  })()
</script>
```

### 3c. Cabecera transparente sobre las plantillas con imagen a sangre

En la home y en las colecciones que abren con imagen a sangre, la cabecera no
debe taparla. Junto al script anterior:

```html
<script>
  // Marca las plantillas que abren con imagen a sangre y avisa al dejarla atrás.
  (function () {
    var hero = document.querySelector('.banner--medium, .banner--large, .collection-hero')
    if (!hero) return
    document.body.classList.add('bps-hero')

    var header = document.querySelector('.header')
    document.addEventListener('scroll', function () {
      var y = document.documentElement.scrollTop || document.body.scrollTop
      header.classList.toggle('bps-past-hero', y > hero.offsetHeight - 120)
    }, { passive: true })
  })()
</script>
```

---

## 4. Logotipo y favicon

En `assets/img/` de este repositorio hay cuatro variantes en SVG con fondo
transparente, generadas vectorizando el original:

| Archivo | Uso |
|---|---|
| `logo-horizontal-white.svg` | **Cabecera y menú móvil** (van sobre fondo oscuro) |
| `logo-horizontal-black.svg` | Fondo claro |
| `logo-stacked-white.svg` / `-black.svg` | Usos donde el logotipo va apilado |

Personalizar → **Cabecera** → sube `logo-horizontal-white.svg` y pon el ancho en
`200` px.

- El isotipo mantiene el azul `#0B59F8` en las cuatro variantes; lo único que
  cambia es el color del wordmark.
- **El azul es exclusivo del logotipo.** No debe aparecer en botones, enlaces ni
  estados: el resto de la interfaz es estrictamente monocroma.
- El logotipo que sigue publicado en la tienda es **el antiguo** (con degradado
  azul y «PERFORMANCE» debajo). Hay que sustituirlo también en las imágenes para
  redes, o convivirán los dos.

### El favicon

En `assets/img/` hay tres PNG con fondo transparente, generados a partir del
isotipo `[|||]` del logotipo original con `tools/build-favicon.py`:

| Archivo | Uso |
|---|---|
| `favicon-512.png` | **El que se sube a Shopify.** Personalizar → Configuración → Logo → Favicon |
| `favicon-180.png` | Icono de pantalla de inicio en iOS, si algún día se configura aparte |
| `favicon-32.png` | Solo para comprobar cómo se ve al tamaño real de una pestaña |

Shopify reescala solo, así que basta con subir el de 512. El fondo va
transparente y el azul `#0B59F8` se lee tanto en pestañas claras como oscuras,
así que no hacen falta dos versiones.

Se usa solo el isotipo, no el logotipo completo: a 32 px las letras «BPS» se
empastan y no se distingue nada.

---

## 5. Estructura de la home

> **Este paso es el que más se parece o menos al prototipo, y es fácil dejarlo a
> medias.** Los ajustes y la hoja de estilos pueden estar perfectos y la home
> seguir sin parecerse, porque lo que la define no son los colores: son **las dos
> secciones de producto**. La tarjeta gris sobre blanco es el elemento más
> reconocible de todo el rediseño, y si en la home no hay ninguna sección de
> productos, no aparece ni una vez. Compruébalo con `product-card-wrapper` en el
> código fuente: si sale `0`, falta lo principal.

Reordena las secciones hasta dejar esta secuencia, que es la que reproduce
`index.html`:

1. **Banner de imagen** — a pantalla completa, contenido abajo a la izquierda,
   contenedor desactivado, superposición al 0 % (el velo lo pone el CSS).
   Dos botones: uno sólido y uno de contorno.
   **Asígnale el esquema de color 3.** Es imprescindible: con el esquema 1 el
   botón de contorno se dibuja en negro sobre la fotografía y resulta invisible.
2. **Lista de colecciones** — las 4 categorías.
3. **Colección destacada** — 4 productos, **sobre esquema 1 (blanco)**. ⚠️ La más
   importante de la lista: es la que trae las tarjetas de producto a la home.
4. **Imagen con texto** — «Diseñado para la élite, validado por la ciencia».
5. **Producto destacado** — Presoterapia BPS PRO, esquema 3. Es el bloque negro a
   sangre; sin él la home no tiene ningún corte oscuro.
6. **Texto con iconos** — envío gratis / compra segura / atención 24/7.
7. **Newsletter** — *no* como sección propia: en Hyperice vive dentro del pie, y
   duplicarla deja dos veces el mismo campo seguido.

Los ajustes de cada una de estas secciones, opción por opción, están en
**[`AJUSTES-SECCIONES.md`](AJUSTES-SECCIONES.md)**. Y no te olvides de bajar a
`0` el **relleno** de todas: los 36 px de fábrica se suman a los 80 del ajuste
global.

---

## 6. Textos a caja baja

**Es el cambio que más transforma la percepción de la marca y no se puede hacer
con CSS**, porque los textos están escritos en mayúsculas en el editor.

Hyperice escribe **todos los titulares en caja baja**, con mayúscula solo
inicial. Las versalitas quedan para etiquetas pequeñas de 12 px.

| Actual | Nuevo |
|---|---|
| `RECUPERA. RINDE. REPITE.` | `Recupera. Rinde. Repite.` |
| `RECUPERACIÓN, RENDIMIENTO Y RESULTADOS` | `Recuperación, rendimiento y resultados` |
| `DISEÑADO PARA LA ÉLITE, VALIDADO POR LA CIENCIA` | `Diseñado para la élite, validado por la ciencia` |
| `PRESOTERAPIA` | `Presoterapia` |
| `TERAPIA DE LUZ ROJA` | `Terapia de luz roja` |
| `RECUPERACIÓN FRÍA` | `Recuperación fría` |
| `LIBERACIÓN MUSCULAR` | `Liberación muscular` |
| `PRESOTERAPIA BPS PRO` | `Presoterapia BPS PRO` |
| `VER PRODUCTOS →` | `Comprar ahora` |
| `CONOCE LA TECNOLOGÍA →` | `Conocer la tecnología` |

Quita también las flechas `→` de los botones: en Hyperice el botón lleva solo
texto, y la flecha se reserva a los enlaces de tipo «Ver todo».

---

## 7. Fotografía

Es la mayor distancia con Hyperice y ningún CSS la resuelve.

Hyperice usa **fotografía de estilo de vida** —personas entrenando y
recuperándose, luz natural, contexto real— en el banner y en las tarjetas de
categoría. BPS usa renders de producto sobre fondo neutro.

- Mantén los renders en la **ficha y la rejilla de producto**: ahí funcionan.
- Encarga **4 fotos de estilo de vida**, una por categoría, más **1 apaisada**
  para el banner.
- **Antes de encargar nada, mira lo que ya tenéis.** Entre las imágenes de la
  Presoterapia BPS PRO hay una foto de una persona usando el equipo en camilla,
  justo del tipo que hace falta. Si existe esa sesión completa, puede que el
  banner esté resuelto sin gastar.
- Tratamiento uniforme: alto contraste, sin filtros de color, recorte consistente.

---

## 8. Comprobar antes de publicar

- [ ] La cabecera es la misma en todas las plantillas: oscura translúcida con
      logotipo y textos en blanco, nunca blanca
- [ ] Se distingue dónde acaba la cabecera **también al pasar sobre una sección
      negra a sangre**: si la línea inferior falta, ahí desaparece
- [ ] Sobre las plantillas con imagen a sangre va transparente y gana fondo al
      dejarla atrás
- [ ] La barra de anuncios se esconde al bajar y reaparece al volver arriba
- [ ] Banner legible en móvil y escritorio
- [ ] Botones en píldora de 40 px en todas las plantillas, incluida la ficha
- [ ] Las tarjetas de producto se leen como caja: fondo gris sobre sección blanca
- [ ] Las tarjetas de **categoría** no son cajas: imagen a un lado y texto al otro
- [ ] La ficha muestra **una imagen cada vez** —nunca la pila completa— con
      miniaturas subrayadas en escritorio y el contador «1 / 3» sobre la imagen
- [ ] Ningún titular en mayúsculas salvo los rótulos pequeños
- [ ] **Ningún azul fuera del logotipo**: mira sobre todo el distintivo de
      «Oferta», que de fábrica sale azul
- [ ] Los precios se leen «649,00 €», sin el «EUR» detrás
- [ ] Ninguna sombra en tarjetas, botones ni campos
- [ ] El espacio entre secciones es de 80 px, no de 152: el relleno de cada
      sección tiene que estar a `0`
- [ ] Ninguna imagen con forma de arco, gota o diamante: «Forma de la imagen»
      en Predeterminado
- [ ] **El botón mide 40 px de alto y su texto 14 px.** Si sale a 25 px y 8,75 px,
      la hoja de estilos está usando `rem` con la raíz de 10 px de Dawn
- [ ] **En móvil el cajón del menú no ocupa todo el ancho** (343 px, no 390) y se
      transparenta. Si ocupa todo y es negro opaco, la hoja se está cargando en el
      `<head>` en vez de al final del `<body>`
- [ ] Los enlaces del menú de cabecera están separados, no pegados
- [ ] Ningún titular en azul: busca `0080ff` **en minúsculas** en el código fuente
- [ ] Pie con esquema `#212121` y rótulos de columna mayores que sus enlaces
- [ ] En móvil, el menú abre como cajón desde la izquierda y las columnas del
      pie se colapsan con +/−
- [ ] Carrito, buscador y selector de país intactos
- [ ] Contraste AA en textos sobre imagen

> El **checkout de Shopify no hereda este CSS**: se personaliza aparte en
> Configuración → Pago → Personalizar. Conviene al menos subir ahí el logotipo
> nuevo y ajustar el color de acento, o el salto de la tienda al pago cantará.


---

## Lo que esta guía **no** cubre

El prototipo diseñó las plantillas de contenido, no las de la mecánica de
compra, así que hay pantallas de Dawn que se quedarán con su aspecto de serie.
Ninguna rompe nada, pero se notan al lado del resto. Comprobado sobre el HTML
de la tienda real, con las clases que usa hoy cada una:

| Pantalla | Clase de Dawn | Dónde se ve |
|---|---|---|
| Filtros de colección | `.facets` | Categorías. Es la más visible de la lista |
| Selector de cantidad | `.quantity`, `.quantity__button` | Ficha, junto al botón de compra |
| Aviso de «añadido al carrito» | `.cart-notification` | Al comprar. La tienda usa el **aviso**, no el cajón lateral |
| Carrito y pago | `.cart-items`, checkout | Carrito |
| Buscador | `.search-modal`, `.predictive-search` | Cabecera, en todas las páginas |
| Acordeón de preguntas | `.accordion` | Página de preguntas frecuentes |
| Listado del blog | `.article-card`, `.blog-articles` | Blog |
| Fila de iconos | `.multicolumn` | Home, la banda de envío / pago / atención |

El checkout, además, **no hereda este CSS pase lo que pase**: se personaliza
aparte en Configuración → Pago.

Son ampliaciones naturales de `bps-hyperice.css` si al ver la tienda montada
desentonan. La ventaja de dejarlas fuera ahora es que cada una necesita
comprobarse contra la tienda montada, no contra el prototipo.
