const prompt = require('prompt-sync')()

/* Si quisiéramos restringir el acceso a una discoteca, tendríamos que saber si la
persona es mayor o menor de edad. */

/* if (edad>=18){
console.log("Puede pasar")
}else{
console.log("No puede pasar")
} */

/* Revisá el siguiente código y asegurate de entenderlo para poder avanzar con el ejercicio. */

/* let edad = 20 
if(edad < 18) {
console.log("No puede pasar al bar.")
} else if (edad < 21){
console.log("Puede pasar al bar, pero no puede tomar alcohol.")
} else {
console.log("Puede pasar al bar y tomar alcohol.")
} */


/* ● Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad
inválida. Por favor ingrese un número válido."
Importante: no se deberá mostrar ningún otro mensaje.
● Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a
la mayoría de edad.
● Si su edad es impar, decirle en cualquiera de los mensajes: "¿Sabías que tu
edad es impar?". */

/* function esMayorDeEdad(edad) {
    if (edad < 0) {
        return "Error, edad inválida. Por favor ingrese un número válido."
    } else if (edad === 21) {
        return "Felicidades eres mayor de edad"
    } else if (edad % 2 !== 1) {
        return "Es par"
    } else {
        return "¿Sabías que tu edad es impar?"
    }
}
 */
//console.log(esMayorDeEdad(21));


/* Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y
litrosConsumidos.
A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en
cuenta las siguientes consideraciones:
● Si el vehículo es “coche”, el precio por litro es de $86.
● Si es “moto”, ha de ser $70.
● Si es “autobús”, ha de ser $55.
● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.*/

/* function totalAPagar(vehiculo, litrosConsumidos) {
    let precioPorLitro
    if (vehiculo == "coche") {
        precioPorLitro = 86 * litrosConsumidos
    } else if ( vehiculo == "moto") {
        precioPorLitro = 70 * litrosConsumidos
    } else if (vehiculo == "autobus") {
        precioPorLitro = 55 * litrosConsumidos 
    }

let totalAPagar = litrosConsumidos * precioPorLitro 
    if (litrosConsumidos > 0 && litrosConsumidos < 25) {
        totalAPagar += 50
    } else if (litrosConsumidos > 25){
        totalAPagar += 25
    }
    return totalAPagar
}

const vehiculo = "coche"
const litros = 20
const resultado = totalAPagar(vehiculo, litros)
console.log("Total a pagar:", resultado) */






function totalAPagar(vehiculo, litrosConsumidos) {
    let precioPorLitro
  
switch (vehiculo) {
    case "coche":
        precioPorLitro = 86;
        break;
    case "moto":
        precioPorLitro = 70;
        break;
    case "autobús":
        precioPorLitro = 55;
        break;
    default:
        console.log("Vehículo no válido")
    return
}
  
let totalAPagar = litrosConsumidos * precioPorLitro
  
if (litrosConsumidos <= 25) {
    totalAPagar += 50
    } else {
    totalAPagar += 25
    }
   return totalAPagar
}

  
const vehiculo = "coche"
const litros = 20
const resultado = totalAPagar(vehiculo, litros)
console.log("Total a pagar:", resultado) 



//condicion ? if condicion es verdadera : if condicion es falsa
//const edad = 32;
//const ciudadano = edad >= 18 ? "Puede votar" : "No puede votar";


/*Local de sándwiches
Necesitamos armar el sistema para un local de venta de sándwiches. Los clientes
eligen el sándwich base que tiene un precio y, por cada selección siguiente, se le suma
el valor de su selección al precio. Por ejemplo, partiendo de un sándwich base
vegetariano con un precio x, después se selecciona pan negro con un precio y, por lo
que el total a pagar sería x+y, y así sucesivamente con el resto de los ingredientes.
Como es un local que ya tenía un sistema previo, ellos ya tienen toda la interfaz
donde el usuario elige cada ingrediente, lo que nos facilita el trabajo, ya que nosotros
recibiremos los datos de la siguiente manera.
Nos llega un string indicando el tipo de sándwich base. Estos tienen un valor base
diferente por cada selección:
● Pollo = $150 (“pollo”)
● Carne = $200 (“carne”)
● Vegetariano (verduras asadas) = $100 (“veggie”)
Luego, el sistema pregunta al cliente qué tipo de pan quiere. Tienen para elegir entre
otras tres opciones, por lo que recibiremos también otro string con el tipo de pan
deseado:
● Blanco c/orégano y parmesano = $50 (“blanco”)
● Negro c/avena = $60 (“negro”)
● Sin gluten = $75 (“s/gluten”)
Para finalizar, el sistema avanza preguntando al cliente si quiere los siguientes
adicionales:
● Queso = $20
● Tomate = $15
● Lechuga = $10
● Cebolla = $15
● Mayonesa = $5
● Mostaza = $5
Cada uno de estos adicionales están representados por booleanos —es decir, true o
false—, dependiendo de si aceptan o no cada uno de los adicionales —nos llegan un
total de seis valores booleanos, uno por cada adicional—.
Nuestro trabajo es crear una función que reciba estos ocho parámetros —un string
para el sándwich base, uno para el pan y los seis booleanos de los adicionales—. La
función deberá consultar primero qué tipo de sándwich base se seleccionó, luego el
tipo de pan, y por último deberá verificar qué adicionales se seleccionaron.
Finalmente, deberá retornar el valor numérico del total a pagar del cliente. */

