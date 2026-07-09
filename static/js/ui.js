/* LiteGapps — small UI enhancements: navbar elevation on scroll + reveal-on-scroll */
(() => {
  'use strict';

  // Add a shadow to the navbar once the page is scrolled.
  const navbar = document.querySelector('.md3-navbar');
  if (navbar) {
    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // --- Dropdowns (theme switcher etc.) — vanilla, self-contained ---
  const closeAllDropdowns = except => {
    document.querySelectorAll('[data-toggle="dropdown"]').forEach(t => {
      if (t === except) return;
      t.setAttribute('aria-expanded', 'false');
      const menu = t.parentElement && t.parentElement.querySelector('.dropdown-menu');
      if (menu) menu.classList.remove('show');
    });
  };

  document.querySelectorAll('[data-toggle="dropdown"]').forEach(toggle => {
    toggle.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      const menu = toggle.parentElement && toggle.parentElement.querySelector('.dropdown-menu');
      if (!menu) return;
      const willShow = !menu.classList.contains('show');
      closeAllDropdowns(toggle);
      menu.classList.toggle('show', willShow);
      toggle.setAttribute('aria-expanded', String(willShow));
    });
  });

  document.addEventListener('click', () => closeAllDropdowns(null));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAllDropdowns(null); });

  // --- Navbar collapse (hamburger) — vanilla, self-contained ---
  document.querySelectorAll('[data-toggle="collapse"]').forEach(toggle => {
    const sel = toggle.getAttribute('data-target') || toggle.getAttribute('href');
    if (!sel) return;
    const target = document.querySelector(sel);
    if (!target) return;
    toggle.addEventListener('click', e => {
      e.preventDefault();
      const isAccordion = target.classList.contains('accordion-collapse');
      const willShow = !target.classList.contains('show');

      if (isAccordion) {
        const parentSel = toggle.getAttribute('data-parent');
        if (parentSel) {
          const parent = document.querySelector(parentSel);
          if (parent) {
            parent.querySelectorAll('.accordion-collapse.show').forEach(c => {
              if (c !== target) {
                c.classList.remove('show');
                const btn = parent.querySelector(`[data-target="#${c.id}"]`);
                if (btn) { btn.classList.add('collapsed'); btn.setAttribute('aria-expanded', 'false'); }
              }
            });
          }
        }
        target.classList.toggle('show', willShow);
        toggle.classList.toggle('collapsed', !willShow);
        toggle.setAttribute('aria-expanded', String(willShow));
      } else {
        target.classList.toggle('show', willShow);
        toggle.setAttribute('aria-expanded', String(willShow));
        toggle.classList.toggle('collapsed', !willShow);
      }
    });
  });

  // Reveal elements as they enter the viewport.
  const revealables = document.querySelectorAll('.reveal');
  if (revealables.length) {
    if ('IntersectionObserver' in window &&
        !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      revealables.forEach(el => io.observe(el));
    } else {
      revealables.forEach(el => el.classList.add('is-visible'));
    }
  }
})();
