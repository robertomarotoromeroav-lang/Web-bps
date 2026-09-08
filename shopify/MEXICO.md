# Vender en México · estrategia de dominio y configuración

Documento de decisión, no de ejecución. Responde a la propuesta del cliente:
*«replico bpsperformance.com en un .mx manteniendo textos, estilos y contenido,
cambiando solo los euros por pesos»*.

**El cómo está en [GUIA-MEXICO.md](GUIA-MEXICO.md)**: las 13 fases de montar la
tienda mexicana, en orden. Este documento es el por qué.

Documentos hermanos: [GUIA-SHOPIFY.md](GUIA-SHOPIFY.md) (el tema),
[SEO.md](SEO.md) (lo que queda del sitio actual).

---

## El modelo de negocio, tal como es

Conviene dejarlo escrito porque de aquí sale todo lo demás.

**Lo que ve el cliente final:** una tienda de producto propio BPS. Entra, compra,
y le llega desde un almacén nacional con gastos de envío según el importe del
carrito y el destino. Nada más.

**Lo que no ve:** BPS compra el producto al por mayor en plataformas tipo
Alibaba, lo manda a serigrafiar con su marca y lo almacena. Hoy, en España.

**Lo que se replica en México:** exactamente esa cadena, pero completa y local.
Compra al por mayor → serigrafía → **almacén en México** → envío nacional
mexicano. **No se envía nada desde España.**

De esto salen dos consecuencias que mandan sobre todo el resto:

1. **Los productos son los mismos.** Mismo catálogo, mismas fichas, mismas
   fotos, mismo diseño. La parte de «replicar contenido» que pide el cliente es
   legítima, y el aprovisionamiento es invisible para la web.
2. **La operación mexicana es 100 % doméstica.** Cero envío transfronterizo,
   cero aduana para el comprador, cero aranceles en el checkout. Pero también:
   **BPS es importador y vendedor local en México**, con todo lo que eso arrastra.

---

## Respuesta corta

**El dominio `.mx` es la conclusión correcta. «Replicar la tienda» es el error de
método, y «cambiar solo los euros por pesos» es el error que cuesta dinero.**

| La pregunta | La respuesta |
|---|---|
| ¿Un dominio distinto para México? | **Sí**, y `.mx` es la elección correcta |
| ¿Una tienda distinta o un mercado de la actual? | **Tienda distinta**, y el motivo son los cobros y el SAT, no el SEO |
| ¿Mismo diseño, misma estructura, mismas fichas? | **Sí.** Eso se replica, y además se puede mantener desde un solo repositorio |
| ¿Mismos precios convertidos a pesos? | **No.** Y probablemente hacia arriba, no hacia abajo |

Lo que no hay que hacer en ningún escenario: clonar el sitio en un `.mx` con el
mismo texto palabra por palabra y sin `hreflang`. Serían dos sitios compitiendo
entre sí en el mismo idioma por las mismas búsquedas.

---

## Parte 1 · La arquitectura la decide la estructura fiscal, no el SEO

La recomendación por defecto de Shopify —y la de cualquiera que responda sin
mirar el caso— es **una sola tienda con Shopify Markets**: un tema, un catálogo,
`hreflang` automático, autoridad de dominio consolidada, sin segunda
suscripción. Para el 80 % de las expansiones es lo correcto.

Este caso está en el 20 % restante, por dos razones concretas.

### 1. Importar, almacenar y vender en México obliga a entidad mexicana

Al no haber envío desde España, **no hay exportación**: hay una importación de
BPS a México y después ventas domésticas mexicanas. Eso arrastra:

- **RFC** y alta en el SAT del vendedor.
- **IVA 16 %** en todas las ventas.
- **CFDI 4.0** en cada venta. Shopify **no lo emite de forma nativa**: hace falta
  un PAC o una app (Factoro, gigstack, Facturama, Quiero Mi Factura), con
  autofacturación para el cliente y **factura global** para las ventas a público
  en general que no piden factura.
- **Importador de registro** y pedimento para la compra al por mayor.

Una sociedad española que vende mercancía que ya está físicamente en México se
mete de lleno en el problema del establecimiento permanente. El vendedor tiene
que ser la sociedad mexicana. Y **una tienda Shopify se corresponde con una
entidad fiscal**: un país, una cuenta de cobros, una contabilidad.

> Esto se cierra con un fiscalista mexicano antes de tocar Shopify. Nada de lo
> de abajo arregla una estructura mal montada.

