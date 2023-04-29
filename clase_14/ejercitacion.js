//A partir de el siguiente array de edades nos solicitan realizar lo siguiente:

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

// Obtener las edades menores a 18
const edadesMenores18 = edades.filter(edad => edad < 18);
console.log("Edades menores a 18:", edadesMenores18);

// Obtener las edades mayores o iguales a 18
const edadesMayoresIgual18 = edades.filter(edad => edad >= 18);
console.log("Edades mayores o iguales a 18:", edadesMayoresIgual18);

// Obtener las edades igual a 18
const edadesIgual18 = edades.filter(edad => edad === 18);
console.log("Edades igual a 18:", edadesIgual18);

// Obtener el menor
const menorEdad = Math.min(...edades);
console.log("Menor edad:", menorEdad);

// Obtener el mayor
const mayorEdad = Math.max(...edades);
console.log("Mayor edad:", mayorEdad);

// Obtener el promedio de edades
const sumatoriaEdades = edades.reduce((acumulador, edad) => acumulador + edad, 0);
const promedioEdades = sumatoriaEdades / edades.length;
console.log("Promedio de edades:", promedioEdades);

// Incrementar en 1 todas las edades
const edadesIncrementadas = edades.map(edad => edad + 1);
console.log("Edades incrementadas:", edadesIncrementadas);

/* Esta solución utiliza métodos de array como filter, reduce y map para realizar las operaciones requeridas.
-Para obtener las edades menores a 18, se utiliza el método filter con una condición que verifica si la edad es menor a 18.
-Para obtener las edades mayores o iguales a 18, se utiliza el método filter con una condición que verifica si la edad es mayor o igual a 18.
-Para obtener las edades igual a 18, se utiliza el método filter con una condición que verifica si la edad es igual a 18.
-Para obtener el menor, se utiliza la función Math.min junto con el operador de propagación (...) para pasar cada elemento del array como argumentos individuales.
-Para obtener el mayor, se utiliza la función Math.max junto con el operador de propagación.
-Para obtener el promedio de edades, se utiliza el método reduce para sumar todas las edades y luego se divide entre la longitud del array.
-Para incrementar en 1 todas las edades, se utiliza el método map para recorrer cada elemento del array y se le suma 1.
Esta solución es flexible y reutilizable, ya que se puede aplicar a otros arrays de edades simplemente cambiando el nombre del array en las operaciones. Por ejemplo, se pueden utilizar los arrays edadesGrupo1 y edadesGrupo2 mencionados al final.*/



//Correcto, el código proporcionado muestra un array de objetos literales. Cada elemento del array es un objeto literal representado por {}. A continuación, se presenta un ejemplo con el array de objetos literales completado:

const arrayDeObjetosLiteraless =
[
    {},
    {},
    {},
    {}
];

const arrayDeObjetosLiterales = [
  { nombre: "Juan", edad: 25, ciudad: "Buenos Aires" },
  { nombre: "María", edad: 30, ciudad: "Madrid" },
  { nombre: "Carlos", edad: 40, ciudad: "Lima" },
  { nombre: "Ana", edad: 35, ciudad: "Sao Paulo" }
];

/* En este ejemplo, cada objeto literal representa una persona con propiedades como nombre, edad y ciudad. El array arrayDeObjetosLiterales contiene cuatro elementos, cada uno de ellos es un objeto literal con diferentes valores para sus propiedades.
Este tipo de estructura de datos es útil cuando se desea almacenar una colección de elementos relacionados, donde cada elemento tiene su propio conjunto de propiedades. Puede acceder a las propiedades de cada objeto utilizando la sintaxis de punto o la sintaxis de corchetes, por ejemplo: objeto.propiedad o objeto["propiedad"].
Recuerda que puedes manipular y acceder a los objetos literales dentro del array utilizando métodos y operaciones adecuadas para trabajar con arrays y objetos literales.*/


// A continuación se presenta la resolución de los enunciados utilizando el array de cuentas arrayCuentas

