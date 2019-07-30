const UtilUrl = require('../../../helper/util/path.util');
const conexion = require(UtilUrl.baseUrlconn);
const ordenCargaPersistence = require(UtilUrl.baseUrlPers + 'ordenCargaPersistence/ordenCarga.persistence');
const pool = conexion.pool;


//Consultar DESTINOS ASOCIADOS AL CONDUCTOR
const getDestinosAsociados = (request, response) => {

    
    // parametros placa(POWER_UNIT_GID) y conductor(DRIVER_GID)
    let POWER_UNIT_GID = request.params.POWER_UNIT_GID;
    let DRIVER_GID = request.params.DRIVER_GID;
    console.log("Entrando a getDestinosAsociados");
    pool.query(ordenCargaPersistence.querygetDriverDest, [POWER_UNIT_GID, DRIVER_GID], (error, results) => {
        if (error) {
            response.send(JSON.stringify({ "status": 500, "error": error, "response": null }));
            console.log("Error en ordenCargaController.js => getDestinosAsociados");
            console.log(error);
        } else {
            if (results.rows.length > 0) {
                response.send(JSON.stringify({ "status": 200, "error": null, "response": results.rows }));
                console.log(results.rows);
            } else {
                response.send(JSON.stringify({ "status": 404, "error": 1, "response": "No existe movimiento con datos ingresados" }));
                console.log("No existe movimiento con datos ingresados");
            }
            
        }
        
    });

   
}




// DESTINOS DISTINTOS A LOS ASOCIADOS
const getDestinosDistintos = (request, response) => {

    
    // parametros placa(POWER_UNIT_GID) y conductor(DRIVER_GID)
    let POWER_UNIT_GID = request.params.POWER_UNIT_GID;
    let DRIVER_GID = request.params.DRIVER_GID;
    console.log("Entrando a getDestinosDistintos");
    pool.query(ordenCargaPersistence.querygetDistintDest , [POWER_UNIT_GID, DRIVER_GID], (error, results) => {
        if (error) {
            response.send(JSON.stringify({ "status": 500, "error": error, "response": null }));
            console.log("Error en ordenCargaController.js => getDestinosDistintos");
            console.log(error);
            
        } else {
            if (results.rows.length > 0) {
                response.send(JSON.stringify({ "status": 200, "error": null, "response": results.rows }));
                console.log(results.rows);
            } else {
                response.send(JSON.stringify({ "status": 404, "error": 1, "response": "No existe movimiento con datos ingresados" }));
                console.log("No existe movimiento con datos ingresados");
            }
            
        }
        
    });

  
}



// Placas e identificacion
const getPlacasIdent = (request, response) => {

    
    // parametros placa(POWER_UNIT_GID) y conductor(DRIVER_GID)
    let POWER_UNIT_GID = request.params.POWER_UNIT_GID;
    let DRIVER_GID = request.params.DRIVER_GID;
    console.log("Entrando a getPlacasIdent");
    pool.query(ordenCargaPersistence.querygetPowerDriver , [POWER_UNIT_GID, DRIVER_GID], (error, results) => {
        if (error) {
            response.send(JSON.stringify({ "status": 500, "error": error, "response": null }));
            console.log("Error en ordenCargaController.js =>  getPlacasIdent");
            console.log(error);
            
        } else {
            if (results.rows.length > 0) {
                response.send(JSON.stringify({ "status": 200, "error": null, "response": results.rows }));
                console.log(results.rows);
            } else {
                response.send(JSON.stringify({ "status": 404, "error": 1, "response": "No existe movimiento con datos ingresados" }));
                console.log("No existe movimiento con datos ingresados");
            }
            
        }
        
    });

  
}





// todos los datos
const getTodoDatos = (request, response) => {

    

    console.log("Entrando a getTodoDatos");
    pool.query(ordenCargaPersistence.queryAllData , (error, results) => {
        if (error) {
            response.send(JSON.stringify({ "status": 500, "error": error, "response": null }));
            console.log("Error en ordenCargaController.js =>  getTodoDatos");
            console.log(error);
            
        } else {
            if (results.rows.length > 0) {
                response.send(JSON.stringify({ "status": 200, "error": null, "response": results.rows }));
                console.log(results.rows);
            } else {
                response.send(JSON.stringify({ "status": 404, "error": 1, "response": "No existe movimiento con datos ingresados" }));
                console.log("No existe movimiento con datos ingresados");
            }
            
        }
        
    });

  
}

module.exports = {
    getDestinosAsociados,
    getDestinosDistintos,
    getPlacasIdent,
    getTodoDatos

}