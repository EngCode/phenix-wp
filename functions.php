<?php
/**
 * Phenix WP functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Phenix_WP
 * @since Phenix WP 1.0
 * 
 * ========> Reference by Comments <=======
 ** 01 - Theme Support
 ** 02 - Phenix Assets
 ** 03 - Phenix Filters
 ** 05 - Multilang Support
 ** 06 - Add Phenix Blocks
 ** 07 - Phenix Optimizer
*/

//=====> Theme Support <=====//
if (!function_exists('phenix_support')) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 * @since Phenix WP 1.0
	 * @return void
	 ** 01 - Support Block Styles
	 ** 02 - Editor Styles
	 ** 03 - Translation Support
	 ** 04 - Menus Locations
	 ** 05 - Support Thumbnails
	*/

	function phenix_support() {
		//====> Support Block Styles <====//
		add_theme_support('wp-block-styles');

		//====> Editor Styles <====//
		add_editor_style('style.css');

		//====> Translation Support <====//
		load_theme_textdomain('phenix', get_template_directory() . '/languages');

		//====> Menus Locations <====//
		register_nav_menus( array(
			'px-navigation' => 'Header Menu',
			'footer-menu' => 'Footer Menu No.1',
			'footer-menu-2' => 'Footer Menu No.2',
		));

		//====> Support Thumbnails <====//
		add_theme_support('post-thumbnails');
	}
endif;

add_action('after_setup_theme', 'phenix_support');

//=====> Phenix Assets <=====//
if (!function_exists('phenix_assets')) :
	/**
	 * Enqueue styles and scripts of phenix design system.
	 * @since Phenix WP 1.0
	 * @return void
	*/

	function phenix_assets() {
		//====> define props <====//
		$theme_version  = wp_get_theme()->get( 'Version' );
		$version_string = is_string( $theme_version ) ? $theme_version : false;
		$assets_path    = get_template_directory_uri() . "/assets";
		
		//====> Phenix CSS <====//
		if (!is_rtl()) :
			//====> Phenix LTR <====//
			wp_register_style('phenix', $assets_path. '/css/phenix.css', array(), $version_string);
		else :
			//====> Phenix RTL <====//
			wp_register_style('phenix', $assets_path. '/css/phenix-rtl.css', array(), $version_string);
		endif;

		//====> Custom Fonts <====//
		wp_register_style('phenix-fonts', $assets_path. '/css/fonts.css', array(), $version_string);

		//====> FontAwesome <====//
		wp_register_style('fontawesome', $assets_path. '/css/fontawsome.css', array(), $version_string);

		//====> Enqueue CSS <====//
		wp_enqueue_style('phenix');
		wp_enqueue_style('phenix-fonts');
		wp_enqueue_style('fontawesome');

		//====> Enqueue Phenix JS <====//
		wp_enqueue_script('phenix', $assets_path.'/js/phenix.js', false , NULL , true);
	}
endif;

add_action('wp_enqueue_scripts', 'phenix_assets');
add_action('enqueue_block_editor_assets', 'phenix_assets');

//=====> Phenix Filters <=====//
if (!function_exists('phenix_filters')) :
	/**
	 * WP Filters.
	 * @since Phenix WP 1.0
	 * @return void
	 * 
	 ** 01 - Excrept Strip
	 ** 02 - CF7 Customize
	*/

	//====> Excrept Strip <====//
	remove_filter('the_excerpt', 'wpautop');
	
	//====> CF7 Customize <====//
	if (class_exists('WPCF7')) {
		//===== C7 Elements Fix =====//
		add_filter('wpcf7_form_elements', function($content) {
			$content = preg_replace('/<(span).*?class="\s*(?:.*\s)?wpcf7-form-control-wrap(?:\s[^"]+)?\s*"[^\>]*>(.*)<\/\1>/i', '\2', $content);
			return $content;
		});

		add_filter('wpcf7_autop_or_not', '__return_false');

		//===== CSS/JS Remove =====//
		add_filter('wpcf7_load_css', '__return_false');
		add_filter('wpcf7_load_js', '__return_false');
	}
endif;

//====> Multilang Support <====//
if (!function_exists('px__')) {
	/**
	 * Filter Content.
	 * @since Phenix WP 1.0
	 * @return void
	*/

	function px__($string) {
		if(function_exists('pll__')) :
			return pll__($string, 'phenix');
		else :
			return __($string, 'phenix');
		endif;
	}
}

//====> Add Phenix Blocks <====//
require get_template_directory() . '/src/blocks/blocks.php';

//====> Phenix Optimizer <====//
include( dirname(__FILE__) . '/inc/optimize.php' );
