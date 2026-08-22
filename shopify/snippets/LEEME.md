# Snippets modificados

## `card-product.liquid`

Es el `snippets/card-product.liquid` de **Dawn v15.4.1** con **once líneas
añadidas**, dos veces —una por cada rama del snippet: la tarjeta con foto y la
tarjeta sin foto—:

```liquid
{%- liquid
  assign bps_mf = card_product.metafields.custom.descripcion_corta
  if bps_mf == blank
    assign bps_mf = card_product.metafields.custom.custom_descripcion_corta
  endif
  assign bps_desc = ''
  if bps_mf != blank
    assign bps_desc = bps_mf.value
  endif
-%}
{%- if bps_desc != blank -%}
  <p class="bps-card__descripcion">{{ bps_desc }}</p>
{%- endif -%}
```

Dos detalles que no son casuales:

- **Prueba dos claves.** Shopify genera la clave del metacampo a partir del
  nombre que le das a la definición: si escribes `custom.descripcion_corta` en
  «Nombre», la clave que sale es `custom.custom_descripcion_corta`, con el
  `custom_` repetido. Y **las claves no se pueden renombrar** una vez creada la
  definición, así que se adapta el código.
- **El valor se saca en dos pasos y se imprime sin escapar**, para que funcione
  igual con «Texto de una sola línea», «Texto multilínea» y «Texto enriquecido».
  La primera versión hacía `.value | escape` y con texto enriquecido no imprimía
  nada aprovechable.

Van justo después del `</h3>` del titular y justo antes del
`<div class="card-information">`, que es donde el prototipo pone la descripción:
entre el nombre del producto y el precio.

**Para qué.** La tarjeta de producto de Dawn tiene título, proveedor, precio y
distintivos, y ningún campo para una descripción. El prototipo lleva una línea
gris debajo del título («Recuperación muscular profesional para piernas»). El
texto sale del metacampo de producto `custom.descripcion_corta`; si un producto
no lo tiene, no se imprime nada y la tarjeta queda exactamente igual que antes.

**Antes de subirlo** hay que crear la definición del metacampo en el admin, o el
`assign` no encontrará nada. Los tres pasos —metacampo, snippet y rellenar el
campo— están en [`../GUIA-SHOPIFY-PARTE-2.md`](../GUIA-SHOPIFY-PARTE-2.md) §H-2.

## `DIAGNOSTICO-metacampo.liquid`

Bloque **temporal** para cuando el snippet está bien puesto y la descripción no
sale. Se pega en lugar del bloque `bps_desc`, imprime el tipo del metacampo, su
valor y todas las claves que tiene el producto, y así se ve si el problema es la
clave, el tipo o el dato. Cómo leerlo, en
[`../GUIA-SHOPIFY-PARTE-2.md`](../GUIA-SHOPIFY-PARTE-2.md) §H-3. **No dejarlo
publicado.**

---

**Ojo:** este snippet lo usa media tienda —portada, colecciones, buscador y
productos relacionados—, así que un error aquí se ve en todas. El original sin
tocar está en [`../dawn-original/card-product.liquid`](../dawn-original/card-product.liquid).

El CSS de `.bps-card__descripcion` ya está en `bps-hyperice.css`: no hay que
añadir nada más.
