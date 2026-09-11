# Manual de SEO de bpsperformance.com · lo que queda

**Revisión: 8 de septiembre de 2026.** Cuarto rastreo completo, ahora de **26
direcciones indexables** (una más: el artículo de la pistola de masaje).

Esta versión contiene **solo lo que queda por hacer**. Lo cerrado está listado al
principio para dejar constancia, sin instrucciones: no hay que volver a tocarlo.

Documentos hermanos: [ARTICULOS-1-3.md](ARTICULOS-1-3.md) (el plan del blog,
reescrito hoy sobre lo publicado) y [GUIA-BLOG.md](GUIA-BLOG.md) (arquitectura
del blog).

---

## Lo que se ha cerrado desde la revisión anterior ✅

De las 8 tareas de la versión 3, **están cerradas 4**, y son las cuatro que
tenían prisa. Comprobado en el sitio publicado:

| Tarea | Cómo está hoy |
|---|---|
| **1 · Subir `bps-hyperice.css`** | **Hecha.** La hoja publicada pesa 46.939 bytes y **coincide con la del repositorio regla por regla** —comparadas las dos normalizadas, las únicas diferencias son las del minificador de Shopify: `#000c` por `rgb(0 0 0 / .8)`, `.3s` por `300ms` y los prefijos `-webkit-`—. Van dentro los tres arreglos: el texto de las colecciones a ancho completo, el encuadre y el velo del banner en móvil, y los iconos de la rejilla fuera en móvil. El `.js` también está subido: `--bps-header-space` se está calculando |
| **2 · `noindex` en tres tipos de página** | **Hecha, y con la cuarta.** `/search`, `/blogs/rendimiento/tagged/*` y `/collections/all` responden `noindex, follow`, y también `/collections/los-mas-buscados` (elegisteis la opción B). Y lo importante: **la home y las 12 fichas NO lo llevan**, que es donde un error habría sido grave |
| **3 · Los títulos de artículo cortados** | **Hecha.** Los cuatro con el «Título de la página» corto: 51, 52, 56 y 59 caracteres. Ninguno se corta a mitad de palabra |
| **5 · «Los más buscados» sin texto propio** | **Resuelta por la vía B**: está fuera del índice, así que ya no duplica a las otras cuatro |

Y siguen bien las 15 de la revisión anterior: precios, `OutOfStock` del `Ice
Bath`, la marca `BPS Performance` en las 12 fichas, los SKU, los títulos de
producto, el texto de las cuatro colecciones, los canónicos, el `Organization`
completo, el `WebSite` con `SearchAction` y las redirecciones 301 de las dos
colecciones renombradas.

**Y dos cosas que no estaban en la lista y también están hechas:** GA4 instalado
(`G-TVPBTXGC70`) y **Search Console verificado** por etiqueta en el `<head>`. Sin
esas dos, la mitad de este manual no se podría medir.

### Dos correcciones mías

1. **El velo del banner sí está publicado.** En la revisión anterior dije que
   faltaba. Lo busqué en la hoja publicada como `banner__box::before` y no
   aparecía **porque el minificador de Shopify lo escribe `banner__box:before`,
   con un solo dos puntos**. Está.
2. **Los artículos son más cortos de lo que dije.** Puse 1.505, 1.567, 2.270 y
   2.843 palabras; estaba contando **toda la página** —menú, pie, rejilla de
   productos, avisos—, no el artículo. Contando solo el cuerpo:
   **615, 670, 942 y 1.316**. Eso cambia el plan del blog, y por eso
   [ARTICULOS-1-3.md](ARTICULOS-1-3.md) ahora empieza por reparar y no por
   escribir.

---

## Lo que queda: 9 tareas

| # | Qué | Dónde | Esfuerzo |
|---|---|---|---|
| **1** | **37 imágenes de producto sin texto alternativo** en 11 de las 12 fichas | Productos → Medios | 45 min |
| **2** | **Cero reseñas**: ninguna aplicación instalada, así que no hay estrellas en Google | Aplicaciones | 30 min |
| **3** | **El blog y el catálogo no se enlazan**: 0 enlaces en los dos sentidos | Productos y Colecciones | 1 h |
| **4** | **Los artículos los firma «BPS Performance»**, que como autor no es nadie | Contenido | 1 h |
| **5** | **Falta el pilar de luz roja** y dos artículos se quedan en 615 y 670 palabras | Contenido | Continuo |
| **6** | El marcado de preguntas **está inválido en dos artículos** y falta en uno | Contenido | 30 min |
| **7** | **`Organization` duplicado** en todas las páginas, y el segundo tiene valores vacíos | Editar código | 10 min |
| **8** | El título de `/pages/contacto` mide 78 con el sufijo, va en inglés y dice «en 2026» | Páginas | 5 min |
| **9** | **Marca fuera de Shopify**: perfil de empresa en Google, LinkedIn, Trustpilot | Fuera de Shopify | 2 h |

