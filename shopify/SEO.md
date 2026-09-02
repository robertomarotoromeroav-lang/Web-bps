# Manual de SEO de bpsperformance.com

Auditoría de la tienda publicada y **manual de corrección paso a paso**, escrito
para hacerlo sin haber usado nunca el panel de Shopify: cada tarea dice cómo está
hoy, cómo tiene que quedar, dónde se hace clic y cómo comprobar que salió bien.

**Revisión: 2 de septiembre de 2026.** Todo lo que hay aquí está medido
rastreando las **25 direcciones indexables** una por una, no es una lista genérica
de buenas prácticas.

Documentos hermanos: [ARTICULOS-1-3.md](ARTICULOS-1-3.md) (contenido del blog) y
[GUIA-BLOG.md](GUIA-BLOG.md) (arquitectura del blog).

---

## Cómo moverse por el panel de Shopify

Antes de nada, el mapa. Todo lo de este manual está en cuatro sitios, y siempre
se llega igual: **columna izquierda del panel**.

| Lo que quieras cambiar | Ruta |
|---|---|
| Un producto | **Productos** → clic en el nombre del producto |
| Una colección | **Productos** → **Colecciones** → clic en la colección |
| Una página (Sobre nosotros, Contacto…) | **Contenido** → **Páginas** |
| Un artículo del blog | **Contenido** → **Publicaciones de blog** |
| El texto alternativo de una imagen suelta (el logotipo, el banner) | **Contenido** → **Archivos** |
| El código del tema | **Canales de venta → Tienda online** → **Temas** → botón **···** junto al tema activo → **Editar código** |
| Los textos fijos del tema (traducciones) | mismo sitio → **···** → **Editar contenido predeterminado del tema** |
| Lo que se ve y en qué orden en cada página | **Tienda online** → **Temas** → **Personalizar** |

Dos cosas que conviene saber de entrada:

**1. Guardar.** En Shopify nada se aplica hasta que pulsas **Guardar** arriba a la
derecha. Si sales sin guardar, se pierde.

**2. La caja de SEO está siempre abajo.** En productos, colecciones, páginas y
artículos, si bajas hasta el final encontrarás un bloque llamado
**«Optimización para motores de búsqueda»** con un enlace **Editar**. Al pulsarlo
se abren tres campos, y son estos tres los que salen en Google:

| Campo | Qué es | Cuánto debe medir |
|---|---|---|
| **Título de la página** | El texto azul del resultado de Google | **50-60 caracteres** |
| **Meta descripción** | El párrafo gris de debajo | **140-155 caracteres** |
| **Identificador de URL** | La dirección de la página | Corto, con la palabra clave |

> ⚠️ **Ojo al cambiar el «Identificador de URL».** Si la página ya está indexada,
> cambiarla la hace empezar de cero. Shopify crea una redirección automática, pero
> aun así se pierde algo. **En este manual no se cambia ninguna URL**, solo
> títulos y descripciones, que se pueden cambiar sin miedo.

### La regla del título que hay que entender una sola vez

Esto explica por qué hoy hay títulos cortados a mitad de palabra.

El tema construye la etiqueta del navegador así: **coge el «Título de la página»
y, si ese texto NO contiene «BPS Performance», le pega ` – BPS Performance` al
final.** Eso son 18 caracteres extra.

Por tanto hay dos maneras de hacerlo bien:

- Escribir un título de **40 caracteres o menos** y dejar que el tema añada la
  marca. Total: 58. ✅
- Escribir un título de **hasta 60 caracteres que ya incluya «BPS Performance»**.
  El tema no añade nada. ✅

Lo que no funciona es lo de hoy: títulos de 70 caracteres + los 18 de la marca =
88, que Google corta.

---

## Estado a 2 de septiembre

### Ya corregido desde la revisión anterior ✅

Buen trabajo, esto ya está hecho y no hay que volver a tocarlo:

| Lo que estaba mal | Cómo está ahora |
|---|---|
| `/collections/los-mas-buscados` sin descripción | Descripción de 154 caracteres ✅ |
| `/pages/contacto` sin título ni descripción | Título y descripción de 156 ✅ |
| Descripción de la pistola con 320 caracteres | **145** ✅ |
| Las tres gafas con 222-257 caracteres | **128-140** ✅ |
| El título SEO del BPS PRO decía «Fisiosport 3.0» | Ahora dice «Presoterapia BPS PRO» y coincide con el H1 ✅ |
| `Organization` sin descripción ni contacto | Añadido con descripción, correo, teléfono y **dirección postal en Madrid** ✅ |
| `sameAs` con siete cadenas vacías | Limpio, con las tres redes reales ✅ |

Y los estilos: nuestra hoja y nuestro script publicados ya llevan el arreglo del
hueco de la cabecera, el menú de móvil y los enlaces del desplegable a 24px.

### Lo que sigue pendiente ❌

Ordenado por lo que más mueve la aguja. Cada número es una ficha de este manual.

| # | Pendiente | Dónde | Esfuerzo |
|---|---|---|---|
| **1** | `BPS Ice Bath` sigue publicado a **0,00 €** | Productos | 2 min |
| **2** | La **marca de 5 productos** es el nombre de la categoría, no «BPS Performance» | Productos | 10 min |
| **3** | **Tres títulos cortados a mitad de palabra** («…Integr», «…Sopor», «…Infr») y 10 de 12 por encima de 60 caracteres | Productos | 40 min |
| **4** | Las **4 colecciones principales** tienen títulos de 30-37 caracteres y descripciones de 58-69 | Colecciones | 25 min |
| **5** | `los-mas-buscados` tiene ahora un título de **88 caracteres** | Colecciones | 3 min |
| **6** | **Ninguna ficha tiene SKU ni código de barras** | Productos | 20 min |
| **7** | **Cero reseñas**: no hay aplicación instalada, así que no hay estrellas en Google | Aplicaciones | 30 min |
| **8** | El **H1 de la home es el logotipo**, y su texto es «logo BPS horizontal blanco» | Contenido → Archivos | 3 min |
| **9** | Los **textos alternativos de las galerías están repetidos** | Productos → Multimedia | 1 h |
| **10** | El **banner de la home** no tiene texto alternativo | Contenido → Archivos | 2 min |
| **11** | `/pages/preguntas-frecuentes` tiene 955 palabras de preguntas y **ningún marcado `FAQPage`** | Editar código | 15 min |
| **12** | Los **dos artículos nuevos no tienen el metacampo de preguntas** rellenado | Contenido → Publicaciones | 20 min |
| **13** | `/search`, `/collections/all` y las páginas de etiqueta **se pueden indexar** | Editar código | 10 min |
| **14** | El **correo del `Organization` está en otro dominio** y el teléfono sin prefijo | Editar código | 5 min |
| **15** | El **logotipo del `Organization` es un SVG** y Google no acepta ese formato ahí | Contenido → Archivos | 15 min |
| **16** | La **página de contacto no muestra dirección, teléfono ni correo** | Contenido → Páginas | 10 min |
| **17** | Las 4 colecciones tienen **poco texto propio** | Colecciones | 3 h |
| **18** | El blog tiene **dos `<h1>` iguales** | Editar código *(opcional)* | 5 min |
| **19** | Fuera de Shopify: **perfil de empresa en Google, LinkedIn, Trustpilot** | — | 2 h |

