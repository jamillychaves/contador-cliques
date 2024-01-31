// Obtém referências aos elementos HTML que precisamos
const contadorElemet = document.getElementById('contador');
const botaoElement = document.getElementById('botao');

// Inicia o contador
let contador = 0;

// Adiciona um evento de clique no botão
botaoElement.addEventListener('click', () => {
    // Incrementa o contador quando o botão é clicado
    contador++;
    // Atualiza o texto do contador
    contadorElemet.textContent = contador;
});