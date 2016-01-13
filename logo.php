<div class="logo-widget">
<a href="<?php echo home_url(); ?>" class="logo"><img src="<?php header_image(); ?>" alt="<?php echo( get_bloginfo( 'title' ) ); ?>" /></a>
<?php if ( get_bloginfo( 'name' ) ) {
    echo '<p class="navn">' . get_bloginfo('name') . '</p>';
} ?>

<?php if ( get_bloginfo( 'description' ) ) {
    echo '<p class="description"> - ' . get_bloginfo('description') . '</p>';
} ?>
</div>