/* Arrays y colecciones
A. Acceder a elementos específicos de un array.*/

let miArray = [2, 3, 4, 5, 7, 10]
let elemento = 3
let elemento1 = 10

let indice = miArray.indexOf(elemento)
console.log("El elemento", elemento, "se encuentra en el índice", indice)
let indice1 = miArray.indexOf(elemento1)
console.log("El elemento", elemento1, "se encuentra en el índice", indice1)


/*B. Modificar cada uno de sus elementos e imprimirlos.
Si deseas modificar cada uno de los elementos de un arreglo y luego imprimirlos, puedes utilizar un bucle for o la función map(). Aquí tienes ejemplos de ambos enfoques:
Usando un bucle for:*/

let array = [1, 2, 3, 4, 5]

for (let i = 0; i < array.length; i++) {
  array[i] = array[i] * 2 // Modificar el elemento multiplicándolo por 2
  console.log(array[i]) // Imprimir el elemento modificado
}


/*En este ejemplo, multiplicamos cada elemento del arreglo arr por 2 y luego imprimimos cada elemento modificado en la consola.
Usando la función map():*/

let arr = [11, 12, 13, 14, 15]

let newArr = arr.map(function(elemento) {
  let elementoModificado = elemento * 2 // Modificar el elemento multiplicándolo por 2
  console.log(elementoModificado) // Imprimir el elemento modificado
  return elementoModificado // Retornar el elemento modificado
})


/*C. Agregar elementos a un array.
Para agregar elementos a un arreglo en JavaScript, puedes utilizar el método push() o la asignación directa a través de los corchetes. Aquí tienes ejemplos de ambos enfoques:
Utilizando el método push():*/

let arr1 = [1, 2, 3];

arr1.push(4); // Agregar el elemento 4 al final del arreglo
arr1.push(5, 6); // Agregar los elementos 5 y 6 al final del arreglo

console.log(arr1); // Imprimir el arreglo actualizado


/*D. Extraer elementos de un array.
Para extraer elementos de un arreglo en JavaScript, puedes utilizar los métodos pop(), shift() o la función splice(). Aquí tienes ejemplos de cada uno de ellos:
Utilizando el método pop():*/

let arr2 = [1, 2, 3, 4, 5];

let ultimoElemento = arr2.pop(); // Extraer el último elemento del arreglo

console.log(ultimoElemento); // Imprimir el último elemento extraído
console.log(arr2); // Imprimir el arreglo actualizado


/*Utilizando el método shift():*/

let arr3 = [11, 21, 31, 41, 51];

let primerElemento = arr3.shift(); // Extraer el primer elemento del arreglo

console.log(primerElemento); // Imprimir el primer elemento extraído
console.log(arr3); // Imprimir el arreglo actualizado


/*Utilizando la función splice():*/

let arr4 = [21, 22, 23, 24, 25];

let elementosExtraidos = arr4.splice(1, 3); // Extraer elementos desde el índice 1 hasta el índice 3 (no inclusivo)

console.log(elementosExtraidos); // Imprimir los elementos extraídos
console.log(arr4); // Imprimir el arreglo actualizado

/*En este ejemplo, utilizamos la función splice() para extraer elementos del arreglo arr. El primer argumento indica el índice desde el cual se empezará a extraer, y el segundo argumento indica la cantidad de elementos a extraer. La función splice() devuelve un nuevo arreglo con los elementos extraídos, que asignamos a la variable elementosExtraidos. Al imprimir elementosExtraidos, verás los elementos extraídos. Al imprimir arr, verás el arreglo actualizado sin los elementos extraídos.
Ten en cuenta que los métodos pop() y shift() modifican el arreglo original, mientras que la función splice() te permite extraer elementos de cualquier posición y también modificar el arreglo original.*/


/*E. Comparar elementos de un array con los elementos de otro. Para comparar elementos de dos arreglos en JavaScript, puedes utilizar un bucle for para recorrer ambos arreglos e ir comparando los elementos en cada posición. Aquí tienes un ejemplo de cómo hacerlo:*/

let arr5 = [1, 2, 3, 4, 5];
let arr6 = [1, 3, 5, 7, 9];

// Verificar si los arreglos tienen la misma longitud
if (arr5.length === arr6.length) {
  let tienenMismosElementos = true;

  // Comparar elementos en cada posición
  for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] !== arr6[i]) {
      tienenMismosElementos = false;
      break; // Si se encuentra una diferencia, se sale del bucle
    }
  }

  if (tienenMismosElementos) {
    console.log("Los arreglos tienen los mismos elementos en las mismas posiciones.");
  } else {
    console.log("Los arreglos tienen diferencias en al menos una posición.");
  }
} else {
  console.log("Los arreglos tienen diferente longitud.");
}


/*¿Qué devuelven estos códigos?
En este ejercicio deberás pensar qué devuelven estos códigos sin probarlos en la
consola. */

let numbers = [22, 33, 54, 66, 72]
console.log(numbers[numbers.length])

let grupoDeAmigos = [ "Harry", "Ron", "Hermione", "Spiderman", "Hulk", "Ironman","Penélope Glamour", "Pierre Nodoyuna","Patán" ]
console.log(grupoDeAmigos[5])

let str = "un string cualquiera"
let arrayAleatorio = ["Digital", "House" ]
console.log(arrayAleatorio[arrayAleatorio.length - 1]) 


/* Colecciones de películas (y más...)
Para crear una estructura adecuada para almacenar las películas mencionadas en JavaScript, puedes utilizar un arreglo simple. Cada película será un elemento del arreglo. Aquí tienes un ejemplo de cómo crear la estructura de datos:*/

