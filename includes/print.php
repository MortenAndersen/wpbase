<?php
class hjemmesider_print_widget extends WP_Widget
{

    /**
     * Sets up the widgets name etc
     */
    public function __construct() {
        parent::__construct('printicon',
         // Base ID
        __('Print Icon', 'wpbase_domain'),
         // Name
        array('description' => __('Print ikon ', 'wpbase_domain'),)
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
        get_template_part('widgets/printicon');
        echo $args['after_widget'];
    }
}

add_action('widgets_init', function () {
    register_widget('hjemmesider_print_widget');
});