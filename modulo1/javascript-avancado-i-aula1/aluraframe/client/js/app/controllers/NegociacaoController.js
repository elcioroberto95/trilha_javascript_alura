
class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);
    this._data = $('#data');
    this._quantidade = $('#quantidade');
    this._valor = $('#valor');
    this._listaNegociacoes = new ListNegociations();
    Object.freeze(this);
  };
  adiciona(event) {
    event.preventDefault();
    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._limpaFormulario();

  };
  _limpaFormulario() {
    this._data.value = '';
    this._quantidade.value = '';
    this._valor.value = '';
    this._data.focus();
  };
  _criaNegociacao() {
    return new Negociacao(DateHelper.textoParaData(this._data.value), this._quantidade.value, this._valor.value);
  }

}