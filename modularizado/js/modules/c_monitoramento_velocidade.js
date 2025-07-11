import { adicionarEventoBotaoSecundario } from "../utils/utils.js";
import { paginaInicial } from '../main.js';

export function monitorarVelocidade () {
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