---

# A. Productos

## 1 · El BPS Ice Bath está a 0,00 €

### Cómo está ahora

La ficha `/products/banera-crioterapia-bps-ice-bath` está **publicada y visible**,
y su única variante tiene el precio en `0.00`. El marcado que lee Google dice
literalmente:

```json
"offers": { "price": "0.00", "availability": "http://schema.org/InStock" }
```

Consecuencias reales: en Google puede aparecer «0,00 €», Google Merchant Center
rechaza el producto, y quien entre desde el blog de crioterapia verá una bañera
gratis.

### Cómo debe quedar

Con su precio real, o **en borrador** si todavía no se vende.

### Paso a paso

1. Columna izquierda → **Productos**.
2. Clic en **BPS Ice Bath: Bañera de Crioterapia Portátil para Recuperación
   Total**.
3. Baja hasta el bloque **«Precios»**.
4. En el campo **«Precio»**, escribe el importe (por ejemplo `1450`). Shopify ya
   añade el euro.
   - Si quieres enseñar un descuento, rellena también **«Precio de
     comparación»** con el precio anterior, más alto.
5. **Guardar**.

**Si todavía no se vende:** en vez de lo anterior, en la columna de la derecha
busca el bloque **«Estado»** y cambia **«Activo»** por **«Borrador»**. Deja de
estar visible al momento. Avisa, porque el artículo de crioterapia enlaza a esta
ficha.

### Cómo comprobarlo

Abre `https://bpsperformance.com/products/banera-crioterapia-bps-ice-bath` en una
ventana de incógnito y mira que el precio sea el correcto. Si lo pusiste en
borrador, debe dar **página no encontrada**.

---

## 2 · La marca de cinco productos está mal

### Cómo está ahora

Google lee la marca del producto de un campo de Shopify que se llama
**«Proveedor»**. En cinco fichas ese campo tiene el nombre de la categoría en vez
del de la marca:

| Producto | «Proveedor» hoy | Debe decir |
|---|---|---|
| Presoterapia BPS PLUS | `Presoterapia` ❌ | `BPS Performance` |
| Presoterapia BPS PRO | `Presoterapia` ❌ | `BPS Performance` |
| BPS Pro-Panel | `Terapia de luz roja` ❌ | `BPS Performance` |
| BPS Recovery Pod | `Recuperación Fría` ❌ | `BPS Performance` |
| Pistola de Masaje | `Liberación muscular` ❌ | `BPS Performance` |
| *(los otros 7)* | `BPS Performance` ✅ | — |

Por qué importa: es la señal con la que Google entiende que **los 12 productos
son de la misma marca**. Con la mitad diciendo «Presoterapia», está viendo cinco
marcas distintas, y eso es justo lo contrario de lo que necesitas para posicionar
por «BPS».

### Cómo debe quedar

Los 12 productos con **«Proveedor» = `BPS Performance`**, escrito igual en todos:
con mayúscula inicial en las dos palabras y sin espacios de más.

### Paso a paso

Hazlo uno por uno; son cinco:

1. **Productos** → clic en **Presoterapia BPS PLUS**.
2. En la **columna de la derecha**, busca el bloque
   **«Organización del producto»**.
3. Dentro hay un campo **«Proveedor»**. Borra lo que tenga y escribe
   `BPS Performance`.
   - Al escribir, Shopify sugiere los proveedores que ya existen. **Elige el que
     dice `BPS Performance`** de la lista, así te aseguras de que se escribe
     exactamente igual que en los demás.
4. **Guardar**.
5. Repite con BPS PRO, BPS Pro-Panel, BPS Recovery Pod y la Pistola de Masaje.

> **Truco para ir más rápido:** en la lista de **Productos**, marca las casillas
> de los cinco productos → arriba aparece **«Acciones»** → **«Editar
> productos»**. Se abre una tabla; pulsa **«Columnas»** y activa **«Proveedor»**.
> Ahora puedes escribir `BPS Performance` en la primera fila, copiarla y pegarla
> en las otras cuatro. Un solo **Guardar** para todas.

### Cómo comprobarlo

En **Productos**, arriba hay filtros. Pulsa **«Filtrar»** → **«Proveedor»** y
comprueba que **solo aparece `BPS Performance`** y que tiene **12 productos**. Si
salen otros valores en la lista, alguno se quedó sin cambiar.

---

## 3 · Los títulos de producto se cortan

### Cómo está ahora

Esto es lo más visible de todo el manual, porque **se ve en Google y en la
pestaña del navegador**. Tres títulos están cortados a mitad de palabra:

| Producto | Etiqueta actual | Nº |
|---|---|---|
| BPS Fusion Boots | `BPS Fusion Boots: Botas de Presoterapia con Terapia de Luz Roja Integr – BPS Performance` | 88 ✂️ |
| BPS Clinic-Stand | `BPS Clinic-Stand: Lámpara Profesional de Terapia de Luz Roja con Sopor – BPS Performance` | 88 ✂️ |
| BPS Red Light Mini | `BPS Red Light Mini: Dispositivo Portátil de Terapia de Luz Roja e Infr – BPS Performance` | 88 ✂️ |
| BPS Ice Bath | `BPS Ice Bath: Bañera de Crioterapia Portátil para Recuperación Total – BPS Performance` | 86 |
| BPS Recovery Pod | `BPS Recovery Pod: Bañera de Hielo Portátil para Inmersión en Frío – BPS Performance` | 83 |
| BPS Pro-Panel | `BPS Pro-Panel: Panel de Terapia de Luz Roja de Cuerpo Completo – BPS Performance` | 80 |
| Presoterapia BPS PRO | `Presoterapia BPS PRO | Recuperación Muscular Profesional en 2026 – BPS Performance` | 82 |
| Presoterapia BPS Plus | `Presoterapia BPS Plus | Recuperación Muscular Profesional – BPS Performance` | 75 |
| Pistola de Masaje | `Pistola de Masaje Muscular de Percusión Profesional BPS – BPS Performance` | 73 |
| Gafas NIGHT MAX / FLOW / DAILY | `BPS Recovery Glasses - Gafas con filtro NIGHT MAX – BPS Performance` | 67-69 |

