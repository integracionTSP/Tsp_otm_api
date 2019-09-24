const dbConnection = require('../../../config/database/conexiondb');
const functionUtil = require('../../..//helper/util/function.util');
const constCumplidoPersistence = require('../../persistence/constCumplidoPersistence/constCumplido.persistence');

const getconstcompliment = async  (request, response) => {

    const pool = dbConnection();

    // parametros shipment_gid(planilla), power_unit_gid(placa), driver_gid(conductor)
    let POWER_UNIT_GID = request.params.POWER_UNIT_GID;
    let START_DATE = request.params.START_DATE;
    let END_DATE = request.params.END_DATE;

    console.log(request.params);

        

       await functionUtil.getQuery(constCumplidoPersistence.querygetconstcompliment).then((result)=>{


        console.log(' Entrando a getconstcompliment');
        pool.query(result, [POWER_UNIT_GID,START_DATE,END_DATE], (error,results)=>{
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
    });


}



// add log de los reportes generados
const addOpeConstcomplimentReports = async (request, response) => {
    const pool = dbConnection();
    const { SHIPMENT_GID, POWER_UNIT_GID, DRIVER_GID, INSERT_DATE, INSERT_USER, FECHA_CONST_CUMP, 
        TIQUETE_CARGUE, SOURCE_LOCATION_GID, DEST_LOCATION_GID} = request.body;

        console.log('parametros',request.body) ;


        await functionUtil.getQuery(constCumplidoPersistence.queryAddOpeConstcompliment).then((result)=>{

        
        pool.query(result, 
            [SHIPMENT_GID, POWER_UNIT_GID, DRIVER_GID, INSERT_DATE, INSERT_USER, FECHA_CONST_CUMP, 
             TIQUETE_CARGUE, SOURCE_LOCATION_GID, DEST_LOCATION_GID], (error, results) => {
        if (error) {
            response.json({
                status: 500,
                error: true,
                response: null
            });
            console.log(error);

        } else {
            response.json({
                status: 200,
                error: null,
                response: 'Registro insertado correctamente',
                data:results.rows
            });

            console.log('Registro insertado correctamente');
        }
        pool.end();

        });
    });
}













module.exports = {
    getconstcompliment,
    addOpeConstcomplimentReports
 
}

