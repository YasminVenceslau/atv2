//funcao mul
function calcularMult (a: number, b: number): number {
    const Mult = a * b;
    return Mult;
};
const resultado = calcularMult(5, 6);
console.log(resultado);

//funcao nome
function saudacao(nome: string,): string {
    return `Olá ${nome}`;
};
const digiteNome = "Marcela";
const sauSeuNome = saudacao(digiteNome);
console.log(sauSeuNome);