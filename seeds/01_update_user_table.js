/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("users_table").del();
	await knex("users_table").insert([
		{
			id: 1,
			first_name: "Bob",
			last_name: "Hurley",
			age: 43,
			height: 176,
			activity: "Sedantry",
			diet_restrictions: JSON.stringify(["nuts", "lactose"]),
			username: "bob",
			password: "Abcd1234",
		},
		{
			id: 2,
			first_name: "Yuki",
			last_name: "Yokosuke",
			age: 22,
			height: 164,
			activity: "Moderate",
			diet_restrictions: JSON.stringify(["fish"]),
			username: "yuki",
			password: "Abcd1234",
		},
		{
			id: 3,
			first_name: "Mehmet",
			last_name: "Yilmaz",
			age: 30,
			height: 179,
			activity: "Moderate",
			diet_restrictions: JSON.stringify(["halal"]),
			username: "mehmet",
			password: "Abcd1234",
		},
		{
			id: 4,
			first_name: "Rahul",
			last_name: "Singh",
			age: 51,
			height: 185,
			activity: "Sedantry",
			diet_restrictions: JSON.stringify(["paleo"]),
			username: "rahul",
			password: "Abcd1234",
		},
		{
			id: 5,
			first_name: "Sharon",
			last_name: "Ozz",
			age: 27,
			height: 161,
			activity: "Active",
			diet_restrictions: JSON.stringify(["kosher"]),
			username: "sharon",
			password: "Abcd1234",
		},
	]);
};
