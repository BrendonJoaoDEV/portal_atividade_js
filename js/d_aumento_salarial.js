document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnCalcular').addEventListener('click', function () {
        const salario = document.getElementById('entrada').value;
        const resultado = document.getElementById('saida');

        salarioConvertido = parseInt(salario);

        if (salarioConvertido <= 0) {
            resultado.innerHTML = `O salário informado é inválido, por favor digite um salário maior que R$00,00`;
        } else if (salarioConvertido > 1500) {
            let reajuste = salarioConvertido * (5/100);
            let salarioReajustado = salario + reajuste;
            resultado.innerHTML = `Salário anterior: R$${salarioConvertido}<br>Reajuste: R$${reajuste}<br>Salário reajustado: R$${salario_reajustado}`;
        } else if (salarioConvertido < 1000) {
            let reajuste = salarioConvertido * (10/100);
            let salarioReajustado = salarioConvertido + reajuste;
            resultado.innerHTML = `Salário anterior: R$${salarioConvertido}<br>Reajuste: R$${reajuste}<br>Salário reajustado: R$${salario_reajustado}`;
        } else {
            let reajuste = 0
            let salarioReajustado = salarioConvertido + reajuste
            resultado.innerHTML = `Salário anterior: R$${salarioConvertido}<br>Reajuste: R$${reajuste}<br>Salário reajustado: R$${salario_reajustado}<br>OBS: Seu salário não sofreu reajuste!`;
        }
    })
})