Google enseña unos **55-60 caracteres**. Todo lo que pase de ahí no existe.

Y hay un segundo problema, más de fondo: **empiezan por el nombre del modelo**.
Nadie busca «BPS Pro-Panel»; buscan «panel de luz roja». Lo que va delante es lo
que Google más pesa, así que la palabra que la gente teclea tiene que ir primero
y el nombre de la gama después.

### Cómo debe quedar

Títulos de **50-60 caracteres** que **empiecen por lo que se busca** y lleven
«BPS» dentro, para que el tema no añada nada:

| Producto | «Título de la página» propuesto | Nº |
|---|---|---|
| Presoterapia BPS Plus | `Botas de presoterapia inalámbricas — BPS Plus` | 45 |
| Presoterapia BPS PRO | `Presoterapia profesional 4 cámaras — BPS Pro` | 44 |
| BPS Fusion Boots | `Botas de presoterapia con luz roja — BPS Fusion` | 47 |
| BPS Pro-Panel | `Panel de luz roja cuerpo completo — BPS Pro-Panel` | 49 |
| BPS Clinic-Stand | `Lámpara de luz roja con soporte — BPS Clinic-Stand` | 50 |
| BPS Red Light Mini | `Luz roja portátil 660 y 850 nm — BPS Red Light Mini` | 51 |
| BPS Ice Bath | `Bañera de crioterapia portátil — BPS Ice Bath` | 45 |
| BPS Recovery Pod | `Bañera de hielo portátil — BPS Recovery Pod` | 43 |
| Pistola de Masaje | `Pistola de masaje de percusión profesional — BPS` | 48 |
| Gafas NIGHT MAX | `Gafas de filtro de luz azul para dormir — NIGHT MAX` | 51 |
| Gafas NIGHT FLOW | `Gafas de filtro de luz azul para la noche — NIGHT FLOW` | 54 |
| Gafas DAILY LIGHT | `Gafas de filtro de luz azul para pantallas — DAILY LIGHT` | 56 |

> Estos títulos llevan «BPS» pero **no la cadena exacta «BPS Performance»**, así
> que el tema sí les añadirá ` – BPS Performance`. Con 45-56 caracteres el total
> queda en 63-74, y Google enseñará los primeros 60, que son los que importan.
> Si prefieres control total, escribe el título terminando en `| BPS Performance`
> y no pasarte de 60 en total.

### Paso a paso

Para cada producto:

1. **Productos** → clic en el producto.
2. **Baja hasta el final de la página**, hasta el bloque
   **«Optimización para motores de búsqueda»**. Verás una vista previa de cómo
   sale en Google.
3. Pulsa **«Editar»** a la derecha de ese bloque.
4. Se abren tres campos. En **«Título de la página»**, borra lo que haya y pega
   el título de la tabla.
   - Debajo del campo, Shopify pone un contador tipo `45 de 70 caracteres
     usados`. **Que no pase de 60.**
   - Si el campo está vacío, Shopify usa el nombre del producto. Al escribir algo
     aquí, dejas de depender de ese nombre: **puedes tener un nombre de producto
     largo y bonito en la web y un título corto en Google.** Eso es justo lo que
     buscamos.
5. **No toques «Identificador de URL».**
6. **Guardar**.

### Cómo comprobarlo

Dos maneras:

- **Rápida:** abre la ficha en el navegador y mira **el texto de la pestaña**. Es
  exactamente lo que verá Google.
- **Buena:** en Search Console, cuando pasen unos días, mira que el título nuevo
  aparece en los resultados. Google tarda de días a semanas en refrescarlo, y a
  veces decide reescribirlo él; eso es normal y no se puede evitar.

---

## 6 · Ninguna ficha tiene SKU ni código de barras

### Cómo está ahora

Las 12 fichas están **sin SKU y sin código de barras**. Para la web no es grave.
Para **Google Shopping y el Merchant Center sí**: sin identificador, tus productos
se enseñan menos que los de la competencia, tanto en los anuncios como en las
fichas gratuitas.

### Cómo debe quedar

- **SKU**: siempre. Es tu código interno; te lo inventas tú. Sirve para el
  inventario y para los informes.
- **Código de barras (EAN/GTIN)**: si el fabricante te da uno, se pone. Si son
  productos de marca propia sin EAN, se deja vacío y en el Merchant Center se
  declara que no existe.

Una nomenclatura sencilla y consistente:

| Producto | SKU propuesto |
|---|---|
| Presoterapia BPS Plus | `BPS-PRES-PLUS` |
| Presoterapia BPS PRO | `BPS-PRES-PRO` |
| BPS Fusion Boots | `BPS-PRES-FUSION` |
| BPS Pro-Panel | `BPS-LUZ-PANEL` |
| BPS Clinic-Stand | `BPS-LUZ-STAND` |
| BPS Red Light Mini | `BPS-LUZ-MINI` |
| BPS Ice Bath | `BPS-FRIO-ICEBATH` |
| BPS Recovery Pod | `BPS-FRIO-POD` |
| Pistola de Masaje | `BPS-MUSC-PISTOLA` |
| Gafas NIGHT MAX | `BPS-GAFAS-NMAX` |
| Gafas NIGHT FLOW | `BPS-GAFAS-NFLOW` |
| Gafas DAILY LIGHT | `BPS-GAFAS-DAILY` |

### Paso a paso

1. **Productos** → clic en el producto.
2. Baja al bloque **«Inventario»**.
3. En **«SKU (unidad de mantenimiento de existencias)»**, escribe el código.
4. Si tienes EAN, en **«Código de barras (ISBN, UPC, GTIN, etc.)»**.
5. **Guardar**.

> Con la edición masiva va mucho más rápido: **Productos** → marca los 12 →
> **«Acciones»** → **«Editar productos»** → **«Columnas»** → activa **«SKU»**.
> Rellenas la tabla y guardas una vez.

### Cómo comprobarlo

**Productos** → **«Acciones»** → **«Editar productos»** con la columna SKU
activa: los 12 deben tener valor y **ninguno repetido**.

---

## 9 · Los textos alternativos de las galerías están repetidos

### Cómo está ahora

En cada ficha, **las cinco o seis fotos de la galería llevan el mismo texto
alternativo**. En la pistola de masaje, por ejemplo, las cinco dicen «Pistola de
Masaje Muscular de Percusión Profesional BPS».

El texto alternativo es la descripción de la imagen que leen Google y los lectores
de pantalla. Repetido, no aporta nada. Y en este sector **Google Imágenes trae
tráfico real**: la gente busca «botas de presoterapia» y compra por la foto.

