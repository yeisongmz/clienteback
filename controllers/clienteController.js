const Clientes = require('../models/Clientes');

// agrega un nuevo cliente

exports.setCliente = async (req, res, next) => {
    const cliente = new Clientes(req.body);

    try {
        //almacenar el registro
        await cliente.save();
        res.json({mensaje: 'se agrego un nuevo cliente'});
    } catch (e) {
        console.log(e);
        next();
    }
}

//mostrar clientes

exports.getClientes = async (req, res, next) => {
    try {
        const clientes = await Clientes.find({});
        res.json(clientes);
    } catch (error) {
        console.log(error);
        next();
    }

}

// muestra un cliente por su id
exports.getCiente = async (req, res, next) => {
        const cliente = await Clientes.findById(req.params.idCliente);
        if (!cliente){
            res.json({mensaje: 'Ese cliente no existe'});
            return next();
        }
        // mostrar el cliente
        res.json(cliente);
}

// actualizar cliente por id
exports.updateCliente = async (req, res, next) => {
    try {
        const cliente = await Clientes.findOneAndUpdate({ _id :  req.params.idCliente }, 
            req.body,  {
                new: true

            } )
            res.json(cliente);
    }catch (error){
        console.log(error);
        next();
    }
}

// delete cliente por id

exports.deleteCliente = async (req, res, next) => {
    try {
        await Clientes.findOneAndDelete({_id : req.params.idCliente});
        res.json({mensaje: 'El cliente fue eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}