function esPar(num) {
    let resultado
    if (num % 2 === 0) {
        return true
    } else {
        return false
    }
    return resultado
}

//console.log(esPar(1));


// Crear una funcion puedeSubir()

function canRun(height, company) {
    
    if (height >= 1.4 && height < 2) {
        return true
    } else if (height < 1.4 && height >= 1.2 && company) {
        return true 
    } else {
        return false
    }
}

console.log(canRun(1.5, true));
console.log(canRun(1.5, false));
console.log(canRun(2, false));
console.log(canRun(2.1, true));
console.log(canRun(1.3, true));
console.log(canRun(1.3, false));
console.log(canRun(1.1, false));
console.log(canRun(1.1, true));

let num = 15 % 2 === 0 ? 15 : 0   // despues del signo de pregunta '15' pasa si es verdadero , '0' si nsi no lo es



