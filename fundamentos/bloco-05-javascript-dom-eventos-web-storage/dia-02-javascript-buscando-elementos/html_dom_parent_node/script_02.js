// 1. Acesse o elemento elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');


 // 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const pai = elementoOndeVoceEsta.parentElement;
pai.style.background = 'red';



//3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
//Você se lembra dos vídeos da aula anterior, como fazer isso?
const elementoFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
elementoFilhoDoFilho.innerText = 'Aqui é o elemento primeiro filho do filho';


// 4. Acesse o primeiroFilho a partir de pai.
const elementoPrimeiroFilhoPai = pai.firstElementChild;
elementoPrimeiroFilhoPai.innerText = 'Primeiro filho do pai';

// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
const primeiroFilhoPartirOndeVoceEsta = elementoOndeVoceEsta.previousElementSibling;

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
const atencaoPartirOndeVoceEsta = elementoOndeVoceEsta.nextSibling;

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
const terceiroFilhoPartirOndeVoceEsta = elementoOndeVoceEsta.nextElementSibling;

// 8. Agora acesse o terceiroFilho a partir de pai.
const terceiroFilhoPai = pai.lastElementChild.previousElementSibling;







