document.addEventListener('DOMContentLoaded', function () {
    const info_paginas = [
        {caminho: 'pages/a_par_impar.html', funcao: 'Verificar se o número é par ou impar.'},
        {caminho: 'pages/b_maior_menor_igual.html', funcao: 'Verificar o maior e menor número ou se todos são iguais.'},
        {caminho: 'pages/c_monitoramento_velocidade.html', funcao: 'Verificar se a velocidade está abaico ou acima do limite.'},
        {caminho: 'pages/d_aumento_salarial.html', funcao: 'Aplicar um aumento de acordo com o valor do salário.'},
        {caminho: 'pages/e_calculo_passagens.html', funcao: 'Calcular valor da passagem de acordo com a distância da viagem.'},
        {caminho: 'pages/f_ano_bissexto.html', funcao: 'Informa se um ano é ou não bissexto com base no calendário gregoriano.'},
        {caminho: 'pages/g_verificacao_triangulo.html', funcao: 'Informa se três segmentos podem formar um triângulo ou não.'},
        {caminho: 'pages/h_raizes_segundo_grau.html', funcao: 'Calcula as raízes de uma equação de segundo grau e explica o processo.'}
    ];

    const ul = document.getElementById('container-cards');

    exibirCards(criarCards(info_paginas), ul)
});

function criarCards (informacoes_paginas) {
    paginas = informacoes_paginas.map(function (pagina) {
        return`<section><p>${pagina.funcao}</p><a href='${pagina.caminho}'>acessar página</a></section>`;
    });
    return paginas;
}

function exibirCards (array_links, elemento_exibicao) {
    array_links.forEach(function (link) {
        card = document.createElement('li');
        card.innerHTML = link;
        elemento_exibicao.appendChild(card);
    });
}