# Los tres primeros artículos, listos para escribir

Propuesta cerrada de los tres artículos que hay que publicar ahora, con palabra
clave, esquema, enlaces y todos los campos del admin. Continúa
[GUIA-BLOG.md](GUIA-BLOG.md), que ya define la arquitectura del blog: **un solo
blog, categorías por etiquetas, y cuatro pilares que son las cuatro
colecciones**.

**Por qué estos tres y en este orden.** El blog tiene hoy **un artículo
publicado**, el pilar de presoterapia. Faltan los pilares de las otras tres
colecciones. Un pilar es el artículo que responde a la búsqueda genérica de esa
tecnología y del que colgarán después seis u ocho artículos cortos; sin él, los
cortos no tienen a dónde apuntar y Google no entiende que la tienda va de eso.

| # | Artículo | Colección | Por qué va primero |
|---|---|---|---|
| 1 | Terapia de luz roja | `energia-luminica` | Es donde hay más catálogo —panel, lámpara, portátil y tres gafas— y más ticket (120 a 2.500 €). La competencia en español todavía es floja |
| 2 | Baños de hielo | `recuperacion-polar` | Tema en alza y ticket alto (1.850 €). Y es el artículo donde se puede ser **más honesto** que la competencia, que es lo que da autoridad |
| 3 | Pistola de masaje | `liberacion-muscular` | Mucho volumen, pero las búsquedas de compra las tienen Amazon y Decathlon. Se entra por la de uso —«cómo usarla»—, no por la de compra |

---

## Antes de escribir: cuatro cosas de la tienda

No son opinables: los tres artículos enlazan a estas páginas y a estos productos.

1. **`BPS Ice Bath` está publicado a 0,00 €.** Comprobado en
   `/products/banera-crioterapia-portatil-hielo.json`: la única variante tiene
   `price: "0.00"`. El artículo 2 enlaza a esa ficha dos veces, y un producto a
   cero euros en una página que acabas de posicionar es peor que no tenerlo. O se
   le pone precio o se despublica y el artículo enlaza solo al `Recovery Pod`.
2. **El título de la tarjeta se corta a los 50 caracteres.** Es de Dawn:
   `snippets/article-card.liquid` hace `{{ article.title | truncate: 50 }}`. Por
   eso el artículo actual sale como «Presoterapia en casa: qué es, para qué sirve
   y …». Los títulos de aquí abajo están escritos **por debajo de 50** a
   propósito, y el título largo va en el campo de SEO. Si preferís títulos largos
   en la tarjeta, hay que tocar ese snippet, y pasa a ser un archivo más que
   rehacer en cada actualización del tema.
3. **Autoría real.** Los tres artículos tocan salud y Google mide eso (E-E-A-T).
   Hoy el artículo firma «BPS Performance». Hay que firmar con **una persona**, y
   si podéis con un fisioterapeuta colaborador y su número de colegiado.
4. **El extracto no puede quedarse vacío.** Si se deja, Dawn recorta el primer
   párrafo y la tarjeta acaba a mitad de frase, que es lo que pasa hoy. Los
   extractos van escritos más abajo, ya en 150-160 caracteres.

> **Sobre las palabras clave.** Las de esta propuesta salen del catálogo, de la
> estructura de las colecciones y de cómo se busca en español, no de una
> herramienta de volumen: no tengo acceso a datos de búsqueda. **Antes de
> escribir, pasad las cinco palabras de cada artículo por el Planificador de
> Palabras Clave de Google Ads** (gratis con una cuenta) y, si alguna tiene mucho
> más volumen que la elegida, se cambia el título. Cuesta veinte minutos y evita
> escribir 3.000 palabras para una búsqueda que no existe.

---

## Artículo 1 · Terapia de luz roja

### Ficha para el admin

