// Agora você vai fazer alguns exercícios de fixação.
// Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .

// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O');  
//   }

//   testingScope(true);

const testingScope = (escopo) => {
	let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
	let elseScope = 'Não devo ser utilizada fora meu escopo (else)';

	if (escopo === true) {
		ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
		console.log(ifScope);
	} else {
		console.log(elseScope);
	}
	console.log(`${ifScope} o que estou fazendo aqui? :O'`);
};

testingScope(true);

// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const arrayOrdemCrescente = (array) => {
//     for (let i = 0; i < array.length; i += 1) {
//        for (let j = 0; j < array.length; j += 1) {
//         if(array[i] < array[j]) {
//             auxiliar = array[i];
//             array[i] = array[j]
//             array[j] = auxiliar;
//        }    
//        }
//     }
//     console.log(`Os números ${array} se encontram ordenados de forma crescente`);
// }

const arrayOrdemCrescente = (array) => {
    array.sort((a, b) => a - b);
    console.log(`Os números ${array} se encontram ordenados de forma crescente`);
}

arrayOrdemCrescente(oddsAndEvens);

