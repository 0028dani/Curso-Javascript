const user = {
    init: function(nome, email){
        this.nome = nome
        this.email = email
    },

    exibirInfos: function(){
        return  this.email
    }
}

const novoUser = Object.create(user)
novoUser.init('Juliana', 'j@j.com')
console.log(novoUser.exibirInfos())