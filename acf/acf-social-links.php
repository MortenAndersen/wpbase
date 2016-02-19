<h4>Besøg os på:</h4>
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