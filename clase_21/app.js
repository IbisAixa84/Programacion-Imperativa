/**
 * Crear una función que imprima todos
 * los dígitos decimales, del 0 al 9,
 * usando un ciclo For.
 * 
 * 0
 * 0.1
 * 0.2
 * ...
 * 8.9
 * 9
 */

/* function mostrarDecimales() {
    for (let i = 0; i <= 9; i++) {
        console.log(i.toFixed(1));
    }
  }
  
invoca tu funcion aqui
mostrarDecimales() */


  /* function mostrarDecimales() {
    for (let i = 0; i < 9; i++) {
       for (let j = 0; j <= 9; j++) {
        console.log(`${i}.${j}`);
       } 
    }
  }
  
  // invoca tu funcion aqui
  mostrarDecimales() */


  function mostrarDecimales() {
    for (let i = 0; i <= 9; i++) {
       for (let j = 0; j <= 9; j++) {
        if (i === 9 && j === 1) 
        return null
        console.log(`${i}.${j}`)
       } 
    }
  }
  
  // invoca tu funcion aqui
  mostrarDecimales()


/*Crear una función que imprima los números entre el 5 y el 20, saltando de
tres en tres.
*/

function imprimirDeTres(min, max) {
    for (let i = min; i <= max; i = i + 3) {
      console.log(i);  
    }
}

imprimirDeTres(5, 20)
imprimirDeTres(10, 110)


/*Crear una función que imprima la sumatoria de todos los números entre el
0 y el 100.
*/

let imprimirSumatoria = (min, max) => {
    let sumatoria = 0
    for (let i = min; i <= max; i++) {
        sumatoria += i  
    }
    return sumatoria
}

console.log(imprimirSumatoria(0, 100));


/*Crear una función que reciba un string y luego imprimir la cantidad de
vocales que se encuentran en dicha frase.
*/

const cantidadDeVocales = function(str) {
    let strLower = str.toLowerCase()
    let vocales = ["a", "e", "i", "o", "u"]
    let cantVocales = 0
    for (let i = 0; i < strLower.length; i++) {
      if (vocales.includes(strLower[i])) {
        cantVocales++
      } 
    }
    return cantVocales
}

console.log(cantidadDeVocales("Programacion Imperativa"));
