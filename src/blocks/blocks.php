<?php
    /**
     * Enqueue scripts of phenix blocks.
     * @since Phenix WP 1.0
     * @return void
    */
    
    //=====> Phenix Section <=====//
    if (!function_exists('phenix_section')) :
        function phenix_section() {
            //====> Path <====//
            $filepath = get_template_directory_uri().'/assets/gb/blocks/px-section/index.js';
            //====> Enqueue <====//
            wp_enqueue_script('px-section', $filepath, array('wp-blocks', 'wp-element', 'wp-editor'), NULL , true);
        }

        add_action('enqueue_block_editor_assets', 'phenix_section');
    endif;
    
    //=====> Phenix Grid <=====//
    if (!function_exists('phenix_grid')) :
        function phenix_grid() {
            //====> Path <====//
            $filepath = get_template_directory_uri().'/assets/gb/blocks/px-grid/index.js';
            //====> Enqueue <====//
            wp_enqueue_script('px-grid', $filepath, array('wp-blocks', 'wp-element', 'wp-editor'), NULL , true);
        }

        add_action('enqueue_block_editor_assets', 'phenix_grid');
    endif;
?>