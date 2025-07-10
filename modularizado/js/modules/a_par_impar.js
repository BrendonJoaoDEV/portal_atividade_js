import { adicionarEventoBotaoSecundario } from "../utils/utils.js";
import { paginaInicial } from '../main.js';

export function verificarParImpar () {
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