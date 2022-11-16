//----------Формирование карточек секции будущих туров----------//
import Card from './generateCard';

export default class Catalog {
    constructor(containerSelector, array) {
        this.containerSelector = containerSelector;
        this.dataArray = array;
        this.templateArray = [];
        
        this.init();

    }

    init() {

        this._createTemplate(this.dataArray);

        this._render(this.templateArray, this.containerSelector);

    }

    _createTemplate(dataArray) {
        for ( let cardData in dataArray ) {
            let card = new Card(dataArray[cardData])
            this.templateArray.push(card.template);
        } 
    }

    _render(templateArray, containerSelector) {
        for ( let card of templateArray ) {
            document.querySelector(containerSelector).insertAdjacentHTML('beforeend', card);
        }
    }
}


