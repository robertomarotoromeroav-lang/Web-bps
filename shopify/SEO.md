# Manual de SEO de bpsperformance.com · lo que queda

**Revisión: 3 de septiembre de 2026.** Tercer rastreo completo de las 25
direcciones indexables del sitio publicado.

Esta versión contiene **solo lo que queda por hacer**. Lo ya corregido está
listado al principio para dejar constancia, pero sin instrucciones: no hay que
volver a tocarlo.

Documentos hermanos: [ARTICULOS-1-3.md](ARTICULOS-1-3.md) (contenido del blog) y
[GUIA-BLOG.md](GUIA-BLOG.md) (arquitectura del blog).

---

## Lo que ya está hecho ✅

De las 19 tareas de la revisión anterior, **están cerradas 15**. Comprobado una a
una en el sitio publicado:

| Lo que estaba mal | Cómo está hoy |
|---|---|
| `BPS Ice Bath` a **0,00 €** con `InStock` | **1.999,00 € y `OutOfStock`**. Es exactamente la opción A que propusimos: precio real, inventario a cero, y la plantilla de reservas intacta |
| **5 productos con la categoría en «Proveedor»** | **Los 12 con `BPS Performance`**. Y la tarjeta de la home sigue enseñando la categoría, ahora desde «Tipo de producto» |
| «Tipo de producto» con `Recovery` en 8 fichas | Las cuatro categorías reales, bien escritas |
| **Ningún SKU** | **Los 12 con SKU**, con la nomenclatura propuesta |
| Títulos de producto de **67 a 90 caracteres**, tres cortados a mitad de palabra | **61 a 74**, reescritos empezando por lo que se busca, y **coinciden con el H1** |
| Colecciones con títulos de 30-37 y descripciones de 58-69 | **Títulos de 60-70 y descripciones de 127-154** |
| Colecciones **sin texto propio** | Las cuatro con texto largo, **8 apartados H2 cada una** |
| El `h1` del texto de la colección duplicaba el de la página | Corregido: **un solo `h1` por colección** |
| El **H1 de la home** decía «logo BPS horizontal blanco» | «BPS Performance, tecnología de recuperación deportiva» |
| El **banner de la home** sin texto alternativo | Con descripción |
| **Textos alternativos de galería repetidos** | Descriptivos y distintos en cada foto |
| `FAQPage` solo en un artículo | **En la página de preguntas y en los tres artículos** |
| El correo del marcado en **otro dominio** | `info@bpsperformance.com`, y el teléfono con `+34` |
| El logotipo del marcado en **SVG** | En **PNG**, que es lo que Google acepta |
| La página de contacto **sin dirección, teléfono ni correo** | Los tres visibles |
| Los tres artículos **sueltos** | Enlazan entre sí, y cada uno a 4 productos y 5 colecciones |

Y un cambio que hicisteis por vuestra cuenta y está bien resuelto: **dos
colecciones cambiaron de dirección** —`energia-luminica` → `terapia-luz-roja` y
`recuperacion-polar` → `recuperacion-fria`—. Comprobado: **las antiguas redirigen
con 301** a las nuevas, y **ningún enlace interno del sitio apunta ya a las
viejas**, así que no hay cadenas de redirección. Está limpio.

---

## Lo que queda: 8 tareas

Ordenadas por urgencia. Las tres primeras son de hoy.

| # | Qué | Dónde | Esfuerzo |
|---|---|---|---|
| **1** | **Subir `bps-hyperice.css`.** Sin esto, el texto que acabáis de escribir en las cuatro colecciones se ve en una columna de 516px | Editar código | 5 min |
| **2** | Tres tipos de página **se pueden indexar** y no deberían | Editar código | 10 min |
| **3** | **Los tres títulos de artículo se cortan a mitad de palabra** | Contenido → Publicaciones | 10 min |
| **4** | **Cero reseñas**: ninguna aplicación instalada, así que no hay estrellas en Google | Aplicaciones | 30 min |
| **5** | `Los más buscados` **no tiene texto propio** y duplica a las otras cuatro | Colecciones | 20 min |
| **6** | El blog tiene **dos `<h1>` iguales** | Editar código *(opcional)* | 5 min |
| **7** | **Marca fuera de Shopify**: perfil de empresa en Google, LinkedIn, Trustpilot | Fuera de Shopify | 2 h |
| **8** | **Faltan dos pilares del blog** y un artículo de racimo | Contenido | Continuo |

---

# 1 · Subir `bps-hyperice.css` ⚠️ *lo más urgente*

