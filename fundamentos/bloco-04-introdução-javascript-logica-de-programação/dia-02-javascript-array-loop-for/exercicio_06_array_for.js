// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [10, 1, 8, 20, 70, 8, 100, 2, 34, 28];

contadorImpares = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 === 1) {
    contadorImpares += 1;
  }
}

if (contadorImpares === 0) {
  console.log("nenhum valor ímpar encontrado");
} else {
  console.log("O número de valores ímpares no array é: " + contadorImpares);
}
