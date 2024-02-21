//Crie uma função que recebe um array de números e o ordena em ordem crescente.
function ordenarNumeros(numeros: number[]): number[] {
    return numeros.sort((a, b) => a - b);
}

let numeros = [3,5,6,9,8,7,4,5,8]
let numeros1 = [2,5,6,8,4,7,8,9,6]
let numeros2 = [0,1,3,4,5,9,8,7,4]

console.log(ordenarNumeros(numeros))
console.log(ordenarNumeros(numeros1))
console.log(ordenarNumeros(numeros2))