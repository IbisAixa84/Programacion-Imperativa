//Métodos de arrays

/*  Ejercicio 1: map()
    Nos dejaron una lista con los horarios de partida de algunos aviones. Esta lista se reproduce directamente en las pantallas del aeropuerto y, a modo de travesura, queremos adelantar una hora cada partida. Nuestro trabajo será utilizar el método map para poder lograrlo y almacenar la lista en una variable nueva llamada horariosAtrasados.
    El método map recorre el array original y devuelve uno nuevo con las alteraciones que hayamos definido para cada elemento.
*/

//Para adelantar una hora cada partida en la lista horariosPartida utilizando el método map(), podemos hacer lo siguiente:
let horariosPartida = [12, 14, 18, 21]

let horariosAtrasados = horariosPartida.map(horario => horario + 1)

console.log(horariosAtrasados)

/* En este código, utilizamos map() para recorrer cada elemento de horariosPartida. Dentro de la función de mapeo, sumamos 1 a cada elemento (horario + 1) para adelantar una hora. El resultado se almacena en la variable horariosAtrasados.
Al imprimir horariosAtrasados, obtendríamos el siguiente resultado:
[13, 15, 19, 22]
Los horarios de partida han sido adelantados una hora.*/


/*  Ejercicio 2: filter()
    Necesitamos enviarle un diploma a los alumnos que están aprobados y un e-mail a los alumnos desaprobados para acordar un recuperatorio. Por lo tanto, necesitamos dos listas: una lista que almacene todos los aprobados y otra los desaprobados. Deberemos guardarlos en las variables aprobados y desaprobados respectivamente. 
    La función filter evalúa una condición sobre cada elemento. Si la condición no resulta verdadera, el elemento se descarta.
*/

let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
    // más estudiantes...
]

let aprobados = estudiantes.filter(estudiante => estudiante.aprobado)
let desaprobados = estudiantes.filter(estudiante => !estudiante.aprobado)

console.log(aprobados)
console.log(desaprobados)

/*En este código, utilizamos filter() dos veces. En la primera llamada, filtramos los estudiantes que tienen la propiedad aprobado establecida como true, y eso se almacena en la variable aprobados. En la segunda llamada, filtramos los estudiantes que tienen la propiedad aprobado establecida como false, y eso se almacena en la variable desaprobados.
Al imprimir aprobados y desaprobados, obtendríamos los siguientes resultados:

[
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true}
]

[
    {nombre: 'June', promedio: 3, aprobado: false}
]
La lista aprobados contiene los estudiantes aprobados y la lista desaprobados contiene los estudiantes desaprobados.*/



/*  Ejercicio 3: reduce()
    Nos dejaron un array con las vueltas que dio una corredora entrenando en distintos momentos para una maratón.
    Nuestro desafío será crear la variable totalVueltas y almacenar en ella el total, usando el método reduce. 
    El método reduce devuelve un único valor según la condición dada.
*/

// Para calcular el total de vueltas utilizando el método reduce(), puedes hacer lo siguiente:
let vueltas = [5, 8, 12, 3, 22];

let totalVueltas = vueltas.reduce((acumulador, vuelta) => acumulador + vuelta, 0)

console.log(totalVueltas)

/* En este código, utilizamos reduce() para sumar todas las vueltas en el array vueltas. El método reduce() recibe una función de reducción que toma dos parámetros: el acumulador y el valor actual. La función suma el valor actual al acumulador en cada iteración. Además, pasamos un segundo parámetro opcional al método reduce() que establece el valor inicial del acumulador en 0.
Al imprimir totalVueltas, obtendríamos el siguiente resultado:
La variable totalVueltas contendrá el resultado de sumar todas las vueltas en el array, que en este caso es 50.*/



/*  Ejercicio 4: forEach()
    Para este ejercicio tenemos el array listaDeSupermercado. Nuestro trabajo será mostrar cada ítem de esa lista por consola utilizando un foreach. 
    Usando un foreach podemos recorrer cada elemento de un conjunto iterable.
*/

// Para mostrar cada ítem de la lista de supermercado utilizando forEach(), puedes hacer lo siguiente:
let listaDeSuperMercado = [
    'Bife de chorizo',
    'Coca Cola',
    'Bananas',
    'Lechuga',
    'Chimichurri',
    'Lata de tomates',
    'Arvejas',
    'Cereales',
    'Pechuga de pollo',
    'Leche'
]

listaDeSuperMercado.forEach(item => {
    console.log(item)
})

/* En este código, utilizamos forEach() para recorrer cada elemento de listaDeSuperMercado. La función de callback dentro de forEach() se ejecutará para cada elemento, y en este caso, simplemente mostramos cada ítem por consola utilizando console.log(item).
Al ejecutar este código, obtendrías la siguiente salida:
Bife de chorizo
Coca Cola
Bananas
Lechuga
Chimichurri
Lata de tomates
Arvejas
Cereales
Pechuga de pollo
Leche
Cada ítem de la lista de supermercado se imprimirá en una línea separada.*/
