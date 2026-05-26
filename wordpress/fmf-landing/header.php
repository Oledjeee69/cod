<?php

declare(strict_types=1);

?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <?php wp_head(); ?>
</head>
<body <?php body_class('page'); ?>>
<?php wp_body_open(); ?>

<header class="header">
    <div class="header__backdrop" aria-hidden="true"></div>
    <div class="container header__inner">
        <a class="header__logo" href="<?php echo esc_url(home_url('/')); ?>" aria-label="<?php bloginfo('name'); ?> — на главную">
            <span class="header__logo-mark">FMF</span>
            <span class="header__logo-text">Leasing</span>
        </a>

        <nav class="header__nav nav" id="site-nav" aria-label="Основное меню">
            <?php
            if (has_nav_menu('primary')) {
                wp_nav_menu([
                    'theme_location' => 'primary',
                    'container' => false,
                    'menu_class' => 'nav__list',
                    'fallback_cb' => false,
                    'items_wrap' => '<ul class="%2$s">%3$s</ul>',
                ]);
            } else {
                get_template_part('template-parts/nav', 'fallback');
            }
            ?>
        </nav>

        <a class="header__phone" href="tel:+78001234567" title="Позвонить">8 800 123-45-67</a>

        <button class="header__burger burger" type="button" aria-label="Открыть меню" aria-expanded="false" aria-controls="site-nav">
            <span class="burger__line"></span>
            <span class="burger__line"></span>
            <span class="burger__line"></span>
        </button>
    </div>
</header>
