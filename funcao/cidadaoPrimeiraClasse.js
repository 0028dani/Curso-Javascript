
// Forma literal
function fun1(nome){
    return "Meu nome é " + nome;
}

// Armazenar em uma váriavel
const fun2 = function(nome){
    return "Olá " + nome;
}

//Armazenar em um array
const array = [function(a, b) { return a + b}, function(a,b) {return a * b}]
//const array2 = [function teste(a, b) { return a + b}, fun1, fun2]
//console.log(array[0](5,1))

// Armazenar em um atributo de objeto
const obj = {
    nome: "João"
}
obj.falar = function () {return "Opa"}
//console.log(obj.falar())

// Passar função como parametro
const nome = "João"
function nomes(nome){
    return nome
}
//console.log(nomes(nome))

// Um função pode retornar/conter um função
function soma(a,b){
    return function (c){
        console.log(a + b + c)
    }
}

//soma(2,3)(4)
//armazenar a função na variavel
const cincoMais = soma(2,3)
cincoMais(4)