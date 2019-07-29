const baseRouter = require('../base.router');
const ordenCargaCtr = require('../../dao/controller/ordenCargaController/ordenCarga.controller');
const app = baseRouter.app;


app.get('/api/ordenCarga/getAsociados/:POWER_UNIT_GID/:DRIVER_GID', ordenCargaCtr.getDestinosAsociados);
app.get('/api/ordenCarga/getDistintos/:POWER_UNIT_GID/:DRIVER_GID', ordenCargaCtr.getDestinosDistintos);
app.get('/api/ordenCarga/getPlacaId/:POWER_UNIT_GID/:DRIVER_GID', ordenCargaCtr.getPlacasIdent);



module.exports = {
    app
}

