const prompt = require("prompt-sync")({ sigint: true });

//let nombre = prompt("Ingrese su nombre: ");
//console.log(`Hola ${nombre}!!!`);


let edad = 33
console.log(edad)

let precio = 234.10
console.log(precio)

//let nombre = "Ibis"
//console.log(nombre)

let verdadero = true
console.log(verdadero)

let falso = false
console.log(falso)

// Dato de tipo NaN

let notANumber = NaN
console.log(notANumber)

// Dato de tipo null

let nulo = null
console.log(nulo)

// Dato undefined

let sinValor = "sinValor"
console.log(sinValor)

// Dato del tipo objeto literal

//let persona = {
   // nombre: 'Nacho',
    //edad: 33
////}
//console.log(persona)


// Dato del tipo array

let paises = [ `Argentina`, `venezuela`, `Colombia` ];
console.log(paises)



// OPERADORES JS

// Sumar

console.log(5+4)

// Restar

console.log(10-6)

// Multipliucacion

console.log(10*6)

// Division

//console.log(10/6)

// Modulo: Este operador se encarga de retornar el resto o residuo de una operacion.

let numero_ = (numeroA,numeroB) => numeroA % numeroB
console.log(numero_(5,2))
//valor= 1

// Incremento: Este operador se encarga de poder sumar o restar una unidad o un numero determinado

let numero = 6
console.log(++numero)

// Decremento

let otroNumero = 10
console.log(--otroNumero)

// Comparacion simple: Nos permite preguntar si un valor es igual otro. Por ejemplo si comparo 
//5 == 7 (5 es igual a 7), podemos usar este operador.

