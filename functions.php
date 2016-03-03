<?php

// Menu
//Deletes all CSS classes and id's, except for those listed in the array below
function custom_wp_nav_menu($var) {
    return is_array($var) ? array_intersect($var, array(

    //List of allowed menu classes
    'current_page_item', 'current_page_parent', 'current_page_ancestor', 'first', 'last', 'vertical', 'horizontal', 'menu-item-has-children')) : '';
}
add_filter('nav_menu_css_class', 'custom_wp_nav_menu');
add_filter('nav_menu_item_id', 'custom_wp_nav_menu');
add_filter('page_css_class', 'custom_wp_nav_menu');

//Replaces "current-menu-item" with "active"
function current_to_active($text) {
    $replace = array(

    //List of menu item classes that should be changed to "active"
    'current_page_item' => 'active', 'current_page_parent' => 'active', 'current_page_ancestor' => 'active',);
    $text = str_replace(array_keys($replace), $replace, $text);
    return $text;
}
add_filter('wp_nav_menu', 'current_to_active');

//Deletes empty classes and removes the sub menu class
function strip_empty_classes($menu) {
    $menu = preg_replace('/ class=""| class="sub-menu"/', '', $menu);
    return $menu;
}
add_filter('wp_nav_menu', 'strip_empty_classes');

// Responsive img
add_filter('post_thumbnail_html', 'remove_width_attribute', 10);
add_filter('wp_get_attachment_link', 'remove_width_attribute', 10);
add_filter('the_content', 'remove_width_attribute', 10);
add_filter('image_send_to_editor', 'remove_width_attribute', 10);

function remove_width_attribute($html) {
    $html = preg_replace('/(width|height)="\d*"\s/', "", $html);
    return $html;
}

// Embed (video etc.)
add_filter('embed_oembed_html', 'wpbase_embed_oembed_html', 99, 4);
function wpbase_embed_oembed_html($html, $url, $attr, $post_id) {
    return '<div class="embedded__content">' . $html . '</div>';
}

// Images

add_action('after_setup_theme', 'wpdocs_theme_setup');
function wpdocs_theme_setup() {
    add_image_size('content-pic', 1100);
    add_image_size('content-aside-pic', 550);
    add_image_size('content-aside-l-r-pic', 825);
}

// Scripts

// Remove comment-reply.min.js from footer
function crunchify_clean_header_hook() {
    wp_deregister_script('comment-reply');
}
add_action('init', 'crunchify_clean_header_hook');

// Flytter scripts til footer
function wpbase_footer_enqueue_scripts() {
    remove_action('wp_head', 'wp_print_scripts');
    remove_action('wp_head', 'wp_print_head_scripts', 9);
    remove_action('wp_head', 'wp_enqueue_scripts', 1);
}
add_action('wp_enqueue_scripts', 'wpbase_footer_enqueue_scripts');

function wpbase_scripts() {

    wp_register_script('theme-script', get_template_directory_uri() . '/js/theme.js', array('jquery'));
    wp_enqueue_script('theme-script');
}

add_action('wp_enqueue_scripts', 'wpbase_scripts');

function wpbase_widgets_init() {

    register_sidebar(array('name' => __('Header Stack Right', 'wpbase_domain'), 'id' => 'headerstackright', 'description' => '', 'class' => '', 'before_widget' => '<div class="stack content__right %2$s">', 'after_widget' => '</div>', 'before_title' => '<h4>', 'after_title' => '</h4>',));
    register_sidebar(array('name' => __('Header Stack', 'wpbase_domain'), 'id' => 'headerstack', 'description' => '', 'class' => '', 'before_widget' => '<div class="stack %2$s">', 'after_widget' => '</div>', 'before_title' => '<h4>', 'after_title' => '</h4>',));
    register_sidebar(array('name' => __('Header Container', 'wpbase_domain'), 'id' => 'headercontainer', 'description' => '', 'class' => '', 'before_widget' => '<div class="item %2$s">', 'after_widget' => '</div>', 'before_title' => '<h4>', 'after_title' => '</h4>',));
    register_sidebar(array('name' => __('Header Flex DESIGNER', 'wpbase_domain'), 'id' => 'headerdesigner', 'description' => '', 'class' => '', 'before_widget' => '<div class="header-design-item %2$s">', 'after_widget' => '</div>', 'before_title' => '<h4>', 'after_title' => '</h4>',));
    register_sidebar(array('name' => __('Left', 'wpbase_domain'), 'id' => 'left', 'description' => '', 'class' => '', 'before_widget' => '<section>', 'after_widget' => '</section>', 'before_title' => '<h4>', 'after_title' => '</h4>',));
    register_sidebar(array('name' => __('Right', 'wpbase_domain'), 'id' => 'right', 'description' => '', 'class' => '', 'before_widget' => '<section>', 'after_widget' => '</section>', 'before_title' => '<h4>', 'after_title' => '</h4>',));
    register_sidebar(array('name' => __('Banner', 'wpbase_domain'), 'id' => 'banner', 'description' => 'Banner i browserens bredde', 'class' => '', 'before_widget' => '', 'after_widget' => '', 'before_title' => '<h4>', 'after_title' => '</h4>',));
    register_sidebar(array('name' => __('Banner inside', 'wpbase_domain'), 'id' => 'bannerinside', 'description' => 'Banner i sidens bredde', 'class' => '', 'before_widget' => '', 'after_widget' => '', 'before_title' => '<h4>', 'after_title' => '</h4>',));
    register_sidebar(array('name' => __('Info bar', 'wpbase_domain'), 'id' => 'infobar', 'description' => '', 'class' => '', 'before_widget' => '<div class="item %2$s">', 'after_widget' => '</div>', 'before_title' => '<h4>', 'after_title' => '</h4>',));
    register_sidebar(array('name' => __('PRE Footer', 'wpbase_domain'), 'id' => 'footerpre', 'description' => '', 'class' => '', 'before_widget' => '<div class="item prefooter-design-item %2$s">', 'after_widget' => '</div>', 'before_title' => '<h4>', 'after_title' => '</h4>',));
    register_sidebar(array('name' => __('Footer', 'wpbase_domain'), 'id' => 'footer', 'description' => '', 'class' => '', 'before_widget' => '<div class="item %2$s">', 'after_widget' => '</div>', 'before_title' => '<h4>', 'after_title' => '</h4>',));
}
add_action('widgets_init', 'wpbase_widgets_init');


