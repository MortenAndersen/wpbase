<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon.ico" />
<?php if ( is_singular() ) wp_enqueue_script( 'comment-reply' ); ?>
<?php wp_head(); ?>
<link href="<?php bloginfo('stylesheet_url'); ?>" rel="stylesheet" />
<script>
  document.body.onload = function() {
    var url = 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,600';
    loadFont(url);
  }
</script>
</head>

<body <?php body_class(); ?>>

<header role="banner">
<?php do_action ( '__pre_header' ); ?>
<div class="page-wrap page-wrap-top">
<?php get_template_part( 'top-bar' ); ?>
<?php dynamic_sidebar( 'headerstackright' ); ?>
<?php dynamic_sidebar( 'headerstack' ); ?>
<?php if ( is_active_sidebar( 'headercontainer' ) ) { ?>
<div class="flex">
<?php dynamic_sidebar( 'headercontainer' ); ?>
</div>
<?php } ?>
<?php if ( is_active_sidebar( 'headerdesigner' ) ) { ?>
<div class="flex">
<?php dynamic_sidebar( 'headerdesigner' ); ?>
</div>
<?php } ?>
</div>
</header>
<?php get_template_part( 'menu-main' ); ?>
<?php get_template_part( 'bar' ); ?>
<?php get_template_part( 'banner' ); ?>
<div class="page-wrap">
<?php do_action ( '__after_header' ); ?>