<?php if ( is_active_sidebar( 'banner') ) { ?>
<section class="banner__content">
<?php
dynamic_sidebar('banner'); ?>
</section>
<?php } ?>

<?php if ( is_active_sidebar( 'bannerinside') ) { ?>
<div class="page-wrap banner-wrap">
<section class="banner__content inner-banner">
<?php
dynamic_sidebar('bannerinside'); ?>
</section>
</div>
<?php } ?>