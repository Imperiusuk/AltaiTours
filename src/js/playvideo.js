//-----------Воспроизведение видео при нажатии на плэй------------//

export default class PlayVideo {
    constructor(videoId, btnId) {
        this.videoEl = this._getElement(videoId);
        this.btnEl = this._getElement(btnId);
        
        this._addHandlers(this.videoEl, this.btnEl);
    }
    
    _getElement(id) {
        return document.getElementById(id);
    }

    _playVideo(video) {
        video.play();
        video.setAttribute("controls","controls");
    }
    
    _btnDisplay(video, button, boolean){
        if(boolean == 'true') {
            button.style.display = 'block';
            video.removeAttribute("controls", "controls");
        } else {
            button.style.display = 'none';
        }
    }

    _addHandlers(video, button) {
        button.addEventListener("click", function(){this._playVideo(video)}.bind(this));
        video.addEventListener("play", function(){this._btnDisplay(video, button, false)}.bind(this)); //скрыть
        video.addEventListener("pause", function(){this._btnDisplay(video, button, true)}.bind(this)); //показать
        video.addEventListener("ended", function(){this._btnDisplay(video, button, true)}.bind(this)); ///показать
    }
}
