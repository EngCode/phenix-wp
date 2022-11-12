document.addEventListener('DOMContentLoaded', ready => {
    /*===> Table of contents Menu <===*/
    let content_menu = Phenix('.on-page-menu').insert('append', '<ul class="reset scrollspy-menu"></ul>'),
        last_title;

    if (content_menu) {
        /*===> Loop Throgh Titles <===*/
        Phenix('.content-side h1,.content-side h2,.content-side h3:not(.nocontent)').forEach((element, index) => {
            //====> Element Data <====//
            let title  = element.textContent,
                itemHtml = `<li><a href="#section-${index}" class="smoth-scroller">${title}</a></li>`;
            //====> Set ID <====//
            if(!element.hasAttribute('id')) element.setAttribute('id', `section-${index}`);
    
            //====> Sub-Titles <====//
            if (element.matches('h3' || 'h4')) {
                //===> ... <===//
                let last_item = document.querySelector('.on-page-menu .scrollspy-menu > li:last-child'),
                    last_list = last_item?.querySelector('ul');
    
                //====> Create new Menu <====//
                if (!last_list) last_list = Phenix(last_item).insert('append', '<ul></ul>');
                
                //====> Create as Menu Item <====//
                Phenix(last_list).insert('append', itemHtml);
            }
            //====> Create as Main Title <====//
            else Phenix(content_menu).insert('append', itemHtml);
    
            //====> Asign Last Title <====//
            last_title = element;
        });

        /*===> Scroll Spy Active <===*/
        Phenix(content_menu).scrollSpy({
            flow : 'start',
            offset : 70,
        });
    }

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

    //====> Activate Select <====//
    Phenix('.px-select').select();

    //===> Navigation Active Submenu Fix <===//
    let activated_cat = Phenix('.navigator-menu .px-item-active').addClass('px-menu-active')[0];
    activated_cat ? activated_cat.querySelector('.submenu').style.display = "block" : null;
});