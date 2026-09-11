# Plan de artículos del blog · versión 2

**Revisión: 8 de septiembre de 2026.** Reescrito entero **a partir de los cuatro
artículos ya publicados**, medidos uno a uno. La versión anterior proponía tres
artículos desde cero; dos de ellos ya están escritos, así que ese plan ya no
sirve.

> El archivo sigue llamándose `ARTICULOS-1-3.md` para no romper los enlaces de
> [README.md](../README.md), [SEO.md](SEO.md) y [GUIA-BLOG.md](GUIA-BLOG.md),
> pero el plan ya no es de tres artículos: son **seis nuevos y cuatro
> reparaciones**.

Documentos hermanos: [GUIA-BLOG.md](GUIA-BLOG.md) (arquitectura del blog: un solo
blog, categorías por etiquetas) y [SEO.md](SEO.md) (todo lo demás del sitio).

---

## 1. Lo que hay publicado hoy, medido

Cuatro artículos, uno por etiqueta. Estos son los números reales, contando **solo
el cuerpo del artículo** —sin cabecera, sin pie, sin la rejilla de productos del
final—, que es lo que Google evalúa como contenido:

| Artículo | Etiqueta | Palabras | Enlaces salientes | Tabla | Imágenes en el texto | `FAQPage` |
|---|---|---|---|---|---|---|
| `presoterapia-en-casa` | Presoterapia | **1.316** | 6 (3 fichas, cada una dos veces) | 1 | 0 | Sí, 7 preguntas reales |
| `como-usar-pistola-de-masaje` | Liberación muscular | **942** | 1 (una colección) | 1 | 0 | **No** |
| `banera-crioterapia` | Frío | **670** | 2 (dos fichas) | 0 | 0 | Sí, pero mal (ver §2) |
| `led-boots-recuperacion` | Luz roja | **615** | **0** | 1 | 0 | Sí, pero mal (ver §2) |

Y lo que está bien resuelto y no hay que volver a mirar: los cuatro tienen
`Article` y `BreadcrumbList` en el marcado, título de SEO corto y sin cortes,
descripción de 148-159 caracteres, imagen destacada con texto alternativo,
canónico correcto y **una etiqueta cada uno**, así que las cuatro páginas de
etiqueta funcionan.

### Corrección a lo que os dije antes

En la revisión de septiembre puse que los artículos tenían 1.505, 1.567, 2.270 y
2.843 palabras. **Estaba contando toda la página** —menú, pie, fichas de la
rejilla, avisos—, no el artículo. Los números buenos son los de la tabla de
arriba: **entre 615 y 1.316**. Cambia el diagnóstico, y por eso este documento
empieza por reparar y no por escribir.

---

## 2. Los tres agujeros

### Agujero 1 · La colección con más catálogo no tiene pilar

`terapia-luz-roja` tiene **7 productos de 90 a 2.500 €** —el catálogo más grande
y el ticket más alto de la tienda— y su único artículo, `led-boots-recuperacion`,
va de **un producto concreto**, no de la tecnología. Nadie busca «LED boots»;
se busca «terapia de luz roja», «para qué sirve la luz roja» o «panel de luz
roja». Hoy, para esas búsquedas, el sitio no tiene nada.

Es el hueco más caro de los tres.

### Agujero 2 · Tres productos sin una línea escrita

Las **BPS Recovery Glasses** —`DAILY LIGHT`, `NIGHT FLOW` y `NIGHT MAX`, 90 €
cada una— son **la cuarta parte del catálogo** y no hay ni un artículo, ni un
párrafo, ni un enlace que hable de ellas. Son además el producto de entrada más
barato: el que hace que alguien compre por primera vez y vuelva.

### Agujero 3 · Los artículos están sueltos del catálogo

Esto es lo que más frena, y no cuesta dinero arreglarlo:

- **Ninguna ficha de producto enlaza a ningún artículo.** Comprobadas las 12.
- **Ninguna colección enlaza a ningún artículo**, aunque las cuatro tienen entre
  422 y 482 palabras de texto propio donde cabría de sobra.
- **`led-boots-recuperacion` no enlaza ni al producto del que habla**
  (`/products/botas-presoterapia-luz-roja`). Cero enlaces en todo el artículo.
- **Ningún artículo enlaza a otro artículo.** Los cuatro son islas.
- **Ningún artículo tiene un solo enlace externo.** En contenido de salud, eso
  es justo lo que Google mira para decidir si te cree.

Un artículo sin enlaces entrantes tarda meses más en posicionar, y una ficha sin
enlace al artículo pierde el argumento de venta más largo que tenéis escrito.

---

## 3. Primero reparar, después escribir

Cuatro tardes de trabajo que valen más que dos artículos nuevos, porque estas
páginas **ya están indexadas**: cualquier mejora se nota en semanas, no en meses.

### 3.1. Los enlaces que faltan del catálogo al blog

En la **descripción larga** de cada ficha, un párrafo al final con un enlace.
`Productos` → el producto → campo de descripción:

| Fichas | Enlace a poner |
|---|---|
| `presoterapia-bps-plus`, `presoterapia-bps-pro-recuperacion-muscular-profesional`, `botas-presoterapia-luz-roja` | `/blogs/rendimiento/presoterapia-en-casa` |
| `banera-crioterapia-portatil-bps-recovery-pod`, `banera-crioterapia-bps-ice-bath` | `/blogs/rendimiento/banera-crioterapia` |
| `pistola-de-masaje` | `/blogs/rendimiento/como-usar-pistola-de-masaje` |
| `botas-presoterapia-luz-roja` (segundo enlace) | `/blogs/rendimiento/led-boots-recuperacion` |
| `panel-terapia-luz-roja-cuerpo-completo`, `lampara-profesional-luz-roja-soporte`, `dispositivo-terapia-luz-roja-portatil` | el pilar de luz roja, **en cuanto exista** (artículo 1) |

Y en el **texto enriquecido de cada colección**, una frase con enlace al artículo
de esa tecnología. `Personalizar` → plantilla de la colección → la sección de
texto enriquecido. Cuatro frases, veinte minutos.

