<?php if ( is_active_sidebar( 'footer') || has_nav_menu( 'footer-menu' ) ) { ?>
<footer role="contentinfo">
<div class="page-wrap page-wrap-footer flex">
<?php dynamic_sidebar( 'footer' ); ?>
</div>
<?php get_template_part( 'menu-footer' ); ?>
</footer>
<?php } ?>