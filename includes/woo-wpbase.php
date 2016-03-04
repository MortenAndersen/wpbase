<?php
remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10);
remove_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10);
remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40 );
remove_action( 'woocommerce_before_shop_loop', 'woocommerce_result_count', 20 );

add_action('woocommerce_before_main_content', 'wpbase_wrapper_start', 10);
add_action('woocommerce_after_main_content', 'wpbase_wrapper_end', 10);

// Check article class

add_filter( 'loop_shop_per_page', create_function( '$cols', 'return 16;' ), 20 );
function wpbase_wrapper_start() {

	if (is_product_category() && !is_active_sidebar( 'wpbasewooarchiveaside' )) {
  echo '<article class="product_archive_big">';
	}

	elseif (is_product_category() && is_active_sidebar( 'wpbasewooarchiveaside' ) ) {
  echo '<article class="product_archive_small">';
	}

	elseif (is_product_tag() && is_active_sidebar( 'wpbasewooarchiveaside' ) ) {
  echo '<article class="product_tag_small">';
	}

	elseif (is_product_tag() && !is_active_sidebar( 'wpbasewooarchiveaside' )) {
  echo '<article class="product_tag_big">';
	}

	elseif (is_product() && is_active_sidebar( 'wpbasewooleft' ) ) {
  echo '<article class="product first-aside">';
	}

	elseif (is_product() && !is_active_sidebar( 'wpbasewooleft' ) ) {
  echo '<article class="product no-aside">';
	}

	elseif (is_shop() ) {
  echo '<article class="shop">';
	}

}



function wpbase_wrapper_end() {
  echo '</article>';
}

// Hide Coupon on cart page
function hide_coupon_field_on_cart( $enabled ) {
	if ( is_cart() ) {
		$enabled = false;
	}
	return $enabled;
}
add_filter( 'woocommerce_coupons_enabled', 'hide_coupon_field_on_cart' );


add_filter( 'woocommerce_add_to_cart_fragments', 'woocommerce_header_add_to_cart_fragment' );

function woocommerce_header_add_to_cart_fragment( $fragments ) {
	ob_start();
	?>
	<a class="cart-contents" href="<?php echo WC()->cart->get_cart_url(); ?>" title="<?php _e( 'View your shopping cart' ); ?>"><?php echo sprintf (_n( '%d item', '%d items', WC()->cart->get_cart_contents_count() ), WC()->cart->get_cart_contents_count() ); ?> | <?php echo WC()->cart->get_cart_total(); ?></a>
	<?php

	$fragments['a.cart-contents'] = ob_get_clean();

	return $fragments;
}

add_filter( 'woocommerce_product_tabs', 'woo_remove_product_tabs', 98 );

function woo_remove_product_tabs( $tabs ) {


    unset( $tabs['reviews'] ); 			// Remove the reviews tab
    unset( $tabs['additional_information'] );  	// Remove the additional information tab

    return $tabs;

}

add_filter( 'woocommerce_enqueue_styles', '__return_false' );

add_filter( 'woocommerce_checkout_fields' , 'custom_override_checkout_fields' );
// Our hooked in function - $fields is passed via the filter!
function custom_override_checkout_fields( $fields ) {
     unset($fields['order']['order_comments']);
     unset($fields['billing']['billing_phone']);
     unset($fields['billing']['billing_address_2']);
unset($fields['billing']['billing_company']);
     return

$fields;
}

function wpbase_woo_widgets_init() {

    register_sidebar(array('name' => __('WooCommerce single Left', 'wpbase_domain'), 'id' => 'wpbasewooleft', 'description' => '', 'class' => '', 'before_widget' => '<section class="woo__section %2$s">', 'after_widget' => '</section>', 'before_title' => '<h4>', 'after_title' => '</h4>',));
    register_sidebar(array('name' => __('WooCommerce archive top', 'wpbase_domain'), 'id' => 'wpbasewooarchive', 'description' => '', 'class' => '', 'before_widget' => '<div class="woo__archive_widget %2$s">', 'after_widget' => '</div>', 'before_title' => '<strong>', 'after_title' => '</strong>',));
    register_sidebar(array('name' => __('WooCommerce archive aside', 'wpbase_domain'), 'id' => 'wpbasewooarchiveaside', 'description' => '', 'class' => '', 'before_widget' => '<div class="woo__archive_aside_widget %2$s">', 'after_widget' => '</div>', 'before_title' => '<strong>', 'after_title' => '</strong>',));
}
add_action('widgets_init', 'wpbase_woo_widgets_init');


add_action( 'after_setup_theme', 'woocommerce_support' );
function woocommerce_support() {
    add_theme_support( 'woocommerce' );
}

/* ------------------------------ Widget------------------------------------ */


// Kassen

class Hjemmesider_woo_kassen extends WP_Widget
{

