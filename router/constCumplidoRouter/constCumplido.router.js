const express = require('express');
const router = express.Router();

const constCumplidoController = require('../../dao/controller/constCumplidoController/constCumplido.controller')

router.route('/getconstcompliment/:POWER_UNIT_GID/:START_DATE/:END_DATE')
    .get(constCumplidoController.getconstcompliment);


router.route('/addConstReport')
    .post(constCumplidoController.addOpeConstcomplimentReports);


module.exports = router;