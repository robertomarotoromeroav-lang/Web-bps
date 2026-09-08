# Montar la tienda de México · orden de trabajo

Guía de ejecución. El **por qué** de cada decisión está en
[MEXICO.md](MEXICO.md); esto es el **cómo**, en el orden en que hay que hacerlo.

Parte de la opción recomendada allí: **tienda Shopify propia de país México en
`bpsperformance.mx`**, con el mismo diseño que el `.com`.

Documentos hermanos: [GUIA-SHOPIFY.md](GUIA-SHOPIFY.md) (los ajustes del tema, que
aquí se heredan hechos), [ARCHIVOS-MODIFICADOS.md](ARCHIVOS-MODIFICADOS.md),
[MEGAMENU.md](MEGAMENU.md), [SEO.md](SEO.md).

---

## Lo primero: la web no es el camino crítico

Hay tres frentes en paralelo, y **la web es el más rápido de los tres**. Si se
empieza por el dominio se llega a una tienda impecable que no puede vender.

| Frente | Quién | Bloquea el lanzamiento |
|---|---|---|
| **Legal y fiscal** · sociedad mexicana, RFC, CSD, cuenta bancaria con CLABE | Fiscalista mexicano | **Sí.** Sin RFC no hay Shopify Payments ni CFDI |
| **Producto** · clasificación arancelaria, certificación **NOM por modelo**, etiquetado y póliza de garantía, importación, serigrafía, almacén | Agente aduanal + organismo certificador | **Sí, y es el más largo.** Semanas o meses por modelo |
| **Web** · todo lo que hay debajo en este documento | Vosotros | No. Se hace en paralelo y espera lista |

**Las fases 1 a 5 de abajo se pueden hacer ya**, con la tienda protegida por
contraseña, sin depender de nada de lo anterior. Las fases 6 y 7 —pagos y
facturación— son las que esperan al RFC. La fase 12 —publicar— espera a la NOM.

Y una decisión de producto que hay que tomar antes de la fase 5: **con qué
referencias se lanza.** No van a estar las doce certificadas a la vez. Se lanza
con las que estén y el resto entra por olas.

---

## Fase 1 · Crear la tienda

*Selector de tiendas del panel de Shopify → **Añadir tienda** → Crear tienda
nueva.* Misma cuenta, factura aparte.

1. **País: México.** Es el ajuste más importante de toda la guía. El país del
   negocio es lo que habilita **Shopify Payments México** —con meses sin
   intereses y OXXO—, y cambiarlo después no es un ajuste trivial: afecta a los
   cobros y hay que pasar por soporte. **No se crea la tienda como España «y
   luego se cambia».**
2. *Configuración → General:*
   - Nombre: `BPS Performance México`.
   - Dirección de facturación: la de la sociedad mexicana.
   - **Divisa: MXN.** Formato de moneda con la convención mexicana:
     `$18,999.00` —coma para los miles, punto para los decimales—. Es al revés
     que en España, y es de los detalles que delatan una tienda clonada.
   - Zona horaria: Ciudad de México. Sistema métrico, peso en kg.
3. **Plan:** Basic para empezar. Los tres mercados que incluye no hacen falta
   aquí, pero el precio es el que es.
4. *Tienda online → Preferencias → **Restringir el acceso** con contraseña.* Se
   queda así hasta la fase 12. Todo el trabajo de abajo se hace en una tienda que
   nadie ve.

---

## Fase 2 · Dominio

1. Registrar **`bpsperformance.mx`** y, defensivamente, **`bpsperformance.com.mx`**.
   Los dos están abiertos sin requisito de presencia local.
2. *Configuración → Dominios → Conectar dominio existente* (o comprarlo desde
   Shopify, que ahorra la configuración de DNS).
3. `bpsperformance.mx` como **dominio principal**. `bpsperformance.com.mx`
   añadido y **redirigido** al principal.
4. **No** tocar nada de redirección geográfica en el `.com`. Ese sitio sigue
   igual; la unión entre los dos se hace en la fase 11, con `hreflang` y un
   selector de país, no con redirecciones.

