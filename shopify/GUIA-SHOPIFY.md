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
| 2 | Hoja de estilos y dos snippets | Código |
| 3 | Logotipo | Editor |
| 4 | Estructura de la home | Editor |
| 5 | Reescribir textos a caja baja | Editor |
| 6 | Fotografía | Encargo externo |
| 7 | Comprobar y publicar | — |

Los pasos 1 a 3 ya dan el 80 % del cambio visual. El 5 es el que más tiempo
come. El 6 es el único que no depende de vosotros.

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
| Logo | `logo-horizontal-white.svg` | Blanco, porque la cabecera es oscura. Ver §3 |
| Ancho | `200` | |
| Favicon | *pendiente* | Hace falta un PNG cuadrado del isotipo `[|||]`. Hoy sigue el logotipo antiguo |

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

Tres cosas de este paso viven en sus propias secciones. Es la causa más habitual
de buscar un ajuste y no encontrarlo.

### Cabecera

Personalizar → sección **Cabecera**, en la lista de secciones de cualquier
plantilla.

| Ajuste | Valor |
|---|---|
| Encabezado fijo | **Siempre** |

> Y **no busques ningún ajuste de menú móvil**: no existe. En Dawn el menú de
> móvil es siempre un cajón, no se elige. Lo único configurable es *Tipo de
> menú*, que afecta solo a escritorio (Desplegable / Mega menú / Cajón) y puede
> quedarse como esté.

### Galería de la ficha de producto

Personalizar → plantilla **Producto** → sección **Información del producto**.

Hoy está en **«Apiladas»**: por eso se ven las tres imágenes seguidas de arriba
abajo, que es justo lo que hay que quitar.

| Ajuste | Valor |
|---|---|
| Diseño de escritorio | **Carrusel de miniaturas** |
| Miniaturas en móvil | **Ocultar** |
| Ajuste de la imagen | **Contener** |
| Tamaño | **Grande** |
| Limitar a la altura de la ventana | **Sí** |
| Zoom de la imagen | **Abrir caja de luz** |

«Carrusel de miniaturas» es la única opción de Dawn que muestra **una imagen cada
vez**; «Apiladas» y «2 columnas» dejan la pila.

> **Dos diferencias que Dawn no sabe hacer y conviene saber de antemano.**
>
> Hyperice **no tiene tira de miniaturas** en la galería principal: solo flechas
> al pasar el ratón y puntos. Su HTML llega a referenciar una tira que no
> existe, y las miniaturas solo aparecen dentro del modal de zoom. Dawn no
> ofrece esa combinación, así que el carrusel de miniaturas es lo más cercano.
> El CSS les da el formato de Hyperice: 63 px de ancho y subrayado en la activa.
>
> Y Dawn **no pinta puntos en la ficha**, sino un contador **«1 / 3»** entre dos
> flechas, colocado *debajo* de la imagen (comprobado en el HTML de la ficha
> real de la tienda). El CSS lo recoloca sobre la imagen dentro de la misma
> píldora blanca que usa Hyperice, pero seguirá diciendo «1 / 3» en vez de
> mostrar puntos. Cambiarlo de verdad exige tocar `snippets/media-gallery.liquid`,
> y entonces el tema deja de actualizarse limpio: no compensa.

### Proporción de las imágenes de producto

**En Dawn no existe ninguna opción «personalizada».** Es un ajuste **de cada
sección**, y solo ofrece tres valores: *Adaptar a la imagen*, *Vertical* (125 %)
y *Cuadrada* (100 %). La proporción 13/12 de Hyperice —92,31 %— no se puede pedir
desde el editor.

1. Pon **Cuadrada** en cada sección que muestre productos, para que la vista
   previa no engañe:
   - Home → **Colección destacada** → Proporción de la imagen
   - Plantilla Colección → **Cuadrícula de productos** → Proporción de la imagen
   - Plantilla Búsqueda → **Resultados** → Proporción de la imagen
2. El **92,31 % exacto lo pone `bps-hyperice.css`** sobre las tarjetas de
   producto. No hay que hacer nada más.

En la **lista de colecciones** de la home la proporción da igual: el CSS la
sustituye por la del diseño lado a lado (apaisada en móvil, vertical en
escritorio).

Hoy vuestra tienda tiene *Cuadrada* en la cuadrícula de la categoría y *Vertical*
en la lista de colecciones de la home.

---

## 2. Código

### 2a. La hoja de estilos

**Opción A — como archivo del tema (recomendada):**

1. Tienda online → Temas → ⋯ → **Editar código**
2. `Assets` → **Añadir un archivo nuevo** → `bps-hyperice.css`, pega el contenido
3. En `layout/theme.liquid`, justo **antes** de `</head>`:

   ```liquid
   {{ 'bps-hyperice.css' | asset_url | stylesheet_tag }}
   ```

Que vaya justo antes de `</head>` no es un detalle: Dawn declara sus variables en
un `:root` al principio de `theme.liquid`, y varias reglas de esta hoja
—el ancho de página, por ejemplo— ganan **solo por ir después**.

**Opción B — sin editar código:** Personalizar → Configuración → **CSS
personalizado**, y pega ahí el contenido.

Es más rápida, pero ese campo lo inyecta Shopify por su cuenta y no controlas en
qué orden acaba. Si tras pegarlo el ancho de página o la proporción de las
tarjetas no cambian, es por eso: pásate a la opción A.

### 2b. Esconder la barra de anuncios al bajar

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

### 2c. Cabecera transparente sobre las plantillas con imagen a sangre

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

## 3. Logotipo

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
  azul y «PERFORMANCE» debajo). Hay que sustituirlo también en el favicon y en
  las imágenes para redes, o convivirán los dos.

---

## 4. Estructura de la home

Reordena las secciones hasta dejar esta secuencia, que es la que reproduce
`index.html`:

1. **Banner con imagen** — a pantalla completa, contenido abajo a la izquierda,
   contenedor desactivado, superposición al 0 % (el velo lo pone el CSS).
   Dos botones: uno sólido y uno de contorno.
   **Asígnale el esquema de color 3.** Es imprescindible: con el esquema 1 el
   botón de contorno se dibuja en negro sobre la fotografía y resulta invisible.
2. **Lista de colecciones** — las 4 categorías.
3. **Productos destacados** — 4 productos, **sobre esquema 1 (blanco)**.
4. **Imagen con texto** — «Diseñado para la élite, validado por la ciencia».
5. **Producto destacado** — Presoterapia BPS PRO, esquema 3.
6. **Texto con iconos** — envío gratis / compra segura / atención 24/7.
7. **Newsletter** — *no* como sección propia: en Hyperice vive dentro del pie, y
   duplicarla deja dos veces el mismo campo seguido.

---

## 5. Textos a caja baja

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

## 6. Fotografía

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

## 7. Comprobar antes de publicar

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
