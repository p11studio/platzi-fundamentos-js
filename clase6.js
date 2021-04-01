var hugo = {
  nombre: 'Arturo',
  apellido: 'Ponce',
  edad: 38
}

var lety = {
  nombre: 'Lety',
  apellido: 'Rodriguez',
  edad: 35
}

var jose = {
  nombre: '22'
}

function imprimirNombreEnMayusculas({nombre}){
  console.log(nombre.toUpperCase())
}

/*function imprimirNombreEnMayusculas (objeto) {
  console.log(objeto.nombre.toUpperCase())
}*/

imprimirNombreEnMayusculas(hugo)
imprimirNombreEnMayusculas(lety)
imprimirNombreEnMayusculas(jose)
//imprimirNombreEnMayusculas({nombre: 'Pepito'})
//imprimirNombreEnMayusculas({})
//imprimirNombreEnMayusculas({apellido: 'Gomez'})
