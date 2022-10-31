const jsonLivro = JSON.stringify({
    id: 50,
    titulo: "Primeiros Passos com NodeJS",
    autor: "João Rubens",
    categoria: "programação",
    versoes: ["ebook", "impresso"]
   })
   
   console.log(jsonLivro) // formato json

   const objLivro = JSON.parse(jsonLivro) // processo inverso
    console.log(objLivro)
