//---------Генерирование дней секции отзывов---------//
import PlayVideo from "./playvideo.js";



export default class ReviewsDay {
    constructor(dayNumber, currentDayObj, containerSelector) {
        this.dayNumber = dayNumber;
        this.currentDayObj = currentDayObj;
        this.containerSelector = containerSelector;

        this.videoIdArr = [];
        this.btnIdArr = [];

        this.init();
    }

    init() {
        
        this._render(this.currentDayObj);

        this.videoIdArr = this.generateIdArr(this.dayNumber, 'video');
        this.btnIdArr = this.generateIdArr(this.dayNumber, 'btn');
        this.renderPlaying(this.videoIdArr, this.btnIdArr);
    }

    _getVideoId(dayNumber, n) {
        return `reviews__video${dayNumber}${n}`
    }

    _getBtnId(dayNumber, n) {
        return `reviews__btn${dayNumber}${n}`
    }

    generateIdArr(dayNumber, type) {
        let arr = [];

        for ( let i = 1; i <= 4; i++ ) {
            arr.push(`reviews__${type}${dayNumber}${i}`);
        }

        return arr;
    }

    _render(obj) {
        document.querySelector(this.containerSelector).innerHTML = this._template(obj); 
    }

    _template(obj) {
        
        return `<div class="reviews-about__video reviews-wrapper__1">
                    ${this._moduleTemplate(1, obj.videos[0])}
                </div>
   
                <div class="reviews-wrapper__2">
                    ${this._moduleTemplate(2, obj.videos[1])}
                    ${this._moduleTemplate(3, obj.videos[2])}
                    ${this._moduleTemplate(4, obj.videos[3])}
                </div>`
    }

    _moduleTemplate(n, link) {
        return `<div class="reviews-about__video">
                    <video src="${link}" id="${this._getVideoId(this.dayNumber, n)}"></video>
                    <button class="video__play-btn" id="${this._getBtnId(this.dayNumber, n)}"></button>
                </div>`
    }

    renderPlaying(videoArr, btnArr) {
        for ( let i = 0; i < videoArr.length; i++ ) {
            new PlayVideo(videoArr[i], btnArr[i]);
        }
    }
} 
