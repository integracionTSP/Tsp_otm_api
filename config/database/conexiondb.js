const pg = require('pg');



module.exports = () => {
    return new pg.Pool({

        user: 'api',
        host: '172.16.3.222',
        database: 'sot',
        password: 'api2019',
        port: 5432

    });
}
/*
module.exports = () => {
    return new pg.Pool({

        user: 'ahenriquez',
        host: '172.16.3.222',
        database: 'sot',
        password: 'ah2019',
        port: 5432

    });
}
*/

