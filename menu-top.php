<div class="top__menu__bar">
<?php
	$top_nav = array(
		'theme_location' => 'header-menu',
		'container' =>  '',
     	'items_wrap'  => '<nav role="navigation" class="drop__down JS-menu"><ul>'."\n".'%3$s</ul></nav>',

		'sub_menu' => true
	);
?>
<?php wp_nav_menu( $top_nav ); ?>
</div>
