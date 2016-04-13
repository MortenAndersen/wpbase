<?php get_header(); ?>

<article>
<form id="searchform" action="<?php echo home_url();?>" method="get">
        <input type="text" placeholder="Søg i filarkivet" value="<?php get_search_query() ?>" name="s" id="s" />
        <input type="hidden" name="post_type" value="filarkiv" />
        <input class="inlineSubmit" id="searchsubmit" type="submit" alt="Search" value="Søg" />
</form>


<ul class="filarkiv nul">
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<li>
<a class="arkiv-fil" href="<?php the_field('dokument'); ?>" target="_blank"><?php the_title(); ?></a>
<div class="file-archive-cat">
<?php foreach((get_the_category()) as $category) {
    echo "<em>";
    echo $category->cat_name;
    echo "</em>";
} ?>
</div>
<?php the_content(); ?>
</li>
<?php endwhile; ?>
</ul>
<nav class="pagination">
<?php pagination_bar(); ?>
</nav>
<?php endif; ?>

</article>

<?php get_footer(); ?>