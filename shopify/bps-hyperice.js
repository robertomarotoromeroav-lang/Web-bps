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

   OJO CON LOS PUNTO Y COMA. Cada bloque va como `;(function () { … })();`, con el
   punto y coma DELANTE y DETRÁS, y no es estilo: es obligatorio. Cuando los tres
   iban en `<script>` separados cada uno era un programa aparte y daba igual. En un
   solo archivo, sin el `;` final, JavaScript lee `})()(function () {…` como una
   llamada —el resultado del primer bloque invocado con el segundo como
   argumento—, revienta con «(intermediate value)(...) is not a function» y los
   bloques 2 y 3 NO llegan a ejecutarse. Pasó: el primero funcionaba, así que la
   barra de anuncios se escondía bien, y en cambio la cabecera no se volvía
   transparente y el pie no se plegaba.
   ========================================================================== */

/* -------------------------------------------------------------------------
   1. La barra de anuncios se esconde al bajar (antes §3b)
   ------------------------------------------------------------------------- */

// Pasados 50px, sube el bloque superior el alto de la barra de anuncios.
;(function () {
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
})();

/* -------------------------------------------------------------------------
   2. Cabecera transparente sobre las imágenes a sangre (antes §3c)
   ------------------------------------------------------------------------- */

// Marca las plantillas que abren con imagen a sangre y avisa al dejarla atrás.
;(function () {
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
})();

/* -------------------------------------------------------------------------
   3. Columnas del pie plegables en móvil (antes §3e)
   ------------------------------------------------------------------------- */

// Convierte cada columna de menú del pie en un desplegable, solo en móvil.
;(function () {
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
})();

/* ---------------------------------------------------------------------------
   4. Índice del artículo del blog
   Shopify no genera índices. Este bloque recorre los `<h2>` del cuerpo del
   artículo, les pone un `id` y construye la lista de enlaces. Se coloca entre el
   titular y el texto; a partir de 1100px la hoja lo saca a una columna propia a
   la derecha, pegada al margen de la página, y lo deja fijo al desplazarse.

   Decisiones, para que no sorprendan:
   - Solo `<h2>`. El artículo de presoterapia tiene 10 `<h2>` y 21 `<h3>`: con
     los dos niveles saldría un índice de 31 líneas, más largo que el artículo en
     pantalla.
   - Si hay menos de tres, no se pinta: un índice de dos líneas no ayuda.
   - Los encabezados vacíos se saltan. El artículo publicado tiene uno.
   - Si un encabezado ya trae `id` puesto a mano, se respeta: así los enlaces que
     alguien haya compartido siguen funcionando.
   ------------------------------------------------------------------------- */

