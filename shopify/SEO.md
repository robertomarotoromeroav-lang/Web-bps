# SEO del sitio completo

Auditoría de **bpsperformance.com publicada** y plan de trabajo ordenado por lo
que más mueve la aguja. Todo lo que aparece aquí está **medido sobre las 25 URL
indexables** —rastreadas una a una el día de la revisión—, no es una lista
genérica de buenas prácticas.

Complementa a [ARTICULOS-1-3.md](ARTICULOS-1-3.md), que es la parte de contenido,
y a [GUIA-BLOG.md](GUIA-BLOG.md), que es la arquitectura del blog.

---

## Primero, expectativas realistas

Porque «salir el primero» significa cosas muy distintas según la búsqueda.

| Qué se busca | ¿Se puede salir primero? | Cuándo |
|---|---|---|
| **`BPS Performance`** | **Sí, y es obligatorio.** Es vuestra marca y nadie más la usa | 2-6 semanas si se hace lo del apartado 3 |
| **`BPS`** a secas | **No, y no merece la pena intentarlo.** Son tres letras que ya usan el British Psychological Society, decenas de empresas y un montón de siglas técnicas. Google resuelve esa búsqueda con lo que ya tiene autoridad | — |
| **`BPS presoterapia`**, `BPS Ice Bath`, `botas BPS` | Sí | 1-3 meses |
| **`presoterapia en casa`**, `bañera de crioterapia`, `cómo usar pistola de masaje` | Sí, y es donde está el negocio real | 3-8 meses, con los artículos |
| **`botas de presoterapia`**, `pistola de masaje` (compra genérica) | Difícil a corto plazo: eso lo tienen Amazon, Decathlon y marcas con diez años de dominio | 9-18 meses, y hace falta que otros os enlacen |

El dominio es nuevo y el sitio tiene **25 URL indexables** (12 productos, 5
colecciones, 3 páginas, 1 blog, 3 artículos, la home). Un sitio así no compite
todavía por las genéricas: compite por **marca + cola larga**, y va subiendo. Lo
de abajo está ordenado con ese criterio.

---

## 1. Urgente: cosas que hoy están mal

Esto es lo primero porque son fallos, no mejoras. Cada línea está medida.

| # | Qué pasa | Dónde se arregla |
|---|---|---|
| 1 | **`BPS Ice Bath` está publicado a 0,00 €** y el marcado dice `InStock`. Google Merchant Center rechaza un producto a cero, y en los resultados sale «0,00 €» | Productos → BPS Ice Bath → Precio |
| 2 | **La marca de 4 de los 12 productos está mal.** El campo *Proveedor* tiene el nombre de la categoría, y de ahí sale el `brand` del marcado: `Presoterapia`, `Terapia de luz roja`, `Recuperación Fría` y `Liberación muscular`. Los otros 8 sí ponen `BPS Performance` | Productos → cada uno → *Proveedor* = `BPS Performance` |
| 3 | **El título SEO del BPS PRO no es el producto.** Pone `Presoterapia Backpack Fisiosport 3.0` y el H1 dice `Presoterapia BPS PRO`. Parece copiado de otra ficha | Productos → BPS PRO → *Editar SEO* |
| 4 | **El H1 de la home es el logotipo**, y su texto es el texto alternativo de la imagen: `logo BPS horizontal blanco`. El titular de verdad —«BPS Performance: Recupera. Rinde. Repite.»— es un `h2`. Es el encabezado más importante del sitio y hoy no dice nada | Contenido → Archivos → el logotipo → texto alternativo: `BPS Performance, tecnología de recuperación deportiva` |
| 5 | **Sin descripción para buscadores** en `/collections/los-mas-buscados` y en `/pages/contacto` | Editar SEO de cada una |
| 6 | **Cuatro descripciones se pasan de largo** y Google las corta: pistola de masaje **320** caracteres, NIGHT MAX 257, NIGHT FLOW 238, DAILY LIGHT 222. El máximo útil son ~155 | Editar SEO de cada ficha |
| 7 | **Los títulos de producto miden entre 67 y 90 caracteres.** Google corta alrededor de 60, así que en 10 de 12 fichas lo que se ve acaba en «…» | Ver apartado 4 |
| 8 | **`/search`, `/collections/all` y las páginas de etiqueta del blog se pueden indexar.** Con 3 artículos, `/blogs/rendimiento/tagged/presoterapia` es un duplicado del listado; `/collections/all` duplica las cuatro colecciones; y las páginas de búsqueda interna nunca deben indexarse | Ver apartado 6 |
| 9 | **El blog tiene dos `<h1>` con el mismo texto**, uno de ellos oculto por CSS. Es cosa nuestra: el bloque de cabecera del blog pone su `h1` y el de Dawn se esconde con `display:none`, pero sigue en el HTML | Ver apartado 6 |
| 10 | **Los dos artículos nuevos no tienen el marcado de preguntas frecuentes.** Solo lo tiene el de presoterapia. Es lo que hace que Google enseñe las preguntas desplegables | Rellenar el metacampo `faq` en cada artículo |

