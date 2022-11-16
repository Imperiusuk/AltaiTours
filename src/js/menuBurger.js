"use strict"

//-----------Меню-бургер------------//

const burger = () => {
    const menuBurger = document.querySelector('.burger-menu');

    if (menuBurger) {
        const headerNav = document.querySelector('.header-menu');
        const headerTop = document.querySelector('.header');
    
        menuBurger.addEventListener("click", function(e) {
            document.body.classList.toggle('_lock');
           
            menuBurger.classList.toggle('_active');
            headerNav.classList.toggle('_active');
            headerTop.classList.toggle('_active');
        
        });
    }
}

export default burger;











