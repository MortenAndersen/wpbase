<?php if ( is_product_category() ) :?>
<?php
$term_id = get_queried_object()->term_id;
$post_id = 'product_cat_'.$term_id;
$custom_field = get_field('tekst_i_bunden', $post_id)
?>
<div class="woo__buttom__txt"><?php echo $custom_field; ?> </div>
<?php endif; ?>