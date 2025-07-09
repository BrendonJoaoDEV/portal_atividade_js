document.addEventListener('DOMContentLoaded', function () {paginaInicial()});

// Funções utilitárias
function limparElemento (elemento) {
    return elemento.innerHTML = ``;
}

function carregar (elementoCarregamento, htmlCarregamento) {
    const novaSecao = document.createElement('section');
    novaSecao.innerHTML = htmlCarregamento;
    elementoCarregamento.appendChild(novaSecao);
}

function paginaInicial () {
    const main = document.querySelector('main');
    limparElemento(main);
    carregar(main, mensagemBasica);
    carregar(main, funcionalidades);

    adicionarEventoBotaoPrincipal(main, html[0], 'botao-par-impar', verificarParImpar);
    adicionarEventoBotaoPrincipal(main, html[1], 'botao-maior-menor', encontrarMaiorMenor);
    adicionarEventoBotaoPrincipal(main, html[2], 'botao-velocidade', monitorarVelocidade);
    // adicionarEventoBotaoPrincipal(main, html[3], 'botao-salario', aumentarSalario);
    // adicionarEventoBotaoPrincipal(main, html[4], 'botao-passagens', calcularPassagem);
    // adicionarEventoBotaoPrincipal(main, html[5], 'botao-ano-bissexto', verificarAnoBissexto);
    // adicionarEventoBotaoPrincipal(main, html[6], 'botao-triangulo', verificarTriangulo);
    // adicionarEventoBotaoPrincipal(main, html[7], 'botao-raizes', calcularRaizesEquacaoSegundoGrau);
}

function adicionarEventoBotaoPrincipal (elementoPai, htmlCarregar, botao, funcionalidade) {
    document.getElementById(botao).addEventListener('click', function () {
        limparElemento(elementoPai);
        carregar(elementoPai, htmlCarregar);
        funcionalidade();
    });
}

function adicionarEventoBotaoSecundario (botao, funcionalidade) {
    document.getElementById(botao).addEventListener('click', funcionalidade);
}

// Variáveis com HTML
const mensagemBasica = '<p>Contextualizando, essa é uma atividade de desenvolvimento WEB construida para resolver os diversos problemas apresentados no repositório desse projeto, no arquivo <a href="https://github.com/BrendonJoaoDEV/portal_atividade_js/blob/main/enunciado.md">enunciado.md</a>,<br><br>Caso esse site seja útil para você fique a vontade para usá-lo :&#41;<br><br><strong id="aviso">AVISO! Todas as situações tratadas abaixo são metamente fictícias!</strong></p>';

const funcionalidades = `
        <article>
            <h3>WebData Solutions</h3>
            <p>Verificar se um número é par ou ímpar</p>
            <button type="button" id="botao-par-impar">Testar funcionalidade</button>
        </article>

        <article>
            <h3>CodeMetrics</h3>
            <p>Verificar dentre três valores qual o maior, o menor ou se todos são iguais</p>
            <button type="button" id="botao-maior-menor">Testar funcionalidade</button>
        </article>

        <article>
            <h3>SpeedControl Web</h3>
            <p>Verificar se a velocidade está abaixo ou acima do limite</p>
            <button type="button" id="botao-velocidade">Testar funcionalidade</button>
        </article>

        <article>
            <h3>DevSalary Pro</h3>
            <p>Aplicar um aumento salarial com base no valor do salário</p>
            <button type="button" id="botao-salario">Testar funcionalidade</button>
        </article>

        <article>
            <h3>ViaWeb Viagens</h3>
            <p>Calcular o preço da passagem de acordo com a distância</p>
            <button type="button" id="botao-passagens">Testar funcionalidade</button>
        </article>

        <article>
            <h3>WebYear Checker</h3>
            <p>Verificar se um ano é bissexto ou não</p>
            <button type="button" id="botao-ano-bissexto">Testar funcionalidade</button>
        </article>

        <article>
            <h3>TriangulaWeb</h3>
            <p>Verificar se três arestas informadas podme ou não formar um triângulo</p>
            <button type="button" id="botao-triangulo">Testar funcionalidade</button>
        </article>

        <article>
            <h3>MathSolver Online</h3>
            <p>Calcular as raízes de uma equação de 2° grau</p>
            <button type="button" id="botao-raizes">Testar funcionalidade</button>
        </article>`;

