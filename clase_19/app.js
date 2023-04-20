// BUBBLE SORT

let numeros = [6,5,1,2,4,3,8,7]

const letrasMayus = ["Catalina", "Agustina", "Denise", "Estela", "Horacio", "Zulma", "Jose", "Lautaro"]
const letrasMayus1 = ["ana", "Agustina", "anastacia", "Azul", "Alina"]
const letrasMayus2 = ["C", "A", "D", "E", "H", "Z", "J", "L"]
const letras = ["a", "A", "D", "c", "D", "z", "Z", "J", "L"]

console.log(numeros)

let numerosOrdenados = numeros.slice()
console.log("copia con slice", numerosOrdenados)

let numerosOrdenados2 = [...numeros]
console.log("copia con opereitor", numerosOrdenados2);


for (let i = 0; i < numeros.length; i++) {
  for (let j = 0; j < numeros.length; j++) {
    if (numeros[j] > numeros[j + 1]) {
      let temp = numeros[j];
       numeros[j] = numeros[j + 1]
       numeros[j + 1] = temp
    }
  } 
}

//console.log(numeros)

function bubbleSortAsendente(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
             arr[j] = arr[j + 1]
             arr[j + 1] = temp
            }
        }
    }
    return arr
}


function bubbleSortDescendente(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          if (arr[j] < arr[j + 1]) {
            let temp = arr[j];
             arr[j] = arr[j + 1]
             arr[j + 1] = temp
            }
        }
    }
    return arr
}


console.log(bubbleSortAsendente(numeros))
console.log(bubbleSortDescendente(numeros))
console.log(bubbleSortAsendente(letrasMayus))
console.log(bubbleSortDescendente(letrasMayus))
console.log(bubbleSortAsendente(letras))
console.log(bubbleSortDescendente(letras))
console.log(bubbleSortAsendente(letrasMayus2))
console.log(bubbleSortDescendente(letrasMayus2))


function bubbleSortDescendente3(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length -1; j++) {
          if (arr[j].toLowerCase() > arr[j + 1].toLowerCase()) {
            let temp = arr[j];
             arr[j] = arr[j + 1]
             arr[j + 1] = temp
            }
        }
    }
    return arr
}

console.log(bubbleSortDescendente3(letrasMayus1));
