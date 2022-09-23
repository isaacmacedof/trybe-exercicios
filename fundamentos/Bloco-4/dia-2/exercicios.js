let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let valores = null

for (let i = 0; i < numbers.length; i++) {
   valores = valores + numbers[i];
} console.log(valores);

media = valores / numbers.length
if (media > 20) {
  console.log ("Valor maior que 20");
} else {
  console.log("Valor menor que 20");
}

let maiorNumero = null

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > maiorNumero) {
    maiorNumero = numbers[i];
  }
} console.log(maiorNumero);

let fruits = [3, 4, 10, 1, 12];

let element = null
for (let i = 0; i < fruits.length; i++) {
 element += fruits[i];
}

if (element > 16) {
  console.log(element);
} else {
  console.log("valor menor que 16");
}

let conta = 100
let resultado = null

for (let i = 0; i <= conta;) {
  
  resultado += 1;
} console.log(resultado);

let fatorial = null

for (let i = 10; i <= 1; i -= 1) {
  fatorial = fatorial * i; 
} console.log(fatorial);

let array = ['java', 'javascript', 'python', 'html', 'css'];

let resposta = '';
for (let i = 0; i < array.length; i++) {
  if (i.length > resposta.length) {
  resposta = resposta + array[i];
  }
} console.log(resposta.length);