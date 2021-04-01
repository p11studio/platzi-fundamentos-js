const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'


const lukeurl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

const onPeopleResponse = function(persona) {
    console.log(`Hola yo soy, ${persona.name}`)
}

function obtenerPersona(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onPeopleResponse)
}

obtenerPersona(1)
obtenerPersona(2)
obtenerPersona(3)