| Campo | Valor |
|---|---|
| **Palabra clave principal** | `terapia de luz roja` |
| **Secundarias** | `para qué sirve la luz roja`, `fotobiomodulación`, `660 nm y 850 nm`, `panel de luz roja`, `cuánto tiempo luz roja` |
| **Intención** | Informativa con intención de compra detrás: quien busca esto está decidiendo si comprar |
| **Título (tarjeta, 45)** | `Terapia de luz roja: guía para usarla en casa` |
| **SEO · título (52)** | `Terapia de luz roja: qué es, evidencia y cómo usarla` |
| **SEO · URL** | `/blogs/rendimiento/terapia-luz-roja-guia` |
| **SEO · descripción (152)** | `Qué es la terapia de luz roja, qué dice la evidencia, en qué se diferencian 660 y 850 nm y cómo montar una rutina en casa sin pasarte de dosis.` |
| **Extracto (157)** | `Qué es la fotobiomodulación, para qué hay evidencia y para qué no, la diferencia real entre luz roja e infrarroja y cuánto tiempo usarla cada día.` |
| **Etiquetas** | `Luz roja` (principal) + `Entrenamiento` |
| **Longitud** | 2.800-3.200 palabras (es pilar) |
| **Imagen destacada** | 1.600 × 900 JPG. Alt: `Panel de terapia de luz roja BPS iluminando la espalda de una deportista en una sala en penumbra` |

### Las primeras 60 palabras (esto es lo que Google enseña)

> La terapia de luz roja, o fotobiomodulación, consiste en exponer la piel a luz
> roja (unos 660 nm) o infrarroja cercana (unos 850 nm) para estimular la
> actividad de las mitocondrias. La evidencia disponible es más sólida en dolor
> muscular y recuperación después del ejercicio que en otros usos. Una sesión
> típica en casa son 10 minutos, a 15-30 cm, cuatro o cinco días por semana.

Ese párrafo ya contiene la palabra clave, la definición, el matiz honesto y el
dato accionable. Es el que puede salir como fragmento destacado.

### Esquema

| Encabezado | Qué dice | Palabras |
|---|---|---|
| *(entradilla)* | Las 60 palabras de arriba, y en qué te va a ayudar el artículo | 120 |
| `h2` **Qué es la terapia de luz roja** | Fotobiomodulación en lenguaje normal: luz que llega al tejido y actúa sobre el citocromo c oxidasa de la mitocondria. Sin metáforas de «energía» | 300 |
| `h3` Por qué se llama fotobiomodulación | El nombre técnico y por qué se abandonó «láser de baja potencia» | 120 |
| `h2` **660 nm y 850 nm: qué cambia** | La diferencia real: penetración. 660 se queda en piel y tejido superficial; 850 llega a músculo y articulación. Aquí va **la tabla** | 400 |
| `h2` **Para qué hay evidencia y para qué no** | El apartado más importante del artículo. Tres bloques: *evidencia razonable* (dolor muscular tardío, recuperación de fuerza), *evidencia preliminar* (piel, sueño), *sin evidencia suficiente* (todo lo demás que se vende por ahí). Con enlaces externos | 600 |
| `h2` **Cómo usarla en casa sin liarse con la dosis** | Distancia, tiempo, frecuencia. Explicar J/cm² una vez y luego traducirlo a minutos, que es lo que la gente usa | 450 |
| `h3` Una rutina de 10 minutos, cuatro días por semana | Protocolo concreto por zonas | 200 |
| `h3` Cuándo hacerla: antes o después de entrenar | Duda muy buscada | 150 |
| `h2` **Seguridad: qué no hacer** | Ojos, embarazo, fotosensibilizantes, lunares y manchas. Y que no es un producto sanitario | 350 |
| `h2` **Panel, lámpara con soporte o portátil: cuál te toca** | Comparativa de las tres gamas propias con el criterio de decisión, no con la ficha técnica | 350 |
| `h2` **Preguntas frecuentes** | Las cinco de más abajo | 350 |
| *(cierre)* | Una acción: la ficha que resuelve lo que acaba de leer | 80 |
| *(aviso)* | El descargo de responsabilidad de GUIA-BLOG §3 | 40 |

### La tabla que hay que meter

| | Luz roja · 660 nm | Infrarrojo cercano · 850 nm |
|---|---|---|
| Hasta dónde llega | Piel y tejido justo por debajo | Músculo, tendón y articulación |
| Se ve | Sí, rojo intenso | Casi nada, un brillo tenue |
| Para qué se usa más | Piel, cicatrización superficial | Dolor muscular, articulaciones, recuperación |
| En qué producto | Presente en los tres | Presente en los tres |

### Preguntas frecuentes (para el metacampo `faq`)

