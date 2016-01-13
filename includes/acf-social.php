<?php

/* ---------------------- ACF Social felter ------------------------------------------------- */

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
			'instructions' => 'Tilføj link til Facebook',
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
			'instructions' => 'Tilføj link til Twitter',
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
			'instructions' => 'Tilføj link til Google +',
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