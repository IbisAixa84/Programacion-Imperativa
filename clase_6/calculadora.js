const prompt = require('prompt-sync')()

/* 
    -VARIABLES, ASIGNACION DE VALORES
    -TIPO DE DATOS
    -OPERADORES (ASIGNACION DE MATEMATICOS)
    -FUNCIONES (DECLARADAS, EXPRESADAS) PARAMETROS POR DEFECTO
*/

let numA = Number(prompt('Ingrese su nombre (A): '))
let numB = Number(prompt('Ingrese su apellido (B): '))

// NIVEL I
let sumar = function (a, b) {
    return a + b
}

let restar = function (a, b) {
    return a - b
}

let multiplicar = function (a, b) {
    return a * b
}

let dividir = function (a, b) {
    return a / b
}

console.log('***** NIVEL II *****')

console.log('SUMA (numA, numB)')
console.log(sumar(numA, numB))

console.log('RESTA (numA, numB)')
console.log(restar(numA, numB))

console.log('MULTIPLICACION (numA, numB)')
console.log(multiplicar(numA, numB))

console.log('MULTIPLICACION (numA, 0)')
console.log(multiplicar(numA, 0))

console.log('DIVIDIR (numA, numB)')
console.log(dividir(numA, numB))

console.log('DIVIDIR (numA, 0)')
console.log(dividir(numA, 0))

console.log('**********')

// NIVEL III 

function cuadradoDeUnNumero(n) {
    return multiplicar(n, n)
}

function promedioDeTresNumero(a, b, c) {
    let sumaAux = sumar(a, b)
    return sumar(sumaAux, c) / 3
}

function calcularPorcentaje(numero, porcentaje) {
    return multiplicar(numero, dividir(porcentaje, 100))
}

function generadorDePorcentaje(a, b) {
    let primeraOperacion = multiplicar(a, 100)
    let segundaOperacion = dividir(primeraOperacion, b)
    return segundaOperacion
}

console.log('***** NIVEL III *****')

console.log('CUADRADO DE UN NUMERO')
console.log(cuadradoDeUnNumero(3))

console.log('PROMEDIO DE TRES NUMEROS')
console.log(promedioDeTresNumero(3, 6, 9))

console.log('PORCENTAJE (100, 10)')
console.log(calcularPorcentaje(100, 50) + '%')

console.log('GENERADOR DE PORCENTAJE (30, 500)')
console.log(generadorDePorcentaje(30, 500))

console.log('**********')
