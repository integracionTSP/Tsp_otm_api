const dbConnection = require('../../../config/database/conexiondb');
const authPersistence = require('../../persistence/authPersistence/auth.persistence');
const functionUtil = require('../../../helper/util/function.util');
const cryptoJS = require('crypto-js');


// todos los usuarios y contraseñas
const getAllUserPass = async (request, response) => {
    const pool = dbConnection();
    console.log("Entrando a getAllUserPass ");

    await functionUtil.getQuery(authPersistence.queryAllUserPass).then((result)=>{
    pool.query(result, (error, results) => {
        if (error) {
            response.json({
                status: 500,
                error: true,
                response: null
            });
            //response.send(JSON.stringify({ "status": 500, "error": error, "response": null }));
            console.log("Error en authController.js =>  getAllUserPass ");
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


const getAllUsers = (request, response) => {
    const pool = dbConnection();
    console.log("Entrando a getAllUsers ");
    n = 0;
    pool.query(authPersistence.queryAllUserPass, (error, results) => {let usuarios = results.rows;

        usuarios.forEach((user) => {
           pool.query(authPersistence.queryUpdateDefaultPassWord, [cryptoJS.SHA512(user.idusuario).toString(), user.idusuario]);
          n=n+1;
          console.log(n)
        })
        console.log('Finalizó')

        pool.end();
    });


}



// todos los usuarios y contraseñas
const getUrlEndpoint = (request, response) => {
    const pool = dbConnection();
    console.log("Entrando a getUrlEndpoint ");
    pool.query(authPersistence.queryUrlEndpoint, (error, results) => {
        if (error) {
            response.json({
                status: 500,
                error: true,
                response: null
            });
            //response.send(JSON.stringify({ "status": 500, "error": error, "response": null }));
            console.log("Error en authController.js =>  getUrlEndpoint ");
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


}

module.exports = {
    getAllUserPass,
    getAllUsers,
    getUrlEndpoint
}

