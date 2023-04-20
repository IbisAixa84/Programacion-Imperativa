/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */


/* Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
números. La matriz debe verse así:
1 2 3 4 5 6 7 8 9 10
11 12 13 14 15 16 17 18 19 20
21 22 23 24 25 26 27 28 29 30
31 32 33 34 35 36 37 38 39 40
41 42 43 44 45 46 47 48 49 50
51 52 53 54 55 56 57 58 59 60
61 62 63 64 65 66 67 68 69 70
71 72 73 74 75 76 77 78 79 80
81 82 83 84 85 86 87 88 89 90
91 92 93 94 95 96 97 98 99 100 */

// Completa la función para que retorne una matriz
// de 10x10

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

let matriz10por10 = generarMatriz10por10(10, 10);
console.table(matriz10por10);

/* 3) Por último, vamos a generar dos funciones:
a) Una va a sumar los valores en la diagonal marcada en rojo.
b) La otra va a marcar los valores de la diagonal marcada en verde.
Ambas funciones deben devolver un resultado único.

Rojo: 505
Verde 505
Trabajar en el mismo sandbox del ejercicio 2. */

/* Dada una matriz, recorre sus valores y sumar solo los numeros que
esten por encima o dean iguales a 10, pero menores que 1000
*/

let numeros = [
	[10, 3, 2, 1, 4, 7],
	[5, 5, 10, 100, 4],
	[5, 125, 10, 1020, 4],
	[5, 5, 5097, 100, 4]
];

/*
 * Suma los valores que sean mayores
 * o iguales a 10, pero menor a 1000.
 */

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
Posibles matrices para comprobar los resultados. 
 
Día 1
Día 2
Día 3
Día 4
Día 5
Día 6
Día 7
Semana 1
 1135
 2500
 900
 1600
 2800
 3650
 1100
Semana 2
 1750
 1890
 1900
 1300
 898
 1750
 2800
Semana 3
 1700
 1150
 1690
 1900
 1770
 4500
 2560
Semana 4
 800
 1250
 1430
 2100
 1980
 1270
 950
*/
 