---

## Fase 3 · Clonar el tema

El paso técnico de verdad. Son dos cosas distintas y hay que hacer **las dos, en
este orden**: una copia inicial que se lleva los ajustes hechos, y una conexión
que evita que a partir de ahora todo se haga dos veces.

### 3a · La copia inicial, por ZIP

1. Tienda **ES**: *Tienda online → Temas → ⋯ del tema publicado → **Descargar
   archivo de tema***. Shopify manda un enlace por correo al propietario.
2. Tienda **MX**: *Temas → Añadir tema → **Subir archivo zip***.

Esto se lleva el código **y `config/settings_data.json`**, o sea **todos los
ajustes de [GUIA-SHOPIFY.md](GUIA-SHOPIFY.md) ya hechos**: colores, tipografía,
las sombras a `0` en los diez apartados, botones píldora, el esquema del pie, la
cabecera. Son las 21 secciones de Configuración que no hay que repetir. Y se
lleva también los archivos a medida: `bps-hyperice.css`, `bps-hyperice.js`,
`bps-megamenu.liquid`, `bps-cajon.liquid`, el `card-product.liquid` parcheado y
el `footer.liquid`.

**Lo que NO viaja en el ZIP**, que es la lista que siempre se olvida:

| No viaja | Qué se rompe si se olvida |
|---|---|
| Productos, colecciones, páginas, blog, menús | Toda sección que referencie algo por ID sale **vacía**, porque los ID no coinciden entre tiendas |
| **Definiciones de metacampos** | `custom.descripcion_corta` no existe → las tarjetas de producto **pierden la descripción corta** que añade `card-product.liquid`, y sin error visible |
| **Navegación** | `bps-megamenu` se gobierna **entero** desde el menú principal: sin menú montado, no hay megamenú |
| Imágenes de *Contenido → Archivos* | El banner de la home y las fotos de colección apuntan al CDN de la otra tienda |
| Las cuatro páginas de `/policies/` | Hay que redactarlas, y en México son **otras** (fase 10) |
| Apps | Cada una se instala y se paga aparte |

### 3b · Conectar GitHub, para no mantener dos temas

Sin esto, cada ajuste de CSS se hace dos veces y en seis meses las tiendas no se
parecen. Es lo que hace sostenible «replicar».

**Aviso sobre este repositorio:** la integración de GitHub de Shopify **exige que
el tema esté en la raíz del repositorio** —`layout/`, `sections/`, `snippets/`,
`assets/`, `config/`, `locales/`, `templates/`— y **no admite subcarpetas**.
`Web-bps` tiene el prototipo estático en la raíz y solo fragmentos en `shopify/`,
así que **no se puede conectar tal cual**.

1. Crear un repositorio nuevo, p. ej. **`bps-tema`**, con el tema completo en la
   raíz. La forma limpia de sembrarlo es descomprimir el ZIP de la fase 3a.
2. Dos ramas: **`main`** → tienda `.com` · **`mx`** → tienda `.mx`.
3. En cada tienda: *Temas → Añadir tema → **Conectar desde GitHub*** → repositorio
   y rama correspondiente.
4. A partir de ahí, un arreglo en `assets/bps-hyperice.css` se hace **una vez** en
   `main` y se lleva a `mx` con un merge.

Tres cosas que conviene saber de esa integración antes de encenderla:

- **El editor de temas escribe en la rama.** Cualquier cambio que alguien haga
  desde *Personalizar* se commitea solo en la rama conectada. Es cómodo y es
  también la razón de que convenga no editar código a mano en el admin.
- **`config/settings_data.json` va a dar conflicto en cada merge**, porque
  contiene el contenido de las secciones y ese sí es distinto por país. Se
  resuelve siempre igual: quedarse con la versión de `mx`.
- `locales/` también divergirá, y a propósito (fase 10).

`Web-bps` sigue siendo lo que es: diseño, prototipo y documentación.

---

## Fase 4 · Reconstruir lo que el ZIP no trae

