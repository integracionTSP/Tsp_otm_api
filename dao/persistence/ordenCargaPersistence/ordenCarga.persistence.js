
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
    "AND FECHA_ORDER_RELEASE::DATE != NOW()::DATE "+
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

    const queryAllData = "SELECT POWER_UNIT_GID, DRIVER_GID, SOURCE_LOCATION_GID, DEST_LOCATION_GID   FROM OTM.OT_SHIPMENT_BUY";


    const queryAllUserPass = "SELECT idusuario, claveencr FROM Usuarios"


module.exports = {
    querygetDriverDest,
    querygetDistintDest,
    querygetPowerDriver,
    queryAllData,
    queryAllUserPass

    
}

