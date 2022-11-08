let diasDaSemana = {
  1: 'domingo',
  2: 'segunda',
  3: 'terça',
  4: 'quarta',
  5: 'quinta',
  6: 'sexta',
  7: 'sábado',
};

console.log(diasDaSemana['2']); // domingo

let isaac = {
  nome: "Isaac",
  lastName: "Macedo",
  idade: 22,
  endereço: {
    rua: "cezarZama",
    numero: 35,
    bairro: "Barra",
  },
  amor: {
    nome: "Carol",
    lastName: "Silveira",
    idade: 23,
    sobrinho: "Dimitri",
    beleza: "Infinita",
  },
};

let fraseReal = "O ser humano " + isaac.nome + " ama muito a fofa " + isaac.amor.nome + " " + isaac.amor.lastName;

console.log();

console.log(fraseReal);

let player = {
  name: "Marta",
  lastName: "Silva",
  age: "34",
  medals: {
    golden: 2,
    silver: 3,
  },
};
let pizzas = {
  sabor: "Palmito",
  preco: 39.90,
  bordaCatupiry: true, 
};

for (let key in pizzas) {
  console.log(pizzas[key]);
}

let pizzasDoces = ['chocolate', 'banana', 'morango'];

for (const key in pizzasDoces) {
    console.log(key,pizzasDoces[key]);
}

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (const i in names) {
    console.log("Olá " + names[i]);
}

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let i in car) {
  console.log(i, car[i])
}

/* function calculo (n1 = Number, n2) {
let resultado =  n1 + n2;
return;
}; */

const amor = {
  fistName: 'Carol',
  lastName: 'Silveira',
  age: 23,
  canDrive: true,
  musics: ['Louquinho', 'Girlfriend', 'p.s i love you'],
};

console.log(amor.musics[2]);

// exemplo de for in

for (let i in amor) {
  console.log(i, amor);
}