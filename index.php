<?php get_header(); ?>

<article>
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<div <?php post_class(); ?>>
<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
<?php if ( has_post_thumbnail() ) { ?>
<a href="<?php the_permalink(); ?>"><?php the_post_thumbnail( 'medium'); ?></a>
<?php } ?>
<?php the_date('d. m Y', '<p class="dato">', '</p>'); ?>
<?php the_excerpt(); ?>
</div>
<?php endwhile; ?>
<nav class="pagination">
<?php pagination_bar(); ?>
</nav>
<?php endif; ?>

</article>

<?php get_sidebar( 'right' ); ?>

<?php get_footer(); ?>