<?php
/*
Template Name: Aside Left
*/
?>

<?php get_header(); ?>

<?php get_sidebar( 'left' ); ?>

<article>
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<?php get_template_part( 'content-header' ); ?>
<?php the_content(); ?>
<?php endwhile; else: ?>
<p><?php _e( 'Ingen ting her', 'wpbase_domain' ); ?></p>
<?php endif; ?>
<?php get_template_part( 'accordion' ); ?>
<?php comments_template(); ?>
</article>
<?php get_footer(); ?>