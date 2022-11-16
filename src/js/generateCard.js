export default class Card {
    constructor (obj) {
        this.currentCardObj = obj;
        
        this.template = this.render(this.currentCardObj);
    }

    render(obj) {
        return `
            <div class="coming-card">
                <div class="coming-card__img" style="background-image: url(${obj.img})" ></div>
                
                <div class="coming-card__desc">
                    <h4 class="coming-card__heading">${obj.heading}</h4>
                    <p class="coming-card__txt">${obj.text}</p>
                    <div class="coming-card__btn">
                        <a href="#" class="btn"><span>Посмотреть</span></a>
                    </div>
                </div>
                
            </div>`
    }
}