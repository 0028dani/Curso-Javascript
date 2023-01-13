const nums = [1, 2, 3, 4, 5]

const nomes = ["Phara", "Trace", "Ashe", "Ana",]

// For com propósito
let resultado = nums.map(function(e) {
    return e;
})

console.log(resultado)

const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` // casa decimal vem com . em default = replace para trocar

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

let nomesCompletos = nomes.map(function(n){
    return `${n} Arcanjo`
})

//console.log(nomesCompletos)