let matrizDe10 = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
]

/* function sumatoriaPrimerYUltimaColumna(arr) {
    let res = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j+= arr[i].length -1) {
            res += arr[i][j]
        }  
    }
    return res
}

console.log(sumatoriaPrimerYUltimaColumna(matrizDe10)) 


let matriz10por10 = generarMatriz10por10(5, 5)  */

function generadorDeMatrices(lado, maximo) {
    let = matrizNueva = []
    for (let i = 0; i < lado; i++) {
        matrizNueva.push([])
        for (let j = 1; j <= lado; j++) {
            let num = Math.floor(Math.random() * maximo)
            matrizNueva[i].push(num)
        } 
    }
    return matrizNueva
}

let matriz = generadorDeMatrices(10, 50)
console.table(matriz)



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

console.table(getRandomInt(10, 15));


/* function sumatoriaQuintaYSextaFila(arr) {
    let res = 0
    for (let i = 4; i <= 5; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            res += arr[i][j]  
        }
    }
    return res
}

console.log(sumatoriaQuintaYSextaFila(matrizDe10)); */