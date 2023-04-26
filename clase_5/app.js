const prompt = require('prompt-sync')();

//let nombre = prompt('Ingresa tu nombre: ')

//let edad = Number(prompt('Ingresa tu edad: '))

// //console.log(edad);

// const suma = (num1, num2) => num1 + num2

// const resta = function (num1, num2) { 
//     return num1 - num2  
// }

// //Funsion declarada
// function multiplicar (num1, num2) {
//     return num1 * num2
// }

let nombre = 'Ibis'
function saludar() {
    let nombre = 'Pablo'
    return `Hola ${nombre}!!`
}
// console.log('primer log', nombre);
// console.log('segundo log', saludar());

// function perimetroDeTrianguloEquilatero(lado) {
//     return lado * 3;
// }
// let resultado = perimetroDeTrianguloEquilatero(5)
// console.log(resultado);


/* Funciones simples
1. Crear una función que convierta pulgadas en centímetros.
Recibe por parámetro pulgadas y retorna su equivalente en centímetros.*/

function convertirPuldaEnCm(pulgada) {
    return pulgada * 2.64 + " cm"
    
}

console.log(convertirPuldaEnCm(20));


/*2. Crear una función que recibe un string y lo convierte en una URL.
Ej: “pepito” es devuelto como “http://www.pepito.com” */

let otroNombre = "function"

function convertirString(palabra) {
    return `http://www.${palabra}.com`
}

//console.log(convertirString(pepe))


/*3. Crear una función que recibe un string y devuelve la misma frase pero con
admiración.*/

function imprimirFrase(strings) {
    return `¡${strings}!`
}

console.log(imprimirFrase("Hola mi ciela"))


/*4. Crear una función que calcule la edad de los perros, considerando que 1 año
para nosotros son 7 de ellos.*/

function calcularEdadCanina(edad) {
    return edad * 7
}

console.log(calcularEdadCanina(2));


/*5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
sueldo mensual como parámetro.
PD: considerá que tu mes de trabajo tiene 40 horas. */

function calcularHoraLaboral(sueldo) {
    return sueldo / 40
}

console.log(calcularHoraLaboral(1000))

