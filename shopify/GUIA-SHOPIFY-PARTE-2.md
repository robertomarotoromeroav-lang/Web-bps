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
| Fallos de la hoja, ya corregidos en el repositorio (§B) | 19 |
| Código de `theme.liquid` pendiente de aplicar (§C) | 3 |
| Límites de Dawn que no se pueden igualar (§D) | 3 |

Y al final, tres apartados que no son diferencias sino respuestas a preguntas
tuyas: **§F**, si conviene cambiar a otro tema gratuito; **§G**, cómo montar una a
una las ocho páginas del prototipo; y **§H**, la descripción corta de la tarjeta
y la línea separadora.

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

Estos diecinueve los ha destapado la medición y **ya están arreglados en
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
| 1 | **Página** | Esquema de colores **Esquema 2** (`#F7F5F5`) · Relleno Arriba **`56`** / Abajo **`40`** |
| 2 | **Formulario de contacto** | Encabezado `Escríbenos` · Tamaño del título **Mediano** · Esquema 1 · Relleno `80` / `80` |
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
  medida que lleve el formulario y el bloque de texto dentro.
- 🔴 **El desplegable «¿Qué te interesa?» no existe** (§D-3). Los campos de Dawn
  son Nombre, Correo electrónico, **Teléfono** y Comentario: falta el
  desplegable y sobra el teléfono. Si lo quieres, es un añadido en
  `sections/contact-form.liquid`, justo antes del campo de comentario:

  ```liquid
  <div class="field">
    <label class="form__label" for="ContactForm-interes">¿Qué te interesa?</label>
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
| Nombre | `Descripción corta` |
| Espacio de nombres y clave | **`custom.descripcion_corta`** ⚠️ tal cual, sin acento en «descripcion» |
| Tipo | **Texto → Texto de una línea** |
| Validaciones | Máximo de caracteres: `90` |

La clave tiene que ser exactamente esa, porque es la que lee el Liquid. Si pones
otra, cambia también la línea del `assign`.

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

### H-3. El snippet está bien y la descripción no sale

Con la prueba del texto fijo confirmada, el snippet **está puesto y en el tema
publicado**. Así que lo que falla es **la ruta al dato**, y hay tres candidatos.

**El primero, por cómo suele pasar: metaobjeto no es lo mismo que metacampo.**
Son dos cosas distintas del admin y están una al lado de la otra:

| | Qué es | Sirve aquí |
|---|---|---|
| **Metacampo** *(metafield)* | Un campo extra **dentro de la ficha de un producto** | ✅ Es lo que hace falta |
| **Metaobjeto** *(metaobject)* | Una **entidad aparte** con sus propios campos, que luego se referencia | ❌ El Liquid no lee de ahí |

Si creaste un metaobjeto, o un metacampo de tipo «Referencia a metaobjeto», el
Liquid recibe un objeto y no un texto: no imprime nada. Tiene que ser
**Metacampo de producto, tipo Texto → Texto de una línea**.

**El segundo: la clave no coincide.** El Liquid busca literalmente
`custom.descripcion_corta`. Al crear la definición, Shopify genera la clave a
partir del nombre y no siempre sale lo que uno espera —puede quedar con acento,
con guiones o con un `_1` al final si ya existía—. En la definición, dentro del
admin, se ve el «Espacio de nombres y clave» exacto: tiene que decir
`custom.descripcion_corta`, sin acento en «descripcion».

**El tercero: el valor no está guardado en el producto** que estás mirando.

### Cómo saber cuál de los tres es, sin adivinar

En `shopify/snippets/DIAGNOSTICO-metacampo.liquid` tienes un bloque que imprime
todo lo que hay. Pégalo **en lugar** del bloque `bps_desc`, mira una tarjeta,
apunta lo que sale y vuelve a poner el bloque bueno.

Imprime cinco cosas y se leen así:

| Lo que sale | Qué significa | Qué hacer |
|---|---|---|
| `TIPO[single_line_text_field]` y `VALOR[tu texto]` | Está todo bien | Vuelve al bloque bueno; si aún no sale, es caché del navegador |
| `TIPO[]` vacío y `CLAVES-CUSTOM[{}]` | En ese producto no hay **nada** bajo `custom` | El valor no se guardó, o la definición no existe |
| `CLAVES-CUSTOM[…]` con **otro nombre** de clave | La clave no es la que busca el Liquid | Cambia la clave en el `assign`, o renombra la definición |
| `TIPO[metaobject_reference]` | Es un metaobjeto, el caso de arriba | Crea un metacampo de texto y pasa los textos |
| `TIPO[rich_text_field]` | Es texto enriquecido | Ya está cubierto: ver abajo |
| `TODOS[…]` con la clave bajo otro espacio | El espacio de nombres no es `custom` | Cambia `custom` por el que salga |

`CLAVES-CUSTOM` es el más útil de los cinco: te dice **exactamente** con qué
nombre está guardado el campo en ese producto.

### Un cambio ya hecho en el snippet

De paso he hecho el bloque tolerante al tipo. Antes hacía
`.value | escape`, que con un campo de **texto enriquecido** no imprime nada
aprovechable. Ahora el valor se saca en dos pasos y se imprime sin escapar, así
que funciona igual con «Texto de una línea», «Texto multilínea» y «Texto
enriquecido»:

```liquid
{%- liquid
  assign bps_mf = card_product.metafields.custom.descripcion_corta
  assign bps_desc = ''
  if bps_mf != blank
    assign bps_desc = bps_mf.value
  endif
-%}
{%- if bps_desc != blank -%}
  <p class="bps-card__descripcion">{{ bps_desc }}</p>
{%- endif -%}
```

Está ya en `shopify/snippets/card-product.liquid`. Si tu caso era el del texto
enriquecido, con volver a subir el snippet se arregla. Los otros dos casos son de
datos y no los puede arreglar el código.

> **Un aviso sobre los títulos.** En la tienda los productos se llaman
> «Presoterapia BPS PLUS: Recuperación Muscular Inalámbrica» y ocupan dos líneas
> en la tarjeta. En el prototipo el título es corto —«Presoterapia BPS PLUS»— y el
> resto va en la descripción. Si quieres el reparto del prototipo, el título largo
> hay que acortarlo en el admin y mover la segunda mitad al metacampo.

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
