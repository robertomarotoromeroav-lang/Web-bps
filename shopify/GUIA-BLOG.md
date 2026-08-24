# El blog: qué publicar y cómo dejarlo configurado

Guía específica del blog: **qué contenido tiene sentido** para lo que vende BPS,
**cómo se estructura** para que Google lo entienda, y **cómo se configura** en
Shopify con el tema que ya tenemos. Complementa a
[`GUIA-SHOPIFY-PARTE-2.md`](GUIA-SHOPIFY-PARTE-2.md) §G-5, que solo cubría los
ajustes de la sección.

---

## Lo que hay hoy, medido

Comprobado sobre la tienda publicada. La primera columna es lo que había cuando
se escribió esta guía; la segunda, cómo está ahora.

| | Al empezar | Ahora |
|---|---|---|
| Blogs | **Dos**: `noticias` («Blog») y `consejos-de-fisioterapia`, vacío | ✅ **Uno**: `rendimiento`, «Recuperación y rendimiento». El vacío borrado y `/blogs/noticias` redirigiendo con 301 |
| Artículos | Uno | Uno: «Presoterapia en Casa…» |
| Longitud del artículo | 2.770 palabras · 10 `<h2>` · 21 `<h3>` | igual |
| Imágenes | **Una**, la de cabecera (110 KB en WebP: el CDN ya la convierte) | igual |
| Enlaces internos | **6, a tres productos**. Ninguno a colecciones ni a otros artículos | igual |
| Datos estructurados | `Article`, `WebPage`, `Person`, `Organization` — los pone el tema | igual |
| Comentarios | **Abiertos** | pendiente |
| Meta descripción del blog | No la tenía | 🔴 **sigue sin ponerse** |
| Etiquetas / categorías | Ninguna, y el tema no las pinta | pendiente (§4.2) |
| Paginación | Dawn parte la lista **cada 6 artículos** | igual |

**El artículo que hay está bien planteado** —estructura clara, preguntas
frecuentes, contraindicaciones, comparativa por perfil— y sirve de base. Lo que
falta es todo lo demás: arquitectura, categorías, más artículos y los remates de
SEO. Tres cosas concretas a corregir en él, apuntadas al final (§7).

---

## 1. Arquitectura: un solo blog y las categorías por etiquetas

**Un blog, no dos.** Dos blogs parten la autoridad, duplican plantillas y obligan
a mantener dos listados. Las «categorías» se hacen con **etiquetas**, que Shopify
convierte en URLs propias:

```
/blogs/<blog>/tagged/presoterapia
```

Esas URLs funcionan solas, se indexan y no hay que programar nada.

**Esto ya está hecho** ✅ — comprobado en la tienda: el blog vacío borrado, el que
queda con handle `rendimiento` y título «Recuperación y rendimiento», y
`/blogs/noticias` devolviendo un 301 al nuevo. El sitemap de blogs ya solo tiene
dos URLs, las buenas.

Queda una cosa de este apartado: **la meta descripción del blog**, que sigue sin
poner. En *Administrar blogs → Editar la vista previa del motor de búsqueda*, 150
caracteres diciendo de qué va.

> ⚠️ El admin de Shopify **no deja mover un artículo de un blog a otro**. Si
> algún día hay que consolidar, se copia el contenido al blog bueno, se despublica
> el viejo y se pone la redirección 301. Con un artículo es trivial; por eso
> conviene ordenarlo ya.

### Vocabulario cerrado de etiquetas

Las etiquetas se van de las manos en dos meses si no se cierra la lista. Estas
seis, y ninguna más, cada artículo con **una principal y hasta dos secundarias**:

| Etiqueta | Se corresponde con |
|---|---|
| `Presoterapia` | `/collections/presoterapia` |
| `Luz roja` | `/collections/energia-luminica` |
| `Frío` | `/collections/recuperacion-polar` |
| `Liberación muscular` | `/collections/liberacion-muscular` |
| `Entrenamiento` | transversal: cargas, calendario, deportes |
| `Clínicas` | contenido para fisios y centros (B2B) |

---

## 2. El contenido: cuatro pilares y sus racimos

