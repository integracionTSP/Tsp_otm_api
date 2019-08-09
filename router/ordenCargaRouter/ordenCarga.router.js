const express = require('express');
const router = express.Router();

const ordenCargaController = require('../../dao/controller/ordenCargaController/ordenCarga.controller');

router.route('/getAsociados/:POWER_UNIT_GID/:DRIVER_GID')
    .get(ordenCargaController.getDestinosAsociados);

router.route('/getDistintos/:POWER_UNIT_GID/:DRIVER_GID')
    .get(ordenCargaController.getDestinosDistintos);

router.route('/getPlacaId/:POWER_UNIT_GID/:DRIVER_GID')
    .get(ordenCargaController.getPlacasIdent);

router.route('/getTodoDatos')
    .get(ordenCargaController.getTodoDatos);

router.route('/getAllUserPass')
    .get(ordenCargaController.getAllUserPass);

router.route('/getPrintShipment/:POWER_UNIT_GID/:DRIVER_GID/:SOURCE_LOCATION_GID/:DEST_LOCATION_GID')
    .get(ordenCargaController.getPrintShipment);

router.route('/getDriverValid/:DRIVER_GID')
    .get(ordenCargaController.getDriverValid);

router.route('/getPowerValid/:PLACA')
    .get(ordenCargaController.getPowerValid);


router.route('/getPowerDriverValid/:PLACA/:DRIVER_GID')
    .get(ordenCargaController.getPowerDriverValid);

router.route('/saveReports')
    .post(ordenCargaController.addOperationReports);

router.route('/getAllUsers')
    .get(ordenCargaController.getAllUsers);

module.exports = router;