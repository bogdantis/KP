window.addEventListener("DOMContentLoaded", () => {

    // swiper

    const swiper = new Swiper('.swiper-team', {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            940: {
                slidesPerView: 4,
            },
            650: {
                slidesPerView: 3,
            },
            450: {
                slidesPerView: 2,
            }
        },
        navigation: {
            nextEl: '.team__slider-btn-next',
            prevEl: '.team__slider-btn-prev',
        }
    });

    const swiperSubscription = new Swiper('.swiper-subscription', {
        slidesPerView: "auto",
        spaceBetween: 20,
        breakpoints: {
            768: {
                spaceBetween: 30
            }
        },
        navigation: {
            nextEl: '',
            prevEl: '',
        }
    });

    // accordion

    const accordionBtn = document.querySelectorAll('.advantages__card-more')
    const accordionContent = document.querySelectorAll('.advantages__card-desc')

    if (accordionBtn) {

        accordionBtn.forEach((item, i) => {
            item.addEventListener('click', () => {

                accordionContent[i].classList.toggle('advantages__card-desc--visible')
                accordionBtn[i].classList.toggle('advantages__card-more--active')

                if (accordionContent[i].classList.contains('advantages__card-desc--visible')) {
                    accordionContent[i].style.maxHeight = accordionContent[i].scrollHeight + 'px'
                    accordionBtn[i].innerHTML = "-"
                } else {
                    accordionContent[i].style.maxHeight = null
                    accordionBtn[i].innerHTML = "+"
                }

            })
        })

    }


    // tabs

    const tabsBtn = document.querySelectorAll('.reviews__tab')
    const tabsContent = document.querySelectorAll('.reviews__tab-content')
    const tabsImg = document.querySelectorAll('.reviews__img')

    if (tabsBtn) {

        function activeTab(elem, activeClass, index) {

            elem.forEach(item => {
                item.classList.remove(activeClass)
            })
            elem[index].classList.add(activeClass)

        }

        tabsBtn.forEach((item, i) => {

            item.addEventListener('click', () => {

                activeTab(tabsBtn, 'reviews__tab--active', i)
                activeTab(tabsContent, 'reviews__tab-content--active', i)
                activeTab(tabsImg, 'reviews__img--active', i)

            })

        })

    }

    // burger menu

    const burgerBtn = document.querySelector('.burger-btn')
    const burgerMenu = document.querySelector('.burger-menu')
    const burgerMenuList = document.querySelectorAll('.burger-menu__column-item-link')

    if (burgerBtn) {

        burgerBtn.addEventListener('click', () => {

            burgerMenu.classList.toggle('burger-menu--visible')
            burgerBtn.classList.toggle('burger-btn--active')

            if (burgerMenu.classList.contains('burger-menu--visible')) {
                document.querySelector('body').style.overflow = 'hidden'
                document.querySelector('.header__container').style.padding = '0px 30px 0 15px'
            } else {
                document.querySelector('body').style.overflow = 'visible'
                document.querySelector('.header__container').style.padding = '0px 15px'
            }

        })

        burgerMenuList.forEach(item => {

            item.addEventListener('click', () => {
                burgerMenu.classList.remove('burger-menu--visible')
                burgerBtn.classList.remove('burger-btn--active')
                document.querySelector('body').style.overflow = 'visible'
                document.querySelector('.header__container').style.padding = '0px 15px'
            })

        })

    }

    // modal

    const modalCallBtn = document.querySelectorAll('.header__btn')
    const modalCallBtnClose = document.querySelector('.modal-call .modal-call__close')
    const modalCall = document.querySelector('.modal-call')

    if (modalCallBtn) {

        modalCallBtn.forEach(item => {
            item.addEventListener('click', () => {
                modalCall.classList.add('modal-call--visible')
            })
        })

        modalCallBtnClose.addEventListener('click', () => {
            modalCall.classList.remove('modal-call--visible')
        })

        document.addEventListener('click', (e) => {
            if (e.target == modalCall) {
                modalCall.classList.remove('modal-call--visible')
            }
        })

    }

    const modalAcceptBtn = document.querySelector('.modal-call__btn')
    const modalAcceptBtnClose = document.querySelectorAll('.modal-call-close')
    const modalAccept = document.querySelector('.modal-accept')

    if (modalAcceptBtn) {

        modalAcceptBtn.addEventListener('click', () => {
            modalCall.classList.remove('modal-call--visible')
            modalAccept.classList.add('modal-accept--visible')
        })

        modalAcceptBtnClose.forEach(item => {
            item.addEventListener('click', () => {
                modalAccept.classList.remove('modal-accept--visible')
            })
        })

        document.addEventListener('click', (e) => {
            if (e.target == modalAccept) {
                modalAccept.classList.remove('modal-accept--visible')
            }
        })
    }

})






//modal 2



const modalCallBtn = document.querySelectorAll('.ab__btn')
    const modalCallBtnClose = document.querySelector('.modal-ab .modal-ab__close')
    const modalCall = document.querySelector('.modal-ab')

    if (modalCallBtn) {

        modalCallBtn.forEach(item => {
            item.addEventListener('click', () => {
                modalCall.classList.add('modal-ab--visible')
            })
        })

        modalCallBtnClose.addEventListener('click', () => {
            modalCall.classList.remove('modal-ab--visible')
        })

        document.addEventListener('click', (e) => {
            if (e.target == modalCall) {
                modalCall.classList.remove('modal-ab--visible')
            }
        })

    }

    const modalAcceptBtn = document.querySelector('.modal-ab__btn')
    const modalAcceptBtnClose = document.querySelectorAll('.modal-ab-close')
    const modalAccept = document.querySelector('.modal-accept')

    if (modalAcceptBtn) {

        modalAcceptBtn.addEventListener('click', () => {
            modalCall.classList.remove('modal-ab--visible')
            modalAccept.classList.add('modal-accept--visible')
        })

        modalAcceptBtnClose.forEach(item => {
            item.addEventListener('click', () => {
                modalAccept.classList.remove('modal-accept--visible')
            })
        })

        document.addEventListener('click', (e) => {
            if (e.target == modalAccept) {
                modalAccept.classList.remove('modal-accept--visible')
            }
        })
    }
