// Quando a página é carregada chama a função paginaInicial
document.addEventListener('DOMContentLoaded', function () {paginaInicial()});

// Definição da função paginaInicial
function paginaInicial () {
    // Pega o elemento main da página HTML
    const main = document.querySelector('main');
    // Limpa o conteúdo desse elemento com a funcao limparElemento
    limparElemento(main);
    // Carrega a mensagem sobre o propósito do site
    carregar(main, mensagemBasica);
    // Carrega os cards das funcionalidades
    carregar(main, funcionalidades);

    // Adiciona os eventos aos botões de cada card
    adicionarEventoBotaoPrincipal(main, html[0], 'botao-par-impar', verificarParImpar);
    adicionarEventoBotaoPrincipal(main, html[1], 'botao-maior-menor', encontrarMaiorMenor);
    adicionarEventoBotaoPrincipal(main, html[2], 'botao-velocidade', monitorarVelocidade);
    adicionarEventoBotaoPrincipal(main, html[3], 'botao-salario', aumentarSalario);
    adicionarEventoBotaoPrincipal(main, html[4], 'botao-passagens', calcularPassagem);
    adicionarEventoBotaoPrincipal(main, html[5], 'botao-ano-bissexto', verificarAnoBissexto);
    adicionarEventoBotaoPrincipal(main, html[6], 'botao-triangulo', verificarTriangulo);
    adicionarEventoBotaoPrincipal(main, html[7], 'botao-raizes', calcularRaizesEquacaoSegundoGrau);
}

// Funções utilitárias
// Função limparElemento: 
// Recebe um elemento HTML 
// Define a propriedade innerHTML dele como ``
function limparElemento (elemento) {
    return elemento.innerHTML = ``;
}

// Função carregar: 
// Recebe um elemento HTML e o conteúdo que deve ser carregado dentro dele em HTML
// Cria um elemento HTML section
// Define o conteúdo na propriedade innerHTML dessa section
// Adiciona essa section como filha do elemento de carregamento
function carregar (elementoCarregamento, htmlCarregamento) {
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
function adicionarEventoBotaoPrincipal (elementoPai, htmlCarregar, botao, funcionalidade) {
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
function adicionarEventoBotaoSecundario (botao, funcionalidade) {
    document.getElementById(botao).addEventListener('click', funcionalidade);
}

// Variáveis com HTML
const mensagemBasica = `
    <p>Contextualizando, essa é uma atividade de desenvolvimento WEB construida para resolver
     os diversos problemas apresentados no repositório desse projeto, no arquivo 
     <a href="https://github.com/BrendonJoaoDEV/portal_atividade_js/blob/main/enunciado.md">enunciado.md</a>,
     <br><br>Caso esse site seja útil para você fique a vontade para usá-lo :&#41;<br><br>
     <strong id="aviso">AVISO! Todas as situações tratadas abaixo são metamente fictícias!</strong></p>`;

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
            resultado.innerHTML = `<strong>${velocidade} é um valor inválido!</strong>`;
        }
    });

    adicionarEventoBotaoSecundario('botao-voltar', function () {
        return paginaInicial();
    });
}

function aumentarSalario () {
    adicionarEventoBotaoSecundario('botao-verificar', function () {
        const salario = document.getElementById('entrada').value;
        const resultado = document.getElementById('saida');

        salarioConvertido = parseInt(salario);

        if (salarioConvertido <= 0) {
            resultado.innerHTML = `O salário informado é inválido, por favor digite um salário maior que R$00,00`;
        } else if (salarioConvertido > 1500) {
            let reajuste = salarioConvertido * (5/100);
            let salarioReajustado = salarioConvertido + reajuste;
            resultado.innerHTML = `Salário anterior: R$${salarioConvertido}<br>Reajuste: R$${reajuste}<br>Salário reajustado: R$${salarioReajustado}`;
        } else if (salarioConvertido < 1000) {
            let reajuste = salarioConvertido * (10/100);
            let salarioReajustado = salarioConvertido + reajuste;
            resultado.innerHTML = `Salário anterior: R$${salarioConvertido}<br>Reajuste: R$${reajuste}<br>Salário reajustado: R$${salarioReajustado}`;
        } else {
            let reajuste = 0
            let salarioReajustado = salarioConvertido + reajuste
            resultado.innerHTML = `Salário anterior: R$${salarioConvertido}<br>Reajuste: R$${reajuste}<br>Salário reajustado: R$${salarioReajustado}<br>OBS: Seu salário não sofreu reajuste!`;
        }
    });

    adicionarEventoBotaoSecundario('botao-voltar', function () {
        return paginaInicial();
    });
}