Texto del enlace: **descriptivo, no «leer más»**. `guía completa de presoterapia
en casa` sirve; `aquí` no sirve para nada.

### 3.2. Los cuatro artículos, uno a uno

| Artículo | Qué hacer |
|---|---|
| `led-boots-recuperacion` | **El más urgente.** 615 palabras y cero enlaces. Subir a 1.200-1.400 añadiendo un apartado de protocolo de uso (minutos, frecuencia, en qué momento del día) y otro de mantenimiento. Meter 4 enlaces: la ficha `botas-presoterapia-luz-roja`, la colección `terapia-luz-roja`, `presoterapia-en-casa` y el pilar de luz roja cuando exista. Y 2 externos |
| `banera-crioterapia` | 670 palabras para un producto de 1.850-1.999 €. Subir a 1.400-1.600. Le falta **la tabla de grados y minutos** y el apartado de montaje en casa (agua, hielo, limpieza). Enlazar a la colección `recuperacion-fria` y al artículo 2 cuando exista. Y avisar de que el `Ice Bath` está agotado, con enlace al `Recovery Pod` |
| `como-usar-pistola-de-masaje` | 942 palabras y bien enfocado. Le falta **el enlace a `/products/pistola-de-masaje`** —enlaza a la colección pero no al producto—, un enlace a otro artículo y **el marcado `FAQPage`**, que es el único de los cuatro que no lo tiene |
| `presoterapia-en-casa` | El mejor de los cuatro. Solo le faltan **enlaces a los otros tres artículos** y 2 enlaces externos. Los 6 que tiene apuntan a las mismas 3 fichas repetidas |

### 3.3. El `FAQPage` de dos artículos está mal montado

Comprobado en el marcado publicado: el bloque de preguntas de
`banera-crioterapia` contiene esto como «preguntas»:

- *«Beneficios de la crioterapia para la recuperación deportiva»*
- *«¿Cómo hacer una sesión de crioterapia de forma segura?»*

Y en `led-boots-recuperacion`:

- *«Principales Beneficios de las LED Boots para Atletas»*
- *«Conclusión: ¿Vale la pena invertir en unas LED Boots?»*

Dos de esas cuatro **no son preguntas**. El marcado se está generando **copiando
los títulos `h2` del artículo**, así que si el `h2` no es una pregunta, sale una
pregunta que no lo es. Google lo valida como inválido y, si algún día vuelve a
enseñar preguntas en los resultados, esas no entran.

De aquí sale la regla de redacción más útil de todo el documento, y está en §5:
**escribid los `h2` en forma de pregunta**. Sale gratis y arregla el marcado sin
tocar código.

Comparad con `presoterapia-en-casa`, que sí está bien: sus siete preguntas son
las siete preguntas de verdad («¿La presoterapia duele?», «¿Cuántas sesiones son
necesarias?»...), porque ahí los encabezados se escribieron como preguntas.

---

## 4. Los seis artículos que hay que publicar

Por orden. Los cuatro primeros llevan la ficha completa; los dos últimos van
resumidos porque el tema se elegirá definitivamente **con los datos de Search
Console** que habrá para entonces.

| # | Artículo | Etiqueta | Qué agujero tapa | Palabras |
|---|---|---|---|---|
| 1 | **Terapia de luz roja: guía completa** | Luz roja | El pilar que falta. 7 productos, hasta 2.500 € | 2.000-2.400 |
| 2 | **Baño de hielo: minutos y grados** | Frío | La búsqueda concreta que hoy no responde nadie en el sitio | 1.600-2.000 |
| 3 | **Qué equipo de luz roja elegir** | Luz roja | Convierte: separa panel, lámpara y portátil | 1.400-1.800 |
| 4 | **Gafas de filtro de luz azul** | Luz roja | Tres productos sin una línea escrita | 1.400-1.700 |
| 5 | **Presoterapia: quién no debe usarla** | Presoterapia | Búsqueda de mucho volumen y la que más confianza da | 1.200-1.500 |
| 6 | **¿Frío o calor?** | Frío | Entrada de tráfico general a las cuatro colecciones | 1.400-1.800 |

> **Sobre las palabras clave.** Salen del catálogo, de la estructura de las
> colecciones y de cómo se busca en español, **no de datos de volumen**: no tengo
> acceso a ellos. Antes de escribir cada artículo, pasad sus palabras por el
> **Planificador de Palabras Clave de Google Ads** (gratis con una cuenta) y, si
> alguna secundaria tiene mucho más volumen que la principal, cambiad el título.
> Veinte minutos que evitan escribir 2.000 palabras para una búsqueda que no
> existe.

---

## Artículo 1 · Terapia de luz roja *(el pilar que falta)*

### Ficha para el admin

| Campo | Valor |
|---|---|
| **Palabra clave principal** | `terapia de luz roja` |
| **Secundarias** | `para qué sirve la terapia de luz roja`, `fotobiomodulación`, `660 nm y 850 nm`, `cuánto tiempo luz roja`, `luz roja contraindicaciones` |
| **Intención** | Informativa con compra detrás: quien busca esto está decidiendo si comprar |
| **Título del artículo (45)** | `Terapia de luz roja: guía para usarla en casa` |
| **«Título de la página» (41)** | `Terapia de luz roja: qué es y cómo usarla` |
| **«Identificador de URL»** | `terapia-luz-roja-guia` |
| **«Metadescripción» (151)** | `Qué es la terapia de luz roja, para qué hay evidencia, en qué se diferencian 660 y 850 nm y cómo montar una rutina en casa sin pasarte de dosis.` |
| **Extracto (149)** | `Qué es la fotobiomodulación, para qué funciona y para qué no, la diferencia real entre luz roja e infrarroja y cuánto tiempo usarla al día.` |
| **Etiqueta** | `Luz roja` |
| **Imagen destacada** | 1.600 × 900. Alt: `Panel de luz roja BPS Pro-Panel iluminando la espalda de una deportista en una sala en penumbra` |

