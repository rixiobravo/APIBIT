const express = require('express');
const UserController = require('../controllers/UserController');
const api = express.Router();

// POST: insertar datos 
// GET: obtener datos
// PUT: modificar datos
// DELETE: eliminar datos

// req: son los parametros que se envian por la URL.
// res: respuestas que tenemos.
api.get('/saludo', (req, res) => {
    console.log('Hola a todos');
});

api.post('/', UserController.create);

api.put('/:idUser', UserController.update);

api.delete('/:idUser', UserController.remove);

api.post('/login', UserController.login);

api.get('/allUser', UserController.getAllUsers);

api.get('/getUser/:id', UserController.getUser);

module.exports = api;