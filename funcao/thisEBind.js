const pessoa = {
    saudacao: "Bom dia",
    idade: 15,
    falar(){
        console.log(this.saudacao)
    },
    humano(){
        console.log(this.idade)
    }
}

const animal = {
    saudacao: "Boa tarde",
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e 00

const falarDePessoas = pessoa.humano.bind(pessoa)
falarDePessoas()

//PRATICAR MAIS!!!