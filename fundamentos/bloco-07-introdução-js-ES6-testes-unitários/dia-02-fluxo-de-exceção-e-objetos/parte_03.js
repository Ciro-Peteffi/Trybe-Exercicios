
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1 - Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addKey = (object, key, value) => {
    object[key] = value; //adicionando nova chave no objeto 
}

addKey(lesson2, 'turno', 'noite');

console.log(lesson2);

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (obj) => {
  console.log('Lista de chaves do objeto: ' + Object.keys(obj));
}

listKeys(lesson2);

// 3 - Crie uma função para mostrar o tamanho de um objeto.

const tamanhoObj = (obj) => {
  console.log('Tamanho do objeto: ' + Object.keys(obj).length);
}

tamanhoObj(lesson1);

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const valuesFromObj = (obj) => {
  console.log('Os valores do objeto são: ' + Object.values(obj));
}

valuesFromObj(lesson3);

// 5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

const allLessons1 = {};

Object.assign(allLessons1, {lesson1, lesson2, lesson3}); 
console.log(allLessons1);

const allLessons2 = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons2);

// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalStudents = (objAllLessons) => {
  return objAllLessons.lesson1.numeroEstudantes + objAllLessons.lesson2.numeroEstudantes + objAllLessons.lesson3.numeroEstudantes;
}

console.log(totalStudents(allLessons1));