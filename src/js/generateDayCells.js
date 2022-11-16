//---------Генерирование ячеек дней в секциях Программа тура, Отзывы---------// 

export default class GenerateDayCells {
    constructor(numOfDays, cellClassList, containerSelector, activeCellClassList, dataArr, callback) {
        this.numOfDays = numOfDays;
        this.cellClassList = cellClassList;
        this.containerSelector = containerSelector;
        this.activeCellClassList = activeCellClassList;
        this.callback = callback;
        this.dataArr = dataArr;

        this.cellsTemplate = '';

        this.init();
        
    }

    init() {

        this.getTemplate(this.numOfDays, this.cellClassList);

        let block = document.querySelector(this.containerSelector);

        block.insertAdjacentHTML('beforeend', this.cellsTemplate);

        this.addEventHandlers(block, this.callback, this.cellClassList, this.activeCellClassList, this.dataArr);

        this.changeActiveCell(block.children[0], this.cellClassList, this.activeCellClassList);
            
        this.callback(1, this.dataArr[0]);
        
    }

    addEventHandlers(block, callback, cellClassList, activeCellClassList, dataArr) {
        block.addEventListener('click', (e) => {
            const target = e.target;
            const cell = target.closest(`.${cellClassList}`);
            const dayNumber = +cell.dataset.day;

            if ( !cell || !block.contains(cell) ) return;

            this.changeActiveCell(cell, cellClassList, activeCellClassList) 
            
            callback(dayNumber, dataArr[dayNumber-1]);
        })
    }

    getTemplate(numOfDays, cellClassList) {
        for(let i = 1; i <= numOfDays; i++) {
            const dayCellTemplate = this.getCellTemplate(i, cellClassList); //шаблон ячейки дня

            this.cellsTemplate += dayCellTemplate;
        }
    }

    getCellTemplate(index, cellClassList) {
        return `<div class=${cellClassList} data-day=${+index}>${index}</div>`
    }

    changeActiveCell(cell, cellClassList, activeCellClassList) {
        document.querySelectorAll(`.${cellClassList}`).forEach((item) => {
            item.classList.remove(activeCellClassList);
        });

        cell.classList.add(activeCellClassList);
    }
}
