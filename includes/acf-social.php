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
        array (
            'key' => 'field_hjemlinkedin',
            'label' => 'Linkedin',
            'name' => 'linkedin_url',
            'type' => 'url',
            'instructions' => 'Link til Linkdin',
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


class hjemmesider_social_links_Widget extends WP_Widget {

    /**
     * Sets up the widgets name etc
     */
    public function __construct() {
        $widget_ops = array(
            'classname' => 'wpbase_social_links_widget',
            'description' => 'Sociale ikoner til deling',
        );
        parent::__construct( 'wpbase_social_links_widget', 'Social links', $widget_ops );
    }

    /**
     * Outputs the content of the widget
     *
     * @param array $args
     * @param array $instance
     */

    public function widget( $args, $instance ) {
        // outputs the content of the widget
        echo $args['before_widget'];
        if ( ! empty( $instance['title'] ) ) {
            echo  $args['before_title'] . apply_filters( 'widget_title', $instance['title'] ). $args['after_title'];
        }

?>

<ul class="acf__social">
<?php if( get_field( 'facebook_url', 'option' ) ): ?>
<li><a class="facebook__link" href="<?php the_field( 'facebook_url', 'options' ); ?>" target="_blank">Facebook</a></li>
<?php endif; ?>
<?php if( get_field( 'twitter_url', 'option' ) ): ?>
<li><a class="twitter__link" href="<?php the_field( 'twitter_url', 'options' ); ?>" target="_blank">Twitter</a></li>
<?php endif; ?>
<?php if( get_field( 'google_plus_url', 'option' ) ): ?>
<li><a class="google-plus__link" href="<?php the_field( 'google_plus_url', 'options' ); ?>" target="_blank">Google +</a></li>
<?php endif; ?>
<?php if( get_field( 'linkedin_url', 'option' ) ): ?>
<li><a class="linkedin__link" href="<?php the_field( 'linkedin_url', 'options' ); ?>" target="_blank">Linkedin</a></li>
<?php endif; ?>
</ul>

<?php

        echo $args['after_widget'];
    }

    /**
     * Outputs the options form on admin
     *
     * @param array $instance The widget options
     */
    public function form( $instance ) {
        $title = ! empty( $instance['title'] ) ? $instance['title'] : __( 'Følg os på', 'wpbase_domain' );
        ?>
        <p>
        <label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Title:' ); ?></label>
        <input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>">
        </p>
        <?php
    }

    /**
     * Processing widget options on save
     *
     * @param array $new_instance The new options
     * @param array $old_instance The previous options
     */
    public function update( $new_instance, $old_instance ) {
        $instance = array();
        $instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';

        return $instance;
    }
}

add_action( 'widgets_init', function(){
    register_widget( 'hjemmesider_social_links_Widget' );
});

}