---

## 2. Lo que ya está bien (no lo toquéis)

Para que quede claro qué no hay que arreglar:

- **Los canónicos son correctos** en las 25 URL. Ninguna apunta a otra parte.
- **El marcado de producto está** en las 12 fichas: `Product`, `Brand`, `Offer`
  con precio y disponibilidad.
- **Los artículos llevan `Article`, `BreadcrumbList` y `Person`**, y el de
  presoterapia además `FAQPage`. Eso es más de lo que tiene la mayoría.
- **La home lleva `Organization` y `WebSite` con `SearchAction`**, que es lo que
  puede darte la cajita de búsqueda debajo del resultado.
- **El sitemap está completo** y `robots.txt` no bloquea nada importante.
- **Las imágenes no van sin texto alternativo**: las que tienen `alt=""` son
  decorativas (fotos del menú, iconos) y así debe ser.
- **Las fotos se sirven en WebP.** El banner de la home pesa 1,9 MB como PNG,
  pero el navegador recibe **285 KB**; Shopify lo convierte solo.
- **La etiqueta de verificación de Search Console está puesta** y GA4 y Google
  Ads están conectados por los píxeles de Shopify.
- **El 404 responde 404** de verdad, no un 200 disfrazado.

---

## 3. Salir el primero cuando busquen «BPS Performance»

Esta es la parte que da resultado más rápido y la que casi nadie hace. El
objetivo no es solo salir: es salir **con el panel de la derecha, los enlaces de
sitio y la cajita de búsqueda**, o sea ocupando toda la pantalla.

### 3.1. Completar la ficha de empresa del marcado

Hoy el `Organization` de la home tiene nombre, logotipo, URL y `sameAs` — pero
ese `sameAs` trae **siete cadenas vacías** entre Facebook, Instagram y TikTok,
porque Shopify mete una por cada red que no habéis rellenado. Y le faltan la
descripción, el contacto y la dirección.

Añadir en *Personalizar → Liquid personalizado* de la home, o en `theme.liquid`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://bpsperformance.com/#organizacion",
  "name": "BPS Performance",
  "alternateName": "BPS Performance System",
  "url": "https://bpsperformance.com",
  "logo": "https://bpsperformance.com/cdn/shop/files/bps-logo-horizontal-white.svg",
  "description": "Equipamiento de recuperación deportiva: presoterapia, terapia de luz roja, baños de hielo y masaje de percusión.",
  "email": "PONER EL CORREO",
  "telephone": "PONER EL TELÉFONO",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "PONER LA CALLE",
    "addressLocality": "PONER LA CIUDAD",
    "postalCode": "PONER EL CP",
    "addressCountry": "ES"
  },
  "sameAs": [
    "https://www.facebook.com/bpsperformancesystem",
    "https://www.instagram.com/bps_performance_system",
    "https://www.tiktok.com/@bps_performance_system"
  ]
}
</script>
```

Sin cadenas vacías y con dirección y contacto reales. **La dirección importa**:
hoy `/pages/contacto` tiene teléfono pero no dirección postal, y eso es de lo que
Google se fía para decidir que sois una empresa y no una tienda de dropshipping.

### 3.2. Perfil de empresa en Google

Si hay local, tienda o showroom, **Google Business Profile** es lo que crea el
panel de la derecha. Aunque solo sea una oficina:

- Nombre exacto `BPS Performance`, la misma dirección y el mismo teléfono que en
  la web y que en el marcado de arriba (esto se llama coherencia NAP y es
  literalmente lo que se comprueba).
- Categoría: *Tienda de artículos deportivos* o *Proveedor de equipos médicos*.
- Enlace a `https://bpsperformance.com`.
- Fotos reales del equipo y de los productos.

### 3.3. Perfiles que Google usa para entender una marca

Cada uno de estos es una entidad más que apunta a vosotros con el mismo nombre:

| Perfil | Por qué |
|---|---|
| **LinkedIn de empresa** | Es de las fuentes que Google usa para el panel de marca |
| **Canal de YouTube** | Los vídeos de producto salen en las búsquedas de marca y ocupan sitio |
| **Wikidata** | Una entrada de empresa bien referenciada ayuda al panel. No es Wikipedia: no hace falta notoriedad, sí fuentes |
| **Trustpilot** | Ocupa el segundo resultado de casi cualquier búsqueda de marca. Mejor que lo ocupéis con reseñas buenas a que lo ocupe otro |

