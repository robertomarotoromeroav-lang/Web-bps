# BPS Performance — Rediseño con el look & feel de Hyperice

Rediseño de [bpsperformance.com](https://bpsperformance.com/) adoptando el
lenguaje visual de [hyperice.com/es-es](https://hyperice.com/es-es).

Contiene dos cosas:

1. **Un prototipo estático completo y navegable** (`index.html`, `productos.html`,
   `contacto.html`, `styleguide.html`) para validar el diseño con contenido real
   antes de tocar la tienda.
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
| **Botones** | Píldora `62.5rem` · alto 40px · ancho mínimo 160px · 14px peso 500 |
| **Radios** | 8px en tarjetas e imágenes |
| **Movimiento** | 0,2s en interfaz · 0,6s en zoom de imagen · sin sombras ni rebotes |

`styleguide.html` muestra todo esto renderizado.

### Los tres cambios que más transforman la marca

1. **Fuera las mayúsculas.** BPS titula hoy en versalitas (`RECUPERA. RINDE.
   REPITE.`). Hyperice titula en caja baja y reserva las mayúsculas a rótulos de
   12px. Es lo que más cambia el tono: de gimnasio a producto de precisión.
2. **Interfaz monocroma.** Ningún acento de color. El color lo aporta la
   fotografía.
3. **Aire.** 120px entre secciones en escritorio, frente al ritmo apretado actual.

---

## Estructura

```
index.html               Home completa
productos.html           Catálogo (12 productos) con filtro por categoría
contacto.html            Formulario y vías de contacto
styleguide.html          Sistema de diseño renderizado

assets/css/tokens.css        Variables. Tema oscuro por sección con [data-theme="dark"]
assets/css/base.css          Reset y tipografía
assets/css/components.css    Botones, cabecera, tarjetas, filtros, formularios, pie
assets/css/layout.css        Contenedores, rejillas, hero, bloques editoriales
assets/js/site.js            Cabecera al hacer scroll, menú móvil, filtros, reveal

shopify/GUIA-SHOPIFY.md      Cómo llevarlo a la tienda real, paso a paso
shopify/bps-hyperice.css     Capa CSS sobre Dawn 15.4.1
```

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

**Verificado** con Chromium a 1440px y 390px: sin desbordamiento horizontal, sin
errores de consola, sin imágenes rotas, en las cuatro páginas.

Pendiente de decisión del cliente:

- **Fotografía.** Es la mayor distancia con Hyperice y no se resuelve con CSS.
  Hyperice usa fotografía de estilo de vida (personas entrenando, luz natural);
  BPS usa renders de producto sobre fondo neutro. El prototipo usa los renders
  actuales para poder validar la maqueta con material real, pero convendría
  encargar 4 fotos de estilo de vida (una por categoría) y 1 apaisada para el
  hero. Detalle en `shopify/GUIA-SHOPIFY.md` §5.
- **Tipografía.** Suisse Intl es de pago (Swiss Typefaces). El prototipo usa
  Inter. Si se licencia, basta con servirla: el stack ya la prioriza.
- **Formularios.** Los de `contacto.html` y el de suscripción son maqueta
  (`action="#"`); en Shopify los gestiona el propio tema.
- **Cabeceras y pies duplicados.** El prototipo repite cabecera y pie en cada
  HTML por ser estático. En Shopify eso lo resuelven los *snippets* de Dawn.
- **Fuentes desde Google Fonts.** Si se prefiere no depender de Google por
  RGPD, Inter puede autoalojarse en `assets/fonts/`.
