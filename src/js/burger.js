export function initBurger() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('#site-nav');

  if (!burger || !nav) return;

  burger.addEventListener('click', () => {
    const isOpen = burger.classList.toggle('burger--open');
    nav.classList.toggle('nav--open', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
    burger.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
  });

  nav.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', () => {
      burger.classList.remove('burger--open');
      nav.classList.remove('nav--open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}
