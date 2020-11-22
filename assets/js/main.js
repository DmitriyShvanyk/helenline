(function () {

    'use strict';

    // navbar
    function initNavbar() {
        const navbar = document.querySelector(".navbar");
        const navbarHamburger = navbar.querySelector(".navbar__hamburger");
        const navbarCollapse = navbar.querySelector(".navbar__collapse");
        const navbarClose = navbar.querySelector(".navbar__close");
        const navbarLinkCatalog = navbar.querySelector(".navbar__link--catalog");
        const navbarSubmenuCatalog = navbar.querySelector(".navbar__submenu--catalog");

        function openNavbar() {
            navbarCollapse.classList.add("navbar__collapse--open");
        }

        function closeNavbar() {
            navbarCollapse.classList.remove("navbar__collapse--open");
        }

        function toggleSubmenu(e) {
            e.preventDefault();
            navbarSubmenuCatalog.classList.toggle("navbar__submenu--catalog--open");
            this.classList.toggle("navbar__link--catalog--active");
        }

        navbarHamburger.addEventListener("click", openNavbar);
        navbarClose.addEventListener("click", closeNavbar);
        navbarLinkCatalog.addEventListener("click", toggleSubmenu);
    }

    initNavbar();


    // slider swiper
    function initSlider() {
        const swiperContainer = document.querySelector('.swiper-container');
        if (!swiperContainer) return;

        const sliderMajor = new Swiper('.major__swiper', {
            loop: true,
            preloadImages: false,
            lazy: {
                loadPrevNext: true,
                loadPrevNextAmount: 3
            },

            // pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            // navigation arrows
            navigation: {
                nextEl: '.major__swiper-next',
                prevEl: '.major__swiper-prev',
            }
        });


        // slider news
        const sliderNews = new Swiper('.news__swiper', {
            loop: true,
            autoHeight: true,
            preloadImages: false,
            lazy: {
                loadPrevNext: true,
                loadPrevNextAmount: 3
            },

            // pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            // navigation arrows
            navigation: {
                nextEl: '.news__swiper-next',
                prevEl: '.news__swiper-prev',
            }
        });

        // slider products
        const sliderProducts = new Swiper('.products__swiper', {
            slidesPerView: 6,
            spaceBetween: 24,
            loop: true,
            preloadImages: false,
            lazy: {
                loadPrevNext: true,
                loadPrevNextAmount: 30
            },

            // pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            // navigation arrows
            navigation: {
                nextEl: '.products__swiper-next',
                prevEl: '.products__swiper-prev',
            },

            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                991: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                },
                1640: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                },
                1920: {
                    slidesPerView: 6,
                    spaceBetween: 24,
                }
            }

        });

        // slider article news
        const sliderArticleNews = new Swiper('.article-news__swiper', {
            loop: true,
            preloadImages: false,
            lazy: {
                loadPrevNext: true,
                loadPrevNextAmount: 30
            },

            // pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            // navigation arrows
            navigation: {
                nextEl: '.article-news__swiper-next',
                prevEl: '.article-news__swiper-prev',
            },

            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                },
                576: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
                1920: {
                    slidesPerView: 3,
                    spaceBetween: 24
                }
            }
        });

        // slider card
        const sliderCard = new Swiper('.slider-card', {
            loop: false,
            preloadImages: false,
            lazy: {
                loadPrevNext: true,
                loadPrevNextAmount: 3
            },

            // pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            navigation: {
                nextEl: '.slider-card__button-next',
                prevEl: '.slider-card__button-prev',
            }
        });

    }

    initSlider();


    // select
    const selects = document.querySelectorAll('.js-choice');
    selects.forEach(element => new Choices(element));


    // scrollbar
    const scrollbars = Array.from(document.querySelectorAll('.scrollbar'));
    scrollbars.forEach(element => new PerfectScrollbar(element));


})();