### Las primeras 60 palabras

Es lo que Google puede enseñar como fragmento destacado, así que la búsqueda se
responde aquí, no en el apartado tercero:

> La terapia de luz roja, o fotobiomodulación, consiste en exponer la piel a luz
> roja (unos 660 nm) o infrarroja cercana (unos 850 nm) para estimular la
> actividad de las mitocondrias. La evidencia es más sólida en dolor muscular y
> recuperación después del ejercicio que en el resto de usos que se le atribuyen.
> Una sesión típica en casa son 10 minutos, a 15-30 cm, cuatro o cinco días por
> semana.

Definición, matiz honesto y dato accionable en un párrafo.

### Esquema

Los `h2` van **en forma de pregunta** (§5.2), y las respuestas empiezan justo
debajo, en el primer párrafo:

| Encabezado | Qué dice | Palabras |
|---|---|---|
| *(entradilla)* | Las 60 palabras y qué vas a encontrar | 120 |
| `h2` **¿Qué es la terapia de luz roja?** | Fotobiomodulación en lenguaje normal: luz que llega al tejido y actúa sobre el citocromo c oxidasa. Sin metáforas de «energía» | 300 |
| `h3` Por qué se llama fotobiomodulación | El nombre técnico y por qué se dejó de decir «láser de baja potencia» | 120 |
| `h2` **¿Qué diferencia hay entre 660 y 850 nm?** | La diferencia real es la penetración. Aquí va **la tabla** | 350 |
| `h2` **¿Para qué funciona de verdad la luz roja?** | El apartado más importante. Tres bloques: *evidencia razonable* (dolor muscular tardío, recuperación de fuerza), *preliminar* (piel, sueño), *insuficiente* (todo lo demás que se vende por ahí). Con los enlaces externos | 500 |
| `h2` **¿Cuánto tiempo hay que usarla y a qué distancia?** | Distancia, minutos, frecuencia. Explicar J/cm² una vez y traducirlo a minutos, que es lo que la gente usa | 400 |
| `h3` Una rutina de 10 minutos, cuatro días por semana | Protocolo por zonas | 200 |
| `h3` ¿Antes o después de entrenar? | Duda muy buscada | 150 |
| `h2` **¿Tiene contraindicaciones?** | Ojos, embarazo, medicación fotosensibilizante, lunares y manchas. Y que **no es un producto sanitario** | 300 |
| `h2` **¿Panel, lámpara con soporte o portátil?** | Las tres gamas propias con el criterio de decisión, no la ficha técnica. Y remite al artículo 3 | 300 |
| `h2` **Preguntas frecuentes** | Las cinco de abajo | 300 |
| *(cierre + aviso)* | Una acción concreta y el descargo de [GUIA-BLOG](GUIA-BLOG.md) §3 | 120 |

### La tabla

| | Luz roja · 660 nm | Infrarrojo cercano · 850 nm |
|---|---|---|
| Hasta dónde llega | Piel y tejido justo por debajo | Músculo, tendón y articulación |
| Se ve | Sí, rojo intenso | Casi nada, un brillo tenue |
| Para qué se usa más | Piel, cicatrización superficial | Dolor muscular, articulaciones, recuperación |
| En qué equipo BPS | Pro-Panel, Red Light Mini, Clinic-Stand | Pro-Panel, Red Light Mini, Clinic-Stand |

### Preguntas frecuentes

1. **¿Cuánto tiempo hay que usar la luz roja al día?**
   Entre 10 y 20 minutos por zona, según la potencia del equipo y la distancia.
   Más tiempo no da más resultado: por encima de cierta dosis el efecto se
   estanca.
2. **¿Se puede usar todos los días?**
   Sí, pero cuatro o cinco días por semana es suficiente y es más fácil de
   mantener. La constancia importa más que la frecuencia.
3. **¿Hay que ponerse gafas?**
   Con luz roja visible no es imprescindible si no se mira al panel. Con
   infrarrojo, que no se ve, conviene no mirar la fuente. Nunca fijamente.
4. **¿En cuánto tiempo se nota algo?**
   En dolor muscular después de entrenar, a veces en la misma sesión o al día
   siguiente. En piel se habla de semanas. Quien prometa resultados inmediatos en
   todo, desconfiad.
5. **¿Sirve para adelgazar o para la celulitis?**
   No hay evidencia suficiente para afirmarlo y no lo vendemos así. Es una
   herramienta de recuperación, no un tratamiento médico ni estético garantizado.

### Enlaces internos (6)

| Texto del enlace | A dónde |
|---|---|
| panel de luz roja de cuerpo completo | `/products/panel-terapia-luz-roja-cuerpo-completo` |
| dispositivo portátil de 660 y 850 nm | `/products/dispositivo-terapia-luz-roja-portatil` |
| lámpara con soporte para clínicas | `/products/lampara-profesional-luz-roja-soporte` |
| toda la gama de terapia de luz roja | `/collections/terapia-luz-roja` |
| las botas de presoterapia con luz roja | `/blogs/rendimiento/led-boots-recuperacion` |
| la guía de presoterapia en casa | `/blogs/rendimiento/presoterapia-en-casa` |

### Enlaces externos (3, normales, sin `nofollow`)

- La revisión de **Michael R. Hamblin sobre los mecanismos antiinflamatorios de
  la fotobiomodulación** (2017), que es la referencia que cita todo el campo.
- Una búsqueda en **PubMed** de *photobiomodulation muscle recovery* como fuente
  del apartado de evidencia.
- La **AEMPS** para respaldar que los equipos son productos de bienestar y no
  productos sanitarios.

> **Verificad cada cita antes de publicar.** Si no encontráis el estudio con su
> DOI, no se cita. Una referencia inventada en contenido de salud hace más daño
> que no poner ninguna.

### Imágenes (3 dentro del texto)

