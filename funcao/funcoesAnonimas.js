const soma = function (x, y){
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x,y){
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)

function estiloMusical(){
    let musica = "eletronica";
    return musica
}



const gostoMusical = {
    estilo: function (){
        estiloMusical();
        console.log(estiloMusical())
    }
}

gostoMusical.estilo()


let nome = "Daniela";
const pessoa = {
    falar: function (nome) {
         console.log('Opa ' + nome )
    }
}

pessoa.falar(nome)

// nova versão funções anonimas JS

const pessoa2 = {
    falar() {
        console.log("Eae");
    }
}

pessoa2.falar()