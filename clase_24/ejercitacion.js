/* Ejercicio 1
Dado un array con los datos de una encuesta realizada sobre los temas musicales más populares —lo que se tiene en el array son objetos definidos con el nombre de un tema musical 
y cantidad de votos que obtuvo— crear el array con los datos de 5 temas, crear los objetos con los temas que prefieran, y una cantidad de votos para cada uno.
Los votos obtenidos están desordenados.
Escribir un algoritmo que, dado un tema, me informe cuántos votos obtuvo.*/
// a) Resolverlo aplicando búsqueda lineal.
function obtenerVotosBusquedaLineal(temas, temaBuscado) {
    for (let i = 0; i < temas.length; i++) {
      if (temas[i].nombre === temaBuscado) {
        return temas[i].votos
      }
    }
    return 0 // Si el tema no se encuentra en la lista, retorna 0 votos
}
  
/* En este algoritmo, recorremos el array de temas utilizando un bucle for. En cada iteración, verificamos si el nombre del tema coincide con el tema buscado. Si hay coincidencia, retornamos la cantidad de votos correspondiente a ese tema. Si no se encuentra el tema en la lista, se retorna 0 votos.*/Puedes usar esta función de la siguiente manera:
let temas = [
    { nombre: "Tema1", votos: 10 },
    { nombre: "Tema2", votos: 5 },
    { nombre: "Tema3", votos: 8 },
    { nombre: "Tema4", votos: 3 },
    { nombre: "Tema5", votos: 12 }
  ];
  
  let temaBuscado = "Tema3"
  
  let votosObtenidos = obtenerVotosBusquedaLineal(temas, temaBuscado)
  console.log("Votos obtenidos para", temaBuscado + ":", votosObtenidos)
  
// La salida será: "Votos obtenidos para Tema3: 8".



//b) Para resolverlo aplicando búsqueda binaria, primero debes ordenar el array de temas por el nombre. Luego, puedes utilizar el siguiente algoritmo:
function obtenerVotosBusquedaBinaria(temas, temaBuscado) {
    let inicio = 0
    let fin = temas.length - 1
  
    while (inicio <= fin) {
      let medio = Math.floor((inicio + fin) / 2)
      if (temas[medio].nombre === temaBuscado) {
        return temas[medio].votos
      } else if (temas[medio].nombre < temaBuscado) {
        inicio = medio + 1
      } else {
        fin = medio - 1
      }
    }
    return 0 // Si el tema no se encuentra en la lista, retorna 0 votos
}

/* En este algoritmo, utilizamos búsqueda binaria para buscar el tema en el array ordenado. Comparamos el nombre del tema en el medio del rango actual con el tema buscado. Si son iguales, retornamos la cantidad de votos correspondiente a ese tema. Si el nombre del tema en el medio es menor que el tema buscado, ajustamos el rango de búsqueda hacia la mitad superior. Si es mayor, ajustamos el rango hacia la mitad inferior. El bucle se repite hasta encontrar el tema o hasta que el rango de búsqueda se reduzca a cero.
Puedes usar esta función de la siguiente manera:*/
let temass = [
    { nombre: "Tema1", votos: 10 },
    { nombre: "Tema2", votos: 5 },
    { nombre: "Tema3", votos: 8 },
    { nombre: "Tema4", votos: 3 },
    { nombre: "Tema5", votos: 12}
]  

  


// .forEach(): "significa por cada uno va hacer algo". Su particularidad no retorna nada, solo se usa para mostrar algoo modificar algo de lo que estoy haciendo
// Correcto, el método forEach() se utiliza para recorrer los elementos de un array y ejecutar una función en cada uno de ellos. En este caso, puedes utilizarlo para imprimir cada elemento del array numeros de la siguiente manera:
const numeros = [33, 27, 34, 30, 34, 25, 0, 1]

numeros.forEach((num) => {
  console.log(num)
})

/* En cada iteración, la función console.log() se ejecutará con cada elemento del array numeros, imprimiendo el valor correspondiente en la consola.La salida será:
33
27
34
30
34
25
0
1
Recuerda que el método forEach() no retorna ningún valor, simplemente realiza una acción sobre cada elemento del array.*/



