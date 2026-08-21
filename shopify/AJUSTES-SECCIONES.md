# Ajustes de sección, uno por uno

Complemento de la §1 de la guía. Allí están los ajustes **de Configuración**, que
valen para toda la tienda. Aquí están los **de cada sección**, que se editan
entrando en la sección desde el panel de la izquierda.

Nombres, opciones y valores de fábrica salen de los archivos de `sections/` y de
la traducción al español de **Dawn v15.4.1**, así que son literalmente los que
verás.

> **Los nombres de sección no son los que uno diría.** La cabecera se llama
> **«Encabezado»**, y la ficha de producto **«Información de producto»**. Si
> buscas «Cabecera» en la lista de secciones no la encuentras.

Cada tabla lleva **todas** las opciones que ofrece la sección, incluidas las que
se quedan como están, para que no tengas que adivinar si te has saltado alguna.
La columna «Por qué» solo se rellena cuando el valor no es evidente.

Leyenda de la columna «Valor»:

- **En negrita** = hay que cambiarlo respecto a lo que trae Dawn
- Sin formato = coincide con el valor de fábrica, no toques nada
- ⚠️ = si lo pones mal, rompe el diseño

---

## Encabezado

*(Personalizar → cualquier plantilla → sección **Encabezado**, arriba en la lista)*

| Ajuste | Valor | Por qué |
|---|---|---|
| Posición del logo | Centrado a la izquierda | |
| Posición del logo en dispositivo móvil | **Izquierda** | De fábrica viene centrado; Hyperice lo pone a la izquierda |
| Menú | vuestro menú principal | |
| Tipo de menú | Desplegable | Solo afecta a escritorio. Da igual cuál elijas de cara al diseño |
| **Encabezado fijo** | **Siempre** ⚠️ | Es el **quinto ajuste**, justo debajo de «Tipo de menú». De fábrica está en «Al desplazarse hacia arriba», que hace desaparecer la cabecera al bajar |
| Línea separadora | **Desactivada** | La hoja de estilos dibuja su propia línea al 28 % de blanco. Si dejas también la de Dawn salen dos |
| Color → Esquema de colores | **Esquema 3** | Para que la vista previa del editor no la enseñe blanca |
| Color → Esquema de colores del menú | **Esquema 3** | |
| Utilidades → Selector de país o región | Activado | |
| Utilidades → Selector de idioma | Activado | |
| Utilidades → Avatar de cuenta de cliente | Activado | |
| Espaciado → Margen inferior | `0` ⚠️ | Este hueco cae **dentro** del bloque fijo y se pinta con su fondo translúcido, sin contenido: se ve como una segunda franja colgando bajo la cabecera. La hoja lo anula por si acaso, pero déjalo en `0` |
| Relleno → Arriba | **`16`** | De fábrica `20`. Medido: con `12` la cabecera queda en 64,5 px y el prototipo mide **73**. Ver [PARTE 2](GUIA-SHOPIFY-PARTE-2.md) §A-2 |
| Relleno → Abajo | **`16`** | |

> **Hoy vuestra tienda tiene «Al desplazarse hacia arriba»** (lo dice el
> `data-sticky-type` del HTML). Con ese valor la cabecera se esconde al bajar y
> solo reaparece al subir, que no es el comportamiento de Hyperice: allí está
> siempre visible y lo único que desaparece es la barra de anuncios.

## Barra de anuncios

| Ajuste | Valor | Por qué |
|---|---|---|
| Rotar los anuncios automáticamente | Desactivado | |
| Cambiar cada | *(irrelevante sin rotación)* | |
| Esquema de colores | **Esquema 3** | Negra, como en el prototipo |
| Línea separadora | **Desactivada** | |
| Utilidades → Íconos de redes sociales | Desactivado | |
| Utilidades → Selector de país o región | Desactivado | Ya está en la cabecera |
| Utilidades → Selector de idioma | Desactivado | |

## Banner de imagen

*(La sección del hero de la home. Se llama «Banner de imagen», no «Banner con imagen».)*