Van tal cual al metaobjeto de preguntas que ya está configurado (GUIA-BLOG §5).

1. **¿Cuánto tiempo hay que usar la luz roja al día?**
   Entre 10 y 20 minutos por zona, según la potencia del equipo y la distancia.
   Más tiempo no da más resultado: por encima de cierta dosis el efecto se
   estanca o incluso baja.
2. **¿Se puede usar todos los días?**
   Sí, pero cuatro o cinco días por semana es suficiente y es más fácil de
   mantener. La constancia importa más que la frecuencia.
3. **¿Hay que ponerse gafas?**
   Con luz roja visible, no es imprescindible si no se mira directamente al
   panel. Con infrarrojo, que no se ve, conviene no mirar la fuente. Nunca
   mirar fijamente el emisor.
4. **¿En cuánto tiempo se nota algo?**
   En dolor muscular después de entrenar, a veces en la misma sesión o al día
   siguiente. En cambios de piel, se habla de semanas. Si alguien promete
   resultados inmediatos en todo, desconfía.
5. **¿Sirve para adelgazar o para la celulitis?**
   No hay evidencia suficiente para afirmarlo, y nosotros no lo vendemos así.
   La luz roja es una herramienta de recuperación y bienestar, no un tratamiento
   médico ni estético garantizado.

### Enlaces internos (5)

| Texto del enlace | A dónde |
|---|---|
| panel de luz roja de cuerpo completo | `/products/panel-terapia-luz-roja-cuerpo-completo` |
| dispositivo portátil de luz roja e infrarroja | `/products/dispositivo-terapia-luz-roja-portatil` |
| toda la gama de terapia de luz roja | `/collections/energia-luminica` |
| gafas con filtro para la luz azul de la noche | `/products/bps-recovery-glasses-gafas-con-filtro-night-flow` |
| la guía de presoterapia en casa | `/blogs/rendimiento/presoterapia-en-casa` |

Y en el apartado de clínicas o uso profesional, un sexto a
`/products/lampara-profesional-luz-roja-soporte`.

### Enlaces externos (2-3, en `rel="nofollow"` no; que sean normales)

- La revisión de **Michael R. Hamblin sobre los mecanismos antiinflamatorios de
  la fotobiomodulación** (2017), que es la referencia que cita todo el campo.
- Una búsqueda en **PubMed** (`pubmed.ncbi.nlm.nih.gov`) de
  *photobiomodulation muscle recovery* como fuente para el apartado de evidencia.
- La **AEMPS** para respaldar la frase de que los equipos son productos de
  bienestar y no productos sanitarios.

> **Verificad cada cita antes de publicar.** Si no encontráis el estudio con su
> DOI, no se cita. Una referencia inventada en contenido de salud hace más daño
> que no poner ninguna.

### Imágenes (3)

| Dónde | Qué | Alt |
|---|---|---|
| Cabecera | Panel iluminando una espalda | `Panel de terapia de luz roja BPS iluminando la espalda de una deportista en una sala en penumbra` |
| En «660 y 850 nm» | Esquema de penetración por capas de tejido | `Esquema de la profundidad que alcanzan la luz roja de 660 nm y el infrarrojo de 850 nm en piel y músculo` |
| En «cómo usarla» | Alguien midiendo la distancia al panel | `Distancia de 20 cm entre el panel de luz roja y la pierna durante una sesión` |

---

## Artículo 2 · Baños de hielo

### Ficha para el admin

| Campo | Valor |
|---|---|
| **Palabra clave principal** | `baños de hielo` |
| **Secundarias** | `cuánto tiempo baño de hielo`, `temperatura baño de hielo`, `inmersión en agua fría`, `crioterapia en casa`, `baño de hielo beneficios` |
| **Intención** | Informativa. La duda concreta es siempre **grados y minutos** |
| **Título (tarjeta, 48)** | `Baños de hielo: temperatura, tiempo y frecuencia` |
| **SEO · título (48)** | `Baños de hielo: temperatura, tiempo y frecuencia` |
| **SEO · URL** | `/blogs/rendimiento/banos-de-hielo-guia` |
| **SEO · descripción (150)** | `A cuántos grados, cuántos minutos y cuántas veces por semana, según busques recuperar, dormir mejor o ganar músculo. Y cuándo el frío te resta.` |
| **Extracto (155)** | `Los grados y los minutos que dice la evidencia, según lo que busques. Incluye el caso en el que el frío después de pesas te juega en contra.` |
| **Etiquetas** | `Frío` (principal) + `Entrenamiento` |
| **Longitud** | 2.500-3.000 palabras |
| **Imagen destacada** | 1.600 × 900 JPG. Alt: `Deportista sumergido hasta el pecho en una bañera de hielo portátil BPS en una terraza al amanecer` |

