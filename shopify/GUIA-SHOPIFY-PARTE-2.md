# Parte 2 · Diferencias medidas entre el prototipo y la tienda publicada

Hasta ahora íbamos corrigiendo lo que tú detectabas a ojo, de uno en uno. Esta
parte cierra esa etapa: he **medido las dos webs con el navegador** y comparado
valor por valor, así que la lista de diferencias está completa y no depende de
lo que se vea o no se vea en una captura.

## Cómo se ha medido

No se puede comparar el código de los archivos: el CDN de Shopify minifica la
hoja al servirla (`::before` pasa a `:before`, `rgba()` a `#rrggbbaa`…), así que
un diff de bytes no dice nada. Lo que se ha hecho es:

1. Descargar las páginas publicadas de bpsperformance.com con sus 57 archivos
   reales de CSS y JS.
2. Reconstruirlas en local apuntando a esos archivos, con la hoja
   `bps-hyperice.css` que hay hoy en el repositorio.
3. Abrir **prototipo y tienda en el mismo Chromium**, a 1440 px y a 390 px, y
   leer el **estilo calculado** de cada componente: colores, tamaños, rellenos,
   posiciones y altos reales en píxeles.

Se compararon 44 componentes en 3 plantillas (home, listado de colección y ficha
de producto). Lo que sigue son **solo las diferencias reales**: he descartado una
docena de falsos positivos en los que el selector apuntaba a un elemento
distinto en cada lado (por ejemplo el relleno de la tarjeta, que parecía 10 px y
son 15/20/20 bien puestos: el primer `.card__content` del HTML de Dawn es un
contenedor oculto, no el panel).

## Resumen: dónde está el problema

De las diferencias encontradas, **la mayoría son ajustes del editor que todavía
no están puestos**, no fallos de la hoja de estilos. Y una de ellas —el espaciado
entre secciones— venía de un **valor mal recomendado en la guía original**, que
esta parte corrige.

| | Cuántas |
|---|---|
| Ajustes del editor pendientes de poner (§A) | 13 |
| Fallos de la hoja, ya corregidos en el repositorio (§B) | 22 |
| Código de `theme.liquid` pendiente de aplicar (§C) | 3 |
| Límites de Dawn que no se pueden igualar (§D) | 3 |

Y al final, tres apartados que no son diferencias sino respuestas a preguntas
tuyas: **§F**, si conviene cambiar a otro tema gratuito; **§G**, cómo montar una a
una las ocho páginas del prototipo; **§H**, la descripción corta de la tarjeta
y la línea separadora; **§H-4**, el bloque de suscripción del pie; **§H-5**, sus dos remates; **§I**,
cómo actualizar el tema sin rehacer todo el trabajo; **§J**, los iconos del
menú del pie; **§K**, las formas de pago en escala de grises; **§L**, la página
de contacto de Dawn, que salió descolocada y ya está cuadrada; y **§M**, la
versión de esa misma página hecha con PageFly, con las dos columnas.

---

## §A · Ajustes del editor que faltan

Estos trece valores explican la mayor parte de lo que se ve distinto. **Ninguno
necesita tocar código.**

### A-1. El espaciado entre secciones ⚠️ *(corrige la guía original)*

Es la diferencia más visible y la que tú describiste como «aparecen muy pegadas
unas con otras». Medido:

| | Prototipo | Tienda hoy |
|---|---|---|
| Escritorio, de contenido a contenido | **160 px** | 80 px |
| Móvil | **120 px** | 56 px |

La tienda tiene **la mitad** del aire que el prototipo. El motivo es el modelo
que eligió la guía original: puso «Relleno → Arriba/Abajo» a `0` en todas las
secciones y confió el ritmo a «Espacio entre las secciones de la plantilla», con
valor `80`. Ese control **llega como máximo a 100**, así que por ese camino los
160 px del prototipo son imposibles.

La corrección invierte el modelo: **el aire va dentro de cada sección**.

| Dónde | Ajuste | Valor |
|---|---|---|
| Configuración → **Diseño** | Espacio entre las secciones de la plantilla | **`0`** |
| Cada sección de contenido | Relleno → Arriba | **`80`** |
| Cada sección de contenido | Relleno → Abajo | **`80`** |

Sale exacto en las dos pantallas, porque Dawn multiplica el relleno por 0,75 en
móvil por su cuenta: `80 × 0,75 = 60`, y `60 + 60 = 120`, que es justo el valor
del prototipo. Comprobado midiendo, no calculado a mano.

**Tres excepciones**, que en el prototipo tampoco llevan aire propio:

| Sección | Arriba / Abajo | Por qué |
|---|---|---|
| Banner de imagen (el hero) | `0` / `0` | Va a sangre, pegado a la cabecera |
| Imagen con texto | `0` / `0` | En el prototipo es una franja a sangre |
| Multicolumna (envío gratis, compra segura…) | **`48`** / **`48`** | Es la tira baja del final, más apretada |

> Hoy **todas** las secciones están a `0` / `0`. Lo he comprobado leyendo el
> relleno calculado de cada una en la tienda publicada.

### A-2. Cabecera y logotipo

| Dónde | Ajuste | Valor | Medido |
|---|---|---|---|
| Sección **Encabezado** | Relleno → Arriba | **`16`** | Con `12` la cabecera mide 64,5 px; el prototipo mide **73** |
| Sección **Encabezado** | Relleno → Abajo | **`16`** | |
| Configuración → **Logo** | Ancho | **`160`** | Está en `200`; en el prototipo el logotipo ocupa 160 px |

`16 + 16 + 41` de los iconos = 73 px exactos. Esto también arregla el hueco que
se reserva en las páginas sin imagen a sangre: la hoja pasa de `107` a `111` px
(38 de la barra de anuncios + 73 de la cabecera).

### A-3. Tarjeta de producto

Tres ajustes que la guía ya pedía y que siguen sin poner. Lo he verificado sobre
el HTML de la colección publicada: no hay ni un `caption-with-letter-spacing`
(el antetítulo) ni un `quick-add` en toda la página.

| Dónde | Ajuste | Valor | Qué falta hoy |
|---|---|---|---|
| Colección / Colección destacada | Tarjeta → **Proveedor** | **Activado** | La categoría sobre el título no sale |
| Colección / Colección destacada | Tarjeta → **Agregado rápido** | **Estándar** | El icono de compra rápida no sale. Ojo: hasta que no lo actives no se ve el fallo B-9 |
| Colección | Diseño → **Columnas** | **`4`** | Salen 3 por fila; el prototipo pone 4 |

Recuerda que la categoría se escribe en el campo **Proveedor** de cada producto
(«Presoterapia», «Terapia de luz roja»…). La hoja ya la coloca encima del
titular, en 12 px y versalitas.

### A-4. Pie de página

| Ajuste | Valor | Medido |
|---|---|---|
| Relleno → Arriba | **`80`** | Está en `48`; el prototipo tiene `80` |
| Relleno → Abajo | **`24`** | Está en `36` |
| Margen superior | `0` | Ya está bien; el aire lo da el relleno de la sección anterior |

### A-5. Los selectores de país e idioma del pie

| Ajuste | Valor | Por qué |
|---|---|---|
| Pie de página → Utilidades → **Selector de país o región** | **Desactivado** | Cada uno mete una columna de **120 px de alto** en la barra inferior. Ya están en la barra de anuncios, y el prototipo no los lleva aquí |
| Pie de página → Utilidades → **Selector de idioma** | **Desactivado** | |

Medido: con los dos puestos, la barra inferior del pie ocupa **189 px**; sin
ellos, **112**. El prototipo tiene 51, y la diferencia que queda es contenido
real, no un fallo: ver B-12.

### A-6. El banner de colección está con el esquema del pie

| Ajuste | Valor | Por qué |
|---|---|---|
| Banner de colección → **Esquema de colores** | **Esquema 2** | Hoy está en el **4**, que es el del pie: la franja del titular sale en `#212121` con el texto en gris. El prototipo la tiene en hueso `#F7F5F5` con texto negro |
| Banner de colección → **Imagen** | **Desactivado** | Dawn no la pone detrás del texto sino al lado. Ver C-3 |

---

## §B · Fallos de la hoja de estilos (ya corregidos)

Estos veintidós los ha destapado la medición y **ya están arreglados en
`bps-hyperice.css`**. Hay que volver a subir la hoja (paso 3a de la guía) para
que surtan efecto.

| Qué | Estaba | Ahora |
|---|---|---|
| **B-1. Botón de contorno con aro negro** sobre fondo oscuro | Borde `rgb(0,0,0)` con letra blanca: se veía un cerco negro sobre la foto | Borde en `currentColor`, siempre del color de la letra |
| **B-2. Texto del cuerpo en gris** | Dawn escribe el cuerpo en negro al 75 % | Negro pleno, como el prototipo |
| **B-3. Márgenes laterales** | 50 px a cada lado en escritorio y 30 en móvil | 30 y 15, como el prototipo. El logotipo arranca en x=30 y no en x=50 |
| **B-4. Iconos de cabecera ovalados** | 38 × **44** px: Dawn declara `width: 4.4rem` y ganaba a mi `min-width` | 38 × 38, redondos |
| **B-5. Alto del hero** | 720 px fijos («Grande» de Dawn son 72rem) | `88svh`, los 792 px del prototipo |
| **B-6. Párrafo del hero** | Blanco al 75 % | El gris `#cbcbcb` de la paleta |
| **B-7. Rótulo de multicolumna** | Interlineado 1,2 | 1,15 |
| **B-8. Ancho máximo del logotipo** | 200 px | 160 px, de acuerdo con el ajuste de A-2 |
| **B-9. El botón de compra rápida salía VACÍO** 🔴 | Un círculo negro de 36 px sin nada dentro | Icono de bolsa con el «+» calado, de 24 px y sin fondo, en la fila del precio |
| **B-10. Iconos de cabecera pegados** | Hueco `0`: las píldoras se tocaban | `4 px`, como el prototipo. Y el carrito ya no se sale del margen |
| **B-11. Logotipo y menú pegados** | 20 px entre uno y otro (`column-gap: 2rem` de Dawn) | 56 px, los del prototipo |
| **B-12. La barra inferior del pie, ilegible** | 242 px de alto, en dos filas apiladas, y los cuatro enlaces de políticas pegados sin separación | Una fila: legal a la izquierda, pagos a la derecha, con 16 px entre enlaces |
| **B-13. Iconos de redes descentrados** | Sobrevivía el `padding: 1.1rem` de Dawn y el SVG medía 20×22 en un círculo de 30: se salía por la derecha | SVG de 15 px centrado, 7,5 px por los cuatro lados |
| **B-14. Franja del titular de colección** | Sin relleno (`padding: 0`) y titular a 65 px | 56/40 de relleno y titular a 48 px, como la cabecerita del prototipo |
| **B-15. Divisoria de más sobre la foto** | El selector sin `>` pintaba el borde también en el `.card__content` de dentro de `.card__inner`: una raya cruzando la parte de arriba de la imagen | Solo en el panel de texto |
| **B-16. Titular de «Texto enriquecido» descuadrado** | Arrancaba en `x=0`, pegado al borde, y se partía en **tres líneas**: Dawn no le da el ancho de página y le pone `max-width: 78rem` | `x=30` como los demás titulares, y en **una línea** |
| **B-17. Botón del banner pegado a la foto en móvil** | Dawn deja el contenido del banner sin relleno inferior en móvil: 50 px en escritorio y **0** en móvil | 96 px por debajo del botón, los del prototipo |
| **B-18. Reparto del pie** | Dawn apila: las tres columnas a todo lo ancho, luego el boletín a todo lo ancho y las redes colgando a su derecha | Dos columnas: redes a la izquierda en 320 px, boletín arriba a la derecha y los tres menús debajo. Medido: los mismos `x=30 / x=499` y anchos `320 / 911` del prototipo |
| **B-19. El `+` del pie sin círculo** | Era un «+» de texto suelto | Círculo de 26 px sobre `#373737` con las dos barras de 11 px, como el prototipo |
| **B-20. Titular del boletín en 18 px** | Dawn usa la misma clase para el rótulo de las columnas y para el titular del boletín, y la regla de 18 px se lo comía | 32 px en escritorio y 24 en móvil. Ver §H-4 |
| **B-21. Formulario del boletín en columna** | `max-width: 36rem` y el botón dentro del campo, como una flecha de 44 px | Fila con el campo elástico y el botón de píldora al lado |
| **B-22. Botón del boletín pegado y descentrado** | El botón cuelga de `.field`, no del formulario, así que el `gap` no caía entre ellos: 1 px de hueco y 11 de desfase | 8 px de hueco y centrado. Ver §H-5 |

