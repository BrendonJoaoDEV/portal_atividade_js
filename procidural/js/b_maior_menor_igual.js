document.addEventListener('DOMContentLoaded', function () {
    const entrada1 = document.getElementById('entrada1');
    const entrada2 = document.getElementById('entrada2');
    const entrada3 = document.getElementById('entrada3');
    const resultado = document.getElementById('saida');
    const btnVerificar = document.getElementById('btnVerificar');

    btnVerificar.addEventListener('click', function () {
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
});