// Shortcode

function flex($atts, $content = null) {

    return '<div class="flex">' . do_shortcode($content) . '</div>';
}
add_shortcode('con', 'flex');

function flexitem($atts, $content = null) {

    return '<div class="item">' . do_shortcode($content) . '</div>';
}
add_shortcode('item', 'flexitem');

function flexitem_right($atts, $content = null) {

    return '<div class="item right-align">' . do_shortcode($content) . '</div>';
}
add_shortcode('item-right', 'flexitem_right');

// Shortcode in Widgets

add_filter('widget_text', 'do_shortcode');

function wpbase_add_editor_styles() {
    add_editor_style('custom-editor-style.css');
}
add_action('after_setup_theme', 'wpbase_add_editor_styles');

// theme support

$defaults = array('default-image' => get_template_directory_uri() . '/logo.png', 'random-default' => false, 'width' => false, 'height' => false, 'flex-height' => false, 'flex-width' => false, 'default-text-color' => false, 'header-text' => false, 'uploads' => true,);
add_theme_support('custom-header', $defaults);

function pagination_bar() {
    global $wp_query;

    $total_pages = $wp_query->max_num_pages;

    if ($total_pages > 1) {
        $current_page = max(1, get_query_var('paged'));

        echo paginate_links(array('base' => get_pagenum_link(1) . '%_%', 'format' => '/page/%#%', 'current' => $current_page, 'total' => $total_pages,));
    }
}

add_theme_support('custom-background');

if (!isset($content_width)) $content_width = 1100;

if (!function_exists('wpbase_setup')):

    function wpbase_setup() {

        load_theme_textdomain('wpbase_domain', get_template_directory() . '/languages');

        // Add default posts and comments RSS feed links to head.
        add_theme_support('automatic-feed-links');

        /*
         * Let WordPress manage the document title.
         * By adding theme support, we declare that this theme does not use a
         * hard-coded <title> tag in the document head, and expect WordPress to
         * provide it for us.
        */
        add_theme_support('title-tag');

        /*
         * Enable support for Post Thumbnails on posts and pages.
         *
         * See: https://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
        */
        add_theme_support('post-thumbnails');
        set_post_thumbnail_size(550, 415, true);

        // This theme uses wp_nav_menu() in two locations.
        register_nav_menus(array('header-menu' => __('Header Menu', 'wpbase_domain'), 'footer-menu' => __('Footer Menu', 'wpbase_domain'),));

        /*
         * Switch default core markup for search form, comment form, and comments
         * to output valid HTML5.
        */
        add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));

        /*
         * Clean header
        */
        remove_action('wp_head', 'feed_links_extra', 3);
        remove_action('wp_head', 'feed_links', 2);
        remove_action('wp_head', 'rsd_link');
        remove_action('wp_head', 'wlwmanifest_link');
        remove_action('wp_head', 'index_rel_link');
        remove_action('wp_head', 'parent_post_rel_link', 10, 0);
        remove_action('wp_head', 'start_post_rel_link', 10, 0);
        remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0);
        remove_action('wp_head', 'wp_generator');
    }
endif;
 // wpbase_setup
add_action('after_setup_theme', 'wpbase_setup');

