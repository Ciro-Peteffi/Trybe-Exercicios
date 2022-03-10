// Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

// let biggestPrimeNumber = 0;

// for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
//   let isPrime = true;
//   for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
//     if (currentNumber % currentDivisor === 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     biggestPrimeNumber = currentNumber;
//   }
// }

// console.log(biggestPrimeNumber);

let maiorPrimo = 0;
let contaPrimo = 0;

for (let i = 0; i < 50; i += 1) {
  for (let divisor = 1; divisor < i; divisor += 1) {
    if (i % divisor === 0) {
      contaPrimo += 1;
    }
    if (contaPrimo < 2) {
        maiorPrimo = i;
    }
  }
}

console.log(maiorPrimo);
