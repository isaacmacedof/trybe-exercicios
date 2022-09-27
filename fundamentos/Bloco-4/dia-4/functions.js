/* const person1 = [10, 9, 8, 10];
const person2 = [10, 10, 7, 9];

function media (person) {
  let medias = 0;
  for (let i = 0; i < person.length; i+=1) {
  medias += person[i];
  }
  console.log(medias / person.length);
};

media (person1)
 */

/* 
function max (a, b) {
  if (a > b) {
    return a
  } else {
    return b
  }
}

console.log (max(10, 25)) */

/* const studentGame = [6, 11, 54, 34, 39, 44]
const jogoDoIsaac = [3, 41, 34, 56, 32, 13]
let numberOfHits = 0
let numerosSorteados = []

function loteria (megaSenaNumbers, jogoDoIsaac) {
  for (let i = 0; i < jogoDoIsaac.length; i+=1) {
    let drawNumber = megaSenaNumbers[i]

    for (let iStudent = 0; iStudent < jogoDoIsaac.length; iStudent+=1) {
      let studentNumber = jogoDoIsaac[iStudent]
     
      if (drawNumber === studentNumber) {
      numerosSorteados.push(studentNumber[iStudent])
      numberOfHits += 1;
      return numberOfHits + ' foram a quantidade de acertos e esses foram os numeros: ' + numerosSorteados
      }      
    }
  } 
}
console.log(numerosSorteados)
console.log(loteria (studentGame, jogoDoIsaac)); */

/* function adição(a, b) {
  let resultado = a + b;
  return "O resultado da adição é " + resultado;
} 

console.log(adição(3, 43));

function subtração(a, b) {
  let resultado = a - b;
  return "O resultado da subtração é " + resultado;
} 

console.log(subtração(3, 43));

function multiplicação(a, b) {
  let resultado = a * b;
  return "O resultado da multiplicação é " + resultado;
} 

console.log(multiplicação(3, 43));

function divisão(a, b) {
  let resultado = a / b;
  return "O resultado da divisão é " + resultado;
} 

console.log(divisão(3, 43));

function modular(a, b) {
  let resultado = a % b;
  return "O resto da divisão é " + resultado;
} 

console.log(modular(3, 43)); */

/* 
function bigOfNumbers(a, b, c) {
  if (a > b && a > c) {
    return "O numero que é maior é " + a;
  } else if (b > a && b > c) { 
    return "O numero que é maior é " + b;
  } else {
    return "O numero que é maior é " + c;
  };
} console.log(bigOfNumbers(3, 4, 5));
 */

