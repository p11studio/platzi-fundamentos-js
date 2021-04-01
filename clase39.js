const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'


const lukeurl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

function onError(id) {
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

async function obtenerPersona() {
    var ids = [1,2,3,4,5,6,7]
    var promesas = ids.map(id => obtenerPersona(id))
    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch (id) {
        onError(id)
    }
}

obtenerPersona()

    
