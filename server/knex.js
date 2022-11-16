require("dotenv").config();
const knex = require("knex");
const knexConfig = require("../knexfile");

module.exports = knex(
	process.env.DATABASE_URL ? knexConfig.production : knexConfig.development
);