| Dónde | Alt |
|---|---|
| Cabecera | `Panel de luz roja BPS Pro-Panel iluminando la espalda de una deportista en una sala en penumbra` |
| En «660 y 850 nm» | `Esquema de la profundidad que alcanzan la luz roja de 660 nm y el infrarrojo de 850 nm en piel y músculo` |
| En «cuánto tiempo» | `Distancia de 20 cm entre el panel de luz roja BPS y la pierna durante una sesión` |

---

## Artículo 2 · Baño de hielo: minutos y grados

Cuelga de `banera-crioterapia`, que ya es el pilar de frío. **No escribáis otro
pilar de frío**: este responde la búsqueda concreta y enlaza hacia arriba.

### Ficha para el admin

| Campo | Valor |
|---|---|
| **Palabra clave principal** | `baño de hielo cuánto tiempo` |
| **Secundarias** | `temperatura baño de hielo`, `cada cuánto baño de hielo`, `inmersión en agua fría`, `baño de hielo antes o después de entrenar` |
| **Intención** | Informativa. La duda es siempre **grados y minutos** |
| **Título del artículo (45)** | `Baño de hielo: cuántos minutos y a qué grados` |
| **«Título de la página» (45)** | `Baño de hielo: cuántos minutos y a qué grados` |
| **«Identificador de URL»** | `bano-de-hielo-tiempo-temperatura` |
| **«Metadescripción» (150)** | `A cuántos grados, cuántos minutos y cuántas veces por semana, según busques recuperar, dormir mejor o ganar músculo. Y cuándo el frío te resta.` |
| **Extracto (152)** | `Los grados y los minutos que dice la evidencia, según lo que busques. Incluye el caso en el que el frío después de pesas te juega en contra.` |
| **Etiqueta** | `Frío` |
| **Imagen destacada** | Alt: `Deportista sumergido hasta el pecho en la bañera de hielo portátil BPS Recovery Pod en una terraza al amanecer` |

### Las primeras 60 palabras

> Para recuperar después de entrenar, la referencia más repetida es **10-15
> minutos entre 10 y 15 °C**, dos o tres veces por semana. No hace falta bajar a
> 5 °C: por debajo de 10 °C se aguanta menos y no se ha demostrado que funcione
> mejor. Y hay un caso en el que conviene no hacerlo: justo después de una sesión
> de fuerza, si el objetivo es ganar músculo.

### Esquema

| Encabezado | Qué dice | Palabras |
|---|---|---|
| *(entradilla)* | Las 60 palabras | 110 |
| `h2` **¿Cuántos minutos y a qué temperatura?** | Resuelve la búsqueda. Aquí va **la tabla por objetivo** | 400 |
| `h3` Por qué no hace falta bajar de 10 °C | Aguantar menos no compensa | 180 |
| `h2` **¿Qué le pasa al cuerpo en el agua fría?** | Vasoconstricción, percepción del dolor, respuesta de estrés agudo. Sin misticismo | 300 |
| `h2` **¿Para qué funciona y para qué no?** | Dolor percibido y sensación de recuperación: razonable. Rendimiento del día siguiente: depende del deporte. Grasa, inmunidad, longevidad: no | 400 |
| `h2` **¿El frío después de pesas resta músculo?** | **El apartado que hace que el artículo se comparta.** Si el objetivo es hipertrofia, el frío inmediato tras la fuerza puede reducir la adaptación. Qué hacer: separarlo unas horas o reservarlo para competición | 350 |
| `h2` **¿Cómo se monta en casa?** | Agua, kilos de hielo, cada cuánto se cambia, cómo se limpia, dónde ponerlo. Es lo que nadie cuenta | 350 |
| `h2` **¿Quién no debería meterse?** | Problemas cardiovasculares, hipertensión no controlada, embarazo, nunca solo la primera vez, no aguantar la respiración | 250 |
| `h2` **Preguntas frecuentes** | Las de abajo | 280 |
| *(cierre + aviso)* | Acción y descargo | 110 |

### La tabla

| Lo que buscas | Temperatura | Tiempo | Cuántas veces |
|---|---|---|---|
| Recuperar después de entrenar | 10-15 °C | 10-15 min | 2-3 por semana |
| Bajar la sensación de agujetas | 11-15 °C | 11-15 min | El mismo día del esfuerzo |
| Empezar desde cero | 15-18 °C | 3-5 min | 1-2 por semana, subiendo |
| Ganar masa muscular | **Separarlo de la sesión de fuerza** | — | — |

### Preguntas frecuentes

1. **¿Cuánto tiempo hay que estar en un baño de hielo?**
   Entre 10 y 15 minutos a 10-15 °C para recuperar. Empezando, 3-5 minutos a
   15-18 °C ya sirve: el objetivo es salir tranquilo, no aguantar.
2. **¿A qué temperatura debe estar el agua?**
   Entre 10 y 15 °C para casi todo. Bajar de 10 °C reduce el tiempo que se
   aguanta sin que se haya demostrado mejor resultado.
3. **¿Antes o después de entrenar?**
   Después, con una excepción: si el entreno era de fuerza y buscas ganar
   músculo, deja pasar unas horas o resérvalo para otro día.
4. **¿Se puede hacer todos los días?**
   Se puede, pero dos o tres veces por semana cubre lo que se busca. Diario tiene
   sentido en periodos de mucha carga o competición.
5. **¿Quién no debería meterse?**
   Quien tenga problemas cardiovasculares o hipertensión no controlada, esté
   embarazada o tome medicación que afecte a la circulación, sin consultarlo
   antes. Y nunca la primera vez estando solo en casa.

### Enlaces internos (5)

| Texto del enlace | A dónde |
|---|---|
| la guía completa de bañeras de crioterapia | `/blogs/rendimiento/banera-crioterapia` |
| bañera de hielo portátil BPS Recovery Pod | `/products/banera-crioterapia-portatil-bps-recovery-pod` |
| toda la gama de recuperación en frío | `/collections/recuperacion-fria` |
| la terapia de luz roja, que actúa al contrario | `/blogs/rendimiento/terapia-luz-roja-guia` |
| cómo usar la pistola de masaje | `/blogs/rendimiento/como-usar-pistola-de-masaje` |