function calcularPassagem () {
    adicionarEventoBotaoSecundario('botao-verificar', function () {
        const distancia = document.getElementById('entrada').value;
        const resultado = document.getElementById('saida');

        distanciaConvertida = parseInt(distancia);

        if (distanciaConvertida <= 0) {
            resultado.innerHTML = `${distanciaConvertida} km é uma distância inválida! <strong>Digite uma distância maior que zero!</strong>`;
        } else if (distanciaConvertida <= 200) {
            let valorPassagem = distanciaConvertida * 0.70;
            resultado.innerHTML = `Distância da viagem: ${distanciaConvertida} km<br>Valor da passagem: R$${valorPassagem}`;
        } else if (distanciaConvertida >= 200) {
            let valorPassagem = distanciaConvertida * 0.40;
            resultado.innerHTML = `Distância da viagem: ${distanciaConvertida} km<br>Valor da passagem: R$${valorPassagem}`;
        }
    });

    adicionarEventoBotaoSecundario('botao-voltar', function () {
        return paginaInicial();
    });
}

function verificarAnoBissexto () {
    adicionarEventoBotaoSecundario('botao-verificar', function () {
        const ano = document.getElementById('entrada').value;
        const resultado = document.getElementById('saida');

        const anoConvertido = parseInt(ano);

        if ((anoConvertido % 400 === 0) || ((anoConvertido % 4 === 0) && (anoConvertido % 100 != 0))) {
            resultado.innerHTML = `${anoConvertido} é um ano bissexto!`;
        } else {
            resultado.innerHTML = `${anoConvertido} não é um ano bissexto!`
        }
    });

    adicionarEventoBotaoSecundario('botao-voltar', function () {
        return paginaInicial();
    });
}

function verificarTriangulo () {
    adicionarEventoBotaoSecundario('botao-verificar', function () {
        const ladoA = document.getElementById('entrada1');
        const ladoB = document.getElementById('entrada2');
        const ladoC = document.getElementById('entrada3');
        const resultado = document.getElementById('saida');

        let valorA = ladoA.value;
        let valorB = ladoB.value;
        let valorC = ladoC.value;

        if (valorA == parseInt(valorA) && (valorB == parseInt(valorB)) && (valorC == parseInt(valorC))) {
            valorA = parseInt(valorA);
            valorB = parseInt(valorB);
            valorC = parseInt(valorC);

            if ((valorA < (valorB + valorC)) && (valorB < valorA + valorC) && (valorC < valorA + valorB)) {
                resultado.innerHTML = `Com as medidas informadas <strong>é possível</strong> formar um triângulo!`;
            } else {
                resultado.innerHTML = `Com as medidas informadas <strong>não é possível</strong> formar um triângulo!`;
            }
        } else {
            resultado.innerHTML = `Todas as medidas devem ser númericas, <strong>por favor insira apenas números!</strong>`;
        }
    });

    adicionarEventoBotaoSecundario('botao-voltar', function () {
        return paginaInicial();
    });
}

