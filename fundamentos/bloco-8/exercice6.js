const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObject = (array) => {
  const result = {
    type: array[0],
    model: array[1],
    year: array[2],
  }
  return result;
}

const carros = [[...palio], [...chiron], [...shelbyCobra]];
console.log(carros);

console.log(toObject(carros));