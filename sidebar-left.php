<aside class="first">
<?php
$my_post_meta = get_post_meta($post->ID, 'left', true);
if ( ! empty ( $my_post_meta ) )
echo '<section class="aside__content">'."\n".$my_post_meta."\n".'</section>'
?>

<?php dynamic_sidebar( 'left' ); ?>
</aside>