| Ajuste | Valor | Por qué |
|---|---|---|
| Imagen 1 | la apaisada del hero | Ver §7 de la guía |
| Imagen 2 | vacío | |
| Opacidad de sobreposición | `0` | El velo lo pone la hoja de estilos, con dos degradados cruzados. Si además pones aquí un %, la foto queda demasiado apagada |
| Altura | **Grande** | |
| Animación | Ninguna | Ni «Movimiento de ambiente» ni «Ampliar al desplazarse»: Hyperice deja la foto quieta |
| Contenido → Posición | **Abajo a la izquierda** | De fábrica va centrado |
| Contenido → Alineación | **Izquierda** | |
| Contenido → Contenedor | **Desactivado** | Con esto activado el texto sale en una caja blanca sobre la foto |
| Contenido → Esquema de colores | **Esquema 3** ⚠️ | **Imprescindible.** Con el esquema 1 el botón de contorno se dibuja en negro sobre la fotografía y es invisible |
| Diseño móvil → Apilar imágenes | Activado | |
| Diseño móvil → Alineación | **Izquierda** | |
| Diseño móvil → Contenedor | **Desactivado** | |

Bloques:

| Bloque | Ajuste | Valor |
|---|---|---|
| Título | Título | `Recupera. Rinde. Repite.` — sin `<span>` y sin mayúsculas (ver `CODIGO-EXISTENTE.md` §2) |
| Título | Tamaño del título | **Extra grande** |
| Texto | Estilo | Cuerpo |
| Botones | Botón 1 → Etiqueta | `Comprar ahora` |
| Botones | Botón 1 → Estilo de contorno | Desactivado *(sólido)* |
| Botones | Botón 2 → Etiqueta | `Conocer la tecnología` |
| Botones | Botón 2 → Estilo de contorno | **Activado** |
| Sección | Relleno → Arriba / Abajo | **`0`** ⚠️ **Excepción**: el hero va a sangre, pegado a la cabecera. Ver [PARTE 2](GUIA-SHOPIFY-PARTE-2.md) §A-1 |

> **Sobre «Altura → Grande».** Son 720 px fijos, y el prototipo usa 88 % del alto
> de la pantalla (792 px en una de 900). El editor solo ofrece cuatro alturas
> fijas, así que la diferencia la corrige la hoja de estilos. No hay nada que
> tocar aquí.

## Colección destacada

*(Las filas de productos de la home.)*

| Ajuste | Valor | Por qué |
|---|---|---|
| Colección | la que toque | |
| Recuento de productos | `4` | |
| Texto → Título | en caja baja | |
| Texto → Tamaño del título | **Pequeño** | El titular de sección de Hyperice es un H2, no un H1 |
| Texto → Descripción | vacío | |
| Texto → Mostrar descripción… | Desactivado | |
| Diseño → Columnas | `4` | |
| Diseño → Carrusel | Desactivado | En escritorio es rejilla |
| Diseño → Productos de ancho completo | Desactivado | |
| Diseño → Botón "Ver todo" | Activado | |
| Diseño → Estilo "Ver todos" | **Enlace** | En Hyperice es un enlace subrayado con flecha, no un botón |
| Diseño → Esquema de colores | **Esquema 1** ⚠️ | Tiene que ser **blanco**. La tarjeta es gris `#F7F5F5`: sobre el esquema 2 se funde con la sección y desaparece |
| Tarjeta → Relación de aspecto de imagen | **Cuadrado** | De fábrica «Adaptar». Ver el aviso del final |
| Tarjeta → Forma de la imagen | Predeterminado ⚠️ | Ni Arco, ni Gota, ni Diamante: cualquiera de esas recorta la imagen con una silueta |
| Tarjeta → Mostrar segunda imagen al pasar el cursor | Desactivado | Hyperice no cambia de imagen: la amplía un 2 % |
| Tarjeta → Proveedor | **Activado** | Es la categoría sobre el título. Pon la categoría en el campo **Proveedor** de cada producto; la hoja la sube encima del titular |
| Tarjeta → Calificación del producto | Desactivado | |
| Tarjeta → Agregado rápido | **Estándar** | La hoja lo convierte en el icono de bolsa con «+» de la fila del precio. ⚠️ El botón de Dawn no trae icono: lo dibuja la hoja. Necesitas la versión con el arreglo B-9 de [PARTE 2](GUIA-SHOPIFY-PARTE-2.md) o saldrá vacío |
| Diseño móvil → Columnas | **`1`** | Para que la tarjeta se vea grande y la siguiente asome por el borde |
| Diseño móvil → Carrusel | **Activado** | En móvil Hyperice pasa las tarjetas de lado, no las apila |
| Relleno → Arriba / Abajo | **`80`** | El ritmo del prototipo son 160 px entre secciones: 80 abajo de una y 80 arriba de la siguiente. Dawn lo escala a 60 en móvil por su cuenta. Antes decía `0`: ver [PARTE 2](GUIA-SHOPIFY-PARTE-2.md) §A-1 |

