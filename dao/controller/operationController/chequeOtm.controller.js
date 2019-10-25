const dbConnection = require('../../../config/database/conexiondb');
const chequeOTMPersistence = require('../../persistence/operationPersistence/chequeOTM.persistence');
const functionUtil = require('../../../helper/util/function.util');

const getAgencyiD =  (request, response) => {

    const pool = dbConnection();

    //console.log('conexion',pool);

    let IDUSER = request.params.IDUSER;
   
   
    console.log(request.params);

        console.log(' Entrando a getAgencyiD');
        pool.query(chequeOTMPersistence.queryAgencyiD, [IDUSER], (error,results)=>{
            if (error) {
    
                console.log("Error en chequeOTMController.js =>  getAgencyiD");
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

const getCheckList =  (request, response) => {

    const pool = dbConnection();

    //console.log('conexion',pool);

    let IDUSER = request.params.IDUSER;
    let AGENCYID = request.params.AGENCYID;
   
   
    console.log(request.params);

        console.log(' Entrando a getCheckList');
        pool.query(chequeOTMPersistence.queryCheckList, [IDUSER,AGENCYID], (error,results)=>{
            if (error) {
    
                console.log("Error en chequeOTMController.js =>  getCheckList");
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



const getActiveAccounts =  (request, response) => {

    const pool = dbConnection();

    //console.log('conexion',pool);

    let IDUSER = request.params.IDUSER;
    let AGENCYID = request.params.AGENCYID;
    let ACCOUNTNIT =  request.params.ACCOUNTNIT
   
   
    console.log(request.params);

        console.log(' Entrando a getActiveAccounts');
        pool.query(chequeOTMPersistence.queryActiveAccounts, [IDUSER,AGENCYID,ACCOUNTNIT], (error,results)=>{
            if (error) {
    
                console.log("Error en chequeOTMController.js =>  getActiveAccounts");
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




const getAccountDescription =  (request, response) => {

    const pool = dbConnection();

    //console.log('conexion',pool);

    let IDUSER = request.params.IDUSER;
    let AGENCYID = request.params.AGENCYID;
    let ACCOUNT = request.params.ACCOUNT;
    let ACCOUNTNIT = request.params.ACCOUNTNIT;
   
    console.log(request.params);

        console.log(' Entrando a getAccountDescription');
        pool.query(chequeOTMPersistence.queryAccountDescription, [IDUSER,AGENCYID,ACCOUNT,ACCOUNTNIT], (error,results)=>{
            if (error) {
    
                console.log("Error en chequeOTMController.js =>  getAccountDescription");
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



const getProviderNit =  (request, response) => {

    const pool = dbConnection();

    //console.log('conexion',pool);

    console.log(request.params);

        console.log(' Entrando a getProviderNit');
        pool.query(chequeOTMPersistence.queryProviderNit, (error,results)=>{
            if (error) {
    
                console.log("Error en chequeOTMController.js =>  getProviderNit");
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




const getBank =  (request, response) => {

    const pool = dbConnection();

    //console.log('conexion',pool);

    console.log(request.params);

        console.log(' Entrando a getBank');
        pool.query(chequeOTMPersistence.queryBank, (error,results)=>{
            if (error) {
    
                console.log("Error en chequeOTMController.js =>  getBank");
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




const getAccountType =  (request, response) => {

    const pool = dbConnection();

    //console.log('conexion',pool);

    console.log(request.params);

        console.log(' Entrando a getAccountType');
        pool.query(chequeOTMPersistence.queryAccounType, (error,results)=>{
            if (error) {
    
                console.log("Error en chequeOTMController.js =>  getAccountType");
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



// actualizar anticipo

const Updateadvanced =  (request, response) => {
    const pool = dbConnection();


    const { accountID, accountName, bank,accountNumber,accountType,accountNit,oldAccountNumber  } = request.body;

    console.log('campos traidos', request.body);
    

        pool.query(chequeOTMPersistence.queryUpdateadvanced, 
            [accountID, accountName, bank,accountNumber,accountType,accountNit,oldAccountNumber ], (error, results) => {
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
                response: 'Registro actualizado correctamente',
                data:results.rows[0]
            });

            console.log('Registro actualizado correctamente');
        }
    });

}



const updateAdvancedConfirm =  (request, response) => {
    const pool = dbConnection();


    const { idUser, providerNit, advancedType, accountNit  } = request.body;

    console.log('campos traidos', request.body);
    

        pool.query(chequeOTMPersistence.queryAdvancedConfirm, 
            [ idUser, providerNit, advancedType, accountNit], (error, results) => {
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
                response: 'Registro actualizado correctamente',
                data:results.rows[0]
            });

            console.log('Registro actualizado correctamente');
        }
    });

}


const updateAdvancedValue =  (request, response) => {
    const pool = dbConnection();


    const {advancedValue, shipmentGID } = request.body;

    console.log('campos traidos', request.body);
    

        pool.query(chequeOTMPersistence.queryAdvancedValue, 
            [advancedValue, shipmentGID ], (error, results) => {
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
                response: 'Registro actualizado correctamente',
                data:results.rows[0]
            });

            console.log('Registro actualizado correctamente');
        }
    });

}




const AddAcount =  (request, response) => {
    const pool = dbConnection();


    const {regStatus, dstrct,accountNit, bank, accountNumber, accountType,accountName, accountID  } = request.body;

    console.log('campos traidos', request.body);
    

        pool.query(chequeOTMPersistence.queryAddAcount, 
            [regStatus, dstrct,accountNit, bank, accountNumber, accountType,accountName, accountID   ], (error, results) => {
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
                response: 'Registro insertados correctamente',
                data:results.rows[0]
            });

            console.log('Registro insertados correctamente');
        }
    });

}




module.exports = {
    getAgencyiD,
    getCheckList,
    getActiveAccounts,
    getAccountDescription,
    getProviderNit,
    getBank,
    getAccountType,
    Updateadvanced,
    updateAdvancedConfirm,
    updateAdvancedValue,
    AddAcount

}
