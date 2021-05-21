const express = require('express');
const app = express();

app.get('/', (request, response) => {
    return response.json({message: 'Server is UP'});
})

app.post('/hook', (request, response) => {
    return response.json(request.body);
})



app.listen(3000, console.log('Servidor ON'));