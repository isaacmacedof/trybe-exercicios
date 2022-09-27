/* let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info['recorrente'] = 'Ambos';

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics",
  nota: 'O último MacPatinhas',
  recorrente: "recorrentes",
};

for (const key in info) {
  console.log(info[key] + " e " + info2[key]);
} */

/* let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log("O livro favorito de " + leitor.nome + " se chama " + leitor.livrosFavoritos["titulo"]);

leitor.livrosFavoritos.push(
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }
)

console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos."); */

/* function palindromo(string) {
  if (string.split("").reverse().join("") == string) {
    return true;
  } else {
    return false;
  }
}; console.log(palindromo("arara")); */

/* let exercicio = null
let teste = [2, 3, 6, 7, 10, 1];
function maiorValor(teste) {
  for (let i = 0; i < teste.length; i+=1) {
    if (exercicio < teste[i]) {
    exercicio = i; 
    }
  } return exercicio
} console.log(maiorValor(teste)); */

/* let exercicio = Infinity
let teste = [2, 4, 6, 7, 10, 0, -3];
function menorValor(teste) {
  for (let i = 0; i < teste.length; i+=1) {
    if (exercicio >= teste[i]) {
    exercicio = i; 
    }
  } return exercicio
} console.log(menorValor(teste)); */

/* let exercicio = ''
let teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function maiorNome(teste) {
  for (let i = 0; i < teste.length; i+=1) {
    if (exercicio.length <= teste[i].length) {
    exercicio = teste[i]; 
    }
  } return exercicio
} console.log(maiorNome(teste)); */


/* function somaNumeros(n) {
  let total = 0;
  for (let i = 1; i <= n; i+=1) {
    total += i;
  } return total;
} console.log(somaNumeros(5)); */

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];
let market = {
  frutas: 
};
function cesta(array) {
  for (let i = 0; i < array.length; i+=1) {
    if (market.frutas array[i]) {
      
    }
    const element = array[i];
    
  }  
}

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let properties in info) {
  if (
    properties === 'recorrente' &&
    info[properties] === 'Sim' &&
    info2[properties] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[properties] + ' e ' + info2[properties]);
  }
}