### Cómo debe quedar

Cada foto describe **lo que se ve en esa foto**, en 8-15 palabras, con la palabra
clave metida de forma natural. Ejemplo con la pistola:

| Foto | Texto alternativo |
|---|---|
| 1, la principal | `Pistola de masaje de percusión BPS sobre fondo blanco` |
| 2, los cabezales | `Los cuatro cabezales de la pistola de masaje BPS: bola, plano, bala y horquilla` |
| 3, la pantalla | `Pantalla de la pistola de masaje BPS con los niveles de intensidad` |
| 4, en uso | `Pistola de masaje BPS aplicada sobre el cuádriceps de un corredor` |
| 5, el maletín | `Maletín de transporte de la pistola de masaje BPS con los accesorios` |

Reglas: **sin empezar por «foto de» o «imagen de»** (ya se sabe que es una
imagen), sin repetir el nombre completo del producto en todas, y describiendo el
detalle que aporta cada una.

### Paso a paso

1. **Productos** → clic en el producto.
2. En el bloque **«Multimedia»**, pasa el ratón por encima de una foto: aparecen
   unos iconos. Pulsa la foto para abrirla a tamaño grande.
3. Arriba, en la vista de la foto, hay un botón **«Agregar texto alternativo»**
   (o **«Editar texto alternativo»** si ya tiene). Púlsalo.
4. Escribe la descripción y pulsa **«Guardar texto alternativo»**.
5. Cierra la foto con la **X** y repite con las demás.

Son unas 60 fotos entre las 12 fichas. **Una hora bien invertida**, pero se puede
repartir: haz primero los productos que más vendes.

### Cómo comprobarlo

Abre la ficha en el navegador, clic derecho sobre una foto de la galería →
**«Inspeccionar»**, y busca `alt="..."` en la línea marcada. Debe salir tu texto.

---

# B. Colecciones

## 4 · Las cuatro colecciones desaprovechan el título y la descripción

### Cómo está ahora

Las cuatro colecciones **no tienen nada escrito en la caja de SEO**, así que
Shopify se inventa el título con el nombre de la colección y usa la descripción
corta como meta descripción. Resultado:

| Colección | Etiqueta actual | Nº | Descripción actual | Nº |
|---|---|---|---|---|
| `presoterapia` | `Presoterapia – BPS Performance` | 30 | `Drenaje linfático, recuperación muscular y piernas ligeras` | 58 |
| `energia-luminica` | `Terapia de luz roja – BPS Performance` | 37 | `Regenera tejidos, reduce la inflamación y acelera la recuperación` | 65 |
| `recuperacion-polar` | `Recuperación fría – BPS Performance` | 35 | `Reduce la inflamación, acelera la recuperación y fortalece el cuerpo.` | 69 |
| `liberacion-muscular` | `Liberación muscular – BPS Performance` | 37 | `Alivia tensiones, mejora la movilidad y previene lesiones.` | 58 |

Con 30 caracteres de 60 y 58 de 155, estás **regalando la mitad del espacio** que
Google te da en la página de resultados. Y las colecciones son las páginas que
mejor pueden competir por las búsquedas de compra («botas de presoterapia»,
«panel de luz roja»), porque en ellas hay producto.

### Cómo debe quedar

| Colección | «Título de la página» | «Meta descripción» |
|---|---|---|
| `presoterapia` | `Botas de presoterapia para recuperación muscular` (48) | `Botas de presoterapia BPS para recuperar antes: 4 y 8 cámaras, inalámbricas y con luz roja. Envío gratis y asesoramiento antes de comprar.` (137) |
| `energia-luminica` | `Terapia de luz roja: paneles, lámparas y portátiles` (51) | `Equipos de terapia de luz roja e infrarroja de 660 y 850 nm: panel de cuerpo completo, lámpara con soporte y dispositivo portátil.` (130) |
| `recuperacion-polar` | `Bañeras de hielo y crioterapia para recuperación` (48) | `Bañeras de hielo y crioterapia portátiles para inmersión en frío en casa o en clínica. Montaje sencillo y asesoramiento incluido.` (129) |
| `liberacion-muscular` | `Pistolas de masaje y liberación miofascial` (42) | `Pistola de masaje de percusión profesional BPS para liberar tensión y mejorar la movilidad. Cuatro cabezales y varios niveles.` (126) |

> **La descripción corta de la colección se sigue usando en el menú.** El
> desplegable de la cabecera enseña esa descripción debajo del nombre, así que
> **no la borres**: lo que se rellena aquí es la caja de SEO, que es otra cosa.

### Paso a paso

1. **Productos** → **Colecciones** → clic en **Presoterapia**.
2. Baja hasta **«Optimización para motores de búsqueda»** → **«Editar»**.
3. Rellena **«Título de la página»** y **«Meta descripción»** con los textos de
   la tabla.
4. **No toques «Identificador de URL».**
5. **Guardar**.
6. Repite con las otras tres.

### Cómo comprobarlo

Abre la colección y mira **el texto de la pestaña del navegador**: debe ser el
título nuevo. Para la descripción, clic derecho → **«Ver código fuente»** y busca
`name="description"`.

---

## 5 · El título de «Los más buscados» se ha ido de largo

### Cómo está ahora

`Los más buscados BPS | Productos de Recuperación y Rendimiento en 2026 – BPS
Performance` = **88 caracteres**. Se corrigió la descripción pero el título se
pasó al otro extremo. Además repite «BPS» dos veces.

### Cómo debe quedar

`Los más vendidos en recuperación deportiva — BPS` (47).

Y un consejo: el «en 2026» de los títulos **conviene quitarlo de las colecciones
y de los productos**. En un artículo tiene sentido —da frescura y se actualiza
cada enero—, pero en una colección obliga a cambiarlo todos los años y no aporta.

### Paso a paso

Igual que la ficha 4: **Productos** → **Colecciones** → **Los más buscados** →
abajo **«Editar»** → cambia **«Título de la página»** → **Guardar**.

---

## 17 · Las colecciones no tienen texto propio

### Cómo está ahora

Contando el menú y el pie, las cuatro colecciones tienen entre **493 y 742
palabras**; de texto propio, la descripción de una línea y nada más. Una página
así compite mal contra una tienda que explica cómo elegir.

### Cómo debe quedar

**300-500 palabras propias** en cada colección, colocadas **debajo de la rejilla
de productos** para no empujar el producto hacia abajo. Estructura que funciona:

1. Un párrafo de qué es y para quién (3-4 líneas).
2. **Cómo elegir**: 3 o 4 criterios con sus opciones. Esto es lo que más se lee.
3. Una tabla comparando los productos de la colección.
4. Un enlace al artículo del blog de esa tecnología, con texto descriptivo.

