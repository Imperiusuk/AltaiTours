//------------Распаковка данных----------//
export default class GetData {
    constructor (url){
        this.url = url;
        this.getObject(this.url); 
    }

    async getData (url) {
        const response = await fetch(url);

        if(!response.ok) {
            throw new Error(`Ошибка по адресу ${this.url}, статус ошибки ${response}` );
        }
        return await response.json();
    }

    getObject(url) {
        this.getData(url)
            .then(data => {
            this._render(data);
        })

    }
    
    _render(data) {
        this.dataArray = [...data];
    }
} 