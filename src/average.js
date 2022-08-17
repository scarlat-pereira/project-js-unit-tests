/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

/* Utilizei a função Math.round () - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round */

const average = (myArray) => {
  let sum = 0;
  let media = '';

  if (myArray.length === 0) {
    media = undefined;
  }
  for (let index = 0; index < myArray.length; index += 1) {
    if (typeof myArray[index] !== 'number') {
      media = undefined;
      break;
    } else {
      sum += myArray[index];
      media = Math.round(sum / myArray.length);
    }
  }
console.log(media);
return media;
};
average([69, 100, 50]);

module.exports = average;
