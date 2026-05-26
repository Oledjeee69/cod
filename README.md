# FMF Test — лендинг лизинга + WordPress

Тестовое задание: адаптивная вёрстка (БЭМ + SCSS), калькулятор лизинга, интеграция в WordPress, оптимизация.

## Стек

- Vite 8, SCSS, vanilla JS
- WordPress-тема: `wordpress/fmf-landing/`

## Быстрый старт (статика)

```bash
npm install
npm run dev
```

Откройте URL из терминала (обычно http://localhost:5173).

## Сборка

```bash
npm run build
```

Артефакты:

- `dist/` — статический сайт (GitHub Pages)
- `wordpress/fmf-landing/dist/` — копия для темы WP

## WordPress

1. Выполните `npm run build`.
2. Скопируйте папку `wordpress/fmf-landing` в `wp-content/themes/fmf-landing`.
3. В админке: **Внешний вид → Темы** → активируйте **FMF Landing**.
4. **Страницы → Добавить** → шаблон **FMF Landing** → опубликовать.
5. **Настройки → Чтение** → статическая главная → выберите эту страницу.

## Калькулятор

| Поле | Диапазон |
|------|----------|
| Стоимость автомобиля | 1 500 000 – 10 000 000 ₽ |
| Первоначальный взнос | 10% – 60% от стоимости |
| Срок лизинга | 6 – 120 мес. |

Кнопка **Оформить заявку** блокируется и выводит JSON с полями в `alert`.

## Pixel Perfect

Экспорты макета положите в `design/` (см. [design/README.md](design/README.md)). Токены в `src/scss/_variables.scss`.

## Оптимизация

- Минификация CSS/JS (Vite build)
- `font-display: swap`, preconnect к Google Fonts
- Семантическая разметка, meta description, Open Graph, JSON-LD
- Lazy loading для некритичных изображений (hero — `fetchpriority="high"`)
- Адаптив: 375 / 768 / 1280+

Проверка: [W3C Validator](https://validator.w3.org/) для `dist/index.html`, Lighthouse в Chrome DevTools.

## GitHub Pages

Workflow: [.github/workflows/pages.yml](.github/workflows/pages.yml)

В репозитории: **Settings → Pages → Source: GitHub Actions**.

После push в `main` demo будет в `https://<user>.github.io/<repo>/`.

## Структура

```
src/scss/blocks/     # БЭМ-блоки
src/js/              # calculator, burger
wordpress/fmf-landing/  # тема WP
design/              # PNG-референсы из Figma
```

## Отчёт по ИИ

См. [AI_USAGE.md](AI_USAGE.md).
