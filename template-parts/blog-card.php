<?php
    /**
     * Phenix Blocks
     * @since Phenix WP 1.0
     * @return void
    */

    //===> Get Post Information <===//
    $post_link  = get_permalink();
    $post_title = get_the_title();
	$post_thumbnail   = get_the_post_thumbnail_url($post->ID, 'full');
    $post_description = strip_tags(get_the_excerpt());

	//===> Thumbnail Placeholder <===//
	if ($post_thumbnail === false) {
		$post_thumbnail = 'https://via.placeholder.com/900x700.webp?text=Media';
	}
?>

<!-- Block Start -->
<div class="blog-card mb-30 col-12 col-md-4 tx-align-center">
    <div class="bg-white radius-sm border-1 border-solid border-alpha-10">
        <!-- Image -->
        <a href="<?php echo $post_link; ?>" data-src="<?php echo $post_thumbnail;?>" class="px-media ratio-4x3 mb-20 radius-sm radius-top"></a>
        <!-- info -->
        <div class="pdb-20 pdx-25">
            <!-- Title -->
            <a href="<?php echo $post_link; ?>"><h3 class="fs-16 weight-medium"><?php echo $post_title; ?></h3></a>
            <!-- Description -->
            <p class="fs-13" data-max-text="110"><?php echo $post_description; ?></p>
        </div>
        <!-- // info -->
    </div>
</div>
<!-- // Block End -->