<?php $query = new WP_Query( array('product_tag' => $tags, 'product_cat' => $cat));

        while( $query->have_posts() ): $query->next_post();

        echo '<h3><a href="'. get_permalink( $query->post->ID ) . '">' . get_the_title( $query->post->ID ) . '</a></h3>';
        echo get_the_post_thumbnail( $query->post->ID, apply_filters( 'single_product_large_thumbnail_size', 'shop_single' ) );

        endwhile; wp_reset_query(); wp_reset_postdata(); ?>