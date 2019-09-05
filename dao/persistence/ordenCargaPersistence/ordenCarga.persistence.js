// DESTINOS ASOCIADOS AL CONDUCTOR
const querygetDriverDest = "SELECT DISTINCT SOURCE_LOCATION_GID, DEST_LOCATION_GID " +
    "FROM OTM.OT_SHIPMENT_BUY " +
    "WHERE POWER_UNIT_GID = 'TSP.'||$1 AND " +
    "DRIVER_GID LIKE '%'||$2 AND PESO_CARGUE != 0 AND " +
    "FECHA_ORDER_RELEASE::DATE = NOW()::DATE";


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
    "AND FECHA_ORDER_RELEASE::DATE = NOW()::DATE " +
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
    "FECHA_ORDER_RELEASE::DATE = NOW()::DATE";


//Todos los datos
const queryAllData = "SELECT POWER_UNIT_GID, DRIVER_GID, SOURCE_LOCATION_GID, DEST_LOCATION_GID " +
    "FROM OTM.OT_SHIPMENT_BUY ";



// traer el shipment gid para la impresion 
const querygetPrintShipment = `SELECT
OSB.SHIPMENT_GID,
OSB.FECHA_ORDER_RELEASE
FROM
(	
SELECT DISTINCT
    MIN(SHIPMENT_GID) AS SHIPMENT_GID 
FROM 
        OTM.OT_SHIPMENT_BUY
WHERE 
    POWER_UNIT_GID = 'TSP.' || $1 AND 
    DRIVER_GID LIKE '%' || $2 AND
    PESO_CARGUE != 0 AND
    SOURCE_LOCATION_GID = $3 AND
    DEST_LOCATION_GID = $4 AND
    FECHA_ORDER_RELEASE::DATE = NOW()::DATE
) QR
INNER JOIN 
OTM.OT_SHIPMENT_BUY OSB ON (OSB.SHIPMENT_GID = QR.SHIPMENT_GID)`;

// datos para validar si esta inactivo y si expiro la licencia 
const querygetDriverValid = "SELECT DRIVER_GID,DRIVER_FULL_NAME, LICENCIA, EXPIRACION_LICENCIA, IS_ACTIVE , TO_CHAR(NOW(), 'YYYY-MM-DD') AS FECHA_ACTUAL " +
    "FROM  OTM.OT_DRIVER " +
    "WHERE DRIVER_GID LIKE '%'|| $1 || '%' ";

// datos para verificar VENCIMIENTO SOAT,  VENCIMIENTO TECNOMECANICA, PLACA INACTIVA
const querygetPowerValid = "SELECT PLACA,PROPIETARIO,VENCE_SOAT,VENCE_TECNOMECANICA,IS_ACTIVE, TO_CHAR(NOW(), 'YYYY-MM-DD') AS FECHA_ACTUAL " +
    "FROM OTM.OT_POWER_UNIT WHERE PLACA = 'TSP.'||$1 ";



const querygetPoweDiverValid = "SELECT DISTINCT PU.PLACA "+
                                ",PU.PROPIETARIO "+
                                ",PU.VENCE_SOAT "+
                                ",PU.VENCE_TECNOMECANICA "+
                                ",PU.IS_ACTIVE AS POWER_ACTIVE "+
                                ",D.DRIVER_GID "+
                                ",D.DRIVER_FULL_NAME "+
                                ",D.LICENCIA "+
                                ",D.EXPIRACION_LICENCIA "+
                                ",D.IS_ACTIVE AS DIVER_ACTIVE, "+
                                "TO_CHAR(NOW(), 'YYYY-MM-DD') AS FECHA_ACTUAL "+
                                "FROM OTM.OT_POWER_UNIT PU "+
                               " INNER JOIN OTM.OT_SHIPMENT_BUY SB ON ( "+
                                   " SB.POWER_UNIT_GID = PU.PLACA) "+
                                "INNER JOIN OTM.OT_DRIVER D ON (D.DRIVER_GID = SB.DRIVER_GID) "+
                                "WHERE PU.PLACA = 'TSP.'||$1 "+
                                "AND D.DRIVER_GID LIKE '%'||$2 ";


    

const queryAddOperation = "INSERT INTO otm.OT_ORDEN_CARGUE(" +
    "SHIPMENT_GID, DRIVER_GID, POWER_UNIT_GID, INSERT_DATE, INSERT_USER,ORDER_DATE , SOURCE_LOCATION_GID , DEST_LOCATION_GID) " +
    "VALUES ($1, $2, $3, $4, $5,$6,$7,$8) returning order_id";



module.exports = {
    querygetDriverDest,
    querygetDistintDest,
    querygetPowerDriver,
    queryAllData,
    querygetPrintShipment,
    querygetDriverValid,
    querygetPowerValid,
    querygetPoweDiverValid ,
    queryAddOperation
}