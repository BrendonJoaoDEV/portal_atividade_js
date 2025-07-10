import { adicionarEventoBotaoSecundario } from "../utils/utils.js";
import { paginaInicial } from '../main.js';

export function aumentarSalario () {
    adicionarEventoBotaoSecundario('botao-verificar', function () {
        const salario = document.getElementById('entrada').value;
        const resultado = document.getElementById('saida');

        let salarioConvertido = parseInt(salario);

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