const baseRouter = require('../base.router');
const ordenCargaCtr = require('../../dao/controller/ordenCargaController/ordenCarga.controller');
const app = baseRouter.app;



app.get('/api/ordenCarga/getAsociados/:POWER_UNIT_GID/:DRIVER_GID', ordenCargaCtr.getDestinosAsociados);
app.get('/api/ordenCarga/getDistintos/:POWER_UNIT_GID/:DRIVER_GID', ordenCargaCtr.getDestinosDistintos);
app.get('/api/ordenCarga/getPlacaId/:POWER_UNIT_GID/:DRIVER_GID', ordenCargaCtr.getPlacasIdent);
app.get('/api/ordenCarga/getTodoDatos', ordenCargaCtr.getTodoDatos);
app.get('/api/ordenCarga/getAllUserPass', ordenCargaCtr.getAllUserPass);



module.exports = {
    app
}