La estructura que funciona en una tienda como esta es **pilar + racimo**: un
artículo largo por tecnología que responde a la búsqueda genérica, y alrededor
seis u ocho artículos cortos que responden a dudas concretas y enlazan al pilar.
Los cuatro pilares son, exactamente, vuestras cuatro colecciones.

### Pilar 1 · Presoterapia

**Pilar (ya existe):** «Presoterapia en casa: qué es, para qué sirve y cómo
elegir». Es el artículo publicado. Se queda como pilar.

| Artículo del racimo | Intención de búsqueda | Enlaza a |
|---|---|---|
| Cuántas sesiones de presoterapia hacen falta (y cada cuánto) | duda concreta, mucho volumen | Pilar + BPS Plus |
| Presoterapia para piernas cansadas y retención de líquidos | síntoma | Pilar + colección |
| Presoterapia vs drenaje linfático manual | comparativa | Pilar |
| Botas de presoterapia para corredores: protocolo después de rodar | deportivo | Botas luz roja + BPS Pro |
| Cuántas cámaras y cuántos mmHg necesito | comparativa técnica | BPS Plus vs BPS Pro |
| Contraindicaciones de la presoterapia | seguridad, capta confianza | Pilar |
| Presoterapia en el postparto | nicho con demanda | Pilar |

### Pilar 2 · Terapia de luz roja (fotobiomodulación)

**Pilar a escribir:** «Terapia de luz roja: qué es, qué dice la evidencia y cómo
usarla en casa».

| Artículo del racimo | Intención | Enlaza a |
|---|---|---|
| 660 nm y 850 nm: qué cambia entre luz roja e infrarroja | técnico, muy buscado | Panel + Mini |
| Cuánto tiempo y a qué distancia: dosis en J/cm² sin liarse | duda de uso | Panel Pro |
| Panel de cuerpo completo, lámpara con soporte o portátil: cuál te toca | comparativa de gama | las tres fichas |
| Luz roja para el dolor muscular después del entreno | síntoma + deporte | Mini + colección |
| Luz azul, sueño y melatonina: para qué sirven unas gafas con filtro | producto poco entendido | las tres gafas |
| Rutina de luz roja de 10 minutos, cuatro días por semana | protocolo accionable | Panel |
| Seguridad ocular y qué NO hacer con la luz roja | seguridad | pilar |

### Pilar 3 · Frío y crioterapia

**Pilar a escribir:** «Baños de hielo: guía práctica de temperatura, tiempo y
frecuencia».

| Artículo del racimo | Intención | Enlaza a |
|---|---|---|
| A cuántos grados y cuántos minutos según lo que busques | la duda número uno | Ice Bath + Recovery Pod |
| Frío después de pesas: lo que la evidencia dice de la hipertrofia | **matiz honesto**, gana autoridad | pilar |
| Contraste frío-calor: cómo se hace bien | protocolo | colección |
| Bañera portátil o instalación fija: qué compensa | comparativa | Ice Bath vs Recovery Pod |
| Montar el baño de hielo en una terraza: agua, hielo y limpieza | logística real | Ice Bath |
| Frío, estrés y sueño: qué esperar y qué no | bienestar | pilar |
| Protocolo de frío en días de competición | deportivo | Recovery Pod |

### Pilar 4 · Liberación muscular y percusión

**Pilar a escribir:** «Pistola de masaje: cómo usarla bien (y cuándo no usarla)».

| Artículo del racimo | Intención | Enlaza a |
|---|---|---|
| Pistola de masaje por zonas: cuádriceps, gemelo, glúteo, espalda | guía de uso larga | Pistola |
| ¿Antes o después de entrenar? | duda clásica | Pistola |
| Percusión o foam roller: para qué sirve cada uno | comparativa | colección |
| Cinco errores al usar una pistola de masaje | formato lista | Pistola |
| Cuánto tiempo por grupo muscular | duda concreta | Pistola |

### Transversales (los que traen tráfico nuevo)

