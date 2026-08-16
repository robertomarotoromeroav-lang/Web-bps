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

**Personalizar → Configuración.** Estos valores replican los tokens reales de
Hyperice.

### Colores

Dawn organiza el color en *esquemas*:

| Esquema | Fondo | Texto | Botón sólido | Texto del botón | Botón contorno |
|---|---|---|---|---|---|
| 1 · por defecto | `#FFFFFF` | `#000000` | `#000000` | `#FFFFFF` | `#000000` |
| 2 · secciones alternas | `#F7F5F5` | `#000000` | `#000000` | `#FFFFFF` | `#000000` |
| 3 · bloques oscuros | `#000000` | `#FFFFFF` | `#FFFFFF` | `#000000` | `#FFFFFF` |
| 4 · pie de página | `#212121` | `#CBCBCB` | `#FFFFFF` | `#000000` | `#FFFFFF` |

Elimina cualquier degradado de los esquemas: Hyperice usa planos de color puros.

### Tipografía

- **Fuente de titulares y de cuerpo:** la misma para ambas. Hyperice usa *Suisse
  Intl* (de pago, Swiss Typefaces). Alternativas en el catálogo de Shopify, de
  más a menos parecida: **Inter** → **Helvetica Now** → **Assistant**.
- **Escala de titulares y de cuerpo:** 100 %

### Botones

- **Radio del borde:** `40` px · **Grosor:** `1` px · **Sombra:** `0 %`

### Tarjetas de producto y de colección

- **Estilo:** **Tarjeta** (no «Estándar»)
- **Color de fondo:** esquema 2, es decir `#F7F5F5`
- **Radio de las esquinas:** `4` px · **Borde:** `0` · **Sombra:** `0 %`
- **Alineación del texto:** Izquierda · **Relleno de la imagen:** `0 %`
- **Proporción de la imagen:** personalizada, `13/12`

> La tarjeta de Hyperice **no es una imagen con el texto suelto debajo**: es una
> caja con fondo `#F7F5F5` y 4 px de radio, partida por una línea `#DFDFDF`
> entre la imagen y el panel de texto. Por eso las secciones que muestran
> productos deben ir sobre **fondo blanco** (esquema 1): sobre el esquema 2 la
> tarjeta se funde con la sección y desaparece.

### Medios, campos y distintivos

- **Medios:** radio `2` px, sombra `0 %`
- **Campos de formulario:** radio `4` px, sombra `0 %`
- **Distintivos:** radio `40` px

### Cabecera

- **Cabecera fija:** **activada**, tipo «siempre visible»
- **Menú móvil:** tipo **cajón**

### Diseño

- **Ancho de página:** `1536` px
- **Espaciado entre secciones:** `80` (escritorio)
- **Espaciado horizontal de la cuadrícula:** `20` px

---

## 2. Código

### 2a. La hoja de estilos

**Opción A — sin editar código (más rápida):** Personalizar → Configuración →
**CSS personalizado** → pega el contenido de `bps-hyperice.css`.

**Opción B — como archivo del tema (mejor si vais a iterar):**

1. Tienda online → Temas → ⋯ → **Editar código**
2. `Assets` → **Añadir un archivo nuevo** → `bps-hyperice.css`, pega el contenido
3. En `layout/theme.liquid`, justo **antes** de `</head>`:

   ```liquid
   {{ 'bps-hyperice.css' | asset_url | stylesheet_tag }}
   ```

Debe cargarse el último para que sus reglas ganen a las de Dawn.

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
- [ ] Ningún titular en mayúsculas salvo los rótulos pequeños
- [ ] Pie con esquema `#212121` y rótulos de columna mayores que sus enlaces
- [ ] En móvil, el menú abre como cajón desde la izquierda y las columnas del
      pie se colapsan con +/−
- [ ] Carrito, buscador y selector de país intactos
- [ ] Contraste AA en textos sobre imagen

> El **checkout de Shopify no hereda este CSS**: se personaliza aparte en
> Configuración → Pago → Personalizar. Conviene al menos subir ahí el logotipo
> nuevo y ajustar el color de acento, o el salto de la tienda al pago cantará.
