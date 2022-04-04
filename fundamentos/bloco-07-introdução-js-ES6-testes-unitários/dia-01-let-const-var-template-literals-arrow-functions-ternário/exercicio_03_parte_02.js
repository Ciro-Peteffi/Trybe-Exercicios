let resultado = 0;
let paragraph = document.getElementById('paragraph')
paragraph.innerText = 0;

const contador = () => {
    resultado += 1;
    paragraph.innerText = resultado;  
 }   

 document.getElementById('contador').addEventListener('click', contador);


