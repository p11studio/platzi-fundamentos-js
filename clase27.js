class Persona {
    constructor (nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }
    soyAlto(){
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
    }
}
/* 
function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

Desarrollador.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
} */



/* var sacha = new Persona('Hugo', 'Ponce', 1.72)
var ericka = new Persona('Erika','Luna', 1.65)
var arturo = new Persona('Arturo','Martinez', 1.89) */

/* sacha.soyAlto()
ericka.soyAlto()
arturo.soyAlto() */
