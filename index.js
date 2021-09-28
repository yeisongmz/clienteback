const express = require('express');
const routes = require('./routes');
const moongose = require('mongoose');
//const bodyParser = require('body-parser');

// cors permite que un clinete se conecte a otro servidor 
const cors = require('cors');

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

// habilitar cors
app.use(cors());

// Rutas de la app
app.use('/', routes());




// puerto
app.listen(5000);

