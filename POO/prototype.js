let user = {
    perfil: "estudante"
}

let estudante = {
    nome: "Juliana"
}

Object.setPrototypeOf(estudante, user)

console.log(estudante.nome)
console.log(estudante.perfil)

function User(){
    User.prototype.perfil = "estudante"
    let estudante = new User()
}

console.log(estudante.perfil)