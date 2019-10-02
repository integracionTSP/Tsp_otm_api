const genOrder = `SELECT DISTINCT 
to_char(oc.order_date, 'YYYY-MM-DD') fecha_orden_carga
,oc.power_unit_gid
,oc.driver_gid
,oc.order_id
,CONCAT (
    'NS_'
    ,oc.driver_gid
    ,'_'
    ,to_char(oc.order_date, 'YYYY')
    ,'_'
    ,to_char(oc.order_date, 'MM')
    ,'_'
    ,to_char(oc.order_date, 'DD')
    ,'_'
    ,oc.order_id
    ) order_release_gid
    ,CONCAT (
    to_char(oc.order_date, 'YYYY')
    ,to_char(oc.order_date, 'MM')
    ,to_char(oc.order_date, 'DD')
    ,'0000'
    ) early_pickup_date
,oc.source_location_gid
,oc.dest_location_gid
,sb.driver_gid AS driver_full
,SPLIT_PART(pu.num_tenedor_ministerio, '.', 1)  AS service_provider_id
,CONCAT (
    'NS_'
    ,oc.driver_gid
    ,'_'
    ,to_char(oc.order_date, 'YYYY')
    ,'_'
    ,to_char(oc.order_date, 'MM')
    ,'_'
    ,to_char(oc.order_date, 'DD')
    ,'_'
    ,oc.order_id
    ,'-001'
    ) ship_unit_id
FROM otm.ot_orden_cargue oc
INNER JOIN otm.ot_shipment_buy sb ON (
    sb.power_unit_gid = CONCAT (
        'TSP.'
        ,oc.power_unit_gid
        )
    AND SPLIT_PART(sb.driver_gid, '_', 3) = oc.driver_gid
    )
INNER JOIN otm.ot_power_unit pu ON (pu.placa = sb.power_unit_gid)
WHERE oc.order_id = $1`





module.exports = {

    genOrder
}