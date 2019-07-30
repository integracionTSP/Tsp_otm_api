
const pg = require('pg');
//parametros de configuracion a la base de datos


// const pool = new pg.Pool({

//     user: 'postgres',
//     host: 'localhost',
//     database: 'otm',
//     password: '12345',
//     port: 5434  

// });

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