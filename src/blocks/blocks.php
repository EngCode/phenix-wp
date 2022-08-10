<?php
    //=====> Phenix Blocks <=====//
    if (!function_exists('phenix_blocks')) :
        /**
         * Enqueue scripts of phenix blocks.
         * @since Phenix WP 1.0
         * @return void
        */

        function phenix_blocks() {
            wp_enqueue_script('phenix-blocks', get_template_directory_uri().'/assets/js/phenix-blocks.js', array('wp-blocks', 'wp-element', 'wp-editor'), NULL , true);
        }

        add_action('enqueue_block_editor_assets', 'phenix_blocks');
    endif;

    //==== Calling Blocks Example =====//
    require dirname(__FILE__) . '/header/index.php';
?>