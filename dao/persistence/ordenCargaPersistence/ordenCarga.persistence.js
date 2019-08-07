// DESTINOS ASOCIADOS AL CONDUCTOR
const querygetDriverDest = "SELECT DISTINCT SOURCE_LOCATION_GID, DEST_LOCATION_GID " +
    "FROM OTM.OT_SHIPMENT_BUY " +
    "WHERE POWER_UNIT_GID = 'TSP.'||$1 AND " +
    "DRIVER_GID LIKE '%'||$2 AND PESO_CARGUE != 0 AND " +
    "FECHA_ORDER_RELEASE::DATE != NOW()::DATE";


// DESTINOS DISTINTOS A LOS ASOCIADOS
const querygetDistintDest = "SELECT B.SOURCE_LOCATION_GID, " +
    "B.DEST_LOCATION_GID " +
    "FROM " +
    "(SELECT DISTINCT SOURCE_LOCATION_GID, " +
    "DEST_LOCATION_GID " +
    "FROM " +
    "OTM.OT_SHIPMENT_BUY " +
    "WHERE POWER_UNIT_GID = 'TSP.'||$1 " +
    "AND DRIVER_GID LIKE '%'||$2 " +
    "AND PESO_CARGUE != 0 " +
    "AND FECHA_ORDER_RELEASE::DATE != NOW()::DATE " +
    ") A " +
    "RIGHT JOIN ( " +
    "SELECT DISTINCT SOURCE_LOCATION_GID " +
    ",DEST_LOCATION_GID " +
    "FROM OTM.OT_SHIPMENT_BUY " +
    ") B ON ( " +
    "B.SOURCE_LOCATION_GID = A.SOURCE_LOCATION_GID " +
    "AND B.DEST_LOCATION_GID = A.DEST_LOCATION_GID " +
    ") " +
    "WHERE A.SOURCE_LOCATION_GID IS NULL";


// PLACA Y CEDULA 
const querygetPowerDriver = "SELECT DISTINCT POWER_UNIT_GID, DRIVER_GID " +
    "FROM OTM.OT_SHIPMENT_BUY " +
    "WHERE POWER_UNIT_GID = 'TSP.'||$1 AND " +
    "DRIVER_GID LIKE '%'||$2 AND PESO_CARGUE != 0 AND " +
    "FECHA_ORDER_RELEASE::DATE != NOW()::DATE";


//Todos los datos
const queryAllData = "SELECT POWER_UNIT_GID, DRIVER_GID, SOURCE_LOCATION_GID, DEST_LOCATION_GID " +
    "FROM OTM.OT_SHIPMENT_BUY ";

// traer todos los usuarios
const queryAllUserPass = "SELECT idusuario, claveencr FROM Usuarios";

// traer el shipment gid para la impresion 
const querygetPrintShipment = "SELECT OSB.SHIPMENT_GID, OSB.POWER_UNIT_GID, OSB.DRIVER_GID, " +
    "OSB.PESO_CARGUE, OSB.SOURCE_LOCATION_GID, OSB.DEST_LOCATION_GID, OSB.FECHA_ORDER_RELEASE, " +
    "TO_CHAR(NOW(), 'YYYYMMDD') AS FECHA_IMPRESION " +
    "FROM ( " +
    " SELECT DISTINCT MIN(SHIPMENT_GID) AS SHIPMENT_GID " +
    "FROM OTM.OT_SHIPMENT_BUY " +
    " WHERE POWER_UNIT_GID = 'TSP.' || $1 AND DRIVER_GID LIKE '%' || $2 AND " +
    "PESO_CARGUE != 0 AND SOURCE_LOCATION_GID = $3 AND " +
    "DEST_LOCATION_GID = $4 AND FECHA_ORDER_RELEASE:: DATE != NOW():: DATE " +
    ") QR " +
    "INNER JOIN OTM.OT_SHIPMENT_BUY OSB ON(OSB.SHIPMENT_GID = QR.SHIPMENT_GID) ";

// datos para validar si esta inactivo y si expiro la licencia 
const querygetDriverValid = "SELECT DRIVER_GID,DRIVER_FULL_NAME, LICENCIA, EXPIRACION_LICENCIA, IS_ACTIVE , TO_CHAR(NOW(), 'YYYY-MM-DD') AS FECHA_ACTUAL " +
    "FROM  OTM.OT_DRIVER " +
    "WHERE DRIVER_GID LIKE '%'|| $1 ";

// datos para verificar VENCIMIENTO SOAT,  VENCIMIENTO TECNOMECANICA, PLACA INACTIVA
const querygetPowerValid = "SELECT PLACA,PROPIETARIO,VENCE_SOAT,VENCE_TECNOMECANICA,IS_ACTIVE, TO_CHAR(NOW(), 'YYYY-MM-DD') AS FECHA_ACTUAL " +
    "FROM OTM.OT_POWER_UNIT WHERE PLACA = 'TSP.'||$1 ";

const queryAddOperation = "INSERT INTO OT_OPERACION_REPORTS(" +
    "SHIPMENT_GID, DRIVER_GID, POWER_UNIT_GID, INSERT_DATE, INSERT_USER) " +
    "VALUES ($1, $2, $3, $4, $5)";


module.exports = {
    querygetDriverDest,
    querygetDistintDest,
    querygetPowerDriver,
    queryAllData,
    queryAllUserPass,
    querygetPrintShipment,
    querygetDriverValid,
    querygetPowerValid,
    queryAddOperation
}