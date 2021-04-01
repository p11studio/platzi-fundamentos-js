function heredaDe(prototipoHijo, prototipoPadre ) {
    var fn = function(){}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}



Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function() {
    /* debugger */
    return this.altura > 1.8
}
heredaDe(Desarrollador, Persona) 

function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

Desarrollador.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}



/* var sacha = new Persona('Hugo', 'Ponce', 1.72)
var ericka = new Persona('Erika','Luna', 1.65)
var arturo = new Persona('Arturo','Martinez', 1.89) */

/* sacha.soyAlto()
ericka.soyAlto()
arturo.soyAlto() */
