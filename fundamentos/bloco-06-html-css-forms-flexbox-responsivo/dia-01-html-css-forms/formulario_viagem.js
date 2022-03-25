const btnEnviar = document.getElementById('enviar');

function inibirEnvio(event) {
    event.preventDefault();
}

btnEnviar.addEventListener('click', inibirEnvio);