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

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgarzar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
  var random = Math.random()

  if (random < 0.25) {
    aumentarDePeso(sacha)
  } else if (random < 0.5) {
    adelgarzar(sacha)

  }

}

console.log(`Al final del año ${sacha.nombre} pesa ${sacha.peso.toFixed(1)}kg `)
