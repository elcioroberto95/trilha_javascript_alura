class Datehelper {
//NÃO POSSUI UM METODO CONSTRUTOR É UMA CLASSE ESTATICA
    static textoParaData(texto){
        
        if(!/\d{4}-\d{2}\d{2}/.text(texto)){
            throw new Error("Data invalida");
        };
       return new Date(...texto.split('-').map((item,index)=> item - index % 2));
    };

    static dataParaTexto(data){
        return `${data.getDate()} / ${data.getMonth() + 1} / ${data.getFullYear()}`
    };
};