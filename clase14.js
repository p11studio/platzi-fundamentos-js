var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifzyc',
  edad: 28,
  peso: 75
}

console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso}kg `)

// for (var i = 0; i < array.length; i++) {
//   array[i]
// }

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = sacha.peso - 3
var dias = 0

while(sacha.peso > META) {
  //debugger
  if(comeMucho()) {
    aumentarDePeso(sacha)
  }
  if(realizaDeporte()) {
    adelgazar(sacha)
  }
  dias += 1
}


console.log(`pasaron ${dias} dias hasta que ${sacha.nombre} adelgazo 3kg`)
//console.log(`Al final del año ${sacha.nombre} pesa ${sacha.peso.toFixed(1)}kg `)
