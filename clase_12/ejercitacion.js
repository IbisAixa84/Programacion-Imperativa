// Para resolver el problema comparando los votos de cada participante en cada etapa del concurso. Aquí tienes una implementación de la función encontrarGanador que determina al ganador del concurso

const alicia = [10, 80, 75]
const bob = [90, 20, 25]

const Concurso = {
  etapas: []
  ganador: ""

  encontrarGanador: function(a, b) {
    let puntosPrimerParticipante = 0
    let puntosSegundoParticipante = 0

    for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) {
        puntosPrimerParticipante++
      } else if (b[i] > a[i]) {
        puntosSegundoParticipante++
      }
    }

    if (puntosPrimerParticipante > puntosSegundoParticipante) {
      this.ganador = "Alicia"
    } else if (puntosSegundoParticipante > puntosPrimerParticipante) {
      this.ganador = "Bob"
    } else {
      this.ganador = ""
    }

    this.etapas.push({
      puntosAlicia: puntosPrimerParticipante
      puntosBob: puntosSegundoParticipante
    });

    return this.ganador
  },

  exportarResultados: function() {
    return JSON.stringify(this.etapas)
  }
}

// Calcular al ganador y obtener los resultados
console.log("El ganador es: " + Concurso.encontrarGanador(alicia, bob) + " participante")

// Exportar los resultados en formato JSON
const resultadosJSON = Concurso.exportarResultados()
console.log(resultadosJSON)

/*En esta implementación, se crea el objeto literal Concurso que tiene las propiedades etapas (donde se almacenarán los resultados parciales por cada etapa) y ganador (que guardará el nombre del ganador en caso de que exista).
La función encontrarGanador es un método del objeto Concurso y realiza la comparación de votos en cada etapa. Se utilizan variables puntosPrimerParticipante y puntosSegundoParticipante para llevar el conteo de los puntos acumulados por cada participante. Se recorre el arreglo a y b en un bucle for y se asignan los puntos según las reglas mencionadas.
Luego, se determina al ganador y se actualiza la propiedad ganador del objeto Concurso. Además, se agrega un objeto a la propiedad etapas con los puntos acumulados por Alicia y Bob en cada etapa.
La función exportarResultados convierte el arreglo etapas en formato JSON utilizando JSON.stringify().
Se muestra un ejemplo de uso de los métodos encontrarGanador y exportarResultados, y se imprime el ganador y los resultados en la consola.
Recuerda que este es solo un ejemplo de cómo resolver el problema. Puedes adaptar y modificar el código según tus necesidades y la estructura específica de tu aplicación.*/


// Función digitalHouse():

function digitalHouse(num1, num2) {
  for (let i = 1; i <= 100; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      console.log("Digital House")
    } else if (i % num1 === 0) {
      console.log("Digital")
    } else if (i % num2 === 0) {
      console.log("House")
    } else {
      console.log(i)
    }
  }
}

digitalHouse(3, 5)


// Función sumArray()
function sumArray(array) {
   let sum = 0
    for (let i = 0; i < array.length; i++) {
      sum += array[i]
    }
    return sum
}
  
console.log(sumArray([1, 2, 3])) // 6
console.log(sumArray([10, 3, 10, 4])) // 27
console.log(sumArray([-5, 100])) // 95


// Función join()

function join(array) {
   let result = ""
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
}
  
console.log(join(["h", "o", "l", "a"])) // "hola"
console.log(join(["c", "h", "a", "u"])) // "chau"

//Esta función recibe un arreglo de strings de cualquier cantidad de elementos y los concatena en un solo string. Se utiliza un bucle for para recorrer los elementos del arreglo y se va concatenando cada elemento en la variable result. Finalmente, se devuelve el resultado de la concatenación.