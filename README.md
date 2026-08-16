# BPS Performance — Rediseño con el look & feel de Hyperice

Rediseño de [bpsperformance.com](https://bpsperformance.com/) adoptando el
lenguaje visual de [hyperice.com/es-es](https://hyperice.com/es-es).

Contiene dos cosas:

1. **Un prototipo estático completo y navegable** —nueve páginas que cubren
   todas las plantillas de la tienda— para validar el diseño con contenido real
   antes de tocar Shopify.
2. **Una guía y una hoja de estilos para aplicarlo en la tienda Shopify real**
   (`shopify/`), que corre sobre el tema Dawn 15.4.1.

Todo el contenido, los productos, los precios y las imágenes son los reales de
BPS Performance, obtenidos de su web y de su catálogo público.

---

## El sistema de diseño

Los tokens no son una aproximación visual: están extraídos de las variables CSS
y de la hoja de estilos de producción de Hyperice.

| | Valor |
|---|---|
| **Tipografía** | Suisse Intl (de pago). Se carga **Inter** como sustituto libre; el stack prioriza Suisse Intl si algún día se licencia |
| **Titulares** | Peso 500 · tracking −0.01em · interlineado 1–1.15 · **sin mayúsculas** |
| **Escala** | H1 `clamp(45px, 4.51vw, 65px)` · H2 `clamp(38px, 3.33vw, 48px)` · H3 `clamp(32px, 2.78vw, 40px)` |
| **Cuerpo** | 16px / interlineado 1.4 / peso 400 |
| **Color** | Monocromo: `#000000` · `#FFFFFF` · `#F7F5F5` · `#2D2926` · `#505050` · `#DFDFDF` |
| **Pie** | Esquema propio: fondo `#212121`, texto `#CBCBCB`. Rótulo de columna 18px > enlaces 16px |
| **Marca** | `#0B59F8`, medido sobre el logotipo. Exclusivo del logotipo — nunca en componentes |
| **Botones** | Píldora `62.5rem` · alto 40px · ancho mínimo 160px · 14px peso 500 |
| **Radios** | 4px en tarjetas y campos · 2px en imágenes de categoría · píldora en botones e iconos |
| **Ritmo** | 80px entre secciones · margen lateral 15px móvil / 30px escritorio |
| **Cabecera** | Fija e idéntica en todo el sitio: negra al 80 % con desenfoque y contenido en blanco |
| **Menú móvil** | Cajón desde la izquierda, negro al 80 % con desenfoque de 20px |
| **Movimiento** | 0,2s en interfaz · 0,6s en zoom de imagen · sin sombras ni rebotes |

`styleguide.html` muestra todo esto renderizado.

### Los tres cambios que más transforman la marca

1. **Fuera las mayúsculas.** BPS titula hoy en versalitas (`RECUPERA. RINDE.
   REPITE.`). Hyperice titula en caja baja y reserva las mayúsculas a rótulos de
   12px. Es lo que más cambia el tono: de gimnasio a producto de precisión.
2. **Interfaz monocroma.** Ningún acento de color. El color lo aporta la
   fotografía.
3. **Aire.** 80px entre secciones, con la fotografía llevando el peso visual.

### Detalles verificados contra el código de Hyperice

Comportamientos que a simple vista se dan por supuestos y no son como
parecen. Todos están confirmados en su HTML y su CSS de producción:

- **La cabecera es fija, pero no cambia de color.** El `<header>` es `static`,
  y lo que queda fijo es el contenedor `<main-header>` que lo envuelve. Pasados
  50 px de scroll ese contenedor sube justo el alto de la barra de anuncios: la
  barra desaparece y la cabecera queda pegada arriba. Al volver arriba reaparece.
  Su fondo es oscuro translúcido (`bg-black/80` con desenfoque), **no blanco**:
  aquí es la misma en todas las páginas, y solo va transparente mientras se
  superpone a un hero, para no tapar la fotografía.
- **El pie no es negro.** Usa un esquema propio con fondo `#212121`. Y su
  jerarquía es contraintuitiva: **el rótulo de cada columna (18px, blanco) es
  mayor que sus enlaces** (16px, gris), no al revés.
- **Los enlaces de tecnología del pie llevan icono** de línea a la izquierda, y
  en móvil cada columna se colapsa tras un botón con un `+`.
- **La tarjeta de producto es una caja, no una imagen suelta.** Fondo `#f7f5f5`
  y 4px de radio, partida en dos por una línea: arriba la imagen en proporción
  13/12, abajo un panel con título, descripción y una fila de precio con acción
  rápida. Por eso las filas de producto van sobre blanco: si la sección fuese
  del mismo gris, la tarjeta desaparecería.
- **La tarjeta de categoría no superpone el texto a la foto.** Pone la imagen a
  un lado —apaisada en móvil, vertical en escritorio— y al otro un bloque con
  icono de la terapia, titular, descripción y botón.
- **Los iconos de cabecera viven en píldoras** con fondo propio: gris claro
  sobre blanco, blanco al 10 % sobre fotografía.
- **El menú móvil es un cajón oscuro anclado a la izquierda.** No es un panel
  blanco que baja desde arriba: su CSS declara `background-color: #000c` (negro
  al 80 %) con desenfoque de 20 px y texto blanco, y los separadores y píldoras
  van en blanco al 20 %. No lleva velo oscuro adicional, porque el propio cajón
  ya es translúcido. Repite el logotipo en su cabecera y cierra al pulsar fuera.

---

## Estructura

```
index.html               Home completa
productos.html           Catálogo (12 productos) con filtro por categoría
coleccion.html           Plantilla de categoría (Presoterapia)
producto.html            Ficha de producto (Presoterapia BPS PRO)
sobre-nosotros.html      Filosofía de marca y los tres pilares
faq.html                 Preguntas frecuentes en acordeón
blog.html                Listado de artículos
contacto.html            Formulario y vías de contacto
styleguide.html          Sistema de diseño renderizado

assets/css/tokens.css        Variables. Tema oscuro por sección con [data-theme="dark"]
assets/css/base.css          Reset y tipografía
assets/css/components.css    Botones, cabecera, tarjetas, filtros, formularios, pie
assets/css/layout.css        Contenedores, rejillas, hero, bloques editoriales
assets/js/site.js            Cabecera, drawer móvil, acordeones, filtros y cantidad
assets/img/                  Logotipo en 4 variantes (apilado/horizontal x negro/blanco)

shopify/GUIA-SHOPIFY.md      Cómo llevarlo a la tienda real, paso a paso
shopify/bps-hyperice.css     Capa CSS sobre Dawn 15.4.1
tools/build-logos.py         Regenera el logotipo vectorizando el original
tools/sync-chrome.py         Propaga cabecera, menú y pie desde index.html
```

### Mantener la cabecera y el pie sincronizados

Al ser HTML estático, cada página lleva su copia de la cabecera y del pie, y
editarlas a mano las desincroniza enseguida. **Cambia solo `index.html` y
propaga:**

```bash
python3 tools/sync-chrome.py
```

Ajusta por página el enlace marcado como actual, los anclas de la home y el
espacio que reserva la cabecera fija. En Shopify esto lo resuelven los
*snippets* de Dawn y el script deja de hacer falta.

Cada archivo HTML es una **plantilla**, no una página suelta: `coleccion.html`
sirve para las cuatro categorías y `producto.html` para los doce productos. En
Shopify una sola plantilla cubre todas las instancias.

Sin dependencias, sin proceso de build. Ábrelo con cualquier servidor estático:

```bash
python3 -m http.server 8000
```

### Versión publicada

`.github/workflows/pages.yml` publica el prototipo en GitHub Pages en cada
push. Para que funcione hay que activar Pages **una sola vez**: Settings →
Pages → Source → **GitHub Actions**. El `GITHUB_TOKEN` no tiene permiso para
activarlo por sí mismo.

Una vez activo, queda en
`https://robertomarotoromeroav-lang.github.io/Web-bps/`.

Ten en cuenta que el repositorio es público, así que el prototipo publicado
será accesible por cualquiera que tenga la URL.

### Tema oscuro por sección

Hyperice alterna bloques blancos y negros a pantalla completa. Aquí basta con
marcar la sección:

```html
<section class="showcase" data-theme="dark"> … </section>
```

El bloque invierte todos sus tokens, incluidos los botones: el primario pasa a
blanco y el secundario a contorno blanco. **Es obligatorio en cualquier sección
sobre fondo o fotografía oscura**, porque el botón de contorno se dibuja en
negro por defecto y desaparecería.

---

## Llevarlo a la tienda real

La tienda corre sobre **Shopify + Dawn 15.4.1**, así que buena parte del
rediseño se consigue desde el editor de temas sin escribir código. El
procedimiento completo —ajustes exactos, instalación del CSS, orden de las
secciones de la home y textos a reescribir— está en
**[`shopify/GUIA-SHOPIFY.md`](shopify/GUIA-SHOPIFY.md)**.

---

## Estado y limitaciones

**Verificado** con Chromium a 1440px y 390px en las nueve páginas: sin
desbordamiento horizontal, sin errores de consola, sin imágenes rotas y sin
enlaces internos rotos. Comprobado además el comportamiento de la cabecera a
distintas alturas de scroll, la apertura de los acordeones y el selector de
cantidad.

Pendiente de decisión del cliente:

- **Fotografía.** Es la mayor distancia con Hyperice y no se resuelve con CSS.
  Hyperice usa fotografía de estilo de vida (personas entrenando, luz natural);
  BPS usa renders de producto sobre fondo neutro. El prototipo usa los renders
  actuales para poder validar la maqueta con material real, pero convendría
  encargar 4 fotos de estilo de vida (una por categoría) y 1 apaisada para el
  hero. Detalle en `shopify/GUIA-SHOPIFY.md` §6.
- **Tipografía.** Suisse Intl es de pago (Swiss Typefaces). El prototipo usa
  Inter. Si se licencia, basta con servirla: el stack ya la prioriza.
- **Logotipo.** Cuatro variantes en SVG con fondo transparente: apilado y
  horizontal, cada una con el wordmark en negro y en blanco. El isotipo mantiene
  el azul en las cuatro. Se generan **vectorizando el archivo original** con
  `tools/build-logos.py`, así que las formas son las del logotipo. Si cambia,
  reemplaza `assets/img/logo-original.jpg` y vuelve a ejecutarlo.
- **Logotipo antiguo en la tienda.** El que sigue publicado en Shopify lleva
  degradado azul y "PERFORMANCE" debajo; el nuevo es azul plano y sin bajada.
  Hay que sustituirlo también allí o convivirán los dos.
- **Formularios y carrito.** Los formularios son maqueta (`action="#"`) y el
  botón de compra enlaza a la ficha real en Shopify: el prototipo no procesa
  pedidos. En la tienda lo gestiona el propio tema.
- **Contenido del blog.** Hay un solo artículo publicado, así que el listado
  muestra uno destacado. El diseño admite rejilla cuando haya más.
- **Cabeceras y pies duplicados.** El prototipo repite cabecera y pie en cada
  HTML por ser estático; `tools/sync-chrome.py` los mantiene idénticos. En
  Shopify eso lo resuelven los *snippets* de Dawn.
- **Fuentes desde Google Fonts.** Si se prefiere no depender de Google por
  RGPD, Inter puede autoalojarse en `assets/fonts/`.
