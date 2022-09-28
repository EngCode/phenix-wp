document.addEventListener('DOMContentLoaded', ready => {
    //====> Multimedia <====//
    Phenix('.px-media').multimedia();

    //===> Phenix Menu <===//
    Phenix('.px-navigation').menu();

    //====> Dropdown Buttons <====//
    Phenix('.px-dropdown').dropdown();

    //====> Sliders <====//
    Phenix('.px-slider').slider();

    //====> icons List <====//
    Phenix('.icons-list').forEach((list) => {
        let classes = list.getAttribute('data-icon').split(" ");
        list.querySelectorAll('li').forEach(item => item.classList.add(...classes));
    });

    //====> Validation Demo <====//
    Phenix('.wpcf7-form').validation();

    //====> Sticky Header <====//
    Phenix('.main-header').setAttributes({'data-sticky': "absolute"});
    Phenix('.main-header').addClass('fluid').sticky();

    //====> Media Lightbox <====//
    Phenix('#px-lightbox').popup({type: 'lightbox'});

    //====> Custom Animations <===//
    Phenix('.animations-group').forEach((group) => {
        //===> Activeate Lazy Animations <===//
        group.setAttribute('data-lazy-group', 1);
        //===> for Each Element <===//
        group.querySelectorAll('h2, p, .btn, .wp-block-image:not(.hero-image)').forEach((element) => {
            element.classList.add('view-status');
            element.setAttribute('data-animation', 'fadeInUp');
        });
        //===>  <===//
        group.querySelectorAll('.animate-end').forEach((element) => {
            element.classList.add('view-status');
            element.setAttribute('data-animation', 'fadeInEnd');
        });
        //===>  <===//
        group.querySelectorAll('.animate-start').forEach((element) => {
            element.classList.add('view-status');
            element.setAttribute('data-animation', 'fadeInStart');
        });
    });

    //===> Animations <===//
    Phenix('.px-animate').animations({
        animateCSS: ["fading", "sliding", "utilities"]
    });

    //====> Version Changer <====//
    Phenix('#version-select').on('change', changed => {
        //===> Get Value <===//
        let val = changed.target.value;
        //===> Go to It <===//
        window.location = val;
    });

    //====> View-Port Animations <====//
    Phenix('.animations-section [data-animation]').animations({
        lazyloading: true,
        duration: 700,
    });

    Phenix('.key-features [data-animation]').animations();
});