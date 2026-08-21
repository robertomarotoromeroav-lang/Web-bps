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
| Ajustes del editor pendientes de poner (§A) | 9 |
| Fallos de la hoja, ya corregidos en el repositorio (§B) | 8 |
| Código de `theme.liquid` pendiente de aplicar (§C) | 2 |
| Límites de Dawn que no se pueden igualar (§D) | 2 |

---

## §A · Ajustes del editor que faltan

Estos nueve valores explican la mayor parte de lo que se ve distinto. **Ninguno
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
| Colección / Colección destacada | Tarjeta → **Agregado rápido** | **Estándar** | El icono redondo de compra rápida no sale |
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

---

## §B · Fallos de la hoja de estilos (ya corregidos)

Estos ocho los ha destapado la medición y **ya están arreglados en
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

Sobre B-3: no bastaba una regla para `.page-width`. Dawn tiene tres selectores
que pesan más (`.utility-bar__grid.page-width`,
`.header:not(.drawer-menu).page-width` y uno con `:has()` para la barra de
anuncios) y el relleno no cambiaba. Ahora se sobreescriben los tres.

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

---

## §D · Lo que Dawn no puede dar

Dos cosas del prototipo que **no tienen equivalente** en la tarjeta de producto
de Dawn. No son fallos de configuración: el campo no existe.

- **D-1. La descripción corta de la tarjeta.** En el prototipo cada producto
  lleva una línea gris debajo del título («Recuperación muscular profesional
  para piernas»). La tarjeta de Dawn tiene título, proveedor, precio y
  distintivos, y nada más. Para tenerla haría falta una sección a medida.
- **D-2. El icono y el botón de la tarjeta de categoría**, ya anotado en
  `AJUSTES-SECCIONES.md`. La «Lista de colecciones» no ofrece ninguno de los
  dos. La alternativa sin programar es montar las cuatro categorías con cuatro
  bloques de «Imagen con texto».

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
2. **Arregla los dos scripts** de `theme.liquid` (§C). El del pie es urgente.
3. **Espaciado** (§A-1): «Espacio entre las secciones» a `0` y luego el relleno
   sección por sección. Es lo que más se nota.
4. **Cabecera y logotipo** (§A-2) y **pie** (§A-4). Son cinco números.
5. **Tarjeta de producto** (§A-3): Proveedor, Agregado rápido y Columnas. Y
   rellena el campo **Proveedor** de cada producto.
6. Decide qué hacer con §D: dejarlo así o encargar la sección a medida.

Después de esto vuelvo a medir y te digo si queda algo.
