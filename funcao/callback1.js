const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(indice, a){
    console.log(` ${a}. ${indice}`)
})

//função arrow
fabricantes.forEach(a => console.log(`${a}`))