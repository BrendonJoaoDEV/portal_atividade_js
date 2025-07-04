// Verificar se a página foi carregada
document.addEventListener('DOMContentLoaded', function () {
    // Carregar as opções das funcionalidades
    carregar(mensagemBasica)
    carregar(funcionalidades)

    // Ao clicar numa função, limpar main e carregar a função
    adicionarEventoBotao('botao-par-impar', carregar(verificarParImpar));
    adicionarEventoBotao('botao-maior-menor', carregar(encontrarMaiorMenor));
    adicionarEventoBotao('botao-velocidade', carregar(monitorarVelocidade));
    adicionarEventoBotao('botao-salario', carregar(aumentarSalario));
    adicionarEventoBotao('botao-passagens', carregar(calcularPassagem));
    adicionarEventoBotao('botao-ano-bissexto', carregar(verificarAnoBissexto));
    adicionarEventoBotao('botao-triangulo', carregar(verificarTriangulo));
    adicionarEventoBotao('botao-raizes', carregar(calcularRaizesEquacaoSegundoGrau));
})
// Ao finalizar a função, limpar main e carregar as funcionalidades

const mensagemBasica = `<p>Contextualizando, essa é uma atividade de desenvolvimento WEB construida para resolver os diversos problemas apresentados no repositório desse projeto, no arquivo <a href="https://github.com/BrendonJoaoDEV/portal_atividade_js/blob/main/enunciado.md">enunciado.md</a>,<br><br>Caso esse site seja útil para você fique a vontade para usá-lo :&#41;<br><br><strong id="aviso">AVISO! Todas as situações tratadas abaixo são metamente fictícias!</strong></p>`

function carregar (html) {
    const main = document.getElementById('principal');
    main.innerHTML = html;
}