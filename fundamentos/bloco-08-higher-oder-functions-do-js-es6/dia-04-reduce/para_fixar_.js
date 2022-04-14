//  Para fixar ainda mais conceito de reduce , faça uma função que some todos os números pares do array:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const itsEven = (number) => number % 2 === 0;
     
const sumEvenNumbers = (result, number) =>  result + number;

const totalSumEvenNumbers = (array) => array.filter(itsEven).reduce(sumEvenNumbers);

const resultEvenSum = (totalSumEvenNumbers(numbers));

console.log('A soma dos valores pares do array é:', resultEvenSum);

