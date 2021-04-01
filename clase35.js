const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'


const lukeurl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }


function obtenerPersona(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $
    .get(url, opts, callback)
    .fail(()  => {
        console.log(`Sucedio un error. no se pudo obetner el personaje ${id}`)
    }) 
}

obtenerPersona(1, function(personaje){
    console.log(`Hola yo soy, ${personaje.name}`)

    obtenerPersona(2,function(personaje){
        console.log(`Hola yo soy, ${personaje.name}`)

        obtenerPersona(3, function(personaje){
            console.log(`Hola yo soy, ${personaje.name}`)

            obtenerPersona(4, function(personaje){
                console.log(`Hola yo soy, ${personaje.name}`)

                obtenerPersona(5, function(personaje){
                    console.log(`Hola yo soy, ${personaje.name}`)

                    obtenerPersona(6, function(personaje){
                        console.log(`Hola yo soy, ${personaje.name}`)

                        obtenerPersona(7, function(personaje){
                            console.log(`Hola yo soy, ${personaje.name}`)

                        })
                    })
                })
            })
        })
    })
})
/* obtenerPersona(2)
obtenerPersona(3) */