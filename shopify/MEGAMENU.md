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
| Color del menú | **Esquema 1** | El panel de Hyperice es blanco. Con el esquema oscuro el panel sale negro; funciona igual, pero no es el aspecto que pidió el cliente |

**Comprobado** reproduciendo la cabecera publicada en local, con los tres paneles
abiertos a 1440px:

| | |
|---|---|
| Panel | Arranca en y=107, justo debajo de la cabecera, a todo el ancho y en blanco |
| "Comprar" | Cinco tarjetas de 256,8px, foto en 13/12 con radio 4 y nombre de 16px debajo |
| «Ver todos los productos» | Al no ser una colección no tiene foto: sale como caja con una flecha, no como hueco vacío |
| "Terapia" | Temas en columna de 240px y los dos artículos al lado, con foto en 16/10, fecha en versalitas y titular a dos líneas |
| "Conócenos" | Columnas de enlaces |

Un detalle que hubo que corregir por el camino: el apartado 2 de la hoja pinta de
blanco **todos** los enlaces de la cabecera, porque la barra es negra. Dentro de
un panel blanco eso dejaba los nombres invisibles —medido: `rgb(255,255,255)`
sobre blanco—. El apartado 28 los devuelve al color del esquema del panel.

### En qué se nota cada paso

| Después del paso | Qué se ve en la web |
|---|---|
| 1 | La colección de liberación muscular deja de estar vacía |
| 2 | Nada todavía: el menú tiene estructura, pero el tipo «Desplegable» solo muestra el primer nivel |
| 3 | «Comprar» y «Nosotros» abren panel a todo lo ancho con sus enlaces. El tercer desplegable, terminado |
| 4 | «Terapia» abre con las categorías del blog |
| 5 | Fotos en «Comprar» y artículos destacados en «Terapia» |
