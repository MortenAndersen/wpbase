<?php
if (class_exists('acf')): ?>


<?php
    if (get_field("overskrift_til_accordion")): ?>
    <h4><?php
        the_field("overskrift_til_accordion"); ?></h4>
<?php
    endif; ?>
<?php
    if (have_rows('accordion')): ?>
<div class="js-accordion accordion">
<?php
        while (have_rows('accordion')):
            the_row();
            $overskrift = get_sub_field('acc_overskrift');
            $body = get_sub_field('acc_body');
?>
<h3><?php
            echo $overskrift; ?></h3>
<div>
<?php
            echo $body; ?>
</div>
<?php
        endwhile; ?>
</div>
<?php
    endif; ?>

<?php
endif; ?>