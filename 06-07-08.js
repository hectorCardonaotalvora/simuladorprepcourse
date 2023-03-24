/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function crearClasePersona() {
  class Persona {
    constructor(nombre, edad, hobbies, amigos) {
      // El constructor de la clase Persona recibe nombre (string), edad (integer), hobbies (array de strings), amigos (array de objetos)
      // Inicializar las propiedades de la persona con los valores recibidos como argumento

      // Tu código aca
      this.nombre=nombre;
      this.edad=edad;
      this.hobbies=hobbies;
      this.amigos=amigos;
}
  
    addFriend(nombre, edad) {
      // El método 'addFriend' recibe un string 'nombre' y un entero 'edad' y debe agregar un objeto:
      // { nombre: nombre, edad: edad} al arreglo de amigos de la persona.
      // No debe retornar nada.

      // Tu código aca:
      //const persona = new Persona('toni', 23, ['futbol'], [{nombre: 'martin', edad: 31}])
      this.amigos.push({nombre, edad})
     }
     
    addHobby(hobby) {
      // El método 'addHobby' recibe un string 'hobby' y debe agregarlo al arreglo de hobbies de la persona.
      // No debe retornar nada.

      // Tu código aca:
      this.hobbies.push(hobby)

    }

    getFriends() {
      // El método 'getFriends' debe retornar un arreglo con sólo los nombres del arreglo de amigos
      // de la persona.
      // Ej:
      // Suponiendo que la persona tiene estos amigos: [{nombre: 'martin', edad: 31},{nombre: 'toni', edad: 33}]
      // persona.getFriends() debería devolver ['martin', 'toni']

      // Tu código aca:
      let Narray = [];
      for (let amigo of this.amigos){
      Narray.push(amigo.nombre);
     }
    return Narray;
}

    getHobbies() {
      // El método 'getHobbies' debe retornar un arreglo con los hobbies de la persona
      // Ej:
      // persona.getHobbies() debe devolver ['correr', 'dormir', 'nadar']

      // Tu código aca:
     return this.hobbies;
}

    getPromedioEdad() {
      // El método 'getPromedioEdad' debe retornar el promedio de edad de los amigos de una persona
      // Ej: // Si la persona tuviera estos amigos:
      //{ //   amigos: [{ //     nombre: 'toni', //     edad: 33, //   },
      // { //     nombre: 'Emi', //     edad: 25 //   }] // }
      // persona.getPromedioEdad() debería devolver 29 ya que (33 + 25) / 2 = 29
      // Tu código aca:
    var Sumaedad = 0;
    for (var amigo of this.amigos){
    Sumaedad+=amigo.edad;
      }
    return Sumaedad / this.amigos.length
   }
  }
  return Persona;
}

const Persona = crearClasePersona()
const amigo = new Persona ('HCO', 57, ["natacion", "cliclismo"], [{nombre: "amigo 1", edad: 65},{nombre:"amigo 2", edad: 60}])
amigo.addFriend("add 3", 18)
amigo.addHobby("play")
console.log(amigo)
console.log("amigo.getFriends()")
console.log(amigo.getFriends())
console.log("amigo.getHobbies()")
console.log(amigo.getHobbies())
console.log("amigo.getPromedioEdad()")
console.log(amigo.getPromedioEdad())

// No modifiques nada debajo de esta linea //

module.exports = crearClasePersona