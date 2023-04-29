/* Escribir una función que reciba un array de elementos e indique si se encuentran ordenados de menor a mayor o no.
 La función debe retornar un booleano: true si el array esta ordenado, false, si no. Comprueba tu función con los 2 arrays en dos llamadas independientes*/

/* Puedes escribir una función en JavaScript que reciba un array de elementos y determine si está ordenado de menor a mayor. La función puede comparar cada elemento con su siguiente y verificar si están en orden ascendente. Aquí tienes un ejemplo de cómo puedes hacerlo:*/

function estaOrdenado(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false; // El array no está ordenado de menor a mayor
    }
  }
  return true; // El array está ordenado de menor a mayor
}

let pruebaA = [4, 3, 1, 7, 9, 0, 4, 2]
let pruebaB = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(estaOrdenado(pruebaA)) // Devuelve false
console.log(estaOrdenado(pruebaB)) // Devuelve true

/* La función estaOrdenado() recorre el array y compara cada elemento con el siguiente. Si encuentra un elemento mayor después de uno menor, devuelve false, indicando que el array no está ordenado de menor a mayor. Si termina de recorrer el array sin encontrar ningún par de elementos en desorden, devuelve true, indicando que el array está ordenado.
En el ejemplo dado, estaOrdenado(pruebaA) devuelve false porque el elemento 7 está después del elemento 1, lo cual viola el orden ascendente. Por otro lado, estaOrdenado(pruebaB) devuelve true porque todos los elementos están en orden ascendente.*/


/* Escribir una función que reciba un array con nombres, y para cada nombre imprima el mensaje: Estimado (nombre) , vote por mí.*/

function imprimirMensajesVotacion(nombres) {
  nombres.forEach(nombre => {
    console.log(`Estimado ${nombre}, vote por mí.`)
  })
}

let nombres = ["Lucas", "Martin", "Lucrecia", "Gabriela", "Mina", "Javier"]

imprimirMensajesVotacion(nombres)

/* La función imprimirMensajesVotacion() utiliza el método forEach() para iterar sobre cada nombre en el array. Luego, se imprime el mensaje utilizando una interpolación de cadenas (${nombre}) para insertar el nombre correspondiente en el mensaje. De esta manera funciona personalizado.
Estimado Lucas, vote por mí.
Estimado Martin, vote por mí.
Estimado Lucrecia, vote por mí.
Estimado Gabriela, vote por mí.
Estimado Mina, vote por mí.
Estimado Javier, vote por mí.*/


// Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario de la siguiente forma : (suponiendo que indica 6). 

let numero = parseInt(prompt("Ingrese un número:"));

for (let i = numero; i >= 2; i--) {
  let linea = ""
  for (let j = 1; j <= i; j++) {
    linea += i
  }
  console.log(linea)
}

/* En este ejemplo, utilizamos un bucle for para iterar desde el número ingresado por el usuario hasta 2 (inclusive). Para cada iteración, creamos una cadena llamada linea que contendrá los números repetidos correspondientes a esa línea de la pirámide.
Dentro del bucle interno, utilizamos otro bucle for para concatenar el número i a la cadena linea tantas veces como sea necesario (desde 1 hasta el valor de i).
Finalmente, imprimimos la cadena linea en cada iteración, lo que resultará en una pirámide inversa de los números.
Si el usuario ingresa el número 6, la salida sería:
666666
55555
4444
333
22*/


/* Teniendo 3 arrays: Cargarlos en una matriz y luego, hacer la suma de los valores horizontales de cada fila, los verticales de cada columna y las 2 diagonales, e imprimirlas por consola.*/

fila1 = [4,9,2]
fila2 = [3,5,7]
fila3 = [8,1,6]

let matrizDe3 = []
matrizDe3.push(fila1, fila2, fila3)
console.table(matrizDe3)

function sumarFila(matriz) {
   for (let i = 0; i < matriz.length; i++) {
     let sumatoria = 0
     for (let j = 0; j < matriz[i].length; j++) {
        sumatoria += matriz[i][j]
     }
     console.log((sumatoria))
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
        console.log(producto)
      }
    }
}

imprimirMultiplicacion(matrizDe3)


// Puedes crear una matriz a partir de los tres arrays dados y luego realizar la suma de los valores horizontales de cada fila, los verticales de cada columna y las dos diagonales. Aquí tienes un ejemplo de cómo puedes hacerlo en JavaScript:
// Crear la matriz
let matriz = [fila1, fila2, fila3]

// Función para sumar los elementos de un array
function sumarArray(array) {
  return array.reduce((suma, valor) => suma + valor, 0)
}

// Sumar los valores horizontales de cada fila
matriz.forEach(fila => {
  let sumaHorizontal = sumarArray(fila)
  console.log("Suma horizontal:", sumaHorizontal)
})

// Sumar los valores verticales de cada columna
for (let j = 0; j < matriz[0].length; j++) {
  let columna = matriz.map(fila => fila[j])
  let sumaVertical = sumarArray(columna)
  console.log("Suma vertical:", sumaVertical)
}

// Sumar los valores de la diagonal principal
let diagonalPrincipal = matriz.map((fila, i) => fila[i])
let sumaDiagonalPrincipal = sumarArray(diagonalPrincipal)
console.log("Suma diagonal principal:", sumaDiagonalPrincipal)

// Sumar los valores de la diagonal secundaria
let diagonalSecundaria = matriz.map((fila, i) => fila[fila.length - 1 - i])
let sumaDiagonalSecundaria = sumarArray(diagonalSecundaria)
console.log("Suma diagonal secundaria:", sumaDiagonalSecundaria)

/* En este ejemplo, primero creamos la matriz utilizando los tres arrays dados. Luego, definimos la función sumarArray() que toma un array y utiliza el método reduce() para sumar todos los elementos.
A continuación, utilizamos el método forEach() para recorrer cada fila de la matriz y calcular la suma horizontal. Imprimimos cada suma horizontal por consola.
Después, utilizamos un bucle for para recorrer cada columna de la matriz. En cada iteración, creamos un nuevo array que contiene los elementos de esa columna. Luego, calculamos la suma vertical utilizando la función sumarArray() y la imprimimos por consola.
Luego, creamos un nuevo array que contiene los elementos de la diagonal principal de la matriz utilizando el método map(). Calculamos la suma de la diagonal principal y la imprimimos.
Finalmente, creamos otro nuevo array que contiene los elementos de la diagonal secundaria de la matriz utilizando el método map(). Calculamos la suma de la diagonal secundaria y la imprimimos.

Suma horizontal: 15
Suma horizontal: 15
Suma horizontal: 15
Suma vertical: 15
Suma vertical: 15
Suma vertical: 15
Suma diagonal principal: 15
Suma diagonal secundaria: 15*/