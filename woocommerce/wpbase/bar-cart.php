<div class="woo__wpbase__bar">
<a class="cart-contents" href="<?php echo WC()->cart->get_cart_url(); ?>" title="<?php _e( 'View your shopping cart' ); ?>"><?php echo sprintf (_n( '%d item', '%d items', WC()->cart->get_cart_contents_count() ), WC()->cart->get_cart_contents_count() ); ?> | <?php echo WC()->cart->get_cart_total(); ?></a>

<?php global $woocommerce;
if ( sizeof( $woocommerce->cart->cart_contents) > 0 ) :
	echo ' | <a href="' . $woocommerce->cart->get_checkout_url() . '" title="' . __( 'Checkout' ) . '">' . __( 'Checkout' ) . '</a> | ';
endif;
?>
<?php dynamic_sidebar( 'wpbasewoobar' ); ?>
</div>