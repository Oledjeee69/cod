import '../scss/main.scss';
import { initCalculator } from './calculator.js';
import { initBurger } from './burger.js';

const yearEl = document.querySelector('#year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

const form = document.querySelector('#calc-form');
if (form) initCalculator(form);

initBurger();
