/**
 * Escribir una función que
 *  reciba un array de elementos
 * e indique si se encuentran ordenados
 *  de menor a mayor o no.
 *
 * La función debe retornar un booleano: true si el array esta ordenado, false, si no.
 */

let pruebaA = [4, 3, 1, 7, 9, 0, 4, 2];
let pruebaB = [1, 2, 3, 4, 5, 6, 7, 8];

// Comprueba tu función con los 2 arrays en dos llamadas independientes


/**
 * Escribir una función que
 *  reciba un array con nombres,
 *  y para cada nombre imprima el
 *  mensaje:
 *  Estimado (nombre) , vote por mí.
 */

let nombres = ["Lucas", "Martin", "Lucrecia", "Gabriela", "Mina", "Javier"];


/**
 * Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario de la siguiente forma : (suponiendo que indica 6). 
666666 
55555 
4444 
333 
22 

 */


/**
 * Teniendo 3 arrays:
fila1 = [4,9,2]
fila2 = [3,5,7]
fila3 = [8,1,6]
Cargarlos en una matriz y luego,
hacer la suma de los valores horizontales de cada fila, los verticales de cada columna y las 2 diagonales, e imprimirlas por consola.

 */

fila1 = [4,9,2]
fila2 = [3,5,7]
fila3 = [8,1,6]

let matrizDe3 = []
matrizDe3.push(fila1, fila2, fila3);
console.table(matrizDe3)

function sumarFila(matriz) {
   for (let i = 0; i < matriz.length; i++) {
     let sumatoria = 0
     for (let j = 0; j < matriz[i].length; j++) {
        sumatoria += matriz[i][j]
     }
     console.log((sumatoria));
    } 
}

sumarFila(matrizDe3)


//Imprimir la multiplicacion  de cada columna

function imprimirMultiplicacion(matriz) {
    for (let i = 0; i < matriz.length; i++) {
      let producto = 1
      for (let j = 0; j < matriz[i].length; j++) {
        producto *= matriz[j][i]
      }  
      if (producto % 2 === 0) {
        console.log(producto);
      }
    }
}

imprimirMultiplicacion(matrizDe3)