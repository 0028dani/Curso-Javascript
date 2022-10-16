const cliente = {
    nome: "André",
    idade: 36,
    cpf: "123456789",
    email: "andre@email.com",
    fones: ["129292992929", "1922928292929"]
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "Filha",
    dataNasc: "20/03/2011"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"
console.log(cliente)