### Las primeras 60 palabras

> Para recuperar después de entrenar, la referencia más repetida es **10-15
> minutos entre 10 y 15 °C**, dos o tres veces por semana. No hace falta bajar a
> 5 °C: por debajo de 10 °C se aguanta menos y no se ha demostrado que funcione
> mejor. Y hay un caso en el que conviene no hacerlo: justo después de una sesión
> de fuerza, si el objetivo es ganar músculo.

Responde la búsqueda en la primera frase y adelanta el matiz que hace que el
artículo se comparta.

### Esquema

| Encabezado | Qué dice | Palabras |
|---|---|---|
| *(entradilla)* | Las 60 palabras, y el índice de lo que viene | 120 |
| `h2` **A cuántos grados y cuántos minutos** | El apartado que resuelve la búsqueda. Aquí va **la tabla por objetivo** | 450 |
| `h3` Por qué no hace falta bajar de 10 °C | Aguantar menos tiempo no compensa | 180 |
| `h2` **Qué le pasa al cuerpo en el agua fría** | Vasoconstricción, percepción del dolor, respuesta de estrés agudo. Sin misticismo | 350 |
| `h2` **Para qué funciona: lo que dice la evidencia** | Dolor muscular percibido y sensación de recuperación: razonable. Rendimiento del día siguiente: depende del deporte. Grasa, inmunidad, longevidad: no | 450 |
| `h2` **Frío después de pesas: el caso en el que resta** | **El apartado clave del artículo.** Si el objetivo es hipertrofia, el frío inmediato después de la sesión de fuerza puede reducir la adaptación. Qué hacer entonces: separarlo unas horas, o reservarlo para los días de mucha carga o de competición | 400 |
| `h2` **Cómo montarlo en casa** | Agua, hielo, cuántos kilos, cada cuánto se cambia, cómo se limpia, dónde ponerlo. Es lo que nadie cuenta y lo que más se agradece | 450 |
| `h3` Cuánto hielo hace falto de verdad | Cálculo sencillo por litros | 150 |
| `h2` **Seguridad: cuándo no meterse** | Problemas cardiovasculares, hipertensión no controlada, embarazo, solo en casa la primera vez, no aguantar la respiración | 300 |
| `h2` **Bañera portátil o instalación fija** | Comparativa de las dos gamas propias | 300 |
| `h2` **Preguntas frecuentes** | Las cinco de abajo | 350 |
| *(cierre + aviso)* | Acción y descargo | 120 |

### La tabla que hay que meter

| Lo que buscas | Temperatura | Tiempo | Cuántas veces |
|---|---|---|---|
| Recuperar después de entrenar | 10-15 °C | 10-15 min | 2-3 por semana |
| Bajar la sensación de agujetas | 11-15 °C | 11-15 min | El mismo día del esfuerzo |
| Empezar desde cero | 15-18 °C | 3-5 min | 1-2 por semana, subiendo |
| Ganar masa muscular | **Mejor separarlo de la sesión de fuerza** | — | — |

### Preguntas frecuentes (para el metacampo `faq`)

1. **¿Cuánto tiempo hay que estar en un baño de hielo?**
   Entre 10 y 15 minutos a 10-15 °C para recuperar. Si estás empezando, 3-5
   minutos a 15-18 °C ya sirve; el objetivo es acabar tranquilo, no aguantar.
2. **¿A qué temperatura debe estar el agua?**
   Entre 10 y 15 °C para la mayoría de los usos. Bajar de 10 °C reduce el tiempo
   que se aguanta sin que se haya demostrado mejor resultado.
