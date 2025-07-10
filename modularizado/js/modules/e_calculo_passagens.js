import { adicionarEventoBotaoSecundario } from "../utils/utils.js";
import { paginaInicial } from '../main.js';

export function calcularPassagem () {
    adicionarEventoBotaoSecundario('botao-verificar', function () {
        const distancia = document.getElementById('entrada').value;
        const resultado = document.getElementById('saida');

        let distanciaConvertida = parseInt(distancia);

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