1. **Metacampos.** *Configuración → Metacampos y metaobjetos → Productos →
   Añadir definición*: `descripcion_corta`, texto de una línea.
   > Cuidado con la trampa que ya documenta [`snippets/LEEME.md`](snippets/LEEME.md):
   > Shopify deriva la clave del nombre, y si escribes `custom.descripcion_corta`
   > sale `custom.custom_descripcion_corta`, con el `custom_` repetido. **Las
   > claves no se pueden renombrar.** El snippet prueba las dos, pero mejor
   > crearla bien de entrada.
2. **Colecciones.** Las mismas cuatro que el `.com`, y aquí va la regla que
   condiciona la fase 11:
   > **Los *handles* de colecciones, productos y páginas tienen que ser
   > idénticos a los del `.com`.** Es lo que permite que el `hreflang` empareje
   > URL con URL sin mantener una tabla de equivalencias a mano.
   Cada colección con su **imagen**, porque el megamenú la lee de ahí.
3. **Navegación.** *Tienda online → Navegación → Menú principal*, con la
   jerarquía de [MEGAMENU.md](MEGAMENU.md) §Paso 2. Sin esto el megamenú no pinta
   nada. Y el enlace del blog directo a su URL final, sin pasar por redirección.
4. **Imágenes.** Subir a *Contenido → Archivos* de la tienda mexicana las que
   usan las secciones. No dejarlas apuntando al CDN del `.com`.
5. **Páginas:** `sobre-nosotros`, `contacto`, `faq`, y el blog con sus artículos
   si se van a traducir. Mismos handles.

---

## Fase 5 · Catálogo y precios

1. Tienda **ES**: *Productos → Exportar* → CSV, todos los productos.
2. **Antes de importar, recalcular los precios en la hoja de cálculo.** Esto es
   lo importante de la fase: el CSV lleva los precios en euros como números
   pelados, y si se importa tal cual quedan **los mismos números en pesos**.
   Columnas a rehacer: `Variant Price` y `Variant Compare At Price`.

   El cálculo, en este orden y no en otro:

   ```
   coste FOB del proveedor
   + flete y seguro hasta México
   + ARANCEL de su fracción arancelaria      ← el del decreto de 2026
   + serigrafía
   + certificación NOM del modelo, amortizada por unidades previstas
   + almacenaje y manipulación
   = coste puesto en almacén mexicano
   + margen objetivo
   × 1,16  (IVA)
   → redondeo psicológico:  $18,999 · $4,499 · $1,899
   ```

   **No** es el precio en euros por el tipo de cambio. Como el arancel mexicano a
   productos de países sin tratado es más alto que el europeo, es probable que
   varias referencias queden **por encima** de la conversión. Ver
   [MEXICO.md](MEXICO.md) §Parte 3.
3. **Mismos SKU** que en el `.com`, para poder comparar rotación entre países.
4. Tienda **MX**: *Productos → Importar* el CSV corregido.
5. **Publicar solo lo certificado y stockeado.** El resto se deja **sin publicar**
   —no «agotado»—, para que el `hreflang` de la fase 11 no apunte a un 404.
6. Rellenar `descripcion_corta` en cada producto, o las tarjetas saldrán sin ella.
7. Los campos de SEO del CSV **no** se dan por buenos: se reescriben en la fase 10.

---

## Fase 6 · Impuestos y facturación · *espera al RFC*

1. *Configuración → Impuestos y aranceles → México* → alta del registro fiscal,
   **IVA 16 %**.
2. En la misma pantalla: **«Todos los precios incluyen impuestos»** activado. Es
   la convención mexicana y es coherente con los precios calculados en la fase 5.
3. **Nada de aranceles ni DDP.** No hay envío internacional: no se activa el cobro
   de aranceles en el checkout ni hace falta Markets Pro.
4. **App de CFDI 4.0** (Factoro, gigstack, Facturama, Quiero Mi Factura).
   Configurar:
   - Conexión con el PAC y el **CSD** de la sociedad.
   - **Portal de autofacturación**, donde el cliente mete RFC, régimen fiscal y
     código postal fiscal. Mejor eso que ensuciar el checkout con campos
     fiscales que el 90 % no va a rellenar.
   - **Factura global** periódica para las ventas a público en general que no
     piden factura.
   - Enlace al portal en el correo de confirmación de pedido y en el pie.

