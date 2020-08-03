const express = require('express'); //vamos a usar express.
const bodyParser = require('body-Parser');
const cors = require('cors');
const routes = require('./routes/userRoutes');


const app = express(); //convertimos a express en un objeto.
app.use(bodyParser.json()); // Analisando los datos que que pasan por la URL.
app.use( cors());

app.use('/api', routes);
module.exports = app;
