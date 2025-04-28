<?php
/**
 * Plugin Name: YouTube NoCookie Embed
 * Description: Remplace les vidéos YouTube par la version sans cookies.
 * Version: 1.0
 * Author: Votre Nom
 * License: GPL2
 */

// Empêche l'accès direct au fichier
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Enregistrement du script JS personnalisé
function youtube_nocookie_script() {
    // Ajouter un script personnalisé au pied de page
    wp_enqueue_script(
        'youtube-nocookie-script',
        plugin_dir_url(__FILE__) . 'js/video-script.js',
        array(),
        null,
        true
    );
}
add_action('wp_enqueue_scripts', 'youtube_nocookie_script');
