const dbConnection = require('../../../config/database/conexiondb');
const ordenCargaPersistence = require('../../persistence/ordenCargaPersistence/ordenCarga.persistence');



//Consultar DESTINOS ASOCIADOS AL CONDUCTOR
const getDestinosAsociados = (request, response) => {
    const pool = dbConnection();

    // parametros placa(POWER_UNIT_GID) y conductor(DRIVER_GID)
    let POWER_UNIT_GID = request.params.POWER_UNIT_GID;
    let DRIVER_GID = request.params.DRIVER_GID;
    console.log("Entrando a getDestinosAsociados");
    pool.query(ordenCargaPersistence.querygetDriverDest, [POWER_UNIT_GID, DRIVER_GID], (error, results) => {
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
                    response: 'No existe movimiento con datos ingresados'
                });
                //response.send(JSON.stringify({ "status": 404, "error": 1, "response": "No existe movimiento con datos ingresados" }));
                console.log("No existe movimiento con datos ingresados");
            }

        }
        pool.end();
    });


}




// DESTINOS DISTINTOS A LOS ASOCIADOS
const getDestinosDistintos = (request, response) => {
    const pool = dbConnection();

    // parametros placa(POWER_UNIT_GID) y conductor(DRIVER_GID)
    let POWER_UNIT_GID = request.params.POWER_UNIT_GID;
    let DRIVER_GID = request.params.DRIVER_GID;
    console.log("Entrando a getDestinosDistintos");
    pool.query(ordenCargaPersistence.querygetDistintDest, [POWER_UNIT_GID, DRIVER_GID], (error, results) => {
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
                    response: "No existe movimiento con datos ingresados"
                });
                //response.send(JSON.stringify({ "status": 404, "error": 1, "response": "No existe movimiento con datos ingresados" }));
                console.log("No existe movimiento con datos ingresados");
            }

        }
        pool.end();
    });


}



// Placas e identificacion
const getPlacasIdent = (request, response) => {

    const pool = dbConnection();
    // parametros placa(POWER_UNIT_GID) y conductor(DRIVER_GID)
    let POWER_UNIT_GID = request.params.POWER_UNIT_GID;
    let DRIVER_GID = request.params.DRIVER_GID;
    console.log("Entrando a getPlacasIdent");
    pool.query(ordenCargaPersistence.querygetPowerDriver, [POWER_UNIT_GID, DRIVER_GID], (error, results) => {
        if (error) {

            response.json({
                status: 500,
                error: true,
                response: null
            });
            //response.send(JSON.stringify({ "status": 500, "error": error, "response": null }));
            console.log("Error en ordenCargaController.js =>  getPlacasIdent");
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
                    response: 'No existe movimiento con datos ingresados'
                });
                //response.send(JSON.stringify({ "status": 404, "error": 1, "response": "No existe movimiento con datos ingresados" }));
                console.log("No existe movimiento con datos ingresados");
            }

        }
        pool.end();
    });


}





// todos los datos
const getTodoDatos = (request, response) => {
    const pool = dbConnection();
    console.log("Entrando a getTodoDatos");
    pool.query(ordenCargaPersistence.queryAllData, (error, results) => {
        if (error) {
            response.json({
                status: 500,
                error: true,
                response: null
            });
            //response.send(JSON.stringify({ "status": 500, "error": error, "response": null }));
            console.log("Error en ordenCargaController.js =>  getTodoDatos");
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
                    response: 'No existe movimiento con datos ingresados'
                });
                //response.send(JSON.stringify({ "status": 404, "error": 1, "response": "No existe movimiento con datos ingresados" }));
                console.log("No existe movimiento con datos ingresados");
            }

        }
        pool.end();
    });


}


// todos los usuarios y contraseñas
const getAllUserPass = (request, response) => {
    const pool = dbConnection();
    console.log("Entrando a getAllUserPass ");
    pool.query(ordenCargaPersistence.queryAllUserPass, (error, results) => {
        if (error) {
            response.json({
                status: 500,
                error: true,
                response: null
            });
            //response.send(JSON.stringify({ "status": 500, "error": error, "response": null }));
            console.log("Error en ordenCargaController.js =>  getAllUserPass ");
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
                    response: 'No existe movimiento con datos ingresados'
                });
                //response.send(JSON.stringify({ "status": 404, "error": 1, "response": "No existe movimiento con datos ingresados" }));
                console.log("No existe movimiento con datos ingresados");
            }

        }
        pool.end();
    });


}



// todos los usuarios y contraseñas
const getPrintShipment = (request, response) => {

    const pool = dbConnection();

    let POWER_UNIT_GID = request.params.POWER_UNIT_GID;
    let DRIVER_GID = request.params.DRIVER_GID;
    let SOURCE_LOCATION_GID = request.params.SOURCE_LOCATION_GID;
    let DEST_LOCATION_GID = request.params.DEST_LOCATION_GID;

    console.log("Entrando a getPrintShipment ");
    pool.query(ordenCargaPersistence.querygetPrintShipment, [POWER_UNIT_GID, DRIVER_GID, SOURCE_LOCATION_GID, DEST_LOCATION_GID], (error, results) => {
        if (error) {
            response.json({
                status: 500,
                error: true,
                response: null
            });
            //response.send(JSON.stringify({ "status": 500, "error": error, "response": null }));
            console.log("Error en ordenCargaController.js =>  getPrintShipment ");
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
                    response: 'No existe movimientos con datos ingresados'
                });
                //response.send(JSON.stringify({ "status": 404, "error": 1, "response": "No existe movimiento con datos ingresados" }));
                console.log("No existe movimiento con datos ingresados");
            }

        }
        pool.end();
    });


}


// datos para validar si esta inactivo y si expiro la licencia 
const getDriverValid = (request, response) => {
    const pool = dbConnection();
    let DRIVER_GID = request.params.DRIVER_GID;

    console.log("Entrando a getDriverValid  ");
    pool.query(ordenCargaPersistence.querygetDriverValid, [DRIVER_GID], (error, results) => {
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
                    response: "No existe movimiento con datos ingresados"
                });
                //response.send(JSON.stringify({ "status": 404, "error": 1, "response": "No existe movimiento con datos ingresados" }));
                console.log("No existe movimiento con datos ingresados");
            }

        }
        pool.end();
    });


}



// datos para validar si esta inactivo y si expiro la licencia 
const getPowerValid = (request, response) => {
    const pool = dbConnection();

    let POWER_UNIT_GID = request.params.PLACA;

    console.log("Entrando a getPowerValid  ");
    pool.query(ordenCargaPersistence.querygetPowerValid, [POWER_UNIT_GID], (error, results) => {
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
                    response: 'No existe movimiento con datos ingresados'
                });
                //response.send(JSON.stringify({ "status": 404, "error": 1, "response": "No existe movimiento con datos ingresados" }));
                console.log("No existe movimiento con datos ingresados");
            }

        }
        pool.end();
    });


}


module.exports = {
    getDestinosAsociados,
    getDestinosDistintos,
    getPlacasIdent,
    getTodoDatos,
    getAllUserPass,
    getPrintShipment,
    getDriverValid,
    getPowerValid


}