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

1. **Montar el menú de verdad** en *Navegación*, con dos niveles:

   ```
   Comprar
     ├─ Presoterapia            → /collections/presoterapia
     ├─ Terapia de luz roja     → /collections/energia-luminica
     ├─ Recuperación fría       → /collections/recuperacion-polar
     ├─ Liberación muscular     → /collections/liberacion-muscular
     └─ Ver todos los productos → /collections/all
   Terapia
     ├─ Presoterapia            → /blogs/rendimiento/tagged/presoterapia
     ├─ Luz roja                → /blogs/rendimiento/tagged/luz-roja
     ├─ Frío                    → /blogs/rendimiento/tagged/frio
     └─ Liberación muscular     → /blogs/rendimiento/tagged/liberacion-muscular
   Nosotros
     ├─ Quiénes somos           → /pages/sobre-nosotros
     ├─ Preguntas frecuentes    → /pages/preguntas-frecuentes
     └─ Contacto                → /pages/contacto
   ```

2. **Rellenar la colección vacía** y ponerle imagen a las cuatro.
3. **Publicar al menos dos artículos**, o el panel de «Terapia» enseñará el mismo
   artículo dos veces.

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

## 5. Para cuando toque hacerlo

Cuando el menú esté montado en *Navegación* y las colecciones tengan producto e
imagen, se puede construir y —esto es lo importante— **verificar midiendo**: se
descarga la cabecera publicada, se reproduce en local con la hoja y se comprueban
las medidas de cada panel contra el prototipo, igual que se ha hecho con la ficha,
el pie, el contacto y el artículo del blog.