### Paso a paso

El campo de descripción de la colección se enseña **arriba**, así que el texto
largo no va ahí. Va en una sección de la plantilla:

1. **Tienda online** → **Temas** → **Personalizar**.
2. Arriba, en el selector de plantilla, elige
   **«Colecciones» → «Presoterapia»** (o «Predeterminada» si quieres el mismo
   bloque en todas).
3. En la columna izquierda pulsa **«Agregar sección»**.
4. Elige **«Texto enriquecido»**.
5. **Arrástrala por debajo** de la sección «Cuadrícula de productos».
6. Pega el texto en el bloque de texto de la sección. Puedes usar negritas,
   listas y enlaces con la barra de herramientas.
7. **Guardar**.

> Si eliges «Predeterminada», el mismo texto sale en las cinco colecciones, lo
> cual es peor que no tenerlo (contenido duplicado). **Hazlo colección por
> colección**: cada una necesita su plantilla propia. Para crearla:
> **Personalizar** → selector de plantilla → **«Colecciones»** → **«Crear
> plantilla»**, y luego en la colección asignársela desde
> **Productos → Colecciones → la colección → «Plantilla de tema»**.

---

# C. Páginas, blog e imágenes

## 8 · El H1 de la home no dice nada

### Cómo está ahora

Un `H1` es el titular principal de una página y es de las señales más fuertes que
lee Google. En la home hay **un solo H1 y es el logotipo**, cuyo texto es el texto
alternativo de la imagen: **«logo BPS horizontal blanco»**.

El titular de verdad —«BPS Performance: Recupera. Rinde. Repite.»— es un `h2`.

O sea: el encabezado más importante de la página más importante dice «logo BPS
horizontal blanco».

### Cómo debe quedar

Cambiando el texto alternativo del logotipo, el H1 de la home pasa a decir algo
útil. Y de paso mejora en todas las páginas, porque es la misma imagen.

Texto propuesto: **`BPS Performance, tecnología de recuperación deportiva`**

### Paso a paso

1. Columna izquierda → **Contenido** → **Archivos**.
2. En el buscador de arriba escribe `bps-logo`.
3. Clic en **`bps-logo-horizontal-white.svg`**.
4. Se abre un panel a la derecha con la vista previa. Busca el campo
   **«Texto alternativo»** y pulsa el lápiz o **«Editar»**.
5. Borra `logo BPS horizontal blanco` y escribe
   `BPS Performance, tecnología de recuperación deportiva`.
6. **Guardar**.

### Cómo comprobarlo

Abre la home, clic derecho → **«Ver código fuente de la página»**, y busca
`<h1`. Dentro tiene que estar el texto nuevo.

> **¿Y no sería mejor un H1 de verdad en el banner?** Sí, pero el titular del
> banner está fijado como `h2` en el código del tema y cambiarlo obliga a editar
> `sections/image-banner.liquid`, o sea otro archivo que rehacer en cada
> actualización. El texto alternativo del logotipo consigue el 80 % del beneficio
> sin tocar código, y es como está diseñado el tema. Si algún día queréis el H1
> en el banner, avisad y son dos líneas.

---

## 10 · El banner de la home no tiene texto alternativo

### Cómo está ahora

`Banner_BPS.png` sale con `alt=""`, es decir, marcado como decorativo. Es la
imagen más grande y más vista del sitio.

*(Dato aparte: pesa 1,9 MB como PNG, pero el navegador recibe 285 KB porque
Shopify lo convierte a WebP solo. Aun así, **súbelo como JPG** la próxima vez: un
PNG de una fotografía es el formato equivocado.)*

### Paso a paso

1. **Contenido** → **Archivos** → busca `Banner_BPS`.
2. Clic en el archivo → campo **«Texto alternativo»** → **«Editar»**.
3. Escribe algo como
   `Deportista usando botas de presoterapia BPS en un centro de recuperación`.
4. **Guardar**.

---

## 11 · La página de preguntas frecuentes no tiene su marcado

### Cómo está ahora

`/pages/preguntas-frecuentes` tiene **955 palabras de preguntas y respuestas** y
**ningún marcado `FAQPage`**. Ese marcado es lo que hace que Google enseñe las
preguntas desplegables debajo de tu resultado, que ocupan mucho más espacio.

El artículo de presoterapia sí lo tiene, así que el mecanismo ya funciona en la
tienda: solo hay que aplicarlo aquí.

### Cómo debe quedar

Con un bloque de datos estructurados en esa página, con las mismas preguntas que
ya están escritas.

### Paso a paso

1. **Tienda online** → **Temas** → **Personalizar**.
2. En el selector de plantilla de arriba, elige **«Páginas»** →
   **«Preguntas frecuentes»**.
3. Columna izquierda → **«Agregar sección»** → **«Liquid personalizado»**.
4. En el cuadro de código pega esto, **cambiando las preguntas por las de tu
   página** (copia y pega el bloque `{ "@type": "Question" ... }` tantas veces
   como preguntas tengas):

```liquid
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "AQUÍ LA PREGUNTA, IGUAL QUE EN LA PÁGINA",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AQUÍ LA RESPUESTA, IGUAL QUE EN LA PÁGINA"
      }
    },
    {
      "@type": "Question",
      "name": "SEGUNDA PREGUNTA",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEGUNDA RESPUESTA"
      }
    }
  ]
}
</script>
```

5. **Guardar**.

Tres reglas para que Google no lo rechace:

- **El texto tiene que ser el mismo** que se ve en la página. Si inventas
  preguntas que no están escritas, es motivo de sanción.
- **Sin comillas dobles dentro del texto.** Si una respuesta lleva comillas, usa
  las españolas «así» o quítalas.
- **Cuidado con las comas**: la última pregunta **no** lleva coma después de su
  llave de cierre.

### Cómo comprobarlo

Ve a **`search.google.com/test/rich-results`**, pega
`https://bpsperformance.com/pages/preguntas-frecuentes` y pulsa **«Probar
URL»**. Debe salir **«Preguntas frecuentes»** entre los resultados detectados y
sin errores.

---

## 12 · Los dos artículos nuevos no tienen preguntas frecuentes

### Cómo está ahora

De los tres artículos publicados, **solo `presoterapia-en-casa` tiene el marcado
`FAQPage`**. A `banera-crioterapia` y `led-boots-recuperacion` les falta.

El mecanismo ya está montado en la tienda: hay un metacampo donde se escriben las
preguntas y el tema las convierte en marcado. Solo hay que rellenarlo.

### Paso a paso

