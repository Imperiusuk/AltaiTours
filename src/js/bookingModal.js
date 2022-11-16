const bookingModal = () => {
    function bindModal(modalSelector, closeSelector, closeClickOverlay = true) {
        const modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);
              
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
    

        close.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = "none";
                document.body.style.overflow = ""; 
                document.body.style.marginRight = `0px`;
            }
        });
    }

    bindModal('.booking-alert-container', '.booking-alert__ok-btn');
};

export default bookingModal;