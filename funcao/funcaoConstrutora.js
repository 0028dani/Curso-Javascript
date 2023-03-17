function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMaxima
            console.log("entrou aqui")
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
};

const uno = new Carro (100,100)
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
//ferrari.acelerar()
//ferrari.acelerar()
//ferrari.acelerar()
//onsole.log(ferrari.getVelocidadeAtual())