### 2. Shopify Payments México exige que la tienda esté ubicada en México

Textual del centro de ayuda: *«Your store must be located in Mexico to use
Shopify Payments»*. Y lo que da esa cuenta es justo lo que decide una venta en
México:

| Método | Por qué importa |
|---|---|
| **Meses sin intereses (MSI)** | **69 %** de los compradores digitales mexicanos lo tiene en cuenta al decidir y **50 %** ha abandonado un carrito porque el sitio no lo ofrecía. Sube el ticket medio entre un 40 % y un 60 % |
| **OXXO** (pago en efectivo) | Alrededor del **14 %** del comercio electrónico nacional |
| Payouts en MXN | Sin comisión de conversión de divisa |

Con un mercado de México dentro de la tienda española **puedes cobrar en pesos,
pero con Shopify Payments de España**: tarjeta convertida a euros con su comisión
de conversión, **sin MSI y sin OXXO**.

Con este catálogo —de 90 € a 1.999 €, con seis referencias por encima de 500 €—
renunciar a los meses sin intereses en México no es un detalle de configuración.
Es la mitad del carrito.

**La prueba que hay que hacer antes de decidir:** preguntar a Shopify si la
tienda actual (país España) puede activar una pasarela mexicana de terceros
—Mercado Pago México, Conekta, Openpay— que sí da MSI y OXXO. La lista de
pasarelas depende del país de la tienda, así que lo más probable es que no
aparezcan; y esas pasarelas piden RFC y CLABE mexicanos de todos modos. **Si la
respuesta fuera que sí, la opción de una sola tienda vuelve a la mesa** y sale
bastante más barata.

---

## Parte 2 · Las tres opciones de dominio

### A · Mercado de México en la tienda actual (subcarpeta)

`bpsperformance.com/es-mx` · Markets está incluido en todos los planes de pago, y
el plan Basic trae 3 mercados.

**A favor:** un solo tema —importa, con el CSS y los snippets a medida que
tenéis—, un catálogo, `hreflang` automático, autoridad consolidada, coste
marginal cero.

**En contra:** sin MSI ni OXXO. Cobro convertido a euros. Sin CFDI limpio por
entidad. Y no da la dirección `.mx` que pide el cliente.

**Cuándo es la buena:** para **tantear la demanda mexicana antes de constituir la
sociedad**, enviando desde España o con un 3PL. Es la opción de prueba.

### B · Tienda separada de país México en `bpsperformance.mx` ← recomendada

**A favor:** Shopify Payments México con MSI y OXXO, payouts en MXN, CFDI y
contabilidad de la entidad mexicana, precios e inventario independientes, y el
`.mx` que el cliente quiere.

**En contra:** segunda suscripción, apps duplicadas, dominio que empieza con
autoridad cero, y `hreflang` entre dominios distintos que **Shopify no inyecta
solo** —hay que ponerlo a mano.

**El coste que sí se puede neutralizar —y es el importante—:** mantener dos
temas. Con la integración de GitHub de Shopify, las dos tiendas apuntan a
**ramas del mismo repositorio**, así que un cambio en `bps-hyperice.css` o en
`bps-megamenu.liquid` se despliega en las dos. Sin eso, cada ajuste de diseño se
hace dos veces y a los seis meses las tiendas no se parecen. **Esto es lo que
convierte «replicar» en algo sostenible.**

### C · Subdominio `mx.bpsperformance.com`

En la práctica reúne lo peor de las dos: Google trata el subdominio casi como
sitio aparte, así que no consolida autoridad como la subcarpeta, y tampoco da la
señal local ni el cobro local del `.mx`. Solo tiene sentido si el cliente quiere
dirección propia pero se queda en una sola tienda.

---

## Parte 3 · La parte peligrosa: «cambiar solo los euros por pesos»

Aquí es donde el modelo de negocio, que es idéntico de puertas afuera, deja de
ser idéntico por dentro. Son cinco decisiones distintas, no una conversión.

### 1. El coste de la mercancía en México va a ser MÁS alto que en España

Esto es lo que más cambia respecto a la intuición. El **decreto publicado en el
DOF el 29 de diciembre de 2025**, en vigor desde el **1 de enero de 2026**,
modifica **1.463 fracciones arancelarias** y aplica aranceles del **5 % al 50 %**
a productos de países sin tratado de libre comercio con México —China entre
ellos—. El arancel medio para esos países pasa **del 10 % al 35 %**, y el listado
incluye expresamente **electrodomésticos y aparatos eléctricos**.