Y tres cosas opcionales al final, que **la recomendación es dejar como están**.

---

# 1 · 37 imágenes de producto sin texto alternativo

### Cómo está ahora

En la revisión anterior figuraba como cerrado «textos alternativos de galería
repetidos → descriptivos y distintos en cada foto». Se corrigieron **los que
estaban repetidos**, pero **el resto se quedaron vacíos**, y eso no se veía en el
rastreo anterior porque solo comprobé las fichas que tenían el problema antiguo.

Contado hoy, imagen a imagen, en la galería de cada ficha:

| Ficha | Fotos sin alt |
|---|---|
| `dispositivo-terapia-luz-roja-portatil` | **7** |
| `banera-crioterapia-bps-ice-bath` | **6** |
| `botas-presoterapia-luz-roja` | 3 |
| `bps-recovery-glasses-gafas-con-filtro-daily-light` | 3 |
| `bps-recovery-glasses-gafas-con-filtro-night-flow` | 3 |
| `gafas-rojas-y-amarillas` | 3 |
| `lampara-profesional-luz-roja-soporte` | 3 |
| `panel-terapia-luz-roja-cuerpo-completo` | 3 |
| `banera-crioterapia-portatil-bps-recovery-pod` | 2 |
| `presoterapia-bps-plus` | 2 |
| `presoterapia-bps-pro-recuperacion-muscular-profesional` | 2 |
| `pistola-de-masaje` | **0** ✅ |

**Solo la pistola de masaje está completa.** Y en las demás falta incluso la foto
principal, que es la que Google usa en Imágenes y en Shopping.

Por qué importa más de lo que parece: la búsqueda de imágenes es un canal entero
para productos físicos, el texto alternativo es **el único texto que Google tiene
para entender la foto**, y sin él la ficha no puede aparecer en Google Imágenes
por «bañera de hielo portátil». Además es un requisito de accesibilidad.

### Cómo debe quedar

Cada foto con una frase que **describa lo que se ve**, no la palabra clave
repetida. La regla: si le leyeras esa frase a alguien por teléfono, ¿sabría qué
hay en la foto?

| Bien | Mal |
|---|---|
| `Bañera de hielo portátil BPS Recovery Pod montada en una terraza, con la tapa térmica a un lado` | `bañera de hielo comprar barata` |
| `Panel de luz roja BPS Pro-Panel apagado, visto de frente sobre su soporte` | `BPS_Pro-Panel_apagado.jpg` |
| `Los cuatro cabezales de la pistola de masaje BPS Gun alineados sobre una mesa` | `pistola masaje` |

Guía rápida: **entre 8 y 15 palabras**, el nombre del producto **una sola vez**,
y lo que hace distinta a esa foto de la anterior (encendido/apagado, medidas,
despiece, en uso, accesorios).

### Paso a paso

Para cada ficha:

1. Columna izquierda → **Productos** → clic en el producto.
2. En el bloque **«Medios»** (la fila de fotos de arriba), **pasa el ratón por
   encima de una foto**: aparecen unos iconos.
3. Clic en el icono de **«Añadir texto alternativo»** (una etiqueta o un lápiz,
   según la versión). También sirve: clic en la foto para abrirla y luego el
   botón **«Añadir texto alternativo»** arriba a la derecha.
4. Escribe la frase y **«Guardar texto alternativo»**.
5. Repite con todas las fotos de esa ficha. **No hace falta guardar el producto**:
   el texto alternativo se guarda solo.

Empezad por las dos primeras de la tabla: `dispositivo-terapia-luz-roja-portatil`
y `banera-crioterapia-bps-ice-bath` son 13 de las 37.

### De paso, una imagen de la home

En la home hay **cuatro fotos sin alt**, pero solo una importa: la de la sección
**«Diseñado para la élite, validado por la ciencia»** (el archivo
`Tecnología_BPS.png`). Se corrige en **Personalizar** → esa sección → el campo de
imagen → **«Texto alternativo»**.

Las otras tres son los iconos de «Envío gratis», «Compra segura» y «Atención
24/7». **Esas deben quedarse vacías**: son decorativas y el texto de al lado ya
dice lo mismo. Poner alt a un icono decorativo solo hace que un lector de
pantalla lo lea dos veces.

