const moongose = require('mongoose');
const Schema = moongose.Schema;

const clientesSchema = new Schema({
    nombre : {
        type: String,
        trim: true
    },
    apellido : {
        type: String,
        trim: true
    },
    fechaCreacion: { 
        type: Date, 
        default: Date.now },
    empresa: {
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
        type: String,
        trim: true
    }
});

module.exports = moongose.model('Clientes', clientesSchema);