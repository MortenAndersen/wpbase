<div class="woo__wpbase__bar">
<a href="<?php echo WC()->cart->get_cart_url(); ?>" title="<?php _e( 'View your shopping cart' ); ?>"><?php echo WC()->cart->get_cart_total(); ?> - <?php echo sprintf (_n( '%d item', '%d items', WC()->cart->get_cart_contents_count() ), WC()->cart->get_cart_contents_count() ); ?></a>
<a href="<?php echo WC()->cart->get_checkout_url(); ?>">Checkout</a>


<?php

$form = '<form role="search" method="get" id="searchform" action="' . esc_url( home_url( '/'  ) ) . '">
	<div>
		<label class="screen-reader-text" for="s">' . __( 'Search for:', 'woocommerce' ) . '</label>
		<input type="text" value="' . get_search_query() . '" name="s" id="s" placeholder="' . __( 'Søg produkter', 'woocommerce' ) . '" />
		<input type="submit" id="searchsubmit" value="'. esc_attr__( 'Search', 'woocommerce' ) .'" />
		<input type="hidden" name="post_type" value="product" />
	</div>
</form>';

echo $form;
?>
</div>