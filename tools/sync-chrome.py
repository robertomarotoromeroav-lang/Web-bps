#!/usr/bin/env python3
"""Propaga cabecera, menú móvil y pie desde index.html al resto de páginas.

El prototipo es HTML estático, así que cada página lleva su propia copia de la
cabecera y del pie. Editarlas a mano las desincroniza enseguida: este script
las regenera todas desde index.html, que es la referencia.

    python3 tools/sync-chrome.py

Lo único que se ajusta por página es:
  - el enlace del menú marcado como página actual (aria-current),
  - los anclas de la home, que desde otra página necesitan el prefijo,
  - la clase del <body>, que define cuánto espacio reserva la cabecera fija.
"""

import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SOURCE = "index.html"

# Los bloques se delimitan por su etiqueta de apertura y el cierre que precede
# al siguiente bloque, tolerando cualquier espaciado entre medias.
HEADER_RE = r'<div class="site-header".*?</header>\s*</div>'
# El menú se delimita hasta el <main> que le sigue, así no depende de cuántos
# <div> anide ni de cómo se llamara la clase en una versión anterior.
DRAWER_RE = r'<div class="(?:drawer|mobile-menu)" id="mobile-menu".*?(?=\n\s*<main)'
FOOTER_RE = r'<footer class="footer".*?</footer>' 

# destino -> (enlace del menú que va marcado, clase del body)
# El body decide el espacio bajo la cabecera fija: con hero no se reserva
# ninguno, porque la cabecera se superpone a la fotografía.
PAGES = {
    "index.html":          (None,             "page page--hero"),
    "productos.html":      ("productos.html", "page"),
    "coleccion.html":      ("productos.html", "page page--hero"),
    "producto.html":       ("productos.html", "page"),
    "sobre-nosotros.html": (None,             "page page--hero"),
    "faq.html":            (None,             "page"),
    "blog.html":           ("blog.html",      "page"),
    "contacto.html":       ("contacto.html",  "page"),
    "styleguide.html":     (None,             "page"),
}


def slice_chrome(html):
    """Extrae de la página de referencia los tres bloques compartidos."""
    header = re.search(HEADER_RE, html, re.S)
    drawer = re.search(DRAWER_RE, html, re.S)
    footer = re.search(FOOTER_RE, html, re.S)
    if not (header and drawer and footer):
        sys.exit("No se han podido localizar los bloques en " + SOURCE)
    return header.group(0), drawer.group(0), footer.group(0)


def apply_to(html, header, drawer, footer, current, body_class, is_home):
    # La cabecera solo se superpone a la imagen en páginas con hero a sangre.
    if not is_home:
        header = header.replace(' class="header header--overlay"', ' class="header"')

    # Desde fuera de la home, el ancla de tecnología necesita la ruta.
    if not is_home:
        header = header.replace('href="#tecnologia"', 'href="index.html#tecnologia"')
        drawer = drawer.replace('href="#tecnologia"', 'href="index.html#tecnologia"')

    # Marca de página actual: se limpia y se vuelve a poner donde toque.
    header = header.replace(' aria-current="page"', '')
    if current:
        header = header.replace(f'<a href="{current}">',
                                f'<a href="{current}" aria-current="page">', 1)

    html = re.sub(r'<body class="[^"]*">', f'<body class="{body_class}">', html, count=1)
    html = re.sub(HEADER_RE, lambda _: header, html, count=1, flags=re.S)
    html = re.sub(FOOTER_RE, lambda _: footer, html, count=1, flags=re.S)

    if re.search(DRAWER_RE, html, re.S):
        html = re.sub(DRAWER_RE, lambda _: drawer, html, count=1, flags=re.S)
    else:
        # La página aún no tenía menú móvil: se inserta antes del contenido.
        html = re.sub(r'(\n<main)', "\n" + drawer.replace("\\", "\\\\") + r"\1", html, count=1)
    return html


def main():
    source = (ROOT / SOURCE).read_text(encoding="utf-8")
    header, drawer, footer = slice_chrome(source)

    for name, (current, body_class) in PAGES.items():
        path = ROOT / name
        if not path.exists():
            print(f"  {name}: no existe, se omite")
            continue

        original = path.read_text(encoding="utf-8")
        updated = apply_to(original, header, drawer, footer,
                           current, body_class, is_home=(name == SOURCE))
        path.write_text(updated, encoding="utf-8")
        print(f"  {name}{'' if updated != original else '  (sin cambios)'}")

    print("Cabecera, menú y pie sincronizados desde " + SOURCE)


if __name__ == "__main__":
    main()
