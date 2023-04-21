/* Ejercicio 1
Dado un array con los datos de una encuesta realizada sobre los temas musicales
más populares —lo que se tiene en el array son objetos definidos con el nombre de
un tema musical y cantidad de votos que obtuvo— crear el array con los datos de 5
temas, crear los objetos con los temas que prefieran, y una cantidad de votos para
cada uno.
Los votos obtenidos están desordenados.
Escribir un algoritmo que, dado un tema, me informe cuántos votos obtuvo.
a) Resolverlo aplicando búsqueda lineal.
b) Resolverlo aplicando búsqueda binaria */




const numeros = [33, 27, 34, 30, 34, 25, 0, 1]

//  .forEach(): "significa por cada uno va hacer algo". Su particularidad no retorna nada, solo se 
//  usa para mostrar algoo modificar algo de lo que estoy haciendo

    
/*  Recorrer el array utilizando el metodo .forEach() imprimir cada uno de los elementos.
    numeros.forEach((num) => console.log(num})  
*/


/*  Utilizar un metodo de array para recorrer todos sus elementos e incrementar su valor en 1.
    console.log(numeros);
    let numeroCopia = numeros.map((num) => num + 1)
    console.log(numeroCopia)
*/


/*  Utilizar un metodo para filtrar los numeros pares e imprimir el nuevo array.
    let pares = numeros.filter((num) => num % 2 === 0)
    console.log(pares)
*/ 


/*  Utilizar el metodo para obtener la suma total de los numeros.
    let sumatoria = numeros. reduce((acum, num) => acum + num)
    console.log(sumatoria)
*/


/*  Desarrollar una funcion para obtener el promedio de los numeroa, utilizando metodos de array.
*/  let misMascotas = [
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


/* function reductor(acum, numero) {
     return acum + numero.edad
    }
    let sumaEdades2 = misMascotas.reduce(reductor, 0)
    console.log(sumaEdades) 
*/


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