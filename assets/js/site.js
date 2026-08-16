/* ==========================================================================
   BPS Performance — Comportamiento de interfaz
   Sin dependencias externas.
   ========================================================================== */

(function () {
  "use strict";

  var header = document.querySelector("[data-header]");
  var root = document.documentElement;

  /* ---- Cabecera fija y barra de anuncios ----
     Réplica del comportamiento de Hyperice: pasados 50 px de scroll, el
     bloque fijo sube exactamente el alto de la barra de anuncios, que
     desaparece y deja la cabecera pegada arriba. Por debajo de 50 px vuelve.
     La cabecera nunca cambia a blanco. */
  var announcementHidden = false;
  // La cabecera se superpone tanto al hero de la home como a la cabecera
  // editorial de las páginas de categoría y de filosofía.
  var hero = document.querySelector(".hero, .collection-hero");

  var onScroll = function () {
    var y = root.scrollTop || document.body.scrollTop;

    if (y >= 50 && !announcementHidden) {
      root.style.setProperty(
        "--header-top-position",
        "calc(var(--announcement-height) * -1)"
      );
      announcementHidden = true;
    } else if (y < 50 && announcementHidden) {
      root.style.setProperty("--header-top-position", "0px");
      announcementHidden = false;
    }

    /* Al dejar atrás el hero, la cabecera transparente necesita fondo para
       seguir siendo legible sobre el contenido claro. */
    if (header && hero) {
      header.classList.toggle("is-past-hero", y > hero.offsetHeight - 120);
    }
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- Acordeón del pie (solo móvil) ---- */
  var mqDesktop = window.matchMedia("(min-width: 750px)");

  document.querySelectorAll("[data-accordion-toggle]").forEach(function (toggle) {
    var panel = document.getElementById(toggle.getAttribute("aria-controls"));
    if (!panel) return;

    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      // Se anima a la altura real del contenido y luego se libera a auto.
      panel.style.height = open ? "0px" : panel.scrollHeight + "px";
    });
  });

  // Los acordeones del pie solo colapsan en móvil; en escritorio se muestran
  // abiertos y sin botón. Los de la página de preguntas frecuentes, en cambio,
  // colapsan siempre, así que quedan fuera de esta sincronización.
  var syncAccordion = function () {
    document.querySelectorAll('[data-accordion-panel="mobile"]').forEach(function (panel) {
      if (mqDesktop.matches) {
        panel.style.height = "";
        return;
      }
      var toggle = document.querySelector('[aria-controls="' + panel.id + '"]');
      var open = toggle && toggle.getAttribute("aria-expanded") === "true";
      panel.style.height = open ? panel.scrollHeight + "px" : "0px";
    });
  };

  syncAccordion();
  mqDesktop.addEventListener("change", syncAccordion);

  /* ---- Selector de cantidad de la ficha de producto ---- */
  document.querySelectorAll(".qty").forEach(function (widget) {
    var input = widget.querySelector(".qty__input");
    if (!input) return;

    widget.querySelectorAll(".qty__btn").forEach(function (button, index) {
      button.addEventListener("click", function () {
        var value = parseInt(input.value, 10) || 1;
        // El primer botón resta, el segundo suma. Nunca baja de 1.
        input.value = Math.max(1, index === 0 ? value - 1 : value + 1);
      });
    });
  });

  /* ---- Menú móvil ---- */
  var menu = document.querySelector("[data-mobile-menu]");
  var openers = document.querySelectorAll("[data-menu-open]");
  var closers = document.querySelectorAll("[data-menu-close]");

  var lastFocused = null;

  var setMenu = function (open) {
    if (!menu) return;

    menu.classList.toggle("is-open", open);
    menu.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";

    openers.forEach(function (button) {
      button.setAttribute("aria-expanded", String(open));
    });

    if (header) header.classList.toggle("is-open", open);

    // El drawer es un diálogo: al abrirlo el foco entra en él y al cerrarlo
    // vuelve al botón que lo abrió, para no perder el sitio con teclado.
    if (open) {
      lastFocused = document.activeElement;
      var first = menu.querySelector("[data-menu-close]");
      if (first) first.focus();
    } else if (lastFocused) {
      lastFocused.focus();
      lastFocused = null;
    }
  };

  openers.forEach(function (button) {
    button.addEventListener("click", function () {
      setMenu(true);
    });
  });

  closers.forEach(function (button) {
    button.addEventListener("click", function () {
      setMenu(false);
    });
  });

  // Cerrar el menú al navegar a un ancla de la misma página.
  if (menu) {
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menu && menu.classList.contains("is-open")) {
      setMenu(false);
    }
  });

  /* ---- Filtro de catálogo por categoría ---- */
  var grid = document.querySelector("[data-product-grid]");
  var filters = document.querySelectorAll("[data-filter]");
  var emptyState = document.querySelector("[data-empty-state]");

  if (grid && filters.length) {
    var cards = Array.prototype.slice.call(grid.querySelectorAll("[data-category]"));

    filters.forEach(function (button) {
      button.addEventListener("click", function () {
        var value = button.dataset.filter;
        var visible = 0;

        filters.forEach(function (other) {
          other.classList.toggle("is-active", other === button);
        });

        cards.forEach(function (card) {
          var match = value === "todos" || card.dataset.category === value;
          card.hidden = !match;
          if (match) visible++;
        });

        if (emptyState) emptyState.hidden = visible > 0;
      });
    });
  }

  /* ---- Galería de la ficha de producto ----
     El carrusel lo mueve el propio scroll con anclaje, así que aquí solo hay
     que sincronizar los puntos y las flechas con la posición del carril. */
  var gallery = document.querySelector("[data-gallery]");

  if (gallery) {
    var track = gallery.querySelector("[data-gallery-track]");
    var slides = Array.prototype.slice.call(track.querySelectorAll(".product__slide"));
    var bulletBox = gallery.querySelector("[data-gallery-bullets]");
    var prev = gallery.querySelector("[data-gallery-prev]");
    var next = gallery.querySelector("[data-gallery-next]");
    var bullets = [];
    var current = 0;

    var goTo = function (index, smooth) {
      var target = Math.max(0, Math.min(slides.length - 1, index));
      track.scrollTo({
        left: track.clientWidth * target,
        behavior: smooth === false ? "auto" : "smooth"
      });
    };

    // Con una sola imagen no hay nada que recorrer: ni puntos ni flechas.
    if (slides.length > 1) {
      slides.forEach(function (slide, index) {
        var bullet = document.createElement("button");
        bullet.type = "button";
        bullet.className = "product__bullet";
        bullet.setAttribute("aria-label", "Ir a la imagen " + (index + 1));
        bullet.addEventListener("click", function () {
          goTo(index);
        });
        bulletBox.appendChild(bullet);
        bullets.push(bullet);
      });
    } else {
      if (prev) prev.remove();
      if (next) next.remove();
    }

    var sync = function () {
      var index = Math.round(track.scrollLeft / track.clientWidth);
      if (index === current && bullets.length && bullets[current].classList.contains("is-active")) return;
      current = index;

      bullets.forEach(function (bullet, i) {
        bullet.classList.toggle("is-active", i === current);
        bullet.setAttribute("aria-current", i === current ? "true" : "false");
      });

      if (prev) prev.disabled = current === 0;
      if (next) next.disabled = current === slides.length - 1;
    };

    if (prev) {
      prev.addEventListener("click", function () {
        goTo(current - 1);
      });
    }

    if (next) {
      next.addEventListener("click", function () {
        goTo(current + 1);
      });
    }

    track.addEventListener("scroll", function () {
      window.requestAnimationFrame(sync);
    }, { passive: true });

    // Al cambiar de orientación o de tamaño el carril mide otra cosa y el
    // scroll queda a medio camino entre dos imágenes.
    window.addEventListener("resize", function () {
      goTo(current, false);
    });

    sync();
  }

  /* ---- Aparición progresiva de secciones ---- */
  var revealables = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealables.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
  );

  revealables.forEach(function (el) {
    observer.observe(el);
  });
})();
