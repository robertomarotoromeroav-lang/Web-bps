# Vender en México · estrategia de dominio y configuración

Documento de decisión, no de ejecución. Responde a la propuesta del cliente:
*«compro al por mayor, serigrafío, almaceno en México, envío desde allí, y
replico bpsperformance.com en un .mx manteniendo textos, estilos y contenido,
cambiando solo los euros por pesos»*.

Documentos hermanos: [GUIA-SHOPIFY.md](GUIA-SHOPIFY.md) (el tema),
[SEO.md](SEO.md) (lo que queda del sitio actual).

---

## Respuesta corta

**El dominio `.mx` es la conclusión correcta. «Replicar la tienda» es el error, y
«cambiar solo los euros por pesos» es la parte que más dinero puede costar.**

Tres cosas separadas que conviene no mezclar:

| La pregunta | La respuesta |
|---|---|
| ¿Un dominio distinto para México? | **Sí**, si hay entidad mexicana. Y `.mx` es la elección correcta |
| ¿Una tienda distinta o un mercado de la actual? | **Tienda distinta**, y el motivo son los cobros y el SAT, no el SEO |
| ¿Mismos precios convertidos a pesos? | **No.** Ni el precio, ni el IVA, ni los textos, ni el catálogo |

Lo que **no** hay que hacer en ningún escenario: clonar el sitio en un `.mx`
con el mismo contenido palabra por palabra y sin `hreflang`. Eso son dos sitios
compitiendo entre sí en el mismo idioma por las mismas búsquedas.

---

## Lo que decide la arquitectura no es el SEO, es la estructura fiscal

La recomendación por defecto de Shopify —y la de cualquiera que responda sin
mirar el caso— es **una sola tienda con Shopify Markets**: un tema, un catálogo,
`hreflang` automático, autoridad de dominio consolidada y sin segunda
suscripción. Para el 80 % de las expansiones es lo correcto.

Este caso está en el 20 % restante, y por dos razones concretas.

### 1. Importar, almacenar y vender en México obliga a tener entidad mexicana

Comprar al por mayor, meter la mercancía en México con un pedimento, guardarla
en un almacén propio y venderla a consumidores mexicanos es **venta doméstica en
México**, no exportación desde España. Eso arrastra:

- **RFC** y alta en el SAT del vendedor.
- **IVA 16 %** en todas las ventas.
- **CFDI 4.0** en cada venta. Shopify **no emite CFDI de forma nativa**: hace
  falta un PAC o una app (Factoro, gigstack, Facturama, Quiero Mi Factura), y
  además la **factura global** para las ventas a público en general que no piden
  factura.
- **Importador de registro** para la importación al por mayor.
- Si lo serigrafiado es textil, **etiquetado NOM-004-SCFI**: etiqueta en
  español con composición, talla, país de origen y RFC del importador. Es un
  requisito de la mercancía física, no de la web, y es de los que más
  sorprenden.

Una entidad española que vende mercancía que ya está físicamente en México se
mete de lleno en el problema del establecimiento permanente. El vendedor tiene
que ser la sociedad mexicana. Y **una tienda Shopify se corresponde con una
entidad fiscal**: un país de la tienda, una cuenta de cobros, una contabilidad.

> Esto hay que cerrarlo con un fiscalista mexicano antes de tocar Shopify. Nada
> de lo de abajo arregla una estructura mal montada.

### 2. Shopify Payments México exige que la tienda esté ubicada en México

Textual del centro de ayuda: *«Your store must be located in Mexico to use
Shopify Payments»*. Y lo que da esa cuenta es justo lo que decide una venta en
México:

| Método | Por qué importa |
|---|---|
| **Meses sin intereses (MSI)** | **69 %** de los compradores digitales mexicanos lo tiene en cuenta al decidir la compra y **50 %** reconoce haber abandonado el carrito porque el sitio no lo ofrecía. Sube el ticket medio entre un 40 % y un 60 % |
| **OXXO** (pago en efectivo) | Alrededor del **14 %** del comercio electrónico nacional |
| Payouts en MXN | Sin comisión de conversión de divisa |