| Artículo | Por qué |
|---|---|
| La pirámide de la recuperación: sueño, comida, carga y después los aparatos | posiciona la marca como honesta, enlaza a los cuatro pilares |
| Rutina de recuperación de 20 minutos para después de entrenar | muy compartible, enlaza a tres productos |
| Recuperación para corredores populares / pádel / crossfit / triatlón | cuatro artículos, cada uno por deporte |
| Agujetas: qué son y qué funciona de verdad | volumen alto, intención informativa |
| Recuperar fuera de casa: qué llevar a una competición | producto portátil |
| Equipar una clínica o un centro deportivo: qué comprar y en qué orden | **B2B**, capta el cliente que más gasta |
| Regalos para deportistas | estacional, publicar a primeros de noviembre |
| BPS Plus o BPS Pro: cuál te toca | comparativa de marca, la que más convierte |

**Total: 4 pilares + 26 artículos de racimo y transversales.** No hace falta
tenerlo todo: con los cuatro pilares y tres artículos por pilar ya hay una
estructura que Google entiende.

### Ritmo realista

| Mes | Qué publicar |
|---|---|
| 1 | Los 3 pilares que faltan (luz roja, frío, percusión) |
| 2 | 4 artículos: uno por pilar, empezando por «cuántas sesiones», «cuántos grados», «antes o después» y «660 vs 850 nm» |
| 3 | 4 artículos: las dos comparativas de producto propio + la pirámide + un deporte |
| 4 en adelante | 2-4 al mes, alternando racimo y transversal |

Mejor **dos artículos buenos al mes que ocho flojos**: Google mide si la gente se
queda, y ocho artículos de 500 palabras no se leen.

---

## 3. Cómo se escribe un artículo que posiciona

Plantilla fija. El artículo publicado ya la cumple casi entera.

1. **Título con la búsqueda dentro**, en lenguaje normal. `Presoterapia en casa:
   qué es, para qué sirve y cómo elegir` es correcto. Evita títulos de revista sin
   palabras clave.
2. **Respuesta en las primeras 60 palabras.** Es de donde Google saca el
   fragmento destacado. Si la pregunta es «cuántas sesiones», el primer párrafo
   dice el número.
3. **Índice** si el artículo pasa de 1.200 palabras (§5 explica cómo).
4. **Un `<h2>` por subintención**, con la pregunta tal como la escribe la gente.
   Los `<h3>` para los apartados de dentro. Nunca saltarse niveles ni dejar un
   encabezado vacío.
5. **Una tabla comparativa** siempre que haya «según tu caso»: es lo que más se
   cita y lo que mejor se lee.
6. **Bloque de preguntas frecuentes** de 4 a 6 preguntas al final. Además de
   servir al lector, es lo que alimenta el `FAQPage` de §5.
7. **De 3 a 6 enlaces internos**: dos a producto, uno a la colección, dos a otros
   artículos, y siempre uno al pilar. Con el texto del enlace descriptivo, nunca
   «aquí» ni «ver más».
8. **Cierre con una acción**: la ficha del producto que resuelve lo que acabas de
   explicar.
9. **Entre 1.200 y 2.500 palabras** para un racimo; el pilar, 2.500-3.500.
10. **Dos o tres imágenes propias** por artículo, no solo la de cabecera. El
    artículo actual tiene una sola en 2.770 palabras.

### Salud: esto es contenido sensible

Presoterapia, frío y luz roja tocan salud, y Google aplica ahí un estándar más
alto (lo que llaman E-E-A-T). Tres reglas que no son negociables:

- **Nada de promesas médicas.** «Puede ayudar a», «la evidencia disponible
  sugiere», nunca «cura», «elimina la celulitis» o «trata la trombosis».
- **Autoría real.** Firma con una persona y, mejor, con un fisioterapeuta
  colaborador y su número de colegiado. Ponlo en un bloque al final del artículo
  (§5). Hoy el artículo firma «BPS Performance».
- **Aviso al final:** «Este contenido es informativo y no sustituye el consejo de
  un profesional sanitario. Nuestros equipos son dispositivos de bienestar
  deportivo, no productos sanitarios.» Además de correcto, evita problemas con la
  normativa de publicidad de productos sanitarios.

Y un consejo estratégico: el artículo que más autoridad os va a dar es el que
**dice lo que NO hace** cada tecnología. «Frío después de pesas: lo que la
evidencia dice de la hipertrofia» es de los pocos temas donde una tienda puede
ser más honesta que la competencia, y eso se nota en enlaces y en confianza.

