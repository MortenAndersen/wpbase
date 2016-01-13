<?php get_header(); ?>

<article>
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<?php get_template_part( 'content-header' ); ?>
<?php the_content(); ?>

<?php endwhile; else: ?>
<p><?php _e( 'Ingen ting her', 'wpbase_domain' ); ?></p>
<?php wp_link_pages( array(
	'before'      => '<div class="page-links"><span class="page-links-title">' . __( 'Pages:', 'wpbase_domain' ) . '</span>',
	'after'       => '</div>',
	'link_before' => '<span>',
	'link_after'  => '</span>',
	) );
?>
<?php endif; ?>
<?php get_template_part( 'accordion' ); ?>
<?php comments_template(); ?>
</article>

<?php get_sidebar( 'right' ); ?>

<?php get_footer(); ?>