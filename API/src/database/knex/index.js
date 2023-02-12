const config = require("../../../knexfile");

const kenx = require("knex");

const connection = kenx.knex(config.development);

module.exports = connection;