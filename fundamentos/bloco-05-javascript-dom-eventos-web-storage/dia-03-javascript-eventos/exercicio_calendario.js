function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// 1 - O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

// const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function criarDiasMes (){

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

let feriado = [24, 25, 31];
let sextaFeira = [4, 11, 18, 25];

const elementUlDays = document.getElementById("days");

for (index = 0; index < dezDaysList.length; index += 1) {
  const elementLiDays = document.createElement("li");
  elementLiDays.classList = "day";
  elementUlDays.appendChild(elementLiDays);
  elementLiDays.innerText = dezDaysList[index];

  for (let index1 = 0; index1 < feriado.length; index1 += 1) {
    if (dezDaysList[index] === feriado[index1]) {
      elementLiDays.classList.add("holiday");
    }
  }

  for (let index2 = 0; index2 < dezDaysList.length; index2 += 1) {
    if (dezDaysList[index] === sextaFeira[index2]) {
      elementLiDays.classList.add("friday");
    }
  }
}
}
criarDiasMes();


// 2 - Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

const feriados = 'Feriados';

function createButton(feridados) {
  const button = document.createElement('button');
  button.innerHTML = feriados;
  const elementDivButton = document.getElementsByClassName('buttons-container')[0];
  elementDivButton.appendChild(button);  
  button.id = 'buttons-container';
  console.log(elementDivButton);
}
createButton();