<?php if (class_exists('acf')): ?>
<?php if (get_field("produkt_label")): ?>
<span class="produkt-label <?php the_field('label_farve'); ?>"><?php the_field("produkt_label"); ?></span>
<?php endif; ?>
<?php endif; ?>