//ALGORITMOS DE ITERACION Y TOMA DE DECISIONES

let matrix = [
    [5, 2, 8],
    [6, 3, 3],
    [3, 8, 7]
]

console.log(matrix)
console.log(matrix[0])
console.log(matrix[0][0])


/* let matriz = []
let interno1 = [10, 20, 30]
let interno2 = [30, 40, 50] */

/* matriz.push(interno1, interno2)
console.log(matriz) */


//Matriz con el doble for

for (let i = 0; i < matrix.length; i++) {
    console.log(`fila numero: ${i}`)
   for (let j = 0; j < matrix[i].length; j++) {
    //console.log(matrix[i][j])---> FILA
    //console.log(matrix[j][i])---> COLUMNA
   }
}