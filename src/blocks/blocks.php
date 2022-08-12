<?php
    /**
     * Setting Gutenberg for Phenix Blocks
     * @since Phenix WP 1.0
     * @return void
    */

    //=====> Enqueue Phenix Blocks <=====//
    if (!function_exists('phenix_blocks')) :
        function phenix_blocks() {
            //====> Shared Options <====//
            $blocksPath = get_template_directory_uri().'/assets/js/blocks/';
            $blocksDependencies = array('wp-blocks', 'wp-element', 'wp-editor');

            //====> Phenix Section <====//
            wp_enqueue_script('px-section', $blocksPath.'px-section/index.js', $blocksDependencies, NULL , true);
            
            //====> Phenix Grid <====//
            // wp_enqueue_script('px-grid', $blocksPath.'px-grid/index.js', $blocksDependencies, NULL , true);
        }

        add_action('enqueue_block_editor_assets', 'phenix_blocks');
    endif;
?>