const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'


const lukeurl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }


function obtenerPersona(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $.get(url, opts, function (persona) {
        console.log(`Hola yo soy, ${persona.name}`)

        if (callback) {
            callback()
        }
    })
}

obtenerPersona(1, function(){
    obtenerPersona(2,function(){
        obtenerPersona(3, function(){
            obtenerPersona(4, function(){
                obtenerPersona(5, function(){
                    obtenerPersona(6, function(){
                        obtenerPersona(7, function(){

                        })
                    })
                })
            })
        })
    })
})
/* obtenerPersona(2)
obtenerPersona(3) */