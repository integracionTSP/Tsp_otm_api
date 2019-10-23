const express = require('express');
const bodyParser = require('body-parser')
const morgan = require('morgan');

//Objetos de las RUTAS donde se encuentran los servicios

const ordenCargaRoutes = require('./router/ordenCargaRouter/ordenCarga.router')
const mailRoutes = require('./router/mailRouter/mail.router')
const reporteRoutes = require('./router/reporteRouter/reporte.router')
const constCumplidoRoutes = require ('./router/constCumplidoRouter/constCumplido.router')
const authRoutes = require ('./router/authRouter/auth.router')
const genPedidoRoutes = require('./router/genPedidoRouter/genPedido.router')
const chequeOTMRouter =  require('./router/operationRouter/chequeOTM.router')


//------------------------------------------------------


const app = express();
const PORT = 3000;

app.set('json spaces', 4)

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Permisos de Intercambio de Recursos de Origen Cruzado (CORS)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
});



// definiendo las rutas por modulos
app.use('/api/ordenCarga', ordenCargaRoutes);

app.use('/api/mail', mailRoutes);

app.use('/api/reportes',reporteRoutes);

app.use('/api/constCumplido', constCumplidoRoutes);

app.use('/api/auth',authRoutes)

app.use('/api/genPedido', genPedidoRoutes)

app.use('/api/chequeOTM',chequeOTMRouter)
//---------------------------------



// Iniciar el server
app.listen(PORT, () => {
    console.log(`Server en puerto: ${PORT}`);
});
//------------------