## Lista de colecciones

*(Las cuatro categorías de la home.)*

| Ajuste | Valor | Por qué |
|---|---|---|
| Título | en caja baja | |
| Tamaño del título | **Pequeño** | |
| Diseño → Relación de aspecto de imagen | Cuadrado | Da igual: la hoja de estilos la sustituye con `!important` por el diseño lado a lado |
| Diseño → Columnas | **`2`** | De fábrica `3`. La tarjeta de categoría es horizontal y necesita el doble de ancho |
| Diseño → Esquema de colores | Esquema 1 | |
| Diseño → Botón "Ver todo" | Desactivado | |
| Diseño móvil → Columnas | `1` | |
| Diseño móvil → Carrusel | Desactivado | Estas se apilan |
| Relleno → Arriba / Abajo | **`80`** | El ritmo del prototipo son 160 px entre secciones: 80 abajo de una y 80 arriba de la siguiente. Dawn lo escala a 60 en móvil por su cuenta. Antes decía `0`: ver [PARTE 2](GUIA-SHOPIFY-PARTE-2.md) §A-1 |

> ⚠️ **Esta sección no puede dar la tarjeta de categoría del prototipo.**
> Comprobado sobre el HTML: la tarjeta de Dawn contiene **imagen, titular, la
> descripción de la colección y una flecha**. Y nada más. El **icono de la
> terapia y el botón no existen** en esta sección, ni como ajuste ni como bloque,
> así que ningún CSS los puede añadir.
>
> Tres salidas, de menos a más trabajo:
>
> 1. **Dejarlo así.** La hoja ya la pone en horizontal —imagen a un lado, texto al
>    otro— y la flecha hace de llamada a la acción. Es lo más parecido sin tocar
>    código. Rellena la **descripción de cada colección** en Shopify admin, que es
>    de donde sale el texto.
> 2. **Cuatro secciones «Imagen con texto»**, una por categoría. Cada una tiene
>    imagen, titular, texto y **botón**, así que sale la tarjeta completa del
>    prototipo. A cambio ocupan cuatro secciones a lo ancho en vez de una rejilla
>    de 2×2, y el icono sigue sin poder ir aparte de la imagen.
> 3. **Una sección a medida.** Es la única forma de tener icono + titular +
>    descripción + botón en una rejilla, exactamente como el prototipo.

## Banner de colección

*(La cabecera de las páginas de colección: el titular y la descripción que
pones en la colección desde el admin. Equivale a la franja hueso de
`.page-head` del prototipo.)*

| Ajuste | Valor | Por qué |
|---|---|---|
| Descripción | Activado | Es la entradilla bajo el titular |
| Imagen | **Desactivado** ⚠️ | Dawn no la pone detrás del texto sino **al lado**, y el resultado no se parece al prototipo. Si una colección tiene que abrir con foto a sangre, añádele encima una sección **«Banner de imagen»** |
| Esquema de colores | **Esquema 2** ⚠️ | Hoy está en el **4**, que es el del pie: la franja sale casi negra con el texto en gris. El prototipo la tiene en hueso `#F7F5F5` con el texto en negro |

> ⚠️ **Esta sección NO es un hero, y el script de la §3c no debe marcarla.** Con
> `.collection-hero` dentro del selector, todas las colecciones se tomaban por
> hero: la cabecera se quedaba transparente y el titular aparecía escrito encima
> del logotipo y del menú. Ver [PARTE 2](GUIA-SHOPIFY-PARTE-2.md) §C-3.

El relleno de la franja (56 arriba, 40 abajo) y el tamaño del titular los pone
la hoja de estilos: esta sección no tiene ajustes de relleno.

