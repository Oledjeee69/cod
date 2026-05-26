import '../scss/main.scss';
import carHeroUrl from '../assets/car-hero.svg?url';
import { initCalculator } from './calculator.js';
import { initBurger } from './burger.js';

const heroImage = document.querySelector('.hero__image');
if (heroImage) {
  heroImage.src = carHeroUrl;
}

const yearEl = document.querySelector('#year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

const form = document.querySelector('#calc-form');
if (form) initCalculator(form);

initBurger();
