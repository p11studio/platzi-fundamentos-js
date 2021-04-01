function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

/* Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
Persona.prototype.soyAlto = function() {
    return this.altura > 1.8
} */

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function() {
    /* debugger */
    return this.altura > 1.8
}


var sacha = new Persona('Hugo', 'Ponce', 1.72)
var ericka = new Persona('Erika','Luna', 1.65)
var arturo = new Persona('Arturo','Martinez', 1.89)

/* sacha.soyAlto()
ericka.soyAlto()
arturo.soyAlto() */