function calcularRaizesEquacaoSegundoGrau () {
    adicionarEventoBotaoSecundario('botao-verificar', function () {
        const entrada1 = document.getElementById('entrada1');
        const entrada2 = document.getElementById('entrada2');
        const entrada3 = document.getElementById('entrada3');
        const resultado = document.getElementById('saida');

        let a = entrada1.value;
        let b = entrada2.value;
        let c = entrada3.value;

        if ((a == parseInt(a)) && (b == parseInt(b)) && (c == parseInt(c))) {
            a = parseInt(a);
            b = parseInt(b);
            c = parseInt(c);

            const bhaskara = b**2 -4 * a * c;

            const x1 = (-b + bhaskara**0.5) / (2 * a);
            const x2 = (-b - bhaskara**0.5) / (2 * a);

            resultado.innerHTML = `
            <h3>x'=${x1} x"=${x2}</h3><br><br>

            <strong>EXPLICAÇÃO:</strong><br><br>

            <strong>Fórmulas usadas:</strong><br><br>

            Delta (&Delta;) = b<sup>2</sup> - 4 &times; a &times; c<br><br>

            Bhaskara = x = <sup>- b &plusmn; &radic; &Delta;</sup>&frasl;<sub>2 &times; a</sub><br><br>
            
            <strong>Calcular Delta primeiro:</strong><br><br>

            1. &Delta; = b<sup>2</sup> - 4 &times; a &times; c<br>
            2. &Delta; = ${b}<sup>2</sup> - 4 &times; ${a} &times; ${c}<br>
            3. &Delta; = ${b**2} -4 &times; ${a*c}<br>
            4. &Delta; = ${b**2} ${-4*(a*c)}<br>
            5. &Delta; = ${bhaskara}<br><br>

            1. Cópia da fórmula<br>
            2. Substituição dos valores de A, B e C<br>
            3. Cálculo da potência de B e da multiplicação de A por C<br>
            4. Multiplicação do resultado de A &times; C por -4<br>
            5. Finalização do cálculo<br><br>
            
            <strong>Calcular as raízes da equação:</strong><br><br>
            
            1. x = <sup>- b &plusmn; &radic; &Delta;</sup>&frasl;<sub>2 &times; a</sub><br>
            2. x = <sup>${-b} &plusmn; &radic; ${bhaskara}</sup>&frasl;<sub>2 &times; ${a}</sub><br>
            3. x = <sup>${-b} &plusmn; ${bhaskara**0.5}</sup>&frasl;<sub>${2*a}</sub><br>
            4. x' = <sup>${-b} + ${bhaskara**0.5}</sup>&frasl;<sub>${2*a}</sub><br>
            5. x' = <sup>${-b + bhaskara**0.5}</sup>&frasl;<sub>${2*a}</sub><br>
            6. x' = ${x1}<br>
            7. x" = <sup>${-b} - ${bhaskara**0.5}</sup>&frasl;<sub>${2*a}</sub><br>
            8. x" = <sup>${-b - bhaskara**0.5}</sup>&frasl;<sub>${2*a}</sub><br>
            9. x" = ${x2}<br><br>
            
            1. Cópia da fórmula<br>
            2. Substituição dos valores de A, B e &Delta;<br>
            3. Cálculo da raiz de delta e do dobro de A<br>
            4. Começo do cálculo do x' com a soma de -b + &radic; &Delta;<br>
            5. Formação de uma fração com os resultados já obtidos<br>
            6. Resultado do x'<br>
            7. Começo do cálculo do x" com a subtração de -b - &radic; &Delta;<br>
            8. Formação de uma fração com os resultados já obtidos<br>
            9. Resultado do x"<br>`
            
        } else {
            resultado.innerHTML = `Os valores de A, B e C <strong>devem ser números!</strong>`;
        }
    });

    adicionarEventoBotaoSecundario('botao-voltar', function () {
        return paginaInicial();
    });
}

// Colocar validação nas letras: A, B, C, D, E, F, H

// A: Validar para apenas números

// B: Validar para apenas números

// C: Validar para apenas números positivos

// D: Validar para apenas números positivos

// E: Validar para apenas números positivos

// F: Validar para apenas números 

// H: Validações das regras da equação de segundo grau