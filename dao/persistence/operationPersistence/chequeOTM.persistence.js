const queryAgencyiD = `SELECT idusuario,id_agencia from usuarios  WHERE idusuario = $1`

const queryCheckList = `SELECT DISTINCT  a.planilla
,a.valor_planilla::float
,a.nombre_agencia
,a.nombre_conductor benficiario
,a.valor_anticipo::float valor_cheque
,a.branch_code
,a.moneda
,bu.idusuario usuario
,a.nombre_agencia
,a.codigo_agencia
,a.cuenta
,a.nit_conductor
,a.banco
,a.nombre_cuenta
,a.cedula_cuenta
,a.tipo_cuenta
,a.fecha_confirmacion
,a.tipo_anticipo
,a.nit_proveedor_anticipo
,a.fecha_traslado_novedad
FROM fin.anticipo a
INNER JOIN 
fin.banco_usuario bu ON bu.agency_id = a.codigo_agencia
LEFT JOIN 
fin.banco_transferencia bt ON bt.nit = a.nit_conductor  AND bt.estado_aprobacion = 'S'
WHERE bu.idusuario = $1 AND  a.codigo_agencia = $2  AND fecha_confirmacion = '0099-01-01 00:00:00' `


const queryActiveAccounts = `SELECT bt.nit
 ,bt.banco
,bt.cuenta
,bt.nombre_cuenta
,bt.primaria
,bt.dstrct
FROM fin.anticipo a
INNER JOIN 
fin.banco_usuario bu ON bu.branch_code = a.branch_code
INNER JOIN 
fin.banco_transferencia bt ON bt.nit = a.nit_conductor
WHERE bu.idusuario = $1
AND a.codigo_agencia = $2
AND bt.nit = $3
AND estado_aprobacion = 'S'
ORDER BY bt.nombre_cuenta ASC
`

const queryAccountDescription = `SELECT
 bt.reg_status
,bt.dstrct
,bt.cedula_cuenta
,bt.nombre_cuenta
,bt.banco
,bt.cuenta
,bt.tipo_cuenta
,bt.nit
FROM fin.anticipo a
INNER JOIN 
fin.banco_usuario bu ON bu.branch_code = a.branch_code
INNER JOIN 
fin.banco_transferencia bt ON bt.nit = a.nit_conductor
WHERE bu.idusuario = $1
AND a.codigo_agencia = $2
AND bt.cuenta = $3
AND bt.nit = $4
AND bt.estado_aprobacion = 'S'  `

const queryProviderNit = ` SELECT DISTINCT nit_proveedor, nombre_proveedor FROM fin.proveedor_anticipo`

const queryBank = `SELECT DISTINCT banco FROM fin.banco_transferencia`

const queryAccounType = `SELECT DISTINCT tipo_cuenta  FROM fin.banco_transferencia `


const queryUpdateadvanced = `UPDATE fin.banco_transferencia
SET cedula_cuenta = $1
	,nombre_cuenta = $2
	,banco = $3
	,cuenta = $4
	,tipo_cuenta = $5	
WHERE  nit=$6 AND cuenta = $7  `


const queryAdvancedConfirm = `UPDATE fin.anticipo
SET  last_update = now()
	,user_update = $1
	,fecha_confirmacion = now()
	,nit_proveedor_anticipo = $2
	,tipo_anticipo = $3
WHERE nit_conductor = $4`


const queryAdvancedValue = `
UPDATE fin.anticipo
SET valor_anticipo = $1
WHERE planilla = $2
`

const queryAddAcount = `
INSERT INTO fin.banco_transferencia  (
	 reg_status 
	,dstrct
	,nit
	,banco
	,cuenta
	,tipo_cuenta
	,nombre_cuenta
	,cedula_cuenta
	,secuencia
	,primaria
    ,estado_aprobacion
	)
VALUES ($1,$2,$3,$4,$5,$6,$7,$8,nextval('fin.seq_ban_transferencia'),'N','S')`



module.exports = {

    queryAgencyiD,
    queryCheckList,
    queryActiveAccounts,
    queryAccountDescription,
    queryProviderNit,
    queryBank,
    queryUpdateadvanced,
	queryAccounType,
	queryAdvancedConfirm,
	queryAdvancedValue,
    queryAddAcount
    
}