// loginValidation.test.js
const { sum, myRemove, myFizzBuzz } = require("./script.js");


describe('Função de somar dois numeros', () => {

  it ('Testa se o retorno da função sum (4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it ('Testa se o retorno de sum (0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0)
  })

  it ('testa se é retornado um erro quando parametros errados', () => {
    expect(() => {sum(5, '5')}).toThrowError(new Error('parameters must be numbers'));
  })
});

describe('Função de remover um item', () => {
  const teste = [1, 2, 3, 4]
  let numero = 3

  it ('Teste para retornar o array esperado', () => {
    expect(myRemove(teste, 3)).not.toContainEqual(numero)
  })

  numero = 5

  it ('Teste com numero fora do array', () => {
    expect(myRemove(teste, numero)).not.toContainEqual(numero)
  })
})

describe ('Função divisiveis por x', () => {
  let numero = 15
  
  it ('Teste com um número divisivel por 3 e 5', () => {
    expect(myFizzBuzz(numero)).toBe('fizzbuzz')
  });

  it ('Teste com um número divisível por 3', () => {
    numero = 6
    expect(myFizzBuzz(numero)).toBe('fizz')
  });

  it ('Teste com um número divisível por 5', () => {
    numero = 5
    expect(myFizzBuzz(numero)).toBe('buzz')
  });

  it ('Teste com com um número que não é divisível por 3 ou 5', () => {
    numero = 2
    expect(myFizzBuzz(numero)).toBe(numero)
  });

  it ('Teste com um parâmetro que não é um número', () => {
    numero = 'alo'
    expect(myFizzBuzz(numero)).toBeFalsy()
  })
});