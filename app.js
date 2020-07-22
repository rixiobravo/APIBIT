const express = require('express'); //vamos a usar express.
const routes = require('./routes/userRoutes');
const bodyParser = require('body-Parser');

const app = express(); //convertimos a express en un objeto.
app.use(bodyParser.json()); // Analisando los datos que que pasan por la URL.

app.use('/api', routes);
module.exports = app;