// Utilizar un metodo de array para recorrer todos sus elementos e incrementar su valor en 1. console.log(numeros); let numeroCopia = numeros.map((num) => num + 1) console.log(numeroCopia)
// Correcto, puedes utilizar el método map() para recorrer todos los elementos de un array y realizar una operación en cada uno de ellos. En este caso, incrementar su valor en 1. Aquí tienes el código para lograrlo:
const numeros1 = [33, 27, 34, 30, 34, 25, 0, 1]

console.log(numeros1) // Imprimir el array original

let numeroCopia = numeros1.map((num) => num + 1)

console.log(numeroCopia) // Imprimir el nuevo array con los valores incrementados

/* El método map() crea un nuevo array con los resultados de aplicar la función sumar 1 a cada elemento del array original numeros. El nuevo array resultante se almacena en la variable numeroCopia.
Al imprimir numeros originalmente, se mostrará el array original sin modificaciones. Luego, al imprimir numeroCopia, se mostrará el nuevo array con los valores incrementados en 1. La salida será:
[33, 27, 34, 30, 34, 25, 0, 1]
[34, 28, 35, 31, 35, 26, 1, 2]
Cada elemento del nuevo array numeroCopia será el valor correspondiente del array original numeros incrementado en 1.*/



// Utilizar un metodo para filtrar los numeros pares e imprimir el nuevo array.let pares = numeros.filter((num) => num % 2 === 0) console.log(pares)
// Correcto, puedes utilizar el método filter() para filtrar los números pares en un array y crear un nuevo array con los elementos que cumplan la condición especificada. Aquí tienes el código para lograrlo: 
const numeros2 = [33, 27, 34, 30, 34, 25, 0, 1]

let pares = numeros2.filter((num) => num % 2 === 0)

console.log(pares) // Imprimir el nuevo array con los números pares

/* El método filter() recorre cada elemento del array numeros y devuelve un nuevo array que contiene solo los elementos que cumplen la condición de ser números pares (num % 2 === 0).
Al imprimir pares, se mostrará el nuevo array que contiene solo los números pares del array original numeros. La salida será:
[34, 30, 34, 0]
Este nuevo array contiene los números pares presentes en el array original.*/



// Utilizar el metodo para obtener la suma total de los numeros. let sumatoria = numeros. reduce((acum, num) => acum + num) console.log(sumatoria)
// Perfecto, puedes utilizar el método reduce() para obtener la suma total de los números en un array. Aquí tienes el código para lograrlo:
const numeros3 = [33, 27, 34, 30, 34, 25, 0, 1]

let sumatoria = numeros3.reduce((acum, num) => acum + num)

console.log(sumatoria) // Imprimir la suma total de los números

/* El método reduce() recorre cada elemento del array numeros y acumula el valor en la variable acum. En cada iteración, se suma el elemento num al acumulador acum. Al finalizar, se obtiene la suma total de todos los números en el array.
Al imprimir sumatoria, se mostrará la suma total de los números en el array original numeros. La salida será:
184
Este valor representa la suma de todos los números en el array.*/



// Desarrollar una funcion para obtener el promedio de los numeroa, utilizando metodos de array. 

let misMascotas = [
    {
        nombre: "Roma",
        raza: "Negra",
        edad: 2,
        sonido: "miau",
    },
    {
        nombre: "Pachi",
        raza: "Blanco y negro",
        edad: 6,
        sonido: "miau",
    },

    {
        nombre: "Bruna",
        raza: "Ovejera",
        edad: 7,
        sonido: "guau",
    },
    {
        nombre: "Milka",
        raza: "Angus",
        edad: 11,
        sonido: "muu",
    }
]

let sumaEdades = misMascotas.reduce((acum, mascota) => acum + mascota.edad, 0)
console.log(sumaEdades);


function reductor(acum, numero) {
    return acum + numero.edad
}

let sumaEdades2 = misMascotas.reduce(reductor, 0)
console.log(sumaEdades) 


// ejemplo de modificacion y agregacion con spread operator
let mascotas = misMascotas.map((mascota) => {
   return {...mascota, sonido: mascota.sonido.toUpperCase()}
})
console.log(mascotas)


let otrasMascotas = [
    ...misMascotas,
    {
        nombre: "alleria",
        raza: "tricolor",
        edad: 1,
        sonido: "miau",
    },
]

console.log(otrasMascotas)