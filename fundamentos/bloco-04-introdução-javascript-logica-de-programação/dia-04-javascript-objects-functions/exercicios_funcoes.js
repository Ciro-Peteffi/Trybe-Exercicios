// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

// let stringInvertida = '';

// function verificarPalindromo(string){
//     console.log(string);
//     console.log(string.length)
//     for ( let i = string.length - 1; i >= 0; i--) {
//        stringInvertida += string[i];
//         console.log(stringInvertida);
//     }
//     if (string === stringInvertida) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let verifica = verificarPalindromo('ama');
// console.log(verifica);

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

let arrayTesteMaior = [100, 200, 22, 7, 75, 1000];
let indiceMaiorNumero;
let maiorNumero = arrayTesteMaior[0];

function indiceMaiorNumeroArray (array) {
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] >= maiorNumero) {
            indiceMaiorNumero = i + 1;
            maiorNumero = array[i];
        }
    } 
    return indiceMaiorNumero;
}

let resultado1 = indiceMaiorNumeroArray(arrayTesteMaior);
console.log(resultado1);

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

let arrayTesteMenor = [-30, -25, 6, -4, 10, 0, -40];
let indiceMenorNumero;
let menorNumero = arrayTesteMenor[0];

function indiceMenorNumeroArray (array) {
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] <= menorNumero) {
            indiceMenorNumero = i + 1;
            menorNumero = array[i];
        }
    } 
    return indiceMenorNumero;
}

let resultado2 = indiceMenorNumeroArray(arrayTesteMenor);
console.log(resultado2);