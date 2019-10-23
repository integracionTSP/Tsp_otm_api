// DESTINOS ASOCIADOS AL CONDUCTOR
const querygetDriverDest = `querygetDriverDest`;


// DESTINOS DISTINTOS A LOS ASOCIADOS
const querygetDistintDest = `querygetDistintDest`;


// datos para validar si esta inactivo y si expiro la licencia 
const querygetDriverValid = `querygetDriverValid`

// datos para verificar VENCIMIENTO SOAT,  VENCIMIENTO TECNOMECANICA, PLACA INACTIVA
const querygetPowerValid = `querygetPowerValid`
   
// guardar reporte
const queryAddOperation = `queryAddOperation`



module.exports = {
    querygetDriverDest,
    querygetDistintDest,
    querygetDriverValid,
    querygetPowerValid,
    queryAddOperation
}