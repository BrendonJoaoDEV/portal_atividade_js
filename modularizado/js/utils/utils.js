// Funções utilitárias
// Função limparElemento: 
// Recebe um elemento HTML 
// Define a propriedade innerHTML dele como ``
export function limparElemento (elemento) {
    return elemento.innerHTML = ``;
}

// Função carregar: 
// Recebe um elemento HTML e o conteúdo que deve ser carregado dentro dele em HTML
// Cria um elemento HTML section
// Define o conteúdo na propriedade innerHTML dessa section
// Adiciona essa section como filha do elemento de carregamento
export function carregar (elementoCarregamento, htmlCarregamento) {
    const novaSecao = document.createElement('section');
    novaSecao.innerHTML = htmlCarregamento;
    elementoCarregamento.appendChild(novaSecao);
}

// Função adicionarEventoBotaoPrincipal
// Recebe um elemento principal, um conteúdo em HTML, um elemento HTML button, e uma função em JavaScript
// Cria uma escuta para o evento 'click' no botão recebido
// Quando o botão for pressionado:
// Limpa o elemento principal
// Carrega no elemento principal o conteúdo em HTML
// Chama a função em JavaScript
export function adicionarEventoBotaoPrincipal (elementoPai, htmlCarregar, botao, funcionalidade) {
    document.getElementById(botao).addEventListener('click', function () {
        limparElemento(elementoPai);
        carregar(elementoPai, htmlCarregar);
        funcionalidade();
    });
}

// Função adicionarEventoBotaoSecundario
// Recebe um elemento HTML button e uma função em JavaScript
// Cria uma escuta para o evento 'click' no botão
// Quando o botão for pressionado: chama a função em JavaScript
export function adicionarEventoBotaoSecundario (botao, funcionalidade) {
    document.getElementById(botao).addEventListener('click', funcionalidade);
}