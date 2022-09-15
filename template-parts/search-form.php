<?php
    /**
     * Phenix Blocks
     * @since Phenix WP 1.0
     * @return void
    */
?>

<form action="<?php echo home_url( '/' ); ?>" class="pd-20 pdx-md-25">
    <!-- Form Control -->
    <div class="control-icon far fa-search mb-15 fs-14 icon-primary">
        <input name="s" type="text" class="form-control" placeholder="<?php echo px__('keywords');?>">
        <input type="hidden" name="post_type" value="post" />
    </div>
    <!-- Form Control -->
    <div class="control-icon far fa-folder fs-14 mb-15 icon-primary">
    <?php wp_dropdown_categories(array(
        'order' => 'DESC',
        'name'  => 'cities',
        'class' => 'form-control',
        'taxonomy'    => 'category',
        'hide_empty'  => false,
        'value_field' => 'slug',
        'option_none_value' => '0',
        'show_option_none'  => px__('- All Categories -'),
    ));?>
    </div>
    <!-- Button -->
    <input type="submit" value="<?php echo px__('Search', 'tornado'); ?>" class="btn primary display-block ms-auto w-max-120">
</form>