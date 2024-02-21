"use strict";
let padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function validarEmail(email) {
    if (!padraoEmail.test(email)) {
        return false;
    }
    return true;
}
console.log(validarEmail("Olá"));
console.log(validarEmail("eduardofrancisc99@gmail.com"));
console.log(validarEmail("5e2c5b659557f1@crankymonkey.info"));
console.log(validarEmail("7d556a65955806@cashbenties.com"));
