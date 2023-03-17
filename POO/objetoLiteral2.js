const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021/01/01",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email, this.role, this.nascimento)
    }
}

const admin = {
    nome: "Mariana",
    email: "m@m.com",
    nascimento: "02/02/1990",
    role: "admin",
    criarCurso() {
        console.log("Curso criado!!!")
    }
}

// metodo object
Object.setPrototypeOf(admin, user) // user prototipo de admin
admin.criarCurso()
admin.exibirInfos()