Al **`BPS Ice Bath`** se puede enlazar, pero **diciendo que está agotado** y con
enlace al `Recovery Pod` al lado. Enviar tráfico de Google a una ficha agotada
sin avisar sube la tasa de rebote, y eso sí se mide.

### Enlaces externos (3)

- **Roberts LA y colaboradores, *Journal of Physiology*, 2015**, sobre cómo la
  inmersión en agua fría después del entreno de fuerza atenúa la señalización
  anabólica. Es el estudio que sostiene el apartado clave.
- La **revisión Cochrane sobre inmersión en agua fría y dolor muscular**.
- **PubMed** como fuente general.

### Imágenes (3)

| Dónde | Alt |
|---|---|
| Cabecera | `Deportista sumergido hasta el pecho en la bañera de hielo portátil BPS Recovery Pod en una terraza al amanecer` |
| En «minutos y grados» | `Termómetro marcando 12 grados en el agua de una bañera de hielo` |
| En «cómo se monta» | `Bañera de hielo portátil BPS montada en una terraza junto a las bolsas de hielo` |

---

## Artículo 3 · Qué equipo de luz roja elegir

El artículo que **convierte**: quien lo lee ya está decidido a comprar y solo
duda entre tres precios (120, 999 y 2.500 €). Se publica **después** del pilar,
porque cuelga de él.

### Ficha para el admin

| Campo | Valor |
|---|---|
| **Palabra clave principal** | `panel de luz roja` |
| **Secundarias** | `qué panel de luz roja comprar`, `660 nm o 850 nm`, `luz roja portátil`, `irradiancia luz roja`, `luz roja para clínica` |
| **Intención** | Comercial. Comparativa |
| **Título del artículo (46)** | `Panel, lámpara o portátil: qué luz roja elegir` |
| **«Título de la página» (44)** | `Qué panel de luz roja elegir: guía de compra` |
| **«Identificador de URL»** | `elegir-equipo-luz-roja` |
| **«Metadescripción» (147)** | `Panel de cuerpo completo, lámpara con soporte o dispositivo portátil: qué mirar antes de comprar, qué es la irradiancia y para quién es cada uno.` |
| **Extracto (146)** | `Cuatro criterios para decidir entre un panel, una lámpara con soporte y un portátil, y qué significan de verdad los vatios de los anuncios.` |
| **Etiqueta** | `Luz roja` |

### Esquema

| Encabezado | Qué dice |
|---|---|
| *(entradilla)* | Las tres opciones en dos frases y a quién le toca cada una |
| `h2` **¿Qué hay que mirar antes de comprar?** | Los cuatro criterios: superficie que cubre, irradiancia a la distancia de uso, longitudes de onda y montaje. En ese orden |
| `h3` Por qué los vatios del anuncio no dicen nada | El apartado que da autoridad: 1.500 W de consumo no son 1.500 W en la piel. Lo que importa es mW/cm² **a la distancia real** |
| `h2` **¿Panel de cuerpo completo para quién?** | Casa con sitio, sesiones para todo el cuerpo, 999 € |
| `h2` **¿Lámpara con soporte para quién?** | Clínica, camilla, varios pacientes al día, 2.500 € |
| `h2` **¿Portátil para quién?** | Zona concreta, viaje, primera compra, 120 € |
| `h2` **La tabla de decisión** | **La tabla** de abajo |
| `h2` **¿Se puede empezar por el portátil y ampliar?** | Sí, y decirlo así: es honesto y quita el miedo a equivocarse |
| `h2` **Preguntas frecuentes** | Cinco de compra, no de tecnología: garantía, consumo eléctrico, ruido, si sirve para toda la familia, plazo de entrega |
| *(cierre + aviso)* | Acción y descargo |

### La tabla

| | Red Light Mini | Pro-Panel | Clinic-Stand |
|---|---|---|---|
| Precio | 120 € | 999 € | 2.500 € |
| Para qué zona | Una, pequeña | Todo el cuerpo | Todo el cuerpo, con camilla |
| Dónde encaja | Bolsa de viaje | Habitación o gimnasio de casa | Clínica o box |
| Para quién | Primera compra, prueba | Uso diario en casa | Uso profesional |

### Enlaces internos (5)

Los tres productos de la tabla, la colección `terapia-luz-roja` y el pilar
(`terapia-luz-roja-guia`). Y desde el pilar, un enlace de vuelta a este.

---

## Artículo 4 · Gafas de filtro de luz azul

Tapa el agujero 2: tres productos de 90 € sin una línea escrita. Es también el
artículo **más honesto** de los seis, porque la evidencia aquí está dividida, y
decirlo es exactamente lo que hace que un sitio de salud gane confianza.

### Ficha para el admin

| Campo | Valor |
|---|---|
| **Palabra clave principal** | `gafas de luz azul para dormir` |
| **Secundarias** | `filtro de luz azul funciona`, `gafas para pantallas`, `luz azul y melatonina`, `gafas naranjas para dormir` |
| **Intención** | Informativa con compra detrás y ticket bajo: la compra de entrada |
| **Título del artículo (48)** | `Gafas de filtro de luz azul: ¿sirven para dormir?` |
| **«Título de la página» (43)** | `Gafas de luz azul: ¿sirven para dormir?` |
| **«Identificador de URL»** | `gafas-filtro-luz-azul-dormir` |
| **«Metadescripción» (152)** | `Qué dice la evidencia sobre las gafas de filtro de luz azul, en qué se diferencian los filtros amarillo, naranja y rojo, y cuándo ponérselas.` |
| **Extracto (150)** | `Qué hace de verdad un filtro de luz azul, qué dice la evidencia sobre el sueño y qué filtro corresponde a cada momento del día.` |
| **Etiqueta** | `Luz roja` |

> **Sobre la etiqueta.** No creéis una etiqueta nueva («Sueño», «Descanso») para
> un solo artículo: una página de etiqueta con un artículo es un duplicado del
> listado. La regla está en §5.6: **etiqueta nueva a partir de tres artículos**.

