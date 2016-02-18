<?php

/* ---------------------- ACF Social felter ------------------------------------------------- */

if (function_exists('acf_add_options_page')) {

    acf_add_options_page(array('page_title' => 'Theme General Settings', 'menu_title' => 'WPbase admin', 'menu_slug' => 'wpbase-general-settings', 'capability' => 'edit_posts', 'redirect' => false));

    acf_add_options_sub_page(array('page_title' => 'Theme Social Settings', 'menu_title' => 'Social', 'parent_slug' => 'wpbase-general-settings',));
}
if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array (
    'key' => 'group_5694d8c9cc4d6',
    'title' => 'WPsocial',
    'fields' => array (
        array (
            'key' => 'field_5694d8d3edbfe',
            'label' => 'Facebook',
            'name' => 'facebook_url',
            'type' => 'url',
            'instructions' => 'Link til Facebook',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array (
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'default_value' => '',
            'placeholder' => '',
        ),
        array (
            'key' => 'field_5694ef05831b9',
            'label' => 'Twitter',
            'name' => 'twitter_url',
            'type' => 'url',
            'instructions' => 'Link til Twitter',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array (
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'default_value' => '',
            'placeholder' => '',
        ),
        array (
            'key' => 'field_5694ef5254d05',
            'label' => 'Google plus',
            'name' => 'google_plus_url',
            'type' => 'url',
            'instructions' => 'Link til Google +',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array (
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'default_value' => '',
            'placeholder' => '',
        ),
    ),
    'location' => array (
        array (
            array (
                'param' => 'options_page',
                'operator' => '==',
                'value' => 'acf-options-social',
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


/* --------------------- ACF social Widget ----------------------------------------- */

if (class_exists('acf')) {

    class hjemmesider_acf_social_widget extends WP_Widget
    {

        /**
         * Sets up the widgets name etc
         */
        public function __construct() {
            parent::__construct('acfsocial',
             // Base ID
            __('Sociale links', 'wpbase_domain'),
             // Name
            array('description' => __('Sociale link - ACF', 'wpbase_domain'),)
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
            get_template_part('acf/acf-social-links');
            echo $args['after_widget'];
        }
    }

    add_action('widgets_init', function () {
        register_widget('hjemmesider_acf_social_widget');
    });
}