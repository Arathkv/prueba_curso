const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get( '/hola', (req, res) =>{
    res.send('ruta Hola');
});

app.get( '/adios', (req, res) =>{
    res.send('ruta Adios');
});

app.post('/login', (req, res) => {
    res.send('ruta de Login nueva');
});

app.listen(port, () => {
  console.log('Servidor escuchando en http://localhost:${port}');},);