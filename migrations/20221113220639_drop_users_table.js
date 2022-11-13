/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	knex.schema.dropTable("users_table");
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
	return await knex.schema.createTable("users_table", (table) => {
		table.increments("id");
		table.string("first_name", 256).notNullable();
		table.string("last_name", 256).notNullable();
		table.integer("age");
		table.integer("height");
		table.string("activity");
		table.json("diet_restrictions");
	});
};
