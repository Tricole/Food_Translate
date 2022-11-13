/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
	return await knex.schema.createTable("users_table", (table) => {
		table.uuid("id");
		table.string("first_name", 256).notNullable();
		table.string("last_name", 256).notNullable();
		table.integer("age");
		table.integer("height");
		table.string("activity");
		table.json("diet_restrictions");
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	knex.schema.dropTable("users_table");
};
