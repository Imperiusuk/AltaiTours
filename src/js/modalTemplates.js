const modalTemplate = {
    formModal: `<div> 
                    <form class="booking-form" action="#">
                        <div class="booking-inputbox">
                            
                            <input class="booking-inputbox__input" type="email" name="" id="" required>
                            <label class="booking-inputbox__label" >Электронная почта</label>
                        </div>

                        <div class="booking-inputbox">
                            
                            <input class="booking-inputbox__input"  type="tel" name="" id="" required>
                            <label class="booking-inputbox__label" >Номер телефона</label>
                        </div>

                        <div class="booking-inputbox">
                            
                            <input class="booking-inputbox__input"  type="name" name="" id="" required>
                            <label class="booking-inputbox__label" >ФИО</label>
                        </div>

                        <div class="booking-inputbox">
                            
                            <input class="booking-inputbox__input" type="text" name="" id="" required >
                            <label class="booking-inputbox__label" >Комментарий</label>
                        </div>

                        <div class="booking-btn">
                            <button type="submit" class="btn booking__submit-btn"><span>Забронировать</span></button>
                        </div>

                    </form>
                </div>`,
        
    thanksModal: `<div class="booking-alert-container">    
                    <h3 class="booking-alert__heading">СПАСИБО ЗА БРОНИРОВАНИЕ</h3>
                    <p class="booking-alert__txt">Мы свяжемся с вами в ближайшее время</p>
                    <a href="#" class="booking-alert__ok-btn btn">ОК</a>
                 </div>`,

}

export default modalTemplate;