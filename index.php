<?php get_header(); ?>

<article class="masonry-grid">
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<div <?php post_class(); ?>>
<?php if ( has_post_thumbnail() ) { ?>
<a href="<?php the_permalink(); ?>"><?php the_post_thumbnail( 'medium'); ?></a>
<?php } ?>
<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
<ul class="blog-info nul">
<li class="forfatter"><span class="type">Forfatter</span>: <span class="result"><?php the_author(); ?></span></li>
<li class="dato"><span class="type">Udgivet</span>: <span class="result"><?php the_time('d. M Y'); ?></span></li>
<li class="kommentar-antal"><span class="type">Antal kommentarer</span>: <span class="result"><?php comments_number( 'ingen', 'en kommentar', '% kommentarer' ); ?></span></li>
</ul>
<?php the_excerpt(); ?>
</div>
<?php endwhile; ?>
</article>
<nav class="pagination">
<?php pagination_bar(); ?>
</nav>
<?php endif; ?>





<?php get_footer(); ?>