# Cómo aplicar el look & feel Hyperice en bpsperformance.com

La tienda corre sobre **Shopify con el tema Dawn 15.4.1** (verificado en el HTML
de producción: `Shopify.theme = {"name":"Dawn","schema_version":"15.4.1"}`).

Eso es una buena noticia: la mayor parte del rediseño se consigue **cambiando
ajustes en el editor de temas**, sin tocar código. Solo el 20 % final necesita
CSS, y va en un archivo aparte que no modifica ningún fichero original de Dawn.

> Trabaja siempre sobre una **copia duplicada del tema** (Tienda online → Temas →
> ⋯ → Duplicar) y publícala solo cuando esté validada.

---

## 1. Ajustes del tema (Personalizar → Configuración)

Estos valores replican los tokens reales de Hyperice.

### Colores

Dawn organiza el color en *esquemas*. Configura los tres primeros así:

| Esquema | Fondo | Texto | Botón sólido | Texto del botón | Botón contorno |
|---|---|---|---|---|---|
| Esquema 1 (por defecto) | `#FFFFFF` | `#000000` | `#000000` | `#FFFFFF` | `#000000` |
| Esquema 2 (secciones alternas) | `#F7F5F5` | `#000000` | `#000000` | `#FFFFFF` | `#000000` |
| Esquema 3 (bloques oscuros) | `#000000` | `#FFFFFF` | `#FFFFFF` | `#000000` | `#FFFFFF` |
| Esquema 4 (pie de página) | `#212121` | `#CBCBCB` | `#FFFFFF` | `#000000` | `#FFFFFF` |

El pie merece su propio esquema: en Hyperice **no es negro puro** sino `#212121`,
con el texto base en gris claro `#CBCBCB`. Asigna el esquema 4 a la sección del pie.

Ojo con la jerarquía dentro del pie, que es contraintuitiva: **el rótulo de cada
columna es mayor que sus enlaces** (18 px en blanco frente a 16 px en gris), y
los enlaces de la columna de tecnología llevan un icono de línea a la izquierda.

Elimina cualquier degradado que tengan configurado los esquemas: Hyperice usa
planos de color puros.

### Tipografía

- **Fuente de titulares y de cuerpo:** la misma para ambas. Hyperice usa *Suisse
  Intl* (de pago, Swiss Typefaces). Alternativas en el catálogo de Shopify, de
  más a menos parecida: **Inter** → **Helvetica Now** → **Assistant**.
- **Escala de titulares:** 100 %
- **Escala del cuerpo:** 100 %

### Botones

- **Radio del borde:** `40` px (con la altura de 40 px queda píldora perfecta)
- **Grosor del borde:** `1` px
- **Opacidad de la sombra:** `0 %`

### Tarjetas de producto y de colección

- **Estilo:** **Tarjeta** (no Estándar)
- **Color de fondo de la tarjeta:** esquema 2, es decir `#F7F5F5`
- **Radio de las esquinas:** `4` px
- **Grosor del borde:** `0`
- **Opacidad de la sombra:** `0 %`
- **Alineación del texto:** Izquierda
- **Relleno de la imagen:** `0 %`
- **Proporción de la imagen:** personalizada, `13/12`

> La tarjeta de Hyperice **no es una imagen con el texto suelto debajo**: es una
> caja con fondo `#F7F5F5` y 4 px de radio, partida por una línea `#DFDFDF`
> entre la imagen y el panel de texto. Por eso las secciones que muestran
> productos deben ir sobre **fondo blanco** (esquema 1): sobre el esquema 2 la
> tarjeta se funde con la sección y desaparece.

### Medios, campos y distintivos

- **Radio de las esquinas de los medios:** `2` px, sombra `0 %`
- **Campos de formulario — radio:** `4` px, sombra `0 %`
- **Distintivos (badges) — radio:** `40` px

### Cabecera

- **Cabecera fija (sticky):** **activada**, tipo "siempre visible"

> La cabecera de Hyperice **sí queda fija**, pero lo que hace al bajar no es
> cambiar de color: pasados 50 px de scroll sube el bloque superior justo el
> alto de la barra de anuncios, de modo que la barra desaparece y la cabecera
> queda pegada al borde. Al volver arriba, la barra reaparece. La cabecera
> nunca se vuelve blanca. El JS de §2b es el que produce ese movimiento.

### Diseño

- **Ancho de página:** `1536` px
- **Espaciado vertical entre secciones:** `80` (escritorio)
- **Espaciado horizontal de la cuadrícula:** `20` px
- **Margen lateral:** 15 px en móvil, 30 px en escritorio

> El ritmo real de Hyperice es más ajustado de lo que parece: su utilidad de
> mayor separación entre secciones es `py-2xl`, que tope a 80 px, y el margen
> lateral máximo es de 30 px.

---

## 2. Instalar la hoja de estilos complementaria

Cubre lo que los ajustes no alcanzan (tracking de titulares, velo del banner,
subrayado del menú, esquema del pie, iconos y acordeón).

**Opción A — CSS personalizado (la más rápida, sin editar código):**

Personalizar → Configuración → **CSS personalizado** → pega el contenido de
`bps-hyperice.css`.

**Opción B — como archivo del tema (recomendada si vais a iterar):**

1. Tienda online → Temas → ⋯ → **Editar código**
2. `Assets` → **Añadir un archivo nuevo** → `bps-hyperice.css` y pega el contenido
3. En `layout/theme.liquid`, justo **antes** de `</head>`, añade:

   ```liquid
   {{ 'bps-hyperice.css' | asset_url | stylesheet_tag }}
   ```