//let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]

//console.log(peliculas)


/*2. Para convertir el contenido de cada elemento de un arreglo a mayúsculas, puedes crear una función en JavaScript que reciba el arreglo como parámetro y utilice el método toUpperCase() para realizar la conversión. Aquí tienes un ejemplo de cómo crear esta función:*/

function convertirAMayusculas(arreglo) {
    let resultado = []
  
    for (let i = 0; i < arreglo.length; i++) {
      let elemento = arreglo[i]
      let elementoMayusculas = elemento.toUpperCase()
      resultado.push(elementoMayusculas)
    }
  
    return resultado
}
  
let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
let peliculasMayusculas = convertirAMayusculas(peliculas)
  
console.log(peliculasMayusculas)
  
/*En este ejemplo, hemos creado la función convertirAMayusculas que toma un arreglo como parámetro. Dentro de la función, creamos un nuevo arreglo resultado para almacenar las películas convertidas a mayúsculas. Luego, utilizamos un bucle for para iterar sobre cada elemento del arreglo original. En cada iteración, utilizamos el método toUpperCase() para convertir el elemento a mayúsculas y lo agregamos al arreglo resultado utilizando el método push(). Finalmente, retornamos el arreglo resultado con las películas en mayúsculas
Para agregar los elementos de un segundo arreglo al final de un primer arreglo y convertirlos a mayúsculas, puedes crear una función en JavaScript que reciba ambos arreglos como parámetros. La función realizará las siguientes tareas:
1. Convertirá los elementos del segundo arreglo a mayúsculas.
2. Agregará los elementos convertidos al final del primer arreglo.
3. Retornará el primer arreglo actualizado con los elementos combinados.*/

function combinarArrays(arr1, arr2) {
    let arr2Mayusculas = convertirAMayusculas(arr2)
    let resultado = arr1.concat(arr2Mayusculas)
    return resultado
  }
  
  function convertirAMayusculas(arreglo) {
    let resultado = []
  
    for (var i = 0; i < arreglo.length; i++) {
      let elemento = arreglo[i]
      let elementoMayusculas = elemento.toUpperCase()
      resultado.push(elementoMayusculas)
    }
  
    return resultado
}
  
let peliculass = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]
let elementoEliminado = peliculasAnimadas.pop(); // Eliminar el último elemento y guardarlo en una variable
let peliculasCombinadas = combinarArrays(peliculass, peliculasAnimadas)
  
console.log(peliculasCombinadas)
console.log("Elemento eliminado:", elementoEliminado)


/*Aquí tienes una función que compara las calificaciones de los usuarios de Asia y Europa y determina si son iguales o diferentes:*/

function compararCalificaciones(asiaScores, euroScores) {
    if (asiaScores.length !== euroScores.length) {
      return "Los arreglos tienen diferente longitud."
    }
  
    for (var i = 0; i < asiaScores.length; i++) {
      if (asiaScores[i] !== euroScores[i]) {
        return "Las calificaciones son diferentes."
      }
    }
  
    return "Las calificaciones son iguales."
}
  
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4]
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]
  
let resultado = compararCalificaciones(asiaScores, euroScores)
console.log(resultado)
  

/*(recomendamos siempre documentaciones oficiales como la de MDN Web Docs, o foros reconocidos como Stack Overflow).
Array inverso
Aquí tienes la función imprimirInverso que toma un arreglo como argumento y imprime en la consola cada elemento en orden inverso:*/

function imprimirInverso(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
      console.log(arr[i])
    }
}
  
let arreglo = [1, 2, 3, 4, 5]
imprimirInverso(arreglo)
 
/*En esta función, utilizamos un bucle for que comienza desde la última posición del arreglo (arr.length - 1) y se decrementa hasta la primera posición (0). En cada iteración del bucle, imprimimos el elemento correspondiente utilizando console.log(arr[i]).
Al ejecutar esta función con el arreglo [1, 2, 3, 4, 5], se imprimirán los elementos en orden inverso en la consola.*/


/*  1. Crear la función inversor que tome un arreglo como argumento y devuelva uno nuevo invertido:*/

function inversor(arr) {
    let nuevoArray = []
    for (let i = arr.length - 1; i >= 0; i--) {
      nuevoArray.push(arr[i])
    }
    return nuevoArray
}
  
let arreglos = [1, 2, 3, 4, 5]
let arregloInvertido = inversor(arreglos)
console.log(arregloInvertido)
  
//La función inversor recorre el arreglo original en orden inverso y va agregando los elementos en un nuevo arreglo utilizando el método push(). Al finalizar, se devuelve el nuevo arreglo invertido.


// 2.Crear la función sumaArray que acepte un arreglo de números (3 elementos) y devuelva la suma de todos ellos:

function sumaArray(arr) {
    let suma = 0
    for (let i = 0; i < arr.length; i++) {
      suma += arr[i]
    }
    return suma
  }
  
let arregl = [1, 2, 3]
let resultad = sumaArray(arregl)
console.log(resultad) 


// 3.Crear la función join que reciba un arreglo de strings de 4 elementos y simule el comportamiento del método Array.join():

function join(arr) {
    let result = ''
    for (let i = 0; i < arr.length; i++) {
      result += arr[i]
    }
    return result
}
  
let arreg = ["h", "o", "l", "a"]
let result = join(arreg)
console.log(result)

// La función join recorre el arreglo y concatena cada elemento en un string resultado. Al finalizar, se devuelve el string resultante.
