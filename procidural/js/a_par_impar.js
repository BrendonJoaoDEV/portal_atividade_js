document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnVerificar').addEventListener('click', function () {
        const entrada = document.getElementById('entrada');
        const saida = document.getElementById('saida');
        
        if (!isNaN(entrada.value)) {
            saida.textContent = verificarParImpar(entrada);
        } else {saida.textContent = `${entrada.value} não é um número!`}
    });
});

function verificarParImpar (entrada) {
        const entradaConvertida = parseInt(entrada.value);

        let texto_resultado = '';

        if (entradaConvertida === 0) {
            return texto_resultado = `${entradaConvertida} é zero!`
        }
        else if  (entradaConvertida % 2 === 0) {
            return texto_resultado = `${entradaConvertida} é par!`;
        } else {
            return texto_resultado = `${entradaConvertida} é ímpar!`;
        }
    }