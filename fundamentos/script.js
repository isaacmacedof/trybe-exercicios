/* const sum = (value1, value2) => value1 + value2;

console.log(sum(2, 3));

const matematic = {
  verifyIsNumber: (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
  },
  sum: (value1, value2) => {
    try {
      matematic.verifyIsNumber(value1, value2);
      return value1 + value2;
    } catch (error) {
      return error.message;
    }
  }
}

console.log(matematic.sum(2, '3')); */

const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)