1. **Contenido** → **Publicaciones de blog** → clic en
   **«Bañera de crioterapia: la guía definitiva…»**.
2. Baja hasta el final. Hay un bloque de **«Metacampos»** con el campo de
   preguntas frecuentes.
3. Añade de 4 a 6 preguntas con su respuesta, **copiando el texto del propio
   artículo**.
4. **Guardar**.
5. Repite con **«LED Boots para recuperación»**.

> Si el campo da el error **«Value no existe entre las opciones proporcionadas:
> []»**, es que el metacampo se creó con el tipo equivocado. Está explicado en
> [GUIA-BLOG.md](GUIA-BLOG.md) §5: hay que borrarlo y volver a crearlo como
> **«Uno · Varias líneas de texto»**.

### Cómo comprobarlo

El mismo test de resultados enriquecidos con la URL del artículo.

---

## 16 · La página de contacto no muestra los datos de la empresa

### Cómo está ahora

El marcado `Organization` declara dirección en **Paseo de la Reina Cristina, 11,
28014 Madrid**, un teléfono y un correo. Pero **`/pages/contacto` no muestra
ninguno de los tres**: solo un formulario, un enlace de WhatsApp y las redes.

Google compara lo que dice el marcado con lo que se ve en la página. Si no lo
puede corroborar, no se lo cree. Y para posicionar por marca, que Google se crea
que eres una empresa con dirección física es de las señales que más pesan.

### Cómo debe quedar

Con un bloque visible, al lado del formulario, que diga exactamente lo mismo que
el marcado:

```
BPS Performance
Paseo de la Reina Cristina, 11
28014 Madrid, España
Teléfono: +34 619 06 51 66
Correo: [el correo de la tienda]
Horario: [el que sea]
```

**Idéntico** al del marcado y al de Google Business Profile: misma calle, mismo
número, mismo formato de teléfono. Eso se llama coherencia NAP (nombre, dirección,
teléfono) y es literalmente lo que se comprueba.

### Paso a paso

1. **Contenido** → **Páginas** → clic en **Contacto**.
2. En el editor de **«Contenido»**, sitúa el cursor donde quieras el bloque.
3. Escribe los datos. Para que el teléfono se pueda pulsar en el móvil: selecciona
   el número, pulsa el icono de **enlace** (una cadena) y en la dirección escribe
   `tel:+34619065166`.
4. **Guardar**.

---

## 18 · El blog tiene dos H1 iguales *(opcional)*

### Cómo está ahora

`/blogs/rendimiento` tiene **dos `<h1>` con el texto «Recuperación y
rendimiento»**: el de nuestro bloque de cabecera y el de Dawn, que se esconde con
CSS. Esconder no es quitar: en el código siguen los dos.

### Las dos opciones

- **Dejarlo.** Google ignora en gran medida el contenido oculto con
  `display: none`, así que el daño es pequeño. **Es la opción razonable.**
- **Quitarlo de verdad**: **Tienda online** → **Temas** → **···** →
  **Editar código** → `sections/main-blog.liquid`, y borrar la línea del título.
  Queda limpio, pero pasa a ser un archivo más que rehacer en cada actualización
  del tema (serían seis).

---

# D. Datos estructurados y código del tema

Estas tres tareas se hacen en el mismo sitio, así que se pueden hacer del tirón.

## 13 · Tres tipos de página no deberían indexarse

### Cómo está ahora

Estas direcciones se pueden indexar y no interesa:

| Dirección | Por qué molesta |
|---|---|
| `/search?q=...` | Páginas de búsqueda interna. Google las trata como contenido de baja calidad, y una vez indexadas arrastran a todo el dominio |
| `/collections/all` | Duplica el contenido de las cuatro colecciones: los mismos 12 productos otra vez |
| `/blogs/rendimiento/tagged/...` | Con 3 artículos, cada etiqueta es una página con un solo artículo. Es un duplicado del listado |

### Cómo debe quedar

Las tres con la instrucción `noindex, follow`: **que no se indexen, pero que
Google siga los enlaces que hay dentro** (esa segunda parte importa: sin ella se
perdería el enlace interno hacia los productos).

### Paso a paso

1. **Tienda online** → **Temas**.
2. Junto al tema activo, botón **···** → **«Editar código»**.
3. En la columna izquierda, carpeta **`layout`** → clic en **`theme.liquid`**.
4. Busca la etiqueta `</head>` (con `Ctrl+F` / `Cmd+F` dentro del editor).
5. **Justo encima** de `</head>`, pega:

```liquid
{%- if request.path contains '/search'
   or request.path == '/collections/all'
   or current_tags -%}
  <meta name="robots" content="noindex, follow">
{%- endif -%}
```

6. Pulsa **«Guardar»** arriba a la derecha.

> ⚠️ **Antes de tocar `theme.liquid`, haz una copia del tema**: en **Temas**,
> botón **···** del tema activo → **«Duplicar»**. Si algo se rompe, publicas el
> duplicado y vuelves atrás en un clic.

### Cómo comprobarlo

Abre `https://bpsperformance.com/search?q=prueba`, clic derecho → **«Ver código
fuente»** y busca `robots`. Debe aparecer
`<meta name="robots" content="noindex, follow">`. Y **muy importante**:
comprueba que en la home y en una ficha de producto **NO** aparece.

---

## 14 · El correo del marcado está en otro dominio

### Cómo está ahora

El bloque `Organization` que añadisteis dice:

```json
"email": "info@fisioterapiabackpackretiro.es",
"telephone": "619065166"
```

Dos problemas:

- **El correo es de otro dominio.** Para Google, la señal de marca se debilita:
  la ficha de empresa de `bpsperformance.com` da un contacto de
  `fisioterapiabackpackretiro.es`. Funciona igual como correo, pero como señal de
  identidad resta.
- **El teléfono no está en formato internacional.** Debe ser `+34619065166`.

### Cómo debe quedar

```json
"email": "info@bpsperformance.com",
"telephone": "+34619065166"
```

### Paso a paso

Primero hay que **tener el correo del dominio**. Si no existe:

1. **Configuración** (abajo a la izquierda) → **Dominios**.
2. Busca la opción de **reenvío de correo** o **«Correo electrónico del
   dominio»**, y crea `info@bpsperformance.com` reenviando al buzón que ya usáis.
   Así no cambia nada de vuestro día a día y de cara al mundo el contacto es
   vuestro.

Luego, el marcado:

1. **Tienda online** → **Temas** → **Personalizar**.
2. Ve a la **home** y busca la sección de **«Liquid personalizado»** donde está el
   bloque `Organization` (la que añadisteis).
3. Cambia esas dos líneas.
4. **Guardar**.

### Cómo comprobarlo