### Cómo comprobarlo

Abre una ficha, clic derecho sobre la foto principal → **«Inspeccionar»**. En el
código resaltado, `alt="..."` debe tener texto dentro. O más rápido: en
**`search.google.com/test/rich-results`**, pega la URL de la ficha y mira que la
imagen del `Product` esté declarada.

---

# 2 · No hay reseñas

*(Sin cambios respecto a la revisión anterior. Sigue siendo, con diferencia, lo
que más margen tiene.)*

### Cómo está ahora

**Ninguna aplicación de reseñas instalada.** Comprobado hoy en el marcado de las
12 fichas: **`aggregateRating` no aparece en ninguna**.

- En Google **no salen las estrellas** debajo del resultado. Suben el porcentaje
  de clics más que cualquier cambio de título, y los títulos ya están arreglados.
- En la propia ficha, con productos de **99 a 2.500 €**, la prueba social es
  determinante para convertir.

### Paso a paso

1. Columna izquierda → **Aplicaciones** → **«Tienda de aplicaciones de
   Shopify»**.
2. Busca **`Judge.me`** (plan gratuito y escribe el marcado correctamente).
   Alternativas de pago: Loox, Okendo, Stamped.
3. **«Instalar»** y sigue el asistente. Dos ajustes que hay que dejar activados:
   - Los **datos estructurados** o *SEO rich snippets*: es lo que pone las
     estrellas en Google.
   - El **correo automático de petición de reseña**, 10-14 días después de la
     entrega.
4. Dentro de la aplicación, busca la opción de **pedir reseña a los pedidos ya
   servidos**. Casi todas la tienen, y de ahí saldrán las primeras.

> ⚠️ **No compréis reseñas ni las escribáis vosotros.** Además de ilegal en la
> Unión Europea, Google detecta el marcado de valoraciones sin reseñas reales
> detrás y retira las estrellas de **todo el dominio**.

### Cómo comprobarlo

Con la primera reseña publicada, en **`search.google.com/test/rich-results`**
pega la URL de esa ficha: debe aparecer **«Fragmento de reseña»** o
`aggregateRating`.

---

# 3 · El blog y el catálogo no se enlazan

### Cómo está ahora

Comprobado hoy en las 26 direcciones:

- **Ninguna de las 12 fichas de producto enlaza a ningún artículo.** Cero.
- **Ninguna de las 4 colecciones enlaza a ningún artículo**, aunque las cuatro
  tienen entre 422 y 482 palabras de texto propio donde cabría de sobra.
- **Ningún artículo enlaza a otro artículo.** Los cuatro son islas.
- **`led-boots-recuperacion` no enlaza ni al producto del que habla.** Cero
  enlaces en todo el artículo.
- **Ningún artículo tiene un solo enlace externo.**

En la revisión anterior puse «los tres artículos enlazan entre sí y cada uno a 4
productos y 5 colecciones». Eso era **el menú y los dos bloques automáticos del
final del artículo** —«Colección destacada» y «Sigue leyendo»—, que salen igual
en todas las páginas. **Enlaces escritos dentro del texto** hay 6 en
`presoterapia-en-casa`, 2 en `banera-crioterapia`, 1 en el de la pistola y 0 en
el de las LED boots.

> **Los bloques automáticos no sustituyen a los enlaces escritos**, y además los
> dos de este sitio enseñan **lo mismo en los cuatro artículos**: «Sigue leyendo»
> muestra los tres más recientes —así que tres artículos se enlazan a sí mismos y
> `presoterapia-en-casa` no recibe ninguno— y «Colección destacada» repite las
> mismas cuatro fichas, dejando **ocho de las doce sin aparecer en ningún
> artículo**. El por qué, con la tabla de los tres trabajos que hace un enlace
> interno, está en [ARTICULOS-1-3.md](ARTICULOS-1-3.md) §5.5.

### Por qué es de las tres cosas más rentables de la lista

Un enlace del menú vale poco: está en las 26 páginas, así que no dice nada de
esa página en concreto. Un enlace **escrito dentro de un texto, con una frase
descriptiva alrededor**, es lo que le dice a Google de qué va la página de
destino. Y las fichas ya reciben visitas: son el mejor sitio desde donde empujar
un artículo nuevo.

### Cómo debe quedar

Está desarrollado con la tabla completa en
[ARTICULOS-1-3.md](ARTICULOS-1-3.md) §3.1. En resumen:

