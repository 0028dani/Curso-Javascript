const carrinho = [
    '{ "nome": "borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 19.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

// retornar um array apenas com os numeros

const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.nome;

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)