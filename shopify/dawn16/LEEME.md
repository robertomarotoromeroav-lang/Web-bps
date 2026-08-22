# Archivos listos para Dawn 16.0.0

Los dos archivos de tema que hay que modificar, ya preparados **sobre el código
de Dawn 16.0.0**. Cópialos enteros sobre los del tema nuevo.

```
card-product.liquid   → snippets/card-product.liquid
footer.liquid         → sections/footer.liquid
```

- **`card-product.liquid`** lleva la descripción corta de la tarjeta. En v16 los
  dos puntos de inserción están en las líneas 127 y 164 —en v15 eran 125 y 162—,
  con la misma sangría y el mismo contexto, así que el añadido es idéntico.
- **`footer.liquid`** lleva la etiqueta del botón del boletín, la nota legal y la
  caja de contacto. **El original de Dawn no cambió entre 15.4.1 y 16.0.0**
  (mismo MD5), así que este archivo es el mismo que el de `../sections/`.

Los originales sin tocar de v15.4.1 están en `../dawn-original/`. El
procedimiento completo de actualización, y qué se comprobó para dar Dawn 16 por
compatible, en [`../GUIA-SHOPIFY-PARTE-2.md`](../GUIA-SHOPIFY-PARTE-2.md) §I.