| Desde | Hacia |
|---|---|
| Las 3 fichas de presoterapia | `/blogs/rendimiento/presoterapia-en-casa` |
| Las 2 fichas de frío | `/blogs/rendimiento/banera-crioterapia` |
| `pistola-de-masaje` | `/blogs/rendimiento/como-usar-pistola-de-masaje` |
| `botas-presoterapia-luz-roja` | `/blogs/rendimiento/led-boots-recuperacion` |
| Las 3 fichas de luz roja | el pilar de luz roja, en cuanto exista |
| Las 4 colecciones | el artículo de su tecnología |

### Paso a paso

**En una ficha de producto:**

1. **Productos** → el producto → campo grande de **descripción**.
2. Al final, un párrafo corto: *«Si quieres saber cuántos minutos y a qué grados
   conviene usarla, lo tienes en nuestra guía de bañeras de crioterapia.»*
3. **Selecciona con el ratón** las palabras `guía de bañeras de crioterapia` y
   pulsa el icono de **cadena** («Insertar enlace»).
4. En **«Enlazar a»**, empieza a escribir el nombre del artículo: el buscador de
   Shopify lo encuentra. O pega la ruta a mano:
   `/blogs/rendimiento/banera-crioterapia`.
5. **Deja «Abrir esta página en una ventana nueva» desactivado.**
6. **«Insertar enlace»** → **«Guardar»**.

**En una colección:** igual, pero en **Personalizar** → plantilla de la colección
→ la sección de **texto enriquecido** que ya tenéis debajo de la cuadrícula.

> **El texto del enlace importa.** `guía de bañeras de crioterapia` sirve;
> `aquí`, `este artículo` o `leer más` no aportan nada, porque es justo ese texto
> lo que Google usa para entender la página de destino.

### Cómo comprobarlo

Abre la ficha en el navegador y busca el enlace en el texto. Que sea **azul o
subrayado y clicable**, y que al pulsarlo abra el artículo **en la misma
pestaña**.

---

# 4 · Los artículos no los firma nadie

### Cómo está ahora

En el marcado de los cuatro artículos, el autor es **`BPS Performance`**. Como
firma de empresa está bien; **como autor de contenido de salud, no**.

Los cuatro artículos hablan de dolor muscular, circulación, contraindicaciones y
embarazo. Google mide eso aparte de todo lo demás —experiencia, especialización,
autoridad y fiabilidad— y en temas de salud es donde más peso tiene. Un artículo
sobre contraindicaciones de la presoterapia firmado por una marca compite en
desventaja contra el mismo artículo firmado por un fisioterapeuta con número de
colegiado.

### Cómo debe quedar

1. **Una persona real** con nombre y apellidos como autor de cada artículo.
2. Una **página de autor** (`/pages/...`) con su formación, su experiencia y,
   si es fisioterapeuta colaborador, **su número de colegiado**.
3. En los artículos de más riesgo —contraindicaciones, dosis— una línea al
   principio: *«Revisado por [nombre], fisioterapeuta col. nº XXXX. Última
   revisión: [fecha]»*.

### Paso a paso

1. **Configuración** → **Usuarios** (o **Plan y permisos** → **Usuarios**):
   invitad a la persona con su nombre real. Shopify usa el nombre de la cuenta
   como autor del artículo.
2. **Contenido** → **Publicaciones de blog** → el artículo → campo **«Autor»** →
   elegid a esa persona.
3. **Contenido** → **Páginas** → **«Añadir página»** para la biografía. Título:
   el nombre de la persona. Dentro: formación, años de experiencia, en qué
   trabaja, y un enlace al blog.
4. En cada artículo, al final, una línea: *«Escrito por [nombre]»* con enlace a
   esa página.

> Si no hay nadie del equipo con credenciales sanitarias, **la alternativa
> honesta** es firmar con la persona que lo escribe (nombre real, sin inventar
> títulos) y añadir un revisor externo solo en los artículos que lo requieran.
> Inventarse un fisioterapeuta es peor que no tener ninguno.

---

# 5 · El blog: falta el pilar de luz roja

### Cómo está ahora

Cuatro artículos publicados, uno por etiqueta, **entre 615 y 1.316 palabras de
cuerpo**:

| Artículo | Palabras | Estado |
|---|---|---|
| `presoterapia-en-casa` | 1.316 | El mejor de los cuatro |
| `como-usar-pistola-de-masaje` | 942 | Bien enfocado, sin marcado de preguntas |
| `banera-crioterapia` | 670 | Corto para un producto de 1.999 € |
| `led-boots-recuperacion` | 615 | El más corto, y con cero enlaces |