Es decir: la misma compra en Alibaba que hoy entra en España con un arancel UE
pequeño, en México entra con un arancel que puede ser de dos dígitos altos.

**Consecuencia práctica:** el precio mexicano no se calcula con una regla de tres
sobre el precio europeo. Hay que **clasificar cada producto en su fracción
arancelaria**, ver el arancel que le toca y recalcular el coste puesto en almacén
mexicano. Es perfectamente posible que el precio correcto en pesos quede **por
encima** de la conversión al cambio, no por debajo.

Dos avisos:

- El decreto es **temporal**: los transitorios lo acaban el **31 de diciembre de
  2026**. Lo que se calcule ahora hay que revisarlo.
- Si el arancel mata el margen de alguna referencia, la salida es de compras, no
  de web: buscar proveedor en un país con tratado. Que es una decisión que hay
  que tomar **antes** de montar la tienda, no después.

### 2. La certificación NOM es el verdadero cuello de botella, y no está en la web

De las doce referencias, la mayoría son **aparatos eléctricos**: `BPS Pro-Panel`
y `BPS Red Light Mini` (paneles de luz), la pistola de masaje, `BPS Fusion Boots`
(presoterapia), `BPS Ice Bath` y `BPS Recovery Pod` (enfriadores). Para
importarlos y venderlos en México hace falta:

| Norma | Qué exige |
|---|---|
| **NOM-001-SCFI-2018** / **NOM-003-SCFI-2014** | Seguridad de aparatos electrónicos y productos eléctricos. Certificación **por modelo**, con organismo acreditado en México |
| **NOM-024-SCFI-2013** | Información comercial obligatoria en empaque, instructivo y **póliza de garantía**, en español, con datos del importador |

Y por la Ley Federal de Protección al Consumidor, la póliza de garantía implica
**servicio y refacciones disponibles en México**.

**El marcado CE europeo no sirve.** Es un proceso nuevo, por modelo, con coste y
plazo propios, que hay que amortizar en el precio. Esto es lo que puede retrasar
el lanzamiento meses, y no aparece en ninguna pantalla de Shopify.

**Decisión que sale de aquí:** probablemente no se lanza con las doce
referencias. Se lanza con las que ya estén certificadas y stockeadas, y el resto
entra por olas.

### 3. El IVA no es el mismo, y arrastrarlo es regalar margen

El precio de escaparate del `.com` lleva **IVA 21 % incluido**. En México el IVA
es **16 %** y la costumbre es igualmente mostrarlo incluido. Convertir el precio
final al cambio del día se lleva puesta esa diferencia:

| | España | Convertido al cambio | Calculado para México |
|---|---|---|---|
| Precio de escaparate | 999,00 € (IVA 21 %) | ≈ $19.980 MXN | — |
| Base sin impuestos | 825,62 € | — | 825,62 € |
| Con IVA mexicano 16 % | — | — | 957,72 € ≈ **$19.150 MXN** |

Un 4 % de sobreprecio regalado solo por arrastrar el IVA español. *(Cambio
ilustrativo ≈ 20 MXN/EUR; importa el método, no la cifra.)* El cálculo correcto
es: **coste puesto en México con arancel → margen → IVA 16 % → redondeo.** En ese
orden.

### 4. En Shopify, precios fijos y no ajuste porcentual

Un precio convertido al cambio baila cada semana con la divisa y da cifras como
`$19.148,37`. Tanto en el catálogo de mercado (opción A) como en la tienda
mexicana (opción B) el precio se fija **producto a producto**, con redondeo
psicológico: `$18.999`, no `$19.148,37`.

Lo mismo para **el umbral de envío gratis**, que en este negocio es una palanca de
conversión: se recalcula sobre lo que cuesta un envío nacional mexicano, no se
convierte el umbral español.

### 5. Los textos: el español de México no es el de España

La razón de SEO por la que copiar y pegar no funciona, y no tiene nada que ver
con el `hreflang`: **la búsqueda mexicana usa otras palabras.**

| España | México |
|---|---|
| bañera de hielo | **tina** de hielo / tina de agua fría |
| pistola de masaje | pistola **masajeadora** |
| presoterapia | botas de **compresión** |
| pagar a plazos | **a meses** / meses sin intereses |
| coger, ordenador | tomar, computadora |

