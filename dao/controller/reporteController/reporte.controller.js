const dbConnection = require('../../../config/database/conexiondb');
const reportePersistence = require('../../persistence/reportePersistence/reporte.persistence');


const getReporte = (req, res) => {
    const pool = dbConnection();
    pool.query(reportePersistence.reporteOtShipmentBuy, (error, results) => {
        if (error) {
            console.log("Error en reporte.controller.js => getReporte");
            console.log(error);
            res.json({
                status: 500,
                error: true,
                response: null
            });
            pool.end();
        } else {
            if (results.rows.length > 0) {
                res.json({
                    status: 200,
                    error: null,
                    response: results.rows
                });
            } else {
                response.json({
                    status: 404,
                    error: 1,
                    response: 'No existe datos para este reporte'
                });

                console.log('No existe datos para este reporte');
            }
            pool.end();
        }
        
    });
}



module.exports = {
    getReporte
}