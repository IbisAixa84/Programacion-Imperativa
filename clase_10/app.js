//  STRINGS y ARRAYS: Trabajando con colecciones

/* let array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(array[0][1]) */


// Ejercicio de promedio
/* - Crear una function
- Ingresar parametros/satisfies
- Conocer o contar la cantidad de elementos
- Recorrer el arreglo / los elementos
- Realizar la suma de los elementos
- Dividir el total por la cantidad de elementos
- Devolver el promedio */

let notas1 = [10, 5, 3, 9, 4, 8, 7, 3]
let notas2 = [5, 9, 3, 4, 7]

const promedioDeNotas = (arrNotas) => {
    let sumatoria = 0
    let largo = arrNotas.length
    for (let i = 0; i < largo; i++) {
        sumatoria += arrNotas[i]
    }
    let promedio = sumatoria / largo
    return promedio
}

let promedioNotas1 = promedioDeNotas(notas1)
let promedioNotas2 = promedioDeNotas(notas2)

console.log('Promedio de notas1', promedioNotas1)
console.log('Promedio de notas2', promedioNotas2)



/* ARRAYS
● miArray.length:
○ Devuelve la cantidad de elementos del array.
● miArray.push(elemento1, elemento2, ...., elementox):
○ Modifica miArray agregando elemento1, elemento2, ..., elementox al final de
  miArray y devuelve la nueva cantidad de elementos de miArray.

● miArray.pop():
○ Modifica miArray eliminando el último elemento y devuelve el elemento
  eliminado.
● miArray.shift():
○ Modifica miArray eliminando el primer elemento y devuelve el elemento
  eliminado.

● miArray.unshift(elemento1, elemento2, ..., elementox):
○ Modifica miArray agregando elemento1, elemento2, ..., elementox al
  principio de miArray y devuelve la nueva cantidad de elementos de miArray.

● miArray.join():
○ Junta los elementos de miArray y devuelve todo en un string unidos por “,”.
● miArray.join(divisorDeElementos):
○ Junta los elementos de miArray y devuelve todo en un string unidos por el
  texto divisorDeElementos. Por ejemplo: [“A”, “B”].join(“/”) devolverá “A/B”.

● miArray.indexOf(elemento):
○ Busca al elemento en miArray. Si existe, devuelve la primera posición donde
  lo encuentra. Si no, devuelve -1.
● miArray.lastIndexOf(elemento):
○ Busca al elemento en miArray empezando desde atrás (desde el último
  elemento). Si existe devuelve la posición de la primera vez que lo encuentra
  contando desde atrás. Si no, devuelve -1. Por ejemplo: [“a”, “b”, “c”,
  “b”].lastIndexOf(“b”) devuelve 3 porque empezó a buscar desde atrás y la
  primera vez que lo encontró es en la última posición.

● miArray.includes(elemento):
○ Busca al elemento en miArray. Si existe, devuelve true. Si no, false. */