### Cómo está ahora

Habéis escrito el texto de las cuatro colecciones, y está bien escrito: entre
1.036 y 1.268 palabras cada una, con ocho apartados. Pero **la hoja de estilos
publicada es la anterior**, así que ese texto se está viendo mal.

Medido hoy en `/collections/presoterapia` con la hoja que hay publicada:

| | Hoy | Debería |
|---|---|---|
| Ancho del texto | **516,1 px** | 1.380 px |
| Ancho de la rejilla de productos | 1.380 px | 1.380 px |
| Tamaño de los `h2` del texto | **48 px** | 32 px |

O sea: una columna estrecha pegada a la izquierda, con 860px vacíos al lado, y
unos encabezados del mismo tamaño que el título de la colección. Es el problema
que ya diagnosticamos —el tope de `58ch` de nuestra propia hoja le ganaba al
ajuste «Ancho completo»— y **está arreglado en el repositorio, pero sin subir**.

La hoja publicada pesa **45.699 bytes**; la del repositorio, **124.341** con los
comentarios.

### Cómo debe quedar

Con la hoja nueva, medido: el texto arranca en **x=30 con 1.380 de ancho**, el
mismo marco exacto que la rejilla de productos, y también coincide en tableta
(708) y en móvil (360). Los `h2` bajan a 32 px y los `h3` a 20, que es la escala
del artículo.

### Paso a paso

1. **Canales de venta → Tienda online** → **Temas**.
2. Junto al tema activo, botón **···** → **«Editar código»**.
3. En la columna izquierda, carpeta **`assets`** → clic en **`bps-hyperice.css`**.
4. Clic dentro del editor, selecciona todo (`Ctrl+A` / `Cmd+A`) y bórralo.
5. Abre `shopify/bps-hyperice.css` de este repositorio, cópialo entero y pégalo.
6. **Guardar**.

### Cómo comprobarlo

Abre `https://bpsperformance.com/collections/presoterapia` en una ventana de
incógnito, para saltarte la caché. **El texto de debajo de los productos tiene
que ocupar el mismo ancho que la fila de productos de arriba**, y los títulos de
apartado tienen que verse claramente más pequeños que «Colección: Presoterapia».

> Aprovecha y sube también **`bps-hyperice.js`** si no lo has hecho: lleva el
> arreglo del hueco de la cabecera, que evita que el titular de las páginas suba
> hasta tocar el menú.

---

# 2 · Tres tipos de página no deberían indexarse

### Cómo está ahora

Comprobado hoy: las tres responden **sin ninguna instrucción para buscadores**,
o sea que Google las puede indexar.

| Dirección | Por qué molesta |
|---|---|
| `/search?q=...` | Páginas de búsqueda interna. Google las trata como contenido de baja calidad y, una vez indexadas, arrastran a todo el dominio |
| `/collections/all` | Duplica el contenido de las cinco colecciones: los mismos 12 productos otra vez |
| `/blogs/rendimiento/tagged/...` | Con 3 artículos, cada etiqueta es una página con un solo artículo: un duplicado del listado |

### Cómo debe quedar

Las tres con `noindex, follow`: **que no se indexen, pero que Google siga los
enlaces de dentro**. Esa segunda parte importa, porque si no se perdería el
enlace interno hacia los productos.

### Paso a paso

> ⚠️ **Antes de tocar `theme.liquid`, duplica el tema**: en **Temas**, botón
> **···** del tema activo → **«Duplicar»**. Si algo se rompe, publicas el
> duplicado y vuelves atrás en un clic.

1. **Tienda online** → **Temas** → **···** → **«Editar código»**.
2. Columna izquierda, carpeta **`layout`** → clic en **`theme.liquid`**.
3. Busca `</head>` con `Ctrl+F` / `Cmd+F` **dentro del editor**.
4. **Justo encima** de `</head>`, pega esto:

```liquid
{%- if request.path contains '/search'
   or request.path == '/collections/all'
   or current_tags -%}
  <meta name="robots" content="noindex, follow">
{%- endif -%}
```

5. **Guardar**.

### Cómo comprobarlo

1. Abre `https://bpsperformance.com/search?q=prueba`, clic derecho →
   **«Ver código fuente de la página»** y busca `robots`. Debe salir
   `<meta name="robots" content="noindex, follow">`.
2. **Y muy importante:** abre la home y una ficha de producto y comprueba que ahí
   **NO** aparece. Si apareciera, habrías desindexado la tienda entera.

---