3. **¿Es mejor antes o después de entrenar?**
   Después, y con una excepción: si el entreno era de fuerza y buscas ganar
   músculo, conviene dejar pasar unas horas o reservar el frío para otro día.
4. **¿Puedo hacerlo todos los días?**
   Se puede, pero dos o tres veces por semana cubre lo que se busca. Diario tiene
   más sentido en periodos de mucha carga o competición.
5. **¿Quién no debería meterse?**
   Quien tenga problemas cardiovasculares o hipertensión no controlada, esté
   embarazada o tome medicación que afecte a la circulación, sin hablarlo antes
   con un profesional sanitario. Y nunca la primera vez estando solo en casa.

### Enlaces internos (5)

| Texto del enlace | A dónde |
|---|---|
| bañera de hielo portátil para inmersión en frío | `/products/banera-hielo-portatil-cold-plunge` |
| bañera de crioterapia portátil | `/products/banera-crioterapia-portatil-hielo` *(solo si se le pone precio)* |
| toda la gama de recuperación en frío | `/collections/recuperacion-polar` |
| la guía de presoterapia en casa | `/blogs/rendimiento/presoterapia-en-casa` |
| la guía de terapia de luz roja | `/blogs/rendimiento/terapia-luz-roja-guia` |

### Enlaces externos (2-3)

- **Roberts LA y colaboradores, *Journal of Physiology*, 2015**, sobre cómo la
  inmersión en agua fría después del entreno de fuerza atenúa la señalización
  anabólica. Es el estudio que sostiene el apartado clave.
- La **revisión Cochrane sobre inmersión en agua fría y dolor muscular** para el
  apartado de evidencia.
- **PubMed** como fuente general para quien quiera tirar del hilo.

Misma regla: si no aparece con su DOI, no se cita.

### Imágenes (3)

| Dónde | Qué | Alt |
|---|---|---|
| Cabecera | Inmersión en la bañera portátil | `Deportista sumergido hasta el pecho en una bañera de hielo portátil BPS en una terraza al amanecer` |
| En «grados y minutos» | La tabla como gráfico, o un termómetro en el agua | `Termómetro marcando 12 grados en el agua de una bañera de hielo` |
| En «montarlo en casa» | Bolsas de hielo y la bañera vacía | `Bañera de hielo portátil BPS montada en una terraza junto a las bolsas de hielo` |

---

## Artículo 3 · Pistola de masaje

### Ficha para el admin

| Campo | Valor |
|---|---|
| **Palabra clave principal** | `cómo usar una pistola de masaje` |
| **Secundarias** | `pistola de masaje para qué sirve`, `pistola de masaje antes o después de entrenar`, `cuánto tiempo por músculo`, `pistola de masaje contraindicaciones` |
| **Intención** | De uso, no de compra. Las búsquedas de compra las tienen los grandes; esta es ganable |
| **Título (tarjeta, 35)** | `Pistola de masaje: cómo usarla bien` |
| **SEO · título (45)** | `Cómo usar una pistola de masaje (y cuándo no)` |
| **SEO · URL** | `/blogs/rendimiento/como-usar-pistola-de-masaje` |
| **SEO · descripción (148)** | `Cuánto tiempo por músculo, con qué cabezal, antes o después de entrenar y las cinco zonas en las que no se debe usar una pistola de masaje.` |
| **Extracto (153)** | `Cuánto tiempo por grupo muscular, qué cabezal usar en cada zona, si va antes o después del entreno y las zonas donde no hay que acercarla.` |
| **Etiquetas** | `Liberación muscular` (principal) + `Entrenamiento` |
| **Longitud** | 2.200-2.600 palabras |
| **Imagen destacada** | 1.600 × 900 JPG. Alt: `Pistola de masaje BPS aplicada sobre el cuádriceps de un corredor sentado en un banco` |

### Las primeras 60 palabras

> Una pistola de masaje se usa **60-90 segundos por grupo muscular**, moviéndola
> despacio y sin apretar: el peso del aparato basta. Antes de entrenar, pasadas
> cortas de 30 segundos para activar; después, pasadas más lentas para bajar la
> tensión. No se usa sobre hueso, articulación, cuello por delante, zona lumbar
> baja con dolor agudo ni sobre una lesión reciente.

### Esquema

