(function(){

    'use strict';

    const accordionJs = document.querySelector('.accordion-js');

    function toggleAccordionJs(e){
        if(e.target.classList.contains('accordion-js__head')){
            //console.log(e.target)
            const item = e.target.closest('.accordion-js__item');
            item.classList.toggle('accordion-js__item--open');
        }
    }

    accordionJs.addEventListener('click', toggleAccordionJs);

})();