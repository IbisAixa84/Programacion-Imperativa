const prompt = require('prompt-sync')();

// TRABAJANDO CON FUNCIONES

function squared(b) {
    return b * b;
}

//console.log(squared(5));


function points(doubles, triples) {
    return doubles * 2 + triples * 3;
}

// console.log(points(1, 1))
// console.log(points(7, 5))


const puntaje = (doubles, triples) => doubles * 2 + triples * 3

// console.log(puntaje(1, 1))
// console.log(points(7, 5))


// Escribe una funcion para convertir horas a segundos

// function horas(horas) {
//     return horas * 60 * 60;
// }

// console.log(horas(2));
// console.log(horas(10));
// console.log(horas(24));

const howManySeconds = function (hours) {
    return hours * 3600
}

//console.log(howManySeconds(2));


let vial1 = 'rojo'
let vial2 = 'verde'
let aux = vial1
vial1 = vial2
vial2 = aux

console.log(vial1, vial2)