Sobre B-3: no bastaba una regla para `.page-width`. Dawn tiene tres selectores
que pesan más (`.utility-bar__grid.page-width`,
`.header:not(.drawer-menu).page-width` y uno con `:has()` para la barra de
anuncios) y el relleno no cambiaba. Ahora se sobreescriben los tres.

**Sobre B-9, que es el más grave y explica por qué no lo habíamos visto antes.**
El botón de compra rápida de Dawn **no lleva ningún icono**: dentro solo hay el
texto «Agregar al carrito» y un indicador de carga. La hoja escondía ese texto
con `font-size: 0` dando por hecho que debajo había un icono, así que el botón se
quedaba completamente vacío. No salió en la comparación porque **el botón no
existe hasta que se activa «Agregado rápido»** (§A-3), y en la tienda que medí
todavía estaba apagado. Ahora el icono se dibuja en la propia hoja, con una
máscara, para que herede el color en vez de ir clavado. De paso se ha corregido
la geometría: era un círculo negro de 36 px sobre la imagen y el prototipo tiene
un icono de 24 px sin fondo, a 20 px de los bordes del panel, en la misma fila
que el precio.

**Sobre B-12.** Dawn parte la barra inferior en dos envoltorios apilados, cada
uno con `width: 100%` —por eso no se ponían uno al lado del otro—, y deja los
enlaces de políticas en `display: inline`, sin ninguna separación. Ya está
arreglado, pero **quedan dos filas en vez de una**, y eso no es un fallo: el
aviso legal de la tienda mide 1 137 px porque lleva el «Tecnología de Shopify»
que añade Shopify y **cuatro** enlaces de políticas, mientras el prototipo tiene
tres y ningún añadido. No caben en una línea con las formas de pago al lado. Las
dos filas quedan alineadas como en el prototipo: legal a la izquierda, pagos a
la derecha.

---

## §C · Código pendiente en `theme.liquid` ⚠️

Los dos scripts de la guía **no están en la tienda publicada**. Lo he verificado
en el HTML: uno está pero con la versión antigua, y el otro no aparece.

### C-1. El pie de página en móvil se queda sin enlaces 🔴

Es el más grave y conviene mirarlo ya. La hoja esconde las listas del pie en
móvil porque cuenta con que el script de la **§3e** haya creado el botón de
desplegar. Ese script no está, así que en móvil **los enlaces del pie están
escondidos y no hay nada que pulsar para abrirlos**.

Dos formas de cerrarlo, y conviene hacer las dos:

- **Pon el script de la §3e** de la guía. Es lo que hace que las columnas se
  plieguen con su `+`, como en el prototipo.
- Ya he puesto un **seguro en la hoja**: ahora la lista se esconde solo si el
  botón existe (`:has(.bps-footer-toggle)`). Con la hoja nueva subida, si el
  script falta los enlaces se ven —desplegados, sin plegar, pero visibles— en
  lugar de desaparecer.

### C-2. La cabecera tarda demasiado en volverse opaca

En la tienda sigue la versión vieja de la §3c:

```js
document.body.classList.toggle('bps-past-hero', y > hero.offsetHeight - 120)
```

Con un hero de 720 px eso no se activa hasta los 600 px de scroll, y mientras
tanto el titular del banner pasa por detrás de una cabecera transparente y se
solapa — exactamente lo de tu captura. La línea correcta es:

```js
document.body.classList.toggle('bps-past-hero', y > 40)
```

### C-3. Las páginas de colección no se ven 🔴 *(esto es lo que estás viendo)*

Navegando a cualquier colección —`/collections/los-mas-buscados`,
`/collections/all`— el titular aparece **escrito encima del logotipo y del
menú**, y la cabecera se queda transparente. Reproducido y medido: el `<h1>` cae
a 56 px del borde superior mientras el bloque de cabecera llega hasta 107.

La causa está en una sola palabra del selector de la §3c:

```js
// MAL — lo que hay hoy en la tienda
var hero = document.querySelector('.banner--medium, .banner--large, .collection-hero')
```

```js
// BIEN
var hero = document.querySelector('.banner--medium, .banner--large')
```

**Por qué.** Dawn le pone la clase `collection-hero` a la sección «Banner de
colección» en **todas** las colecciones, tenga imagen o no. El script la tomaba
por una imagen a sangre, marcaba el `<body>` con `bps-hero`, y eso hace dos cosas
a la vez: deja la cabecera transparente y —lo grave— **anula el hueco que reserva
la cabecera fija**, porque la regla es `body:not(.bps-hero) #MainContent`. Sin ese
hueco el contenido arranca en `top: 0`, debajo de la cabecera.

Y no vale con distinguir las colecciones que sí llevan imagen: **Dawn coloca la
foto AL LADO del texto, no detrás**, y el banner solo tiene 40 px de relleno, así
que el titular se metería igualmente debajo de la cabecera. Las colecciones no
son hero nunca. Si alguna tiene que abrir con foto a sangre, se le añade encima
una sección **«Banner de imagen»** y entonces entra por `banner--large`, que sí
es full-bleed.

Comprobado tras el cambio en las cuatro plantillas —colección, ficha, página y
blog—: la cabecera sale opaca, se reservan los 111 px y ningún titular queda
tapado. Las otras tres ya estaban bien; el fallo era solo de las colecciones.

---

## §D · Lo que Dawn no puede dar

Dos cosas del prototipo que **no tienen equivalente** en la tarjeta de producto
de Dawn. No son fallos de configuración: el campo no existe.

- **D-1. La descripción corta de la tarjeta.** ~~Haría falta una sección a
  medida.~~ **Resuelto: ver §H-2.** No hacía falta una sección nueva, sino un
  metacampo y once líneas en `snippets/card-product.liquid`.
- **D-2. El icono y el botón de la tarjeta de categoría**, ya anotado en
  `AJUSTES-SECCIONES.md`. La «Lista de colecciones» no ofrece ninguno de los
  dos. La alternativa sin programar es montar las cuatro categorías con cuatro
  bloques de «Imagen con texto».
- **D-3. El desplegable «¿Qué te interesa?» del formulario de contacto.** Los
  campos del formulario de Dawn están escritos en el Liquid, no son un ajuste:
  son Nombre, Correo electrónico, Teléfono y Comentario. Detalle en §G-2.
  **Con PageFly esto se resuelve sin tocar código**, porque su formulario deja
  añadir y quitar campos: ver §M.

Sobre si conviene cambiar de tema para conseguirlas, ver **§F**.

---

## §E · Un arreglo en el prototipo

La comparación también ha encontrado un fallo **en el prototipo**, no en la
tienda: el antetítulo de categoría de la tarjeta (`.card__category`) se había
quedado **sin ninguna regla de CSS**, así que heredaba los 16 px negros del
cuerpo y pesaba lo mismo que el título del producto. La hoja de Shopify sí lo
tenía bien, en 12 px y versalitas.

Corregido en `assets/css/components.css`: 12 px, versalitas, gris `#505050`. Ya
miden igual los dos lados.

---

## §F · ¿Hay un tema gratuito que dé el 100 % del prototipo?

Respuesta corta: **para las tres cosas que faltan (§D) sí lo hay, pero no
merece la pena cambiar.** Y conviene entender por qué, porque los temas
gratuitos de Shopify ya no son una lista, son **dos generaciones distintas**.

### Los temas gratuitos, hoy

| Generación | Temas | Qué son |
|---|---|---|
| **Familia Dawn** (Online Store 2.0) | Dawn, Sense, Craft, Refresh, Ride, Publisher, Origin, Colorblock, Spotlight, Studio, Taste, Trade, Crave | El mismo código base con distintos ajustes de fábrica y alguna sección extra |
| **Familia Horizon** (verano de 2025) | Horizon, Heritage, Fabric, Ritual, Tinker, Dwell, Savor, Vessel, Atelier, Pitch | Arquitectura nueva, por bloques. Horizon es la base y los otros nueve son variantes |

Todos son gratis para cualquier plan.

### Cambiar dentro de la familia Dawn no sirve de nada

Sense, Craft, Refresh y compañía son Dawn con otra ropa. Comparten las mismas
secciones y las mismas plantillas de tarjeta, así que **arrastran exactamente
los mismos tres límites** de §D: la tarjeta de producto sigue sin campo de
descripción y la lista de colecciones sigue sin icono ni botón. Cambiar de uno a
otro solo te obligaría a repetir toda la configuración para llegar al mismo
sitio.

### Horizon sí lo daría, pero cuesta rehacerlo todo

Horizon es la generación siguiente y su diferencia importante es que **todo son
bloques anidables, hasta ocho niveles**, y que los bloques son globales: se
pueden poner en cualquier parte. Con eso, las tres cosas de §D dejan de ser un
límite — se pueden meter bloques de texto y de botón dentro de una tarjeta.

