const Productos = require('../models/Productos');

const multer = require('multer');
const shortid = require('shortid');

const configuracionMulter = {
    storage: fileStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, __dirname+'../../uploads/');
        },
        filename: (req, file, cb) => {
            const extension = file.mimetype.split('/')[1];
            cb(null, `${shortid.generate()}.${extension}`);
        }
    }),
    fileFilter(req, file, cb) {
        if ( file.mimetype === 'image/jpeg' ||  file.mimetype ==='image/png' ) {
            cb(null, true);
        } else {
            cb(new Error('Formato No válido'))
        }
    },
}

// pasar la configuración y el campo
const upload = multer(configuracionMulter).single('imagen');

// Sube archivo

exports.uploadFiles = (req, res, next) => {
    upload(req, res, function(error){
        if (error){
            res.json({mensaje: error})
        }
        return next();
    })
}

// agrega un nuevo productos

exports.setProductos = async (req, res, next) => {
    const productos = new Productos(req.body);

    try {
        if (req.file){
            productos.imagen = req.file.filename
        }
        //almacenar el registro
        await productos.save();
        res.json({mensaje: 'se agrego un nuevo producto'});
        //console.log(productos)
    } catch (e) {
        console.log(e);
        next();
    }
}

exports.getProductos = async (req, res, next) => {
    try {
        const productos = await Productos.find({});
        res.json(productos);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.getProductosById = async (req, res, next) => {
    const producto = await Productos.findById(req.params.idProducto);
    if (!producto){
        res.json({mensaje: 'Ese Producto no existe'});
        return next();
    }
    // mostrar el cliente
    res.json(producto);
}

exports.updateProducto = async (req, res, next) => {
    try {
        const productoAnterior = await Productos.findById(req.params.idProducto);

        // construir nuevo producto
        let nuevoProducto = req.body;

        if (req.file){
            nuevoProducto.imagen = req.file.filename;
        }else {
            nuevoProducto.imagen = productoAnterior.imagen
        }

        const producto = await Productos.findOneAndUpdate({ _id :  req.params.idProducto }, 
            nuevoProducto,  {
                new: true,
            });
            //console.log(producto);
            res.json(producto);
    }catch (error){
        console.log(error);
        next();
    }
}


exports.deleteProducto = async (req, res, next) => {
    try {
        await Productos.findOneAndDelete({_id : req.params.idProducto});
        res.json({mensaje: 'El producto fue eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}