// Metodos de ordenacion II
/* Ejercicio 1
En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.*/

// Para ordenar los valores de likes obtenidos por cada usuario en un array, podemos utilizar el método de ordenación "sort" en JavaScript. A continuación, te muestro cómo puedes realizarlo:

// Array de likes obtenidos por cada usuario
const likes = [120, 80, 200, 150, 90, 300, 250, 180, 160, 130, 100, 220, 190, 110, 140]

// Ordenar de forma ascendente
likes.sort((a, b) => a - b)

// Obtener los valores de likes en el orden deseado
const mayorLikes = likes[likes.length - 1]
const segundoLikes = likes[likes.length - 2]
const tercerLikes = likes[likes.length - 3]
const menorLikes = likes[0]

// Imprimir los resultados
console.log("La mayor cantidad de likes obtenidos: " + mayorLikes)
console.log("La segunda mayor cantidad de likes obtenidos: " + segundoLikes)
console.log("La tercera mayor cantidad de likes obtenidos: " + tercerLikes)
console.log("La menor cantidad de likes obtenidos: " + menorLikes)

/* La mayor cantidad de likes obtenidos: 300
La segunda mayor cantidad de likes obtenidos: 250
La tercera mayor cantidad de likes obtenidos: 220
La menor cantidad de likes obtenidos: 80 */
// El método sort se utiliza para ordenar los elementos del array de likes en orden ascendente. Luego, podemos acceder a los valores en el orden deseado utilizando los índices correspondientes.


/* El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
objeto temperatura donde registra día —valor numérico del día—, mes —valor
numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
día. Las temperaturas —objeto temperatura— están cargados en un array.
a) Ordenar por temperatura mínima de menor a mayor.
b) Ordenar por temperatura máxima de mayor a menor. */

/* Para ordenar los objetos de temperatura en un array según los criterios dados, podemos utilizar el método sort() en JavaScript, pasando una función de comparación personalizada. A continuación, te muestro cómo puedes realizarlo:*/
// Array de objetos de temperatura
const temperaturas = [
	{ dia: 1, mes: 5, temperaturaMaxima: 28, temperaturaMinima: 15 },
	{ dia: 2, mes: 5, temperaturaMaxima: 26, temperaturaMinima: 14 },
	{ dia: 3, mes: 5, temperaturaMaxima: 30, temperaturaMinima: 18 },
	{ dia: 4, mes: 5, temperaturaMaxima: 23, temperaturaMinima: 12 },
	{ dia: 5, mes: 5, temperaturaMaxima: 25, temperaturaMinima: 16 }
];
  
// a) Ordenar por temperatura mínima de menor a mayor
temperaturas.sort((a, b) => a.temperaturaMinima - b.temperaturaMinima)
  
console.log("Ordenado por temperatura mínima de menor a mayor:")
console.log(temperaturas)
  
// b) Ordenar por temperatura máxima de mayor a menor
temperaturas.sort((a, b) => b.temperaturaMaxima - a.temperaturaMaxima)
  
console.log("Ordenado por temperatura máxima de mayor a menor:")
console.log(temperaturas)
  
/*   Ordenado por temperatura mínima de menor a mayor:
  [
	{ dia: 4, mes: 5, temperaturaMaxima: 23, temperaturaMinima: 12 },
	{ dia: 2, mes: 5, temperaturaMaxima: 26, temperaturaMinima: 14 },
	{ dia: 5, mes: 5, temperaturaMaxima: 25, temperaturaMinima: 16 },
	{ dia: 1, mes: 5, temperaturaMaxima: 28, temperaturaMinima: 15 },
	{ dia: 3, mes: 5, temperaturaMaxima: 30, temperaturaMinima: 18 }
  ]
  
  Ordenado por temperatura máxima de mayor a menor:
  [
	{ dia: 3, mes: 5, temperaturaMaxima: 30, temperaturaMinima: 18 },
	{ dia: 1, mes: 5, temperaturaMaxima: 28, temperaturaMinima: 15 },
	{ dia: 2, mes: 5, temperaturaMaxima: 26, temperaturaMinima: 14 },
	{ dia: 5, mes: 5, temperaturaMaxima: 25, temperaturaMinima: 16 },
	{ dia: 4, mes: 5, temperaturaMaxima: 23, temperaturaMinima: 12 }
  ] */
  
/* En el caso de ordenar por temperatura mínima de menor a mayor, la función de comparación a.temperaturaMinima - b.temperaturaMinima se utiliza para especificar el criterio de ordenamiento. Para ordenar por temperatura máxima de mayor a menor, se utiliza b.temperaturaMaxima - a.temperaturaMaxima como función de comparación.*/


// Ordenar una colección de personas por una propiedad

let personas = [
	{
		nombre: "Dua",
		apellido: "Lipa",
		ocupacion: "cantante",
		estatura: 173
	},
	{
		nombre: "Ariana",
		apellido: "Grande",
		ocupacion: "cantante",
		estatura: 160
	},
	{
		nombre: "Taylor",
		apellido: "Swift",
		ocupacion: "cantante",
		estatura: 180
	}
];

//Si deseas ordenar la colección de personas por una propiedad específica, puedes utilizar el método sort() en JavaScript y proporcionar una función de comparación personalizada. A continuación, te muestro cómo puedes hacerlo:

// Ordenar por estatura de menor a mayor
personas.sort((a, b) => a.estatura - b.estatura)

console.log("Ordenado por estatura de menor a mayor:")
console.log(personas)

// Ordenar por estatura de mayor a menor
personas.sort((a, b) => b.estatura - a.estatura)

console.log("Ordenado por estatura de mayor a menor:")
console.log(personas)

/* Ordenado por estatura de menor a mayor:
[
  {
    nombre: 'Ariana',
    apellido: 'Grande',
    ocupacion: 'cantante',
    estatura: 160
  },
  {
    nombre: 'Dua',
    apellido: 'Lipa',
    ocupacion: 'cantante',
    estatura: 173
  },
  {
    nombre: 'Taylor',
    apellido: 'Swift',
    ocupacion: 'cantante',
    estatura: 180
  }
]
 */
/* Ordenado por estatura de mayor a menor:
[
  {
    nombre: 'Taylor',
    apellido: 'Swift',
    ocupacion: 'cantante',
    estatura: 180
  },
  {
    nombre: 'Dua',
    apellido: 'Lipa',
    ocupacion: 'cantante',
    estatura: 173
  },
  {
    nombre: 'Ariana',
    apellido: 'Grande',
    ocupacion: 'cantante',
    estatura: 160
  }
]
 */
//En el ejemplo anterior, ordenamos la colección de personas por la propiedad "estatura". Para ordenar de menor a mayor, utilizamos la función de comparación a.estatura - b.estatura. Para ordenar de mayor a menor, utilizamos b.estatura - a.estatura.
