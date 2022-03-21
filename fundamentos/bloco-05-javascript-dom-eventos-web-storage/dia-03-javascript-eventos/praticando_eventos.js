const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// .tech {
//     transform: translateY(-20px);  Porque dentro do HTML na li em que está inserida a caixa, ela tem esse estilo aplicado pela classe .tech
//   }

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
firstLi.addEventListener('click', adicionarTech);
secondLi.addEventListener('click', adicionarTech);
thirdLi.addEventListener('click', adicionarTech);

function adicionarTech(event){
  const elementoLi = document.getElementsByTagName('li');
  for (let i = 0; i < elementoLi.length; i++){
    if (elementoLi[i].classList.contains('tech')){
      elementoLi[i].classList.remove('tech');
    }
    event.target.classList.add('tech');
    input.value = '';
  } 
}
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
// Quando clicar no elemento li, chamo uma funçao que varre o array de elementos li, procurando o elemento que possui a classe tech. Ao encontrar, removo ele da lista que o pussui e logo apos adiciono tech na lista que foi clicada.

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

input.addEventListener('input', alterarTexto);

function alterarTexto() {
  const techList = document.querySelector('.tech');
  techList.innerText = input.value;
}
  

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
myWebpage.addEventListener('dblclick', redirecionarWeb);

function redirecionarWeb(){
  window.location.href = "http://stackoverflow.com";
}

// 4.1. Que tal redirecionar para seu portfólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

myWebpage.addEventListener('mouseover', mudarCor)

function mudarCor (event){
  event.target.style.color = 'gray';
  console.log(event);
}

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.