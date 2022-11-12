<?php
    /**
     * Phenix Blocks
     * @since Phenix WP 1.0
     * @return void
    */

    //===> Get Post Information <===//
    $post_link  = get_permalink();
    $post_title = get_the_title();
    $post_description = strip_tags(get_the_excerpt());
?>

<!-- Block Start -->
<div class="blog-card mb-30 col-12 col-md-6">
    <div class="bg-white radius-sm border-1 border-solid border-alpha-10 pdb-20 pdx-25">
        <!-- Title -->
        <a href="<?php echo $post_link; ?>"><h3 class="fs-16 weight-medium"><?php echo $post_title; ?></h3></a>
        <!-- Description -->
        <p class="fs-13" data-max-text="110"><?php echo $post_description; ?></p>
    </div>
</div>
<!-- // Block End -->