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