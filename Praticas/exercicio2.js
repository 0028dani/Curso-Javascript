const overwatch = [
    {
        nome: "Junkrat",
        personagemForte: "sim",  
        hole: "dano"
    },
    {
        nome: "Ana",
        personagemForte: "nao",  
        hole: "cura"
    },
    {
        nome: "Reinhardt",
        personagemForte: "sim",  
        hole: "tank"
    },
    {
        nome: "Soldier",
        personagemForte: "sim",  
        hole: "dano"
    },
    {
        nome: "Reaper",
        personagemForte: "sim",  
        hole: "dano"
    } 
]

overwatch.forEach(personagens => {
    if (personagens.hole === "dano"){
        console.log(`personagem bom ${JSON.stringify(personagens)}`)
    } else {
        console.log(`personagem ruim ${JSON.stringify(personagens)}`)
    }
})
   

