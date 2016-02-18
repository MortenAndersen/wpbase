<ul class="acf__social">
<?php if( get_field( 'facebook_url', 'option' ) ): ?>
<li><a class="facebook__link" href="<?php the_field( 'facebook_url', 'options' ); ?>" target="_blank">Like os p&aring; Facebook</a></li>
<?php endif; ?>
<?php if( get_field( 'twitter_url', 'option' ) ): ?>
<li><a class="twitter__link" href="<?php the_field( 'twitter_url', 'options' ); ?>" target="_blank">F&oslash;lg os p&aring; Twitter</a></li>
<?php endif; ?>
<?php if( get_field( 'google_plus_url', 'option' ) ): ?>
<li><a class="google-plus__link" href="<?php the_field( 'google_plus_url', 'options' ); ?>" target="_blank">Google +</a></li>
<?php endif; ?>
</ul>
