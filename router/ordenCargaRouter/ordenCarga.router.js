const express = require('express');
const router = express.Router();

const ordenCargaController = require('../../dao/controller/ordenCargaController/ordenCarga.controller');

router.route('/getAsociados/:POWER_UNIT_GID/:DRIVER_GID')
    .get(ordenCargaController.getDestinosAsociados);

router.route('/getDistintos/:POWER_UNIT_GID/:DRIVER_GID')
    .get(ordenCargaController.getDestinosDistintos);

router.route('/getDriverValid/:DRIVER_GID')
    .get(ordenCargaController.getDriverValid);

router.route('/getPowerValid/:PLACA')
    .get(ordenCargaController.getPowerValid);


router.route('/saveReports')
    .post(ordenCargaController.addOperationReports);



module.exports = router;