Con un mercado de México dentro de la tienda española **puedes cobrar en pesos,
pero con Shopify Payments de España**: tarjetas convertidas a euros con su
comisión de conversión, **sin MSI y sin OXXO**.

Con un catálogo de recuperación deportiva —bañeras de hielo a cuatro cifras,
pistolas de masaje, terapia de luz roja— renunciar a los meses sin intereses en
México no es un detalle de configuración. Es la mitad del carrito.

**La prueba que hay que hacer antes de decidir:** preguntar a Shopify si la
tienda actual (país España) puede activar una pasarela mexicana de terceros
—Mercado Pago México, Conekta, Openpay— que sí da MSI y OXXO. La lista de
pasarelas disponibles depende del país de la tienda, así que lo más probable es
que no aparezcan; y esas pasarelas piden RFC y CLABE mexicanos de todos modos.
**Si la respuesta fuera que sí, la opción de una sola tienda vuelve a la mesa** y
sale bastante más barata.

---

## Las tres opciones, con lo que cuesta cada una

### A · Mercado de México en la tienda actual (subcarpeta)

`bpsperformance.com/es-mx` · Markets está incluido en todos los planes de pago,
y el plan Basic trae 3 mercados.

**A favor:** un solo tema —importa, con el CSS y los snippets a medida que
tenéis—, un catálogo, `hreflang` automático, autoridad de dominio consolidada,
coste marginal cero.

**En contra:** sin MSI ni OXXO. Cobro en euros con conversión. Sin CFDI limpio
por entidad. Y no satisface lo que pide el cliente, que es una dirección `.mx`.

**Cuándo es la buena:** para **probar la demanda mexicana antes de montar la
sociedad**, enviando desde España o con un 3PL. Es la opción de tanteo.

### B · Tienda separada de país México en `bpsperformance.mx` ← recomendada

**A favor:** Shopify Payments México con MSI y OXXO, payouts en MXN,
contabilidad y CFDI de la entidad mexicana, catálogo y precios independientes,
y el `.mx` que el cliente quiere.

**En contra:** segunda suscripción, apps duplicadas, dominio que empieza con
autoridad cero, y `hreflang` entre dominios distintos que **Shopify no inyecta
solo** —hay que ponerlo a mano.

**El coste que sí se puede neutralizar:** mantener dos temas. Con la integración
de GitHub de Shopify, las dos tiendas apuntan a **ramas del mismo repositorio**,
así que un cambio en `bps-hyperice.css` se despliega en las dos. Sin eso, cada
ajuste de diseño se hace dos veces y a los seis meses las tiendas no se parecen.

### C · Subdominio `mx.bpsperformance.com`

Un punto intermedio que en la práctica reúne lo peor de los dos: Google trata el
subdominio casi como sitio aparte, así que no consolida autoridad como la
subcarpeta, y tampoco da la señal local ni el cobro local del `.mx`. Solo tiene
sentido si el cliente quiere una dirección propia pero se queda en una sola
tienda.

---

## La parte peligrosa: «cambiar solo los euros por pesos»

Esto no es una conversión, son cuatro decisiones distintas.

### 1. El IVA no es el mismo

El precio de escaparate de la tienda española lleva **IVA 21 % incluido**. En
México el IVA es **16 %** y la costumbre es igualmente mostrarlo incluido.
Convertir el precio final al cambio del día se lleva puesta esa diferencia:

| | España | Convertido al cambio | Correcto para México |
|---|---|---|---|
| Precio de escaparate | 1.999,00 € (IVA 21 %) | ≈ $40.000 MXN | — |
| Base sin impuestos | 1.652,07 € | — | 1.652,07 € |
| Con IVA mexicano 16 % | — | — | 1.916,40 € ≈ **$38.300 MXN** |

Un 4 % de sobreprecio regalado solo por arrastrar el IVA español. *(Cambio
ilustrativo ≈ 20 MXN/EUR; lo que importa es el método, no la cifra.)*

### 2. La estructura de costes mexicana es otra

Compra al por mayor, serigrafía local y almacén local. Eso **no** es el coste de
la tienda española, y el precio de México debería salir del margen real allí y
de lo que el mercado paga, no de una regla de tres sobre el precio europeo. Un
precio convertido al cambio suele quedar caro frente a la competencia local y
además baila cada semana con la divisa.

