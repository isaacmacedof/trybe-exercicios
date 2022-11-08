let itens = ['batata', 'x-tudo', 'refrigerante', 'big-mac', 'nuggets'];

let preços = [12, 33, 5, 9, 15];

let cardapio = null
for (let i = 0; i < itens.length; i += 1) {
  if (itens.length == preços.length) {
    cardapio = itens[i] + " = R$" + + preços[i]
  console.log(cardapio);
  }
}

let carteira = 20
let carrinho = []

for (let i = 0; i < itens.length; i+= 1) {
  if (preços[i] < carteira && i < itens.length -1) {
    carrinho += itens[i] + ", "
  } else if (preços [i] < carteira) 
   {carrinho += itens[i] + ". "}
} console.log(carrinho);