El coste es que **la hoja `bps-hyperice.css` habría que reescribirla entera**.
Está escrita contra los nombres de clase de Dawn: `.card--card`,
`.banner__heading`, `.header__heading-logo`, `.page-width`,
`.multicolumn-card__info`… Horizon es otro código, así que esos selectores no
apuntarían a nada. Son 15 apartados y unas 1 000 líneas de trabajo hecho y
medido. Además habría que rehacer las plantillas de todas las páginas y volver a
validar el resultado.

> No he podido inspeccionar el HTML de Horizon directamente para medir cuánto se
> salvaría exactamente: la demo pública está detrás de contraseña. Lo que sí es
> seguro es que los selectores actuales no valen, porque son de Dawn.

### Lo que recomiendo

**Quedarse en Dawn y resolver §D con una sección a medida.** Sale más barato que
cambiar de tema. El prompt para encargarlas, con las reglas que obligan a la IA a
usar la configuración del tema en vez de traerse la suya, está en
**[`PROMPT-SECCIONES.md`](PROMPT-SECCIONES.md)**:

- **D-2 (tarjeta de categoría con icono y botón)** es el que más se nota, porque
  está en la home. Un archivo `sections/bps-categorias.liquid` con cuatro
  bloques —imagen, icono, título, botón— resuelve exactamente lo del prototipo.
  Es una sección nueva, no toca nada de lo que ya funciona, y la hoja de estilos
  actual le vale.
- **D-1 (descripción en la tarjeta)** se puede resolver sin sección nueva, con un
  **metacampo** de producto y tres líneas en `snippets/card-product.liquid`.
- **D-3 (el desplegable del formulario)** son cinco líneas en
  `sections/contact-form.liquid`. Va en §G-2.

Y si en algún momento se plantea un rediseño desde cero, entonces sí: empezar
por Horizon en vez de Dawn. Pero eso es otro proyecto, no el remate de este.

---

## §G · Cómo montar cada página del prototipo

El prototipo tiene nueve páginas. Ocho van a la tienda; `styleguide.html` es una
referencia interna de estilos y no se publica.

Antes de entrar en cada una, dos avisos que valen para todas:

- **El relleno de las secciones** sigue la regla de §A-1: `80` / `80` en las de
  contenido, y las excepciones que se indican en cada página.
- **Las páginas de hoy están hechas con secciones generadas por la IA de
  Shopify**, no con secciones de Dawn. La de Contacto, por ejemplo, tiene una
  sola sección `template--…__17754325730b143d3f` que lleva el formulario dentro.
  Hay que **quitar esas secciones** antes de montar las de abajo, o tendrás las
  dos cosas a la vez. Están inventariadas en
  [`CODIGO-EXISTENTE.md`](CODIGO-EXISTENTE.md).

### G-1. Inicio

Ya está en la [guía principal §5](GUIA-SHOPIFY.md). No se repite aquí.

### G-2. Contacto → página con plantilla `page.contact`

*Admin → Tienda online → Páginas → Contacto. En «Plantilla de tema» elige
`page.contact`.*

El prototipo tiene una cabecerita sobre fondo hueso y debajo dos columnas: el
formulario a la izquierda y «Otras vías» a la derecha.

**En el admin, antes de tocar el editor:**

| Campo | Valor |
|---|---|
| Título de la página | `Hablemos de tu recuperación` |
| Contenido | `Cuéntanos tu deporte, tu carga de entrenamiento y tu objetivo. Te respondemos con el protocolo y el equipo que encajan contigo.` |

El título sale como `<h1>` y el contenido como párrafo de entrada: es la
cabecerita del prototipo, no hay que montarla a mano.

**Secciones, en este orden:**

| # | Sección | Ajustes |
|---|---|---|
| 1 | **Página** | Relleno Arriba **`56`** / Abajo **`40`**. ⚠️ Esta sección **no tiene ajuste de esquema de color**: la franja hueso `#F7F5F5` la pone la hoja de estilos (§L) |
| 2 | **Formulario de contacto** | Encabezado `Escríbenos` —o vacío, que es lo que hace el prototipo— · Esquema 1 · Relleno `80` / `80`. El tamaño del título da igual: la hoja lo fija a 32px (§L) |
| 3 | **Texto enriquecido** | Ver el detalle abajo |

Los `56` / `40` del relleno no son arbitrarios: son los que mide la cabecerita
del prototipo (`padding-block: 56px 40px`).

**La sección 3, «Texto enriquecido»**, es la columna «Otras vías». Añade cuatro
bloques en este orden:

| Bloque | Contenido |
|---|---|
| Leyenda | `Otras vías` |
| Título | `Atención 24/7` · Tamaño **Pequeño** |
| Texto | `Atención personalizada para resolver todas tus dudas antes y después de la compra.` y debajo, en lista, los tres enlaces: formulario oficial, preguntas frecuentes y la clínica de Madrid |
| Botones | Etiqueta `Escríbenos por Instagram` · Enlace a vuestro Instagram · **Estilo de contorno activado** |

Ajustes de la sección: Posición y Alineación de contenido **Izquierda**, Ancho
completo desactivado, Relleno `0` arriba / `80` abajo.

**Dos cosas no salen igual, y conviene saberlo antes de empezar:**

- 🔴 **No hay dos columnas.** Dawn apila las secciones, no las pone al lado. El
  formulario quedará arriba y «Otras vías» debajo. Funciona y se ve limpio, pero
  no es el reparto del prototipo. Para las dos columnas hace falta una sección a
  medida que lleve el formulario y el bloque de texto dentro —o un constructor de
  páginas, que es el camino que se ha seguido al final: **ver §M**.
- 🔴 **El desplegable «¿Qué te interesa?» no existe** (§D-3). Los campos de Dawn
  son Nombre, Correo electrónico, **Teléfono** y Comentario: falta el
  desplegable y sobra el teléfono. Si lo quieres, es un añadido en
  `sections/contact-form.liquid`, justo antes del campo de comentario:

  ```liquid
  <div class="field">
    <label class="field__label" for="ContactForm-interes">¿Qué te interesa?</label>
    <select id="ContactForm-interes" class="select__select" name="contact[Interés]">
      <option>Presoterapia</option>
      <option>Terapia de luz roja</option>
      <option>Recuperación fría</option>
      <option>Liberación muscular</option>
      <option>Recovery</option>
      <option>Equipar un centro o clínica</option>
    </select>
  </div>
  ```

  Lo que pongas en `name="contact[…]"` es el nombre con el que llega el dato al
  correo del pedido de contacto. Si tocas este archivo, apúntalo en
  [`ARCHIVOS-MODIFICADOS.md`](ARCHIVOS-MODIFICADOS.md): ya es uno de los cuatro
  que se han modificado alguna vez.

### G-3. Sobre nosotros → página normal

*Título de la página: `Rompe tus límites. Optimiza tu biología.`*

| # | Sección | Ajustes |
|---|---|---|
| 1 | **Banner de imagen** | Altura **Mediano** · Contenido Abajo a la izquierda · Título = el de la página · Relleno `0` / `0` |
| 2 | **Texto enriquecido** | Bloque Leyenda `Bio Performance System` + bloque Título `Más que productos, un sistema` · Alineación **Izquierda** · Relleno `80` / `0` |
| 3 | **Multicolumna** | Título vacío · **3 columnas** · un bloque por pilar: `El frío`, `La luz`, `La compresión` · Relleno `0` / `80` |
| 4 | **Texto enriquecido** | Leyenda `La promesa BPS` + Título `Tres pilares innegociables` · Relleno `80` / `0` |
| 5 | **Multicolumna** | Título vacío · **3 columnas**: `Ciencia y evidencia`, `Rendimiento y calidad`, `Empoderamiento y educación` · Relleno `0` / `80` |
| 6 | **Texto enriquecido** | Título `Explora el sistema. Toma el control.` · dos botones: `Ver productos` (sólido) y `Hablar con un especialista` (contorno) · Esquema **2** · Relleno `48` / `48` |

⚠️ **Por qué el antetítulo va en una sección aparte.** «Multicolumna» solo tiene
«Título»: **no tiene ningún campo de leyenda**. Los antetítulos del prototipo
(«Bio Performance System», «La promesa BPS») no se pueden poner dentro de la
sección, así que van en un «Texto enriquecido» justo encima, con el relleno
partido —`80` / `0` arriba y `0` / `80` abajo— para que las dos secciones se lean
como un bloque solo y no queden separadas.

En las dos secciones de Multicolumna, cada bloque lleva su icono en el campo de
imagen. Recuerda «Proporción → Adaptar a la imagen» y que la hoja los deja en
28 px: si subes un PNG grande no pasa nada, se escala.

No uses la sección «Página» aquí: el banner ya hace de cabecera y el título de
la página se vería dos veces.

### G-4. Preguntas frecuentes → página normal

*Título de la página: `Preguntas frecuentes`. Deja el contenido vacío.*

Las diez preguntas del prototipo van en **tres grupos**, y «Contenido
desplegable» solo admite un encabezado por sección. Así que son **tres secciones
de «Contenido desplegable»** seguidas:

| # | Sección | Encabezado | Filas |
|---|---|---|---|
| 1 | Página | — | Esquema **2** · Relleno `56` / `40` |
| 2 | Contenido desplegable | `Sobre nuestros productos y tecnología` | 4 |
| 3 | Contenido desplegable | `Uso y protocolos` | 3 |
| 4 | Contenido desplegable | `Compra y envío` | 3 |
| 5 | Texto enriquecido | `¿No has encontrado tu respuesta?` + botón `Contáctanos` | Esquema **2** · Relleno `48` / `48` |

En cada sección de «Contenido desplegable»:

| Ajuste | Valor | Por qué |
|---|---|---|
| Alineación del encabezado | **Izquierda** | De fábrica va centrado |
| Contenedor | **Sin contenedor** | El prototipo son filas con una línea fina, sin caja |
| Abrir la primera fila | Desactivado | Todas cerradas de partida |
| Tamaño del título | **Pequeño** | Los títulos de grupo del prototipo son pequeños |
| Relleno | `80` arriba en la primera, `0` en las siguientes | Para que los tres grupos se lean como uno |

Y en cada bloque «Fila desplegable»: la pregunta en Encabezado, la respuesta en
Contenido de fila, y **Ícono → Ninguno** ⚠️. De fábrica pone una marca de
verificación que en el prototipo no está.

### G-5. Blog → blog, no página

*Admin → Tienda online → Blogs. Renombra el blog a `Protocolos y ciencia`.*

El título de la página lo pone el nombre del blog, así que aquí no hace falta la
sección «Página».

| Sección | Ajustes |
|---|---|
| **Artículos de blog** *(viene puesta)* | Diseño **Cuadrícula** · Imagen destacada activada · Altura de imagen **Mediana** · Fecha activada · Autor desactivado · Relleno `56` / `80` |

De fábrica el diseño es **Collage**, que hace la primera entrada gigante. El
prototipo usa una cuadrícula regular.

### G-6. Productos → colección «Todos los productos»

