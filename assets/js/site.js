/* ==========================================================================
   BPS Performance — Comportamiento de interfaz
   Sin dependencias externas.
   ========================================================================== */

(function () {
  "use strict";

  /* La cabecera no reacciona al scroll: en Hyperice es estática y se va con
     la página, sin volverse blanca ni quedar fijada. */
  var header = document.querySelector("[data-header]");

  /* ---- Menú móvil ---- */
  var menu = document.querySelector("[data-mobile-menu]");
  var openers = document.querySelectorAll("[data-menu-open]");
  var closers = document.querySelectorAll("[data-menu-close]");

  var setMenu = function (open) {
    if (!menu) return;

    menu.classList.toggle("is-open", open);
    menu.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";

    openers.forEach(function (button) {
      button.setAttribute("aria-expanded", String(open));
    });

    if (header) header.classList.toggle("is-open", open);
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