const arrayCuentas =
[
  {
    titular: "Arlene Barr",
    estaHabilitada: false,
    saldo: 3253.40,
    edadTitular: 33,
    tipoCuenta: "sueldo"
  },
  {
    titular: "Roslyn Torres",
    estaHabilitada: false,
    saldo: 3229.45,
    edadTitular: 27,
    tipoCuenta: "sueldo"
  },
  {
    titular: "Cleo Lopez",
    estaHabilitada: true,
    saldo: 1360.19,
    edadTitular: 34,
    tipoCuenta: "corriente"
  },
  {
    titular: "Daniel Malone",
    estaHabilitada: true,
    saldo: 3627.12,
    edadTitular: 30,
    tipoCuenta: "sueldo"
  },
  {
    titular: "Ethel Leon",
    estaHabilitada: true,
    saldo: 1616.52,
    edadTitular: 34,
    tipoCuenta: "sueldo"
  },
  {
    titular: "Harding Mitchell",
    estaHabilitada: true,
    saldo: 1408.68,
    edadTitular: 25,
    tipoCuenta: "corriente"
  }
]


// Obtener un nuevo array de cuentas cuyas edades sean menores a 30:

const cuentasMenores30 = arrayCuentas.filter(cuenta => cuenta.edadTitular < 30);
console.log(cuentasMenores30);


// Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30:

const cuentasMayores30 = arrayCuentas.filter(cuenta => cuenta.edadTitular >= 30);
console.log(cuentasMayores30);


// Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30:

const cuentasMenoresIgual30 = arrayCuentas.filter(cuenta => cuenta.edadTitular <= 30);
console.log(cuentasMenoresIgual30);


// Obtener la cuenta con el titular más joven:

const cuentaMasJoven = arrayCuentas.reduce((cuentaActual, cuentaSiguiente) => {
  return cuentaSiguiente.edadTitular < cuentaActual.edadTitular ? cuentaSiguiente : cuentaActual;
});
console.log(cuentaMasJoven);


// Obtener un array con las cuentas habilitadas:

const cuentasHabilitadas = arrayCuentas.filter(cuenta => cuenta.estaHabilitada);
console.log(cuentasHabilitadas);


// Obtener un array con las cuentas deshabilitadas:

const cuentasDeshabilitadas = arrayCuentas.filter(cuenta => !cuenta.estaHabilitada);
console.log(cuentasDeshabilitadas);


// Obtener la cuenta con el menor saldo:

const cuentaMenorSaldo = arrayCuentas.reduce((cuentaActual, cuentaSiguiente) => {
  return cuentaSiguiente.saldo < cuentaActual.saldo ? cuentaSiguiente : cuentaActual;
});
console.log(cuentaMenorSaldo);


// Obtener la cuenta con el mayor saldo:

const cuentaMayorSaldo = arrayCuentas.reduce((cuentaActual, cuentaSiguiente) => {
  return cuentaSiguiente.saldo > cuentaActual.saldo ? cuentaSiguiente : cuentaActual;
});
console.log(cuentaMayorSaldo);

//Ten en cuenta que cada resolución utiliza métodos como filter() y reduce() para obtener los resultados deseados. Cada resultado se muestra en la consola mediante console.log(). Puedes adaptar estas soluciones según tus necesidades.


/* Desarrollar una función llamada generarID que reciba como parámetro el array de cuentas y agregue a cada elemento (objeto literal) una propiedad llamada id con un valor Numérico
Para agregar una propiedad llamada "id" a cada elemento del array de cuentas, puedes utilizar la función map() para recorrer el array y crear un nuevo array con los elementos modificados. A continuación se muestra el código de la función generarID:*/

function generarID(arrayCuentas) {
  // Variable para almacenar el nuevo array de cuentas con la propiedad "id" agregada
  const cuentasConID = arrayCuentas.map((cuenta, index) => {
    // Agregar la propiedad "id" al objeto cuenta
    cuenta.id = index + 1
    return cuenta
  });

  // Retornar el nuevo array de cuentas con el "id" agregado
  return cuentasConID
}

