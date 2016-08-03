<?php
if (!is_user_logged_in()) {
    echo '<section><h4>Login</h4>';
    wp_login_form();
    echo '</section>';
}
else {
    echo '<section><h4>Log ud</h4><p><a class="but" href="' . wp_logout_url(home_url()) . '">Logout</a></p>';
    global $current_user;
    echo '<p>Bruger: <em>' . $current_user->display_name . '</em></p></section>';
}
?>