Test de resultados enriquecidos con `https://bpsperformance.com/`: en el bloque
`Organization` deben salir el correo y el teléfono nuevos.

---

## 15 · El logotipo del marcado es un SVG

### Cómo está ahora

```json
"logo": "https://bpsperformance.com/cdn/shop/files/bps-logo-horizontal-white.svg"
```

Google, para el logotipo de una empresa, acepta **JPG, PNG y GIF**. **El SVG no
está entre los formatos admitidos**, así que ese campo probablemente lo está
ignorando — y es el que alimenta el logotipo del panel de marca. Además el
logotipo es **blanco**, o sea invisible sobre el fondo blanco de Google.

### Cómo debe quedar

Un **PNG con el logotipo en negro o en color, con fondo transparente**, de al
menos 112 px de alto, y de proporción cuadrada o rectangular sencilla.

### Paso a paso

1. Exporta el logotipo como **PNG** desde donde tengáis el original (idealmente
   600 × 600 px, con márgenes, fondo transparente, versión oscura).
2. **Contenido** → **Archivos** → botón **«Cargar archivos»** → súbelo.
3. Cuando termine, clic en el archivo. En el panel de la derecha hay un botón
   para **copiar el enlace** del archivo. Cópialo.
4. **Tienda online** → **Temas** → **Personalizar** → la sección de **«Liquid
   personalizado»** de la home con el `Organization`.
5. Sustituye la dirección de `"logo"` por la que acabas de copiar. **Quítale
   todo lo que venga después de `?`**, del tipo `?v=1788192622&width=500`.
6. **Guardar**.

---

# E. Fuera de Shopify

## 7 · No hay reseñas, y eso se nota en dos sitios

### Cómo está ahora

**No hay ninguna aplicación de reseñas instalada** en la tienda. Consecuencia: en
el marcado de las 12 fichas **no hay `aggregateRating`**, o sea:

- En Google **no salen las estrellas** debajo del resultado. Las estrellas son lo
  que más sube el porcentaje de clics de una ficha de producto, por encima de
  cualquier cambio de título.
- Y en la propia ficha, una página con 40 reseñas convierte mucho más que una sin
  ninguna.

### Paso a paso

1. Columna izquierda → **Aplicaciones** → **«Tienda de aplicaciones de
   Shopify»**.
2. Busca `Judge.me` (tiene plan gratuito y escribe el marcado correctamente).
   Alternativas de pago: Loox, Okendo, Stamped.
3. **«Instalar»** y sigue el asistente. Dos ajustes importantes:
   - Activar **los datos estructurados / rich snippets** (a veces se llama
     «SEO rich snippets»), que es lo que pone las estrellas.
   - Activar el **correo automático de petición de reseña** unos 10-14 días
     después de la entrega.
4. En la propia aplicación, **importa o pide reseñas de los pedidos ya
   servidos**. Casi todas tienen un botón para enviar la petición a los pedidos
   anteriores.

> ⚠️ **No compres reseñas ni las escribas tú.** Además de ilegal en la Unión
> Europea, Google detecta el marcado de valoraciones sin reseñas reales detrás y
> retira las estrellas de todo el dominio.

### Cómo comprobarlo

Cuando haya la primera reseña publicada, test de resultados enriquecidos sobre esa
ficha: debe aparecer **«Fragmento de reseña»** o `aggregateRating`.

---

## 19 · La marca: salir el primero cuando busquen «BPS Performance»

Primero, una expectativa que hay que tener clara:

| Qué se busca | ¿Primer puesto? | Cuándo |
|---|---|---|
| **`BPS Performance`** | **Sí, y es obligatorio** | 2-6 semanas con lo de abajo |
| **`BPS`** a secas | **No, y no merece la pena.** Son tres letras que ya usan decenas de organizaciones grandes. Google resuelve esa búsqueda con quien ya tiene autoridad | — |
| `BPS presoterapia`, `BPS Ice Bath` | Sí | 1-3 meses |
| `presoterapia en casa`, `bañera de crioterapia` | Sí, y ahí está el negocio | 3-8 meses, con los artículos |
| `botas de presoterapia` (compra genérica) | Difícil: eso lo tienen Amazon, Decathlon y marcas con diez años | 9-18 meses, y hace falta que os enlacen |

El objetivo con la marca no es solo salir: es salir **con el panel de la derecha,
los enlaces de sitio y la cajita de búsqueda**, ocupando toda la pantalla. Para
eso:

### 19.1. Perfil de Empresa en Google

Es lo que crea el panel de la derecha. Con la dirección de Madrid que ya tenéis
en el marcado, se puede hacer.

1. Entra en **`business.google.com`** con la cuenta de Google de la empresa.
2. **«Añadir tu empresa a Google»**.
3. Nombre: **`BPS Performance`**, exactamente así.
4. Categoría: **«Tienda de artículos deportivos»** (se puede añadir
   «Proveedor de equipos médicos» como secundaria).
5. Dirección: **Paseo de la Reina Cristina, 11, 28014 Madrid** — la misma, con el
   mismo formato que en la web.
6. Teléfono: **+34 619 06 51 66**. Web: **https://bpsperformance.com**.
7. Google pedirá **verificar** (postal, teléfono o vídeo). Tarda de días a un par
   de semanas.
8. Cuando esté verificado: sube **10-15 fotos reales** (equipo, productos,
   instalaciones), rellena horario y descripción, y **pide reseña a los clientes
   presenciales**.

### 19.2. Perfiles que Google usa para entender una marca

Cada uno es una entidad más que apunta a vosotros con el mismo nombre:

| Perfil | Por qué | Qué hacer |
|---|---|---|
| **LinkedIn de empresa** | De las fuentes que Google usa para el panel de marca | Crear página, nombre exacto, enlace a la web, logotipo |
| **Canal de YouTube** | Los vídeos salen en las búsquedas de marca y ocupan sitio | Subir los vídeos de producto que ya tengáis |
| **Trustpilot** | Ocupa el segundo resultado de casi cualquier búsqueda de marca. Mejor que lo ocupéis vosotros | Crear perfil e invitar a los clientes |
| **Wikidata** | Una entrada de empresa bien referenciada ayuda al panel. No es Wikipedia: no hace falta notoriedad, sí fuentes | Cuando haya alguna mención en prensa |

Y lo que ya tenéis: **Facebook, Instagram y TikTok** deben llevar el enlace a la
web en la biografía y el nombre escrito igual.

### 19.3. La página «Sobre nosotros» es una página de SEO

Tiene 731 palabras y está bien escrita, pero le falta lo que Google busca para
fiarse de una tienda que habla de salud: **quién está detrás, con nombre y cara**,
desde cuándo, dónde, y qué os hace distintos con datos. Es la página que sostiene
todo el contenido del blog.

