<?php
if (is_active_sidebar('infobar')) { ?>
<section class="js-toggle-target1 bar">
<div class="page-wrap page-wrap-bar flex">
<?php
    dynamic_sidebar('infobar'); ?>
</div>
</section>
<?php
} ?>