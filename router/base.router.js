const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const app = express();

app.set('json spaces', 4);
app.use(morgan('combined'));
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

//Permisos de Intercambio de Recursos de Origen Cruzado (CORS)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

  next();
});

app.get('/', (req, res) => {
  return res.status(200).send('<h3>Bienvenidos a la API TABLAGEN</h3>');
});


module.exports = {

  app
}