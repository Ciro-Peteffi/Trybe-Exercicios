// 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => number % 3 ===0 && number % 5 === 0;  // Adiciona seu código aqui

const result = numbers.find((findDivisibleBy3And5));

console.log(findDivisibleBy3And5(15));

console.log(`O primeiro número divisível por 3 e 5 no array é: ${result}`); // retorna o primeiro número divisível por 3 e 5 no array, através do find.


// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (string) => string.length === 5;
const result1 = names.find((findNameWithFiveLetters));

console.log(findNameWithFiveLetters('Irene'));
console.log(`O primeiro nome com 5 letras no array, obtido pelo .find é: ${result1}`);

// 3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
const result2 = musicas.find((findMusic));

  function findMusic(id) {
     if (musicas[0].id === id) {
         return true
     };          
  }
  
console.log(findMusic('31031685'));

console.log();

