
const pg = require('pg');
//parametros de configuracion a la base de datos

/*
-------- config sot en pruebas
    user: 'postgres',
    host: '172.16.3.209',
    database: 'sot',
    password: 'postgres',
    port: 5432 

-------- config sot_test slt lite
    user: 'aortiz',
    host: '172.16.3.222',
    database: 'sot_test',
    password: 'tsp2019',
    port: 5432  
*/ 



const pool = new pg.Pool({

    user: 'ahenriquez',
    host: '172.16.3.222',
    database: 'sot',
    password: 'ah2019',
    port: 5432  

});

//exportando el objeto pool para usarlo fuera de este archivo
module.exports = {
    pool
}