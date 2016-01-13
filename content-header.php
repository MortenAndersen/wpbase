<header class="content__header">
<div class="title__content">
<h1><?php the_title(); ?></h1>
<?php if (is_singular(array( 'news', 'post' ))) { ?>
<p class="dato"><b>Udgivet:</b> <?php the_date(); ?></p>
<p class="forfatter"><b>Forfatter:</b> <?php the_author() ?></p>
<?php $post_tags = wp_get_post_tags($post->ID); if(!empty($post_tags)) { ?>
<p class="tags"><?php the_tags('<b>Emne:</b> ' , ' - ') ?></p>
<?php } ?>
<?php } ?>
</div>
<?php if ( has_post_thumbnail() ) { ?>
<figure>
<?php
if ( is_page_template( 'page-aside-right.php' ) ) {
	echo the_post_thumbnail( 'content-aside-l-r-pic');
}
elseif ( is_page_template( 'page-aside-left.php' ) ) {
	echo the_post_thumbnail( 'content-aside-l-r-pic');
}
elseif ( is_page_template( 'page-aside.php' ) ) {
	echo the_post_thumbnail( 'content-aside-pic');
}
else {
	echo the_post_thumbnail( 'content-pic');
}
?>
<figcaption>
<?php echo get_post( get_post_thumbnail_id() )->post_excerpt; ?>
</figcaption>
</figure>
<?php } ?>
</header>