import {
  PRICE_MIN,
  PRICE_MAX,
  DOWN_MIN_PERCENT,
  DOWN_MAX_PERCENT,
  TERM_MIN,
  TERM_MAX,
  clamp,
  parseMoney,
  formatMoney,
  calculateMonthly,
} from './utils.js';

export function initCalculator(form) {
  const priceRange = form.querySelector('#car-price-range');
  const priceInput = form.querySelector('#car-price');
  const priceOut = form.querySelector('#car-price-out');

  const downRange = form.querySelector('#down-payment-range');
  const downInput = form.querySelector('#down-payment');
  const downValueEl = form.querySelector('#down-payment-value');
  const downPercentEl = form.querySelector('#down-percent');

  const termRange = form.querySelector('#lease-term-range');
  const termInput = form.querySelector('#lease-term');
  const termOut = form.querySelector('#lease-term-out');

  const monthlyEl = form.querySelector('#monthly-payment');
  const submitBtn = form.querySelector('#submit-btn');

  let downPercent = Number(downRange.value);

  function getPrice() {
    return clamp(parseMoney(priceInput.value), PRICE_MIN, PRICE_MAX);
  }

  function getDownPayment(price) {
    return clamp(parseMoney(downInput.value), Math.round(price * 0.1), Math.round(price * 0.6));
  }

  function getTerm() {
    return clamp(Number(termInput.value) || TERM_MIN, TERM_MIN, TERM_MAX);
  }

  function updateDownDisplay(price, percent) {
    downPercent = clamp(Math.round(percent), DOWN_MIN_PERCENT, DOWN_MAX_PERCENT);
    downRange.value = String(downPercent);
    const down = Math.round((price * downPercent) / 100);
    downInput.value = formatMoney(down);
    downValueEl.textContent = formatMoney(down);
    downPercentEl.textContent = `(${downPercent}%)`;
    return down;
  }

  function render() {
    const price = getPrice();
    const term = getTerm();

    priceRange.value = String(price);
    priceInput.value = formatMoney(price);
    priceOut.textContent = formatMoney(price);

    const down = updateDownDisplay(price, downPercent);

    termRange.value = String(term);
    termInput.value = String(term);
    termOut.textContent = String(term);

    const monthly = calculateMonthly(price, down, term);
    monthlyEl.textContent = `${formatMoney(monthly)} ₽`;
  }

  priceRange.addEventListener('input', () => {
    priceInput.value = formatMoney(priceRange.value);
    render();
  });

  priceInput.addEventListener('change', () => {
    render();
  });

  downRange.addEventListener('input', () => {
    downPercent = Number(downRange.value);
    updateDownDisplay(getPrice(), downPercent);
    render();
  });

  downInput.addEventListener('change', () => {
    const price = getPrice();
    const down = getDownPayment(price);
    downPercent = (down / price) * 100;
    render();
  });

  termRange.addEventListener('input', () => {
    termInput.value = termRange.value;
    render();
  });

  termInput.addEventListener('change', () => {
    render();
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (submitBtn.disabled) return;

    const price = getPrice();
    const down = getDownPayment(price);
    const term = getTerm();

    const payload = {
      carPrice: price,
      downPayment: down,
      downPaymentPercent: downPercent,
      leaseTermMonths: term,
      monthlyPayment: calculateMonthly(price, down, term),
    };

    submitBtn.disabled = true;
    alert(JSON.stringify(payload, null, 2));
  });

  render();
}