Hay que hacer investigación de palabras clave para `es-MX` y reescribir títulos,
descripciones y los `H2` de las cuatro colecciones con el vocabulario local.
**Los estilos y la estructura se replican tal cual. Los textos se adaptan.** En
Shopify, con un idioma **«Español (México)»** publicado en ese mercado, o
directamente en el contenido de la tienda separada.

### Y lo legal no se traduce, se reescribe

- **No existe** el derecho de desistimiento de 14 días de la UE. La política de
  devoluciones española traducida es a la vez inexacta y una promesa comercial
  que no hace falta dar.
- **PROFECO y la Ley Federal de Protección al Consumidor**: precios en MXN con
  IVA y sin cargos ocultos, y la póliza de garantía del punto 2.
- **Aviso de privacidad** conforme a la normativa mexicana de datos personales
  —que cambió en 2025 con la desaparición del INAI—, no un RGPD traducido.

Las cuatro páginas de `/policies/` del `.com` se rehacen con abogado local. No
son plantillas.

---

## Parte 4 · Configuración de la opción B, en resumen

> Esto es el mapa. El orden de trabajo completo, fase por fase, con las
> dependencias y las pruebas, está en **[GUIA-MEXICO.md](GUIA-MEXICO.md)**.

### Dominios

1. Registrar **`bpsperformance.mx`** y también **`bpsperformance.com.mx`**
   defensivamente. Ambos están abiertos sin requisito de presencia local y
   cuestan poco. Uno se usa, el otro redirige con 301.
2. Conectarlo a la tienda mexicana como dominio principal.
3. **No** redirigir `.com` a `.mx` por geolocalización de servidor: estropea el
   rastreo de Google y molesta al visitante. Banner de sugerencia y selector de
   país, que además encajan en la cabecera y el cajón que ya tenéis.

### Tienda

4. Tienda nueva con **país México**, moneda MXN y zona horaria.
5. **Mismo Dawn 15.4.1** que el `.com`, para que los snippets y el CSS a medida
   funcionen sin adaptación.
6. **Integración de GitHub** de Shopify: las dos tiendas contra ramas de este
   repositorio. Es la pieza que evita que «replicar» se convierta en mantener dos
   sitios distintos.
7. Productos por **exportación CSV** del `.com` → importación → publicar solo lo
   certificado y stockeado → precios en MXN y textos a `es-MX`.
8. **Impuestos:** registro fiscal mexicano, IVA 16 % **incluido en el precio
   mostrado**.
9. **CFDI:** app de facturación 4.0 con autofacturación y factura global.
   Presupuestar entre 20 y 50 USD al mes.
10. **Pagos:** Shopify Payments México → tarjetas, **MSI**, **OXXO**, Apple Pay,
    Google Pay. Los MSI se configuran por número de mensualidades y umbral mínimo
    de compra: es una decisión de margen, porque **el coste del diferido lo paga
    el comercio**. Con este ticket medio, 3 y 6 meses sin intereses a partir de
    cierto importe es el punto de partida razonable.
11. **Envíos:** todo doméstico, así que **nada de Markets Pro, aranceles ni DDP**.
    Transportistas locales (Estafeta, Paquetexpress, FedEx MX, DHL, 99minutos) o
    un agregador con app de Shopify (Skydropx, Envia.com). Tarifas por zona
    —área metropolitana, resto del país— y tramos por importe de carrito, más el
    umbral de envío gratis del punto 4 de arriba.

### SEO del dominio nuevo

12. **`hreflang` cruzado a mano** en el `theme.liquid` de **las dos** tiendas.
    Shopify lo inyecta solo en subcarpetas del mismo dominio, no entre dominios
    distintos:

    ```liquid
    <link rel="alternate" hreflang="es-es" href="https://bpsperformance.com{{ request.path }}">
    <link rel="alternate" hreflang="es-mx" href="https://bpsperformance.mx{{ request.path }}">
    <link rel="alternate" hreflang="x-default" href="https://bpsperformance.com{{ request.path }}">
    ```

    Con una salvedad: solo debe emitirse para URLs que existan en las dos
    tiendas. Apuntar a un producto que en México no está publicado —y al
    principio habrá varios— es un `hreflang` roto.
13. Propiedad nueva en **Search Console** para `.mx`, con su sitemap.
14. Enlaces internos desde el `.com` (pie o selector de país) para que el dominio
    nuevo no nazca huérfano, y **backlinks locales**: perfil de empresa en Google
    México, prensa y directorios mexicanos.
