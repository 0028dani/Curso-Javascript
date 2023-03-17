import User from "./user.js"

export default class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso){
        return `estudante ${estudante} passou no curso ${curso}`
    }
}

//const novoDocente = new Docente ('Daniela', 'daniela.daniela@.com', '02-02-199')
//console.log(novoDocente)
//console.log(novoDocente.exibirInfos())
//console.log(novoDocente.aprovaEstudante('Daniela', 'JS'))