"use strict";
//funcao mul
function calcularMult(a, b) {
    const Mult = a * b;
    return Mult;
}
;
const resultado = calcularMult(5, 6);
console.log(resultado);
//funcao nome
function saudacao(nome) {
    return `Olá ${nome}`;
}
;
const digiteNome = "Marcela";
const sauSeuNome = saudacao(digiteNome);
console.log(sauSeuNome);