Y **la colección con más catálogo y más ticket no tiene pilar**:
`terapia-luz-roja` son **7 productos de 90 a 2.500 €**, y su único artículo va de
un producto concreto —las LED boots—, no de la tecnología. Para «terapia de luz
roja», «para qué sirve la luz roja» o «panel de luz roja», el sitio no tiene nada
que ofrecer hoy.

Y hay **tres productos sin una línea escrita**: las tres gafas de filtro, 90 €
cada una, que son la cuarta parte del catálogo y el producto de entrada.

### Cómo debe quedar

Está todo en [ARTICULOS-1-3.md](ARTICULOS-1-3.md), reescrito hoy: **seis
artículos nuevos y cuatro reparaciones**, con la ficha completa de cada uno
—palabra clave, títulos con sus topes, esquema, tabla, preguntas, enlaces
internos y externos, imágenes— y las pautas de redacción.

El orden corto: **primero los enlaces de la tarea 3** (una hora y afecta a
páginas ya indexadas), después **reparar `led-boots-recuperacion`**, y después el
**pilar de luz roja**.

Ritmo realista: **dos publicaciones al mes**. Y a partir del segundo mes los
temas no se eligen por intuición: se eligen mirando en Search Console por qué
consultas ya os está enseñando Google y en qué posición.

---

# 6 · El marcado de preguntas está inválido en dos artículos

### Cómo está ahora

Tres de los cuatro artículos llevan marcado `FAQPage`. En dos de ellos, lo que
está declarado como «pregunta» no lo es:

| Artículo | Lo que hay declarado como pregunta |
|---|---|
| `banera-crioterapia` | *«Beneficios de la crioterapia para la recuperación deportiva»* |
| `led-boots-recuperacion` | *«Principales Beneficios de las LED Boots para Atletas»* |
| `led-boots-recuperacion` | *«Conclusión: ¿Vale la pena invertir en unas LED Boots?»* |

Y en `como-usar-pistola-de-masaje` **no hay marcado de preguntas**, siendo el
artículo cuyos encabezados están mejor escritos para eso.

**Por qué pasa:** el marcado se genera **copiando los títulos `h2` del
artículo**. Si el `h2` es una pregunta, sale una pregunta. Si es un titular, sale
una «pregunta» que no lo es, y el validador de Google la marca como inválida.
Compáralo con `presoterapia-en-casa`, donde las siete preguntas están bien
porque los encabezados **se escribieron como preguntas**.

### Cómo debe quedar

Dos arreglos, y el primero es solo escribir:

1. **En los artículos existentes:** reescribid esos tres encabezados en forma de
   pregunta. *«Beneficios de la crioterapia para la recuperación deportiva»* pasa
   a *«¿Qué beneficios tiene la crioterapia para recuperar?»*, y la respuesta va
   en el primer párrafo de debajo, en dos frases. Con eso el marcado se corrige
   solo, sin tocar código.
2. **En el de la pistola:** falta el bloque entero. Revisad en la aplicación que
   genera el marcado si ese artículo está incluido; si se hace a mano dentro del
   contenido, copiad el bloque de otro artículo y cambiad las preguntas.

**Y de aquí sale la regla para todo lo que se escriba a partir de ahora:
los `h2` en forma de pregunta.** Está en [ARTICULOS-1-3.md](ARTICULOS-1-3.md)
§5.2 con el porqué.

### Cómo comprobarlo

En **`search.google.com/test/rich-results`**, pega la URL del artículo. En el
bloque **«Preguntas frecuentes»** no debe haber avisos, y las preguntas listadas
deben leerse como preguntas.

> **Sin prisa, pero hacedlo.** Desde 2023 Google casi no enseña las preguntas
> desplegables en los resultados, así que esto **no va a traer clics por sí
> mismo**. Se arregla porque un marcado inválido resta credibilidad al resto del
> marcado de la página, y porque el arreglo —escribir los encabezados como
> preguntas— mejora el artículo de todas formas.

---

# 7 · `Organization` duplicado en todas las páginas

### Cómo está ahora

Todas las páginas del sitio llevan **dos bloques `Organization`** en el marcado:

| Bloque | Qué tiene |
|---|---|
| El vuestro (1.164 bytes) | Nombre, nombre alternativo, logotipo en PNG, dirección de Madrid, teléfono con `+34`, correo del dominio y las tres redes. **Completo** |
| El de Dawn (441 bytes) | Nombre, logotipo y una lista `sameAs` con **cuatro cadenas vacías** dentro, porque son las redes que no tenéis rellenas en el tema (X, Pinterest, Tumblr, Snapchat...) |