| Encabezado | Qué dice | Palabras |
|---|---|---|
| *(entradilla)* | Las 60 palabras | 110 |
| `h2` **Para qué sirve de verdad** | Percusión: efecto sobre la percepción de tensión y el rango de movimiento a corto plazo. No «rompe» nudos ni «drena toxinas» | 300 |
| `h2` **Cuánto tiempo por músculo** | La duda número uno. 60-90 s, hasta 2 min en grupos grandes, y por qué más no es mejor | 300 |
| `h2` **¿Antes o después de entrenar?** | Dos protocolos distintos, con la diferencia explicada | 300 |
| `h2` **Zona por zona** | El apartado largo, con un `h3` por zona: cuádriceps, isquios, gemelo, glúteo, dorsal, trapecio, planta del pie. Cabezal, presión y qué evitar en cada una | 600 |
| `h2` **Qué cabezal usar** | Los cuatro típicos y para qué es cada uno. Tabla | 250 |
| `h2` **Cinco errores** | Apretar, ir demasiado rápido, pasar por hueso, usarla sobre una lesión, usarla en vez de moverse | 300 |
| `h2` **Cuándo no usarla** | Contraindicaciones claras. Es el apartado que genera confianza | 250 |
| `h2` **Pistola o rodillo: para qué sirve cada uno** | Comparativa honesta; no todo se resuelve con percusión | 200 |
| `h2` **Preguntas frecuentes** | Las cinco de abajo | 320 |
| *(cierre + aviso)* | Acción y descargo | 110 |

### La tabla que hay que meter

| Cabezal | Para qué | Dónde no |
|---|---|---|
| Bola grande | Grupos grandes: cuádriceps, glúteo, dorsal | Cerca de hueso |
| Plano | Toda la zona, presión repartida | — |
| Bala / punta | Punto concreto muy tenso | Articulaciones y columna |
| Horquilla | A los lados de un tendón o de la columna | Encima de la columna |

### Preguntas frecuentes (para el metacampo `faq`)

1. **¿Cuánto tiempo hay que usar la pistola en cada músculo?**
   Entre 60 y 90 segundos, hasta dos minutos en grupos grandes. Insistir más en
   la misma zona no mejora el resultado y puede dejarla dolorida.
2. **¿Se usa antes o después de entrenar?**
   Las dos cosas, con protocolos distintos: antes, pasadas cortas de unos 30
   segundos para activar; después, pasadas lentas para bajar la tensión.
3. **¿Se puede usar en el cuello y en la espalda?**
   En el trapecio sí, con cuidado y cabezal plano. En la parte delantera del
   cuello y directamente sobre la columna, no.
4. **¿Duele o tiene que doler?**
   No. Debe notarse intenso pero tolerable. Si duele, hay que aliviar la presión
   o cambiar de cabezal.
5. **¿Sirve para las agujetas?**
   Puede reducir la sensación de dolor a corto plazo. No acelera la reparación
   del músculo: para eso lo que funciona es dormir, comer y dosificar la carga.

### Enlaces internos (5)

| Texto del enlace | A dónde |
|---|---|
| pistola de masaje de percusión profesional | `/products/pistola-de-masaje` |
| toda la gama de liberación muscular | `/collections/liberacion-muscular` |
| los baños de hielo, y cuándo tienen sentido | `/blogs/rendimiento/banos-de-hielo-guia` |
| la terapia de luz roja para el dolor muscular | `/blogs/rendimiento/terapia-luz-roja-guia` |
| la presoterapia, que trabaja de otra manera | `/blogs/rendimiento/presoterapia-en-casa` |

### Enlaces externos (2)

- Una **revisión sistemática sobre terapia de percusión y rango de movimiento**,
  buscada en PubMed con *percussive massage therapy range of motion*. Es el campo
  con menos evidencia de los tres artículos: conviene decirlo en el texto.
- El **Consejo General de Colegios de Fisioterapeutas de España** para la frase
  de «esto no sustituye a un fisioterapeuta».

### Imágenes (4, es un artículo de uso)