**En Shopify se resuelve con precios fijos, no con ajuste porcentual:** en el
catálogo del mercado (o en la tienda mexicana) se fija el precio producto a
producto, con redondeo psicológico —`$1.899`, no `$1.847,32`.

### 3. El catálogo no es el mismo

En el sitio actual hay 12 productos, y uno de ellos —la bañera de hielo a
1.999 €— está publicado con inventario a cero a propósito. **No todo se va a
almacenar en México.** Publicar el catálogo completo y que la mitad esté agotada
es peor que publicar seis productos disponibles.

Y una pregunta que hay que hacer al cliente: si lo que va a **serigrafiar** es
textil con la marca BPS, ese es un catálogo que **hoy no existe en el `.com`**.
En ese caso «replicar el contenido» no es lo que quiere, porque los productos
son otros.

### 4. Los textos: el español de México no es el de España

Aquí está la razón de SEO por la que copiar y pegar no funciona, y no tiene nada
que ver con el `hreflang`: **la búsqueda mexicana usa otras palabras.**

| España | México |
|---|---|
| bañera de hielo | **tina** de hielo / tina de agua fría |
| pistola de masaje | pistola **masajeadora** |
| pagar a plazos | **a meses** / meses sin intereses |
| envío gratis | envío gratis (igual, pero con umbral en MXN) |
| coger, camiseta, ordenador | tomar, playera, computadora |

Hay que hacer investigación de palabras clave para `es-MX` y reescribir títulos,
descripciones de colección y los `H2` de las cuatro colecciones con el
vocabulario local. **Los estilos se replican tal cual. Los textos se adaptan.**
En Shopify esto se hace con un idioma **«Español (México)»** publicado en ese
mercado o, en la tienda separada, directamente en el contenido.

### 5. Lo legal no se traduce, se reescribe

- **No existe** el derecho de desistimiento de 14 días de la UE. La política de
  devoluciones española traducida es, a la vez, inexacta y una promesa
  comercial que no hace falta dar.
- **PROFECO y la Ley Federal de Protección al Consumidor**: precios en MXN con
  IVA y sin cargos ocultos, condiciones de garantía visibles.
- **Aviso de privacidad** conforme a la normativa mexicana de datos personales
  —que cambió en 2025 con la desaparición del INAI—, no un RGPD traducido.

Las tres a revisar con abogado local. No son plantillas.

---

## Configuración de la opción B, paso a paso

### Dominios

1. Registrar **`bpsperformance.mx`** y también **`bpsperformance.com.mx`**
   defensivamente. Ambos están abiertos sin requisito de presencia local y
   cuestan poco. Uno se usa, el otro redirige con 301.
2. Conectarlo a la tienda mexicana como dominio principal.
3. **No** redirigir `.com` a `.mx` por geolocalización de servidor: mata el
   rastreo de Google y molesta al visitante. Banner de sugerencia y selector de
   país, que además ya encajan en la cabecera y el cajón que tenéis.

### Tienda

4. Tienda nueva con **país México**, moneda MXN y zona horaria.
5. **Mismo Dawn 15.4.1** que el `.com`, para que los snippets y el CSS a medida
   funcionen sin adaptación.
6. **Integración de GitHub** de Shopify: las dos tiendas contra ramas de este
   repositorio. Es la pieza que evita que «replicar» se convierta en mantener
   dos sitios distintos.
7. Productos por **exportación CSV** del `.com` → importación → borrar lo que no
   se stockea → reescribir precios en MXN y textos a `es-MX`.
8. **Impuestos:** registro fiscal mexicano, IVA 16 % **incluido en el precio
   mostrado**.
9. **CFDI:** app de facturación 4.0 con autofacturación para el cliente y
   factura global. Presupuestar entre 20 y 50 USD al mes.
10. **Pagos:** Shopify Payments México → tarjetas, **MSI**, **OXXO**, Apple Pay,
    Google Pay. Los MSI se configuran por número de mensualidades y umbral
    mínimo de compra: es una decisión de margen, porque el coste del diferido lo
    paga el comercio.
