<?php

declare(strict_types=1);

get_template_part('template-parts/application', 'dialog');
?>
<footer class="footer">
    <div class="container footer__inner">
        <p class="footer__copy">© <span id="year"></span> <?php bloginfo('name'); ?>. Тестовая вёрстка.</p>
        <a class="footer__link" href="#">Политика конфиденциальности</a>
    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
