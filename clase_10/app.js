// ARRAYS

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