
class NegociacaoController {
    constructor(){
        let $ = document.querySelector.bind(document);
        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');
    };
    adiciona(event){
      event.preventDefault();

    
    let textoParaData = DateHelper.textoParaData(this._data.value);
    let dataParaTexto = DateHelper.dataParaTexto(textoParaData);
    
    var negociacao = new Negociacao(textoParaData,this._quantidade.value,this._valor.value);
    console.log(negociacao);

 
    }
}