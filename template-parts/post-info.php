<?php
    /**
     * Phenix Blocks
     * @since Phenix WP 1.0
     * @return void
    */
?>

<div class="flexbox pdb-15 mb-30 divider-b fs-14">
    <span class="tx-icon far me-15 fa-clock">14 Dec 2022</span>
    <span class="tx-icon far me-15 fa-user icon-primary">Abdullah Ramadan</span>
    <!-- Share -->
    <div class="px-dropdown inline-block ms-auto" data-position="bottom, end">
        <!-- Toggle Button -->
        <button class="px-toggle reset-button far fa-share-alt tx-icon pdy-5 color-primary">Share</button>
        <!-- Dropdown Target -->
        <ul class="px-dropdown-list reset-list bg-white fs-14 w-min-200 bx-shadow-dp-1 border-1 border-solid border-alpha-10 radius-md">
            <li class="color-facebook"><a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo get_permalink(); ?>" class="tx-icon fab fa-facebook-square">Share via Facebook</a></li>
            <li class="color-twitter"><a href="https://twitter.com/intent/tweet?url=link&text=<?php the_title(); ?>" class="tx-icon fab fa-twitter-square">Share via Twitter</a></li>
            <li class="color-linkedin"><a href="http://www.linkedin.com/shareArticle?mini=true&url=<?php echo get_permalink(); ?>&title=<?php the_title(); ?>" class="tx-icon fab fa-linkedin">Share via Linked-In</a></li>
            <li class="color-whatsapp"><a href="whatsapp://send?text=<?php the_title(); ?>" class="tx-icon fab fa-whatsapp-square">Share via WhatsApp</a></li>
        </ul>
        <!-- // Dropdown Target -->
    </div>
</div>
