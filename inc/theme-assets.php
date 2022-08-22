<?php
/**
 * Phenix WP Optimization Functions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Phenix_WP
 * @since Phenix WP 1.0
*/

//====> Phenix Design System Core <====//
if (!function_exists('phenix_core')) :
	/**
	 * Setup Core Phenix Design Assets
	 * @since Phenix WP 1.0
	 * @return void
	*/
    
    //=====> Phenix Assets [Head] <=====//
    function phenix_core () {
        //====> define props <====//
        $theme_version  = wp_get_theme()->get( 'Version' );
        $version_string = is_string( $theme_version ) ? $theme_version : false;
        $assets_path    = get_template_directory_uri() . "/assets";

        //====> Phenix CSS <====//
        if (!is_rtl()) :
            //====> Phenix LTR <====//
            wp_enqueue_style('phenix', $assets_path. '/css/phenix.css', array(), $version_string);
        else :
            //====> Phenix RTL <====//
            wp_enqueue_style('phenix', $assets_path. '/css/phenix-rtl.css', array(), $version_string);
        endif;

        //====> Custom Fonts <====//
        wp_enqueue_style('phenix-fonts', $assets_path. '/css/fonts.css', array(), $version_string);
    
        //====> Enqueue Phenix JS <====//
        wp_enqueue_script('phenix', $assets_path.'/js/phenix.js', false , NULL , true);
    }
        
    add_action('wp_enqueue_scripts', 'phenix_core');
    add_action('enqueue_block_editor_assets', 'phenix_core');
endif;