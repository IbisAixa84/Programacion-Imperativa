// CONDICIONALES

// Crear una funcion que dado el numero ingresado por parametro, si ese numero es mayor de 500, se debe calcular y mostrar en pantalla el 18% de este

function calcularPorcentaje(num) {
    if (num > 500) {
        return num * 0.18;
    } else {
        return num
    }
}

console.log(calcularPorcentaje(550));


function calculo(num) {
    let resultado = 0
    if (num > 500) {
        resultado = num * 0.18
    } else if (num <= 500 && num >= 250) {
        resultado = num * 0.15
    } else {
        resultado = num
    }

    return resultado
}

console.log(calculo(550))