Las doce tarjetas de `productos.html` no son una página: son una colección.

*Admin → Productos → Colecciones → crea una colección automática que incluya
todos los productos, o usa la de «Todos» que Shopify ya trae en
`/collections/all`.*

| Sección | Ajustes |
|---|---|
| **Banner de colección** | Descripción activada · Imagen **desactivada** (el prototipo no lleva foto aquí) |
| **Cuadrícula de productos** | Columnas **`4`** · Proveedor **activado** · Agregado rápido **Estándar** · Productos por página **`24`** *(de fábrica `16`)* · Filtros activado · **Diseño de filtro → Horizontal** · Ordenación activada |

Los filtros del prototipo son unas pastillas de categoría en una fila. En Dawn el
interruptor **«Filtros»** ya viene activado en esta misma sección, y
**«Diseño de filtro»** ofrece *Horizontal*, *Vertical* y *Cajón*: la que más se
parece al prototipo es **Horizontal**.

Lo que Dawn no decide es **qué** filtros aparecen: eso se define en la app
gratuita **Search & Discovery** de Shopify (Admin → Aplicaciones). Sin ella la
sección enseña los filtros por defecto —disponibilidad y precio—, no las
categorías. Aun así no queda idéntico: son desplegables, no pastillas.

### G-7. Colección → plantilla de colección

Vale para Presoterapia, Terapia de luz roja y las demás. Se configura **una vez**
y sirve para todas.

| # | Sección | Ajustes |
|---|---|---|
| 1 | **Banner de colección** | Descripción **activada** · Imagen **activada**. La foto y el texto salen de la colección en el admin |
| 2 | **Cuadrícula de productos** | Columnas `3` · Proveedor activado · Agregado rápido Estándar |
| 3 | **Imagen con texto** | Bloques: Leyenda `Cómo funciona`, Título `Compresión secuencial, no un masaje cualquiera`, Texto, Botón `Ver la gama` · Relleno `0` / `0` |

La sección 3 es la franja «Cómo funciona» del prototipo. Dos avisos:

- El bloque de botón de «Imagen con texto» **solo admite un botón**. El segundo
  enlace del prototipo (`Resolver dudas →`) hay que meterlo como enlace dentro
  del bloque de Texto.
- Si la pones aquí sale en **todas** las colecciones con el mismo texto. Para
  tener una distinta por colección hay que duplicar la plantilla
  (`Personalizar → arriba a la izquierda → Crear plantilla`).

### G-8. Ficha de producto → plantilla de producto

| # | Sección | Ajustes |
|---|---|---|
| 1 | **Información de producto** | Multimedia → Diseño **Carrusel de miniaturas** ⚠️ · Ancho **Grande** · Contenido fijo activado · Relleno `48` / `80` |
| 2 | **Imagen con texto** | Bloque Leyenda `Por qué el modelo PRO` + Título `Recuperación de élite, donde tú la necesites` · botón `Comparar con el PLUS` en contorno |
| 3 | **Productos relacionados** | Encabezado `Completa tu sistema` · Columnas `4` · Proveedor **activado** *(de fábrica viene desactivado)* |

El ⚠️ del carrusel es el cambio que se hizo en el prototipo para igualar la
ficha de Hyperice: las fotos pasan de apiladas a carrusel. En Dawn está en
**Multimedia → Diseño**, y las cuatro opciones son *Apilado*, *Dos columnas*,
*Miniaturas* y *Carrusel de miniaturas*. **No hay una que se llame «Carrusel» a
secas**: la que hace el carrusel es la cuarta. De fábrica viene *Apilado*, que
es justo lo que había que cambiar. La hoja de estilos ya le pone las flechas
redondas y los puntitos.

En «Imagen con texto», la leyenda y el título son **bloques** que se añaden
dentro de la sección, no ajustes de la sección.

El antetítulo con la categoría sobre el `<h1>` sale del campo **Proveedor** del
producto, igual que en las tarjetas.

### Resumen de plantillas

| Página del prototipo | En Shopify es | Plantilla |
|---|---|---|
| `index.html` | La portada | `index` |
| `contacto.html` | Página | `page.contact` |
| `sobre-nosotros.html` | Página | `page` |
| `faq.html` | Página | `page` |
| `blog.html` | Blog | `blog` |
| `productos.html` | Colección con todos los productos | `collection` |
| `coleccion.html` | Cada colección | `collection` |
| `producto.html` | Cada producto | `product` |
| `styleguide.html` | — | No se publica |

Con esto, la hoja de estilos cubre las ocho. El único añadido que ha hecho falta
es bajar el título de página de los 52 px de Dawn a los 48 del prototipo.

---

## §H · La descripción corta de la tarjeta y la línea separadora

Las dos cosas que preguntaste. Una hay que añadirla y la otra ya está: conviene
separarlas porque el trabajo es muy distinto.

### H-1. La línea separadora ya está puesta

Medida en la colección publicada y en el prototipo, sobre el mismo navegador:

| | Prototipo | Tienda publicada |
|---|---|---|
| Borde superior del panel | `1px solid rgb(223, 223, 223)` | **el mismo** |
| Fondo a cada lado | `#f7f5f5` | `#f7f5f5` |

No hay nada que añadir: la hoja ya la dibuja en `.card--card > .card__content`, y
la regla está también en la versión que tienes publicada. **Lo que pasa es que
apenas se ve**, y es a propósito: `#dfdfdf` sobre `#f7f5f5` da un contraste de
**1,23 : 1**. Es un pelo, no una raya.

Y es el valor correcto: en el CSS de producción de Hyperice esa línea es
`--color-stroke-light: #dfdfdf`, exactamente la misma. Se nota más o menos según
la foto —contra una imagen de fondo blanco se lee; contra una gris clara
desaparece—, y eso pasa igual en Hyperice.

Si aun así la quieres más visible, es una línea al final de la hoja. **Ojo: esto
ya se separa de Hyperice**, así que va como añadido opcional y no como valor por
defecto:

```css
/* Divisoria de tarjeta más marcada que la de Hyperice. Opcional. */
.card--card > .card__content { border-top-color: var(--bps-grey-300); }
```

`--bps-grey-300` es `#cbcbcb` y sube el contraste a 1,55 : 1. Con
`--bps-grey-400` (`#979797`) se va a 2,6 : 1, que ya es una raya de verdad.

> De paso, mirando esto encontré un fallo mío: la divisoria se estaba pintando
> **también** en el `.card__content` que Dawn mete dentro de `.card__inner`, o sea
> una raya cruzando la parte de arriba de la foto. Corregido en B-15.

### H-2. La descripción corta: metacampo más once líneas

Esta sí hay que añadirla, y es el §D-1 que estaba pendiente. La tarjeta de Dawn
tiene título, proveedor, precio y distintivos, y ningún campo para una
descripción. Son tres pasos.

**Paso 1 · Crea el metacampo.** *Admin → Configuración → Metacampos y metaobjetos
→ Productos → Agregar definición.*

| Campo | Valor |
|---|---|
| Nombre | `Descripción corta` — **solo el nombre, sin `custom.` delante** ⚠️ |
| Tipo | **Texto → Texto de una sola línea** |
| Validación | Límite de caracteres → Máx. `90` |

⚠️ **Ojo con el campo «Nombre», que es la trampa de este paso.** No es la clave:
Shopify **genera la clave a partir de él** y la enseña en gris justo debajo. Si
escribes `custom.descripcion_corta` en «Nombre», la clave que sale es
`custom.custom_descripcion_corta` —convierte el punto en guion bajo y le añade
delante su propio espacio `custom.`—, y entonces el Liquid busca en un sitio y el
dato está en otro.

**Antes de guardar, lee la línea gris de debajo del nombre.** Ahí está la clave de
verdad. El Liquid prueba las dos formas habituales:

```
custom.descripcion_corta          ← si pones «Descripción corta» en Nombre
custom.custom_descripcion_corta   ← si pones «custom.descripcion_corta» en Nombre
```

Si te sale una tercera, cámbiala en el `assign` del snippet. **Las claves no se
pueden renombrar después de crear la definición**, así que se adapta el código,
no el dato.

**Paso 2 · Sustituye el snippet.** En este repositorio está la copia lista:
**`shopify/snippets/card-product.liquid`**. Es el archivo de Dawn 15.4.1 con las
once líneas añadidas y nada más —comprobado: mismas etiquetas Liquid abiertas y
cerradas que el original—. Cópialo entero sobre
`snippets/card-product.liquid`.

Si prefieres editar a mano, es este bloque **justo después del `</h3>` del
titular y justo antes del `<div class="card-information">`**:

```liquid
{%- assign bps_desc = card_product.metafields.custom.descripcion_corta.value -%}
{%- if bps_desc != blank -%}
  <p class="bps-card__descripcion">{{ bps_desc | escape }}</p>
{%- endif -%}
```

Va **dos veces**, porque el snippet tiene dos ramas: la tarjeta con foto y la
tarjeta sin foto. En el archivo de Dawn sin tocar son las líneas 125 y 162.

⚠️ **Este snippet lo usa media tienda**: la portada, las colecciones, el
buscador y los productos relacionados. La copia de fábrica está en
`shopify/dawn-original/card-product.liquid` por si hay que volver atrás, y el
cambio queda apuntado en
[`ARCHIVOS-MODIFICADOS.md`](ARCHIVOS-MODIFICADOS.md).

**Paso 3 · Rellena el campo** en cada producto, en la parte de abajo de su ficha
en el admin. Frases de una línea, como en el prototipo: «Recuperación muscular
profesional para piernas», «Recuperación muscular inalámbrica».

El CSS ya está en la hoja, no hay que tocar nada: 14 px, gris `#505050`,
interlineado 1,4. Lo único que merece explicación es el `order: 1`, que la coloca
entre el título y el precio; hace falta porque el panel de la tarjeta es una
rejilla y `.card-information` va en `display: contents`.

**Resultado comprobado**, simulando el metacampo sobre la colección publicada. El
orden del panel queda exactamente el del prototipo:

> PRESOTERAPIA *(antetítulo, 12 px)* → **Presoterapia BPS PLUS** *(título, 18 px)*
> → Recuperación muscular profesional para piernas *(descripción, 14 px gris)* →
> 549,00 € *(precio, 14 px)*

Para verlo hace falta además tener puesto **«Proveedor → Activado»** (§A-3): sin
él falta el antetítulo, aunque la descripción sale igual.

### H-3. Si aun así no sale: la clave

**Este es el caso que se dio, y venía de un error de esta guía.** El síntoma:
con la prueba de texto fijo la descripción aparece, o sea que el snippet está en
el tema publicado, pero con el metacampo relleno no sale nada.

La causa fue la del aviso del paso 1: en el campo **Nombre** de la definición se
escribió `custom.descripcion_corta`, y Shopify generó la clave
**`custom.custom_descripcion_corta`**. El Liquid buscaba `custom.descripcion_corta`
y ahí no había nada.