Y muy importante: **los tres perfiles que ya tenéis** (Facebook, Instagram,
TikTok) deben llevar el enlace a la web en la biografía, con el mismo nombre.

### 3.4. La página «Sobre nosotros» es una página de SEO

Hoy tiene 731 palabras y su título es `Nuestra Filosofía: El Sistema BPS
Performance | Sobre Nosotros`. Está bien, pero le falta lo que Google busca para
fiarse: **quién está detrás con nombre y cara**, desde cuándo, dónde estáis, y
qué os hace distintos con datos. Es la página que sostiene todo el contenido de
salud del blog.

---

## 4. Salir cuando busquen los productos

### 4.1. Reescribir los títulos y las descripciones

Regla: **título de 55-60 caracteres que empiece por lo que la gente busca**, no
por el nombre del modelo. Nadie busca «BPS Pro-Panel»; buscan «panel de luz
roja». El nombre de la gama va después.

| Ficha | Hoy (caracteres) | Propuesta |
|---|---|---|
| `presoterapia-bps-plus` | 75 | `Botas de presoterapia inalámbricas — BPS Plus` |
| `presoterapia-bps-pro...` | 90 ⚠️ y no coincide con el H1 | `Presoterapia profesional de 4 cámaras — BPS Pro` |
| `botas-presoterapia-luz-roja` | 88 | `Botas de presoterapia con luz roja — BPS Fusion` |
| `panel-terapia-luz-roja-cuerpo-completo` | 80 | `Panel de luz roja de cuerpo completo — BPS Pro-Panel` |
| `lampara-profesional-luz-roja-soporte` | 88 | `Lámpara de luz roja profesional con soporte — BPS` |
| `dispositivo-terapia-luz-roja-portatil` | 88 | `Dispositivo de luz roja portátil 660/850 nm — BPS` |
| `banera-crioterapia-bps-ice-bath` | 86 | `Bañera de crioterapia portátil — BPS Ice Bath` |
| `banera-crioterapia-portatil-bps-recovery-pod` | 83 | `Bañera de hielo portátil para inmersión — BPS Pod` |
| `pistola-de-masaje` | 73 | `Pistola de masaje de percusión profesional — BPS` |
| Las tres gafas | 67-69 | `Gafas con filtro de luz azul para dormir — NIGHT FLOW` |

Y la descripción de cada una, **140-155 caracteres**, con la palabra clave y un
motivo para hacer clic (envío, garantía, para quién es).

### 4.2. Lo mismo con las colecciones, que están desaprovechadas

Los títulos de las cinco colecciones miden **entre 30 y 37 caracteres** —
`Presoterapia – BPS Performance`— y las descripciones **entre 58 y 69**. Eso es
regalar la mitad del espacio.

| Colección | Título propuesto | Descripción |
|---|---|---|
| `presoterapia` | `Botas de presoterapia para recuperación muscular` | 150 caracteres explicando para quién es y qué incluye |
| `energia-luminica` | `Terapia de luz roja: paneles, lámparas y portátiles` | ídem |
| `recuperacion-polar` | `Bañeras de hielo y crioterapia para recuperación` | ídem |
| `liberacion-muscular` | `Pistolas de masaje y liberación miofascial` | ídem |
| `los-mas-buscados` | `Los más vendidos en recuperación deportiva` | **hoy no tiene ninguna** |

Y una cosa más: el H1 de las colecciones dice **«Colección: Presoterapia»**. Ese
«Colección:» lo pone la traducción del tema y no aporta nada. Se quita en
*Contenido → Idiomas → buscar «Colección:»* y se deja solo el nombre.

### 4.3. Texto en las colecciones

Las cuatro colecciones tienen entre 493 y 742 palabras contando menú y pie: o
sea, **texto propio, poco**. Una colección que quiera competir por «botas de
presoterapia» necesita 300-500 palabras propias debajo de los productos: qué es,
cómo elegir, para quién, y enlace al artículo pilar. Eso además alimenta el
desplegable del menú, que usa la descripción de la colección.

### 4.4. Reseñas: es lo que falta y lo que más se nota

**No hay ninguna aplicación de reseñas instalada** y por eso ninguna ficha tiene
`aggregateRating`. Consecuencias, las dos importantes:

- En Google **no salen las estrellas**, que es lo que más sube el porcentaje de
  clics de una ficha.
