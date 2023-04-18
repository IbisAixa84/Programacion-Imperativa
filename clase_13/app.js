/*
1.Crear un array llamado misMascotas
2.Dentro de este array creamos un objeto para cada mascota. Cada objeto debera tener:
nombre
raza
edad 
sonido 
un metodo que nos retorne ese sonido 2 veces 
3.Cuando este listo, verificar en consola  
*/

let misMascotas = [
    {
        nombre: "Roma",
        raza: "Negra",
        edad: 2,
        sonido: "miau",
        repetirSonido: function(){
            return `${this.sonido} ${this.sonido}`
        }
    },
    {
        nombre: "Pachi",
        raza: "Blanco y negro",
        edad: 6,
        sonido: "miau",
        repetirSonido: function(){
            return `${this.sonido} ${this.sonido}`
        }
    },

    {
        nombre: "Bruna",
        raza: "Ovejera",
        edad: 7,
        sonido: "guau",
        repetirSonido: function(){
            return `${this.sonido} ${this.sonido}`
        }
    },
    {
        nombre: "Milka",
        raza: "Angus",
        edad: 11,
        sonido: "muu",
        repetirSonido: function(){
            return `${this.sonido} ${this.sonido}`
        }
    }
]

console.log(misMascotas[0].repetirSonido())
console.log(misMascotas[0])
console.log(misMascotas[0].nombre + misMascotas[1].raza);
console.log(misMascotas[0].nombre, misMascotas[1].raza);


/* 
    Crear una funcion que se llame aumentarEdad que aumente la edad de cada mascota en 1
*/
    
function aumentarEdad(arrayMascotas) {
    for (let i = 0; i < arrayMascotas.length; i++) {
        arrayMascotas[i].edad += 1
    }
    return arrayMascotas
}

// console.table(misMascotas)
// console.table(aumentarEdad(misMascotas))

/*  
    Ahora debemos crear una funcion, que se llame aumentarEdad2, que va a hacer un trabajo mas fino:
    -si la mascota tiene menos de 6 años, debe aumentar su edad en 1
    -si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
    -si la mascota tiene mas de 10 años, debera sumarle la mitad de su edad 
*/

function aumentarEdad(arrayMascotas) {
    for (let i = 0; i < arrayMascotas.length; i++) {
      
        if (arrayMascotas[i].edad < 6) {
            arrayMascotas[i].edad += 1
        } else if (arrayMascotas[i].edad <= 10) {
            arrayMascotas[i].edad += 2
        } else {
            arrayMascotas[i].edad += arrayMascotas[i].edad / 2
        }
    }
    return arrayMascotas
}

console.table(misMascotas)
console.table(aumentarEdad(misMascotas))


/*
    Ahora crea una funcion que va a generar un identificador (ID) en cada objeto, que sera secuencial y empezara en 1
*/ 


/*
    Por ultimo eliminaremos la propiedad 'raza', ya que para nosotros todos los animales son iguales
*/


