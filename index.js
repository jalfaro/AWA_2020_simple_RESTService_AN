const express = require('express');
const app = express();

app.use(express.json());

const mascotas = [
    {id: 1, nombre: "Benji", raza: "Perro"},
    {id: 2, nombre: "Garfield", raza: "Gato"},
    {id: 3, nombre: "Piolin", raza: "Canario"}
];
app.get('/saludo', (req, res) => {
    res.send("Hola Mundo");
});

app.get('/mascota', (req, res) => {
    res.send(mascotas);
});

app.get('/mascota/:id', (req, res) => {
    let mascota = mascotas.find(m =>  m.id === parseInt(req.params.id));
    if (!mascota) res.status(404).send('No encontro resultado');
    res.send(mascota);
});

app.post('/mascota', (req, res) => {
    if (req.body) {
        let mascota = req.body;
        mascota.id = mascotas.length + 1; 
        mascotas.push(mascota);
        res.send(mascota);
    }
});

app.listen(4000, () => {
    console.log("Ejecutando servidor en puerto 4000");
});