- En igualdad de condiciones, una ficha con 40 reseñas convierte muy por encima
  de una sin ninguna.

Instalad una que escriba el marcado (Judge.me tiene plan gratuito, Loox y Okendo
son de pago) y pedid reseña por correo a los pedidos que ya habéis servido.

### 4.5. Identificadores de producto

Ninguna de las 12 fichas tiene **SKU ni código de barras (GTIN/EAN)**. Para el
sitio web no es crítico; para **Google Shopping y el Merchant Center sí**: sin
identificador, los anuncios y las fichas gratuitas se muestran menos. Si son
productos de marca propia sin EAN, se marca `identifier_exists: no`, pero el SKU
debería estar siempre.

---

## 5. Contenido: es lo que va a traer el tráfico

Está desarrollado en [ARTICULOS-1-3.md](ARTICULOS-1-3.md). Solo dos avisos que
salen de esta auditoría:

1. **Ya hay tres artículos publicados**, no uno: se han publicado
   `banera-crioterapia` (28 de agosto, 2.521 palabras) y `led-boots-recuperacion`
   (31 de agosto, 2.459 palabras). Los tres están en el sitemap y bien montados.
2. **Por eso hay que ajustar la propuesta**: el artículo 2 que propuse, «Baños de
   hielo», **se pisaría** con `banera-crioterapia`, que ya cubre esa intención.
   Dos artículos compitiendo por la misma búsqueda se hacen daño entre ellos.
   Lo que conviene:

| Antes proponía | Ahora |
|---|---|
| Pilar de frío: «Baños de hielo» | **No escribirlo.** `banera-crioterapia` ya es el pilar de frío. En su lugar, un artículo de racimo que no se pise: **«A cuántos grados y cuántos minutos según lo que busques»**, enlazando al pilar |
| Pilar de luz roja | **Sigue haciendo falta.** `led-boots-recuperacion` va de las botas con LED, que es un producto concreto, no de la tecnología. El pilar general no existe |
| Pilar de percusión | **Sigue haciendo falta.** No hay nada de pistola de masaje |

Y hay que enlazar los tres artículos existentes entre sí: hoy están sueltos.

---

## 6. Técnico: indexación, duplicados y limpieza

### 6.1. Lo que no debe indexarse

Tres tipos de URL se pueden indexar hoy y no deberían:

| URL | Por qué | Qué hacer |
|---|---|---|
| `/search?q=...` | Páginas de búsqueda interna. Google las considera contenido de baja calidad y las penaliza como tal | `noindex, follow` |
| `/collections/all` | Duplica el contenido de las cuatro colecciones | `noindex, follow` |
| `/blogs/rendimiento/tagged/*` | Con 3 artículos, cada etiqueta es una página con uno solo. Hasta que no haya 4-5 artículos por etiqueta, es contenido fino | `noindex, follow` |

Se hace con **una sección de Liquid personalizado** en el diseño, o mejor con
tres líneas en `theme.liquid`, dentro del `<head>`:

```liquid
{%- if request.path contains '/search'
   or request.path == '/collections/all'
   or current_tags -%}
  <meta name="robots" content="noindex, follow">
{%- endif -%}
```

`follow` es importante: que no se indexe, pero que siga los enlaces.

### 6.2. Los dos `<h1>` del blog

`/blogs/rendimiento` tiene **dos `<h1>` con el texto «Recuperación y
rendimiento»**: el de nuestro bloque de cabecera y el de Dawn, que escondemos con
`display: none` — pero esconder no es quitar, y en el HTML siguen los dos.

Dos maneras de arreglarlo, y es vuestra decisión:

- **Editar `sections/main-blog.liquid`** y borrar la línea de su título. Queda un
  solo `h1`, limpio, pero pasa a ser un archivo más que rehacer en cada
  actualización del tema (serían seis).
- **Dejarlo.** Google ignora en gran medida el contenido con `display: none`, así
  que el daño es pequeño. Es la opción razonable si no queréis otro archivo.

### 6.3. Textos alternativos repetidos

En cada ficha, **las 5 o 6 fotos de la galería llevan el mismo texto
alternativo**: «Pistola de Masaje Muscular de Percusión Profesional BPS»,
repetido. Google Imágenes es una fuente de tráfico real en este sector —la gente
busca «botas de presoterapia» en imágenes— y para eso el texto tiene que
describir **lo que se ve en cada foto**: «Pistola de masaje BPS con los cuatro
cabezales sobre una mesa», «Detalle de la pantalla con los cinco niveles de
intensidad», etc. Se edita en Productos → Multimedia → cada imagen.

