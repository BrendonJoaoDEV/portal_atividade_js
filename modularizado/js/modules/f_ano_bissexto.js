import { adicionarEventoBotaoSecundario } from "../utils/utils.js";
import { paginaInicial } from '../main.js';

export function verificarAnoBissexto () {
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