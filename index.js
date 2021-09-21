const express = require('express');
const routes = require('./routes');
const moongose = require('mongoose');
const bodyParser = require('body-parser');

//conectar con mongo
moongose.Promise = global.Promise;
moongose.connect('mongodb://localhost:27017/restapi', {
    useNewUrlParser: true
});


// crear el servidor
const app = express();

//habilitar body parser
app.use(express.json());
app.use(express.urlencoded({extended: true})) 

// Rutas de la app
app.use('/', routes());




// puerto
app.listen(5000);

