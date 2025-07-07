const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgre",
    password: "TUBAS4LIFE",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;
