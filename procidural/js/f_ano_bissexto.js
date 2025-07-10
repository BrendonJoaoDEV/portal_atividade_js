document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnVerificar').addEventListener('click', function () {
        const ano = document.getElementById('entrada').value;
        const resultado = document.getElementById('saida');

        const anoConvertido = parseInt(ano);

        if ((anoConvertido % 400 === 0) || ((anoConvertido % 4 === 0) && (anoConvertido % 100 != 0))) {
            resultado.innerHTML = `${anoConvertido} é um ano bissexto!`;
        } else {
            resultado.innerHTML = `${anoConvertido} não é um ano bissexto!`
        }
    })
})