# El menú desplegable tipo Hyperice

Qué hace falta para que los desplegables de la cabecera se comporten como los de
Hyperice: colecciones con foto en «Comprar», categorías del blog más uno o dos
artículos destacados en «Terapia», y un tercer desplegable de enlaces sueltos.

**Respuesta corta: sí se puede, y no hace falta ninguna aplicación.** Pero hay
que saber tres cosas antes de empezar.

---

## 1. Lo que ya trae el tema, gratis

Dawn **sí tiene megamenú**. Está en *Personalizar → Cabecera → «Tipo de menú de
escritorio»*, con tres opciones: `Desplegable`, **`Megamenú`** y `Cajón`. Hoy la
tienda está en `Desplegable`.

El megamenú de Dawn abre un panel a todo lo ancho y coloca el menú en una
**rejilla de seis columnas**: el segundo nivel en negrita como encabezado de
columna y el tercero como enlaces debajo. Comprobado en su hoja
`component-mega-menu.css`:

```css
.mega-menu__list { display: grid; gap: 1.8rem 4rem; grid-template-columns: repeat(6, minmax(0,1fr)) }
.mega-menu__link--level-2 { font-weight: 700 }
```

**Lo que no hace: imágenes.** Ni fotos de colección, ni artículos destacados, ni
carrusel. Es texto en columnas y nada más.

Así que el tercer desplegable que pide el cliente —enlaces definidos a mano— **ya
está cubierto** con activar ese ajuste. Los otros dos no.

---

## 2. El punto de partida real

Medido en la tienda publicada:

| | |
|---|---|
| Menú actual | **Plano**: Inicio · Productos · Blog · Contacto. **Ningún submenú** |
| Tipo de menú de escritorio | `Desplegable` |
| Colección `presoterapia` | con imagen ✅ · 3 productos |
| Colección `energia-luminica` | con imagen ✅ · 7 productos |
| Colección `recuperacion-polar` | con imagen ✅ · 2 productos |
| Colección `liberacion-muscular` | **sin imagen** 🔴 · **0 productos** 🔴 |
| Enlace «Blog» del menú | apunta a `/blogs/noticias`, que ahora es una redirección 301 a `/blogs/rendimiento` |

Dos cosas que hay que arreglar sí o sí, se haga el megamenú o no:

- **La colección «Liberación muscular» está vacía y sin imagen.** Sin productos
  dentro no hay nada que enseñar en el desplegable —ni en la web—. La pistola de
  masaje existe como producto pero no está asignada a esa colección.
- **El enlace del menú al blog** debe apuntar directamente a
  `/blogs/rendimiento`. Una redirección de más en el menú principal no rompe
  nada, pero es un salto innecesario en todas las visitas.

---

## 3. Lo que habría que construir

Un *snippet* nuevo, `snippets/bps-megamenu.liquid`, que decide **solo** qué panel
pintar mirando a dónde apunta cada entrada del menú. Sin ajustes nuevos que
mantener: todo se gobierna desde *Tienda online → Navegación*.

| Si la entrada de primer nivel… | El panel muestra |
|---|---|
| tiene hijos que son **colecciones** | Una rejilla de tarjetas con la **foto de la colección** —o la del primer producto, si la colección no tiene imagen— y su nombre. Es el «Comprar» de Hyperice |
| apunta a un **blog** | Las **etiquetas** del blog como columna de enlaces y, al lado, los **dos artículos más recientes** con su foto, su fecha y su titular. Es el «Terapia» |
| cualquier otra cosa | Columnas de enlaces, como el megamenú de Dawn |

Detalles de cómo se haría:

- **Sin JavaScript nuevo.** Dawn ya abre y cierra los paneles con su elemento
  `<header-menu>` y `<details>`, y con eso viene el teclado y el lector de
  pantalla resueltos. El carrusel de artículos en móvil se hace con
  `scroll-snap`, que es CSS.
- **Los estilos van en `bps-hyperice.css`**, como todo lo demás, así que
  sobreviven a las actualizaciones del tema.
- **El *snippet* es un archivo nuevo**: una actualización de Dawn **no lo toca**.
  Lo único que hay que rehacer en cada actualización son **tres líneas** dentro de
  `sections/header.liquid`, donde hoy se llama a `header-mega-menu`. Ver
  [PARTE 2 §I](GUIA-SHOPIFY-PARTE-2.md).
