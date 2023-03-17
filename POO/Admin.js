import User from "./user.js"

export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    nomeAdmin() {
        return `${this.nome}`
    }

    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas` 
    }
}

//const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2021-02-02')
//console.log(novoAdmin.criarCurso('JS', 20))