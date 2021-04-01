var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifzyc',
  edad: 25,
  ingeniero: false,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: true,
  drone: true,
}

var juan = {
  nombre: 'Juan',
  apellido: 'Gomez',
  edad: 17
}

/* function imprimirProfesion(persona) {
console.log(`${persona.nombre} es:`)

  if (persona.ingeniero === true) {
  console.log('Ingeniero')
  } else {
    console.log('No es ingeniero')
  }

  if (persona.cocinero === true) {
    console.log('Cociner')
  }


  if (persona.cantante === true) {
    console.log('Cantante')
  }


  if (persona.dj === true) {
    console.log('Dj')
  }


  if (persona.guitarrista === true) {
    console.log('Guitarrista')
  }


  if (persona.drone === true) {
    console.log('Piloto de Drone')
  }

}

imprimirProfesion(sacha) */


//Reto superado

function imprimirSiEsMayorDeEdad(persona) {
  console.log(`${persona.nombre} es:`)
  if (persona.edad >= 18)
  console.log('Es mayor de Edad')
  else  {
  console.log('No es mayor de Edad') }
}

function imprimirSiEsMayorDeEdad(persona) {
  if (persona.edad >= 18) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}



function imprimirSiEsMayorDeEdad(persona) {
  if (persona.edad >= 18) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es el puto amo menor de edad`)
  }
}

imprimirSiEsMayorDeEdad(sacha)

const MAYORIA_DE_EDAD = 18

/* function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD
  }

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es el puto amo menor de edad`)
  }
} */