## Cuadrícula de productos

*(La plantilla de categoría.)*

| Ajuste | Valor | Por qué |
|---|---|---|
| Productos por página | `16` | |
| Columnas | `4` | |
| Columnas móviles | `2` | |
| Esquema de colores | **Esquema 1** ⚠️ | Mismo motivo que en Colección destacada: la tarjeta gris necesita fondo blanco |
| Tarjeta → Relación de aspecto de imagen | **Cuadrado** | |
| Tarjeta → Forma de la imagen | Predeterminado ⚠️ | |
| Tarjeta → Mostrar segunda imagen al pasar el cursor | Desactivado | |
| Tarjeta → Proveedor | **Activado** | Es la categoría sobre el título. Pon la categoría en el campo **Proveedor** de cada producto; la hoja la sube encima del titular |
| Tarjeta → Calificación del producto | Desactivado | |
| Tarjeta → Agregado rápido | **Estándar** | Igual que arriba, incluido el aviso del arreglo B-9 |
| Filtrado → Filtros | Activado | |
| Filtrado → Diseño de filtro | Horizontal | Los filtros no los estiliza la hoja: saldrán con el aspecto de Dawn. Horizontal es el que menos canta |
| Filtrado → Ordenación | Activado | |
| Relleno → Arriba / Abajo | **`80`** | El ritmo del prototipo son 160 px entre secciones: 80 abajo de una y 80 arriba de la siguiente. Dawn lo escala a 60 en móvil por su cuenta. Antes decía `0`: ver [PARTE 2](GUIA-SHOPIFY-PARTE-2.md) §A-1 |

## Resultados de búsqueda

Los mismos valores de tarjeta que en «Cuadrícula de productos»: **Cuadrado**,
forma **Predeterminado**, sin proveedor, sin calificación, sin segunda imagen.

## Información de producto

*(La ficha. Se llama «Información de producto».)*

| Ajuste | Valor | Por qué |
|---|---|---|
| Contenido fijo | Activado | Es lo que deja la galería pegada mientras el panel de compra sigue bajando, como en Hyperice |
| Esquema de colores | Esquema 1 | |
| Multimedia → Ancho | Grande | Se llama «Ancho», no «Tamaño» |
| Multimedia → Ajustar a la altura de la pantalla | Activado | |
| Multimedia → Ajustar | **Original** | La opción se llama «Original», no «Contener». «Rellenar» recortaría los renders |
| Multimedia → **Diseño** | **Carrusel de miniaturas** ⚠️ | Hoy está en «Apilado»: de ahí que se vean las tres imágenes seguidas |
| Multimedia → Diseño para móviles | Ocultar miniaturas | Ya viene así de fábrica |
| Multimedia → Posición | Izquierda | |
| Multimedia → Ampliar | Abrir Lightbox | Se llama «Abrir Lightbox». Hyperice abre un modal al pulsar |
| Multimedia → Ocultar otros elementos multimedia de variante… | Desactivado | |
| Multimedia → Video en bucle | Desactivado | |
| Relleno → Arriba / Abajo | **`80`** | El ritmo del prototipo son 160 px entre secciones: 80 abajo de una y 80 arriba de la siguiente. Dawn lo escala a 60 en móvil por su cuenta. Antes decía `0`: ver [PARTE 2](GUIA-SHOPIFY-PARTE-2.md) §A-1 |

> **Ojo con «Diseño»: hay dos opciones que muestran una imagen cada vez**,
> «Miniaturas» y «Carrusel de miniaturas». Elige la segunda: es la que añade el
> deslizamiento y las flechas, que es como se pasa la galería en Hyperice. Con
> «Miniaturas» la imagen solo cambia al pulsar una miniatura.

Bloques que conviene repasar:

| Bloque | Ajuste | Valor |
|---|---|---|
| Selector de variante | Estilo | Miniaturas |
| Selector de variante | Muestra | Círculo |
| Botones de compras | Botones de pago dinámico | Activado |
| Estado del inventario / SKU / Texto | Estilo | **Cuerpo** — nunca «Mayúscula» |
| Fila desplegable | Título e icono | Es el acordeón de la ficha. La hoja no lo estiliza |

