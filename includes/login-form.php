<?php
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
        array('description' => __('Loginform', 'wpbase_domain'),)
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
        get_template_part('widgets/login-form');
        echo $args['after_widget'];
    }
}

add_action('widgets_init', function () {
    register_widget('hjemmesider_loginform_widget');
});