<?php
/**
 * Description tab
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/tabs/description.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you (the theme developer).
 * will need to copy the new files to your theme to maintain compatibility. We try to do this.
 * as little as possible, but it does happen. When this occurs the version of the template file will.
 * be bumped and the readme will list any important changes.
 *
 * @see 	    http://docs.woothemes.com/document/template-structure/
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     2.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $post;

$heading = esc_html( apply_filters( 'woocommerce_product_description_heading', __( 'Product Description', 'woocommerce' ) ) );

?>

<?php if (class_exists('acf')): ?>
<?php if (get_field("overskrift_h1")): ?>
<h1 class="shop__h1"><?php the_field("overskrift_h1"); ?></h1>
<?php endif; ?>
<?php if (get_field("deloverskrift_h2")): ?>
<h2 class="shop__h2"><?php the_field("deloverskrift_h2"); ?></h2>
<?php endif; ?>
<?php endif; ?>
<?php the_content(); ?>