### Esquema

| Encabezado | Qué dice |
|---|---|
| *(entradilla)* | Qué filtran, qué no, y la respuesta corta a «¿funcionan?» |
| `h2` **¿Qué es la luz azul y por qué molesta de noche?** | Melatonina y ritmo circadiano, en lenguaje normal |
| `h2` **¿Funcionan de verdad las gafas de filtro?** | **El apartado honesto.** Para el sueño hay evidencia moderada si se usan 2-3 horas antes de dormir; para la fatiga visual la evidencia es débil. Decirlo tal cual, con los enlaces externos |
| `h2` **¿Amarillo, naranja o rojo?** | **La tabla.** Cuánto filtra cada uno y a qué hora se usa |
| `h2` **¿A qué hora hay que ponérselas?** | El dato accionable: 2-3 horas antes de dormir, y no quitárselas para mirar el móvil |
| `h2` **¿Sirven para trabajar con pantallas todo el día?** | Aquí se es honesto: para eso importan más los descansos y el brillo. El `DAILY LIGHT` es filtro suave, no una solución médica |
| `h2` **¿Se pueden usar con gafas graduadas?** | Duda de compra muy frecuente |
| `h2` **Preguntas frecuentes** | Cinco |
| *(cierre + aviso)* | Acción y descargo |

### La tabla

| | DAILY LIGHT · amarillo | NIGHT FLOW · naranja | NIGHT MAX · rojo |
|---|---|---|---|
| Cuánto filtra | Suave | Medio | Máximo |
| Cuándo | Todo el día, pantallas | Tarde y noche | Últimas horas antes de dormir |
| Distorsiona el color | Poco | Algo | Mucho |
| Precio | 90 € | 90 € | 90 € |

### Enlaces internos (5)

Las tres fichas de gafas, la colección `terapia-luz-roja` y el pilar de luz roja.
Y el pilar enlaza aquí desde su apartado de «¿Hay que ponerse gafas?».

### Enlaces externos (2)

- Una **revisión sistemática sobre gafas de bloqueo de luz azul y sueño** buscada
  en PubMed (*blue-light blocking glasses sleep*). Hay revisiones con resultados
  mixtos: citad una de esas, no la más favorable.
- La **Academia Americana de Oftalmología**, que sostiene que no hay pruebas de
  que la luz azul de las pantallas dañe el ojo. **Citadla aunque juegue en
  contra**: eso es exactamente lo que Google llama experiencia y fiabilidad, y os
  diferencia de las tiendas que exageran.

---

## Artículo 5 · Presoterapia: quién no debe usarla *(resumido)*

| Campo | Valor |
|---|---|
| **Palabra clave** | `presoterapia contraindicaciones` |
| **Título del artículo (34)** | `Presoterapia: quién no debe usarla` |
| **«Título de la página» (44)** | `Presoterapia: contraindicaciones y avisos` |
| **URL** | `presoterapia-contraindicaciones` |
| **Etiqueta** | `Presoterapia` · **1.200-1.500 palabras** |

Cuelga de `presoterapia-en-casa`, que ya tiene un apartado corto de
contraindicaciones: aquí se desarrolla y **desde el pilar se enlaza aquí**.

Apartados, todos en pregunta: trombosis y problemas venosos · insuficiencia
cardiaca · infección o inflamación activa · embarazo · cáncer y linfedema
(remitir siempre a profesional) · marcapasos y prótesis · qué hacer si te pasa
algo durante la sesión · cuándo parar. Cierre con: **esto no sustituye una
consulta**, y el descargo.

Es el artículo con **más riesgo YMYL** de los seis: aquí la autoría de una
persona con credenciales (§5.7) no es opcional.

---

## Artículo 6 · ¿Frío o calor? *(resumido)*

| Campo | Valor |
|---|---|
| **Palabra clave** | `frío o calor para el dolor muscular` |
| **Título del artículo (33)** | `¿Frío o calor? Cuál usar y cuándo` |
| **«Título de la página» (42)** | `¿Frío o calor? Guía para elegir bien` |
| **URL** | `frio-o-calor-dolor-muscular` |
| **Etiqueta** | `Frío` · **1.400-1.800 palabras** |

El artículo de entrada: mucho volumen, intención informativa pura, y **enlaza a
las cuatro colecciones**, así que reparte autoridad por todo el sitio. Tabla
central de dos columnas —lesión aguda, contractura, agujetas, tendinopatía,
antes de entrenar— con la respuesta en cada caso. Enlaza a `banera-crioterapia`,
al artículo 2, al de la pistola y al pilar de luz roja.

**Este es el candidato a cambiar.** Cuando toque escribirlo habrá dos meses de
Search Console; si hay una consulta con impresiones y mala posición, se escribe
esa en su lugar (§7).

---

## 5. Pautas para posicionar

Esto es la parte que se reutiliza en todos los artículos siguientes. Está sacada
de comparar lo que hay publicado con lo que hace la competencia que sale por
encima.

### 5.1. Longitud

**Mínimo 1.500 palabras de cuerpo; los pilares, 2.000-2.500.** No porque Google
cuente palabras, sino porque por debajo de eso no caben la tabla, las
contraindicaciones, las preguntas y los enlaces, y son esas cuatro cosas las que
posicionan. Los cuatro artículos publicados están entre 615 y 1.316: **todos por
debajo**.

### 5.2. Los `h2` se escriben como preguntas

La regla más rentable del documento. Dos motivos, y el segundo está comprobado en
vuestro propio sitio:

1. Coincide con cómo se busca en español, y es lo que Google usa para elegir el
   fragmento destacado.
2. **El marcado `FAQPage` del sitio se genera copiando los `h2`.** Si el `h2` es
   una pregunta, sale un marcado válido sin tocar nada. Si es un titular
   («Principales beneficios de las LED Boots»), sale una «pregunta» que no es una
   pregunta y el marcado queda inválido, que es lo que pasa hoy en dos artículos.

