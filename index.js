const ordenCargaRouter = require('./router/ordenCargaRouter/orderCarga.router');
const PORT = 3000;
con = ordenCargaRouter.app;

con.listen(PORT ,() => {
    console.log(`App running on port ${PORT}.`);
})