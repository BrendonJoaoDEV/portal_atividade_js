document.addEventListener('DOMContentLoaded', function () {
    // Verificar se a página foi carregada
    const main = document.querySelector('main');

    // Carregar as opções das funcionalidade
    carregar(main, mensagemBas
    carregar(main, funcionalidades);

    // Ao clicar numa função, limpar main e carregar a função
    document.getElementById('botao-par-impar').addEventListener('click', function () {
        limparElemento(main);
        carregar(main, parImpar);
        verificarParImpar();
    });

    // adicionarEventoBotao('botao-par-impar', verificarParImpar(main, parImpar));
    // adicionarEventoBotao('botao-maior-menor', encontrarMaiorMenor);
    // adicionarEventoBotao('botao-velocidade', monitorarVelocidade);
    // adicionarEventoBotao('botao-salario', aumentarSalario);
    // adicionarEventoBotao('botao-passagens', calcularPassagem);
    // adicionarEventoBotao('botao-ano-bissexto', verificarAnoBissexto);
    // adicionarEventoBotao('botao-triangulo', verificarTriangulo);
    // adicionarEventoBotao('botao-raizes', calcularRaizesEquacaoSegundoGrau);
});

// Funções utilitárias
function carregar (elementoCarregamento, htmlCarregamento) {
    const novaSecao = document.createElement('section');
    novaSecao.innerHTML = htmlCarregamento;
    elementoCarregamento.appendChild(novaSecao);
}

function adicionarEventoBotao (botao, funcionalidade) {
    document.getElementById(botao).addEventListener('click', funcionalidade);
}

function limparElemento (elemento) {
    return elemento.innerHTML = ``;
}

// Ao finalizar a função, limpar main e carregar as funcionalidades
function verificarParImpar () {
    adicionarEventoBotao('botao-verificar', function () {
        const entrada = document.getElementById('entrada');
        const saida = document.getElementById('saida');
        const entradaConvertida = parseInt(entrada.value);

        if (entradaConvertida === 0) {
            saida.textContent = `${entradaConvertida} é zero!`
        }
        else if  (entradaConvertida % 2 === 0) {
            saida.textContent = `${entradaConvertida} é par!`;
        } else {
            saida.textContent = `${entradaConvertida} é ímpar!`;
        }
    });
}

// Variáveis com HTML
const mensagemBasica = '<p>Contextualizando, essa é uma atividade de desenvolvimento WEB construida para resolver os diversos problemas apresentados no repositório desse projeto, no arquivo <a href="https://github.com/BrendonJoaoDEV/portal_atividade_js/blob/main/enunciado.md">enunciado.md</a>,<br><br>Caso esse site seja útil para você fique a vontade para usá-lo :&#41;<br><br><strong id="aviso">AVISO! Todas as situações tratadas abaixo são metamente fictícias!</strong></p>';

const funcionalidades = `
        <article>
            <h3>WebData Solutions</h3>
            <p>Verificar se um número é par ou ímpar</p>
            <button id="botao-par-impar">Testar funcionalidade</button>
        </article>

        <article>
            <h3>CodeMetrics</h3>
            <p>Verificar dentre três valores qual o maior, o menor ou se todos são iguais</p>
            <button id="botao-maior-menor">Testar funcionalidade</button>
        </article>

        <article>
            <h3>SpeedControl Web</h3>
            <p>Verificar se a velocidade está abaixo ou acima do limite</p>
            <button id="botao-velocidade">Testar funcionalidade</button>
        </article>

        <article>
            <h3>DevSalary Pro</h3>
            <p>Aplicar um aumento salarial com base no valor do salário</p>
            <button id="botao-salario">Testar funcionalidade</button>
        </article>

        <article>
            <h3>ViaWeb Viagens</h3>
            <p>Calcular o preço da passagem de acordo com a distância</p>
            <button id="botao-passagens">Testar funcionalidade</button>
        </article>

        <article>
            <h3>WebYear Checker</h3>
            <p>Verificar se um ano é bissexto ou não</p>
            <button id="botao-ano-bissexto">Testar funcionalidade</button>
        </article>

        <article>
            <h3>TriangulaWeb</h3>
            <p>Verificar se três arestas informadas podme ou não formar um triângulo</p>
            <button id="botao-triangulo">Testar funcionalidade</button>
        </article>

        <article>
            <h3>MathSolver Online</h3>
            <p>Calcular as raízes de uma equação de 2° grau</p>
            <button id="botao-raizes">Testar funcionalidade</button>
        </article>`;

const parImpar = `
            <form>
                <input type="number" id="entrada" placeholder="Digite um número">
                <button type="button" id="botao-verificar">Verificar</button>
            </form>
            <p id="saida"></p>
            <button id="botao-voltar">Voltar</button>`;