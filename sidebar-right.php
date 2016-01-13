<aside class="last">
<?php
$my_post_meta = get_post_meta($post->ID, 'right', true);
if ( ! empty ( $my_post_meta ) )
    echo '<section class="aside__content">'."\n".$my_post_meta."\n".'</section>'
?>

<?php dynamic_sidebar( 'right' ); ?>
</aside>