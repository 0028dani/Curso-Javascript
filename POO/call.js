function exibeInfos() {
    console.log(this.nome, this.email);
}

const user = {
    nome: "Mariana",
    email: "m@m.com"
}

//exibeInfos.call(user)

function User(nome, email) {
    this.nome = nome;
    this.email = email;

    this.exibeInfos = function(){
        console.log(this.nome, this.email)
    }
}

const newUser = new User('Mariana', 'm@m.com')

const outroUser = {
    nome: "Rodrigo",
    email: 'r@r.com'
}

newUser.exibeInfos()
newUser.exibeInfos.call(outroUser)

function exibeMensagemCall(nome, email) {
    console.log(`usuário: ${nome}, email ${email}`)
}

const user2 = {
    nome: "daniela",
    email: "d@d.com",
    executaFuncao: function(fn) {
        fn.call(user2,this.nome, this.email)
    }
}

user2.executaFuncao(exibeMensagemCall)

function exibeMensagemApply(nome, email) {
    console.log(`usuário: ${nome}, email ${email}`)
}

const user3 = {
    nome: "Dani",
    email: "a@a.com",
    executaFuncao: function(fn) {
        fn.apply(user3, [this.nome, this.email])
    }
}

user3.executaFuncao(exibeMensagemApply)