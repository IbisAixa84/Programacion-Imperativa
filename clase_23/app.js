/* Algoritmo de búsqueda binaria
¡Te enseñamos a escribir paso a paso un algoritmo de búsqueda binaria!

Lo primero que vamos a hacer para escribir este algoritmo, es crear una función que nos permita tomar dos parámetros: la lista sobre la que vamos a buscar, y el elemento que vamos a buscar:
 */

const binarySearch = (list, item) => {
  return null; // si no encontramos nada
};
 
//La lista retornará null si no encuentra nada, pero procedamos a rellenar la función. Vamos a declarar dos límites, uno bajo y uno alto. Estos límites nos servirán para poder encontrar el punto medio de la lista.

const binarySearch1 = (list, item) => {
  // punto mas bajo
  let low = 0;
  // punto mas alto
  let high = list.length - 1;
  return null; // si no encontramos nada
};

//Ahora bien, la operación de encontrar el punto medio, es una operación recursiva o iterativa, es decir, la vamos a querer hacer tantas veces como no encontremos el número. 
//Para esto podemos usar un ciclo while, el cual se ejecutara mientras que el punto más bajo sea menor o igual que el punto más alto:

    const binarySearch2 = (list, item) => {
  // punto mas bajo
  let low = 0;
  // punto mas alto
  let high = list.length - 1;
  // mientras que low sea menor o igual que high
  while (low <= high) {
    // encontramos la mitad entre low y high
    const mid = Math.floor((low + high) / 2);
  }
  return null; // si no encontramos nada
};
  
/* El punto medio lo podemos encontrar sumando los límites, dividiéndolo entre 2 y apoyándonos con Math.floor para redondear, en caso de que el valor de la división sea un decimal.
Finalmente, la magia del algoritmo. */

const binarySearch3 = (list, item) => {
  // punto mas bajo
  let low = 0;
  // punto mas alto
  let high = list.length - 1;
  // mientras que low sea menor o igual que high
  while (low <= high) {
    // encontramos la mitad entre low y high
    const mid = Math.floor((low + high) / 2);
    // adivinar si el valor es el de la mitad
    const guess = list[mid]; 
   // si es asi, retornar esa posiciona
    if (guess === item) {
      return mid;
    }
    // si lo propuesto es mayor que lo
    // que estamos buscando
    if (guess > item) {
      //
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null; // si no encontramos nada
};
  
/* El código anterior nos indica que:

Si el número de la mitad es el que estamos buscando, retornarlo.
Si no, vamos a hacer que la punta baja sea ese número y volveremos a buscar la mitad.
Repetimos el proceso anterior hasta encontrar el número. */



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
Sabemos que responder estas preguntas es extremadamente fácil, ya que podemos leer el array, y determinar con un cálculo visual la posición de cada elemento, pero, la propuesta que les hacemos es que codeen un algoritmo de búsqueda binaria, que “busque” ese número, por ejemplo, el 6, y nos indique por consola la posición del mismo. 
El objetivo de este ejercicio es que puedan practicar la sintaxis sin añadir complejidad extra.
Desafío extra: Orden, lugar y números
Aumentemos la dificultad un toque, y apliquemos lo aprendido en semanas anteriores. Queremos que hagan lo mismo del ejercicio anterior —buscar la posición de un número en un array—, pero partiendo de esta lista:
let list = [12,3,5,7,1,22,47,100];

Para aplicar búsqueda binaria, deberán ordenar primero la lista, de menor a mayor, utilizando bubble sort. Luego, respondan las siguientes preguntas:
¿Cuál es la posición del número 12?
¿Cuál es la posición del número 5?
¿Cuál es la posición del número 22?
¿Cuál es la posición del número 100?
Podrán realizar este ejercicio en un Code Sandbox o Node. Escoger el ambiente en el que se sientan con más comodidad.
*/


