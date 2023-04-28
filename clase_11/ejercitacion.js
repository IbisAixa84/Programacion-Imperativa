/* Objetos literales

Descripción del problema
Desde un banco nos contactan para crear una aplicación que pueda facilitar el manejo
de información y las acciones que el mismo necesita. Nuestro tech leader nos facilita la
forma de representar a los usuarios (cuentas bancarias). Cada una de estas cuentas
tiene la siguiente información

3. Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el
objeto cliente que corresponda con ese nombre ingresado.
Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”);
4. Crear otro método llamado depósito que recibirá dos parámetros: el titular de
cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta
correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.
Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su
nuevo saldo es: XXXX”.
5. Crear un último método llamado extracción que recibirá también dos parámetros:
el titular de cuenta y el monto a extraer. El método debe obtener la cuenta
correspondiente y restar el monto al saldo actual. En caso de que el resultado sea
menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”.
De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo
saldo es: XXXX”.
Si llegaste hasta acá, felicidades, el equipo de desarrollo y el tech leader están
impresionados con tu trabajo. */

let clienteEncontrado = banco.consultarCliente("Ramon Connell")

//la lista de clientes.
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];

const banco = {
  clientes: arrayCuentas
  consultarCliente: function (nombre) {
    let mensajeError =
      "No se encontro ninguna coincidencia, por favor verifica los datos ingresados"
    let clienteEncontrado
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].titularCuenta === nombre) {
        clienteEncontrado = this.clientes[i]
      }
    }
    // Antes de retornar pregunto di clientrEncontrado existe, es decir si contiene un objeto, si lo contiene
    return clienteEncontrado ? clienteEncontrado : mensajeError
  }   

  deposito: function (nombre, cantDeposito) {
    //Realizamos el metodo de consultar cliente para no repetirnos, y lo guardamos en una variable auxiliar
    let clienteEncontrado = this.consultarCliente(nombre)
    // Generamos una variable aux de mensaje para el retorno final
    let mensaje
    // Consultamos si el resultado de encontrar a un cliente fue un objeto con la cuenta o si fue un mensaje
    if (typeof clienteEncontrado !== "string") { 
      // Si el cliente fue localizado realizamos la suma al saldo actual y la guardamos (es lo mismo realiza)
      clienteEncontrado.saldoEnPesos += cantDeposito
      mensaje = `Depósito realizado, su nuevo saldo es: ${clienteEncontrado.saldoEnPesos}`
     } else {      
      mensaje = 
      "No se encontro ninguna coincidencia, por favor verifique los datos inghresados"
    }
    return mensaje
  }

  extraccion: function (nombre, cantExtraccion) {
    // El metodo de extraccion es similar a deposito con la diferencia que luego de verificar el clienteEncontrado
    let clienteEncontrado = this.consultarCliente(nombre)
    let mensaje
    if (typeof clienteEncontrado !== "string") {
      if (clienteEncontrado.saldoEnPesos - cantExtraccion >= 0) {
        clienteEncontrado.saldoEnPesos -= cantExtraccion
      mensaje = 
      `Extracción realizada correctamente, su nuevo saldo es: ${clienteEncontrado.saldoEnPesos}`
      } else {
        mensaje = `Fondos insuficientes`
      }
    } else {
      mensaje =
        "No se encontro ninguna coincidencia, por favor verificar los datos encontrados"
    }
    return mensaje
  }
}

console.log('****** Metodo consultar cliente ******')
console.log(banco.consultarCliente('Jarret Lafuente'))
console.log(banco.consultarCliente('Abigael'))
console.log('****** Metodo deposito ******')
console.log(banco.consultarCliente('Abigael Natte', 1000))
console.log(banco.consultarCliente('Abigael', 1000))
console.log('****** Metodo extraccion ******')
console.log(banco.consultarCliente('Abigael Natte', 1000))
console.log(banco.consultarCliente('Abigael Natte', 30000))
console.log(banco.consultarCliente('Abigael', 30000))


/* Propiedad única
Aquí tienes la implementación de la función propiedadUnica y del objeto "alumno" con los cálculos de promedio y aprobación:
*/ 

// Función propiedadUnica
function propiedadUnica(arr, prop) {
  return arr.map(function(obj) {
    let newObj = {}
    newObj[prop] = obj[prop]
    return newObj
  })
}

// Ejemplo de uso de la función propiedadUnica
let array = [
  { nombre: "Lean", edad: 27 },
  { nombre: "Eze", edad: 49 }
];
console.log(propiedadUnica(array, "edad")) // [{ edad: 27 }, { edad: 49 }]
console.log(propiedadUnica(array, "nombre"));// [{ nombre: "Lean" }, { nombre: "Eze" }]

// Objeto alumno
let alumno = {
  nombre: "Juan",
  numeroLegajo: 12345,
  notas: [8, 7, 9, 6, 8],
  calcularPromedio: function() {
    let suma = this.notas.reduce(function(acc, nota) {
      return acc + nota
    }, 0)
    return suma / this.notas.length
  },
  verificarAprobacion: function(notaAprobacion) {
    let promedio = this.calcularPromedio()
    return promedio >= notaAprobacion
  }
}

// Ejemplo de uso de los métodos del objeto alumno
console.log("Promedio: " + alumno.calcularPromedio())
console.log("Aprobado: " + alumno.verificarAprobacion(7.5))

/* En el código anterior, se define la función propiedadUnica que recibe un arreglo de objetos arr y un string prop. La función utiliza el método map para crear un nuevo arreglo de objetos, donde cada objeto solo tiene la propiedad especificada por prop. Se retorna el nuevo arreglo de objetos.
Luego, se muestra un ejemplo de uso de la función propiedadUnica con el arreglo array y las propiedades "edad" y "nombre".
Después, se crea el objeto "alumno" con las propiedades básicas: nombre, número de legajo y lista de notas. El objeto "alumno" tiene dos métodos: calcularPromedio, que calcula el promedio de las notas, y verificarAprobacion, que verifica si el alumno está aprobado basado en una nota de aprobación dada.
Se muestra un ejemplo de uso de los métodos del objeto "alumno" para calcular el promedio y verificar la aprobación.*/