Debe cargarse el último para que sus reglas ganen a las de Dawn.

### 2b. Snippet de la barra de anuncios

Sin esto la cabecera queda fija pero la barra de anuncios no se esconde.
Pégalo en `layout/theme.liquid`, justo antes de `</body>`:

```html
<script>
  // Esconde la barra de anuncios al hacer scroll, dejando la cabecera arriba.
  (function () {
    var root = document.documentElement
    var bar = document.querySelector('.announcement-bar, .utility-bar')
    var hidden = false
    if (!bar) return

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

---

## 3. Estructura de la home

Reordena las secciones en Personalizar hasta dejar esta secuencia, que es la de
Hyperice y la que reproduce `index.html` de este repositorio:

1. **Banner con imagen** — imagen a pantalla completa (mín. 88 % de alto),
   contenido abajo a la izquierda, contenedor desactivado, superposición al 0 %
   (el velo lo pone el CSS). Dos botones: uno sólido y uno de contorno.
   **Asigna a esta sección el esquema de color 3 (fondo negro).** Es
   imprescindible: con el esquema 1, el botón de contorno se dibuja en negro
   sobre la fotografía oscura y resulta invisible. Con el esquema 3 el sólido
   pasa a blanco y el de contorno a borde blanco.
2. **Lista de colecciones** — las 4 categorías, en carrusel deslizable en móvil.
3. **Productos destacados** — 4 productos, tarjeta estándar.
4. **Imagen con texto** — bloque "Diseñado para la élite, validado por la ciencia".
5. **Producto destacado** — Presoterapia BPS PRO con esquema de color 3 (negro).
6. **Texto con iconos** — envío gratis / compra segura / atención 24/7.
7. **Newsletter** — no la pongas como sección propia: en Hyperice el
   formulario de suscripción vive dentro del pie, y duplicarlo deja dos veces
   el mismo campo seguido.

---

## 4. Contenido: pasar los textos a caja baja

**Este es el cambio que más transforma la percepción de la marca y no se puede
hacer con CSS**, porque los textos están escritos en mayúsculas en el editor.

Hyperice escribe **todos los titulares en caja baja**, con mayúscula solo
inicial. Las versalitas quedan reservadas a etiquetas pequeñas (rótulos de
sección de 12 px). Reescribe en el editor de temas:

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
texto, y la flecha se reserva para los enlaces de tipo "Ver todo".

---

## 5. Logotipo

El logotipo es el isotipo `[|||]` en azul corporativo sobre el wordmark **BPS**.

- **Sobre fondo claro:** isotipo en azul, wordmark en negro.
- **Sobre fotografía o fondo oscuro:** todo el logotipo en blanco.

En Shopify se suben dos versiones en Personalizar → Cabecera: el logo normal y,
si el tema lo permite, el logo para fondo transparente. El azul es el **único
color de la paleta** y no debe aparecer en ningún componente de interfaz:
botones, enlaces y estados siguen siendo estrictamente monocromos.

> El prototipo reproduce el isotipo como SVG (es geometría pura, exacta) pero
> compone el wordmark con la tipografía del sitio. **Hace falta el archivo
> original del logotipo** (SVG o AI) para reproducirlo con fidelidad.

---

## 6. Fotografía

Es el punto donde más distancia hay con Hyperice, y ningún CSS lo resuelve.

- Hyperice usa **fotografía de estilo de vida** —personas entrenando y
  recuperándose, luz natural, contexto real— en banner y tarjetas de colección.
  BPS usa hoy renders de producto sobre fondo neutro.
- Recomendación: mantener los renders en la **ficha y la rejilla de producto**
  (funcionan bien ahí) y encargar **4 fotos de estilo de vida**, una por
  categoría, más **1 apaisada para el banner**.
- Mantén un tratamiento uniforme: alto contraste, sin filtros de color, recorte
  consistente.

Mientras tanto, el prototipo de este repositorio usa los renders actuales para
que se pueda validar la maqueta con material real.

---

## 7. Comprobación antes de publicar

- [ ] Banner legible en móvil y escritorio (el velo debe garantizar contraste)
- [ ] Botones en píldora de 40 px en todas las plantillas, incluida la ficha de producto
- [ ] Ningún titular en mayúsculas salvo los rótulos pequeños
- [ ] Pie con esquema `#212121` y enlaces en blanco a 24 px
- [ ] La cabecera queda fija y la barra de anuncios se esconde al bajar
- [ ] La cabecera es la misma en todas las plantillas: oscura translúcida con
      logotipo y textos en blanco, nunca blanca
- [ ] Sobre las plantillas con imagen a sangre va transparente, y gana fondo al
      dejar atrás la imagen
- [ ] En móvil las columnas del pie se colapsan tras un botón con +/−
- [ ] El menú móvil abre como cajón desde la izquierda, con fondo translúcido
      y cierre al pulsar fuera (en Dawn: Cabecera → tipo de menú «cajón»)
- [ ] Los enlaces de tecnología del pie llevan su icono a la izquierda
- [ ] Carrito, buscador y selector de país intactos
- [ ] Contraste AA en textos sobre imagen
- [ ] Revisión en checkout: el checkout de Shopify **no** hereda este CSS y se
      personaliza aparte (Configuración → Pago → Personalizar)
