const cliente = {
    nome: "André",
    idade: 36,
    cpf: "123456789",
    email: "andre@email.com",
    fones: ["129292992929", "1922928292929"],
    dependentes : [
    {
        nome: "Sara Silva",
        parentesco: "Filha",
        dataNasc: "20/03/2011"},
    {
        nome: "Samia Maria",
        parentesco: "Filha",
        dataNasc: "04/01/2014"
    }

 ],
    saldo:100,
    depositar:function(valor){
        this.saldo += valor
    }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)