// Ejemplo de uso de la función generarID con el arrayCuentas
const arrayCuentasConID = generarID(arrayCuentas)
console.log(arrayCuentasConID)

/* La función generarID recibe el array de cuentas como parámetro y utiliza el método map() para iterar sobre cada elemento del array. Dentro de la función de callback del map(), se agrega la propiedad "id" al objeto cuenta utilizando el índice del elemento más 1. El nuevo array de cuentas con la propiedad "id" agregada se almacena en la variable cuentasConID y se retorna al final de la función.
En el ejemplo de uso, se llama a la función generarID pasando el arrayCuentas y se guarda el resultado en la variable arrayCuentasConID. Luego se muestra en la consola el nuevo array de cuentas con la propiedad "id" agregada.
Puedes adaptar esta función según tus necesidades y utilizarla para agregar la propiedad "id" a otros arrays de cuentas.*/


/* Desarrollar una función llamada buscarPorId que reciba como parámetro el array de cuentas y un id, en caso de encontrar retornar la cuenta (él objeto literal completo), caso contrario retornar null
Para buscar una cuenta por su ID en el array de cuentas, puedes utilizar el método find() que busca el primer elemento que cumpla con una condición específica. A continuación se muestra el código de la función buscarPorId:*/

function buscarPorId(arrayCuentas, id) {
  // Utilizar el método find() para buscar la cuenta por su ID
  const cuentaEncontrada = arrayCuentas.find(cuenta => cuenta.id === id)

  // Retornar la cuenta encontrada o null si no se encontró ninguna cuenta con ese ID
  return cuentaEncontrada || null
}

// Ejemplo de uso de la función buscarPorId con el arrayCuentas
const cuentaEncontrada = buscarPorId(arrayCuentas, 3)
console.log(cuentaEncontrada)

/* La función buscarPorId recibe el array de cuentas y un ID como parámetros. Utiliza el método find() para buscar la cuenta que tenga el ID especificado. La función de callback del find() compara el ID de cada cuenta con el ID proporcionado y retorna la primera cuenta que cumpla con la condición.
En el ejemplo de uso, se llama a la función buscarPorId pasando el arrayCuentas y el ID "3" como argumentos. El resultado se almacena en la variable cuentaEncontrada y luego se muestra en la consola. Si se encuentra una cuenta con el ID especificado, se mostrará el objeto literal completo de la cuenta. En caso contrario, se mostrará null.
Puedes utilizar esta función buscarPorId para buscar cuentas por su ID en otros arrays de cuentas.*/


/* Desarrollar una función llamada filtrarPorSaldos que reciba como parámetro el array de cuentas y un saldo (Number), deberá retornar un array que se cuyas cuentas se encuentren por debajo del saldo enviado por parámetro: implementar la función "filtrarPorSaldos"*/

function filtrarPorSaldos(cuentas, saldo) {
  return cuentas.filter(cuenta => cuenta.saldo < saldo)
}

// Esta función recibe dos parámetros: "cuentas", que es un array de cuentas, y "saldo", que es el saldo máximo deseado. Utiliza el método filter en el array de cuentas para crear un nuevo array que solo contenga las cuentas cuyo saldo sea menor que el saldo máximo especificado.

const cuentas = [
  { id: 1, saldo: 100 },
  { id: 2, saldo: 200 },
  { id: 3, saldo: 50 },
  { id: 4, saldo: 300 }
];

const saldoMaximo = 150;

const cuentasFiltradas = filtrarPorSaldos(cuentas, saldoMaximo);
console.log(cuentasFiltradas);

/* [
  { id: 1, saldo: 100 },
  { id: 3, saldo: 50 }
] */

/* Este nuevo array contiene las cuentas con saldos por debajo de 150, según los datos de ejemplo proporcionados.
Ten en cuenta que la implementación de la función asume que cada cuenta tiene una propiedad "saldo" que es un número. Asegúrate de adaptar la función según la estructura de tus datos de cuenta.*/


