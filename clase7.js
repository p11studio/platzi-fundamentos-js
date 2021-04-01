// var hugo = {
//   nombre: 'Hugo',
//   apellido: 'Ponce',
//   edad: 38
// }
//
// var lety = {
//   nombre: 'Lety',
//   apellido: 'Rodriguez',
//   edad: 35
// }
//
// function imprimirNombreEnMayusculas(persona) {
//   //var nombre = persona.nombre
//   var {nombre} = persona
//   console.log(nombre.toUpperCase())
// }
//
// imprimirNombreEnMayusculas(hugo)
// imprimirNombreEnMayusculas(lety)
// //imprimirNombreEnMayusculas({nombre: 'Pepito'})
// //imprimirNombreEnMayusculas({apellido: 'Gomez'})
var hugo = {
  nombre: 'Hugo',
  edad: 38
}
var lety = {
  nombre: 'Lety',
  edad: 35
}
function imprimirNombreyEdad(persona) {
    var {nombre} = persona
    var {edad} = persona
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNombreyEdad(hugo)
imprimirNombreyEdad(lety)


// Hola me llamo Hugo y tengo 38 años
// Hila me llamo Lety y tengo 35 años
