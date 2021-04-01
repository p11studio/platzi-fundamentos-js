var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifzyc',
  edad: 25,
  ingeniero: true,
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


const MAYORIA_DE_EDAD = 18

// var esMayorDeEdad = function (persona) {
//   return persona.edad >= MAYORIA_DE_EDAD
// }

var esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD
var esMenorDeEdad = ({edad}) => edad <= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es el puto amo menor de edad`)
  }
}

function permitirAcceso(persona) {
  if(!esMayorDeEdad(persona)) {
    console.log('ACCESO DENEGADO')
  }
}
