document.addEventListener('DOMContentLoaded', function () {
    // menu icon
    const menuIcon = document.querySelector('.menuIcon');
    const mobileMenu = document.querySelector('.mobileMenu');
    const closeMenu = document.querySelector('.closeMenu');
    const body = document.querySelector('body');
    menuIcon.addEventListener('click', function () {
        mobileMenu.classList.toggle('showMenu');
        body.classList.toggle('gray');
        
    })
    closeMenu.addEventListener('click', function () {
        mobileMenu.classList.toggle('showMenu');
        body.classList.toggle('gray');
    })
    // dropdown menu
    const hasChildren = document.querySelectorAll('.has-children');
    let hasChildrenLength = hasChildren.length;
    for (let i = 0; i < hasChildrenLength; i++){
        let el = document.createElement('span');
       el.classList.add('fa-solid', 'fa-chevron-down','dropdownIcon');
        hasChildren[i].appendChild(el);
    }
    // what we do
    const contents = document.querySelectorAll('.content');
    const items = document.querySelectorAll('.item');
    const itemsLength = items.length;
    for (let i = 0; i < itemsLength; i++) {
        items[i].addEventListener('click', function (e) {
            let clickedEle = e.target;
            do {
                if (clickedEle == items[i]) {
                    let target = items[i].dataset.target;
                    showContent(target);
                    return;
                } else {
                    clickedEle = clickedEle.parentNode;
                }
            } while (clickedEle)
        })
    }

    function showContent(target) {
        let contentLength = contents.length;
        for (let i = 0; i < contentLength; i++) {
            let targetedContent = contents[i].dataset.content;
            if (targetedContent === target) {
                toggleData(contents[i]);
            }
        }
    }
    function toggleData(el) {
        const show = document.querySelectorAll('.show');
        let showLength = show.length;
        for (let i = 0; i < showLength; i++) {
            show[i].classList.remove('show');
        }
        el.classList.add('show');
    }
    //   property slider
    var propertySlider = new Swiper(".propertySlider", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        loop: true
    });
    //   property slider Three
    var propertySlider = new Swiper(".propertySliderThree", {
        pagination: {
            el: ".propertySliderThreePagination",
            clickable: true
        },
        loop: true
    });
    //   testimonial two
    var testimonialSlider = new Swiper(".testimonialSlider", {
        navigation: {
            nextEl: ".testimonial .swiper-button-next",
            prevEl: ".testimonial .swiper-button-prev",
        },
     
        loop: true
    });
   
})