- En móvil se queda el cajón de Dawn, que ya funciona; se le pueden añadir las
  fotos después si compensa.

### Lo que hay que preparar en el admin antes

Está detallado paso a paso en el apartado 5, al final.

---

## 4. Las tres opciones, con su coste

| | Qué da | Coste |
|---|---|---|
| **A. Megamenú de Dawn** | Columnas de texto, tres niveles. El tercer desplegable del cliente, resuelto | **Un ajuste.** Cero código, cero mantenimiento |
| **B. Megamenú a medida** *(recomendada)* | Lo que pide el cliente: fotos de colección, etiquetas del blog y artículos destacados | Un *snippet* nuevo, estilos en la hoja y **tres líneas** en `header.liquid` que rehacer en cada actualización del tema |
| **C. Aplicación de megamenú** | Lo mismo, con panel propio de configuración | Cuota mensual, más JavaScript en todas las páginas y **una hoja de estilos ajena que peleará con la nuestra**. Es lo que ya pasó con PageFly, y ahí al menos era una página suelta; esto va en todas |

La recomendación es la **B**, y con un matiz de orden: **empezad activando la A**.
Cuesta un ajuste, deja el menú con estructura de verdad, y sirve para comprobar
que la jerarquía de *Navegación* está bien montada antes de escribir una línea de
código. Lo que se construya después se apoya en ese mismo menú.

---

## 5. Los pasos, en orden

Nada de lo que se hace aquí se tira después: el megamenú a medida lee **este
mismo menú**. Los pasos 1 a 3 no tocan código y se hacen en una tarde.

### Paso 1 · Arreglar la colección vacía

*Admin → Productos → Colecciones → Liberación muscular.*

1. Añade el producto **Pistola de Masaje Muscular de Percusión Profesional BPS**.
   Hoy la colección tiene **cero productos**, así que en la web está vacía.
2. En «Imagen», sube una foto. Las otras tres colecciones ya tienen.

Sin esto, en el desplegable de «Comprar» esa tarjeta saldría sin foto y llevaría a
una página vacía.

### Paso 2 · Montar el menú

*Admin → Tienda online → Navegación → Menú principal.*

Ahora mismo es plano: Inicio · Productos · Blog · Contacto. Hay que dejarlo así:

| Nivel | Nombre | Enlace |
|---|---|---|
| 1 | Comprar | `/collections/all` |
| 2 | · Presoterapia | `/collections/presoterapia` |
| 2 | · Terapia de luz roja | `/collections/energia-luminica` |
| 2 | · Recuperación fría | `/collections/recuperacion-polar` |
| 2 | · Liberación muscular | `/collections/liberacion-muscular` |
| 2 | · Ver todos los productos | `/collections/all` |
| 1 | Blog | `/blogs/rendimiento` |
| 1 | Nosotros | `/pages/sobre-nosotros` |
| 2 | · Quiénes somos | `/pages/sobre-nosotros` |
| 2 | · Preguntas frecuentes | `/pages/preguntas-frecuentes` |
| 2 | · Contacto | la página de contacto que dejéis publicada |
| 1 | Inicio | `/` |

Cómo se hace un elemento de segundo nivel: se crea normal con «Agregar elemento»
y después **se arrastra por el punteado de la izquierda hasta dejarlo debajo y
ligeramente a la derecha** del que va a ser su padre. Shopify lo marca con una
sangría.

Dos avisos:

- El enlace de «Blog» hoy apunta a `/blogs/noticias`, que es una **redirección**.
  Cámbialo a `/blogs/rendimiento`.
- «Terapia» todavía **no**: ese desplegable vive de las etiquetas del blog, y las
  etiquetas solo existen cuando hay artículos publicados. Va en el paso 4.

### Paso 3 · Encender el megamenú que ya trae el tema

*Personalizar → Cabecera → «Tipo de menú de escritorio» → **Megamenú** → Guardar.*

Desde ese momento «Comprar» y «Nosotros» abren un panel a todo lo ancho con sus
enlaces en columnas. **«Nosotros» ya queda terminado**: es exactamente el tercer
desplegable de enlaces sueltos que pedía el cliente. «Comprar» funciona, pero de
momento sin fotos.

