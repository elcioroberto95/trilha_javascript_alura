class ArquivoController {

    constructor() {
        this._inputDados = document.querySelector('.dados-arquivo');
    }

    envia() {
        let dadosInput = FormataInput.formatar(this._inputDados.value);
        let nome = dadosInput[0];
        let tamanho = dadosInput[1];
        let formato = dadosInput[2];
        let arquivo = new Arquivo(nome, tamanho, formato);
        this._limpaFormulario();
        console.log(arquivo);
    };

    _limpaFormulario() {
        this._inputDados.value = '';
        this._inputDados.focus();
    };
};