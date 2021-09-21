const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const productosController = require('../controllers/productosController');


module.exports = function(){

    // Agregar nuevos clientes via post
    router.post('/clientes', clienteController.setCliente);

    // obtener todos los clientes
    router.get('/clientes', clienteController.getClientes);

    // obtener clientes en especifico

    router.get('/clientes/:idCliente', clienteController.getCiente);

    // actualizar cliente por id
    router.put('/clientes/:idCliente', clienteController.updateCliente);

    // eliminar un cliente por id

    router.delete('/clientes/:idCliente', clienteController.deleteCliente);



    /**DEFINIR RUTAS PARA PRODUCTOS**/
    // Agregar nuevos productos via post


    router.post('/productos', productosController.setProductos);


    return router;
}