### Paso 4 · Cuando haya dos o tres artículos publicados

Añade en el menú, al mismo nivel que «Comprar»:

| Nivel | Nombre | Enlace |
|---|---|---|
| 1 | Terapia | `/blogs/rendimiento` |
| 2 | · Presoterapia | `/blogs/rendimiento/tagged/presoterapia` |
| 2 | · Luz roja | `/blogs/rendimiento/tagged/luz-roja` |
| 2 | · Frío | `/blogs/rendimiento/tagged/frio` |
| 2 | · Liberación muscular | `/blogs/rendimiento/tagged/liberacion-muscular` |

Cada enlace tiene que llevar la etiqueta **tal como se escribió**, en minúsculas y
sin acentos: `frio`, no `frío`.

### Paso 5 · Las fotos y los artículos destacados ✅ *(ya hecho, listo para instalar)*

El código está escrito y verificado. Son **tres cosas**:

1. **Sube el archivo nuevo** `shopify/snippets/bps-megamenu.liquid` a
   *Editar código → Snippets → Agregar un nuevo snippet*, con el nombre
   `bps-megamenu`, y pega el contenido.
2. **Cambia una palabra** en `sections/header.liquid`. Busca esto —está sobre la
   línea 175—:

   ```liquid
   if section.settings.menu_type_desktop == 'dropdown'
     render 'header-dropdown-menu'
   elsif section.settings.menu_type_desktop != 'drawer'
     render 'header-mega-menu'
   endif
   ```

   y deja la penúltima línea así:

   ```liquid
     render 'bps-megamenu'
   ```

3. **Sube `bps-hyperice.css`** otra vez: los estilos son el apartado 28.

Y dos ajustes en *Personalizar → Cabecera*:

| Ajuste | Valor | Por qué |
|---|---|---|
| Tipo de menú de escritorio | **Megamenú** | Con «Desplegable», Dawn ni siquiera llama a este archivo |
| Color del menú | *(da igual)* | El panel se pinta como la cabecera, no con el esquema. Ver «la superficie», más abajo |

**Segunda vuelta.** La primera versión no se comportaba como Hyperice en cuatro
cosas, y las cuatro están corregidas:

| Lo que fallaba | Por qué | Ahora |
|---|---|---|
| Fotos demasiado grandes | Cinco tarjetas repartiéndose los 1.380px del ancho de página: **256px cada foto** | Cuatro tarjetas de **200px** con la foto en cuadrado |
| Sin descripción | No se pintaba | Debajo del nombre, la **descripción de la colección** —«Drenaje linfático, recuperación muscular y piernas ligeras»—, que en esta tienda ya está escrita y es de una línea |
| «Ver todos los productos» salía como tarjeta con un hueco gris | Se trataba igual que una colección | Va a la **columna de texto de la derecha**, como en Hyperice. El criterio no es el tipo de enlace sino tener foto: `/collections/all` también es una colección, pero no tiene imagen |
| «Conócenos» con los enlaces en fila y el primero descolocado | Era una rejilla de cuatro columnas | En **columna**, uno debajo de otro |

**Y la superficie.** Esto es lo que hacía que se vieran como dos cosas distintas.
En Hyperice, cuando la cabecera va transparente —que es como va la nuestra en todo
el sitio— el panel **no es blanco**: es la misma superficie que la cabecera. Está
en las clases de su propio marcado, descargado para comprobarlo:

```
[.header-bg-transparent_&_]:bg-black/80
[.header-bg-transparent_&_]:text-white
[.header-bg-transparent_&_]:backdrop-blur-[10px]
```

Negro al 80 % con 10px de desenfoque y letra blanca: exactamente lo que el
apartado 2 le da a la cabecera. Así que el panel ya no usa el esquema de color del
menú, sino ese mismo tratamiento, y además:

- **la raya inferior de la cabecera desaparece** mientras hay un panel abierto,
  que era lo que partía el bloque en dos;
- **sobre el hero**, donde la cabecera va transparente hasta que se baja, al abrir
  un panel toma el fondo: si no, el panel salía oscuro colgando de una cabecera
  invisible.

