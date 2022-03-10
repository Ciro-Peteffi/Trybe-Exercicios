// Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
// Copiar
// n = 5

// *****
// *****
// *****
// *****
// *****

let n = 100;
let entrada = " ";
let simbolo = '*'

for (let index2 = 0; index2 < n; index2 +=1){
    entrada = entrada + simbolo;
}

for (let index = 0; index < n; index += 1){
    console.log(entrada);
}