# 3 · Los títulos de los tres artículos se cortan

### Cómo está ahora

Es el mismo problema que ya arreglasteis en los productos, pero en el blog:

| Artículo | Etiqueta que sale hoy | Nº |
|---|---|---|
| Bañera de crioterapia | `Bañera de crioterapia: La guía definitiva para atletas y fisioterapeut – BPS Performance` | **88** ✂️ |
| LED Boots | `LED Boots para recuperación: ¿funcionan? análisis y beneficios en 2026 – BPS Performance` | **88** |
| Presoterapia en casa | `Presoterapia en casa: qué es, para qué sirve y cómo escogerla en 2026 – BPS Performance` | **87** |

El primero se corta a mitad de palabra —«fisioterapeut»— porque el campo **«Título
de la página» admite 70 caracteres** y se ha rellenado con el título completo del
artículo. Y encima el tema le añade ` – BPS Performance`, otros 18.

**Recordatorio de la regla:** el tema coge el «Título de la página» y, si ese
texto **no** contiene «BPS Performance», le pega la marca al final. Así que hay
dos maneras de que quepa: o el título mide 40 o menos, o mide hasta 60 pero ya
incluye «BPS Performance».

### Cómo debe quedar

| Artículo | «Título de la página» propuesto | Nº |
|---|---|---|
| Bañera de crioterapia | `Bañera de crioterapia: guía para atletas y clínicas` | 51 |
| LED Boots | `LED Boots: ¿funcionan para recuperar? Qué dice la evidencia` | 58 |
| Presoterapia en casa | `Presoterapia en casa: para qué sirve y cómo elegirla` | 52 |

Y quitad el «en 2026» de la etiqueta: obliga a cambiarlo cada enero. Dentro del
artículo, en el texto, sí tiene sentido.

> **El título del artículo puede seguir siendo largo.** Lo que se cambia es solo
> el campo de SEO. Es la misma separación que ya usáis en los productos: nombre
> largo en la web, título corto en Google.

### Paso a paso

Para cada uno de los tres:

1. **Contenido** → **Publicaciones de blog** → clic en el artículo.
2. Baja hasta el final, al bloque **«Optimización para motores de búsqueda»**.
3. Pulsa **«Editar»**.
4. En **«Título de la página»**, borra lo que haya y pega el título de la tabla.
   Vigila el contador: **que no pase de 60**.
5. **No toques «Identificador de URL».**
6. **Guardar**.

### Cómo comprobarlo

Abre el artículo y mira **el texto de la pestaña del navegador**: es exactamente
lo que verá Google. No debe acabar en una palabra partida.

---

# 4 · No hay reseñas

### Cómo está ahora

**Ninguna aplicación de reseñas instalada.** Comprobado en el marcado de las 12
fichas: no hay `aggregateRating` en ninguna.

Es, con diferencia, **lo que más margen de mejora tiene ahora mismo**, por dos
motivos:

- En Google **no salen las estrellas** debajo del resultado. Las estrellas suben
  el porcentaje de clics más que cualquier cambio de título, y los títulos ya los
  habéis arreglado.
- En la propia ficha, una página con 40 reseñas convierte mucho más que una sin
  ninguna. Y con productos de 549 a 2.500 €, la prueba social es determinante.

### Cómo debe quedar

Una aplicación que escriba el marcado de valoraciones y pida la reseña por correo
después de cada entrega.

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

Cuando haya la primera reseña publicada, ve a
**`search.google.com/test/rich-results`**, pega la URL de esa ficha y pulsa
**«Probar URL»**. Debe aparecer **«Fragmento de reseña»** o `aggregateRating`.

---

# 5 · «Los más buscados» no tiene texto propio

### Cómo está ahora

Las otras cuatro colecciones tienen entre 1.036 y 1.268 palabras. Esta tiene
**676 y ningún texto propio**: solo los productos, que además son **los mismos
que ya están en las otras cuatro**.

Una colección así es un duplicado a ojos de Google.

### Las dos opciones

**Opción A · Darle su texto** *(recomendada si de verdad la vais a usar).*
No repitáis lo de las otras colecciones: aquí el ángulo es distinto, algo del
tipo «Los cinco equipos que más se llevan y para quién es cada uno». Con 300-400
palabras basta. Se hace igual que en las otras: **Personalizar** → plantilla de
la colección → sección **«Texto enriquecido»** debajo de la cuadrícula, con
**«Ancho completo» activado** y empezando por **H2**.