## Producto destacado

*(El bloque a sangre sobre negro de la home.)*

| Ajuste | Valor | Por qué |
|---|---|---|
| Producto | Presoterapia BPS PRO | |
| Esquema de colores | **Esquema 3** ⚠️ | Es un bloque oscuro; con el esquema 1 el botón de contorno desaparece |
| Fondo secundario | Desactivado | |
| Multimedia → Ancho | **Grande** | |
| Multimedia → Ajustar a la altura de la pantalla | Activado | |
| Multimedia → Ajustar | **Rellenar** | Aquí sí: la imagen va a sangre y debe llenar la mitad de la sección |
| Multimedia → Posición | Izquierda | |
| Multimedia → Ampliar | **Sin zoom** | No es una galería, es un escaparate |
| Relleno → Arriba / Abajo | **`80`** | El ritmo del prototipo son 160 px entre secciones: 80 abajo de una y 80 arriba de la siguiente. Dawn lo escala a 60 en móvil por su cuenta. Antes decía `0`: ver [PARTE 2](GUIA-SHOPIFY-PARTE-2.md) §A-1 |

## Imagen con texto

| Ajuste | Valor | Por qué |
|---|---|---|
| Imagen | la que toque | |
| Altura | Adaptar a la imagen | |
| Ancho | Mediana | Reparto al 50 % |
| Colocación | alterna entre secciones | «Imagen primero» y «Imagen segunda», alternando |
| Animación | Ninguna | |
| Contenido → Diseño | Sin solapamiento | |
| Contenido → Posición | **Centrada** | |
| Contenido → Alineación | Izquierda | |
| Contenido → Alineación móvil | Izquierda | |
| Colores → Esquema de colores | Esquema 1 | |
| Colores → Esquema de color del contenedor | Esquema 1 | |
| Relleno → Arriba / Abajo | **`0`** | ⚠️ **Excepción.** En el prototipo esta franja va a sangre, sin aire propio. Ver [PARTE 2](GUIA-SHOPIFY-PARTE-2.md) §A-1 |

En los bloques, el de **Leyenda** viene de fábrica en estilo **Mayúscula**: ese es
el único sitio donde las versalitas son correctas, porque es el rótulo pequeño de
12 px que Hyperice sí escribe en mayúsculas.

## Multicolumna

*(La banda de envío gratis / compra segura / atención.)*

| Ajuste | Valor | Por qué |
|---|---|---|
| Título | en caja baja, o vacío | |
| Tamaño del título | **Pequeño** | |
| Imagen → Ancho | **Ancho de un tercio de columna** | Son iconos, no fotos |
| Imagen → Proporción | Adaptar a la imagen | Evita «Círculo»: mete el icono en un disco |
| Botón → Etiqueta / Enlace | vacío | |
| Diseño → Columnas | `3` | |
| Diseño → Alineación de columna | Izquierda | |
| Diseño → Fondo secundario | **Ninguno** | De fábrica está en «Mostrar como fondo de columna», que dibuja una caja gris detrás de cada icono. En el prototipo no la hay |
| Diseño → Esquema de colores | Esquema 1 | |
| Diseño móvil → Columnas | `1` | |
| Diseño móvil → Carrusel | Desactivado | |
| Relleno → Arriba / Abajo | **`48`** | ⚠️ **Excepción.** Es la tira baja del final (envío gratis, compra segura…) y en el prototipo va más apretada: 48, no 80. Ver [PARTE 2](GUIA-SHOPIFY-PARTE-2.md) §A-1 |

## Texto enriquecido

| Ajuste | Valor | Por qué |
|---|---|---|
| Posición de contenido | **Izquierda** | De fábrica va centrado |
| Alineación de contenido | **Izquierda** | |
| Esquema de colores | Esquema 1 | |
| Ancho completo | Activado | |
| Relleno → Arriba / Abajo | **`80`** | El ritmo del prototipo son 160 px entre secciones: 80 abajo de una y 80 arriba de la siguiente. Dawn lo escala a 60 en móvil por su cuenta. Antes decía `0`: ver [PARTE 2](GUIA-SHOPIFY-PARTE-2.md) §A-1 |
| **CSS personalizado** | **vaciarlo** ⚠️ | Hoy lleva un `color:#0080ff` con `!important`. Ver `CODIGO-EXISTENTE.md` §3 |

