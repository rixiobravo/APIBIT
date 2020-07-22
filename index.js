const mongoose = require('mongoose'); // requerimos mongoose.
const app = require('./app.js');
const port = 3000; // especificamos cual puerto vamos a usar para conectarnos.

mongoose.connect('mongodb://localhost:27017/eduBITClass', { useNewUrlParser: true, useUnifiedTopology: true }, (error, res) => {
    if (error) {
        console.error('Error de conexion', error);
    } else {
        console.log('Conexion exitosa');
        app.listen(port, () => {
            console.log('estamos escuchando en el puerto ', port);
        })
    }
});

