class MensagemView extends View {
    constructor(element){
        super(element);
    }

    _template(model){
        this._fadeOut();
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>'
    };
    _fadeOut(){
        setTimeout(() => {
            document.querySelector('.alert').style.display = 'none';
        },3000);
    }
}