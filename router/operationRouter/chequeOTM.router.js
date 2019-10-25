const express = require('express');
const router = express.Router();

const chequeOTMController = require('../../dao/controller/operationController/chequeOtm.controller');

router.route('/getAgencyiD/:IDUSER')
    .get(chequeOTMController.getAgencyiD);


 router.route('/getCheckList/:IDUSER/:AGENCYID')
.get(chequeOTMController.getCheckList);


 router.route('/getActiveAccounts/:IDUSER/:AGENCYID/:ACCOUNTNIT')
.get(chequeOTMController.getActiveAccounts);


 router.route('/getAccountDescription/:IDUSER/:AGENCYID/:ACCOUNT/:ACCOUNTNIT')
 .get(chequeOTMController.getAccountDescription);


router.route('/getProviderNit/')
.get(chequeOTMController.getProviderNit);


router.route('/getBank/')
.get(chequeOTMController.getBank);

router.route('/getAccountType/')
.get(chequeOTMController.getAccountType);


router.route('/updateAdvanced')
.post(chequeOTMController.Updateadvanced);



router.route('/updateAdvancedConfirm')
.post(chequeOTMController.updateAdvancedConfirm);

router.route('/updateAdvancedValue')
.post(chequeOTMController.updateAdvancedValue);


router.route('/AddAcount')
.post(chequeOTMController.AddAcount);


module.exports = router;