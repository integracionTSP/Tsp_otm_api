const dbConnection = require('../../../config/database/conexiondb');
const constCumplidoPersistence = require('../../persistence/constCumplidoPersistence/constCumplido.persistence');

const getconstcompliment = (request, response) => {

    const pool = dbConnection();

    // parametros shipment_gid(planilla), power_unit_gid(placa), driver_gid(conductor)
    let POWER_UNIT_GID = request.params.POWER_UNIT_GID;
    let SHIPMENT_GID = request.params.SHIPMENT_GID;
    let DRIVER_GID = request.params.DRIVER_GID;

    console.log(' Entrando a getconstcompliment');

    pool.query(constCumplidoPersistence.querygetconstcompliment, [POWER_UNIT_GID,SHIPMENT_GID,DRIVER_GID], (error,results)=>{
        if (error) {

            console.log("Error en constCumplidoController.js =>  getconstcompliment");
            console.log(error);
            response.json({
                status: 500,
                error: true,
                response: null
            });

        } else {
            if (results.rows.length > 0) {
                response.json({
                    status: 200,
                    error: null,
                    response: results.rows
                });
                //response.send(JSON.stringify({ "status": 200, "error": null, "response": results.rows }));
                console.log(results.rows);
            } else {
                response.json({
                    status: 404,
                    error: 1,
                    response: null
                });
                //response.send(JSON.stringify({ "status": 404, "error": 1, "response": null }));
                console.log(null);
            }

        }
        pool.end();
    });


}


module.exports = {
    getconstcompliment
 
}

