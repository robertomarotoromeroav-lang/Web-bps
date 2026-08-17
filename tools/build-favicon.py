#!/usr/bin/env python3
"""Genera el favicon a partir del isotipo del logotipo original.

Shopify solo acepta mapa de bits en el campo de favicon (no SVG), y lo reescala
solo, así que basta con subir el maestro de 512 px. Los tamaños pequeños se
generan igualmente porque a 32 px conviene mirar el resultado: el isotipo son
tres barras finas y es donde se ve si el margen elegido las empasta.

    python3 tools/build-favicon.py

Requiere Pillow. Produce en assets/img/:
    favicon-512.png    maestro, el que se sube a Shopify
    favicon-180.png    para el icono de pantalla de inicio en iOS
    favicon-32.png     para comprobar la legibilidad real en la pestaña

El fondo va transparente: el azul del isotipo se lee tanto sobre pestañas claras
como oscuras, así que una sola versión sirve para los dos temas del navegador.
"""

import pathlib
import sys

from PIL import Image

SRC = pathlib.Path("assets/img/logo-original.jpg")
OUT_DIR = pathlib.Path("assets/img")
SIZES = (512, 180, 32)

# Margen alrededor del isotipo, en proporción del lado del lienzo. El isotipo es
# apaisado, así que se ajusta al ancho; con menos margen las barras llegan a
# tocar el borde de la pestaña.
PADDING = 0.10


def load_source(path):
    im = Image.open(path)
    if im.mode in ("RGBA", "LA", "P"):
        im = im.convert("RGBA")
        flat = Image.new("RGB", im.size, (255, 255, 255))
        flat.paste(im, mask=im.split()[-1])
        return flat
    return im.convert("RGB")


def isotype(im):
    """Recorta el isotipo azul y devuelve su máscara y su color medio.

    Mismo criterio que tools/build-logos.py, para que el favicon y el logotipo
    salgan siempre de la misma lectura del archivo original.
    """
    w, h = im.size
    px = im.load()
    mask = Image.new("1", (w, h), 0)
    mp = mask.load()
    total, n = [0, 0, 0], 0

    for y in range(h):
        for x in range(w):
            r, g, b = px[x, y]
            if b > r + 40 and b > 90:
                mp[x, y] = 1
                total[0] += r
                total[1] += g
                total[2] += b
                n += 1

    box = mask.getbbox()
    if box is None:
        sys.exit("No se encontró el isotipo azul en la imagen de origen.")
    colour = tuple(v // n for v in total)
    return mask.crop(box), colour


def build(shape, colour, size):
    """Compone el isotipo centrado sobre un lienzo cuadrado transparente."""
    inner = round(size * (1 - PADDING * 2))
    scale = inner / shape.width
    target = (inner, max(1, round(shape.height * scale)))

    # La máscara se escala en escala de grises para que los bordes queden
    # suavizados; en modo "1" saldrían dentados a 32 px.
    resized = shape.convert("L").resize(target, Image.LANCZOS)

    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    tint = Image.new("RGBA", target, colour + (255,))
    canvas.paste(tint, ((size - target[0]) // 2, (size - target[1]) // 2), resized)
    return canvas


def main():
    if not SRC.exists():
        sys.exit(f"No existe {SRC}.")

    shape, colour = isotype(load_source(SRC))
    print("Azul del isotipo: #%02X%02X%02X" % colour)
    print(f"Isotipo recortado: {shape.width}x{shape.height} px")

    for size in SIZES:
        out = OUT_DIR / f"favicon-{size}.png"
        build(shape, colour, size).save(out)
        print(f"  {out}")


if __name__ == "__main__":
    main()
