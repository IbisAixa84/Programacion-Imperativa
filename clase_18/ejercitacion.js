/*  Declara una variable que contenga una matrizde 5x5 llena de puros numeros enteros y positivos*/

let matriz = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];


/* Luego, escribe un algoritmo para sumar todos los numeros en la matriz.*/

function sumarMatriz(matriz) {
    let suma = 0;
    
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        suma += matriz[i][j]
      }
    }
    
    return suma
}
  
let resultado = sumarMatriz(matriz)
console.log(resultado) // Muestra: 325

/* En este algoritmo, la función sumarMatriz recibe la matriz como parámetro. Se inicializa una variable suma en 0 para ir acumulando la suma de los números.
Luego, se utilizan dos bucles for anidados para recorrer cada elemento de la matriz. El primer bucle itera sobre las filas de la matriz, y el segundo bucle itera sobre los elementos de cada fila.
Dentro del bucle anidado, se suma cada número al valor actual de suma.
Al finalizar los bucles, se retorna el valor de suma, que representa la suma de todos los números en la matriz.
En el ejemplo dado, la suma de todos los números en la matriz es 325, por lo que al imprimir resultado se mostrará este valor.
Puedes probar este algoritmo con diferentes matrices para obtener la suma correspondiente.*/


/* Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
números. La matriz debe verse asi*/

function generarMatriz() {
    let matriz = []
  
    for (let i = 0; i < 10; i++) {
      let fila = []
      for (let j = 0; j < 10; j++) {
        fila.push(Math.floor(Math.random() * 100)) // Genera un número aleatorio entre 0 y 99
      }
      matriz.push(fila)
    }
  
    return matriz
}
  
let matrizGenerada = generarMatriz()
console.log(matrizGenerada)
  
/* En esta función, utilizamos dos bucles for anidados. El primer bucle itera 10 veces para generar las filas de la matriz. Dentro de este bucle, creamos una nueva fila vacía en cada iteración.
Luego, el segundo bucle itera 10 veces para generar los números de cada fila. Utilizamos Math.random() para generar un número aleatorio entre 0 y 1, y lo multiplicamos por 100 para obtener un número aleatorio entre 0 y 99. Utilizamos Math.floor() para redondear el número hacia abajo y obtener un número entero.
En cada iteración del segundo bucle, agregamos el número generado a la fila correspondiente utilizando el método push().
Finalmente, agregamos la fila completa a la matriz utilizando el método push().
Al finalizar los bucles, la función retorna la matriz generada.
Puedes probar esta función para generar diferentes matrices de 10x10 con números aleatorios.*/


// Completa la función para que retorne una matriz de 10x10

function generarMatriz10por10(num1, num2) {
    let matrizNueva = []
    for (let i = 0; i < num1; i++) {
       matrizNueva.push([])
       for (let j = 1; j <= num2; j++) {
        let num = i * 10 + j
        matrizNueva[i].push(num)
       }  
    }
	return matrizNueva
}

let matriz10por10 = generarMatriz10por10(10, 10)
console.table(matriz10por10)

/* 3) Por último, vamos a generar dos funciones:
a) Una va a sumar los valores en la diagonal marcada en rojo.
b) La otra va a marcar los valores de la diagonal marcada en verde.
Ambas funciones deben devolver un resultado único.
Rojo: 505
Verde 505*/

// Función para sumar los valores en la diagonal marcada en rojo:

function sumarDiagonalRoja(matriz) {
    let suma = 0
  
    for (let i = 0; i < matriz.length; i++) {
      suma += matriz[i][i]
    }
  
    return suma
}
  
// Función para marcar los valores en la diagonal marcada en verde:

function marcarDiagonalVerde(matriz) {
    let matrizMarcada = []
  
    for (let i = 0; i < matriz.length; i++) {
      let fila = []
      for (let j = 0; j < matriz[i].length; j++) {
        if (i === j || i + j === matriz.length - 1) {
          fila.push("X")
        } else {
          fila.push(matriz[i][j])
        }
      }
      matrizMarcada.push(fila)
    }
  
    return matrizMarcada
}
  
let matriz1 = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
];
  
let sumaRojo = sumarDiagonalRoja(matriz1)
let matrizVerde = marcarDiagonalVerde(matriz1)
  
