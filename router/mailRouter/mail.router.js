const express = require('express');
const router = express.Router();

const mailController = require('../../dao/controller/mailController/mail.controller');

router.route('/send')
    .post(mailController.sendEmail);

module.exports = router;