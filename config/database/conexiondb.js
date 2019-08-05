const pg = require('pg');

// const pool = new pg.Pool({

//     user: 'postgres',
//     host: 'localhost',
//     database: 'otm',
//     password: '12345',
//     port: 5434  

// });
module.exports = () => {
    return new pg.Pool({

        user: 'ahenriquez',
        host: '172.16.3.222',
        database: 'sot',
        password: 'ah2019',
        port: 5432

    });
}