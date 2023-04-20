/* ARREGLO DE OBJETOS

Debes crear una funcion llamada arregloDeObjetos que reciba un numero como parametro y devuelva un
arreglo de objetos que tenga una propiedad llamada 'valor' que contenga el valor del numero y sus 
anteriores. 

Ejemplos:
arregloDeObjetos(5) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4}, {valor: 5}]
arregloDeObjetos(3) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}] */

/* Paso a paso:
- Definir/crear la funcion con un parametro
    - Crear arreglo vacio
    - "Rellenar el arreglo"
      - Crear el for (con todo lo que conlleve)
      - El bucle llega hasta el parametro
        - Crear el objeto
        - Arreglarlo al Array
      - Fin del bucle
    - Retornar el arreglo
- Fin funcion */

function arregloDeObjetos(num) {
  let arrObjetos = []
  for (let i = 1; i <= num; i++) {
    let obj = { valor: i }
    arrObjetos.push(obj)
  }
  return arrObjetos
}

console.table(arregloDeObjetos(5));



// OBJETOS LITERALES

/* Ejercicio1: Creando un objeto literal
Vamos a ver cómo crear nuestro objeto "perro":
Declarar una variable llamada perro de tipo objeto literal.
Esa variable debe tener 3 propiedades:
1. nombre, con un valor de tipo String.
2. edad, con un valor de tipo Number.
3. vacunado, con un valor de tipo Boolean. 
Recordar que un objeto literal se declara con las llaves { }
*/

let perro = {
  nombre: 'cratos',
  edad: 3,
  vacunado: true,
}


E/* jercicio 2: Objetos entrenadores
Vamos a reforzar el concepto de un objeto literal tratando de representar un deportista y pedirle que entrene.
Para este ejercicio contamos con un objeto literal deportista ya definido, que tiene los siguientes atributos: nombre, energia, experiencia.

Queremos poder pedirle al deportista que entrene. Para esto, nuestro trabajo va a ser completar la función entrenarHoras.

La función entrenarHoras tiene las siguientes tres características:

Recibe por parámetro la cantidad de horas.
Resta a su energía (this.energia) la cantidad de horas x 5.
Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
Una vez definida la función, podemos ejecutar el código y ver cómo va variando la energía y experiencia del deportista por consola 
Recordemos que para modificar el contenido de un atributo dentro de una función debemos anteponer el this.
*/

let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function (horas) {
        this.energia -= horas * 5;
        this.experiencia += horas * 2;
    },
};

deportista.entrenarHoras

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);