15. Aplicar de entrada las correcciones que en el `.com` siguen abiertas —las 8
    tareas de [SEO.md](SEO.md)— en lugar de heredarlas.

---

## Coste incremental aproximado, al mes

| Concepto | Estimación |
|---|---|
| Segunda suscripción de Shopify | 39–105 USD |
| App de CFDI 4.0 | 20–50 USD |
| Apps duplicadas (reseñas, envíos) | 20–60 USD |
| Dominios `.mx` + `.com.mx` | ~30–60 USD al año |

No es la cifra que decide nada. Al lado de la certificación NOM por modelo y del
arancel de importación, la infraestructura web es la parte barata del proyecto.

---

## Recomendación

**Opción B: tienda de país México en `bpsperformance.mx`, con el tema desplegado
desde este mismo repositorio.** El `.mx` que propone el cliente es la elección
correcta, y su instinto de «mantener textos, estilos y contenido» también: el
diseño, la estructura y las fichas se replican, y con la integración de GitHub se
mantienen una sola vez.

Lo que hay que corregir de su planteamiento es el orden de magnitud del trabajo
que hay debajo. **Replicar el sitio es la semana fácil.** Lo que marca la fecha de
lanzamiento es la certificación NOM de los aparatos eléctricos y el recálculo del
coste con el arancel mexicano de 2026 — y de ahí sale el precio en pesos, no de
una conversión.

**Si todavía no hay sociedad mexicana constituida**, empezad por la opción A
—mercado de México en subcarpeta— para medir demanda con coste cero mientras
avanzan las certificaciones, y montad la tienda mexicana cuando la entidad
exista. Es el orden que menos dinero arriesga.

### Para cerrarlo hacen falta tres respuestas

1. **¿Hay sociedad mexicana con RFC, o está por constituir?** Es lo que decide
   entre A y B, y no es una decisión de web.
2. **¿Se ha mirado ya la certificación NOM de los productos eléctricos?** Es el
   camino crítico del proyecto. Si la respuesta es que no, el orden correcto es
   empezar por ahí y con qué referencias, no por el dominio.
3. **¿Los meses sin intereses son negociables?** Si dice que sí, la opción A se
   sostiene mucho más tiempo y ahorra la segunda tienda.

---

## Fuentes

- [Shopify Payments para México](https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries/mexico) · [métodos de pago](https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries/mexico/payment-methods)
- [Asignar dominios e idiomas a mercados](https://help.shopify.com/en/manual/markets/customizations/domains-and-languages) · [SEO internacional de mercados](https://help.shopify.com/en/manual/markets/seo) · [catálogos de mercado](https://help.shopify.com/en/manual/markets/customizations/catalogs)
- [Decreto de aranceles a países sin tratado, DOF 29-dic-2025](https://expansion.mx/economia/2025/12/29/mexico-decreto-cierra-puerta-barata-china-y-paises-sin-tlc) · [lista de productos y tasas](https://www.informador.mx/economia/aranceles-dof-publica-lista-de-productos-que-tendran-impuesto-de-hasta-el-50-en-2026-20251229-0036.html) · [Reglas Generales de Comercio Exterior 2026, KPMG](https://kpmg.com/mx/es/tendencias/2026/01/flash-reglas-generales-de-comercio-exterior-para-2026.html)
- [Certificación NOM de productos eléctricos](https://globadmonsc.com.mx/certificacion-nom-productos-electricos) · [NOM-024-SCFI-2013, etiquetado y garantía](https://www.normasoficiales.mx/nom/nom-024-scfi-2013) · [NOM-003-SCFI-2014](https://www.gob.mx/cms/uploads/attachment/file/483864/Norma_Oficial_Mexicana_NOM-003-SCFI-2014_Productos_el_Ectricos-Especificaciones_de_seguridad.pdf)
- [Meses sin intereses y decisión de compra](https://infochannel.info/meses-sin-intereses-ya-condicionan-las-compras-en-linea/) · [OXXO Pay y pagos locales en México](https://www.nuvei.com/posts/mexico-e-commerce-unlock-payment-performance-with-local-acquiring-oxxo-pay-spei-and-installments)
- [CFDI 4.0 en Shopify México](https://pangostudio.com/cfdi-4-0-shopify-facturacion-electronica-mexico/)
