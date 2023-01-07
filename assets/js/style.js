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

    //===> Animations <===//
    Phenix('.px-animate').animations({
        animateCSS: ["fading", "sliding", "utilities"]
    });

    //====> Activate Select <====//
    Phenix('.px-select').select();
});