/* Desarrollar una función llamada incrementarSaldo que reciba como parámetro el array de cuentas, un id y un saldo, deberá incrementar él saldo de la cuenta, en caso de encontrar, caso contrario retornar undefined 
Reutilizando la función  buscarPorId*/

function buscarPorId(cuentas, id) {
  return cuentas.find(cuenta => cuenta.id === id)
}

function incrementarSaldo(cuentas, id, saldoIncremento) {
  const cuenta = buscarPorId(cuentas, id)

  if (cuenta) {
    cuenta.saldo += saldoIncremento
    return cuenta
  }

  return undefined
}


/* La función "buscarPorId" se utiliza para encontrar una cuenta específica en el array de cuentas, buscando por el ID correspondiente. La función "incrementarSaldo" recibe tres parámetros: "cuentas" (el array de cuentas), "id" (el ID de la cuenta a incrementar el saldo) y "saldoIncremento" (el valor a agregar al saldo existente).
En la función "incrementarSaldo", se llama a "buscarPorId" para encontrar la cuenta específica con el ID proporcionado. Si se encuentra la cuenta, se incrementa su saldo sumando el valor de "saldoIncremento". Luego, se devuelve la cuenta modificada.
Si no se encuentra una cuenta con el ID proporcionado, la función devuelve "undefined" para indicar que no se pudo encontrar la cuenta en el array.*/

const cuentass = [
  { id: 1, saldo: 100 },
  { id: 2, saldo: 200 },
  { id: 3, saldo: 50 },
  { id: 4, saldo: 300 }
];

const idCuenta = 2;
const saldoIncremento = 50

const cuentaIncrementada = incrementarSaldo(cuentass, idCuenta, saldoIncremento)

if (cuentaIncrementada) {
  console.log("Saldo incrementado:", cuentaIncrementada.saldo)
} else {
  console.log("No se encontró la cuenta con el ID proporcionado.")
}

/* En este ejemplo, la cuenta con el ID 2 será encontrada y su saldo se incrementará en 50. Luego, se imprime en la consola el mensaje "Saldo incrementado: 250". Si se proporciona un ID que no existe en el array de cuentas, se imprimirá el mensaje "No se encontró la cuenta con el ID proporcionado."*/


//A partir de el siguiente array de edades nos solicitan realizar lo siguiente: 

/* const edadess = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5]

// Obtener las edades menores a 18
const edadesMenores18 = edades.filter(edad => edad < 18)
console.log("Edades menores a 18:", edadesMenores18)

// Obtener las edades mayores o iguales a 18
const edadesMayoresIguales18 = edades.filter(edad => edad >= 18)
console.log("Edades mayores o iguales a 18:", edadesMayoresIguales18)

// Obtener las edades iguales a 18
const edadesIguales18 = edades.filter(edad => edad === 18)
console.log("Edades iguales a 18:", edadesIguales18)

// Obtener el menor
const menorEdad = Math.min(...edades)
console.log("Menor edad:", menorEdad)

// Obtener el mayor
const mayorEdad = Math.max(...edades)
console.log("Mayor edad:", mayorEdad)

// Obtener el promedio de edades
const promedioEdades = edades.reduce((sum, edad) => sum + edad, 0) / edades.length
console.log("Promedio de edades:", promedioEdades

// Incrementar en 1 todas las edades
const edadesIncrementadas = edades.map(edad => edad + 1)
console.log("Edades incrementadas:", edadesIncrementadas)

// Aquí tienes los resultados de cada tarea basada en el array de edades proporcionado:

Edades menores a 18: [11, 12, 15, 10, 5]
Edades mayores o iguales a 18: [18, 25, 22, 33, 18]
Edades iguales a 18: [18, 18]
Menor edad: 5
Mayor edad: 33
Promedio de edades: 17.4
Edades incrementadas: [12, 13, 16, 19, 26, 23, 11, 34, 19, 6]
 */