---

## Fase 7 · Pagos · *espera al RFC y a la CLABE*

1. *Configuración → Pagos → Activar **Shopify Payments***. Piden acta
   constitutiva, RFC, CLABE de la cuenta mexicana e identificación del
   representante legal.
2. **Meses sin intereses.** Se configuran por número de mensualidades y **umbral
   mínimo de compra**. Es una decisión de margen, no de configuración: **el coste
   del diferido lo paga el comercio.** Punto de partida razonable con este
   catálogo:

   | Mensualidades | Desde |
   |---|---|
   | 3 y 6 MSI | ~$3,000 MXN |
   | 9 y 12 MSI | ~$10,000 MXN |

   Y comunicarlo donde se decide la compra: **en la ficha de producto**, no solo
   en el checkout.
3. **OXXO** activado, con una consecuencia operativa que hay que tener prevista:
   el pedido queda **pendiente** hasta que se paga en tienda, y puede tardar
   días. Decidir qué pasa con el stock reservado y cuándo se cancela.
4. **Apple Pay, Google Pay y Shop Pay** activados. El tráfico mexicano es
   mayoritariamente móvil.
5. Desactivar lo que no aplique (transferencia manual, contra reembolso) salvo
   decisión expresa.

---

## Fase 8 · Inventario y envíos

1. *Configuración → Ubicaciones* → **Almacén México**, con su dirección real.
   Es la única ubicación de esta tienda: no hay nada que enrutar.
2. *Configuración → Envíos y entregas → perfil general* → **zonas**:
   - Zona metropolitana.
   - Resto de la república.
   - Zonas extendidas del transportista, si las cobra aparte.
3. **Tarifas por precio del pedido**, en tramos, con el último tramo a **envío
   gratis** desde el umbral. Y el umbral **se calcula sobre lo que cuesta un
   envío nacional mexicano**; convertir el umbral español no tiene ningún
   sentido. Es la palanca de conversión más barata que hay: merece una hoja de
   cálculo propia, no un número redondo.
4. **Perfil de envío aparte para el producto voluminoso** —`BPS Ice Bath`,
   `BPS Recovery Pod`, `BPS Pro-Panel`—. No van en paquetería estándar y si
   comparten tarifa con las gafas, o se regala dinero o se mata el carrito
   pequeño.
5. Transportistas: cuentas directas (Estafeta, Paquetexpress, FedEx MX, DHL,
   99minutos) o un agregador con app (Skydropx, Envia.com). El agregador ahorra
   integración y da etiquetas desde el admin.

---

## Fase 9 · Idioma

El sitio no se traduce —ya está en español—, pero **el español de México no es el
de España**.

1. *Configuración → Idiomas*: dejar el español como idioma de la tienda. Al ser
   una tienda separada, el contenido mexicano vive directamente en los productos
   y las páginas: no hace falta un segundo idioma publicado.
2. Lo que sí hay que revisar es `locales/es.json` del tema, que trae las cadenas
   de interfaz de Dawn en español de España. Los términos de checkout, carrito y
   formularios conviene pasarlos por una lectura mexicana.

---

## Fase 10 · Contenido y textos en es-MX

Lo que más tiempo come, igual que el paso 6 de [GUIA-SHOPIFY.md](GUIA-SHOPIFY.md).

1. **Investigación de palabras clave para `es-MX`.** No es opcional y no es
   cosmético: la búsqueda mexicana usa otras palabras.

   | España | México |
   |---|---|
   | bañera de hielo | **tina** de hielo / tina de agua fría |
   | pistola de masaje | pistola **masajeadora** |
   | presoterapia | botas de **compresión** |
   | pagar a plazos | **a meses** / meses sin intereses |
   | coger, ordenador | tomar, computadora |

2. Con esas palabras, reescribir: **títulos y descripciones de los productos
   publicados**, las **cuatro colecciones** con sus ocho `H2` cada una (el patrón
   de [SEO.md](SEO.md) §Colecciones), la home, la FAQ y sobre-nosotros.
