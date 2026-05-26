export function initBurger() {
  const header = document.querySelector('.header');
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('#site-nav');
  const backdrop = document.querySelector('.header__backdrop');

  if (!header || !burger || !nav) return;

  const closeMenu = () => {
    header.classList.remove('header--menu-open');
    burger.classList.remove('burger--open');
    nav.classList.remove('nav--open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Открыть меню');
    document.body.classList.remove('menu-open');
  };

  const openMenu = () => {
    header.classList.add('header--menu-open');
    burger.classList.add('burger--open');
    nav.classList.add('nav--open');
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Закрыть меню');
    document.body.classList.add('menu-open');
  };

  burger.addEventListener('click', () => {
    if (header.classList.contains('header--menu-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  backdrop?.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  nav.querySelectorAll('a[href^="#"], a[href^="tel:"]').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 1280px)').matches) {
      closeMenu();
    }
  });
}
