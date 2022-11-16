import postData from './postData.js';
import bookingModal from './bookingModal.js';

const forms = () => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('.booking-inputbox__input');
        

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(item);
            let api = '../assets/server.php';

            postData(api, formData)
                .then(res => {
                    console.log(res);
                    
                    bookingModal();
                })
                .catch((err) => {
                    console.log(err)
                })
                .finally(() => {
                    clearInputs();
                });
        });
    });
};

export default forms;