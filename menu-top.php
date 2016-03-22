<?php
	$top_nav = array(
		'theme_location' => 'top-menu',
		'container' =>  '',
     	'items_wrap'  => '<nav role="navigation" class="top__menu"><ul>'."\n".'%3$s</ul></nav>',

		'sub_menu' => false
	);
?>
<?php wp_nav_menu( $top_nav ); ?>
