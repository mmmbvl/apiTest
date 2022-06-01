const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    'savage': {
        'age': 29,
        'birthName': "Sheyaa Bin Abraham",
        'birthLocation': "London, England"
    },
    'chance': {
        'age': 29,
        'birthName': "Timothy Smalls",
        'birthLocation': "Nyork"
    },
    'turi$mo': {
        'age': 25,
        'birthName': "Dylan Dylan",
        'birthLocation': "Wessside"
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response) => {
    const rn = request.params.rapperName.toLowerCase()
    if (rappers[rn]) {
        response.json(rappers[rn])
    }
    else {
        response.json(rappers['turi$mo'])
    }
    response.json(rappers)
})

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`)
})