**Ya está resuelto en el snippet**: prueba las dos claves, primero la limpia y
después la del `custom_` repetido. Con volver a subir
`shopify/snippets/card-product.liquid` la descripción aparece, sin tocar ni la
definición ni los datos ya introducidos.

```liquid
{%- liquid
  assign bps_mf = card_product.metafields.custom.descripcion_corta
  if bps_mf == blank
    assign bps_mf = card_product.metafields.custom.custom_descripcion_corta
  endif
  assign bps_desc = ''
  if bps_mf != blank
    assign bps_desc = bps_mf.value
  endif
-%}
{%- if bps_desc != blank -%}
  <p class="bps-card__descripcion">{{ bps_desc }}</p>
{%- endif -%}
```

No se toca la definición a propósito: **la clave de un metacampo no se puede
renombrar**. Habría que borrar la definición y crearla otra vez, y con ella se
van los textos ya escritos. Sale más barato que el código pruebe las dos.

### Si te vuelve a pasar con otra clave

En `shopify/snippets/DIAGNOSTICO-metacampo.liquid` hay un bloque que lo imprime
todo. Se pega **en lugar** del bloque `bps_desc`, se mira una tarjeta y se quita.

| Lo que sale | Qué significa | Qué hacer |
|---|---|---|
| `TIPO[single_line_text_field]` y `VALOR[tu texto]` | Está todo bien | Vuelve al bloque bueno; si aún no sale, es caché del navegador |
| `CLAVES-CUSTOM[…]` con **otro nombre** de clave | Es el caso de arriba | Usa esa clave en el `assign` |
| `TIPO[]` vacío y `CLAVES-CUSTOM[{}]` | En ese producto no hay **nada** bajo `custom` | El valor no se guardó |
| `TIPO[metaobject_reference]` | Es un metaobjeto, no un metacampo de texto | Crea un metacampo de texto y pasa los textos |
| `TIPO[rich_text_field]` | Es texto enriquecido | Ya está cubierto: el snippet imprime el valor sin escapar |
| `TODOS[…]` con la clave bajo otro espacio | El espacio de nombres no es `custom` | Cambia `custom` por el que salga |

`CLAVES-CUSTOM` es el más útil de los seis: dice **exactamente** con qué nombre
está guardado el campo en ese producto.

> **Metaobjeto y metacampo no son lo mismo**, y en el admin están uno al lado del
> otro. El metacampo es un campo **dentro de la ficha del producto**; el
> metaobjeto es una **entidad aparte** que luego se referencia, y de ahí el Liquid
> de la tarjeta no lee. Tiene que ser metacampo de producto, tipo texto.

> **Un aviso sobre los títulos.** En la tienda los productos se llaman
> «Presoterapia BPS PLUS: Recuperación Muscular Inalámbrica» y ocupan dos líneas
> en la tarjeta. En el prototipo el título es corto —«Presoterapia BPS PLUS»— y el
> resto va en la descripción. Si quieres el reparto del prototipo, el título largo
> hay que acortarlo en el admin y mover la segunda mitad al metacampo.

---

## §H-4 · El bloque de suscripción del pie

Comparado con el prototipo faltaban cinco cosas. Dos las arregla la hoja, dos
necesitan Liquid y una es un ajuste que está en un sitio poco evidente.

| | Prototipo | Tienda | Dónde se arregla |
|---|---|---|---|
| Titular | **32 px** (24 en móvil) | 18 px | Hoja |
| Formulario | Fila: campo de **743 px** + botón al lado | Columna con `max-width: 36rem`, campo de 358 | Hoja |
| Botón | Píldora de **160×40** con «Suscribirse» | Flecha de 44 px **dentro** del campo, sin texto | Hoja + Liquid |
| Nota legal | «Al enviar tu dirección de correo aceptas la…» con enlaces | **No existe** | Liquid |
| Texto del campo y del botón | — | No se puede editar desde la sección | Idiomas |

### Por qué el titular salía en 18 px

Dawn usa **la misma clase** `.footer-block__heading` para el rótulo de las
columnas de menú y para el titular del boletín. La regla del apartado 11 de la
hoja los pone todos en 18 px, que es lo correcto para las columnas, y se comía el
titular del boletín. Ahora hay una regla aparte para el del boletín.

### Lo que necesita Liquid, y por qué

Dos cosas no se pueden hacer con CSS:

- **La etiqueta del botón.** Dawn solo pinta una flecha y deja el texto en el
  `aria-label`, así que no hay nada que enseñar. Con CSS habría que escribir
  «Suscribirse» dentro de un `content`, y eso deja el texto fuera del archivo de
  idioma y sin poder traducirse.
- **La nota legal.** Lleva **enlaces** a la política de privacidad y a los
  términos, y un enlace no se puede crear desde CSS.

Están las dos en **`shopify/sections/footer.liquid`**, que es el pie de Dawn
15.4.1 con esos dos añadidos y nada más. Cópialo entero sobre
`sections/footer.liquid`. El original está en `shopify/dawn-original/footer.liquid`.

Los enlaces de la nota **no llevan URL escrita a mano**: salen de las políticas de
la tienda, así que si cambian en Configuración → Políticas, cambian aquí:

```liquid
<a href="{{ shop.privacy_policy.url }}">{{ shop.privacy_policy.title }}</a>
```

Si una política no existe, ese trozo no se imprime.

### El texto que «no se puede editar»

Hay tres textos en ese bloque y cada uno vive en un sitio distinto. Es lo que
hace parecer que no se pueden cambiar:

| Texto | Dónde se edita |
|---|---|
| El titular | **Personalizar → Pie de página → «Suscriptor de correo electrónico» → Encabezado** |
| El «Correo electrónico» del campo | **Contenido → Idiomas → Editar traducciones del tema**, clave `newsletter.label` |
| El «Suscribirse» del botón | Igual, clave `newsletter.button_label` |

Los dos últimos son cadenas del tema, no de la sección: por eso no aparecen en el
editor de Personalizar. La frase de la nota legal sí está escrita en el Liquid
—en español, porque la tienda es de un solo idioma—; si algún día hace falta
traducirla, hay que pasarla al archivo de idioma.

### Comprobado

Con la hoja y el pie nuevos, medido a 1440 y a 390 px contra el prototipo:

| | Prototipo | Tienda ahora |
|---|---|---|
| Titular | 32 px / margen 30 | **32 / 30** |
| Formulario | fila, hueco 8, ancho 911 | **fila, 8, 911** |
| Campo | 743 px | **749** |
| Botón | 160×40, píldora blanca, «Suscribirse» | **igual** |
| Nota | 13 px, una línea | **13 px, una línea** |
| Móvil | titular 24, campo 192, botón 160 | **24 / 198 / 160** |

> Al hacerlo salió un fallo de la hoja que llevaba tiempo ahí: el apartado 11
> declara `.footer a { display: flex; gap: 10px }` porque los enlaces de menú del
> pie llevan icono a la izquierda, pero eso alcanza a **todos** los enlaces del
> pie. Los de la nota legal se convertían en bloques de ancho completo y la frase
> salía partida en cuatro líneas. Corregido con una excepción para la nota.

---

## §H-5 · El hueco del botón y la caja de contacto del pie

Dos remates del bloque de suscripción.

### El botón estaba pegado al campo y descentrado

La causa no era el `gap`: era **dónde cuelga el botón en el árbol de Dawn**.

```
form.footer__newsletter          ← flex, gap: 8px
  div.newsletter-form__field-wrapper
    div.field                    ← flex, align-items: normal
      input.field__input
      label.field__label         (flotante, en absoluto)
      button.newsletter-form__button
```

El botón **no es hermano del campo**: los dos son hijos de `.field`. El
formulario tiene un solo hijo, así que su `gap: 8px` no caía entre ellos —medido:
**1 px**, que era el borde del input—. Y `.field` viene en `align-items: normal`,
o sea estirado, con lo que un botón de 40 px se alineaba arriba en un campo de
60: **11 px descentrado**.

El hueco y el centrado van en `.field`, no en el formulario. De paso se quita el
`padding-right: 5rem` que Dawn le pone al input para dejar sitio a la flecha que
antes iba encima: con el botón fuera, eran 50 px de hueco muerto.

> **También estaba mal en el prototipo.** Su `.subscribe` no declaraba
> `align-items`, así que el botón se alineaba arriba y quedaba 10 px descentrado
> igual que en la tienda. Corregido en los dos, para que sigan midiendo lo mismo.

### La caja de «¿Tienes alguna otra pregunta?»

Va en la columna estrecha de la izquierda, **encima de los iconos sociales**, y
enlaza a Contacto. Dawn no tiene nada parecido, así que el marcado está en
`shopify/sections/footer.liquid` — el mismo archivo de §H-4, no hay que subir
nada más.

Los textos **son ajustes de la sección**, en *Personalizar → Pie de página →
«Caja de contacto (BPS)»*:

| Ajuste | Valor por defecto |
|---|---|
| Titular | `¿Tienes alguna otra pregunta?` |
| Texto | `Nuestro equipo está aquí para ayudarte.` |
| Enlace | la página de contacto |

Si dejas el titular vacío, la caja no se imprime.

En la hoja hace falta además darle su sitio en la rejilla del pie. La columna
estrecha lleva dos piezas, una debajo de otra, así que se colocan por fila y
columna en vez de por áreas —con áreas habría que hacer que la columna izquierda
ocupara dos filas y las dos piezas se pisarían:

```
Fila 1:  caja de contacto  |  boletín
Fila 2:  redes sociales    |  columnas de menú
```

### Comprobado

| | Prototipo | Tienda ahora |
|---|---|---|
| Hueco campo–botón | 8 px | **9** *(1 px es el borde del input)* |
| Desfase vertical del botón | 0 | **0** |
| Caja: x, ancho, relleno | 30, 264, 30/30 | **30, 264, 30/30** |
| Titular de la caja | 18 px **blanco** | **igual** |
| Línea de apoyo | 14 px `#cbcbcb` | **igual** |
| Icono | círculo de 30 px sobre `#373737` | **igual** |
| Orden en la columna | caja encima de las redes | **igual** |

> Los colores de la caja van al revés de lo que parece: **el titular en blanco y
> la línea de apoyo en gris**. Lo tenía cambiado y salió al medir.

---

## §I · Actualizar el tema (Dawn 16.0.0 y las siguientes)

«Tema añadido: no se han podido incluir las ediciones de código» **no es un
error**: es cómo funciona el actualizador de Shopify. Migra los **ajustes** —lo
que hayas configurado en Personalizar, que vive en `settings_data.json`— y **no
migra ningún cambio en archivos del tema**, porque no puede fusionar tu código
con el nuevo sin riesgo de romperlo.

Así que sí: hay que volver a poner los cambios. La buena noticia es que **son
cuatro cosas, no cuarenta**, y de ellas dos son copiar un archivo entero.