Y **la respuesta va en el primer párrafo debajo del `h2`**, en dos o tres frases.
Lo que se argumenta, después.

### 5.3. Las primeras 60 palabras responden la búsqueda

Sin introducción de calentamiento. Nada de «en el mundo del deporte de hoy en
día...». Definición, matiz y dato en el primer párrafo. Es lo que Google puede
enseñar como fragmento y lo que decide si el lector se queda.

### 5.4. Una tabla por artículo, y que sea la respuesta

La tabla es lo que se comparte, lo que se copia y lo que Google enseña. **Que
contenga el dato que se busca** —grados, minutos, precios, longitudes de onda—,
no una lista de características.

### 5.5. Enlaces: tres reglas

- **Salientes: 4-6 por artículo**, y siempre al menos **un producto, una
  colección y otro artículo**. Con texto descriptivo, nunca «aquí» ni «leer más».
  Hoy hay artículos con cero.
- **Entrantes: cada artículo nuevo necesita al menos dos**, desde la ficha del
  producto del que habla y desde su colección. Se hace **el mismo día que se
  publica**, no «cuando haya tiempo». Es la mitad del trabajo (§3.1).
- **Externos: 2-3, normales, sin `nofollow`**, a fuentes que se puedan verificar
  con DOI. Si no encontráis el estudio, no se cita. Y **citad también lo que os
  juega en contra**: es lo que separa un sitio fiable de un folleto.

#### Por qué el bloque «Sigue leyendo» no cuenta como esos enlaces

Es la duda más razonable de todo el documento: si el artículo ya termina con tres
tarjetas que enlazan a otros artículos, ¿para qué hacen falta enlaces escritos?

Porque **un enlace interno hace tres trabajos distintos** y el bloque automático
solo hace los dos primeros, y a medias:

| Trabajo del enlace | ¿Lo hace el bloque? |
|---|---|
| **Que Google descubra la página** | Sí. Aunque eso ya lo hace el sitemap, así que aporta poco |
| **Pasar autoridad** | A medias. Google separa el **contenido principal** del **contenido repetido** —menús, pies, módulos idénticos en todas las páginas— y al segundo le da mucho menos peso. Un bloque igual en las cuatro páginas es contenido repetido por definición |
| **Decirle a Google de qué va la página de destino** | **No**, y es el que importa |

El tercero solo se consigue escribiendo, porque **Google lee el texto que rodea
al enlace**. «Conviene separarlo unas horas, como explicamos en la guía de baños
de hielo» le dice que el destino trata de eso. Una tarjeta con una foto y un
título no tiene texto alrededor que leer.

En corto: el bloque dice *«aquí hay más artículos»*; el enlace escrito dice *«ese
artículo responde exactamente a esta duda»*.

**Y en este sitio el bloque tiene además dos fallos**, medidos el 8 de septiembre:

```
banera-crioterapia          → pistola | led-boots | banera-crioterapia  ← a sí mismo
como-usar-pistola-de-masaje → pistola ← a sí mismo | led-boots | banera-crioterapia
led-boots-recuperacion      → pistola | led-boots ← a sí mismo | banera-crioterapia
presoterapia-en-casa        → pistola | led-boots | banera-crioterapia
```

1. Enseña **los tres artículos más recientes, no los relacionados**. Por eso son
   los mismos tres en las cuatro páginas y **tres de los cuatro se enlazan a sí
   mismos**, lo cual no hace nada.
2. **`presoterapia-en-casa` no recibe ni un enlace**, porque es el más antiguo y
   nunca entra en «los tres últimos». Y esto no se arregla publicando más: los
   artículos viejos nunca volverán a aparecer ahí.

Lo mismo con **«Colección destacada»**: las **mismas cuatro fichas en los cuatro
artículos** (`BPS Plus`, `Pro-Panel`, `Recovery Pod`, `BPS Gun`), así que el
artículo de la bañera no empuja el `Ice Bath` y **hay ocho fichas de doce que no
aparecen en ningún artículo**.

**Qué hacer:** el bloque se queda —para el lector funciona: baja el rebote y sube
las páginas por visita—, pero **no sustituye a los 4-6 enlaces escritos**. Y dos
mejoras opcionales:

- **Colección destacada por tecnología.** En el editor se pueden crear
  **plantillas de artículo alternativas** (`article.luz-roja`, `article.frio`...)
  con una colección destacada distinta en cada una, y asignar a cada publicación
  la suya en su campo **«Plantilla»**. Sin tocar código.
- **Quitar el enlace a sí mismo** obliga a editar la sección en `Editar código`
  —una condición comparando el artículo actual— y sería otro archivo de tema que
  rehacer en cada actualización. Con cuatro artículos, **no merece la pena**.

### 5.6. Etiquetas

Solo las cuatro que existen: `Presoterapia`, `Frío`, `Luz roja`, `Liberación
muscular`. **Una etiqueta principal por artículo.** Etiqueta nueva solo cuando
vaya a tener **tres artículos o más**: con uno, la página de etiqueta es un
duplicado del listado (y por eso están todas en `noindex`).

### 5.7. Autoría

Los seis artículos tocan salud, y eso Google lo mide aparte. Hoy los cuatro
firman **«BPS Performance»**, que como autor no es nadie. Hay que:

- Firmar con **una persona**, con nombre y apellidos.
- Una **página de autor** con su formación y, si es fisioterapeuta colaborador,
  su número de colegiado.
- En los artículos 5 y 1, **revisión por un profesional sanitario** con su nombre
  y la fecha de revisión al principio del artículo.

### 5.8. Los campos del admin, con los topes reales

