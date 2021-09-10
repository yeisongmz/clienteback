const moongose = require('mongoose');
const Schema = moongose.Schema;

const clientesShema = new Schema({
    nombre : {
        type: String,
        trim: true
    },
    apellido : {
        type: String,
        trim: true
    },
    email : {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    telefono: {
        type: Strim,
        trim: true
    }
});

module.exports = moongose.model('Clientes', clientesSchema)