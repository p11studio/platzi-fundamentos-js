const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'


const lukeurl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }


function obtenerPersona(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(url, opts, function(data) {
                resolve(data)
            })
            .fail(()  => reject(id))
            })
    }

    
function onError(id) {
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

obtenerPersona(1)
    .then(personaje  => {
        console.log(`El personaje 1 es ${personaje.name}`)
        return obtenerPersona(2)
    })
    .then(personaje  => {
        console.log(`El personaje 2 es ${personaje.name}`)
        return obtenerPersona(3)
    })
    .then(personaje  => {
        console.log(`El personaje 3 es ${personaje.name}`)
        return obtenerPersona(4)
    })
    .then(personaje  => {
        console.log(`El personaje 4 es ${personaje.name}`)
        return obtenerPersona(5)
    })
    .then(personaje  => {
        console.log(`El personaje 5 es ${personaje.name}`)
        return obtenerPersona(6)
    })
    .then(personaje  => {
        console.log(`El personaje 6 es ${personaje.name}`)
        return obtenerPersona(17)
    })
    .then(personaje  => {
        console.log(`El personaje 7 es ${personaje.name}`)
        
    })
    .catch(onError)

// obtenerPersona(17)
// .then(function (personaje) {
//     console.log(`El personake 1 es ${personaje.name}`)
// })
// .catch(onError)


    
/* obtenerPersona(2)
obtenerPersona(3) */