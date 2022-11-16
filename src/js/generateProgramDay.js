//-----------Генерирование дней в секции Программа тура--------//

export default class ProgramDay {
    constructor (dayNumber, currentDayObj, containerSelector, paramContainerSelector) { 
        this.dayNumber = dayNumber;
        this.currentDayObj = currentDayObj;
        this.containerSelector = containerSelector;
        this.paramContainerSelector = paramContainerSelector;
        this.url = "../../program.json";
        this.type = "program";

        this.parameterCount = 0;

        this.init();
    }

    init() {
        this._render(this.currentDayObj);
        
    }

    _render(obj) {
        document.querySelector(this.containerSelector).innerHTML = this._template(obj);
        
        document.querySelector(this.paramContainerSelector).style.justifyContent = this._defineJustifyValue(obj.parameters);
    }

    _template(obj) {
        return `<div class="program-content">
                    <h4 class="program-content__heading">День ${obj.day}</h4>
                    <p data-role="house" class="program-content__txt"> ${obj.house}</p>
                    <p data-role="food" class="program-content__txt"> ${obj.food}</p>
                    <p data-role="trip" class="program-content__txt"> ${obj.trip}</p>
                    <div class="program-content__parameters"> ${this._innerOfParam(obj.parameters)}</div>
                </div>
                <div class="program-photo" style="background-image: url(${obj.img})";>
                    
                </div>`
    }

    _innerOfParam(obj) {
        let parameters = '';
        for (let parameter in obj) {
            if (obj[parameter] == null) continue;
            this.parameterCount++;
            let string = `<p data-role="${parameter}" class="program-content__txt program-content__prm">${obj[parameter]}</p>`;
            parameters += string;
        }
        return parameters
    }

    _defineJustifyValue(obj) {
        return (this.parameterCount < 2) ? 'center' : 'space-between';
    }
}