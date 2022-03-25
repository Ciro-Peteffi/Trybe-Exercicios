// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function inibirComportamento(event) {
  event.preventDefault();
}

HREF_LINK.addEventListener('click', inibirComportamento);

INPUT_CHECKBOX.addEventListener('click', inibirComportamento);


function inibirLetraA(event) {
    const character = event.key;
    if (character !== 'a') {
      event.preventDefault();
    }
}

INPUT_TEXT.addEventListener('keypress', inibirLetraA);

