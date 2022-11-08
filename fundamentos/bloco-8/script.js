/* const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  return numbers.find((number) => number % 3 === 0 % number % 5 === 0)
};

const divisible = numbers.find(findDivisibleBy3And5)

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  return names.find ((nome) => nome.length >= 5)
};

console.log(findNameWithFiveLetters());

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

function findMusic(id) {
  return musicas.find((aid) => aid.id === id)
};

console.log(findMusic('31031685')); */

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.forEach(element => {
    element === name
  });
};

console.log(hasName(names, 'Ana'));