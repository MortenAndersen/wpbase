<?php if ( has_nav_menu( 'header-menu' ) ) : ?>
<div class="main__menu__bar">
<?php
	$main_nav = array(
		'theme_location' => 'header-menu',
		'container' =>  '',
     	'items_wrap'  => '<nav role="navigation" class="dropdown__menu JS-menu"><ul>'."\n".'%3$s</ul></nav>',

		'sub_menu' => true
	);
?>
<?php wp_nav_menu( $main_nav ); ?>
</div>
<?php endif; ?>