;(function () {
  var MINIMO = 3
  var cuerpo = document.querySelector('.article-template__content')
  if (!cuerpo) return

  var titulos = [].filter.call(cuerpo.querySelectorAll('h2'), function (h) {
    return h.textContent.trim().length > 0
  })
  if (titulos.length < MINIMO) return

  // Acentos fuera, espacios a guiones, y sin repetidos.
  var usados = {}
  var slug = function (texto) {
    var s = texto.normalize ? texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : texto
    s = s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
    if (!s) s = 'apartado'
    if (usados[s]) { usados[s] += 1; s = s + '-' + usados[s] } else { usados[s] = 1 }
    return s
  }

  var indice = document.createElement('nav')
  indice.className = 'bps-indice'
  indice.setAttribute('aria-labelledby', 'bps-indice-titulo')

  var rotulo = document.createElement('p')
  rotulo.className = 'bps-indice__titulo'
  rotulo.id = 'bps-indice-titulo'
  rotulo.textContent = 'En este artículo'
  indice.appendChild(rotulo)

  var lista = document.createElement('ol')
  lista.className = 'bps-indice__lista'

  var enlaces = []
  titulos.forEach(function (h) {
    if (!h.id) h.id = slug(h.textContent.trim())
    var li = document.createElement('li')
    var a = document.createElement('a')
    a.className = 'bps-indice__enlace'
    a.href = '#' + h.id
    a.textContent = h.textContent.trim()
    li.appendChild(a)
    lista.appendChild(li)
    enlaces.push({ enlace: a, titulo: h })
  })

  indice.appendChild(lista)
  cuerpo.parentNode.insertBefore(indice, cuerpo)

  // Desplazamiento suave, respetando quien lo tenga desactivado en el sistema.
  var suave = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  indice.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('.bps-indice__enlace') : null
    if (!a) return
    var destino = document.getElementById(a.getAttribute('href').slice(1))
    if (!destino) return
    e.preventDefault()
    destino.scrollIntoView({ behavior: suave ? 'smooth' : 'auto', block: 'start' })
    if (window.history && history.replaceState) history.replaceState(null, '', a.getAttribute('href'))
  })

  /* Marca el apartado en el que está el lector. Se calcula con el margen de la
     cabecera fija (111px) más un poco de aire, y se limita con rAF para no
     encadenar cálculos en cada píxel de scroll. */
  var pendiente = false
  var marcar = function () {
    pendiente = false
    var actual = null
    for (var i = 0; i < enlaces.length; i++) {
      if (enlaces[i].titulo.getBoundingClientRect().top <= 140) actual = enlaces[i]
      else break
    }
    enlaces.forEach(function (par) {
      var activo = par === actual
      par.enlace.classList.toggle('bps-indice__enlace--activo', activo)
      if (activo) par.enlace.setAttribute('aria-current', 'true')
      else par.enlace.removeAttribute('aria-current')
    })
  }

  window.addEventListener('scroll', function () {
    if (pendiente) return
    pendiente = true
    window.requestAnimationFrame(marcar)
  }, { passive: true })

  marcar()
})();

/* -------------------------------------------------------------------------
   5. El hueco que reserva la cabecera fija

   El apartado 3d saca el bloque de cabecera del flujo con `position: fixed`, así
   que deja de reservar su espacio, y el apartado 2 lo devuelve a mano con
   `#MainContent { padding-top: var(--bps-header-space, 111px) }`.

   Ese 111 se midió cuando la cabecera tenía 73px de alto. El alto real depende
   del **tamaño del logotipo**, que es un ajuste del tema, y en cuanto se sube
   deja de cuadrar: medido en la tienda publicada, el bloque mide 171,3 (38 de la
   barra de anuncios más 133,3 de cabecera), o sea 60px más de lo reservado. El
   efecto se ve en cualquier página sin imagen a sangre: el titular sube hasta
   tocar la cabecera —«Recuperación y rendimiento» empezaba en y=167 con la
   cabecera acabando en 171,3, así que la parte de arriba de las letras quedaba
   por detrás—.

   Aquí se mide el bloque y se escribe el valor, así que se corrige solo cada vez
   que se cambie el logotipo, el relleno de la cabecera o la barra de anuncios.
   Se vuelve a medir al cargar del todo (el logotipo es una imagen: hasta que no
   llega, el alto es otro) y al cambiar el tamaño de la ventana.
   ------------------------------------------------------------------------- */

;(function () {
  var grupo = document.querySelector('.bps-header-group')
  if (!grupo) return
  var root = document.documentElement

  var medir = function () {
    /* `offsetHeight` del bloque fijo, no `getBoundingClientRect().bottom`: al
       bajar, el apartado 1 lo sube para esconder la barra de anuncios y el
       `bottom` saldría más pequeño de lo que hay que reservar. */
    var alto = grupo.offsetHeight
    if (alto > 0) root.style.setProperty('--bps-header-space', alto + 'px')
  }

  medir()
  window.addEventListener('load', medir)

  var pendiente = null
  window.addEventListener('resize', function () {
    if (pendiente) clearTimeout(pendiente)
    pendiente = setTimeout(medir, 150)
  })

  /* Si el navegador lo soporta, se vigila el bloque: el logotipo puede llegar
     tarde y la barra de anuncios puede tener un carrusel que cambie de alto. */
  if (window.ResizeObserver) new ResizeObserver(medir).observe(grupo)
})();