**Opción B · Que no se indexe.** Si es solo un escaparate para la home y no
esperáis que entre nadie por Google, mejor sacarla del índice. Es una línea más
en el `noindex` de la tarea 2:

```liquid
{%- if request.path contains '/search'
   or request.path == '/collections/all'
   or request.path == '/collections/los-mas-buscados'
   or current_tags -%}
  <meta name="robots" content="noindex, follow">
{%- endif -%}
```

Si dudáis, **la opción A**: una colección de «más vendidos» con texto propio
posiciona bien por búsquedas del tipo «mejores aparatos de recuperación».

---

# 6 · El blog tiene dos `<h1>` iguales *(opcional)*

### Cómo está ahora

`/blogs/rendimiento` tiene **dos `<h1>` con el texto «Recuperación y
rendimiento»**: el de nuestro bloque de cabecera y el de Dawn, que se esconde con
`display: none`. Esconder no es quitar: en el código siguen los dos.

Es el único punto de la lista donde **la recomendación es no hacer nada**. Google
ignora en gran medida el contenido oculto, y quitarlo obliga a editar
`sections/main-blog.liquid`, que pasaría a ser un sexto archivo de tema que
rehacer en cada actualización.

Si aun así lo queréis limpio: **Editar código** → `sections/main-blog.liquid` →
borrar la línea del título. Y anotadlo en
[ARCHIVOS-MODIFICADOS.md](ARCHIVOS-MODIFICADOS.md).

---

# 7 · La marca fuera de Shopify

Esto no lo puedo comprobar desde la web, así que **verificad qué está hecho ya**.
Es lo que decide si «BPS Performance» sale con el panel de la derecha ocupando
toda la pantalla, o solo con un enlace azul.

El marcado ya está perfecto —nombre, logotipo en PNG, descripción, correo del
dominio, teléfono con prefijo, dirección de Madrid y las tres redes—, así que
**la parte difícil está hecha**. Falta que existan las entidades a las que ese
marcado apunta.

### 7.1. Perfil de Empresa en Google

Es lo que crea el panel de la derecha. Con la dirección de Madrid que ya tenéis
declarada, se puede hacer.

1. Entra en **`business.google.com`** con la cuenta de Google de la empresa.
2. **«Añadir tu empresa a Google»**.
3. Nombre **`BPS Performance`**, exactamente así.
4. Categoría **«Tienda de artículos deportivos»**.
5. Dirección **Paseo de la Reina Cristina, 11, 28014 Madrid** y teléfono
   **+34 619 06 51 66** — **los mismos y con el mismo formato** que en el marcado
   y en la página de contacto. Eso se llama coherencia NAP y es literalmente lo
   que Google comprueba.
6. Web: **https://bpsperformance.com**.
7. Google pedirá **verificar** (postal, teléfono o vídeo): tarda de días a dos
   semanas.
8. Ya verificado: **10-15 fotos reales**, horario, descripción, y pedid reseña a
   los clientes presenciales.

### 7.2. Los perfiles que Google usa para entender una marca

| Perfil | Por qué | Estado |
|---|---|---|
| **LinkedIn de empresa** | De las fuentes que Google usa para el panel de marca | ¿? |
| **Canal de YouTube** | Los vídeos salen en las búsquedas de marca y ocupan sitio | ¿? |
| **Trustpilot** | Ocupa el segundo resultado de casi cualquier búsqueda de marca. Mejor que lo ocupéis vosotros | ¿? |
| Facebook, Instagram, TikTok | Ya existen y están en el marcado | ✅ |

En los tres que ya tenéis, comprobad que **el enlace a la web está en la
biografía** y que el nombre está escrito igual.

### 7.3. Enlaces: lo que decide las búsquedas genéricas

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

# 8 · El blog: faltan dos pilares

Los tres artículos publicados están bien montados —2.270, 1.567 y 1.505 palabras,
con `Article`, `BreadcrumbList`, `FAQPage` y enlaces cruzados— y **ya cubren
presoterapia y frío**.

Lo que falta, desarrollado en [ARTICULOS-1-3.md](ARTICULOS-1-3.md):

| Artículo | Por qué |
|---|---|
| **Pilar de terapia de luz roja** | `led-boots-recuperacion` va de un producto concreto, no de la tecnología. Es la colección con más catálogo y más ticket, y no tiene pilar |
| **Pilar de pistola de masaje** | No hay nada publicado sobre percusión |
| **«A cuántos grados y cuántos minutos»** | Artículo de racimo que cuelga de `banera-crioterapia`. **No escribáis otro pilar de frío**: se pisaría con el que ya existe |