11. **Envíos:** transportistas locales (Estafeta, Paquetexpress, FedEx MX, DHL,
    99minutos) o un agregador con app de Shopify (Skydropx, Envia.com). Umbral
    de envío gratis pensado en pesos, no convertido.

### SEO del dominio nuevo

12. **`hreflang` cruzado a mano** en el `theme.liquid` de **las dos** tiendas.
    Shopify lo inyecta solo en subcarpetas del mismo dominio, no entre dominios
    distintos:

    ```liquid
    <link rel="alternate" hreflang="es-es" href="https://bpsperformance.com{{ request.path }}">
    <link rel="alternate" hreflang="es-mx" href="https://bpsperformance.mx{{ request.path }}">
    <link rel="alternate" hreflang="x-default" href="https://bpsperformance.com{{ request.path }}">
    ```

    Con la salvedad de que solo debe emitirse para URLs que existan en las dos
    tiendas: apuntar a un producto que en México no se publica es un
    `hreflang` roto.
13. Propiedad nueva en **Search Console** para `.mx`, con su sitemap.
14. Enlaces internos desde el `.com` (pie o selector de país) para que el
    dominio nuevo no nazca huérfano, y **backlinks locales**: perfil de empresa
    en Google México, prensa y directorios mexicanos.
15. Aplicar de entrada las correcciones que en el `.com` todavía están abiertas
    —las 8 tareas de [SEO.md](SEO.md)— en lugar de heredarlas.

---

## Coste incremental aproximado, al mes

| Concepto | Estimación |
|---|---|
| Segunda suscripción de Shopify | 39–105 USD |
| App de CFDI 4.0 | 20–50 USD |
| Apps duplicadas (reseñas, envíos) | 20–60 USD |
| Dominios `.mx` + `.com.mx` | ~30–60 USD al año |

No es la cifra que decide: la decide el margen que se pierde sin meses sin
intereses. Con un ticket medio alto, un solo pedido recuperado al mes paga la
segunda tienda.

---

## Recomendación

**Opción B: tienda de país México en `bpsperformance.mx`, con el tema
desplegado desde este mismo repositorio.** El `.mx` que propone el cliente es la
elección correcta; lo que hay que corregir de su planteamiento es que no es
«replicar el `.com`», sino **el mismo diseño con otra tienda debajo**: mismos
estilos y misma estructura, y catálogo, precios, textos y legales propios.

**Si todavía no hay sociedad mexicana constituida**, empezad por la opción A
—mercado de México en subcarpeta— para medir demanda con coste cero, y montad la
tienda mexicana cuando la entidad exista. Es el orden que menos dinero arriesga.

### Para cerrarlo hacen falta tres respuestas del cliente

1. **¿Hay sociedad mexicana con RFC, o está por constituir?** Es lo que decide
   entre A y B.
2. **¿Qué se va a serigrafiar y almacenar exactamente?** Si es textil de marca,
   el catálogo mexicano no es el del `.com` y hay que diseñarlo, además del
   etiquetado NOM.
3. **¿Los meses sin intereses son negociables?** Si dice que sí, la opción A se
   sostiene mucho más tiempo y ahorra la segunda tienda.

---

## Fuentes

- [Shopify Payments para México](https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries/mexico) · [métodos de pago](https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries/mexico/payment-methods)
- [Asignar dominios e idiomas a mercados](https://help.shopify.com/en/manual/markets/customizations/domains-and-languages) · [SEO internacional de mercados](https://help.shopify.com/en/manual/markets/seo) · [catálogos de mercado](https://help.shopify.com/en/manual/markets/customizations/catalogs)
- [Meses sin intereses y decisión de compra](https://infochannel.info/meses-sin-intereses-ya-condicionan-las-compras-en-linea/) · [OXXO Pay y pagos locales en México](https://www.nuvei.com/posts/mexico-e-commerce-unlock-payment-performance-with-local-acquiring-oxxo-pay-spei-and-installments)
- [CFDI 4.0 en Shopify México](https://pangostudio.com/cfdi-4-0-shopify-facturacion-electronica-mexico/)
