const Pedidos = require('../models/Pedidos');

// agrega un nuevo cliente

exports.setPedido = async (req, res, next) => {
    const pedido = new Pedidos(req.body);
    console.log(pedido);

    try {
        //almacenar el registro
        await pedido.save();
        res.json({mensaje: 'se agrego un nuevo pedido'});
    } catch (e) {
        console.log(e);
        next();
    }
}

exports.getPedidos = async (req, res, next) => {
    try {
        const pedidos = await Pedidos.find({}).populate('cliente').populate({
            path: 'pedido.producto',
            model: 'Productos',
        });
        res.json(pedidos);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.getPedidosById = async (req, res, next) => {
    try {
        const pedido = await Pedidos.findById(req.params.idPedido).populate('cliente').populate({
            path: 'pedido.producto',
            model: 'Productos',
        });;
        if (!pedido){
            res.body({mensaje: 'el pedido no existe'})
        }
        res.json(pedido);
    } catch (error) {
        console.log(error);
        next();
    }
}
