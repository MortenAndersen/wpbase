<?php get_template_part( 'footer-pre' ); ?>
<?php if ( is_active_sidebar( 'footericon')) { ?>
<div class="footer-icon">
<?php dynamic_sidebar( 'footericon' ); ?>
</div>
<?php } ?>
<?php do_action ( '__pre_footer' ); ?>
</div>
<!-- End #main (Wrapper) -->


<?php get_sidebar( 'footer' ); ?>

<?php get_template_part( 'call-to-action' ); ?>
<?php do_action ( '__after_footer' ); ?>

<div class="menu__icon">
<span class="icon-bar"></span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
</div>

<a class="scrollToTop" href="#">^</a>

<?php wp_footer(); ?>
<?php get_template_part( 'scripts' ); ?>


</body>
</html>