    /**
     * Register widget with WordPress.
     */
    function __construct() {
        parent::__construct('Hjemmesider_woo_kassen',
         // Base ID
        __('wookassen', 'wpbase_domain'),
         // Name
        array('description' => __('Woo kassen', 'wpbase_domain'),)
         // Args
        );
    }

    /**
     * Front-end display of widget.
     *
     * @see WP_Widget::widget()
     *
     * @param array $args     Widget arguments.
     * @param array $instance Saved values from database.
     */
    public function widget($args, $instance) {
        echo $args['before_widget'];
        if (!empty($instance['title'])) {
            echo $args['before_title'] . apply_filters('widget_title', $instance['title']) . $args['after_title'];
        }
        ?>

<div class="woo__wpbase__bar">
<img src="<?php echo get_template_directory_uri(); ?>/img/cart.svg" alt="Cart" />
<a class="cart-contents" href="<?php echo WC()->cart->get_cart_url(); ?>" title="<?php _e( 'View your shopping cart' ); ?>"><?php echo sprintf (_n( '%d item', '%d items', WC()->cart->get_cart_contents_count() ), WC()->cart->get_cart_contents_count() ); ?> | <?php echo WC()->cart->get_cart_total(); ?></a>

<?php global $woocommerce;
if ( sizeof( $woocommerce->cart->cart_contents) > 0 ) :
	echo ' | <a href="' . $woocommerce->cart->get_checkout_url() . '" title="' . __( 'Checkout' ) . '">' . __( 'Gå til betaling' ) . '</a> | ';
endif;
?>
</div>


<?php

        /* Restore original Post Data */
        wp_reset_postdata();

        echo $args['after_widget'];
    }


    /**
     * Back-end widget form.
     *
     * @see WP_Widget::form()
     *
     * @param array $instance Previously saved values from database.
     */
    public function form($instance) {
        $title = !empty($instance['title']) ? $instance['title'] : __('Indkøbskurv', 'wpbase_domain');
?>
        <p>
        <label for="<?php
        echo $this->get_field_id('title'); ?>"><?php
        _e('Title:'); ?></label>
        <input class="widefat" id="<?php
        echo $this->get_field_id('title'); ?>" name="<?php
        echo $this->get_field_name('title'); ?>" type="text" value="<?php
        echo esc_attr($title); ?>">
        </p>
        <?php
    }

    /**
     * Sanitize widget form values as they are saved.
     *
     * @see WP_Widget::update()
     *
     * @param array $new_instance Values just sent to be saved.
     * @param array $old_instance Previously saved values from database.
     *
     * @return array Updated safe values to be saved.
     */
    public function update($new_instance, $old_instance) {
        $instance = array();
        $instance['title'] = (!empty($new_instance['title'])) ? strip_tags($new_instance['title']) : '';

        return $instance;
    }
}

// register Hjemmesider_banner_Widget widget
function register_Hjemmesider_woo_cart_widget() {
    register_widget('Hjemmesider_woo_kassen');
}
add_action('widgets_init', 'register_Hjemmesider_woo_cart_widget');

/* ------------------------------ ACF ------------------------------------ */

if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array (
	'key' => 'group_56af0fe50f06e',
	'title' => 'Woo',
	'fields' => array (
		array (
			'key' => 'field_56af100973b62',
			'label' => 'Tekst i bunden',
			'name' => 'tekst_i_bunden',
			'type' => 'wysiwyg',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array (
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '',
			'tabs' => 'all',
			'toolbar' => 'full',
			'media_upload' => 1,
		),
	),
	'location' => array (
		array (
			array (
				'param' => 'taxonomy',
				'operator' => '==',
				'value' => 'all',
			),
		),
	),
	'menu_order' => 0,
	'position' => 'normal',
	'style' => 'default',
	'label_placement' => 'top',
	'instruction_placement' => 'label',
	'hide_on_screen' => '',
	'active' => 1,
	'description' => '',
));

endif;


if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array (
	'key' => 'group_56af318dee73f',
	'title' => 'Overskrifter - SEO',
	'fields' => array (
		array (
			'key' => 'field_56af319539b89',
			'label' => 'Overskrift H1',
			'name' => 'overskrift_h1',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array (
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'maxlength' => '',
			'readonly' => 0,
			'disabled' => 0,
		),
		array (
			'key' => 'field_56af31a539b8a',
			'label' => 'Deloverskrift H2',
			'name' => 'deloverskrift_h2',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array (
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'maxlength' => '',
			'readonly' => 0,
			'disabled' => 0,
		),
	),
	'location' => array (
		array (
			array (
				'param' => 'post_type',
				'operator' => '==',
				'value' => 'product',
			),
		),
	),
	'menu_order' => 0,
	'position' => 'normal',
	'style' => 'default',
	'label_placement' => 'top',
	'instruction_placement' => 'label',
	'hide_on_screen' => '',
	'active' => 1,
	'description' => '',
));

endif;