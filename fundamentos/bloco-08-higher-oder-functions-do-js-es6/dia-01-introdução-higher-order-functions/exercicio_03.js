// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


const checarRespostas = (i, array1, array2) => {
    let sum = 0;
	if (array2[i] === 'NA') {
		return (sum += 0);
	}
	if (array1[i] === array2[i]) {
		return (sum += 1);
	}
	return (sum -= 0.5);
};

const resultadoProva = (callback, respostasCertas, respostasEstudante) => {
    let resultado = 0;
	for (let i = 0; i <= respostasCertas.length; i += 1) {
        resultado += callback(i, respostasCertas, respostasEstudante);
    }
    return resultado;
};

const resultadoTotal = resultadoProva(checarRespostas, RIGHT_ANSWERS, STUDENT_ANSWERS);

console.log(resultadoTotal);
