const prompt = require('prompt-sync')()

// BUCLES Y REPETICIONES

/* 1) Crear una función que pida un valor por parámetro y muestre los 10
números siguientes.
2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.
3) Escribir un programa que muestre la sumatoria de todos los números
entre el 0 y el 100
4) Dado un número entero positivo, mostrar su factorial. El factorial de
un número se obtiene multiplicando todos los números enteros
positivos que hay entre el 1 y ese número.
5) Crear una función que muestre todos los números de la secuencia de
fibonacci hasta el valor ingresado por parámetro. */


const mostrar10Numeros = (nInicial) => {
    for (let i = nInicial; i <= 100; i += 10) {
        console.log(i)
    }
}

mostrar10Numeros(2)

console.log('***************')

const imprimirDel5al20 = () => {
    for (let i = 5; i <= 20; i += 3) {
        console.log(i)
    }
}

imprimirDel5al20(1)

console.log('***************')

const factorial = (nInicial) => {
    let factorial = 1
    for (let i = nInicial; i > 1; i--) {
        factorial *= i
    }
    return factorial
}

console.log(factorial(5))

console.log('***************')

function fibonacci(limite) {
    let a = 0
    let b = 1
    let c
    console.log(a)
    console.log(b)

    for (let i = 2; i < limite; i++) {
        c = a + b
        a = b
        b = c
        console.log(c)
    }
}
  
fibonacci(10)