### Lo que hay que rehacer, y ya está

| Qué | Cómo | Riesgo de conflicto |
|---|---|---|
| `assets/bps-hyperice.css` | Subir el archivo **y enlazarlo** en el layout ⚠️ | **Ninguno.** Es un archivo nuevo, no toca nada de Dawn |
| `assets/bps-hyperice.js` | Subir el archivo **y enlazarlo** en el layout | **Ninguno.** Igual |
| `snippets/card-product.liquid` | Copiar `shopify/dawn16/card-product.liquid` | Ninguno: ya está preparado sobre v16 |
| `sections/footer.liquid` | Copiar `shopify/dawn16/footer.liquid` | Ninguno: el original de Dawn **no cambió** en v16 |
| `layout/theme.liquid` | **Tres líneas a mano.** Ver abajo | Bajo |

> ⚠️ **Subir un archivo a `Assets` no lo activa.** Es un archivo suelto hasta que
> el layout lo enlaza. Es el error que se dio al pasar a Dawn 16: la hoja estaba
> subida pero sin enlazar, así que **no se aplicaba ni una regla** y la tienda se
> veía como Dawn de fábrica —cabecera sin el efecto, pie sin el reparto, todo—.
> Se comprueba en diez segundos: ver «Cómo verificar» al final de este apartado.

Y **una cosa que la actualización arregla sola**: los tres archivos con el botón
de borde degradado —`image-banner`, `image-with-text` y `contact-form`— vuelven a
ser los de Dawn en el tema nuevo. Ya no hay que restaurarlos.

### Los scripts ya no van en `theme.liquid`

Antes había que pegar en el layout tres bloques `<script>` de 20 a 30 líneas cada
uno, en el sitio correcto. **Eso era el 90 % del trabajo de una actualización, y
donde es fácil equivocarse.** Ahora los tres están en un archivo,
`shopify/bps-hyperice.js`, y en el layout solo va la llamada.

De `theme.liquid` quedan **tres** ediciones, en dos sitios.

**1. Envolver el grupo de cabecera** (GUIA §3d), donde esté
`{% sections 'header-group' %}`:

```liquid
<div class="bps-header-group">
  {% sections 'header-group' %}
</div>
```

**2 y 3. La hoja y el comportamiento, juntos justo antes de `</body>`.** Van las
dos líneas seguidas, para que no se quede una sin poner:

```liquid
    {{ 'bps-hyperice.css' | asset_url | stylesheet_tag }}
    <script src="{{ 'bps-hyperice.js' | asset_url }}" defer="defer"></script>
  </body>
</html>
```

⚠️ **La hoja va antes de `</body>`, NO antes de `</head>`.** No es un capricho:
Dawn carga una veintena de hojas de componente **dentro del cuerpo**, una por
sección. Si la nuestra se pone en el `<head>`, esas van después y le ganan en
igualdad de peso. Esto ya estaba en la [guía §3a](GUIA-SHOPIFY.md), y **el
apartado que tienes delante se lo saltó**: decía «dos líneas» y omitía la de la
hoja.

> Si ya tenías los tres scripts pegados en el layout de la versión anterior,
> **bórralos** al pasar al archivo, o se ejecutarán dos veces.

### Dawn 16.0.0 es compatible. Esto es lo que se comprobó

No de oído: descargando las dos versiones del repositorio oficial de Shopify y
comparándolas.

| Comprobación | Resultado |
|---|---|
| Las **149 clases de Dawn** que usa la hoja, ¿siguen existiendo en v16? | **Sí, todas** |
| ¿Cuántos CSS de Dawn cambian entre 15.4.1 y 16.0.0? | **4 de 42**: `base.css`, `component-cart-items.css`, `component-cart-notification.css` y `component-menu-drawer.css` |
| Las reglas de `base.css` que la hoja **sobreescribe** —`.page-width`, `.field__button`, `.header__icon`, `.button--secondary`, `.header--middle-left`, `.header__icons`, `.header__inline-menu`, `.list-social__link`, `.header__heading-logo`— | **Idénticas** en las dos versiones |
| Las reglas nuevas de `base.css` v16, ¿pisan alguna nuestra? | **No.** Son dos, y ninguna toca lo que estilizamos |
| Las clases del cajón móvil, ¿sobreviven al recorte de `component-menu-drawer.css`? | **Sí, las siete** |
| `sections/footer.liquid` | **Byte a byte idéntico** entre v15.4.1 y v16.0.0 |
| Los anclajes de `theme.liquid` —`{% sections 'header-group' %}`, `#MainContent`, `content-for-layout`— | **Los tres siguen ahí.** El diff de ese archivo es solo *añadidos* de Shopify |
| Los puntos de inserción de `card-product.liquid` | **Iguales**, dos líneas más abajo (127 y 164 en vez de 125 y 162) |

De paso salió un selector muerto en la hoja: `.card-information__text`, que no
existe en Dawn ni en 15.4.1 ni en 16.0.0. Retirado.

### El procedimiento para la próxima versión

No hay que revisar los archivos uno por uno. La comprobación que importa son
**tres preguntas**, y las dos primeras se contestan con un `diff` del código de
Shopify:

1. **¿Cambian los archivos que modificamos?** Compara en
   `github.com/Shopify/dawn` la versión nueva con la que tienes, solo para
   `snippets/card-product.liquid`, `sections/footer.liquid` y
   `layout/theme.liquid`. Si un archivo no cambia, tu copia modificada vale tal
   cual.
2. **¿Cambian las reglas de Dawn que la hoja sobreescribe?** Son las nueve de
   `base.css` de la tabla de arriba, más `component-card.css`,
   `section-footer.css` y `component-newsletter.css`. Si no cambian, la hoja
   sigue valiendo.
3. **¿Sigue existiendo cada clase que usa la hoja?** Se saca la lista de la
   propia hoja y se busca en el código del tema nuevo.

Y después, sobre la vista previa del tema nuevo y antes de publicar, mirar a ojo
las seis cosas que más se rompen: la cabecera translúcida, el espaciado entre
secciones, la tarjeta de producto, el pie en escritorio, el pie en móvil con el
`+`, y una página de colección.

### ⚠️ Si actualizaste antes del 22 de agosto, vuelve a subir el `.js`

Al juntar los tres scripts en un archivo se me colaron **tres punto y coma que
faltaban**, y el resultado es de los que engañan: el primer bloque funcionaba y
los otros dos no llegaban a ejecutarse.

Cada bloque acababa así, sin punto y coma:

```js
(function () {
  …
})()
```

Cuando iban en `<script>` separados eso daba igual: cada uno era un programa
aparte. En **un solo archivo**, JavaScript lee `})()(function () {…` como una
llamada —el resultado del primer bloque, invocado con el segundo como
argumento—, y revienta con:

```
TypeError: (intermediate value)(intermediate value)(...) is not a function
```

Los bloques 2 y 3 **no se ejecutan**. Lo que se ve: la barra de anuncios se
esconde bien al bajar —ese es el bloque 1—, pero **la cabecera no se vuelve
transparente sobre la imagen** y **el pie no se plega en móvil**. Justo el
síntoma de «la cabecera sale gris al abrir y solo se pone bien al bajar»: no
cambiaba nada al bajar, es que nunca estuvo transparente.

Ya está corregido: cada bloque va como `;(function () { … })();`, con punto y coma
delante y detrás. **Vuelve a subir `bps-hyperice.js`** y basta.

Comprobado después, midiendo el estilo calculado de la cabecera en la home:

| | `<body>` | Fondo de la cabecera |
|---|---|---|
| Al abrir | `bps-hero` | `rgba(0, 0, 0, 0)` — transparente |
| Tras bajar | `bps-hero bps-past-hero` | `rgba(0, 0, 0, 0.8)` con desenfoque y borde |

### Cómo verificar que está todo, en diez segundos

En la tienda publicada, botón derecho → **Ver código fuente de la página**, y
busca (Ctrl+F) estas cinco cosas. Si alguna sale a `0`, es esa la que falta:

| Busca | Qué significa si no aparece |
|---|---|
| `bps-hyperice.css` | **La hoja no está enlazada.** No se aplica ni una regla |
| `bps-hyperice.js` | El comportamiento no está: ni barra que se esconde, ni cabecera translúcida, ni pie plegable |
| `bps-header-group` | Falta el envoltorio de §3d: la barra de anuncios tapará la cabecera |
| `bps-ayuda` | No has copiado `sections/footer.liquid` |
| `bps-card__descripcion` | No has copiado `snippets/card-product.liquid`, o falta el metacampo (§H-3) |

Así se localizó el fallo del paso a Dawn 16: `bps-hyperice.js` salía **1** y
`bps-hyperice.css` salía **0**. Todo lo demás —el envoltorio, la caja de
contacto, la nota legal y las ocho descripciones de tarjeta— estaba bien puesto.

**Y mira la consola.** F12 → pestaña *Consola*, y recarga. Si hay un error en
rojo que mencione `bps-hyperice.js`, el comportamiento está roto aunque el
archivo aparezca enlazado: es lo que pasó con los punto y coma del apartado
anterior. Los avisos de `shop-js` y `standard-events` son de Shopify y son
normales.

> **Lo importante para el futuro: cuanto menos código haya en archivos de Dawn,
> más barata es cada actualización.** Por eso los scripts se han movido a un
> archivo propio, y por eso las tres cosas que faltan de §D conviene hacerlas
> como **sección nueva** y no parcheando secciones de Dawn: un archivo propio se
> copia y ya está, mientras que un parche hay que volver a encajarlo cada vez.

---

## §J · Los iconos del menú de tecnología del pie

En el prototipo, los cuatro enlaces de la primera columna del pie llevan un icono
de línea a la izquierda. Los otros dos menús no.

**No hay nada que hacer en el editor: ya está resuelto en la hoja.** Basta con
volver a subir `bps-hyperice.css`.

### Por qué no se podía hacer con un ajuste

Esos enlaces salen de un **menú de navegación** (Contenido → Menús), y el Liquid
del pie de Dawn solo imprime `{{ link.title }}`. No hay campo para un icono, ni en
el menú ni en el bloque del pie.

Se podía resolver de dos maneras y elegí la segunda:

| | Cómo | Por qué no / sí |
|---|---|---|
| Parchear `sections/footer.liquid` | Un mapa de handle → icono dentro del bucle de enlaces | El pie ya es uno de los dos archivos que hay que rehacer en **cada** actualización del tema (§I). Añadirle más código lo encarece |
| **Atarlo a la URL desde la hoja** ✅ | `a[href*="/collections/presoterapia"]::before` con el icono en una máscara | Se queda en la hoja, que se sube y listo. Cero código en archivos de Dawn |

Es la consecuencia práctica de lo que dice §I: **cuanto menos código haya en
archivos de Dawn, más barata es cada actualización.**