## Pie de página

| Ajuste | Valor | Por qué |
|---|---|---|
| Esquema de colores | **Esquema 4** ⚠️ | El de `#212121`. El pie de Hyperice no es negro |
| Suscriptor de correo electrónico | Activado | En Hyperice la newsletter vive dentro del pie, no como sección aparte |
| Encabezado | en caja baja | |
| Utilidades → Seguir en Shop | **Desactivado** | Mete un botón con la marca Shop que rompe el monocromo |
| Utilidades → Íconos de redes sociales | Activado | |
| Utilidades → Selector de país o región | **Desactivado** | Mete una columna de 120px de alto en la barra inferior. Ya está en la barra de anuncios. Ver [PARTE 2](GUIA-SHOPIFY-PARTE-2.md) §A-5 |
| Utilidades → Selector de idioma | **Desactivado** | |
| Utilidades → Íconos de forma de pago | Activado | |
| Utilidades → Enlaces a las políticas | Activado | |
| Espaciado → Margen superior | `0` | El hueco antes del pie lo pone la hoja (§14), que fija 80px. Si lo pones aquí también, se suman |
| Relleno → Arriba | **`80`** | Medido en el prototipo. Aquí decía `48`: ver [PARTE 2](GUIA-SHOPIFY-PARTE-2.md) §A-4 |
| Relleno → Abajo | **`24`** | De fábrica `36` |

En los bloques de **Menú**, el «Encabezado» de cada columna es el rótulo. Recuerda
la jerarquía de Hyperice, que es contraintuitiva: **el rótulo es más grande que
sus enlaces**, y de eso ya se encarga la hoja de estilos.

---

## Dos avisos que afectan a varias secciones

### El relleno de sección: ponlo a 0

Casi todas las secciones traen **36 px de relleno arriba y abajo** de fábrica, y
eso **se suma** a los 80 px de «Espacio entre las secciones de la plantilla» que
pusiste en Configuración. Resultado: 152 px entre secciones en vez de 80.

Deja el relleno de cada sección en **`0`** y que el ritmo lo lleve el ajuste
global. Así se cambia en un sitio y afecta a toda la tienda.

### La relación de aspecto no llega a 13/12

El ajuste se llama **«Relación de aspecto de imagen»** y solo ofrece *Adaptar a
la imagen*, *Retrato* (125 %) y *Cuadrado* (100 %). La proporción 13/12 de
Hyperice —92,31 %— no se puede pedir. Pon **Cuadrado** para que la vista previa
no engañe; el valor exacto lo fija `bps-hyperice.css`.

### Las secciones a medida rompen el espaciado

Dawn separa las secciones con `.section + .section`. Las secciones generadas con
IA **no llevan la clase `.section`**, así que rompen la cadena **dos veces**: ni
ellas reciben margen ni la siguiente. En la home eso deja dos huecos a cero.

La hoja de estilos lo arregla por su cuenta con `.shopify-section +
.shopify-section`. Si prefieres arreglarlo en origen, añade `"class": "section"`
al `{% schema %}` de esa sección.

### El «Agregado rápido» y la categoría de la tarjeta

Los dos se pueden tener, con una vuelta:

- **Agregado rápido → Estándar.** Dawn dibuja un botón ancho debajo del contenido;
  la hoja lo recoloca como icono de 24px en la fila del precio, a 20px de los
  bordes del panel.

  ⚠️ **El botón de Dawn no lleva ningún icono dentro**: solo el texto «Agregar al
  carrito» y un indicador de carga. La hoja esconde ese texto, así que **el icono
  lo dibuja ella misma** con una máscara. Si subes una versión de
  `bps-hyperice.css` anterior al arreglo B-9 de
  [PARTE 2](GUIA-SHOPIFY-PARTE-2.md), el botón sale como un círculo vacío.
- **Proveedor → Activado**, y pon la categoría en el campo **Proveedor** de cada
  producto. Dawn lo pinta debajo del título; la hoja lo sube encima y lo deja en
  versalitas de 12px. No hay otra forma sin tocar `card-product.liquid`.
