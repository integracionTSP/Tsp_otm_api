const express = require('express');
const router = express.Router();

const constCumplidoController = require('../../dao/controller/constCumplidoController/constCumplido.controller')

router.route('/getconstcompliment/:POWER_UNIT_GID/:SHIPMENT_GID*?/:DRIVER_GID*?')
    .get(constCumplidoController.getconstcompliment);


module.exports = router;