const html = [
    `<form>
        <input type="number" id="entrada" placeholder="Digite um número">
        <button type="button" id="botao-verificar">Verificar</button>
    </form>
    <p id="saida"></p>
    <button type="button" id="botao-voltar">Voltar</button>`,

    `<form>
        <input type="number" id="entrada1" placeholder="Valor 1">
        <input type="number" id="entrada2" placeholder="Valor 2">
        <input type="number" id="entrada3" placeholder="Valor 3">
        <button type="button" id="botao-verificar">Verificar</button>
    </form>
    <p id="saida"></p>
    <button type="button" id="botao-voltar">Voltar</button>`,

    `<form>
        <input type="number" id="entrada" placeholder="Digite a velocidade">
        <button type="button" id="botao-verificar">Verificar velocidade</button>
    </form>
    <p id="saida"></p>
    <button type="button" id="botao-voltar">Voltar</button>`,

    `<form>
        <input type="number" id="entrada" placeholder="Digite o valor do salário">
        <button type="button" id="botao-verificar">Verificar aumento</button>
    </form>
    <p id="saida"></p>
    <button type="button" id="botao-voltar">Voltar</button>`,

    `<form>
        <input type="number" id="entrada" placeholder="Digite a distância da viagem">
        <button type="button" id="botao-verificar">Calcular passagem</button>
    </form>
    <p id="saida"></p>
    <button type="button" id="botao-voltar">Voltar</button>`,

    `<form>
        <input type="number" id="entrada" placeholder="Digite o ano">
        <button type="button" id="botao-verificar">Verificar se é bissexto</button>
    </form>
    <p id="saida"></p>
    <button type="button" id="botao-voltar">Voltar</button>`,

    `<form>
        <input type="number" id="entrada1" placeholder="Aresta 1">
        <input type="number" id="entrada2" placeholder="Aresta 2">
        <input type="number" id="entrada3" placeholder="Aresta 3">
        <button type="button" id="botao-verificar">Verificar</button>
    </form>
    <p id="saida"></p>
    <button type="button" id="botao-voltar">Voltar</button>`,

    `<form>
        <input type="number" id="entrada1" placeholder="Valor de A">
        <input type="number" id="entrada2" placeholder="Valor de B">
        <input type="number" id="entrada3" placeholder="Valor de C">
        <button type="button" id="botao-verificar">Calcular raízes</button>
    </form>
    <p id="saida"></p>
    <button type="button" id="botao-voltar">Voltar</button>`
];

// Ao finalizar a função, limpar main e carregar as funcionalidades
function verificarParImpar () {
    adicionarEventoBotaoSecundario('botao-verificar', function () {
        const entrada = document.getElementById('entrada');
        const saida = document.getElementById('saida');
        const entradaConvertida = parseInt(entrada.value);

        if (entradaConvertida === 0) {
            saida.textContent = `${entradaConvertida} é zero!`;
        }
        else if  (entradaConvertida % 2 === 0) {
            saida.textContent = `${entradaConvertida} é par!`;
        } else {
            saida.textContent = `${entradaConvertida} é ímpar!`;
        }
    });

    adicionarEventoBotaoSecundario('botao-voltar', function () {
        return paginaInicial();
    });
}

function encontrarMaiorMenor () {
    adicionarEventoBotaoSecundario('botao-verificar', function () {
        const entrada1 = document.getElementById('entrada1');
        const entrada2 = document.getElementById('entrada2');
        const entrada3 = document.getElementById('entrada3');
        const resultado = document.getElementById('saida');

        let valor1 = entrada1.value;
        let valor2 = entrada2.value;
        let valor3 = entrada3.value;

        if ((valor1 == parseInt(valor1)) && (valor2 == parseInt(valor2)) && (valor3 == parseInt(valor3))) {
            valor1 = parseInt(valor1);
            valor2 = parseInt(valor2);
            valor3 = parseInt(valor3);

            if ((valor1 === valor2) && (valor1 === valor3) && (valor2 === valor3)) {
                resultado.innerHTML = `Os valores ${valor1}, ${valor2} e ${valor3} <strong>são iguais!</strong>`;
            } else {
                const maior = Math.max(valor1, valor2, valor3);
                const menor = Math.min(valor1, valor2, valor3);
                resultado.innerHTML = `Valores: ${valor1}, ${valor2}, ${valor3}<br>Maior: ${maior}<br>Menor: ${menor}`;
            }
        }
    });

    adicionarEventoBotaoSecundario('botao-voltar', function () {
        return paginaInicial();
    });
}

function monitorarVelocidade () {
    adicionarEventoBotaoSecundario('botao-verificar', function () {
        const velocidade = document.getElementById('entrada').value;
        const resultado = document.getElementById('saida');

        if (!isNaN(parseInt(velocidade))) {
            if (velocidade > 60) {
                resultado.innerHTML = `${velocidade} km/h está acima do limite! <strong>Atenção!</strong>`;
            } else {
                resultado.innerHTML = `${velocidade} km/h está dentro do limite! <strong>Parábens</strong>`;
            }
        } else {
            resultado.innerHTML = `<strong>${velocidade} é um valor inválido!</strong>`
        }
    })

    adicionarEventoBotaoSecundario('botao-voltar', function () {
        return paginaInicial();
    });
}