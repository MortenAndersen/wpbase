<?php get_header(); ?>

<article>
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<div <?php post_class(); ?>>
<a href="<?php the_permalink(); ?>"><?php the_post_thumbnail(); ?></a>
<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
<?php the_date('d. m Y', '<p class="dato">', '</p>'); ?>
<?php the_excerpt(); ?>
</div>
<?php endwhile; ?>
<nav class="pagination">
<?php pagination_bar(); ?>
</nav>
<?php endif; ?>

</article>

<?php get_footer(); ?>