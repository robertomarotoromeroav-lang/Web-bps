# Snippets modificados

## `card-product.liquid`

Es el `snippets/card-product.liquid` de **Dawn v15.4.1** con **once líneas
añadidas**, dos veces —una por cada rama del snippet: la tarjeta con foto y la
tarjeta sin foto—:

```liquid
{%- assign bps_desc = card_product.metafields.custom.descripcion_corta.value -%}
{%- if bps_desc != blank -%}
  <p class="bps-card__descripcion">{{ bps_desc | escape }}</p>
{%- endif -%}
```

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

**Ojo:** este snippet lo usa media tienda —portada, colecciones, buscador y
productos relacionados—, así que un error aquí se ve en todas. El original sin
tocar está en [`../dawn-original/card-product.liquid`](../dawn-original/card-product.liquid).

El CSS de `.bps-card__descripcion` ya está en `bps-hyperice.css`: no hay que
añadir nada más.
