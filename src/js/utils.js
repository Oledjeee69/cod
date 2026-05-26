export const PRICE_MIN = 1_500_000;
export const PRICE_MAX = 10_000_000;
export const DOWN_MIN_PERCENT = 10;
export const DOWN_MAX_PERCENT = 60;
export const TERM_MIN = 6;
export const TERM_MAX = 120;
export const ANNUAL_RATE = 0.14;

export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export function parseMoney(value) {
  const digits = String(value).replace(/\D/g, '');
  return digits ? Number(digits) : 0;
}

export function formatMoney(value) {
  return new Intl.NumberFormat('ru-RU').format(Math.round(value));
}

export function calculateMonthly(price, downPayment, months) {
  const principal = price - downPayment;
  if (principal <= 0 || months <= 0) return 0;

  const monthlyRate = ANNUAL_RATE / 12;
  if (monthlyRate === 0) return Math.round(principal / months);

  const factor = (1 + monthlyRate) ** months;
  const payment = (principal * monthlyRate * factor) / (factor - 1);
  return Math.round(payment);
}
