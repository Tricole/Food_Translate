/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
	return await knex.schema.createTable("users_table", (table) => {
		table.string("username", 256).unique;
		table.string("password", 256).unique;
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	table.dropColumn("username");
	table.dropColumn("password");
};
