const nodemailer = require('nodemailer');

module.exports = {
    sendEmail: (req, res) => {

        let { p_to, p_subject, p_body } = req.body

        const transporter = nodemailer.createTransport({
            host: 'tspcorreo.sanchezpolo.com',
            port: 465,
            secure: false,
            auth: {
                user: 'ordendecarga',
                pass: '12345678'
            }
        });

        let mailOptions = {
            from: '"Orde de carga" <ordendecarga@sanchezpolo.com>',
            to: p_to,
            subject: p_subject,
            text: p_body,
            cc: 'adjog96@gmail.com'
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.json({
                    error: true,
                    data: error
                });

                //res.send(500, error.message);
            } else {
                console.log("Email sent");
                res.json({
                    success: true,
                    data: "Email sent"
                });

                //res.status(200).jsonp(req.body);
            }
        });
    }

}