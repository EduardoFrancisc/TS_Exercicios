"use strict";
let resultado = 1;
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        resultado = 1;
    }
    for (var i = 1; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}
calcularFatorial(5);
