const dbConnection = require('../../../config/database/conexiondb');
const ordenCargaPersistence = require('../../persistence/ordenCargaPersistence/ordenCarga.persistence');
const functionUtil = require('../../../helper/util/function.util');
const cryptoJS = require('crypto-js');



//Consultar DESTINOS ASOCIADOS AL CONDUCTOR
const getDestinosAsociados = async (request, response) => {
    const pool = dbConnection();



    // parametros placa(POWER_UNIT_GID) y conductor(DRIVER_GID)
    let POWER_UNIT_GID = request.params.POWER_UNIT_GID.toString().toUpperCase();
    let DRIVER_GID = request.params.DRIVER_GID;
    console.log("Entrando a getDestinosAsociados");
    
    
    await functionUtil.getQuery(ordenCargaPersistence.querygetDriverDest).then((result)=>{
    
    pool.query(result, [POWER_UNIT_GID, DRIVER_GID], (error, results) => {
        if (error) {

            console.log("Error en ordenCargaController.js => getDestinosAsociados");
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



// DESTINOS DISTINTOS A LOS ASOCIADOS
const getDestinosDistintos = async (request, response) => {
    const pool = dbConnection();

    // parametros placa(POWER_UNIT_GID) y conductor(DRIVER_GID)
    let POWER_UNIT_GID = request.params.POWER_UNIT_GID;
    let DRIVER_GID = request.params.DRIVER_GID;
    console.log("Entrando a getDestinosDistintos");

    await functionUtil.getQuery(ordenCargaPersistence.querygetDistintDest).then((result)=>{

    pool.query(result, [POWER_UNIT_GID, DRIVER_GID], (error, results) => {
        if (error) {
            //response.send(JSON.stringify({ "status": 500, "error": error, "response": null }));
            console.log("Error en ordenCargaController.js => getDestinosDistintos");
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


// datos para validar si esta inactivo y si expiro la licencia 
const getDriverValid = async (request, response) => {
    const pool = dbConnection();
    let DRIVER_GID = request.params.DRIVER_GID;

    console.log("Entrando a getDriverValid  ");

    await functionUtil.getQuery(ordenCargaPersistence.querygetDriverValid).then((result)=>{
    pool.query(result, [DRIVER_GID], (error, results) => {
        if (error) {
            response.json({
                status: 500,
                error: true,
                response: null
            });
            //response.send(JSON.stringify({ "status": 500, "error": error, "response": null }));
            console.log("Error en ordenCargaController.js =>  getDriverValid  ");
            console.log(error);

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



// datos para validar si esta inactivo y si expiro la licencia 
const getPowerValid = async (request, response) => {
    const pool = dbConnection();

    let POWER_UNIT_GID = request.params.PLACA.toString().toUpperCase();
  

    console.log(POWER_UNIT_GID);
    
    console.log("Entrando a getPowerValid  ");

    await functionUtil.getQuery(ordenCargaPersistence.querygetPowerValid).then((result)=>{
    pool.query(result, [POWER_UNIT_GID], (error, results) => {
        if (error) {
            response.json({
                status: 500,
                error: true,
                response: null
            });
            //response.send(JSON.stringify({ "status": 500, "error": error, "response": null }));
            console.log("Error en ordenCargaController.js =>  getPowerValid  ");
            console.log(error);

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
const addOperationReports = async (request, response) => {
    const pool = dbConnection();


    await functionUtil.getQuery(ordenCargaPersistence.queryAddOperation).then((result)=>{

    const { shipment_gid, driver_gid, power_unit_gid, insert_date, insert_user, order_date, 
        source_location_gid, dest_location_gid } = request.body;
        pool.query(result, 
            [shipment_gid, driver_gid, power_unit_gid, insert_date, insert_user, order_date,
             source_location_gid, dest_location_gid], (error, results) => {
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
                data:results.rows[0]
            });

            console.log('Registro insertado correctamente');
        }
    });
});
}




module.exports = {
    getDestinosAsociados,
    getDestinosDistintos,
    getDriverValid,
    getPowerValid,
    addOperationReports
   
}