/* function calcularTotalAPagar(sandwichBase, tipoPan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) {
    let precioBase
  
switch (sandwichBase) {
    case "pollo":
        precioBase = 150;
        break;
    case "carne":
        precioBase = 200;
        break;
    case "veggie":
        precioBase = 100;
        break;
    default:
        console.log("Sándwich base no válido");
    return;
}
  
let precioPan
  
switch (tipoPan) {
    case "blanco":
        precioPan = 50;
        break;
    case "negro":
        precioPan = 60;
        break;
    case "s/gluten":
        precioPan = 75;
        break;
    default:
        console.log("Tipo de pan no válido")
    return
}
  
let totalAdicionales = 0
  
if (queso) {
    totalAdicionales += 20
    }
if (tomate) {
    totalAdicionales += 15
    }
if (lechuga) {
    totalAdicionales += 10
    }
if (cebolla) {
    totalAdicionales += 15
    }
if (mayonesa) {
    totalAdicionales += 5
    }
if (mostaza) {
    totalAdicionales += 5
}
  
const totalAPagar = precioBase + precioPan + totalAdicionales
return totalAPagar
}

const sandwichBase = "pollo"
const tipoPan = "blanco"
const queso = true
const tomate = true
const lechuga = false
const cebolla = true
const mayonesa = true
const mostaza = false
  
const totalAPagar = calcularTotalAPagar(sandwichBase, tipoPan, queso, tomate, lechuga, cebolla, mayonesa, mostaza);
console.log("Total a pagar:", totalAPagar) 
 */

/* ¿Cuál es el número secreto?
Creá una función que reciba un parámetro numérico y verifique si el mismo es el
número secreto. El número secreto deberá ser seleccionado de manera random de
entre 1 y 10 —investigá qué hace la función Math.random()—. En caso de ser correcto,
retorna un mensaje felicitando al usuario y, en caso de que no acierte, retorna un
mensaje de aliento junto con el número ingresado y el secreto.*/

/* function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}

function gettRandomInt(numA) {
    let nroSecreto = getRandomInt(2,10)
    console.log(nroSecreto)
    msg = nroSecreto == numA 
    ? "Felicidades es el numero secreto." 
    : "Sigue intentando, no es el numero secreto"
    return msg
}

console.log(gettRandomInt(9))
 */

/* Crea una función llamada abrirParacaidas() que recibe dos parámetros: velocidad y
altura. La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta lo
siguiente:
● La velocidad debe ser menor a 1000 km/h.
● La altura debe ser mayor o igual a 2000 m y menor a 3000 m.*/

/* function abrirParacaidas(velocidad, altura) {
    if (velocidad < 1000 && altura >= 2000 && altura < 3000) {
        return "El paracaidas podra abrirse"
    } else {
        return "El paracaidas no podra abrirse"
    }
} 

const velocidad = 800; // km/h
const altura = 2500; // metros

const resultados = abrirParacaidas(velocidad, altura)
console.log(resultados)
 */

/*
En estos ejercicios utilizaremos variables que contengan los valores para simular el
ingreso de data de un usuario. Es decir, una variable stringUno que contenga —por
ejemplo— el valor “perro”, que sería lo que el usuario “ingresa” como valor en nuestro
programa.
Traductor condicional
Usando la estructura switch, crea un programa en el que si un usuario ingresa "casa",
"perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma
inglés.
En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le
informe que la palabra ingresada es incorrecta.*/

/* let stringUno =  "perro"

function finDeSemana(stringUno) {	
    switch (stringUno) {
        case 'casa':
            console.log('house');
            break;
        case 'perro':
            console.log('dog');
            break;
        case 'arbol':
            console.log('tree');
            break;    
    default:
      console.log('La palabra ingresada es incorrecta');
    }
} 

console.log(finDeSemana(stringUno));
 */

/*Valoración de películas
Usando la estructura switch, pedirle al usuario que valore la película que acaba de ver
según la siguiente escala:
● Muy mala.
● Mala.
● Mediocre.
● Buena.
● Muy buena.
Acompaña cada valoración con un mensaje que indique si te lamentás o te alegrás
por su valoración.
Por ejemplo: "Calificaste la película como Muy Mala. Lo lamentamos mucho.".
En caso de que ingresara un valor distinto, mostrarle el mensaje: "Ingresaste un valor
inválido".
Cuando el usuario haya valorado la película, agradecerle su visita. */

/* let valoracion =  "Muy buena"

function finDeSemana(valoracion) {	
    switch (valoracion) {
        case 'Muy mala':
            console.log('Calificaste la película como Muy Mala. Lo lamentamos mucho. Gracias por su visita');
            break;
        case 'Mala':
            console.log('Calificaste la película como Mala. Lo lamentamos mucho. Gracias por su visita');
            break;
        case 'Mediocre':
            console.log('Calificaste la película como Mediocre. Lo lamentamos mucho. Gracias por su visita');
            break;    
        case 'Buena':
            console.log('Calificaste la película como Buena. Nos alegramos mucho. Gracias por su visita');
            break;
        case 'Muy buena':
            console.log('Calificaste la película Muy buena. Nos alegramos mucho. Gracias por su visita');
            break;        
    default:
      console.log('Ingresaste un valor inválido');
    }
} 

console.log(finDeSemana(valoracion)); */