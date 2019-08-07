const express = require('express');
const router = express.Router();

const reporteController = require('../../dao/controller/reporteController/reporte.controller');

router.route('/reporteOtShipmentBuy')
    .get(reporteController.getReporte);

module.exports = router;