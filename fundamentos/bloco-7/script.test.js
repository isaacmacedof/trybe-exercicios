// loginValidation.test.js
const { sum, myRemove } = require("./script.js");


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