// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [-1, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumero = numbers[0];

for (let i = 0; i < numbers.length; i +=1) {
    if (maiorNumero < numbers[i]) {
        maiorNumero = numbers[i];
    }
}

console.log ('O maior número do array é: ' + maiorNumero);