Las dos cosas se hacen con `:has()`, sin JavaScript.

Con esto, el ajuste «Color del menú» ya **no** hay que tocarlo: el panel se pinta
solo, igual que la cabecera.

**Comprobado** reproduciendo la cabecera publicada en local, a 1440px: panel en
negro al 80 % con desenfoque de 10px y letra blanca, la cabecera con el mismo
fondo y sin raya, tarjetas de 200×274,6 con foto de 200×200, descripción en 14px
gris `#cbcbcb`, «Ver todos los productos» en x=1230 pegado al margen derecho, y
los tres enlaces de «Conócenos» en columna a 36px uno de otro.

**Tercera vuelta: las diferencias de estilo.** Puestos los dos menús uno al lado
del otro, seguían sin parecerse. Estas son las seis diferencias, medidas sobre la
captura de Hyperice, y cómo quedan:

| Detalle | Hyperice | Lo que teníamos | Ahora |
|---|---|---|---|
| **La forma de cada colección** | Una **fila horizontal**: miniatura pequeña a la izquierda, nombre y descripción a la derecha | Una tarjeta vertical con la foto grande arriba y el texto debajo | Fila horizontal |
| **Tamaño de la miniatura** | ~85px | 200px | **80×80** |
| **Reparto** | **Dos columnas** de filas | Cuatro tarjetas en fila | Dos columnas de 440px con 48 de separación |
| **Rayas** | Una **raya fina encima de cada fila**, blanca al 15 % | Ninguna | `border-top: 1px solid rgb(255 255 255 / .15)` |
| **La columna de la derecha** | Separada por una **raya vertical** y con la letra bastante más grande —unos 26px contra los 19 del nombre de cada fila— | Pegada al margen, sin raya y con la misma letra de 16px | Raya vertical a 48px, texto de **24px** |
| **El elemento abierto** | **Píldora blanca** con la letra en negro | El subrayado normal de la cabecera | Píldora blanca de radio 62,5rem |
| **El resto de la página** | Se **oscurece y desenfoca** detrás del panel | Se veía nítida | Velo negro al 50 % con 6px de desenfoque |

Cambiar el marcado obligó a arreglar cuatro cosas más, todas encontradas midiendo:

- **La descripción se iba a una tercera fila** debajo de la foto —la fila medía
  250px en vez de 113—, porque es hermana del nombre, no hija. Colocadas foto,
  nombre y descripción a mano en la rejilla, con `:has()` para que la foto ocupe
  las dos filas solo cuando hay descripción.
- **La flechita se montaba encima del texto** de la píldora: Dawn la pone en
  posición absoluta a 8px del borde. Pasa a ser un elemento más de la fila.
- **El menú se movía 27px al abrirse**: Dawn reserva `padding-right: 2.7rem` para
  esa flecha absoluta. Con la flecha ya en la fila, ese hueco sobra. Comprobado:
  las tres entradas caen en x = 253,5 / 356 / 449,9 con el panel abierto y cerrado.
- **La miniatura del artículo se quedaba en 80px**, heredando el ancho nuevo.
  Vuelve a ocupar el ancho de su tarjeta: 260×162,5.

**Comprobado** en la reproducción local a 1440px: filas de 440×113 en x=30 y
x=518, foto de 80×80, nombre en 18px, columna derecha en x=1110 con su raya de
1px y texto de 24px, píldora con fondo `rgb(255, 255, 255)`, letra negra, radio
625px y sin subrayado, y el panel en `rgba(0, 0, 0, 0.8)` con `blur(10px)`, el
mismo fondo que la cabecera.

En esta vuelta **solo cambia `bps-hyperice.css`**; el snippet se queda como está.

### En qué se nota cada paso

| Después del paso | Qué se ve en la web |
|---|---|
| 1 | La colección de liberación muscular deja de estar vacía |
| 2 | Nada todavía: el menú tiene estructura, pero el tipo «Desplegable» solo muestra el primer nivel |
| 3 | «Comprar» y «Nosotros» abren panel a todo lo ancho con sus enlaces. El tercer desplegable, terminado |
| 4 | «Terapia» abre con las categorías del blog |
| 5 | Fotos en «Comprar» y artículos destacados en «Terapia» |
