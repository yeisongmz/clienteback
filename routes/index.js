const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const productosController = require('../controllers/productosController');
const pedidosController = require('../controllers/pedidosController')


module.exports = function(){

    // Agregar nuevos clientes via post
    router.post('/clientes', clienteController.setCliente);

    // obtener todos los clientes
    router.get('/clientes', clienteController.getClientes);

    // obtener clientes en especifico

    router.get('/clientes/:idCliente', clienteController.getCienteById);

    // actualizar cliente por id
    router.put('/clientes/:idCliente', clienteController.updateCliente);

    // eliminar un cliente por id

    router.delete('/clientes/:idCliente', clienteController.deleteCliente);



    /**DEFINIR RUTAS PARA PRODUCTOS**/
    // Agregar nuevos productos via post


    router.post('/productos',
                productosController.uploadFiles, 
                productosController.setProductos
    );

    router.get('/productos', productosController.getProductos);

    router.get('/productos/:idProducto', productosController.getProductosById);

    // actualizar productos

    router.put('/productos/:idProducto',
        productosController.uploadFiles, 
        productosController.updateProducto
    );

    router.delete('/productos/:idProducto', productosController.deleteProducto);


    /**Pedidos */
    // agrega nuevos pedidos
    router.post('/pedidos', pedidosController.setPedido);

    // obtener pedidos
    router.get('/pedidos', pedidosController.getPedidos);

    // obtener por id
    router.get('/pedidos/:idPedido', pedidosController.getPedidosById);


    return router;
}