let numeroy = (numeroA,numeroB) => numeroA == numeroB
console.log(numeroy(5,'5')
//valor= true ----> dato booleano

// Comparacion estricta: hace lo mismo que la comparacion simple, pero ademas de comparar el
// valor tambien pregunta sii el tipo de dato es el mismo. Para que la respuesta sea un booleano
// true tanto el tipo de dato como el valor tienen que exactamente lo mismo. Ejemplo  5 === "5"
// es false, pues el valor es el mismo (5 es un numero) y el dato no lo es ("5 es un string").
console.log( 5 ==='5') // false
console.log( 5 === 5 ) // verdadero ---> valor y dato exactamente iguales

// Desigualdad simple: Se pregunta si un dato es distinto de otro, en su valor. (5 != '5' (5 es distinto a como 5 string , en este caso es falso))

console.log( 5 != '5') // false. Solo pregunta por el valor. Y el valor no es distinto

// Desigualdad estricta: Se pregunta por el valor como por el tipo de dato.

console.log( 5 !== '5') //true. Pregunta por el valor y tipo de dato. Valor es igual pero el tipo de dato no.

// Mayor que : Un numero es mayor a otro. Estos operadores tienen repuestas booleanas.  (5 !== '5' (5 es distinto a como 5 string , en este caso es verdadero porque la desigualdad se da tanto en el valor como en el tipo de dato))

console.log( 10 > 6)

// Mayor o igual que

console.log( 10 >= 6)

// Menor

console.log( 7 < 7)

// Menor o igual que

console.log( 7 <= 7)

// Operadores logicos: Nos permiten unir sentencias de codigos por las cuales queremos preguntar.
// Operador AND &&
// let dia = "domingo"
// let clima = "soleado"
//dia == "domingo" && clima == "soleado" ----> Si queremos saber si el dia de la semanna es domingo y si esta haciendo un clima soleado.
// la respuesta de este cuestionamiento sera vallor booleanno true, siempre que toda la sentencia sean verdaderas de lo contrario toda la 
// evaluacion dara como falsa.

console.log( true && true) //true
console.log( false && true) //false

// Operador or || : Este operador es similar al AND, ya que sirve para preguntar varias senntencias a la vez
// Ejemplo: si quiero saber si el ocho es mayor o igual a quince (8 >= 15) o si el ocho es distinto de tres (8 != 3) utilizamos OR.
// Pero a diferencia del AND conn que solo una de las sentencia completa dara verdadero.
// 8 >= 15 ||  8 != 3 

console.log( true || true) //true
console.log( false || true) //true
console.log( false || false) //false

// Operacion de negacion ! : Este operador nos permite cambiar el valor a falso o verdadero dependiedo del valor que existia anteriormente.

// Concatenacion + : Este operador sirve para unir dos o mas cadena de texto en una sola. Une string y numero el resultado tambien sera
// un string, ya que un numero se convertiria en string.
//let nombre = 'Nacho'
//let apellido = 'Vuotto'
//console.log( nombre + `` + apellido ) ----> +''+ = espacio

// Los operadores logicos y de comparacion nos ayudann a comparar ciertos aspectos de nnuestras aplicaciones, asi como tambien
// hacerlas mas eficientes. existen 3 operadores logicos: AND (&&), OR (||) y NOT (!)
// AND todos los valores deben evaluar como true para que el resultado sea true.
// OR al menos un valor  debe evaluar como true para que el resultado sea true.
// NOT niega la condicion. Si era true, sera false o viceversa.



const holaMundo = 5;
console.log(holaMundo)

function elDoble (unNumero) {
    return unNumero * 2;
}
  
elDoble(6);
console.log(elDoble(6))


//Funcion expresada

let sumar = function(numeroA, numeroB){
    return numeroA + numeroB;
}

console.log(sumar(5, 5));

// Funcion declarada

function restar(numeroC, numeroD) {
    return numeroC - numeroD;
}

console.log(restar(5, 5));


// Ejemplo de scope global y local

//let mensaje = 'Hola';

//function saludar(){
    //let mensaje = 'chau'
  //  return mensaje
//}

//console.log(mensaje)
//console.log(saludar())

// Invocando una funcion

//function saludar(nombre,apellido) {
  //  return 'Hola' + nombre + '' +  apellido;
//}

//let saludar = denise => 'Hola, ' + denise + '!';

//console.log(saludar('Ibis', 'Fortunato'));


// Guardar los resultados. Para guardar lo que retorna una funcion, sera necesario almacenarlo en una variable.

//function hacerHelado(cantidad) {
  //  return 'Helado' .repeat(cantidad);
//}

//let misHelados = hacerHelado(3);
//console.log(misHelados);


// Practica cómo crear funciones.

//function ejemplo() {
  //  return "hola, soy una funcion"
//}
//console.log(ejemplo());

//let ejemplo = function () {
  //  return "hola, soy una funcion expresada";
//}
//console.log(ejemplo());

function saludar(nombre, apellido) {
    return 'Hola, ' + nombre + ' ' + apellido + '!';
}

console.log(saludar());


//function anterior(unNumero) {
  //  return unNumero - 1;
//}
//console.log(anterior(5));

function anteriorDelTriple(unNumero) {
    return (unNumero * 3) - 1;
}
console.log(anteriorDelTriple(5));


// Practica la sintaxis de una arrow function que no recibe parámetros

let dameCinco = () => [1,2,3,4,5];
console.log(dameCinco());

let multiplicarPorDos = () => 123 * 2;
console.log(multiplicarPorDos());

//let mostrarNombre = () => "Mi nombre es Hernán";
//console.log(mostrarNombre());

// Arrow-functions

let laMitad = numero => numero / 2;
console.log(laMitad(8));

let dividir = (numeroA, numeroB) => numeroA / numeroB;
console.log(dividir(20,4));


// Ahora nuestro trabajo será refactorizar la función saludar() que recibe un parámetro, es decir, escribirla con la sintaxis necesaria para convertirla en una arrow function.

//function saludar(nombre) {
  // return 'Hola, ' + nombre + '!';
//}
//let saludar = denise => 'Hola, ' + denise + '!';

//let saludar = (nombre,apellido) => 'Hola, ' + nombre + ' ' +  apellido + '!';

const nombre = "Ibis"
console.log(nombre)



// Condicionales

// IF

if(clima == 'soleado' && dia == 'domingo') {
  console.log('lindo dia para pasear')
}

// Dejo el resumen que tenia de este tema por si alguna le sirve:

// ### Condicionales If - Else If - Else

if (condición) {
    // hacer esto (la condición es true)
} else if (condicion 2) {
    // hacer otra cosa, porque la condición 1 no se cumplió (es false), pero la condicion 2 si (verdadera)
} else {
    //hacer esto si ninguna de las 2 condiciones se cumplio
}

// Pueden utilizarse tanto "Else If" como se desee. 
// El primero que sea verdadero, será el *único* en ejecutarse, ya que el codigo no comprobara el resto (En caso de desear que siga comprobando, se deberian usar varios IFs, no Else ifs). 
// Es posible anidar Ifs, si lo que se busca es que el if anidado se ejecute solamente si el nido es true.

// if else es para evaluar 2 condiciones y else if cuando debes evaluar más de 2 condiciones 

// if (condicion 1){
// } else if (condicion 2){
//  } else (si nuinguna de las dos se cumple){
// }






// IF TERNARIO Y SWITCH
// Lo primero a tener en cuenta es que estos son condicionales que nos permite preguntar si unn bloque de codigo cumple coonn cierta condicion o no
// para posteriormente ejecutar otro codigo otro bloque de codigo segunn corresponda.

// IF ternario, se escribe de forma horizontal, no lleva llaves, if,else. IMPORTANTE 
// condicion ? expresion para el true : expresion para el false;

let elMayor = 4 > 10 "El 4 es mayor" : "El 10 es mayor";
console.log(" elMayor"); // El 10 es mayor

// SWITCH
// Tiene una estructura algo diferente al if pero basicamennte hace lo mismo
// Pregunnta por algo --> si ese algo es verdadero --> ejecutar un bloque de codigo

switch (expresion) {
   case caso1:
     console.log("se cumple el cas 1");
  break;
}

let fruta = 'manzana';
let resultado = fruta == 'manzana' ? 'Buenisimo, me gustan las manzanas';
console.log("resultado");


let dia = "domingo";
switch (dia) {
  case "lunes":
    console.log("Es lunes, se labura");
  break;
  case "sabado":
    console.log("Es sabado, se sale");
  break;
  case "domingo":
    console.log("Es domingo, se come asado");
  break;
  default:
    console.log("No es lunes ni sabado ni domingo");
  break;
}

let semaforo = 'otro color';
switch (semaforo) {
  case "verde":
    console.log("puedo cruzar");
  break;
  case "amarillo":
    console.log("Precaucion");
  break;
  case "rojo":
    console.log("No cruces, hay que esperar");
  break;
  default:
    console.log("No funciona el semaforo");
  break;
}

function tengoClases(dia) {
  switch (dia) {
  case 'lunes':
  console.log("tenés clases");
  break;
  case 'miércoles':
  console.log("tenés clases");
  break;
  case 'viernes':
  console.log("tenés clases");
  break;
  default:
  console.log("no tenés clases");
  }
  }

// IF ternario --> Es una linea de codigo resumida para hacer evaluaciones.
// Switch --> Trabajar conn el siempre y cuando quieras evaluar si una expresion 
// es exactamennte igual a un valor esperado.


// Ciclos: for loop

// Un ciclo —ya sea en programación o en la vida cotidiana— es una serie
// de estados por los que pasa un acontecimiento o fenómeno, que se
// repiten siempre en el mismo orden. En programación, para hacer que
// nuestro código se siga ejecutando .
// Los ciclos nos permiten repetir instrucciones de manera sencilla. Podemos hacerlo una determinada
// cantidad de veces o mientras se cumpla una condición.  

// Estructura básica
// Consta de 3 partes que definimos dentro de los paréntesis. En conjunto, nos
// permiten determinar de qué manera se van a realizar las repeticiones y
//definir las instrucciones que queremos que se lleven a cabo en cada una de ellas.

//  for (inicio; condición ; modificador) {
// (código que se ejecutará en cada repetición)
// }

// Estructura básica
// for (let vuelta = 1; vuelta <= 5; vuelta++) {
// console.log('Dando la vuelta número ' + vuelta);
//};

//Dando la vuelta número 1
//Dando la vuelta número 2
//Dando la vuelta número 3
//Dando la vuelta número 4
//Dando la vuelta número 5

// for (let vuelta = 1; vuelta <= 5; vuelta++) {
// console.log('Dando la vuelta número ' + vuelta);
// };
// Inicio --> Antes de arrancar el ciclo, se establece el valor inicial de nuestro contador.

// for (let vuelta = 1; vuelta <= 5; vuelta++) {
// console.log('Dando la vuelta número ' + vuelta);
// };
// Condición --> Antes de ejecutar el código en cada vuelta, se pregunta si la condición resulta verdadera o falsa.
// Si es verdadera, continúa con nuestras instrucciones.
// Si es falsa, detiene el ciclo.

// for (let vuelta = 1; vuelta <= 5; vuelta++) {
// console.log('Dando la vuelta número ' + vuelta);
// };
// Modificador —incremento o decremento— --> Luego de ejecutar nuestras instrucciones, se modifica nuestro contador de la manera que hayamos especificado. En este caso se le suma ǻ, pero podemos
// hacer la cuenta que queramos.

// El ciclo for en acción --> En cada ciclo se verifica si el valor de vuelta es menor o igual a ǿ. Si es así, se ejecuta el console.log() y se incrementa el valor de vuelta en ǻ.
// Cuando vuelta deje de ser menor o igual a ǿ, se corta el ciclo.
// Iteración #   Valor de vuelta   ¿Vuelta <= 5 ?   Ejecutamos
//     1                1               true            bien
//     2                2               true            bien
//     3                3               true            bien
//     4                4               true            bien
//     5                5               true            bien
//     6                6               false           mal



//++Variable vs Variable++

// Estas son conocidas como pre y post incremento, aunque tambien se puede aplicar para la resta (decremento).

// Si tomamos como ejemplo:   
// x=0
// y=++x
// z=x++
// El resultado de la primera parte seria x=1 e y=1, porque primero se incrementa el valor de x (++), y luego, se le asigna este valor a y. 
// Para la segunda parte, z=1 y x=2, esto porque primero, se le asigna a z el valor de x, y luego el valor de x es incrementado. 

// Por ende el resultado del ejemplo sería:  
// x=2   
// y=1 
// z=1

// Resumidamente, en el pre incremento, primero se incrementa la variable, y luego se devuelve, mientras que en el post incremento, primero se devuelve la variable y luego se incrementa.




/* // while
function tablaDeMultiplicar(numero) {
  var i = 1; 
 while (i <= 10){
     let resultado = numero * i;
     console.log(numero + '*' + i + '=' + resultado) 
     i++;
 }

}

tablaDeMultiplicar(5);
 */
let misMascotas = [
  {
      nombre: "Roma",
      raza: "N¿egra",
      edad: 2,
      sonido: "miau",
      repetirSonido: function() {
          return this.sonido*2;
      },
  },
];


console.log(misMascotas[0].nombre);
console.log(misMascotas[1].raza);