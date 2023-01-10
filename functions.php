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
	 ** 04 - Support Thumbnails
	*/

	function phenix_support() {
		//====> Support Block Styles <====//
        add_theme_support('editor-styles');
		add_theme_support('wp-block-styles');
        add_theme_support('disable-layout-styles');
		remove_theme_support('core-block-patterns');
        add_theme_support('block-templates');

		//====> Editor Styles <====//
        if (is_rtl()) {
            add_editor_style('style-rtl.css');
        } else {
            add_editor_style('style.css');
        }

		//====> Translation Support <====//
		load_theme_textdomain('phenix', get_template_directory() . '/languages');

		//====> Support Thumbnails <====//
		add_theme_support('post-thumbnails');
	}
endif;

add_action('after_setup_theme', 'phenix_support');

//=====> Translation Support <=====//
if (!function_exists('px__')) {
    function px__($string) {
        return __($string, 'phenix');
    }
}

//=====> Theme Style.css <=====//
if (!function_exists('theme_style')) :
	/**
	 * Setup Phenix Design Fonts and Third-Party
	 * @since Phenix WP 1.0
	 * @return void
	*/

    function theme_style () {
        //====> Theme Style.css <====//
        if (!is_rtl()) :
        wp_enqueue_style('theme-style', get_template_directory_uri() . '/style.css');
        else :
        wp_enqueue_style('theme-style', get_template_directory_uri() . '/style-rtl.css');
        endif;
    }

    add_action('wp_enqueue_scripts', 'theme_style');
endif;

//=====> Theme Scripts <=====//
if (!function_exists('pds_theme_script')) :
    function pds_theme_script() {
        wp_enqueue_script('pds-script', get_template_directory_uri().'/assets/js/style.js', 'phenix' , NULL , true);
    }

    //===> Include Phenix Core in the Plugin Page <===//
    add_action('wp_enqueue_scripts', 'pds_theme_script');
endif;

//====> Posts Type <====//
if (!function_exists('post_cpt')) :
    //==== Admin Menu Optimizer ====//
    function admin_menu_optimizer(){ remove_menu_page('edit.php'); }
    add_action( 'admin_menu', 'admin_menu_optimizer' );
    
	//===> Creat New Post Type <===//
    function post_cpt() {
        //==== CPT Options ====//
        $args = array(
            'label'         => px__('Blog Posts'),
            'name'          => 'post',
            'singular_name' => 'post',
            'menu_position' => 6,
            'menu_icon'     => 'dashicons-welcome-widgets-menus',
            'public'        => true,
            'has_archive'   => true,
            'show_in_rest'  => true,
            'hierarchical'  => true,
            'template'      => array (
                array('core/pattern',
                    array ('slug' => 'phenix/blog-details'),
                ),
            ),
            'supports'      => array('title', 'editor', 'excerpt', 'thumbnail', 'revisions'),
            'taxonomies'    => array('tag','category'),
        );

        register_post_type('post', $args);
    }

    add_action('init', 'post_cpt');
endif;