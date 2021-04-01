function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

var sacha = new Persona('Hugo', 'Ponce')
var ericka = new Persona('Erika','Luna')
var arturo = new Persona('Arturo','Martinez')

