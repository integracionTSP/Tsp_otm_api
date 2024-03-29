
const express = require('express');
const router = express.Router();

const authController = require('../../dao/controller/authController/auth.controller')

router.route('/getAllUserPass')
.get(authController.getAllUserPass);


router.route('/getAllUsers')
    .get(authController.getAllUsers);

router.route('/getUrlEnpoints')
.get(authController.getUrlEndpoint);

module.exports = router;

