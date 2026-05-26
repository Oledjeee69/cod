<?php

declare(strict_types=1);

if (! defined('ABSPATH')) {
    exit;
}

define('FMF_LANDING_VERSION', '1.0.0');
define('FMF_LANDING_DIR', get_template_directory());
define('FMF_LANDING_URI', get_template_directory_uri());

function fmf_landing_setup(): void
{
    add_theme_support('title-tag');
    add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script']);
    add_theme_support('post-thumbnails');

    register_nav_menus([
        'primary' => __('Primary Menu', 'fmf-landing'),
    ]);
}
add_action('after_setup_theme', 'fmf_landing_setup');

function fmf_landing_asset(string $relative): string
{
    $path = FMF_LANDING_DIR . '/dist/' . ltrim($relative, '/');
    $uri = FMF_LANDING_URI . '/dist/' . ltrim($relative, '/');

    if (file_exists($path)) {
        return add_query_arg('ver', (string) filemtime($path), $uri);
    }

    return $uri;
}

function fmf_landing_enqueue_assets(): void
{
    $css_glob = glob(FMF_LANDING_DIR . '/dist/assets/*.css') ?: [];
    $js_glob = glob(FMF_LANDING_DIR . '/dist/assets/*.js') ?: [];

    if ($css_glob !== []) {
        $css_file = basename($css_glob[0]);
        wp_enqueue_style('fmf-landing-app', fmf_landing_asset('assets/' . $css_file), [], null);
    }

    if ($js_glob !== []) {
        $js_file = basename($js_glob[0]);
        wp_enqueue_script('fmf-landing-app', fmf_landing_asset('assets/' . $js_file), [], null, true);
        wp_script_add_data('fmf-landing-app', 'type', 'module');
    }
}
add_action('wp_enqueue_scripts', 'fmf_landing_enqueue_assets');

function fmf_landing_fonts(): void
{
    echo '<link rel="preconnect" href="https://fonts.googleapis.com" />' . PHP_EOL;
    echo '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />' . PHP_EOL;
    echo '<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Unbounded:wght@500;700&display=swap" rel="stylesheet" />' . PHP_EOL;
}
add_action('wp_head', 'fmf_landing_fonts', 1);

function fmf_landing_script_module_tag(string $tag, string $handle, string $src): string
{
    if ($handle === 'fmf-landing-app') {
        return '<script type="module" src="' . esc_url($src) . '"></script>';
    }

    return $tag;
}
add_filter('script_loader_tag', 'fmf_landing_script_module_tag', 10, 3);