### Cómo está montado

Cada icono es una máscara sobre `currentColor`, así que **hereda el color del
enlace** y se aclara con él al pasar el ratón, sin reglas extra. El mapa de hoy:

| Enlace | Icono |
|---|---|
| `/collections/presoterapia` | Compresión: tres líneas con los extremos curvados |
| `/collections/energia-luminica` | Luz: círculo con rayos |
| `/collections/recuperacion-polar` | Frío: copo de nieve |
| `/collections/liberacion-muscular` | Percusión: círculos concéntricos |

La caja de 19 px **solo la reservan esos cuatro**. Los enlaces de «Sobre
nosotros» y «Soporte» —y cualquier colección que añadas al menú sin icono— siguen
alineados sin sangría.

### Si cambias algo

- **Si cambias el handle de una colección**, ese enlace se queda sin icono; los
  otros tres siguen. Hay que actualizar su selector en el apartado 21 de la hoja.
- **Si añades una quinta categoría**, hace falta su icono: se añade un selector
  más a la lista de la caja y su `--bps-icono`. El apartado 21 lleva las
  instrucciones en el propio comentario.
- **Si reordenas el menú**, no pasa nada: los iconos van por URL, no por posición.

> Comprobado sobre el pie de la tienda publicada: los cuatro enlaces de
> colección salen con su icono de 19 px y los otros seis sin ninguno.

---

## §K · Las formas de pago del pie, en escala de grises

Shopify sirve esos iconos en los colores de marca —el azul de Visa, el rojo y
naranja de Mastercard, el rosa de Klarna—, y **son la única mancha de color de
toda la web**. Ya está resuelto en la hoja: vuelve a subir `bps-hyperice.css`.

### No hay ajuste, y tampoco vale cambiar el color

No hay ninguna opción en el editor para esto. Y la vía que uno probaría primero
—forzar el color con CSS— **no funciona**: los iconos llegan como `<svg>` en línea
con los colores metidos en un atributo `style` de cada trazado, así que una regla
de `fill` no los alcanza. Con `!important` sí, pero entonces **todos** los
trazados se van al mismo gris y cada tarjeta queda como un rectángulo liso sin
marca legible. Lo probé antes de descartarlo.

Lo que sí funciona es un filtro sobre el SVG, que actúa sobre el resultado
pintado y le da igual de dónde venga el color:

```css
.footer .list-payment svg { filter: grayscale(1); }
```

Las tarjetas mantienen su forma y su contraste, y las marcas siguen
reconociéndose. Si prefieres que la fila pese menos, se le añade
`opacity(0.75)`; no va de serie porque baja algo la legibilidad.

### Lo que hace Hyperice, y por qué no lo copiamos

Miré cómo lo resuelven ellos y **no usan un filtro**: sirven sus **propios iconos
monocromos**, planos en `#CBCBCB` —el mismo gris del pie— y a 36×20. Descargué
tres de sus SVG para confirmarlo.

Copiarlo exactamente obligaría a apagar los iconos de Dawn y añadir el marcado a
mano en `sections/footer.liquid`, que es justo uno de los dos archivos que hay que
rehacer en **cada** actualización del tema (§I). El filtro deja el pie monocromo y
no cuesta nada, así que se queda así. Si algún día quieres las marcas planas
exactas, el camino es ese y está apuntado.

> **Un aviso que no es técnico:** las redes de pago (Visa, Mastercard, Amex,
> PayPal) tienen normas de marca sobre cómo mostrar sus logos, y algunas piden los
> colores originales. En la práctica muchas tiendas los ponen en monocromo y no
> pasa nada, pero la decisión es vuestra, no mía.

---

## §L · La página de contacto, ya cuadrada

Montaste la página siguiendo §G-2 y salió descolocada. **No era la configuración:
eran cinco cosas de la hoja de estilos**, y las cinco están ya corregidas. Vuelve
a subir `bps-hyperice.css` y la página queda como el prototipo. No hay que cambiar
ni un ajuste del editor.

Esto es lo que pasaba, medido en la página publicada contra el prototipo a
1440px:

| Lo que se veía | Por qué | Arreglo |
|---|---|---|
| Todo el contenido centrado en una columna estrecha, sin alinearse con el resto de la web | Dawn mete la sección «Página» y la de «Formulario de contacto» en `page-width--narrow`: **726px centrados**. El titular arrancaba en x=357 y en el prototipo va en x=30 | §23: esas dos secciones pasan al ancho de página normal |
| **Los campos no se veían**: solo la etiqueta y un hueco en blanco | Dawn no le pone borde al campo (`border: 0`); el trazo lo dibuja el pseudoelemento `.field::after`, que va pegado a los cuatro lados de `.field`. Al subir la etiqueta encima, `.field` pasó a medir 73,6px y el recuadro envolvía etiqueta **y** campo. Y encima la hoja le apagaba la sombra que lo hacía visible | Borde **real** en el campo: 1px `#dfdfdf`, radio 4. Igual que el prototipo |
| Nombre y Correo en dos columnas | Dawn los reparte a partir de 750px | Un campo por fila |
| Las etiquetas dentro del campo, subiendo al escribir | Etiqueta flotante de Dawn | Etiqueta fija encima, 14px, peso 500 |
| «Escríbenos» enorme, más grande que el título de la página | El rótulo sale con la clase de tamaño del editor y con `h1` son **65px**, encima del `<h1>` de verdad | Fijado a 32px (el tamaño h4 del prototipo), sin depender del ajuste |
| El bloque «Atención 24/7» más metido que el resto | La hoja le daba relleno al envoltorio del texto enriquecido **y** al contenedor de la sección: se sumaban. Medido: x=60 en vez de x=30 | §17 reescrito: el relleno lo pone solo quien lleva `page-width` |
| La lista de enlaces con viñetas | Dawn saca el punto de serie | Filas con una línea fina entre ellas, como el `.checklist` del prototipo |

**Dos correcciones a §G-2**, que estaba mal en dos puntos:

- ❌ «Sección Página → Esquema de colores **Esquema 2**». **La sección «Página» de
  Dawn no tiene ajuste de esquema de color**, solo relleno. La franja hueso de la
  cabecerita se pone desde la hoja (§23) y ya está puesta: no busques ese
  desplegable, no existe.
- La fila «Tamaño del título **Mediano**» del formulario ya no importa: el rótulo
  va a 32px con cualquier valor.

### Comprobado

Reproduciendo la página publicada en local con la hoja nueva, a 1440px:

| | Prototipo | Tienda |
|---|---|---|
| Título de página | x=30 · 480,3 de ancho · 48px | x=30 · 480,3 · 48px |
| Entradilla | gris `#505050` | gris `#505050` |
| Campo de texto | 520×45,6 · borde 1px `#dfdfdf` · radio 4 · sangría 16px | 520×46 · borde 1px `#dfdfdf` · radio 4 · sangría 16px |
| Etiqueta | 14px · peso 500 · encima del campo | 14px · peso 500 · encima del campo |
| Botón de enviar | x=30 · 160×40 · negro | x=30 · 160×40 · negro |
| «Atención 24/7» | x=755 (columna derecha) | x=30 (apilado) · una sola línea |
| Filas de enlaces | raya `#dfdfdf` solo entre filas · 18px arriba y abajo | igual |

A 390px no hay desbordamiento: todo a 15px del borde y el formulario a 360 de
ancho.

### Lo que sigue sin salir igual, y no es un fallo de estilos

- **No hay dos columnas.** Dawn apila las secciones: el formulario arriba y
  «Atención 24/7» debajo. Esto ya estaba avisado en §G-2 y sigue igual: para las
  dos columnas hace falta una sección a medida
  ([`PROMPT-SECCIONES.md`](PROMPT-SECCIONES.md)).
- **Los iconos de las tres filas** (sobre, reloj, chincheta) no se pueden meter:
  el texto enriquecido no admite marcado. Las filas van sin icono.
- **El desplegable «¿Qué te interesa?»** sigue sin existir y sobra el campo de
  teléfono (§D-3 y el fragmento de §G-2). Si añades el desplegable a mano,
  ponle a la etiqueta la clase `field__label` y quedará colocada sola.
- **El rótulo «Escríbenos»** no está en el prototipo, que entra directo al
  formulario. Si lo quieres exacto, deja vacío el campo «Encabezado» de la
  sección; si lo dejas, ahora sale al tamaño correcto.
- **La miga de pan** («Inicio / Contacto») no la saca Dawn en las páginas.

---

## §M · La página hecha con PageFly (`/pages/contacto-bps`)

Montaste la página con PageFly para tener las dos columnas que Dawn no da, y
pegaste el HTML del prototipo en bloques de «HTML personalizado». **La idea es
buena** y no hay que deshacerla: es la forma más directa de tener el marcado
exacto del prototipo dentro de Shopify. Lo que fallaba es que ese marcado
**usaba clases que no existen en la tienda**, y que PageFly trae sus propios
valores por defecto para el formulario.

Medido en la página publicada, a 1440px:

| Lo que se veía | Medida real | Debería ser |
|---|---|---|
| Los iconos de la lista, gigantes | **502 × 502 px** cada `<svg>` | 18 × 18 |
| «Atención 24/7» pequeño, como un párrafo en negrita | 15px | 32px |
| «OTRAS VÍAS» igual que el texto normal | 16px, sin versalitas, negro | 12px, versalitas, gris `#505050` |
| Los párrafos secundarios en negro | negro pleno | gris `#505050` |
| «Escríbenos por Instagram» como enlace azul subrayado | `#0000EE`, 17px de alto | píldora de contorno, 40px de alto |
| La lista con viñetas y sin rayas | `list-style: disc` | filas con línea fina entre ellas |
| Etiquetas del formulario | 16px, peso 400 | 14px, peso 500 |
| Campos | 32px de alto, borde `#8a8a8a` de 0,66px, radio 8, letra 16px | 46px, borde `#dfdfdf` de 1px, radio 4, letra 14px |
| Botón «Enviar» | azul grisáceo `#5d6b82`, radio 4, 85×38, centrado | píldora negra 160×40, a la izquierda |

Los iconos de 502px son el motivo de que la página se viera «desordenada y
rara»: los `<svg>` del prototipo no llevan `width` ni `height` —el tamaño se lo
da el CSS— así que sin regla se estiran hasta el ancho de la columna.

### Lo que se arregla solo con volver a subir la hoja

Todo lo de la tabla. Es el apartado **§24** nuevo de `bps-hyperice.css`, con dos
partes: las clases del prototipo (`page-head__title`, `text-eyebrow`,
`text-muted`, `measure`, `checklist`, `split__body`, `btn btn--primary`,
`btn--secondary`, y los tamaños de `h4` a `h6`) y los controles del formulario de
PageFly.

Dos decisiones que conviene conocer:

