<?php if ( has_nav_menu( 'footer-menu' ) ) { ?>
<?php
	$footer_nav = array(
		'theme_location' => 'footer-menu',
		'container' =>  '',
     	'items_wrap'  => '<nav role="navigation" class="footer__menu"><ul>'."\n".'%3$s</ul></nav>',

		'sub_menu' => true
	);
?>
<?php wp_nav_menu( $footer_nav ); ?>
<?php } ?>