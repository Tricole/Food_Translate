/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
	development: {
		client: "pg",
		connection: {
			password: "buyukbalik",
			user: "kamil",
			database: "food_translate",
		},
	},

	staging: {
		client: "pg",
		connection: {
			database: "my_db",
			user: "username",
			password: "password",
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
			directory: __dirname + "/migrations",
		},
	},

	production: {
		client: "pg",
		connection: process.env.DATABASE_URL,
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
			directory: __dirname + "/migrations",
		},
		seeds: {
			tableName: "knex_migrations",
			directory: __dirname + "/seeds",
		},
	},
};
