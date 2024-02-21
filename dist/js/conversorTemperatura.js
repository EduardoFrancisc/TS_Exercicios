"use strict";
function converterTemperatura(valor, tipo) {
    if (tipo === "Celsius") {
        return (valor * 1.8) + 32;
    }
    return (valor - 32) / 1.8;
}
console.log("Celsius para Fahrenheit: " + converterTemperatura(30, "Celsius"));
console.log("Fahrenheit para Celsius: " + converterTemperatura(86, "Fahrenheit"));
