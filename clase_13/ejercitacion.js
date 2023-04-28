// Función loopDePares:

function loopDePares(numero) {
  for (let i = 0; i <= 100; i++) {
    console.log(i)
    if ((i + numero) % 2 === 0) {
      console.log(`El número ${i} es par`)
    }
  }
}

loopDePares(5)

// Esta función recibe un número como parámetro y realiza un loop de 0 a 100. En cada iteración, se muestra en la consola el número correspondiente. Si la suma del número de la iteración y el número pasado por parámetro es par, se muestra en la consola un mensaje indicando que el número es par.


// Función loopDeImpares:

function loopDeImpares(numero, palabra) {
    for (let i = 0; i <= 100; i++) {
      console.log(i)
      if ((i + numero) % 2 !== 0) {
        console.log(palabra)
      }
    }
  }
  
loopDeImpares(3, "Hola")
 
// Esta función recibe un número y una palabra como parámetros y realiza un loop de 0 a 100. En cada iteración, se muestra en la consola el número correspondiente. Si la suma del número de la iteración y el número pasado por parámetro es impar, se muestra en la consola la palabra pasada por parámetro.


// Función sumatoria:

function sumatoria(numero) {
    let sum = 0
    for (let i = 1; i <= numero; i++) {
      sum += i
    }
    return sum
}
  
console.log(sumatoria(3)) // 6
console.log(sumatoria(8)) // 36
  
// Esta función recibe un número como parámetro y calcula la sumatoria de todos los números anteriores a ese número, incluyendo el propio número. Se utiliza un bucle for para iterar desde 1 hasta el número dado, acumulando la suma en la variable sum. Finalmente, se devuelve el resultado de la sumatoria.


// Función nuevoArreglo:

function nuevoArreglo(numero) {
    const arreglo = []
    for (let i = 1; i <= numero; i++) {
      arreglo.push(i)
    }
    return arreglo
}
  
console.log(nuevoArreglo(5)) // [1, 2, 3, 4, 5]
console.log(nuevoArreglo(10)) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
// Esta función recibe un número como parámetro y crea un nuevo arreglo con elementos que van desde 1 hasta ese número. Se utiliza un bucle for para iterar y agregar cada número al arreglo utilizando el método push(). Finalmente, se devuelve el arreglo resultante.


// Función split

function split(string) {
    const arreglo = [];
    for (let i = 0; i < string.length; i++) {
      arreglo.push(string[i]);
    }
    return arreglo;
}
  
console.log(split("hola")); // ["h", "o", "l", "a"]
console.log(split("chau")); // ["c", "h", "a", "u"]
  
// Esta función simula el comportamiento del método split() de los strings. Recibe un string como parámetro y crea un nuevo arreglo donde cada elemento es un carácter del string original. Se utiliza un bucle for para iterar sobre los caracteres del string y se agrega cada carácter al arreglo utilizando el método push(). Finalmente, se devuelve el arreglo resultante.


// Función arrayHandler:

function arrayHandler(arr1, arr2) {
    const length = Math.min(arr1.length, arr2.length)
    for (let i = 0; i < length; i++) {
      console.log(`Soy ${arr1[i]} y yo soy ${arr2[i]}`)
    }
}
  
arrayHandler([1, 2, 3, 4], ["h", "o", "l", "a"])
  
// Esta función recibe dos arreglos de igual longitud como parámetros y muestra en la consola un mensaje para cada par de elementos correspondientes de los arreglos. Se utiliza un bucle for para iterar sobre los elementos hasta la longitud más corta de los dos arreglos, y en cada iteración se muestra el mensaje utilizando los elementos de ambos arreglos en esa posición.


// Palindromo

function palindromo(palabra) {
    const palabraReversa = palabra.toLowerCase().split('').reverse().join('')
    return palabra.toLowerCase() === palabraReversa
}
  
console.log(palindromo("anilina")) // true
console.log(palindromo("Ana")) // true
console.log(palindromo("Enrique")) // false
  
/* La función palindromo recibe una palabra como parámetro. Primero, se convierte la palabra a minúsculas utilizando el método toLowerCase(). Luego, se utiliza el método split('') para convertir la palabra en un arreglo de caracteres. A continuación, se utiliza el método reverse() para invertir el orden de los caracteres en el arreglo. Por último, se utiliza el método join('') para unir los caracteres del arreglo en una cadena nuevamente.
Después de obtener la versión invertida de la palabra, se compara con la versión original (en minúsculas). Si son iguales, significa que la palabra es un palíndromo y se devuelve true. De lo contrario, se devuelve false.
Ten en cuenta que en este caso se considera que una palabra es palíndroma si se lee igual de izquierda a derecha que de derecha a izquierda, ignorando las mayúsculas y minúsculas.*/