Dos entidades con el mismo nombre y datos distintos obligan a Google a elegir, y
las cadenas vacías dentro de `sameAs` son valores inválidos.

No es grave —Google casi siempre se queda con el más completo— pero se arregla en
diez minutos y limpia el informe de Search Console.

### Cómo debe quedar

Un solo `Organization`: **el vuestro**.

### Paso a paso

> ⚠️ **Antes de tocar `theme.liquid`, duplica el tema**: en **Temas**, botón
> **···** del tema activo → **«Duplicar»**. Si algo se rompe, publicas el
> duplicado y vuelves atrás en un clic.

1. **Tienda online** → **Temas** → **···** → **«Editar código»**.
2. Carpeta **`layout`** → **`theme.liquid`**.
3. Busca `sameAs` con `Ctrl+F` / `Cmd+F` **dentro del editor**.
4. Vas a caer en un bloque que empieza por `<script type="application/ld+json">`
   y contiene `"@type": "Organization"` con `{{ shop.name | json }}` y una lista
   de `settings.social_..._link`. **Ese es el de Dawn**: el vuestro no usa
   `shop.name`, tiene la dirección escrita.
5. **Borra el bloque entero**, desde `<script type="application/ld+json">` hasta
   su `</script>`. Si lo prefieres más conservador: envuélvelo en
   `{% comment %}` … `{% endcomment %}` en lugar de borrarlo.
6. **Guardar**. Y anotadlo en
   [ARCHIVOS-MODIFICADOS.md](ARCHIVOS-MODIFICADOS.md): `theme.liquid` pasa a ser
   un archivo con cambios propios que hay que rehacer al actualizar el tema.

### Cómo comprobarlo

Abre la home, clic derecho → **«Ver código fuente»** y busca `Organization`.
Debe salir **una sola vez**. Y en
**`search.google.com/test/rich-results`** la home debe seguir mostrando el
bloque de organización con la dirección y el teléfono.

---

# 8 · El título de la página de contacto

### Cómo está ahora

| | |
|---|---|
| Lo que hay en «Título de la página» | `Contacto BPS \| Recovery & Performance Technology en 2026` |
| Lo que sale en la pestaña y en Google | Eso más ` – BPS Performance` = **78 caracteres** |

Tres problemas en una línea: **se corta** (Google enseña unos 60-65), la mitad
va **en inglés** en una tienda que vende en español, y **dice «en 2026»**, que
obliga a repasarlo cada enero.

Es el título más largo de las 26 direcciones. Los demás están entre 60 y 77, y en
esos el trozo que se corta es ` – BPS Performance`, que es el menos importante:
no urge tocarlos.

### Cómo debe quedar

`Contacto | BPS Performance` (26 caracteres). Como ya contiene «BPS Performance»,
**el tema no le añade el sufijo**, así que se queda en 26 y se ve entero.

Y la metadescripción, que hoy mide 156, en algo como: `Teléfono, correo y
dirección de BPS Performance en Madrid. Atención para deportistas, clínicas y
centros de fisioterapia.` (124).

### Paso a paso

1. **Contenido** → **Páginas** → **Contacto**.
2. Baja al bloque **«Optimización para motores de búsqueda»** → **«Editar»**.
3. En **«Título de la página»**, borra y escribe `Contacto | BPS Performance`.
4. En **«Metadescripción»**, pega la de arriba.
5. **No toques «Identificador de URL»**: `/pages/contacto` está enlazado desde el
   menú y desde el pie.
6. **Guardar**.

> **La regla, por si hay que repetirla en otras páginas.** El tema coge el
> «Título de la página» y, **si ese texto no contiene «BPS Performance», le pega
> ` – BPS Performance` al final** (18 caracteres). Así que hay dos maneras de que
> quepa: o el título mide **45 o menos**, o mide **hasta 60 pero ya incluye la
> marca**.

---

# 9 · La marca fuera de Shopify

*(Sin cambios: esto no se puede comprobar desde la web. **Verificad qué está
hecho ya.**)*

Es lo que decide si «BPS Performance» sale con el panel de la derecha ocupando
toda la pantalla, o solo con un enlace azul. El marcado ya está perfecto
—nombre, logotipo en PNG, descripción, correo del dominio, teléfono con prefijo,
dirección de Madrid y las tres redes—, así que **la parte difícil está hecha**.
Falta que existan las entidades a las que ese marcado apunta.

