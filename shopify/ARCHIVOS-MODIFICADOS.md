# Los archivos del tema que están modificados

Qué se tocó en cada uno y cómo dejarlo para que funcione con `bps-hyperice.css` y
con los ajustes de la guía.

**No son dos archivos: son cuatro, más uno creado.** Los tres primeros están
tocados de la misma forma, así que se arreglan igual.

Esto se ha deducido comparando el HTML que renderiza la tienda con el que
emitiría cada archivo de **Dawn v15.4.1** sin tocar. No he leído vuestros
archivos, así que puede haber algún cambio más que no salga al HTML; pero lo que
está aquí sí está, y con esto la parte de botones queda limpia.

| Archivo | Qué le pasa |
|---|---|
| `sections/image-banner.liquid` | Botón nativo sustituido por el degradado |
| `sections/image-with-text.liquid` | Igual |
| `sections/contact-form.liquid` | Igual, en el botón «Enviar» |
| `snippets/boton-personalizado.liquid` | **Creado.** Es el que genera el botón degradado |
| `layout/theme.liquid` | Lleva pegado un bloque de CSS muerto al final |

En `shopify/dawn-original/` de este repositorio están **los tres archivos de
sección tal cual los publica Shopify en la etiqueta v15.4.1**, por si preferís
reemplazarlos enteros en vez de parchear.

---

## El patrón común

En los tres archivos el cambio es el mismo: donde Dawn escribía su botón nativo,
ahora hay una llamada al *snippet* del botón degradado. Se reconoce en el HTML
porque sale un `<style>` de 90 líneas **dentro** del contenedor del botón, y el
enlace lleva `class="btn-grad-custom "` —con ese espacio final delator, que es una
interpolación de Liquid que se quedó vacía— en vez de `class="button button--primary"`.

**Por qué hay que deshacerlo**, y no solo por estética:

- El CSS del botón viaja **dentro de la página**, repetido entero en cada uso: en
  la home van tres copias de las mismas 90 líneas.
- Al no ser `class="button"`, **los ajustes de Botones de Configuración no le
  afectan**. Puedes poner el radio a 40 y el grosor a 1 y ese botón seguirá con su
  radio de 20 y su degradado: no se entera.
- Y `bps-hyperice.css` tampoco lo alcanza, porque la hoja estiliza `.button`.

Es decir: **mientras el botón degradado siga ahí, ni la configuración ni la hoja
de estilos pueden con él.** Es el único sitio del rediseño donde eso pasa.

---

## 1. `sections/image-banner.liquid`

Busca `{%- when 'buttons' -%}` (línea 133 en el original). Debajo tiene que
quedar **exactamente esto**:

```liquid
          {%- when 'buttons' -%}
            <div
              class="banner__buttons{% if block.settings.button_label_1 != blank and block.settings.button_label_2 != blank %} banner__buttons--multiple{% endif %}"
              {{ block.shopify_attributes }}
            >
              {%- if block.settings.button_label_1 != blank -%}
                <a
                  {% if block.settings.button_link_1 == blank %}
                    role="link" aria-disabled="true"
                  {% else %}
                    href="{{ block.settings.button_link_1 }}"
                  {% endif %}
                  class="button{% if block.settings.button_style_secondary_1 %} button--secondary{% else %} button--primary{% endif %}"
                >
                  {{- block.settings.button_label_1 | escape -}}
                </a>
              {%- endif -%}
              {%- if block.settings.button_label_2 != blank -%}
                <a
                  {% if block.settings.button_link_2 == blank %}
                    role="link" aria-disabled="true"
                  {% else %}
                    href="{{ block.settings.button_link_2 }}"
                  {% endif %}
                  class="button{% if block.settings.button_style_secondary_2 %} button--secondary{% else %} button--primary{% endif %}"
                >
                  {{- block.settings.button_label_2 | escape -}}
                </a>
              {%- endif -%}
            </div>
```

Borra todo lo que haya de `<style>` o de `render 'boton-personalizado'` dentro de
ese bloque.

**Fíjate en que son dos botones.** El actual solo pinta uno, y el rediseño pide
dos: uno sólido y uno de contorno. Al restaurar esto recuperas el segundo, que
ahora mismo no se puede ni configurar.

**Después, en el editor** (Home → Banner de imagen → bloque **Botones**):

| Ajuste | Valor |
|---|---|
| Botón 1 → Etiqueta | `Comprar ahora` |
| Botón 1 → Enlace | `/collections/all` |
| Botón 1 → Estilo de contorno | Desactivado |
| Botón 2 → Etiqueta | `Conocer la tecnología` |
| Botón 2 → Enlace | la página de tecnología |
| Botón 2 → Estilo de contorno | **Activado** |

Y en la sección, **Esquema de colores → Esquema 3**. Hoy tiene el **4**, que en la
paleta nueva es el gris del pie: sobre la fotografía del hero, el botón de
contorno se dibujaría con el color equivocado.

Repasa también estos tres, que hoy no están como pide la guía:

| Ajuste | Hoy | Debe quedar |
|---|---|---|
| Altura | Mediano | **Grande** |
| Diseño móvil → Alineación | Centro | **Izquierda** |
| Diseño móvil → Contenedor | Activado | **Desactivado** |

---

## 2. `sections/image-with-text.liquid`

Busca `{%- when 'button' -%}` (línea 87 en el original). Debe quedar así:

```liquid
                {%- when 'button' -%}
                  {%- if block.settings.button_label != blank -%}
                    <a
                      {% if block.settings.button_link == blank %}
                        role="link" aria-disabled="true"
                      {% else %}
                        href="{{ block.settings.button_link }}"
                      {% endif %}
                      class="button{% if block.settings.button_style_secondary %} button--secondary{% else %} button--primary{% endif %}"
                      {{ block.shopify_attributes }}
                    >
                      {{ block.settings.button_label | escape }}
                    </a>
                  {%- endif -%}
```

**Después, en el editor** (Home → Imagen con texto → bloque **Botón**):

| Ajuste | Valor |
|---|---|
| Etiqueta | `Ver Presoterapia BPS PRO` |
| Enlace | ⚠️ `/products/presoterapia-bps-pro-recuperacion-muscular-profesional` |
| Estilo de contorno | Desactivado |

> ⚠️ **Aprovecha para corregir el enlace.** Hoy el botón dice «VER PRESOTERAPIA
> BPS **PRO**» y apunta a `/products/presoterapia-bps-**plus**`. Manda a quien lo
> pulsa a un producto distinto del que anuncia.

---

## 3. `sections/contact-form.liquid`

Busca el botón de envío (línea 130 en el original). Debe quedar así:

```liquid
        <button type="submit" class="button">
          {{ 'templates.contact.form.send' | t }}
        </button>
```

Hoy es `<button type="submit" class="btn-grad-custom ">` con el texto «Enviar»
escrito a mano. Al restaurarlo recuperas dos cosas: el estilo de botón del tema y
**la traducción automática** del texto, que ahora está fijada en castellano.

Este archivo tiene además el CSS **pegado en línea en vez de venir del snippet**,
y ya ha divergido: le añadieron `cursor: pointer` y `border: none`, y arranca con
un comentario que lo delata —

```css
/* ... (todo el código de estilo que ya tienes en el otro snippet) ... */
```

Bórralo entero junto con la clase. No hay nada que configurar después: el botón
de un formulario de contacto no tiene ajustes.

---

## 4. `snippets/boton-personalizado.liquid`

**Bórralo, pero al final.** Primero deja los tres archivos de arriba sin ninguna
llamada a él, y comprueba que no queda ninguna más:

- Home → la sección de tecnología (`1779030352a3a6d6ad`) tiene **otro** botón
  degradado. Es una sección personalizada, así que ese se quita desde el editor,
  no desde un archivo.

Cuando ni la home ni contacto muestren ningún botón degradado, borra el archivo.
Si lo borras antes, las páginas que aún lo llamen darán error de Liquid.

Para tu tranquilidad, esto es lo que el snippet genera hoy —así reconoces sus
restos si aparecen en otro sitio:

```css
.btn-grad-custom::before {            /* el borde degradado */
  background: linear-gradient(90deg, #00B2FF, #0057FF);
  border-radius: 20px;
}
.btn-grad-custom::after {             /* el relleno que tapa el centro */
  top: 2px; left: 2px;
  width: calc(100% - 4px); height: calc(100% - 4px);
  background: #121212;                /* #FFFFFF en la variante --fondo-claro */
  border-radius: 18px;
}
.btn-grad-custom:hover::after { background: transparent; }
```

---

## 5. `layout/theme.liquid`

Al final, justo antes de `</body>` o de `{% content_for 'body' %}`, hay pegado
este bloque, que se sirve en las 32 páginas y **no estiliza nada**:

```css
.ai-info-multicolumn__container-…aigenblock7ca83b5… { display: grid; … }
.ai-info-multicolumn-…aigenblock7ca83b5… { …; background-color: black; }
```

Bórralo. Y aprovecha el viaje: es en ese mismo archivo donde hay que **añadir**
los dos scripts de la §3 de la guía y la etiqueta de la hoja de estilos.

---

## Cómo comprobar que quedó bien

Con el tema duplicado en vista previa, abre la home y mira el código fuente:

- [ ] **Cero** apariciones de `btn-grad-custom` en toda la página
- [ ] Los botones salen como `<a class="button button--primary">` y
      `<a class="button button--secondary">`
- [ ] **Ningún** `<style>` dentro de `banner__buttons` ni de
      `image-with-text__content`
- [ ] En contacto, el botón de envío es `<button type="submit" class="button">`
- [ ] Cero apariciones de `ai-info-multicolumn` en las páginas que no sean la home
- [ ] Los botones son píldoras negras de 40 px de alto: si lo son, ya les está
      llegando la configuración y la hoja de estilos