3. **Datos de contacto mexicanos**: teléfono `+52`, dirección, correo. Y el
   marcado de datos estructurados con **esos** datos, no los españoles. El
   `.com` tuvo justo ese fallo —el correo en otro dominio— y está corregido en
   [SEO.md](SEO.md); no heredarlo.
4. **Las cuatro páginas de `/policies/`, con abogado local.** No son
   traducciones:
   - **Devoluciones:** **no existe** el derecho de desistimiento de 14 días de
     la UE. Traducir la política española es a la vez inexacto y regalar una
     promesa comercial.
   - **Garantía:** póliza conforme a **NOM-024-SCFI**, con servicio y
     refacciones en México.
   - **Aviso de privacidad:** normativa mexicana de datos personales —que cambió
     en 2025—, no un RGPD traducido.
   - **Envíos:** plazos y zonas reales del transportista mexicano.
5. Barrido final de rastros españoles: `IVA 21`, `14 días`, `€`, `España`,
   `+34`, `Península y Baleares`.

---

## Fase 11 · SEO técnico y unión con el `.com`

1. **`hreflang` cruzado**, en `layout/theme.liquid` de **las dos** tiendas.
   Shopify lo inyecta solo entre subcarpetas del mismo dominio, **no entre
   dominios distintos**:

   ```liquid
   <link rel="alternate" hreflang="es-es" href="https://bpsperformance.com{{ request.path }}">
   <link rel="alternate" hreflang="es-mx" href="https://bpsperformance.mx{{ request.path }}">
   <link rel="alternate" hreflang="x-default" href="https://bpsperformance.com{{ request.path }}">
   ```

   Con dos condiciones:
   - Solo para URLs que existan **en las dos** tiendas. Como al principio en
     México habrá menos productos publicados, lo práctico es un snippet con la
     **lista blanca de handles compartidos** y emitir el `hreflang` solo si el
     handle actual está en ella. Un `hreflang` a un 404 es peor que no ponerlo.
   - Los handles idénticos de la fase 4 son lo que hace que esto sea una línea y
     no una tabla de equivalencias.
2. **Selector de país** en la cabecera y en el cajón móvil, con enlace cruzado.
3. **Banner de sugerencia** por geolocalización — «parece que estás en México,
   ¿quieres ir a bpsperformance.mx?» — y **nunca redirección automática**: rompe
   el rastreo de Google y molesta al visitante.
4. **Search Console:** propiedad nueva para `bpsperformance.mx`, con
   `bpsperformance.mx/sitemap.xml`.
5. **GA4:** flujo de datos nuevo. Merece propiedad aparte si se van a mirar los
   dos negocios por separado, que es lo normal.
6. Enlace desde el `.com` (pie o selector) para que el dominio nuevo no nazca
   huérfano, y **backlinks locales**: perfil de empresa en Google México, prensa
   y directorios mexicanos.
7. **No** poner canonical del `.mx` apuntando al `.com`. Son sitios distintos
   para países distintos; eso es lo que resuelve el `hreflang`.
8. Aplicar de entrada las **8 tareas abiertas de [SEO.md](SEO.md)** —empezando por
   el `noindex` de los tres tipos de página que no deberían indexarse— en lugar
   de heredar los mismos fallos en un dominio nuevo.

---

## Fase 12 · Pruebas antes de publicar

Con la tienda todavía con contraseña. Ninguna de estas se puede dar por hecha.

