# Archivos originales de Dawn

Copias **sin modificar**, tomadas de la etiqueta **v15.4.1** del repositorio
oficial `Shopify/dawn` — la misma versión que corre en bpsperformance.com.

```
image-banner.liquid      507 líneas
image-with-text.liquid   487 líneas
contact-form.liquid      218 líneas
card-product.liquid      624 líneas   ← este es distinto, ver abajo
```

Las **tres primeras** están aquí porque en la tienda tienen el botón nativo
sustituido por uno con borde degradado.

`card-product.liquid` está por otro motivo: en la tienda **no está tocado**, pero
hay que tocarlo a propósito para añadirle la descripción corta de la tarjeta. La
versión modificada está en [`../snippets/card-product.liquid`](../snippets/card-product.liquid)
y el procedimiento en [`../GUIA-SHOPIFY-PARTE-2.md`](../GUIA-SHOPIFY-PARTE-2.md)
§H. Esta copia es la red de seguridad para volver atrás. Ver [`../ARCHIVOS-MODIFICADOS.md`](../ARCHIVOS-MODIFICADOS.md),
que explica qué se tocó en cada uno.

Tienes dos formas de arreglarlo:

- **Parchear**, cambiando solo el bloque del botón. Es lo que describe
  `ARCHIVOS-MODIFICADOS.md` y lo más prudente si sospechas que en esos archivos se
  tocó algo más que quieras conservar.
- **Reemplazar el archivo entero** por el de esta carpeta. Más rápido y más
  seguro en cuanto a dejarlo idéntico a Dawn, pero **se lleva por delante
  cualquier otro cambio** que hubiera en el archivo.

Si eliges reemplazar, hazlo con el tema duplicado y comprueba la vista previa
antes de publicar.

Dawn se publica bajo licencia MIT.
