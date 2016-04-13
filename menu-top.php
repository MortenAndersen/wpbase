<?php if ( has_nav_menu( 'top-menu' ) ) : ?>
<?php
	$top_nav = array(
		'theme_location' => 'top-menu',
		'depth' => 1,
		'container' =>  '',
     	'items_wrap'  => '<nav role="navigation" class="top__menu"><ul>'."\n".'%3$s</ul></nav>'
	);
?>
<?php wp_nav_menu( $top_nav ); ?>
<?php endif; ?>