---

## 4. La configuración en Shopify, paso a paso

### 4.1. El blog

*Admin → Tienda online → Artículos del blog → Administrar blogs.*

| Campo | Valor |
|---|---|
| Título | `Recuperación y rendimiento` ✅ ya puesto |
| Handle | `rendimiento` ✅ ya puesto, con la redirección del anterior |
| Comentarios | **Deshabilitados**. Hoy están abiertos y solo traen spam y trabajo de moderación; si algún día interesan, «moderados» pero nunca «autopublicados» |
| Meta descripción del blog | 🔴 **Pendiente.** 150 caracteres diciendo de qué va el blog |

### 4.2. La plantilla del listado

*Personalizar → Blog.* La sección es **«Artículos de blog»**:

| Ajuste | Valor | Por qué |
|---|---|---|
| Diseño | **Cuadrícula** | De fábrica viene «Collage», que hace la primera entrada gigante |
| Imagen destacada | Activada | |
| Altura de imagen | **Mediana** | |
| Fecha | Activada | |
| Autor | Activado | Con firma de persona sí interesa (§3) |
| Relleno arriba / abajo | **`0`** / `80` | El `56` de arriba se lo queda la sección de la cabecera: ver justo debajo |

**Las pastillas de categoría**, que Dawn no trae, se añaden con una sección
**«Liquid personalizado»** encima de la lista. Tiene una ventaja importante: el
código vive en los ajustes del tema, no en un archivo, así que **una actualización
del tema no se lo lleva** (PARTE 2 §I).

#### Por qué el bloque tiene que llevar también el titular

Las pastillas van **debajo del título del blog**, no encima. Pero eso no se
arregla moviendo la sección, y conviene entender por qué antes de intentarlo:
Dawn mete el `<h1>` y la lista **dentro de la misma sección**:

```html
<div class="main-blog page-width …">
  <h1 class="title--primary">Recuperación y rendimiento</h1>
  <div class="blog-articles">…</div>
</div>
```

En el editor las secciones solo se pueden mover **enteras**, así que la de Liquid
personalizado únicamente puede quedar encima del titular o debajo de la lista. No
hay hueco entre los dos.

La solución, sin tocar ningún archivo del tema: **el bloque lleva el titular
dentro**, y el `<h1>` de Dawn se esconde desde la hoja. Deja la sección de Liquid
personalizado **encima** de «Artículos de blog» y pega esto:

```liquid
<div class="bps-blog-cabecera">
  <h1 class="bps-blog-titulo">{{ blog.title }}</h1>
  {%- if blog.all_tags.size > 0 -%}
    <nav class="bps-blog-categorias" aria-label="Categorías del blog">
      <a href="{{ blog.url }}"
         class="bps-blog-categoria{% unless current_tags %} bps-blog-categoria--activa{% endunless %}">Todo</a>
      {%- for tag in blog.all_tags -%}
        <a href="{{ blog.url }}/tagged/{{ tag | handle }}"
           class="bps-blog-categoria{% if current_tags contains tag %} bps-blog-categoria--activa{% endif %}">{{ tag }}</a>
      {%- endfor -%}
    </nav>
  {%- endif -%}
</div>
```

Y en los ajustes de **esa** sección: relleno arriba **`56`**, abajo **`0`**. Es el
`56` que le has quitado a «Artículos de blog» en la tabla de arriba; si no se
mueve, el titular queda pegado a la cabecera.

El titular sale del propio blog (`{{ blog.title }}`), así que sigue bastando con
cambiarlo en el admin. La hoja hace tres cosas por su cuenta (apartado 26):

- Esconde el `<h1>` de Dawn en cuanto detecta la cabecera propia.
- Le da al titular los 48px de los títulos de página.
- Da a las pastillas el estilo de los filtros del catálogo del prototipo: 36px de
  alto, borde de 1px, píldora, la activa en negro con letra blanca, y en móvil
  deslizables de lado a lado sin cortarse.

**Comprobado** sobre la página publicada, a 1440 y a 390px: titular en x=30 a
48px, pastillas debajo también en x=30, y la lista debajo. Funciona igual en los
dos montajes que puede hacer la sección de Liquid personalizado —con `page-width`
en su envoltorio o sin él—, así que no hay que averiguar cuál usa tu versión.

