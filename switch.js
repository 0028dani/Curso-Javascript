const imprimirResultado = function (nota) {
    switch(Math.floor(nota)) {
        case 10:
        case 9:
            console.log('quadro de honra');
            break  // serve para parar a execucao
        case 8: case 7:
            console.log('Aprovado');
        case 6: case 5: case 4:
            console.log('Recuperação');
        case 3: case 2: case 1: case 0:
            console.log("Reprovado");
            break
        default: 
            console.log('nota inválida');
    }
}

imprimirResultado(9.5)