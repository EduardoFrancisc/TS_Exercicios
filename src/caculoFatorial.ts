//Crie uma função em TypeScript que calcula o fatorial de um número inteiro.

let resultado:number = 1

function calcularFatorial(numero: number): number {
    if (numero === 0 || numero === 1) {resultado = 1}

    for (var i = 1; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

calcularFatorial(5) //O Resultado deve ser 120