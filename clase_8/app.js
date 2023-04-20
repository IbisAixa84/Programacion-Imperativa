// BUCLES Y REPETICIONES / Ciclos: Repetir, repetir...


// Crear una funcion que reciba 5 parametros y retorne el promedio de todos ellos

//const promedioDe5 = () => 


// Formas de acumulacion:
// i++ ====> suma de a 1
// i+= n ====> incrementa de a n  de veces
// i= i + n =====> incrementa de a n de veces (version larga)

// Hacer un codigo que nos muestre los numeros del 0 al 10

const mostrarDel1al10 = () => {
    for (let i = 0; i <= 10; i++) {
        console.log(i)
    }
}

//mostrarDel1al10()

const mostrarNumerosDel10al100 = (nInicial, nFinal) => {
    for (let i = nInicial; i <= nFinal; i++) {
        console.log(i)
    }
}

//mostrarNumerosDel10al100(10, 100)

const mostrarNumerosDe10en10 = (nInicial, nFinal) => {
    for (let i = nInicial; i <= nFinal; i += 10) {
        console.log(i)
    }
}

//mostrarNumerosDe10en10(10, 100)

const mostrarNumerosIncremento = (nInicial, nFinal, nContadorA) => {
    for (let i = nInicial; i <= nFinal; i += nContadorA) {
        console.log(i)
    }
}

mostrarNumerosIncremento(10, 100, 5)
mostrarNumerosIncremento(1, 10, 1)

const mostrarDe10a1 = (nInicial, nFinal, nContadorA) => {
    for (let i = nInicial; i >= nFinal; i -= nContadorA) {
        console.log(i)
    }
}

mostrarDe10a1(10, 1, 1)

// Realizar un ejercicio en el cual se visualicen los numeros primos del 1 al 50

const mostrarNumerosPrimos = () => {
    for (let i = 1; i <= 50; i++) {
        if (i % i === 0 && i % 1 === 0) {
            console.log(i)
        }
    }
}

mostrarNumerosPrimos()