> **Sobre los dos `<h1>`:** el de Dawn se queda en el HTML pero oculto con
> `display: none`, así que ni se ve ni lo lee un lector de pantalla, y el visible
> es un `<h1>` de verdad con el mismo texto. Varios `<h1>` son válidos en HTML5 y
> Google lo dice explícitamente; no penaliza.
>
> **Si prefieres el HTML perfectamente limpio**, la alternativa es añadir el
> bloque de pastillas a `sections/main-blog.liquid` justo después del `<h1>`, sin
> el `<div class="bps-blog-cabecera">` ni el titular. Son diez líneas, el
> resultado es idéntico y no hay `<h1>` oculto — pero pasa a ser otro archivo del
> tema que rehacer en cada actualización (PARTE 2 §I). Con las pastillas en el
> bloque de ajustes no hay nada que rehacer.

### 4.3. La plantilla del artículo

*Personalizar → Artículo del blog.* La sección **«Artículo de blog»** tiene cuatro
bloques y conviene dejarlos así:

| Bloque | Ajuste |
|---|---|
| **Imagen destacada** | Altura **Mediana** |
| **Título** | Fecha **activada** · Autor **activado** |
| **Contenido** | — |
| **Compartir** | Se queda |

Y **debajo** de la sección del artículo, tres secciones más. Esto es lo que
convierte un artículo en una página que vende:

| # | Sección | Para qué |
|---|---|---|
| 1 | **Productos destacados** o **Colección destacada** | Los dos o tres equipos de los que habla el artículo, con su tarjeta y su precio |
| 2 | **Artículos de blog** | «Sigue leyendo»: tres artículos más. Es lo que mantiene a la gente en el sitio |
| 3 | **Liquid personalizado** | El bloque de autor y el aviso sanitario (§3), y los datos estructurados de §5 |

Para el bloque de autor y el aviso, en esa sección «Liquid personalizado»:

```liquid
<div class="bps-articulo-autor">
  <p class="bps-articulo-autor__nombre">{{ article.author }}</p>
  <p class="bps-articulo-autor__nota">
    Contenido informativo revisado por el equipo de BPS Performance. No sustituye
    el consejo de un profesional sanitario. Nuestros equipos son dispositivos de
    bienestar deportivo, no productos sanitarios.
  </p>
</div>
```

### 4.4. Los campos de cada artículo

Al crear el artículo, en el admin:

| Campo | Regla |
|---|---|
| Título | La búsqueda dentro, máximo 60-65 caracteres para que no se corte en Google. Ojo: **en la tarjeta del listado Dawn lo recorta alrededor de los 50** —el artículo actual sale como «Presoterapia en Casa: Qué Es, Para Qué Sirve y …»—, así que lo importante va delante |
| Contenido | La plantilla de §3 |
| **Resumen** («Extracto») | 150-160 caracteres. Es lo que sale en la tarjeta del listado; si se deja vacío, Dawn recorta el primer párrafo y queda a mitad de frase — es lo que pasa hoy |
| Imagen destacada | 1.600 × 900 px, JPG. **Con texto alternativo descriptivo**, no el título del artículo repetido |
| Etiquetas | Una principal y hasta dos del vocabulario de §1 |
| Autor | Persona, no la marca |
| **SEO: título de la página** | Puede repetir el título si cabe en 60 |
| **SEO: descripción** | 140-155 caracteres, con la palabra clave y una razón para hacer clic |
| **SEO: URL** | Corta y con la palabra clave: `presoterapia-cuantas-sesiones`, no `articulo-sobre-presoterapia-2026` |

---

## 5. Los remates de SEO técnico

El tema ya pone los datos estructurados de `Article` en cada artículo —
verificado en el HTML publicado — y el sitemap de blogs ya existe
(`/sitemap_blogs_1.xml`). Faltan dos cosas, y las dos se hacen con una sección
**«Liquid personalizado»** en la plantilla del artículo:

**a) Las preguntas frecuentes como datos estructurados.** Es lo que puede
conseguir que Google muestre las preguntas desplegables debajo del resultado.
Solo vale si esas preguntas están **visibles en el artículo**; inventarlas es
motivo de penalización.

