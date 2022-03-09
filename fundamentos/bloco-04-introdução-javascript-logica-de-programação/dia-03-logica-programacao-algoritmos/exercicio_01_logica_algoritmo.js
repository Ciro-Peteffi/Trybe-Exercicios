// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// Copiar
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
// 2


let contador = 10;
let resultado = 1;
// let nFatorial = 10;

for (let i = 1; i <= contador; i++) {
  resultado = resultado * i;
}

// for (let i = contador; i > 0; i -= 1) {
//     resultado *= i;
// }

console.log(resultado);
