(function () {

    "use strict";

    const catalogSidebar = document.querySelector('.catalog__sidebar');
    const filter = document.querySelector('.filter-main');
    const filterBtnMobile = document.querySelector('.catalog__btn-filter-mobile');
    const filterClose = document.querySelector('.filter__top-close');
    const filterBtnCategory = document.querySelectorAll('.filter__btn-category');


    // toggle filter category
    function toggleFilterCategory(event) {
        event.preventDefault();
        this.classList.toggle('filter__btn-category--active');
        this.closest('.filter').querySelector('.filter__menu').classList.toggle('filter__menu--active');
    }

    // toggle filter collapse
    function toggleFilterCollapse(e) {
        //console.log(e.target)
        const filterTitle = e.target.closest('.filter__title');

        if (filterTitle) {
            filterTitle.closest('.filter__item').classList.toggle('filter__item--open');
        }
    }

    // show filter
    function showFilter() {
        catalogSidebar.classList.add('catalog__sidebar--show');
    }

    // close filter
    function closeFilter(e) {
        e.preventDefault();
        catalogSidebar.classList.remove('catalog__sidebar--show');
    }

    window.addEventListener('DOMContentLoaded', () => {
        filterBtnCategory.forEach(elem => elem.addEventListener('click', toggleFilterCategory));  
        filter.addEventListener('click', toggleFilterCollapse);
        filterBtnMobile.addEventListener('click', showFilter);
        filterClose.addEventListener('click', closeFilter);
    });

})();