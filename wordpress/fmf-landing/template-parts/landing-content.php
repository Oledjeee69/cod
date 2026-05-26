<?php

declare(strict_types=1);

$hero_image = esc_url(FMF_LANDING_URI . '/dist/assets/car-hero.svg');
?>
<main class="page__main">
    <section class="hero">
        <div class="container hero__inner">
            <div class="hero__content">
                <p class="hero__label">Автолизинг без лишних шагов</p>
                <h1 class="hero__title">Лизинг автомобиля под ваш бюджет</h1>
                <p class="hero__text">
                    Рассчитайте ежемесячный платёж, настройте срок и первоначальный взнос — и отправьте заявку в один клик.
                </p>
                <a class="button button--primary hero__cta" href="#calculator">Рассчитать платёж</a>
            </div>
            <div class="hero__media">
                <img class="hero__image" src="<?php echo $hero_image; ?>" alt="Современный автомобиль в лизинг" width="640" height="420" fetchpriority="high" loading="eager" />
            </div>
        </div>
    </section>

    <?php get_template_part('template-parts/landing', 'calculator'); ?>
    <?php get_template_part('template-parts/landing', 'benefits'); ?>
    <?php get_template_part('template-parts/landing', 'steps'); ?>
    <?php get_template_part('template-parts/landing', 'contacts'); ?>
</main>
