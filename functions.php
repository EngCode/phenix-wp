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
		remove_theme_support('core-block-patterns');

		//====> Editor Styles <====//
		add_editor_style('style.css');

		//====> Translation Support <====//
		load_theme_textdomain('phenix', get_template_directory() . '/languages');

		//====> Menus Locations <====//
		register_nav_menus(array(
			'main-menu' => 'Main Menu',
			'footer-menu' => 'Footer Menu',
		));

		//====> Support Thumbnails <====//
		add_theme_support('post-thumbnails');
	}
endif;

add_action('after_setup_theme', 'phenix_support');

//=====> Phenix Assets <=====//
// include( dirname(__FILE__) . '/inc/theme-assets.php' );

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

//====> Add Custom Blocks <====//
// include( dirname(__FILE__) . '/src/blocks/blocks.php' );
// include( dirname(__FILE__) . '/src/blocks/patterns.php' );

//====> Add Custom Post-Types <====//
// include( dirname(__FILE__) . '/inc/post-types.php' );

//====> Getting rid of archive "label" <====//
if (!function_exists('refactor_archive_title')) :
	/**
	 * WP Filters.
	 * @since Phenix WP 1.0
	 * @return void
	 * 
	 ** 01 - Excrept Strip
	 ** 02 - CF7 Customize
	*/
	function refactor_archive_title( $title ) {
		if ( is_category() ) {
			$title = single_cat_title('', false);
		} elseif ( is_tag() ) {
			$title = single_tag_title('', false);
		} elseif ( is_post_type_archive() ) {
			$title = post_type_archive_title('', false);
		} elseif ( is_tax() ) {
			$title = single_term_title('', false);
		}
		return $title;
	}
	
	add_filter( 'get_the_archive_title', 'refactor_archive_title' );
endif;

/*====> Pagination <====*/
if (!function_exists('pagination')) :
	/**
	 * WP Filters.
	 * @since Phenix WP 1.0
	 * @return void
	 * 
	 ** 01 - Excrept Strip
	 ** 02 - CF7 Customize
	*/

	function pagination($query) {
		//===> Configration <===//
		$pages = paginate_links( array(
			'end_size'     => 2,
			'mid_size'     => 1,
			'prev_next'    => true,
			'show_all'     => false,
			'type'         => 'array',
			'format'       => '?page=%#%',
			'total'        => $query->max_num_pages,
			'current'      => max(1, get_query_var('paged')),
			'prev_text'    => sprintf('<i class="fas fa-angle-left"></i>%1$s', px__( '' )),
			'next_text'    => sprintf('%1$s<i class="fas fa-angle-right"></i>', px__( '' )),
			'base'         => str_replace(999999999, '%#%', esc_url(get_pagenum_link(999999999))),
		));
	
		//===> Generate <===//
		if(is_array($pages)) {
			//===> List <===//
			echo '<ul class="reset-list pagination flexbox align-center col-12 mb-30">';
			//===> Pages Start <===//
			foreach ($pages as $page) {
				//===> if its the Current Page <===//
				if (strpos($page, 'current') !== false) {
					$page = str_replace("span", "a", $page);
					echo "<li class='btn square small weight-medium radius-sm primary active me-10'>$page</li>";
				}
				//===> else other pages <===//
				else {
					echo "<li class='btn square light small weight-medium radius-sm me-10 border-1 border-solid border-alpha-10'>$page</li>";
				}
			}
			//===> Pages End <===//
			echo '</ul>';
			//===> List <===//
		}
	}
endif;

//====> Phenix Optimizer <====//
include( dirname(__FILE__) . '/inc/optimize.php' );

//====> Excrept Strip <====//
remove_filter('the_excerpt', 'wpautop');

//====> Limited Excerpt <====//
function px_excerpt_length($length) {return 18;}
add_filter('excerpt_length', 'px_excerpt_length', 175);

//====> Excerpt More <====//
function wpdocs_excerpt_more($more) {return '...';}
add_filter('excerpt_more', 'wpdocs_excerpt_more');

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
