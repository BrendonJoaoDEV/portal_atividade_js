import { adicionarEventoBotaoSecundario } from "../utils/utils.js";
import { paginaInicial } from '../main.js';

export function calcularRaizesEquacaoSegundoGrau () {
    adicionarEventoBotaoSecundario('botao-verificar', function () {
        const entrada1 = document.getElementById('entrada1');
        const entrada2 = document.getElementById('entrada2');
        const entrada3 = document.getElementById('entrada3');
        const resultado = document.getElementById('saida');

        let a = entrada1.value;
        let b = entrada2.value;
        let c = entrada3.value;

        if ((a == parseInt(a)) && (b == parseInt(b)) && (c == parseInt(c))) {
            a = parseInt(a);
            b = parseInt(b);
            c = parseInt(c);

            const bhaskara = b**2 -4 * a * c;

            const x1 = (-b + bhaskara**0.5) / (2 * a);
            const x2 = (-b - bhaskara**0.5) / (2 * a);

            resultado.innerHTML = `
            <h3>x'=${x1} x"=${x2}</h3><br><br>

            <strong>EXPLICAÇÃO:</strong><br><br>

            <strong>Fórmulas usadas:</strong><br><br>

            Delta (&Delta;) = b<sup>2</sup> - 4 &times; a &times; c<br><br>

            Bhaskara = x = <sup>- b &plusmn; &radic; &Delta;</sup>&frasl;<sub>2 &times; a</sub><br><br>
            
            <strong>Calcular Delta primeiro:</strong><br><br>

            1. &Delta; = b<sup>2</sup> - 4 &times; a &times; c<br>
            2. &Delta; = ${b}<sup>2</sup> - 4 &times; ${a} &times; ${c}<br>
            3. &Delta; = ${b**2} -4 &times; ${a*c}<br>
            4. &Delta; = ${b**2} ${-4*(a*c)}<br>
            5. &Delta; = ${bhaskara}<br><br>

            1. Cópia da fórmula<br>
            2. Substituição dos valores de A, B e C<br>
            3. Cálculo da potência de B e da multiplicação de A por C<br>
            4. Multiplicação do resultado de A &times; C por -4<br>
            5. Finalização do cálculo<br><br>
            
            <strong>Calcular as raízes da equação:</strong><br><br>
            
            1. x = <sup>- b &plusmn; &radic; &Delta;</sup>&frasl;<sub>2 &times; a</sub><br>
            2. x = <sup>${-b} &plusmn; &radic; ${bhaskara}</sup>&frasl;<sub>2 &times; ${a}</sub><br>
            3. x = <sup>${-b} &plusmn; ${bhaskara**0.5}</sup>&frasl;<sub>${2*a}</sub><br>
            4. x' = <sup>${-b} + ${bhaskara**0.5}</sup>&frasl;<sub>${2*a}</sub><br>
            5. x' = <sup>${-b + bhaskara**0.5}</sup>&frasl;<sub>${2*a}</sub><br>
            6. x' = ${x1}<br>
            7. x" = <sup>${-b} - ${bhaskara**0.5}</sup>&frasl;<sub>${2*a}</sub><br>
            8. x" = <sup>${-b - bhaskara**0.5}</sup>&frasl;<sub>${2*a}</sub><br>
            9. x" = ${x2}<br><br>
            
            1. Cópia da fórmula<br>
            2. Substituição dos valores de A, B e &Delta;<br>
            3. Cálculo da raiz de delta e do dobro de A<br>
            4. Começo do cálculo do x' com a soma de -b + &radic; &Delta;<br>
            5. Formação de uma fração com os resultados já obtidos<br>
            6. Resultado do x'<br>
            7. Começo do cálculo do x" com a subtração de -b - &radic; &Delta;<br>
            8. Formação de uma fração com os resultados já obtidos<br>
            9. Resultado do x"<br>`
            
        } else {
            resultado.innerHTML = `Os valores de A, B e C <strong>devem ser números!</strong>`;
        }
    });

    adicionarEventoBotaoSecundario('botao-voltar', function () {
        return paginaInicial();
    });
}