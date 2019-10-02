const dbConnection = require('../../../config/database/conexiondb');
const genPedidoPersistence = require('../../persistence/genPedidoPersistence/genPedido.persistence');




const getGenOrder = (request, response) => {
    const pool = dbConnection();
    console.log("Entrando a getGenOrder ");

    let order_id = request.params.order_id;

    pool.query(genPedidoPersistence.genOrder,[order_id], (error, results) => {
        if (error) {
            response.json({
                status: 500,
                error: true,
                response: null
            });
            //response.send(JSON.stringify({ "status": 500, "error": error, "response": null }));
            console.log("Error en authController.js =>  getGenOrder ");
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
    getGenOrder
}