#### Cómo se llaman exactamente el metacampo y sus campos

Aquí es donde nos equivocamos con la descripción corta de las tarjetas (PARTE 2
§H-3), así que lo dejo cerrado: **Shopify saca la clave del campo «Nombre»**, y la
clave es lo único que ve el Liquid. Si escribes «Preguntas frecuentes», la clave
sale con espacios convertidos, y si escribes la clave entera en el nombre, la
duplica. La forma de no fallar es poner de nombre exactamente la clave que quieres,
en minúsculas y sin espacios ni acentos.

**Paso 1 · El metaobjeto de una pregunta.** *Configuración → Metacampos y
metaobjetos → Metaobjetos → Añadir definición.*

| Campo del formulario | Qué escribir |
|---|---|
| Nombre | `Pregunta frecuente` |
| Campo 1 → Nombre | `pregunta` · tipo **Texto de una línea** |
| Campo 2 → Nombre | `respuesta` · tipo **Varias líneas de texto** |
| Acceso | Deja activado el acceso desde la **tienda online** (si no, el Liquid no lo ve y sale vacío) |

Las claves de esos dos campos tienen que quedar **`pregunta`** y **`respuesta`**,
tal cual. El panel te las muestra debajo del nombre: míralas antes de guardar.

**Paso 2 · El metacampo del artículo.** *Configuración → Metacampos y metaobjetos
→ **Artículos de blog** → Añadir definición.*

| Campo del formulario | Qué escribir |
|---|---|
| **Nombre** | `faq` — así, tres letras en minúscula. Es solo la etiqueta que verás en el artículo, y es lo que garantiza que la clave salga limpia |
| **Clave / espacio de nombres** | No lo escribas tú: se genera. Tiene que quedar **`custom.faq`**. Compruébalo en la pantalla antes de guardar |
| Tipo | **Referencia de metaobjeto** → `Pregunta frecuente` → y marca **lista** (varias entradas) |
| Descripción | «Las preguntas frecuentes que ya están escritas en el artículo, para los datos estructurados» |

Con eso, en cada artículo aparece un apartado `faq` donde vas añadiendo entradas,
cada una con su pregunta y su respuesta. **Copia y pega las que ya están escritas
en el cuerpo del artículo**: si no coinciden, Google lo considera contenido
engañoso.

Y este es el código de la sección «Liquid personalizado», ya con `.value` en cada
campo —un campo de metaobjeto no es una cadena, es un objeto, y sin `.value` el
`json` saldría vacío—:

```liquid
{%- assign bps_faq = article.metafields.custom.faq.value -%}
{%- if bps_faq != blank -%}
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {%- for entrada in bps_faq -%}
          {%- assign p = entrada.pregunta -%}
          {%- assign r = entrada.respuesta -%}
          {%- if p.value -%}{%- assign p = p.value -%}{%- endif -%}
          {%- if r.value -%}{%- assign r = r.value -%}{%- endif -%}
          {
            "@type": "Question",
            "name": {{ p | json }},
            "acceptedAnswer": { "@type": "Answer", "text": {{ r | json }} }
          }{% unless forloop.last %},{% endunless %}
        {%- endfor -%}
      ]
    }
  </script>
{%- endif -%}
```

Las dos líneas con `{% if p.value %}` son a propósito: así el mismo bloque funciona
tanto con el metaobjeto del paso 1 como si algún día prefieres un metacampo de
tipo **JSON** con esta forma, que es la alternativa si no quieres montar
metaobjetos:

```json
[
  { "pregunta": "¿La presoterapia duele?", "respuesta": "No…" },
  { "pregunta": "¿Cuántas sesiones?", "respuesta": "Entre…" }
]
```

Con JSON son dos pasos menos, pero hay que escribir las comillas y las comas a
mano en cada artículo. Con el metaobjeto son dos cajas de texto.

**Si sale vacío**, el orden de comprobación es este —los tres fallos que hemos
tenido ya—: que la clave sea exactamente `custom.faq`, que las claves de los
campos sean `pregunta` y `respuesta`, y que el metaobjeto tenga permitido el
acceso desde la tienda online. Para verlo de un tirón, pega esto un momento en la
misma sección:

