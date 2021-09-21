const Productos = require('../models/Productos');

// agrega un nuevo productos

exports.setProductos = async (req, res, next) => {
    const productos = new Productos(req.body);

    try {
        //almacenar el registro
        await productos.save();
        res.json({mensaje: 'se agrego un nuevo producto'});
        console.log(productos)
    } catch (e) {
        console.log(e);
        next();
    }
}
