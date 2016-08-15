<?php
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
        array('description' => __('Logo med Sidetitel og Tagline ', 'wpbase_domain'),)
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
        get_template_part('widgets/logo');
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
        array('description' => __('Logo (enkelt)', 'wpbase_domain'),)
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
        get_template_part('widgets/logo-clean');
        echo $args['after_widget'];
    }
}

add_action('widgets_init', function () {
    register_widget('hjemmesider_logo_small_widget');
});