### 19.4. Enlaces: lo que decide las búsquedas genéricas

Esto no se configura, se consigue. Ordenado por facilidad:

| Vía | Qué es |
|---|---|
| **Clínicas y fisios que usan vuestro material** | Un enlace desde su web: «equipamiento de BPS Performance». El más fácil y el más creíble |
| **Clubes y equipos** | Patrocinio pequeño a cambio de mención con enlace |
| **Directorios sectoriales** | Fisioterapia, material deportivo, proveedores de clínicas |
| **Comparativas y blogs del sector** | Enviar producto a prueba |
| **Prensa deportiva y de salud** | Nota de prensa al sacar producto, o un dato propio |

Y el que más vale: **contenido que merezca enlace**. El artículo que dice lo que
una tecnología NO hace es el que consigue que otros os citen.

---

# Lo que ya está bien (no lo toquéis)

Para que quede claro qué no hay que arreglar:

- **Los canónicos son correctos** en las 25 direcciones. Ninguna apunta a otra
  parte.
- **El marcado de producto está** en las 12 fichas: `Product`, `Brand` y `Offer`
  con precio y disponibilidad.
- **Los artículos llevan `Article`, `BreadcrumbList`, `WebPage` y `Person`**, y el
  de presoterapia además `FAQPage`. Es más de lo que tiene la mayoría de tiendas.
- **La home lleva `Organization` y `WebSite` con `SearchAction`**, que es lo que
  puede darte la cajita de búsqueda debajo del resultado.
- **El sitemap está completo** y `robots.txt` no bloquea nada importante.
- **A las imágenes no les falta el texto alternativo**: las que tienen `alt=""`
  son decorativas (fotos del menú, iconos) y así debe ser.
- **Las fotos se sirven en WebP**: el banner pesa 1,9 MB de origen pero el
  navegador recibe 285 KB. Shopify lo convierte solo.
- **La etiqueta de verificación de Search Console está puesta**, y Google
  Analytics 4 y Google Ads están conectados por los píxeles de Shopify.
- **El 404 responde 404** de verdad, no un 200 disfrazado.
- **El `«Colección: »` del H1 de las colecciones está oculto** (`visually-hidden`):
  es una etiqueta para lectores de pantalla, no un texto visible. **No lo
  quitéis**, es accesibilidad bien hecha. *(En la revisión anterior lo puse como
  algo a corregir; era un error mío.)*

---

# Contenido: lo que va a traer el tráfico

Todo lo anterior es condición necesaria; el tráfico lo traen los artículos.
Está desarrollado en [ARTICULOS-1-3.md](ARTICULOS-1-3.md), con un ajuste que sale
de esta auditoría:

**Ya hay tres artículos publicados**, no uno: `presoterapia-en-casa` (3.224
palabras), `banera-crioterapia` (2.521) y `led-boots-recuperacion` (2.459). Los
tres están en el sitemap y bien montados. Por eso:

| Lo que proponía | Ahora |
|---|---|
| Pilar de frío: «Baños de hielo» | **No escribirlo.** `banera-crioterapia` ya es el pilar de frío y se pisarían. En su lugar, un artículo de racimo: **«A cuántos grados y cuántos minutos según lo que busques»**, enlazando al pilar |
| Pilar de luz roja | **Sigue haciendo falta.** `led-boots-recuperacion` va de un producto concreto, no de la tecnología |
| Pilar de percusión | **Sigue haciendo falta.** No hay nada de pistola de masaje |

Y los tres artículos existentes **están sueltos**: hay que enlazarlos entre sí.

---

# Cómo comprobar todo cuando acabes

Cuatro herramientas, todas gratis:

| Herramienta | Para qué | Cada cuánto |
|---|---|---|
| **Search Console** (`search.google.com/search-console`) | Por qué búsquedas salís y en qué posición. Es la única fuente real | Semanal |
| ↳ **Indexación → Páginas** | Que las 25 direcciones estén indexadas y ninguna excluida por error | Mensual |
| ↳ **Experiencia / Mejoras → Fragmentos de producto** | Errores del marcado. Aquí saldrá lo del precio a 0 y las marcas mal | Mensual |
| **Test de resultados enriquecidos** (`search.google.com/test/rich-results`) | Comprobar página por página que el marcado se lee | Al terminar cada tarea |
| **Merchant Center** | Productos rechazados. Con el precio a 0 y sin SKU habrá avisos | Semanal al principio |
| **PageSpeed Insights** (`pagespeed.web.dev`) | Velocidad con datos reales de usuarios | Mensual |

Y una regla: **pasado el mes 2, no toquéis nada por intuición.** Lo que se
escribe y lo que se optimiza sale de mirar en Search Console qué consultas ya os
están enseñando y en qué posición.

---

# Orden para ponerse

| Cuándo | Qué | Fichas |
|---|---|---|
| **Día 1, media hora** | Precio del Ice Bath y las cinco marcas | 1, 2 |
| **Día 1, media hora** | Texto alternativo del logotipo y del banner | 8, 10 |
| **Día 2, una hora** | Los 12 títulos de producto y las 5 colecciones | 3, 4, 5 |
| **Día 3, una hora** | SKU de los 12, y `noindex` en `theme.liquid` | 6, 13 |
| **Día 3, media hora** | Correo y teléfono del marcado, y logotipo en PNG | 14, 15 |
| **Semana 2** | Instalar reseñas y pedirlas a los pedidos ya servidos | 7 |
| **Semana 2** | `FAQPage` en la página de preguntas y en los dos artículos | 11, 12 |
| **Semana 2** | Datos de la empresa visibles en Contacto | 16 |
| **Semana 3** | Perfil de Empresa en Google y LinkedIn | 19 |
| **Semana 3-4** | Textos alternativos de las galerías, poco a poco | 9 |
| **Semana 4** | Texto propio en las cuatro colecciones | 17 |
| **Mes 2** | Los dos pilares que faltan y enlazar los tres artículos | ARTICULOS-1-3 |
| **Mes 2-3** | Enlaces: clínicas, clubes, directorios | 19.4 |
| **Mes 3** | Revisar Search Console y **decidir con datos** | — |

---

# Resumen en una frase

Lo técnico está sorprendentemente bien —canónicos, sitemap, marcado de producto y
de artículo, WebP, y la ficha de empresa que ya añadisteis—, y lo que falta es de
tienda: **un precio a cero, cinco marcas mal escritas, títulos que se cortan a
mitad de palabra, cero reseñas y colecciones sin texto**. Nada de eso necesita
programar: 19 tareas, la mayoría de minutos, y las cuatro primeras se hacen en una
hora.
