<?php
    //===== Block Start =====//
    function px_block_header( $attributes, $content ) {
        $markup = '';
        ob_start();
?>
<!-- Container -->
<div class="<?php echo $attributes['size'];?> flexbox align-center-y align-between <?php echo $attributes['className'];?>">
    <!-- Logo -->
    <?php if ($attributes['logo']) : ?>
    <a href="<?php echo site_url(); ?>"><img src="<?php echo $attributes['logo_url'];?>" alt=""></a>
    <?php endif; ?>

    <!-- Naviagtion Menu -->
    <?php echo wp_nav_menu(
        array (
            'menu' => 'px-navigation',
            'theme_location' => 'px-navigation',
            'menu_class' => 'hidden-md-down reset-list flexbox',
            'container' => 'nav',
            'container_class' => 'px-navigation'
        )
    );?>
    <!-- // Navigation Menu -->

    <!-- Action Buttons -->
    <div class="actions-btns">
        
    </div>
    <!-- // Action Buttons -->
</div>
<!-- // Container -->
<?php
    //====== Collect Markup ======//
    $blockOutput = ob_get_clean();
    $markup  .= $blockOutput;
    return "{$markup}";
}

register_block_type('theme/px-header', array(
    'api_version' => 2,
    'editor_script' => 'phenix-blocks',
    'render_callback' => 'px_block_header',
    'attributes' => array(
        //===> Size <===//
        'size' => array(
            'type' => 'string',
            'default' => 'container',
        ),
        //===> Logo <===//
        'logo' => array(
            'type' => 'boolean',
            'default' => true,
        ),
        //===> Logo <===//
        'logo_url' => array(
            'type' => 'string',
            'default' => 'https://via.placeholder.com/120x42',
        ),
        //===> Navigation <===//
        'navigation' => array(
            'type' => 'boolean',
            'default' => true,
        ),
        //===> Action Area <===//
        'action_area' => array(
            'type' => 'boolean',
            'default' => true,
        ),
    ),
));