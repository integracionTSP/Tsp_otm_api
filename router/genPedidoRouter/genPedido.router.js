const express = require('express');
const router = express.Router();

const genPedidoController = require('./../../dao/controller/genPedidoController/genPedido.controller')

router.route('/getGenPedido/:order_id')
    .get(genPedidoController.getGenOrder);

  

module.exports = router;