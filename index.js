const express = require('express');
const routes = require('./routes');
const moongose = require('mongoose');

//conectar con mongo
moongose.Promise = global.Promise;
moongose.connect('mongodb://localhost/restapi', {
    useNewUrlParser: true
});


// crear el servidor
const app = express();

// Rutas de la app
app.use('/', routes());




// puerto
app.listen(5000);