| # | Prueba | Qué se comprueba |
|---|---|---|
| 1 | **Pedido real de importe bajo** con tarjeta mexicana | Cobro, correo de confirmación y que el pago cae en la cuenta |
| 2 | **CFDI** de ese pedido | Que el portal de autofacturación emite bien, con RFC y régimen reales |
| 3 | **MSI** con tarjeta de crédito mexicana | Que aparecen las mensualidades y desde el umbral correcto. Los métodos locales conviene probarlos con pedido real, no en modo prueba |
| 4 | **OXXO** | Que genera la ficha, que el pedido queda pendiente y qué ocurre si no se paga |
| 5 | **Envíos** | Carritos de varios importes a dos destinos: que los tramos y el umbral de envío gratis salen como se calcularon |
| 6 | **Producto voluminoso** | Que coge su perfil de envío y no la tarifa estándar |
| 7 | **Megamenú y cajón** | Escritorio y móvil. Dependen del menú de la fase 4 |
| 8 | **Tarjetas de producto** | Que sale la descripción corta: si no, el metacampo de la fase 4 tiene la clave mal |
| 9 | **`hreflang`** con un rastreador | Que ninguna alternativa devuelve 404 |
| 10 | **Barrido de rastros** | Ni un `€`, ni un `IVA 21`, ni un `14 días`, ni un `+34` |
| 11 | **Móvil de verdad**, en un teléfono | Es de donde va a venir la mayoría del tráfico |

---

## Fase 13 · Publicar y las dos primeras semanas

1. *Tienda online → Preferencias* → quitar la contraseña. Título y descripción
   revisados.
2. Enviar el sitemap en Search Console.
3. Perfil de empresa en Google México, y el enlace desde el `.com`.
4. Vigilar cuatro números, que son los que dicen si la configuración está bien:
   - **Conversión por método de pago**, y el **uso real de MSI**. Si nadie los
     usa, el umbral está mal puesto.
   - **Pedidos OXXO caducados** sin pagar.
   - **Coste real de transporte contra tarifa cobrada**, tramo por tramo.
   - **Carritos abandonados por encima del umbral de envío gratis**: si hay
     muchos, el umbral está demasiado alto.

---

## Si todavía no hay sociedad mexicana

No se para el trabajo: se cambia el orden.

1. Hacer las fases **3a** y **3b** de todas formas. Sacar el tema a `bps-tema`
   con el tema en la raíz es útil hoy, con una sola tienda, y es la mitad del
   trabajo de la tienda mexicana cuando llegue.
2. Montar mientras tanto un **mercado de México en la tienda actual**, en
   subcarpeta `bpsperformance.com/es-mx`: *Configuración → Mercados → Añadir
   mercado*, moneda MXN con precios fijos, `hreflang` automático y coste cero.
   Sirve para medir demanda mientras avanzan las certificaciones NOM.
3. El trabajo de las fases 5, 10 y 11 —precios recalculados, textos en `es-MX`,
   palabras clave— **se reutiliza entero** cuando se abra la tienda mexicana. No
   se tira nada.
4. Y guardar `bpsperformance.mx` desde ya. Cuesta poco y no se recupera si lo
   coge otro.

---

## Fuentes

- [Integración de GitHub para temas de Shopify](https://shopify.dev/docs/storefronts/themes/tools/github) · [el tema debe estar en la raíz, sin subcarpetas](https://community.shopify.dev/t/github-theme-integration-subdirectory/11446)
- [Shopify Payments para México](https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries/mexico) · [métodos de pago: MSI y OXXO](https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries/mexico/payment-methods)
- [Asignar dominios e idiomas a mercados](https://help.shopify.com/en/manual/markets/customizations/domains-and-languages) · [SEO internacional de mercados](https://help.shopify.com/en/manual/markets/seo)
- [Certificación NOM de productos eléctricos](https://globadmonsc.com.mx/certificacion-nom-productos-electricos) · [NOM-024-SCFI-2013, etiquetado y garantía](https://www.normasoficiales.mx/nom/nom-024-scfi-2013)
- [Decreto de aranceles a países sin tratado, DOF 29-dic-2025](https://expansion.mx/economia/2025/12/29/mexico-decreto-cierra-puerta-barata-china-y-paises-sin-tlc) · [Reglas Generales de Comercio Exterior 2026, KPMG](https://kpmg.com/mx/es/tendencias/2026/01/flash-reglas-generales-de-comercio-exterior-para-2026.html)
- [CFDI 4.0 en Shopify México](https://pangostudio.com/cfdi-4-0-shopify-facturacion-electronica-mexico/)
