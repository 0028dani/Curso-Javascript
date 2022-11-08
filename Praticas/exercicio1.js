const overwatch = [
    {
        nome: "Junkrat",
        personagemForte: "sim",  
    },
    {
        nome: "Ana",
        personagemForte: "nao",  
    },
    {
        nome: "Reinhardt",
        personagemForte: "sim",  
    },
    {
        nome: "Soldier",
        personagemForte: "sim",  
    },
    {
        nome: "Reaper",
        personagemForte: "sim",  
    } 
]

//overwatch.forEach(info => console.log(overwatch[0]))

for (i = 0; i < overwatch.length; i++) {
   // console.log(overwatch[i]);

if (overwatch[i].personagemForte == "sim"){
    console.log(`personagem bom ${JSON.stringify(overwatch[i])}`)
 } else {
    console.log(`personagem ruim ${JSON.stringify(overwatch[i])}`)
 }
} 
