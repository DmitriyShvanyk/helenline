(function () {

    "use strict";

    function initNavbar(){
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

    

})();