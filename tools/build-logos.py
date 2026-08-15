#!/usr/bin/env python3
"""Genera las variantes SVG del logotipo a partir del original en mapa de bits.

Vectoriza con potrace en vez de redibujar, de modo que las formas del isotipo y
del wordmark son exactamente las del archivo original. Si el logotipo cambia,
basta con reemplazar la imagen y volver a ejecutar esto.

    python3 tools/build-logos.py assets/img/logo-original.png

Requisitos: potrace (apt install potrace) y Pillow (pip install pillow).

Produce en assets/img/:
    logo-stacked-black.svg      isotipo arriba, wordmark debajo, para fondo claro
    logo-stacked-white.svg      idem, wordmark en blanco para fondo oscuro
    logo-horizontal-black.svg   isotipo a la izquierda, para fondo claro
    logo-horizontal-white.svg   idem, para fondo oscuro

El isotipo conserva el azul corporativo en las cuatro variantes; lo único que
cambia es el color del wordmark.
"""

import pathlib
import re
import subprocess
import sys
import tempfile

from PIL import Image

OUT_DIR = pathlib.Path("assets/img")
GAP_STACKED = 0.14   # separación entre isotipo y wordmark, en altos de isotipo
GAP_HORIZONTAL = 0.18


def load_source(path):
    im = Image.open(path)
    if im.mode in ("RGBA", "LA", "P"):
        # Aplana sobre blanco para que el fondo transparente no cuente como forma.
        im = im.convert("RGBA")
        flat = Image.new("RGB", im.size, (255, 255, 255))
        flat.paste(im, mask=im.split()[-1])
        return flat
    return im.convert("RGB")


def masks(im):
    """Separa el isotipo (azul) del wordmark (oscuro) y devuelve máscara + caja."""
    w, h = im.size
    px = im.load()
    blue = Image.new("1", (w, h), 0)
    dark = Image.new("1", (w, h), 0)
    bp, dp = blue.load(), dark.load()

    for y in range(h):
        for x in range(w):
            r, g, b = px[x, y]
            if b > r + 40 and b > 90:          # azul saturado
                bp[x, y] = 1
            elif max(r, g, b) < 110:            # negro del wordmark
                dp[x, y] = 1

    out = {}
    for name, m in (("mark", blue), ("word", dark)):
        box = m.getbbox()
        if box is None:
            sys.exit(f"No se encontró la parte '{name}' en la imagen de origen.")
        out[name] = (m.crop(box), box)
    return out


def trace(mask, scale=4):
    """Vectoriza una máscara y devuelve (ancho, alto, transform, paths)."""
    big = mask.resize((mask.width * scale, mask.height * scale), Image.LANCZOS)
    # potrace espera la forma en negro sobre blanco.
    inverted = big.point(lambda v: 0 if v else 255, "1")

    with tempfile.TemporaryDirectory() as tmp:
        pbm = pathlib.Path(tmp) / "shape.pbm"
        svg = pathlib.Path(tmp) / "shape.svg"
        inverted.save(pbm)
        subprocess.run(
            ["potrace", "-s", "-a", "1.0", "-O", "0.2", "-u", "40",
             str(pbm), "-o", str(svg)],
            check=True,
        )
        content = svg.read_text()

    vb = re.search(r'viewBox="0 0 ([\d.]+) ([\d.]+)"', content)
    g = re.search(r'(<g transform="[^"]*")\s*\nfill="#000000" stroke="none">(.*?)</g>',
                  content, re.S)
    if not (vb and g):
        sys.exit("potrace devolvió un SVG con un formato inesperado.")
    return float(vb.group(1)), float(vb.group(2)), g.group(1), g.group(2).strip()


def brand_colour(im, box):
    """Color medio del isotipo, para usarlo como azul corporativo."""
    px = im.load()
    x0, y0, x1, y1 = box
    total, n = [0, 0, 0], 0
    for y in range(y0, y1):
        for x in range(x0, x1):
            r, g, b = px[x, y]
            if b > r + 40 and b > 90:
                total[0] += r; total[1] += g; total[2] += b; n += 1
    return "#%02X%02X%02X" % tuple(v // n for v in total)


def group(part, x, y, scale, colour):
    w, h, open_tag, paths = part
    tag = open_tag.replace('<g transform="', f'<g transform="translate({x:.2f} {y:.2f}) '
                                             f'scale({scale:.5f}) ')
    return f'  <g fill="{colour}">\n  {tag}\n{paths}\n</g>\n  </g>'


def svg_document(view_w, view_h, body, title):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {view_w:.0f} {view_h:.0f}" '
            f'role="img" aria-label="BPS Performance">\n  <title>{title}</title>\n'
            f'{body}\n</svg>\n')


def main():
    source = pathlib.Path(sys.argv[1] if len(sys.argv) > 1
                          else "assets/img/logo-original.png")
    if not source.exists():
        sys.exit(f"No existe {source}. Sube ahí el logotipo original y reintenta.")

    im = load_source(source)
    parts = masks(im)
    brand = brand_colour(im, parts["mark"][1])
    print(f"Azul corporativo detectado: {brand}")

    mark = trace(parts["mark"][0])
    word = trace(parts["word"][0])
    print(f"Isotipo {mark[0]:.0f}x{mark[1]:.0f} · wordmark {word[0]:.0f}x{word[1]:.0f}")

    # Se normaliza todo al ancho del wordmark para conservar la proporción real
    # entre isotipo y letras que tiene el archivo original.
    mw, mh = mark[0], mark[1]
    ww, wh = word[0], word[1]
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    for colour, suffix in ((None, "black"), ("#FFFFFF", "white")):
        word_colour = colour or "#000000"

        # --- Apilado: isotipo centrado sobre el wordmark ---
        gap = mh * GAP_STACKED
        total_w = max(mw, ww)
        body = (group(mark, (total_w - mw) / 2, 0, 1, brand) + "\n" +
                group(word, (total_w - ww) / 2, mh + gap, 1, word_colour))
        (OUT_DIR / f"logo-stacked-{suffix}.svg").write_text(
            svg_document(total_w, mh + gap + wh, body, f"BPS Performance ({suffix})"),
            encoding="utf-8")

        # --- Horizontal: isotipo a la izquierda, alturas equilibradas ---
        target_h = wh * 1.35                  # el isotipo pesa algo más que las letras
        s = target_h / mh
        gap_h = ww * GAP_HORIZONTAL * 0.5
        canvas_h = max(target_h, wh)
        body = (group(mark, 0, (canvas_h - target_h) / 2, s, brand) + "\n" +
                group(word, mw * s + gap_h, (canvas_h - wh) / 2, 1, word_colour))
        (OUT_DIR / f"logo-horizontal-{suffix}.svg").write_text(
            svg_document(mw * s + gap_h + ww, canvas_h, body,
                         f"BPS Performance ({suffix})"),
            encoding="utf-8")

    print(f"Escritas 4 variantes en {OUT_DIR}/")
    print(f"Recuerda alinear --color-brand de assets/css/tokens.css con {brand}")


if __name__ == "__main__":
    main()