```liquid
CLAVE[{{ article.metafields.custom.faq }}]
ENTRADAS[{{ article.metafields.custom.faq.value.size }}]
PRIMERA[{{ article.metafields.custom.faq.value[0].pregunta }}]
TODAS[{{ article.metafields.custom | json }}]
```

**b) La miga de pan.** Ayuda a que Google entienda la jerarquía y sale en el
resultado de búsqueda:

```liquid
<nav class="bps-miga" aria-label="Ruta de navegación">
  <a href="{{ routes.root_url }}">Inicio</a> <span aria-hidden="true">/</span>
  <a href="{{ blog.url }}">{{ blog.title }}</a> <span aria-hidden="true">/</span>
  <span>{{ article.title }}</span>
</nav>
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": {{ shop.url | json }} },
      { "@type": "ListItem", "position": 2, "name": {{ blog.title | json }}, "item": {{ shop.url | append: blog.url | json }} },
      { "@type": "ListItem", "position": 3, "name": {{ article.title | json }} }
    ]
  }
</script>
```

**Y lo que no hace falta tocar:** el sitemap se actualiza solo, el `canonical` ya
sale bien en las tres páginas comprobadas, y las etiquetas Open Graph y de Twitter
ya están.

### El índice del artículo ✅ *(ya hecho)*

Shopify no lo genera, así que lo construye `bps-hyperice.js` —apartado 4 del
archivo—. **No hay que tocar nada en el editor ni en los artículos**: basta con
volver a subir el `.js`. Funciona en todos los artículos, presentes y futuros.

Qué hace, y las decisiones que lleva dentro:

| | |
|---|---|
| Recorre | Los `<h2>` del cuerpo del artículo, y les pone un `id` derivado del texto sin acentos (`#que-es-la-presoterapia`) |
| Solo `<h2>` | El artículo de presoterapia tiene 10 `<h2>` y **21 `<h3>`**: con los dos niveles el índice tendría 31 líneas, más largo que el propio artículo en pantalla |
| Mínimo tres | Con menos, no se pinta: un índice de dos líneas no ayuda a nadie |
| Se salta los vacíos | El artículo publicado tiene un `<h2>` vacío (§7) |
| Respeta los `id` que ya existan | Si alguna vez pones anclas a mano, los enlaces compartidos siguen funcionando |
| Marca por dónde vas | El apartado en pantalla se resalta en negro mientras lees, y lleva `aria-current` para los lectores de pantalla |
| Desplazamiento suave | Salvo que el sistema tenga desactivadas las animaciones, que se respeta |

**Dónde sale:** a partir de 1100px, en una columna propia de 260px pegada al
margen derecho, fija mientras se lee. Por debajo de ese ancho pasa a ser una caja
con borde encima del texto. Medido: en el artículo publicado salen **9 entradas**
—las diez menos la vacía— y a 1440px la columna del índice va de x=1150 a 1410,
alineada con el margen derecho de la página.

Si algún artículo tiene un titular que no quieres en el índice, ponle `<h3>` en
vez de `<h2>` y no aparecerá.

---

## 6. Los estilos: qué se ha arreglado ya

El prototipo solo trae la portada del blog, así que la página de artículo no tenía
referencia. Medido en el artículo publicado y corregido en el apartado 25 de la
hoja:

| | Antes | Ahora |
|---|---|---|
| Titular del artículo | **65px** (la clase del titular de portada) | 48px, escala editorial |
| Cuerpo del texto | 16px con interlineado 22,4 | **18px con 28,8** (1,6), la medida de lectura larga |
| `<h2>` del cuerpo | **48px**, igual que un titular de sección | 32px |
| `<h3>` del cuerpo | 40px | 20px |
| Tablas | Sin líneas ni aire | Filas con línea fina, cabecera en hueso |
| Listas, enlaces, imágenes | Sin tratamiento | Sangrado, subrayado con separación, radio de 4px |
| Encabezados vacíos | Dejaban un hueco (el artículo tiene uno) | No ocupan |
| Tarjetas del listado | Título a **48px**, fecha con clase `h5` | Título 24px, fecha 12px en versalitas grises, resumen gris |
| Rejilla del listado | Hueco de 20px | 56/48, como el resto de rejillas grandes |