Ritmo realista: **dos artículos buenos al mes**. Y a partir del segundo mes, los
temas no se eligen por intuición, se eligen mirando en Search Console por qué
búsquedas ya os está enseñando Google y en qué posición.

---

# Lo que está bien y no hay que tocar

Para que quede claro qué **no** es un problema:

- **Los canónicos son correctos** en las 25 direcciones.
- **El marcado de producto está completo** en las 12 fichas: `Product`, `Brand`
  con «BPS Performance», y `Offer` con precio real y disponibilidad correcta.
- **`FAQPage` en cuatro páginas**: preguntas frecuentes y los tres artículos.
- **`Organization` completo** con dirección, contacto y redes, y el logotipo en
  PNG.
- **`WebSite` con `SearchAction`**, que es lo que puede darte la cajita de
  búsqueda debajo del resultado.
- **Las redirecciones de las dos colecciones renombradas funcionan** (301) y
  ningún enlace interno apunta ya a las direcciones viejas.
- **El sitemap está completo**, `robots.txt` no bloquea nada importante y el 404
  responde 404 de verdad.
- **`lang="es"` y sin `hreflang`**, que es lo correcto con un solo idioma.
- **Las fotos se sirven en WebP**: el banner pesa 1,9 MB de origen pero el
  navegador recibe 285 KB.
- **El «Colección: » del H1** está oculto para lectores de pantalla. Es
  accesibilidad bien hecha; no lo quitéis.

---

# Expectativas, para no frustrarse

| Qué se busca | ¿Primer puesto? | Cuándo |
|---|---|---|
| **`BPS Performance`** | **Sí, y ya está casi todo hecho** | 2-6 semanas desde el perfil de empresa |
| **`BPS`** a secas | **No, y no merece la pena.** Son tres letras que ya usan decenas de organizaciones grandes | — |
| `BPS presoterapia`, `BPS Ice Bath` | Sí | 1-3 meses |
| `presoterapia en casa`, `bañera de crioterapia` | Sí, y ahí está el negocio | 3-8 meses |
| `botas de presoterapia` (compra genérica) | Difícil: lo tienen Amazon, Decathlon y marcas con diez años | 9-18 meses, y hace falta que os enlacen |

---

# Medición

| Herramienta | Para qué | Cada cuánto |
|---|---|---|
| **Search Console** (`search.google.com/search-console`) | Por qué búsquedas salís y en qué posición. La única fuente real | Semanal |
| ↳ **Indexación → Páginas** | Que las 25 direcciones estén indexadas. Después de la tarea 2, tres tipos de página deben empezar a salir como «Excluida por etiqueta noindex»: eso es lo correcto | Mensual |
| ↳ **Mejoras → Fragmentos de producto** | Errores del marcado. Con el Ice Bath agotado saldrá un aviso de disponibilidad, y es normal | Mensual |
| **Test de resultados enriquecidos** (`search.google.com/test/rich-results`) | Comprobar página por página | Al terminar cada tarea |
| **Merchant Center** | Productos rechazados | Semanal al principio |
| **PageSpeed Insights** (`pagespeed.web.dev`) | Velocidad con datos reales | Mensual |

---

# Orden para ponerse

| Cuándo | Qué | Tarea |
|---|---|---|
| **Hoy, 15 minutos** | Subir `bps-hyperice.css` y `bps-hyperice.js` | 1 |
| **Hoy, 10 minutos** | El `noindex` en `theme.liquid` | 2 |
| **Hoy, 10 minutos** | Los tres títulos de artículo | 3 |
| **Esta semana** | Instalar reseñas y pedirlas a los pedidos ya servidos | 4 |
| **Esta semana** | Decidir qué hacer con «Los más buscados» | 5 |
| **Semana 2** | Perfil de Empresa en Google, LinkedIn, Trustpilot | 7 |
| **Mes 1-2** | Los dos pilares del blog y el artículo de frío | 8 |
| **Mes 2 en adelante** | Enlaces desde clínicas, clubes y directorios | 7.3 |

---

# Resumen en una frase

De 19 tareas quedan 8, y **solo tres son de hoy**: subir la hoja de estilos —que
es lo que hace que se vea bien el texto que acabáis de escribir en las cuatro
colecciones—, el `noindex` de tres tipos de página, y acortar los títulos de los
tres artículos. Lo demás ya no es configuración: son **reseñas, perfiles de marca
y contenido**, que es de lo que depende el posicionamiento a partir de aquí.
