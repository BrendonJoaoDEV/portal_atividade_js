import { adicionarEventoBotaoSecundario } from "../utils/utils.js";
import { paginaInicial } from '../main.js';

export function verificarTriangulo () {
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