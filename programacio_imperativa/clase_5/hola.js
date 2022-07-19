const prompt = require("prompt-sync")({ sigint: true });


/* function test1(x,y) {
    return x * 2
    console.log(x)
    return x / 2
}
 */
console.log(test1(10))


//let nombre = prompt("Ingrese su nombre: ");
//console.log(`Hola ${nombre}!!!`);


// Funciones simples

//Crear una función que convierta pulgadas en centímetros. Recibe por parámetro pulgadas y retorna su equivalente en centímetros.

//let ConvertirPulgadaACentimetro = numero => numero * 2.54
//console.log(ConvertirPulgadaACentimetro(2,2.54))

//function ConvertirPulgadaACentimetro(unNumero) {
   //return (unNumero * 2.54);
//}
//console.log(ConvertirPulgadaACentimetro(2,2.54))


//Crear una función que recibe un string y lo convierte en una URL.
//Ej: “pepito” es devuelto como “http://www.pepito.com”

//let convertirEnUrl = prompt("Ingrese su URL: "); 
//console.log(`http://www.${convertirEnUrl}.com !!!`);


//Crear una función que recibe un string y devuelve la misma frase pero con admiración.

//let frase = prompt("Ingrese frase: ") 
//console.log(`${frase}!!!`)


// Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.

//let edadDelPerro = año => año * 7;
//console.log(edadDelPerro(2));


// Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro.
//PD: considerá que tu mes de trabajo tiene 40 horas.

//let horaLaboral = sueldoMensual => sueldoMensual / 40;
//console.log(horaLaboral(40000));


// Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
//probando diferentes valores.

/* let calculadorIMC = () =>  {
    l
}
console.log(calculadorIMC())

 */
// PASAR STRING A NUMERO

/* var weight = prompt('Escribe tu peso');
var height = prompt('Escribe tu estatura');

var bmi = parseFloat(weight) / Math.pow(parseFloat(height), 2);

console.log('tu BMI es ' + bmi);.. */

/* Crear una función que recibe un string en minúscula, lo convierta a mayúsculas
y lo retorne.
Investigá qué hace el método de strings .toUpperCase() */

let nombre = "helado";
console.log(nombre.toUpperCase());