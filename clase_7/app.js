// IF TERNARIO / Switch

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



/*  Ejercicio 1: Fin de semana
    El objetivo de este ejercicio es imprimir en consola un texto que irá variando según el día que contenga la variable dia. Para esto, ya presentamos un código hecho con if/else que tendremos que modificar y convertirlo a un switch, manteniendo el mismo resultado. 
    Los conceptos para resolver el ejercicio se encuentran en los videos y material complementario.
*/

// this file is read only, you cannot write it
let dia = 'jueves'
function finDeSemana (dia) {	
	switch (dia) {
		case 'viernes':
 		console.log('buen finde');
 		break;
		case 'lunes':
 		console.log('buena semana');
 		break;
	default:
 	console.log('buen dia');
 }
}

console.log(finDeSemana (dia));


/* 
    Ejercicio 2: Tengo clases
    El objetivo de este ejercicio es imprimir en pantalla un texto que estará condicionado de la siguiente manera. Utilizando switch deberemos evaluar si la variable "día" es lunes, miércoles o viernes; y, en ese caso, debe imprimir el texto "tenés clases". Para cualquier otro caso debe imprimir "no tenés clases". 
    Recordemos que el switch() nos permite agrupar casos y que cada caso necesita un break.
*/

// this file is read only, you cannot write it
function tengoClases(dia) {
    switch (dia) {
    case 'lunes':
    console.log("tenés clases");
    break;
    case 'miércoles':
    console.log("tenés clases");
    break;
    case 'viernes':
    console.log("tenés clases");
    break;
    default:
    console.log("no tenés clases");
    }
}

console.log(tengoClases(dia));
