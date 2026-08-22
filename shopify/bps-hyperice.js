/* ==========================================================================
   BPS Performance — comportamiento de la capa Hyperice sobre Dawn
   --------------------------------------------------------------------------
   Los tres scripts que antes iban pegados a mano en `theme.liquid`, juntos en un
   archivo. Se instala con UNA línea en el layout, justo antes de `</body>`:

     <script src="{{ 'bps-hyperice.js' | asset_url }}" defer="defer"></script>

   Está así para que actualizar el tema sea barato: Shopify NO conserva las
   ediciones de código al actualizar, y volver a pegar tres bloques de 20-30
   líneas en el sitio correcto es donde se cometen los errores. Con esto, de
   `theme.liquid` solo hay que rehacer dos cosas: el envoltorio del grupo de
   cabecera y esta línea. Ver GUIA-SHOPIFY-PARTE-2.md §I.

   No depende de jQuery ni de nada de Dawn. Si una pieza no está en la página,
   su bloque se sale sin hacer nada.
   ========================================================================== */

/* -------------------------------------------------------------------------
   1. La barra de anuncios se esconde al bajar (antes §3b)
   ------------------------------------------------------------------------- */

// Pasados 50px, sube el bloque superior el alto de la barra de anuncios.
(function () {
  var root = document.documentElement
  var bar = document.querySelector('.announcement-bar, .utility-bar')
  if (!bar) return
  var hidden = false

  document.addEventListener('scroll', function () {
    var y = root.scrollTop || document.body.scrollTop
    if (y >= 50 && !hidden) {
      root.style.setProperty('--header-top-position', '-' + bar.offsetHeight + 'px')
      hidden = true
    } else if (y < 50 && hidden) {
      root.style.setProperty('--header-top-position', '0px')
      hidden = false
    }
  }, { passive: true })
})()

/* -------------------------------------------------------------------------
   2. Cabecera transparente sobre las imágenes a sangre (antes §3c)
   ------------------------------------------------------------------------- */

// Marca las plantillas que abren con imagen a sangre y avisa al dejarla atrás.
(function () {
  // OJO: aquí NO va `.collection-hero`. Dawn le pone esa clase a la sección
  // «Banner de colección» en TODAS las colecciones, con imagen o sin ella, y
  // además coloca la foto AL LADO del texto, no detrás: el banner solo tiene
  // 40px de relleno, así que el título se metía debajo de la cabecera fija.
  // Si alguna colección tiene que abrir con imagen a sangre, se le añade una
  // sección «Banner de imagen» encima y entonces sí entra por `banner--large`.
  var hero = document.querySelector('.banner--medium, .banner--large')
  if (!hero) return
  document.body.classList.add('bps-hero')

  document.addEventListener('scroll', function () {
    var y = document.documentElement.scrollTop || document.body.scrollTop
    // La clase va en el <body>: el fondo lo pinta el bloque .bps-header-group,
    // que envuelve la barra de anuncios y la cabecera.
    // 40px, no el alto del hero: la cabecera tiene que ganar fondo en cuanto
    // se empieza a bajar. Con el umbral al final del hero, el texto del banner
    // pasaba por debajo de una cabecera todavía transparente y se solapaba.
    document.body.classList.toggle('bps-past-hero', y > 40)
  }, { passive: true })
})()

/* -------------------------------------------------------------------------
   3. Columnas del pie plegables en móvil (antes §3e)
   ------------------------------------------------------------------------- */

// Convierte cada columna de menú del pie en un desplegable, solo en móvil.
(function () {
  var PUNTO = 750
  var bloques = document.querySelectorAll('.footer-block--menu')
  if (!bloques.length) return

  bloques.forEach(function (bloque) {
    var titulo = bloque.querySelector('.footer-block__heading')
    var lista = bloque.querySelector('ul')
    if (!titulo || !lista) return

    titulo.setAttribute('role', 'button')
    titulo.setAttribute('tabindex', '0')
    titulo.classList.add('bps-footer-toggle')

    var abrir = function () {
      if (window.innerWidth >= PUNTO) return
      var abierto = bloque.classList.toggle('bps-open')
      titulo.setAttribute('aria-expanded', abierto ? 'true' : 'false')
    }

    titulo.addEventListener('click', abrir)
    titulo.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrir() }
    })
  })
})()
