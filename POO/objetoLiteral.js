const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021/01/01",
    role: "admin",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

//user.exibirInfos()

const exibir = function() {
    console.log(this.nome, this.nascimento)
}

const exibirNome = exibir.bind(user)

exibirNome()
exibir()