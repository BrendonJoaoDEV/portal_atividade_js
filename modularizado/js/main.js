import { adicionarEventoBotaoPrincipal } from './utils/utils.js';
import { limparElemento } from './utils/utils.js';
import { carregar } from './utils/utils.js';
import { verificarParImpar } from './modules/a_par_impar.js';
import { encontrarMaiorMenor } from './modules/b_maior_menor_igual.js';
import { monitorarVelocidade } from './modules/c_monitoramento_velocidade.js';
import { aumentarSalario } from './modules/d_aumento_salarial.js';
import { calcularPassagem } from './modules/e_calculo_passagens.js';
import { verificarAnoBissexto } from './modules/f_ano_bissexto.js';
import { verificarTriangulo } from './modules/g_verificacao_triangulo.js';
import { calcularRaizesEquacaoSegundoGrau } from './modules/h_raizes_segundo_grau.js';
 
document.addEventListener('DOMContentLoaded', function () {paginaInicial()});

export function paginaInicial () {
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

// Variáveis com HTML
const mensagemBasica = `
    <p>Contextualizando, essa é uma atividade de desenvolvimento WEB construida para resolver<br>
    os diversos problemas apresentados no repositório desse projeto, no arquivo 
    <a href="https://github.com/BrendonJoaoDEV/portal_atividade_js/blob/main/enunciado.md">enunciado.md</a>,<br><br>
    Caso esse site seja útil para você fique a vontade para usá-lo :&#41;<br><br>
    <strong id="aviso">AVISO! Todas as situações tratadas abaixo são meramente fictícias!</strong></p>`;

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