add_filter('dynamic_sidebar', '__return_empty_string');
add_filter('dynamic_sidebar', '__return_empty_string');

function disable_wp_emojicons() {

    // all actions related to emojis
    remove_action('admin_print_styles', 'print_emoji_styles');
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_filter('wp_mail', 'wp_staticize_emoji_for_email');
    remove_filter('the_content_feed', 'wp_staticize_emoji');
    remove_filter('comment_text_rss', 'wp_staticize_emoji');

    // filter to remove TinyMCE emojis
    add_filter('tiny_mce_plugins', 'disable_emojicons_tinymce');
}
add_action('init', 'disable_wp_emojicons');

function disable_emojicons_tinymce($plugins) {
    if (is_array($plugins)) {
        return array_diff($plugins, array('wpemoji'));
    }
    else {
        return array();
    }
}

/* ----------------------------------------------------------------------- */

class icon_bar extends WP_Widget
{

    /**
     * Sets up the widgets name etc
     */
    public function __construct() {
        parent::__construct('hjemmesiderknap',
         // Base ID
        __('Info knap', 'wpbase_domain'),
         // Name
        array('description' => __('Hjemmesider.dk - Knap til sliderbar', 'wpbase_domain'),)
         // Args
        );
    }

    /**
     * Outputs the content of the widget
     *
     * @param array $args
     * @param array $instance
     */
    public function widget($args, $instance) {
        echo $args['before_widget'];
        get_template_part('bar-icon');
        echo $args['after_widget'];
    }
}

add_action('widgets_init', function () {
    register_widget('icon_bar');
});

class hjemmesider_social_widget extends WP_Widget
{

    /**
     * Sets up the widgets name etc
     */
    public function __construct() {
        parent::__construct('hjemmesidersocial',
         // Base ID
        __('Sociale ikoner', 'wpbase_domain'),
         // Name
        array('description' => __('Hjemmesider.dk - Sociale ikoner', 'wpbase_domain'),)
         // Args
        );
    }

    /**
     * Outputs the content of the widget
     *
     * @param array $args
     * @param array $instance
     */
    public function widget($args, $instance) {
        echo $args['before_widget'];
        get_template_part('socialbar');
        echo $args['after_widget'];
    }
}

add_action('widgets_init', function () {
    register_widget('hjemmesider_social_widget');
});

/* --------------------- 2 LOGO Widget ----------------------------------------- */

class hjemmesider_logo_widget extends WP_Widget
{

    /**
     * Sets up the widgets name etc
     */
    public function __construct() {
        parent::__construct('hjemmesiderlogo',
         // Base ID
        __('Logo', 'wpbase_domain'),
         // Name
        array('description' => __('Hjemmesider.dk - Logo, Sidetitel og Tagline ', 'wpbase_domain'),)
         // Args
        );
    }

    /**
     * Outputs the content of the widget
     *
     * @param array $args
     * @param array $instance
     */
    public function widget($args, $instance) {
        echo $args['before_widget'];
        get_template_part('logo');
        echo $args['after_widget'];
    }
}

add_action('widgets_init', function () {
    register_widget('hjemmesider_logo_widget');
});

class hjemmesider_logo_small_widget extends WP_Widget
{

    /**
     * Sets up the widgets name etc
     */
    public function __construct() {
        parent::__construct('hjemmesiderlogosmall',
         // Base ID
        __('Logo clean', 'wpbase_domain'),
         // Name
        array('description' => __('Hjemmesider.dk - Logo', 'wpbase_domain'),)
         // Args
        );
    }

    /**
     * Outputs the content of the widget
     *
     * @param array $args
     * @param array $instance
     */
    public function widget($args, $instance) {
        echo $args['before_widget'];
        get_template_part('logo-clean');
        echo $args['after_widget'];
    }
}

add_action('widgets_init', function () {
    register_widget('hjemmesider_logo_small_widget');
});

/* --------------------- Loginform Widget ----------------------------------------- */

class hjemmesider_loginform_widget extends WP_Widget
{

    /**
     * Sets up the widgets name etc
     */
    public function __construct() {
        parent::__construct('hjemmesiderloginform',
         // Base ID
        __('Loginform', 'wpbase_domain'),
         // Name
        array('description' => __('Hjemmesider.dk - Loginform', 'wpbase_domain'),)
         // Args
        );
    }

    /**
     * Outputs the content of the widget
     *
     * @param array $args
     * @param array $instance
     */
    public function widget($args, $instance) {
        echo $args['before_widget'];
        get_template_part('user/login-form');
        echo $args['after_widget'];
    }
}

add_action('widgets_init', function () {
    register_widget('hjemmesider_loginform_widget');
});









/* ---------------------- ACF Theme Admin ------------------------------------------------- */

 require_once ('includes/acf-social.php');

/* ---------------------- WooCommerce ------------------------------------------------- */

require_once ('includes/woo-wpbase.php');








