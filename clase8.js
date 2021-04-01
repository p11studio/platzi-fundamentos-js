var hugo = {
  nombre: 'Hugo',
  apellido: 'Ponce',
  edad: 38
}

var lety = {
  nombre: 'Lety',
  apellido: 'Rodriguez',
  edad: 35
}

function imprimirNombreEnMayusculas(persona) {
  //var nombre = persona.nombre
  var {nombre} = persona
  console.log(nombre.toUpperCase())
}
//
imprimirNombreEnMayusculas(hugo)
imprimirNombreEnMayusculas(lety)
//imprimirNombreEnMayusculas({nombre: 'Pepito'})
//imprimirNombreEnMayusculas({apellido: 'Gomez'})

function cumpleanos(persona) {
  persona.edad += 1
}

/* function cumpleanos(persona) {
  return {
    ...persona,
    edad: persona.edad +1
  }

} */
