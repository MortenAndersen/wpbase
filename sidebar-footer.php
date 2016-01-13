<?php if ( is_active_sidebar( 'footer') || has_nav_menu( 'footer-menu' ) ) { ?>
<footer role="contentinfo">
<div class="footer-wrap flex">
<?php dynamic_sidebar( 'footer' ); ?>
</div>
<?php get_template_part( 'menu-footer' ); ?>
</footer>
<?php } ?>