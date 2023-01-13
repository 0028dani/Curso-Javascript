const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
const notasBaixas1 = []
for (let i in notas){
    if (notas[i] < 4) {
        notasBaixas1.push(notas[i])
    }
}

//console.log(notasBaixas1)

const idade = [10, 25, 77, 50, 84, 85, 96, 100]

let idadeInferior = []
for (let i in idade){
    if (idade[i] % 50){
        idadeInferior.push(idade[i])
    }
}

console.log(idadeInferior)

// Com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
}) 
console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

const notasMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQue7)

console.log(notasBaixas4)