| Dónde | Qué | Alt |
|---|---|---|
| Cabecera | Aplicación en cuádriceps | `Pistola de masaje BPS aplicada sobre el cuádriceps de un corredor sentado en un banco` |
| En «zona por zona» | Dos o tres fotos por zona | `Pistola de masaje BPS sobre el gemelo, con el pie apoyado en el suelo` |
| En «qué cabezal» | Los cuatro cabezales | `Los cuatro cabezales de la pistola de masaje BPS: bola, plano, bala y horquilla` |
| En «cuándo no usarla» | Zonas marcadas sobre una silueta | `Silueta con las zonas marcadas en las que no se debe usar una pistola de masaje` |

---

## Lo que hay que enlazar DESDE lo que ya existe

Esto es la mitad del trabajo y es lo que casi siempre se olvida. Un artículo
nuevo sin enlaces entrantes tarda mucho más en posicionar.

**En el artículo de presoterapia que ya está publicado**, añadir tres enlaces:

| Dónde | Texto | A dónde |
|---|---|---|
| Donde se hable de combinar tecnologías | `la terapia de luz roja` | `/blogs/rendimiento/terapia-luz-roja-guia` |
| Donde se hable de recuperación después de entrenar | `los baños de hielo` | `/blogs/rendimiento/banos-de-hielo-guia` |
| Donde se hable de liberar tensión | `la pistola de masaje` | `/blogs/rendimiento/como-usar-pistola-de-masaje` |

**En las fichas de producto**, un enlace al artículo de su tecnología en la
descripción larga. Son cinco minutos por ficha y es el enlace interno de más
valor que tenéis, porque las fichas ya reciben tráfico:

| Ficha | Enlaza a |
|---|---|
| `panel-terapia-luz-roja-cuerpo-completo`, `dispositivo-terapia-luz-roja-portatil`, `lampara-profesional-luz-roja-soporte` | el artículo de luz roja |
| `banera-hielo-portatil-cold-plunge`, `banera-crioterapia-portatil-hielo` | el artículo de baños de hielo |
| `pistola-de-masaje` | el artículo de la pistola |
| `presoterapia-bps-plus`, `presoterapia-bps-pro`, `botas-presoterapia-luz-roja` | el artículo de presoterapia |

**En la descripción de cada colección**, una frase con enlace al pilar. Además de
SEO, es lo que aparece en el desplegable del menú.

**En el menú**, cuando los tres estén publicados: crear la entrada **Terapia**
que apunta al blog, con las cuatro etiquetas como hijas (paso 4 de
[MEGAMENU.md](MEGAMENU.md)). Con eso, el desplegable de escritorio y las pestañas
del móvil enseñan las categorías del blog y los dos últimos artículos.

---

## Calendario

| Semana | Qué |
|---|---|
| 0 | Validar las palabras clave en el Planificador. Poner precio al `Ice Bath` o despublicarlo. Decidir la firma |
| 1 | Escribir y publicar **luz roja**. Añadir su enlace en las tres fichas de luz roja y en el artículo de presoterapia |
| 3 | Escribir y publicar **baños de hielo**. Enlazar desde las dos fichas de frío y desde luz roja |
| 5 | Escribir y publicar **pistola de masaje**. Enlazar desde su ficha y desde los otros dos |
| 6 | Crear la entrada **Terapia** del menú. Enviar el sitemap en Search Console y pedir indexación de los tres |
| 8 | Mirar en Search Console qué consultas están entrando y **con eso** elegir los cuatro artículos del mes siguiente |

Ese último punto es el que importa: los artículos del segundo mes no se eligen
por intuición, se eligen leyendo por qué búsquedas ya te está enseñando Google.

---

## Los remates que no se ven

Todo esto ya está montado en el tema (GUIA-BLOG §5); solo hay que rellenarlo.

| Remate | Qué hacer en cada artículo |
|---|---|
| `Article` en JSON-LD | Automático. No hay que hacer nada |
| `FAQPage` | Rellenar el metacampo con las cinco preguntas de arriba |
| `BreadcrumbList` | Automático |
| Índice del artículo | Automático: el script lo pinta si hay tres o más `h2` |
| Etiquetas | Una principal y `Entrenamiento` como secundaria. Nada fuera del vocabulario de seis |
| Fecha de actualización | Cuando se revise un artículo, cambiar la fecha. Google lo tiene en cuenta y estos temas envejecen |
| Aviso legal | Los tres llevan el descargo al final. No es opcional en contenido de salud |
