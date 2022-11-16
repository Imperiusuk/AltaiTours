//-----------Прокрутка к разделу при нажатии в меню-----------//

export const goto = () => {
    const menuLinks = document.querySelectorAll('.header-menu__link[data-goto]');

    if ( menuLinks ) {
        menuLinks.forEach( menuLink => {
            menuLink.addEventListener('click', onMenuLinkClick);
        });
    
        function onMenuLinkClick(event) {
            const menuLink = event.target;
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
    
            if ( menuLink.dataset.goto && gotoBlock ) {
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;
                
                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: 'smooth',
                });
    
                event.preventDefault;
            }  
        }
    }

}

export const gotoBooking = () => {
    const bind = (triggerSelector, blockSelector) => {
        const triggers = document.querySelectorAll(triggerSelector),
                bookingBlock = document.querySelector(blockSelector);
    

        triggers.forEach( trigger => {
            trigger.addEventListener('click', onBtnClick);
        })

        function onBtnClick(event) {
            const btn = event.target;

            if( !btn ) return false;

            const bookingBlockValue = bookingBlock.getBoundingClientRect().top + scrollY;
            
            window.scrollTo({
                top: bookingBlockValue,
                behavior: 'smooth',
            });

            event.preventDefault;
        }
    }

    bind(".trigger-btn", ".booking__section");
}