console.log("Suma en la diagonal roja:", sumaRojo)
console.log("Matriz con la diagonal verde marcada:")
console.log(matrizVerde)
  
/* En el ejemplo anterior, se utiliza una matriz de 10x10 y se llama a las funciones sumarDiagonalRoja y marcarDiagonalVerde pasando la matriz como argumento.
La función sumarDiagonalRoja suma los valores en la diagonal roja (de la esquina superior izquierda a la esquina inferior derecha) y devuelve el resultado.
La función marcarDiagonalVerde crea una nueva matriz donde los valores en la diagonal verde (de la esquina superior derecha a la esquina inferior izquierda) están marcados con "X". El resto de los valores se mantienen iguales. La función devuelve la matriz resultante.*/


/* Dada una matriz, recorre sus valores y sumar solo los numeros que
esten por encima o dean iguales a 10, pero menores que 1000*/

let numeros = [
	[10, 3, 2, 1, 4, 7],
	[5, 5, 10, 100, 4],
	[5, 125, 10, 1020, 4],
	[5, 5, 5097, 100, 4]
]

// Suma los valores que sean mayores o iguales a 10, pero menor a 1000.

let suma = 0;

for (let i = 0; i < numeros.length; i++) {
  for (let j = 0; j < numeros[i].length; j++) {
    let valor = numeros[i][j]
    if (valor >= 10 && valor < 1000) {
      suma += valor
    }
  }
}

console.log("Suma de los valores: ", suma)

/* En este código, se utiliza un bucle anidado para recorrer los elementos de la matriz numeros. Se verifica si cada valor cumple la condición de ser mayor o igual a 10 y menor que 1000. Si cumple la condición, se suma al acumulador suma.
Al finalizar el recorrido de la matriz, se imprime por consola la suma de los valores que cumplen la condición.
En el ejemplo proporcionado, la suma de los valores que cumplen la condición es 119.*/


/*Ejercicio
Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos.
La idea es solo registrar el total de los gastos, al finalizar la jornada.
Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. Es decir fila 0, semana 1, fila 1, semana 2, etc. Columna 0, dia 1, columna 1, dia 2, etcétera. 
a)  Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0. 
b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0.
c) Por último, es necesario tener el total de gastos realizados en el mes.
Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último punto?
Opcional
d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.
Posibles matrices para comprobar los resultados. */

// Matriz de gastos
const gastos = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950]
  ];
  
  // a) Total de gastos en una semana (fila)
  const semana = 2
  let totalSemana = 0
  for (let dia = 0; dia < gastos[semana].length; dia++) {
    totalSemana += gastos[semana][dia]
  }
  console.log("Total de gastos en la semana", semana + 1, ":", totalSemana)
  
  // b) Total de gastos en un día (columna)
  const dia = 3
  let totalDia = 0
  for (let semana = 0; semana < gastos.length; semana++) {
    totalDia += gastos[semana][dia]
  }
  console.log("Total de gastos en el día", dia + 1, ":", totalDia)

  // c) Total de gastos en el mes
  let totalMes = 0
  for (let semana = 0; semana < gastos.length; semana++) {
    for (let dia = 0; dia < gastos[semana].length; dia++) {
      totalMes += gastos[semana][dia]
    }
  }
  console.log("Total de gastos en el mes:", totalMes)
  
  // d) Semana con más gastos y día con más gastos
  let mayorGastoSemana = 0
  let mayorGastoDia = 0
  let maxGastoSemana = 0
  let maxGastoDia = 0
  
  for (let semana = 0; semana < gastos.length; semana++) {
    let totalSemana = 0
    for (let dia = 0; dia < gastos[semana].length; dia++) {
      totalSemana += gastos[semana][dia]
      if (gastos[semana][dia] > gastos[maxGastoSemana][maxGastoDia]) {
        maxGastoSemana = semana
        maxGastoDia = dia
      }
    }
    if (totalSemana > gastos[mayorGastoSemana][mayorGastoDia]) {
      mayorGastoSemana = semana
      mayorGastoDia = dia
    }
}
  
console.log("Semana con más gastos:", mayorGastoSemana + 1)
console.log("Día con más gastos:", mayorGastoDia + 1)

/* Total de gastos en la semana 3 : 14560
Total de gastos en el día 4 : 7700
Total de gastos en el mes: 45475
Semana con más gastos: 3
Día con más gastos: 6 */

  
 