- **Todo cuelga de `.__pf`**, la raíz que PageFly pone en la página. Así no toca
  nada del resto de la web y, a la vez, le gana en peso a las reglas de PageFly.
  Si algún día pegas ese mismo HTML en una sección «Liquid personalizado» de
  Dawn —fuera de PageFly— estas reglas **no** le llegarán; dímelo y lo amplío.
- Los campos se apuntan por `data-pf-type` (`FormInput`, `FormLabel`,
  `Form2.Button2`) y no por sus clases. Las clases que ves en el HTML
  (`sc-frWhkP`, `pf-17_`, `pf-field-1`) **las genera la aplicación y cambian al
  editar la página**; los `data-pf-type` no.

### Lo que hay que cambiar en el editor de PageFly: cinco cosas

Estas cuatro medidas y un color **no se pueden arreglar desde la hoja**, porque
PageFly las escribe elemento a elemento con selectores de más peso y volvería a
ganarlas en la siguiente edición. Son ajustes del editor:

| # | Dónde | Está | Debe estar |
|---|---|---|---|
| 1 | Ancho del contenedor, en las **dos** secciones | `1100px` | `1536px` (el ancho de página del sitio) |
| 2 | Relleno de la sección de la cabecerita | `20px` arriba y abajo | `56` arriba / `40` abajo |
| 3 | Relleno de la sección del formulario | `20px` arriba y abajo | `80` / `80` |
| 4 | Relleno lateral de las dos secciones | `15px` móvil / `24px` escritorio | `15` móvil / `30` escritorio |
| 5 | Fondo de la sección de la cabecerita | transparente | `#F7F5F5` |

Y una más, de aire: el **hueco entre las dos columnas** está en `16px` y en el
prototipo son `72px` en escritorio y `40px` en móvil.

Con el ancho a 1536 y el hueco a 72, la columna derecha cae en **x=756** y en el
prototipo está en **x=755**. Es la misma página.

> Los nombres exactos de estos ajustes pueden variar según la versión de PageFly
> —esto lo he deducido del CSS que genera la página, no de su editor—, pero son
> los cuatro rellenos, el ancho del contenedor, el fondo de sección y el hueco
> entre columnas. Si alguno no lo encuentras, dime cómo se llama en tu panel y lo
> concretamos.

### Comprobado

Reproduciendo la página publicada en local con la hoja nueva y esos ajustes
simulados:

| | Prototipo | PageFly |
|---|---|---|
| Título | x=30 · 480,3 de ancho · 48px | x=30 · 480,3 · 48px |
| Entradilla | gris `#505050` · 516 de ancho | gris `#505050` · 516 |
| Franja de la cabecerita | `#f7f5f5` | `#f7f5f5` |
| Campo | 520 de ancho · 45,6 de alto · borde 1px `#dfdfdf` · radio 4 | 520 · 46 · 1px `#dfdfdf` · radio 4 |
| Etiqueta | 14px · peso 500 | 14px · peso 500 |
| Botón | x=30 · 160×40 · negro | x=30 · 160×40 · negro |
| Antetítulo | 12px · versalitas · `#505050` | 12px · versalitas · `#505050` |
| «Atención 24/7» | 32px | 32px |
| Iconos de la lista | 18×18 | 18×18 |
| Columna derecha | x=755 | x=756 |

### Estado tras la primera vuelta

Medido otra vez sobre la página publicada. **Cuatro de los cinco ajustes están
puestos** y todo lo de la hoja funciona:

| | Estado |
|---|---|
| Franja hueso de la cabecerita, `#f7f5f5` | ✅ |
| Relleno de la cabecerita, 56 / 40 | ✅ |
| Relleno del formulario, 80 / 80 y 30 lateral (15 en móvil) | ✅ |
| Ancho del contenedor de la sección del formulario, 1536 | ✅ |
| Campo 520×46, borde 1px `#dfdfdf`, radio 4 · botón negro 160×40 en x=30 | ✅ |
| Iconos de la lista a 18×18 · «Escríbenos por Instagram» como píldora de contorno | ✅ |
| **Ancho del contenedor de la sección de la cabecerita** | 🔴 sigue en `1100px` |
| **Relleno lateral de la cabecerita** | 🔴 sigue en `24px`, debe ser `30` |
| **Hueco entre las dos columnas** | 🔴 sigue en `16px`, deben ser `72` (escritorio) / `40` (móvil) |

Los tres pendientes son la misma cosa que se ve a simple vista: **el título
arranca en x=170 y el formulario de debajo en x=30**, así que la cabecerita va
desalineada con el resto de la página. Con los tres puestos, la columna derecha
cae en **x=756 con 654 de ancho** y el prototipo mide **x=756 con 654**: exacto.

> Ojo con una cosa al editar: las clases de PageFly **cambian de número cada vez
> que guardas**. Las secciones que en la primera versión eran `pf-10_` y `pf-12_`
> ahora son `pf-31_` y `pf-33_`. Por eso §24 no las usa.

### El título y la entradilla en dos líneas: es lo correcto

No es un fallo. El prototipo limita el titular a **18 caracteres de ancho** y la
entradilla a **58**, para que no se lean de lado a lado de una pantalla de 1440.
Medido en los dos: titular 480,3px y **dos líneas**; entradilla 516,1px y **dos
líneas**. Sale igual en la tienda y en el prototipo.

Lo que sí faltaba —y ya está corregido en la hoja— es que el prototipo reparte
las líneas de los titulares con `text-wrap: balance` y esta hoja no lo tenía. Sin
él el corte salía «Hablemos de tu / recuperación» y con él «Hablemos de / tu
recuperación», que es el del prototipo. Va en el apartado 6, así que **afecta a
todos los titulares de la web**, no solo a esta página: ninguno queda con una
sola palabra en la última línea.

Si aun así lo quieres en **una sola línea**, no hace falta tocar la hoja: quita
la clase `page-head__title` del `<h1>` del bloque de HTML personalizado y déjalo
solo con `h2`. Ocupará los 1380px de ancho. No lo recomiendo —un titular de 48px
a lo ancho de la pantalla se lee peor y no es lo que hace ni Hyperice ni el
prototipo—, pero es un cambio de una palabra.

### Contenido que aún no coincide con el prototipo

Esto no es de estilos, es lo que hay escrito en la página:

- La etiqueta del segundo campo dice `Email`; en el prototipo es
  `Correo electrónico`.
- El botón dice `Enviar`; en el prototipo, `Enviar mensaje`.
- **Falta el desplegable «¿Qué te interesa?»**, que es justo lo que Dawn no
  podía dar (§D-3). El formulario de PageFly deja añadir un campo de tipo
  desplegable: ponle las seis opciones del prototipo (Presoterapia, Terapia de
  luz roja, Recuperación fría, Liberación muscular, Recovery, Equipar un centro
  o clínica) y quedará resuelto sin tocar código.
- Falta la miga de pan «Inicio / Contacto». Si la quieres, va en el mismo bloque
  de HTML personalizado, antes del `<h1>`, y ya tiene estilo en §24:
  ```html
  <nav class="breadcrumb" aria-label="Ruta de navegación">
    <a href="/">Inicio</a> <span>/</span> <span>Contacto</span>
  </nav>
  ```
- El asterisco de campo obligatorio lo pinta PageFly en rojo. La paleta del
  prototipo no tiene rojo, así que §24 lo deja en el gris del texto secundario.
  Si prefieres el rojo de aviso, se borra una regla.

### Dos cosas de fondo, antes de dejarla fija

1. **Decide cuál es la página de contacto.** Ahora hay dos: la de Dawn en
   `/pages/contacto` (la del §L) y esta en `/pages/contacto-bps`. El menú y el
   bloque «¿Tienes alguna otra pregunta?» del pie apuntan a la primera. Si esta
   se queda, hay que repuntar esos enlaces —o mejor, asignarle la plantilla de
   PageFly a la página `contacto` de siempre y borrar la copia, para no partir el
   SEO ni dejar dos URLs con lo mismo.
2. **PageFly y las actualizaciones del tema (§I).** PageFly se instala sobre el
   tema publicado; cuando actualices Dawn, revisa en su panel que la página
   sigue conectada al tema nuevo, igual que hay que volver a subir nuestros
   cuatro archivos. Y ojo con el peso: PageFly añade su propio CSS y JS a esa
   página.

---

## Lo que ya está bien

Para que quede constancia de lo que **no** hay que tocar, esto coincide al
píxel entre prototipo y tienda:

- Barra de anuncios: negra opaca, 38 px de alto
- Cabecera: transparente sobre el hero, fondo negro al 80 % con desenfoque al
  bajar, y el bloque fijo bien colocado
- Enlaces del menú: 14 px, peso 500, blancos, sin versalitas
- Titular del hero: 65 px, peso 500, tracking −0,65 px, interlineado 71,5 px
- Titulares de sección: 48 px, peso 500
- Botones: 40 px de alto, píldora completa, 14 px, peso 500
- Tarjeta de producto: caja `#f7f5f5` con 4 px de radio, imagen en 13/12,
  divisoria `#dfdfdf`, panel 15/20/20, título 18 px, precio 14 px
- Multicolumna: iconos de 28 px, rótulo 18 px, texto 14 px en gris
- Pie: fondo `#212121`, rótulos 18 px blancos, enlaces 16 px en `#cbcbcb`
- Móvil: hamburguesa a la derecha, a 15 px del borde

---

## Orden para aplicarlo

1. **Sube la hoja** `bps-hyperice.css` otra vez (guía §3a). Cierra §B de golpe.
2. **Arregla los scripts** de `theme.liquid` (§C). El de las colecciones (C-3) es
   el más urgente: hoy esas páginas no se pueden leer.
3. **Espaciado** (§A-1): «Espacio entre las secciones» a `0` y luego el relleno
   sección por sección. Es lo que más se nota.
4. **Cabecera y logotipo** (§A-2), **pie** (§A-4) y **apagar los dos selectores
   del pie** (§A-5). Son cinco números y dos interruptores.
5. **Tarjeta de producto** (§A-3): Proveedor, Agregado rápido y Columnas. Y
   rellena el campo **Proveedor** de cada producto.
6. **Las páginas interiores** (§G), en este orden de rentabilidad: Contacto,
   Preguntas frecuentes, Colección, Ficha de producto, Sobre nosotros, Blog. Lo
   primero de cada una es **quitar la sección de la IA** que hay ahora.
7. **La descripción corta de la tarjeta** (§H-2): el metacampo, el snippet y
   rellenar el campo producto a producto. La línea separadora no hay que tocarla,
   ya está (§H-1).
8. Decide qué hacer con lo que queda de §D: dejarlo así o encargar las secciones
   a medida con el prompt de [`PROMPT-SECCIONES.md`](PROMPT-SECCIONES.md). Lo de
   cambiar de tema está contestado en §F: no hace falta.

Después de esto vuelvo a medir y te digo si queda algo.
