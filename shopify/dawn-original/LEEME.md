# Archivos de sección originales de Dawn

Copias **sin modificar** de tres secciones de Dawn, tomadas de la etiqueta
**v15.4.1** del repositorio oficial `Shopify/dawn` — la misma versión que corre
en bpsperformance.com.

```
image-banner.liquid      507 líneas
image-with-text.liquid   487 líneas
contact-form.liquid      218 líneas
```

Están aquí porque en la tienda **los tres tienen el botón nativo sustituido** por
uno con borde degradado. Ver [`../ARCHIVOS-MODIFICADOS.md`](../ARCHIVOS-MODIFICADOS.md),
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