Y el **banner de la home tiene `alt=""`**. Es la imagen más grande del sitio;
merece una descripción.

### 6.4. Velocidad

Está mejor de lo que parece: el banner pesa 1,9 MB como PNG pero **el navegador
recibe 285 KB en WebP**, porque Shopify lo convierte solo. Aun así:

- **Subid el banner como JPG de calidad alta en vez de PNG.** Un PNG de una
  fotografía es el formato equivocado y el original de 1,9 MB ralentiza el panel
  y las conversiones del CDN.
- La fuente Inter se precarga y el banner ya va con `fetchpriority="high"` y
  `loading="eager"`: eso está bien puesto.

### 6.5. Marcado de preguntas frecuentes en la página de FAQ

`/pages/preguntas-frecuentes` tiene **955 palabras de preguntas y respuestas y
ningún marcado `FAQPage`**. Es el caso más fácil de todo este documento: el mismo
bloque de Liquid personalizado que ya usáis en los artículos, apuntando a esa
página.

---

## 7. Autoridad: lo que de verdad decide las genéricas

Todo lo anterior es condición necesaria. Para «botas de presoterapia» hace falta
que **otros sitios os enlacen**, y eso no se configura, se consigue:

| Vía | Qué es | Esfuerzo |
|---|---|---|
| **Clínicas y fisios que usan vuestro material** | Un enlace desde su web («equipamiento de BPS Performance»). Es el más fácil y el más creíble | Bajo |
| **Clubes y equipos** | Patrocinio pequeño a cambio de mención con enlace | Bajo |
| **Prensa deportiva y de salud en español** | Nota de prensa cuando saquéis producto, o dato propio («hemos medido X en Y atletas») | Medio |
| **Comparativas y blogs del sector** | Enviar producto a prueba | Medio |
| **Directorios sectoriales** | Fisioterapia, material deportivo, proveedores de clínicas | Bajo |

Y el que más vale de todos: **contenido que merezca enlace**. El artículo de
«frío después de pesas», el que dice lo que la tecnología NO hace, es el que
consigue que otros os citen.

---

## 8. Medición

| Herramienta | Para qué | Cada cuánto |
|---|---|---|
| **Search Console** | Por qué búsquedas salís y en qué posición. Es la única fuente real | Semanal |
| ↳ *Cobertura* | Que las 25 URL estén indexadas y ninguna excluida por error | Mensual |
| ↳ *Mejoras → Producto* | Errores del marcado de producto: aquí saldrá lo del precio a 0 y la marca mal | Mensual |
| **Merchant Center** | Productos rechazados. Con el precio a 0 y sin GTIN habrá avisos | Semanal al principio |
| **PageSpeed Insights** | Core Web Vitals con datos reales de usuarios | Mensual |
| **GA4** | Qué páginas traen ventas, no solo visitas | Semanal |

Y una regla: **no toquéis nada por intuición pasado el mes 2**. A partir de ahí,
lo que se escribe y lo que se optimiza sale de mirar qué consultas ya os están
enseñando en Search Console y en qué posición.

---

## 9. Orden para ponerse

| Cuándo | Qué |
|---|---|
| **Esta semana** | Los 10 puntos del apartado 1. Son todos de admin, ninguno de código, y la mitad se hacen en una tarde |
| **Semana 2** | Títulos y descripciones de las 12 fichas y las 5 colecciones (apartado 4.1 y 4.2). Quitar «Colección:» del H1 |
| **Semana 2** | Las tres líneas de `noindex` (6.1) y el `FAQPage` de la página de preguntas (6.5) |
| **Semana 3** | El `Organization` completo (3.1), la dirección en contacto, y abrir Google Business Profile y LinkedIn |
| **Semana 3** | Instalar la aplicación de reseñas y pedir reseña a los pedidos ya servidos |
| **Semana 4** | Texto propio en las cuatro colecciones (4.3) y textos alternativos de las galerías (6.3) |
| **Mes 2** | Los dos pilares que faltan: luz roja y pistola de masaje. Enlazar entre sí los tres artículos existentes |
| **Mes 2-3** | Enlaces: clínicas, clubes, directorios |
| **Mes 3** | Revisar en Search Console y **elegir con datos** lo siguiente |

---

## Resumen en una frase

Lo técnico está sorprendentemente bien —canónicos, sitemap, marcado de producto y
de artículo, WebP— y lo que falta es de tienda, no de código: **precios y marcas
mal puestos, títulos que se cortan, cero reseñas, colecciones sin texto y una
ficha de empresa incompleta**. Arreglado eso, la marca se posiciona en semanas; y
las búsquedas que dan dinero se ganan con los artículos y con que os enlacen.