Y el apartado 26 añade las pastillas de categoría del §4.2.

### Segunda vuelta: el ancho y la alineación (apartado 27)

Con el artículo ya publicado se vio el problema de fondo: **la página tenía cinco
anchos distintos y ninguno era el del sitio**. Medido a 1440px:

| Elemento | Estaba | Ahora |
|---|---|---|
| Miga de pan | x=357, 726 de ancho: **centrada** | x=30, alineada con todo |
| Foto de cabecera | x=70, 1300 (Dawn la limita a 130rem, 40px por dentro del marco del sitio) | **x=30, 1380**: el ancho de página |
| Titular, texto, compartir | x=357, 726 **centrado** | x=30, **740 alineado a la izquierda** |
| Bloque de autor | x=357, 726 centrado | x=30 |
| «Regresar al blog» | **centrado** sobre los 1440 de la ventana | a la izquierda, con el texto |
| Índice | no existía | columna de 260 pegada al margen derecho, fija |

El texto se queda en **740px** —unos 82 caracteres por línea a 18px, que es la
medida de lectura cómoda— pero **alineado a la izquierda**, no centrado: así el
artículo empieza en la misma línea vertical que la cabecera, el pie y el resto de
las páginas. Y el hueco de la derecha ya no está vacío: lo ocupa el índice.

Cuatro remates más de la misma vuelta:

| | Estaba | Ahora |
|---|---|---|
| Fecha y autor debajo del titular | La fecha en 14px normales y **el autor en versalitas espaciadas**: Dawn los saca en dos `<span>` con la misma clase y la regla anterior solo cogía el primero | Los dos en 14px grises |
| Relleno de las celdas de tabla | 12px: Dawn lo sujeta con `.rte table td`, que pesa más que la regla que le habíamos puesto | 12/14, como estaba previsto |
| Campo de «copiar enlace» de Compartir | **Sin borde visible**, el mismo fallo que tuvo el formulario de contacto | Borde de 1px en el gris de la paleta |
| Nombre del autor | En el negro al 75 % de Dawn | Negro pleno |

---

## 7. Tres arreglos en el artículo que ya está publicado

1. **Un `<h2>` vacío** en el cuerpo. La hoja ya lo esconde, pero mejor borrarlo
   desde el editor.
2. **Clases de otro sistema pegadas con el texto**: `font-claude-response-body`,
   `leading-[1.7]`, `px-2`, `mb-6`, `text-left`. Vienen de haber copiado desde un
   editor externo. No hacen daño porque no existen en el tema, pero conviene
   limpiarlas al pasar el artículo a limpio.
3. **Falta el resumen** («Extracto») y faltan enlaces a la **colección** de
   presoterapia y a otros artículos. Los seis enlaces a producto que tiene están
   bien puestos.

Y dos añadidos que lo dejarían redondo: dos imágenes más en el cuerpo y el bloque
de autor con firma de persona.

---

## Orden para ponerse

1. ~~Borrar el blog vacío y decidir título y handle del que se queda~~ ✅ hecho.
   Queda la meta descripción del blog (§1).
2. Configurar el listado y la plantilla de artículo, con las tres secciones de
   debajo (§4.2 y §4.3).
3. Subir `bps-hyperice.css` (apartados 25, 26 y 27) **y `bps-hyperice.js`**
   (apartado 4: el índice del artículo). Los dos archivos, no solo la hoja.
4. Pegar las dos secciones de «Liquid personalizado»: cabecera con titular y
   pastillas —encima de la lista, con relleno `56`/`0`— y bloque de autor
   (§4.2 y §4.3).
5. Arreglar el artículo que hay y ponerle etiqueta, resumen y SEO (§7 y §4.4).
6. Escribir los tres pilares que faltan (§2). Es el trabajo de verdad.
7. Cuando haya seis u ocho artículos, la miga de pan y el `FAQPage` (§5). El
   metacampo se llama **`faq`** y sus dos campos **`pregunta`** y **`respuesta`**:
   la clave tiene que quedar en `custom.faq`, y eso se comprueba en la pantalla
   antes de guardar.
