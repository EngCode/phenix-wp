<?php
    /**
     * Phenix Blocks
     * @since Phenix WP 1.0
     * @return void
    */
?>

<!-- Search -->
<form class="flexbox search-form align-between" method="get" action="<?php echo home_url('/'); ?>">
    <!-- Search Controler -->
    <div class="control-wraper far fa-search">
        <input type="text" name="s" placeholder="<?php echo px__('Search Docs', 'phenix'); ?>">
    </div>
    <!-- Menu Toggles -->
    <a href="javascript:void(0);" class="fas fa-bars hidden-lg-up menu-toggle btn square dark ms-10 small" data-id="main-menu"></a>
</form>
