class NegociacaoController {
    constructor(){
        let $ = document.querySelector.bind(document);
        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');
    };

    adiciona(event){
        event.preventDefault();
        let data = new Date(this._data.value.split('-'));
        var negociacao = new Negociacao(data,this._quantidade.value,this._valor.value);
        console.log(negociacao);
    }
}