| Campo | Dónde | Tope real | Por qué |
|---|---|---|---|
| **Título del artículo** | Arriba, en la publicación | **50** | La tarjeta del listado lo recorta a 50 caracteres exactos (es de Dawn: `article-card.liquid`) |
| **«Título de la página»** | Bloque «Optimización para motores de búsqueda» → **Editar** | **45** | El tema le añade ` – BPS Performance`, otros 18. Si el título ya contiene «BPS Performance», el tema no lo añade y podéis llegar a 60 |
| **«Metadescripción»** | El mismo bloque | **140-155** | Por encima, Google la corta |
| **Extracto** | Sección «Extracto» de la publicación | **150-160** | Si se deja vacío, Dawn recorta el primer párrafo y la tarjeta acaba a mitad de frase |
| **«Identificador de URL»** | El mismo bloque de SEO | 3-5 palabras | **Sin año y sin fecha.** Y **no se cambia nunca** después de publicar |

**Y nada de «en 2026» en el campo de SEO.** Obliga a repasarlo cada enero y, si
no se repasa, envejece a la vista. En el texto del artículo sí vale.

### 5.9. Imágenes

**3 o 4 dentro del texto**, no solo la destacada. Hoy los cuatro artículos tienen
**cero imágenes en el cuerpo**, y en artículos de uso —protocolos, zonas,
distancias— la imagen es media explicación.

Alt descriptivo con el nombre del producto cuando aparezca: `Pistola de masaje
BPS Gun sobre el gemelo, con el pie apoyado en el suelo`. Ni `IMG_2043` ni
`pistola de masaje comprar`.

### 5.10. Mantenimiento

- **Fecha de actualización:** al revisar un artículo, cambiadla. Google la usa y
  estos temas envejecen.
- **Descargo sanitario** al final de todos, el de [GUIA-BLOG](GUIA-BLOG.md) §3.
  En contenido de salud no es opcional.
- **Nada de generar el artículo entero con una aplicación y publicarlo tal cual.**
  Se nota en lo que hay publicado: apartados con `Título En Mayúsculas Todas Las
  Palabras`, «Conclusión» como encabezado y numeraciones tipo `1. Zonas
  Anatómicas Prohibidas`. Google no penaliza usar la máquina; penaliza que no
  aporte nada. Lo que la máquina no puede escribir —y es lo que os va a
  posicionar— es lo que sabéis vosotros: qué preguntan los clientes por teléfono,
  qué devuelven y por qué, qué pasa cuando una bañera lleva tres meses en una
  terraza en agosto.

---

## 6. Calendario

Ritmo realista para una tienda pequeña: **dos publicaciones al mes**. Y las
reparaciones primero, porque esas páginas ya están indexadas.

| Semana | Qué |
|---|---|
| **1** | §3.1 completo: los enlaces de las 12 fichas y de las 4 colecciones al blog. Y los 4 enlaces que faltan dentro de `presoterapia-en-casa` |
| **1** | Decidir la firma (§5.7) y crear la página de autor |
| **2** | Reparar `led-boots-recuperacion`: de 615 a 1.300 palabras, 4 enlaces, 2 externos, `h2` en pregunta |
| **3** | **Artículo 1 · pilar de luz roja.** Y el mismo día, sus enlaces entrantes desde las tres fichas de luz roja y desde la colección |
| **4** | Reparar `banera-crioterapia`: tabla de grados y minutos, apartado de montaje, enlaces |
| **5** | **Artículo 2 · baño de hielo.** Enlaces entrantes desde las dos fichas de frío |
| **6** | Reparar `como-usar-pistola-de-masaje`: enlace a su ficha y marcado de preguntas |
| **7** | **Artículo 3 · qué equipo de luz roja elegir** |
| **8** | Crear la entrada **Terapia** del menú (paso 4 de [MEGAMENU.md](MEGAMENU.md)): hoy «Blog» es un enlace suelto sin hijos, así que el desplegable del escritorio y las pestañas del móvil no enseñan las categorías del blog |
| **9** | **Artículo 4 · gafas de filtro** |
| **10** | Revisar Search Console y **elegir con datos** los artículos 5 y 6 |
| **11-14** | Artículos 5 y 6, o los que digan los datos |

---

## 7. Cómo saber si funciona

A partir de la semana 10, **los temas ya no se eligen por intuición**. En
**Search Console** → **Rendimiento** → pestaña **Consultas**, filtrando por
`/blogs/`:

| Lo que veis | Lo que significa | Qué hacer |
|---|---|---|
| Una consulta con impresiones y **posición 8-20** | Estáis cerca de la primera página | Reforzar **ese** artículo: más contenido en el apartado que responde esa consulta, y un enlace entrante más. Rinde más que un artículo nuevo |
| Una consulta con impresiones y **CTR bajo** | Salís pero no os clican | El «Título de la página» y la metadescripción de ese artículo |
| Una consulta que **no cubre ningún artículo** | Un tema que no habíais visto | Ese es el siguiente artículo, y con prioridad sobre esta lista |
| Un artículo con **cero impresiones a las 6 semanas** | No tiene enlaces entrantes o el tema no se busca | Comprobad primero los enlaces entrantes (§5.5) antes de dar el tema por muerto |

Y un aviso para no desanimarse: **un artículo tarda de 6 a 12 semanas en
asentarse**. Mirar posiciones a los cuatro días no dice nada.

---

## 8. Ideas para después, sin desarrollar

Cuando los seis estén publicados, y siempre validando antes en Search Console:

| Idea | Etiqueta | Por qué |
|---|---|---|
| Cómo recuperar después de una media maratón | Frío | Mucho volumen y toca las cuatro tecnologías |
| Presoterapia o medias de compresión | Presoterapia | Comparativa con producto que no vendéis: da credibilidad |
| Cuántas cámaras necesitan unas botas de presoterapia | Presoterapia | Comercial, decide entre `Plus` y `Pro` |
| Pistola de masaje o foam roller | Liberación muscular | Comparativa, y el ticket de entrada de 99 € |
| Montar una sala de recuperación en una clínica | Transversal | Va a por el cliente profesional, que es el de 2.500 € |
| Retención de líquidos en las piernas: qué ayuda | Presoterapia | Público no deportista, que es mercado nuevo |
| Cómo limpiar y mantener una bañera de hielo | Frío | Postventa, y nadie lo tiene escrito |
| Qué es la fotobiomodulación (glosario) | Luz roja | Cola larga que refuerza el pilar |
