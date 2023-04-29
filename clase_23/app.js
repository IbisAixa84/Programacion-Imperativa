/* Algoritmo de búsqueda binaria
¡Te enseñamos a escribir paso a paso un algoritmo de búsqueda binaria!
Lo primero que vamos a hacer para escribir este algoritmo, es crear una función que nos permita tomar dos parámetros: la lista sobre la que vamos a buscar, y el elemento que vamos a buscar:*/

const binarySearch = (list, item) => {
  return null; // si no encontramos nada
}

 
//La lista retornará null si no encuentra nada, pero procedamos a rellenar la función. Vamos a declarar dos límites, uno bajo y uno alto. Estos límites nos servirán para poder encontrar el punto medio de la lista.

const binarySearch1 = (list, item) => {
  // punto mas bajo
  let low = 0;
  // punto mas alto
  let high = list.length - 1
  return null // si no encontramos nada
}

//Ahora bien, la operación de encontrar el punto medio, es una operación recursiva o iterativa, es decir, la vamos a querer hacer tantas veces como no encontremos el número. Para esto podemos usar un ciclo while, el cual se ejecutara mientras que el punto más bajo sea menor o igual que el punto más alto:

    const binarySearch2 = (list, item) => {
  // punto mas bajo
  let low = 0;
  // punto mas alto
  let high = list.length - 1;
  // mientras que low sea menor o igual que high
  while (low <= high) {
    // encontramos la mitad entre low y high
    const mid = Math.floor((low + high) / 2)
  }
  return null // si no encontramos nada
}
  
// El punto medio lo podemos encontrar sumando los límites, dividiéndolo entre 2 y apoyándonos con Math.floor para redondear, en caso de que el valor de la división sea un decimal. Finalmente, la magia del algoritmo. *

const binarySearch3 = (list, item) => {
  // punto mas bajo
  let low = 0
  // punto mas alto
  let high = list.length - 1;
  // mientras que low sea menor o igual que high
  while (low <= high) {
    // encontramos la mitad entre low y high
    const mid = Math.floor((low + high) / 2)
    // adivinar si el valor es el de la mitad
    const guess = list[mid]
   // si es asi, retornar esa posiciona
    if (guess === item) {
      return mid
    }
    // si lo propuesto es mayor que lo
    // que estamos buscando
    if (guess > item) {
      //
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return null // si no encontramos nada
}
  

// El código anterior nos indica que: Si el número de la mitad es el que estamos buscando, retornarlo.Si no, vamos a hacer que la punta baja sea ese número y volveremos a buscar la mitad. Repetimos el proceso anterior hasta encontrar el número. 
//¡Claro! Aquí tienes un ejemplo paso a paso de cómo escribir un algoritmo de búsqueda binaria en JavaScript:

function busquedaBinaria(lista, elemento) {
  let inicio = 0
  let fin = lista.length - 1

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2)

    if (lista[medio] === elemento) {
      return medio; // Elemento encontrado, devolvemos su índice
    } else if (lista[medio] < elemento) {
      inicio = medio + 1 // Buscar en la mitad derecha de la lista
    } else {
      fin = medio - 1 // Buscar en la mitad izquierda de la lista
    }
  }

  return -1; // Elemento no encontrado, devolvemos -1
}

// Ejemplo de uso
let lista = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
let elementoBuscado = 12

let indice = busquedaBinaria(lista, elementoBuscado)

if (indice !== -1) {
  console.log(`El elemento ${elementoBuscado} se encuentra en el índice ${indice}.`)
} else {
  console.log(`El elemento ${elementoBuscado} no se encuentra en la lista.`)
}

/* En este ejemplo, creamos una función llamada busquedaBinaria que toma una lista y un elemento como parámetros. Primero, inicializamos las variables inicio y fin para delimitar el rango de búsqueda en la lista.
Luego, utilizamos un bucle while para realizar la búsqueda. En cada iteración, calculamos el índice medio del rango actual y comparamos el elemento en ese índice con el elemento buscado. Si son iguales, devolvemos el índice.
Si el elemento buscado es menor que el elemento en el índice medio, actualizamos fin para buscar en la mitad izquierda de la lista. Si es mayor, actualizamos inicio para buscar en la mitad derecha.
Si el bucle termina sin encontrar el elemento, devolvemos -1 para indicar que no se encontró.
En el ejemplo de uso, se crea una lista [2, 4, 6, 8, 10, 12, 14, 16, 18, 20] y se busca el elemento 12. Luego, se imprime un mensaje indicando si se encontró el elemento y en qué índice se encuentra.
La salida será: El elemento 12 se encuentra en el índice 5.
Puedes utilizar esta función busquedaBinaria para buscar un elemento en una lista ordenada de manera eficiente utilizando el algoritmo de búsqueda binaria.*/