### 9.1. Perfil de Empresa en Google

1. Entra en **`business.google.com`** con la cuenta de Google de la empresa.
2. **«Añadir tu empresa a Google»**.
3. Nombre **`BPS Performance`**, exactamente así.
4. Categoría **«Tienda de artículos deportivos»**.
5. Dirección **Paseo de la Reina Cristina, 11, 28014 Madrid** y teléfono
   **+34 619 06 51 66** — **los mismos y con el mismo formato** que en el marcado
   y en la página de contacto. Eso se llama coherencia NAP y es literalmente lo
   que Google comprueba.
6. Web: **https://bpsperformance.com**.
7. Google pedirá **verificar** (postal, teléfono o vídeo): de días a dos semanas.
8. Ya verificado: **10-15 fotos reales**, horario, descripción, y pedid reseña a
   los clientes presenciales.

### 9.2. Los perfiles que Google usa para entender una marca

| Perfil | Por qué | Estado |
|---|---|---|
| **LinkedIn de empresa** | De las fuentes que Google usa para el panel de marca | ¿? |
| **Canal de YouTube** | Los vídeos salen en las búsquedas de marca y ocupan sitio | ¿? |
| **Trustpilot** | Ocupa el segundo resultado de casi cualquier búsqueda de marca. Mejor que lo ocupéis vosotros | ¿? |
| Facebook, Instagram, TikTok | Existen y están en el marcado | ✅ |

En los tres que ya tenéis, comprobad que **el enlace a la web está en la
biografía** y que el nombre está escrito igual.

### 9.3. Enlaces: lo que decide las búsquedas genéricas

Para «botas de presoterapia» hace falta que **otros sitios os enlacen**. Eso no
se configura, se consigue. Por orden de facilidad:

| Vía | Qué es |
|---|---|
| **Clínicas y fisios que usan vuestro material** | Un enlace desde su web: «equipamiento de BPS Performance». El más fácil y el más creíble |
| **Clubes y equipos** | Patrocinio pequeño a cambio de mención con enlace |
| **Directorios sectoriales** | Fisioterapia, material deportivo, proveedores de clínicas |
| **Comparativas y blogs del sector** | Enviar producto a prueba |
| **Prensa deportiva y de salud** | Nota de prensa al sacar producto, o un dato propio |

---

# Tres cosas opcionales, y la recomendación es no tocarlas

| Qué | Por qué se puede dejar |
|---|---|
| **`/blogs/rendimiento` tiene dos `<h1>` iguales** | Uno es nuestro y otro es el de Dawn, oculto con `display: none`. Google ignora en gran medida el contenido oculto, y quitarlo obliga a editar `sections/main-blog.liquid`, un archivo más que rehacer en cada actualización del tema |
| **Las fichas y las colecciones no tienen `BreadcrumbList`** | Los artículos sí. En fichas de producto Google construye la ruta a partir de la URL de todas formas. Añadirlo es otro archivo de tema modificado a cambio de muy poco |
| **`/collections/los-mas-buscados` está en `noindex` y sigue en el sitemap** | Shopify no deja sacarla del sitemap sin tocar código. En Search Console aparecerá como «Excluida por etiqueta noindex», **y eso es lo correcto**: significa que la instrucción funciona |

---

# Lo que está bien y no hay que tocar

Para que quede claro qué **no** es un problema:

- **La hoja de estilos publicada coincide con la del repositorio.** Comparadas
  las dos normalizadas: las 55 diferencias son todas del minificador de Shopify.
- **Los canónicos son correctos** en las 26 direcciones.
- **El `noindex` está exactamente donde debe**: cuatro tipos de página fuera, y
  la home y las 12 fichas dentro.
- **El marcado de producto está completo** en las 12 fichas: `Product`, `Brand`
  con «BPS Performance», SKU, y `Offer` con precio real y disponibilidad
  correcta, incluido el `OutOfStock` del `Ice Bath`.
- **`Organization` completo, `WebSite` con `SearchAction`**, y `Article` +
  `BreadcrumbList` en los cuatro artículos.
- **El H1 de la home es el logotipo con el texto alternativo
  «BPS Performance, tecnología de recuperación deportiva»**. Es como funciona
  Dawn en todas las tiendas: en la portada el logotipo va dentro del `h1`. **No
  es un defecto y no hay que añadir otro `h1`.**
- **Los títulos de producto y de colección están bien**: 42-56 caracteres
  propios, empiezan por lo que se busca y coinciden con el `H1`.
