// 6. - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected .

const students = ["Pedro Henrique", "Miguel", "Maria Clara"];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];
const array = [9, 8, 10, 7, 5];

//calcula média para um estudante
function studentAverage(array) {
  const result = array.reduce((acc, curr) => {
    return (acc += curr);
  }, 0);
  const resultado = result / array.length;
  return resultado;
}

function main(students) {
  const averageAllStudents = grades.map(studentAverage);
  return students.map((student, i) => {
    return { name: `${student}`, average: averageAllStudents[i] }; //constrói o objeto final com nome e media de cada estudante
  });
}

console.log(main(students)); // chama função principal que constroi o objeto com nome e media de cada estudante;

const expected = [
  { name: "Pedro Henrique", average: 7.8 },
  { name: "Miguel", average: 9.2 },
  { name: "Maria Clara", average: 8.8 },
];
