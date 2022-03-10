// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index];
    }
}

console.log(maiorPalavra);

let menorPalavra = array [0];

for (let i = 0; i < array.length; i +=1) {
    if (array[i].length < menorPalavra.length) {
        menorPalavra = array[i];
    }
}

console.log(menorPalavra);