- **Las metadescripciones**: las 26 rellenadas, entre 127 y 159 caracteres.
  Ninguna vacía, ninguna pasada.
- **El sitemap está completo**: 12 productos, 5 colecciones, las páginas y los
  cuatro artículos con su imagen.
- **`robots.txt` no bloquea nada importante**, el 404 responde 404 y las
  redirecciones 301 de las dos colecciones renombradas funcionan.
- **`lang="es"` y sin `hreflang`**, que es lo correcto con un solo idioma.
- **GA4 y Search Console instalados y verificados.**
- **El «Colección: » del H1** está oculto para lectores de pantalla: es
  accesibilidad bien hecha.
- **Los iconos decorativos sin texto alternativo** (los tres de la home y las
  miniaturas del menú) están bien así.

---

# Expectativas, para no frustrarse

| Qué se busca | ¿Primer puesto? | Cuándo |
|---|---|---|
| **`BPS Performance`** | **Sí, y casi todo está hecho** | 2-6 semanas desde el perfil de empresa |
| **`BPS`** a secas | **No, y no merece la pena.** Son tres letras que ya usan decenas de organizaciones grandes | — |
| `BPS presoterapia`, `BPS Ice Bath` | Sí | 1-3 meses |
| `presoterapia en casa`, `bañera de crioterapia` | Sí, y ahí está el negocio | 3-8 meses |
| `terapia de luz roja` | **Posible, y es la oportunidad grande**: es la colección con más catálogo y ahora mismo no tenéis nada escrito | 4-8 meses desde el pilar |
| `botas de presoterapia` (compra genérica) | Difícil: lo tienen Amazon, Decathlon y marcas con diez años | 9-18 meses, y hace falta que os enlacen |

---

# Medición

| Herramienta | Para qué | Cada cuánto |
|---|---|---|
| **Search Console** (`search.google.com/search-console`) | Por qué búsquedas salís y en qué posición. La única fuente real | Semanal |
| ↳ **Rendimiento → Consultas**, filtrando por `/blogs/` | Elegir los siguientes artículos con datos. La tabla de cómo leerlo está en [ARTICULOS-1-3.md](ARTICULOS-1-3.md) §7 | Mensual |
| ↳ **Indexación → Páginas** | Que las 26 estén indexadas. Los cuatro tipos con `noindex` deben salir como «Excluida por etiqueta noindex»: eso es lo correcto | Mensual |
| ↳ **Mejoras → Fragmentos de producto** | Errores del marcado. Con el `Ice Bath` agotado saldrá un aviso de disponibilidad, y es normal | Mensual |
| **Test de resultados enriquecidos** (`search.google.com/test/rich-results`) | Comprobar página por página | Al terminar cada tarea |
| **Merchant Center** | Productos rechazados | Semanal al principio |
| **PageSpeed Insights** (`pagespeed.web.dev`) | Velocidad con datos reales | Mensual |

---

# Orden para ponerse

| Cuándo | Qué | Tarea |
|---|---|---|
| **Hoy, 45 minutos** | Los textos alternativos de las 37 fotos. Empezad por las dos fichas con 7 y 6 | 1 |
| **Hoy, 15 minutos** | El título de la página de contacto y el `Organization` duplicado | 8, 7 |
| **Esta semana** | Instalar reseñas y pedirlas a los pedidos ya servidos | 2 |
| **Esta semana, 1 hora** | Los enlaces de las 12 fichas y las 4 colecciones al blog | 3 |
| **Esta semana** | Decidir la firma de los artículos y crear la página de autor | 4 |
| **Semana 2** | Reparar `led-boots-recuperacion`, y de paso los encabezados en pregunta | 5, 6 |
| **Semana 2** | Perfil de Empresa en Google, LinkedIn, Trustpilot | 9 |
| **Semana 3** | **El pilar de terapia de luz roja** | 5 |
| **Mes 2 en adelante** | Dos publicaciones al mes, eligiendo con Search Console. Y enlaces desde clínicas, clubes y directorios | 5, 9.3 |

---

# Resumen en una frase

Lo urgente de la revisión anterior está hecho —la hoja de estilos, el `noindex`,
los títulos de los artículos—, así que **ya no queda casi nada de configuración**:
lo que queda son **37 textos alternativos y el título de contacto** (una hora
entre las dos), **las reseñas**, y sobre todo lo que no se arregla en el admin:
**enlazar el blog con el catálogo, firmar los artículos con una persona y
escribir el pilar de la colección que más vende**.
