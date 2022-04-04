// Crie uma função que receba um número e retorne seu fatorial.

const fatorial = (number) => {
    let resultado = 1;
    if (number === 0) {
        return 1;
    } else {
        for (let index = 1; index <= number; index += 1) {
            resultado *= index;
        }
    }
    return resultado;
}

console.log(fatorial(10));

// Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = (string) => {
    string = string.split(' ');
    let biggestWord = string[0];
    for (let index = 0; index < string.length; index += 1) {
        if (biggestWord.length < string[index].length) {
            biggestWord = string[index];
        }   
    }
    console.log(biggestWord);
}
longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'