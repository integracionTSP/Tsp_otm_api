const pg = require('pg');

module.exports = () => {
    return new pg.Pool({

        user: 'ahenriquez',
        host: '172.16.3.222',
        database: 'sot',
        password: 'ah2019',
        port: 5432

    });
}