/* Lugar y números
Para practicar la implementación del algoritmo de búsqueda binaria, vamos a empezar con un ejemplo simple. Queremos que se familiaricen con la sintaxis del mismo, por lo que no haremos énfasis en los datos, sino en la solución.
Dada la siguiente lista:
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

Utilizar el algoritmo de búsqueda binaria para responder los siguientes ítems:
¿Cuál es la posición del número 1?
¿Cuál es la posición del número 5?
¿Cuál es la posición del número 6?
¿Cuál es la posición del número 9?
¿Cuál es la posición del número 11?

Para buscar las posiciones de los números utilizando el algoritmo de búsqueda binaria en la lista [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], podemos hacer lo siguiente:

¿Cuál es la posición del número 1?

Inicialmente, establecemos inicio = 0 y fin = 10.
Calculamos el índice medio: medio = (inicio + fin) / 2 = (0 + 10) / 2 = 5.
Comparamos el número en el índice medio (5) con el número buscado (1).
Como el número en el índice medio (5) es mayor que 1, actualizamos fin = medio - 1 = 5 - 1 = 4.
Volvemos a calcular el índice medio: medio = (inicio + fin) / 2 = (0 + 4) / 2 = 2.
Comparamos el número en el índice medio (2) con el número buscado (1).
Como el número en el índice medio (2) es menor que 1, actualizamos inicio = medio + 1 = 2 + 1 = 3.
Volvemos a calcular el índice medio: medio = (inicio + fin) / 2 = (3 + 4) / 2 = 3.
Comparamos el número en el índice medio (3) con el número buscado (1).
Como el número en el índice medio (3) es mayor que 1, actualizamos fin = medio - 1 = 3 - 1 = 2.
Ahora inicio = fin, por lo que finalizamos la búsqueda.
La posición del número 1 es 2.
¿Cuál es la posición del número 5?

Inicialmente, establecemos inicio = 0 y fin = 10.
Calculamos el índice medio: medio = (inicio + fin) / 2 = (0 + 10) / 2 = 5.
Comparamos el número en el índice medio (5) con el número buscado (5).
Como el número en el índice medio (5) es igual a 5, encontramos el número buscado.
La posición del número 5 es 5.
¿Cuál es la posición del número 6?

Inicialmente, establecemos inicio = 0 y fin = 10.
Calculamos el índice medio: medio = (inicio + fin) / 2 = (0 + 10) / 2 = 5.
Comparamos el número en el índice medio (5) con el número buscado (6).
Como el número en el índice medio (5) es menor que 6, actualizamos inicio = medio + 1 = 5 + 1 = 6.
Ahora inicio = fin, por lo que finalizamos la búsqueda.
El número 6 no se encuentra en la lista, por lo que no tiene posición definida.
¿Cuál es la posición del número 9?

Inicialmente, establecemos inicio = 0 y `fin =*/



/*Aumentemos la dificultad un toque, y apliquemos lo aprendido en semanas anteriores. Queremos que hagan lo mismo del ejercicio anterior —buscar la posición de un número en un array—, pero partiendo de esta lista:
let list = [12,3,5,7,1,22,47,100];

Para aplicar búsqueda binaria, deberán ordenar primero la lista, de menor a mayor, utilizando bubble sort. Luego, respondan las siguientes preguntas:
¿Cuál es la posición del número 12?
¿Cuál es la posición del número 5?
¿Cuál es la posición del número 22?
¿Cuál es la posición del número 100?

Para utilizar el algoritmo de búsqueda binaria en la lista [12, 3, 5, 7, 1, 22, 47, 100], primero necesitamos ordenarla de menor a mayor utilizando el algoritmo de ordenamiento Bubble Sort. Luego, podemos buscar las posiciones de los números de la siguiente manera:

Ordenar la lista utilizando Bubble Sort:
Comparamos cada par de elementos adyacentes y los intercambiamos si están en el orden incorrecto.
Repetimos este proceso hasta que la lista esté ordenada de menor a mayor.
Después de aplicar el Bubble Sort, la lista se verá así: [1, 3, 5, 7, 12, 22, 47, 100].

¿Cuál es la posición del número 12?

Inicialmente, establecemos inicio = 0 y fin = 7.
Calculamos el índice medio: medio = (inicio + fin) / 2 = (0 + 7) / 2 = 3.
Comparamos el número en el índice medio (7) con el número buscado (12).
Como el número en el índice medio (7) es menor que 12, actualizamos inicio = medio + 1 = 3 + 1 = 4.
Ahora inicio = fin, por lo que finalizamos la búsqueda.
La posición del número 12 es 4.
¿Cuál es la posición del número 5?

Inicialmente, establecemos inicio = 0 y fin = 7.
Calculamos el índice medio: medio = (inicio + fin) / 2 = (0 + 7) / 2 = 3.
Comparamos el número en el índice medio (7) con el número buscado (5).
Como el número en el índice medio (7) es mayor que 5, actualizamos fin = medio - 1 = 3 - 1 = 2.
Volvemos a calcular el índice medio: medio = (inicio + fin) / 2 = (0 + 2) / 2 = 1.
Comparamos el número en el índice medio (3) con el número buscado (5).
Como el número en el índice medio (3) es menor que 5, actualizamos inicio = medio + 1 = 1 + 1 = 2.
Ahora inicio = fin, por lo que finalizamos la búsqueda.
La posición del número 5 es 2.
¿Cuál es la posición del número 22?

Inicialmente, establecemos inicio = 0 y fin = 7.
Calculamos el índice medio: medio = (inicio + fin) / 2 = (0 + 7) / 2 = 3.
Comparamos el número en el índice medio (7) con el número buscado (22).
Como el número en el índice medio (7) es menor que 22, actualizamos inicio = medio + 1 = 3 + 1 = 4.
Ahora inicio = fin, por lo que finalizamos la búsqueda.
El número 22*/


