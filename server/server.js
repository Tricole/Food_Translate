const express = require("express");
const path = require("path");
const db = require("./knex");
var cors = require("cors");

function setupServer() {
	const app = express();

	app.use(express.static(path.resolve(__dirname, "../client/build")));
	app.use(express.json());
	app.use(cors());

	app.get("/test", (req, res) => {
		res.status(200).send("successful get");
	});

	app.get("/users", async (req, res) => {
		try {
			const users = await db("users_table").select("*");
			res.status(200).send(users);
		} catch (error) {
			res.status(500).send(error);
		}
	});

	app.get("/users/:username", async (req, res) => {
		const username = req.params.username;

		try {
			const user = await db("users_table").select("*").where("username", username);
			res.status(200).send(user);
		} catch (error) {
			res.status(500).send(error);
		}
	});

	app.post("/new_user", async (req, res) => {
		try {
			const payload = req.body;
			console.log(payload);
			await db("users_table").insert(payload);

			res.status(200).send("Success");
		} catch (error) {
			res.status(500).send(error);
		}
	});

	app.put("/users/:id", async (req, res) => {
		try {
			const id = req.params.id;
			const changes = req.body;
			await db("users_table").where("id", id).update(changes);

			res.status(200).send(`Updated user with id ${id}`);
		} catch (error) {
			res.status(500).send(error);
		}
	});

	app.delete("/users/:id", async (req, res) => {
		try {
			const id = req.params.id;
			await db("users_table").where("id", id).delete();

			res.status(200).send("Successful deletion of record");
		} catch (error) {
			res.status(500).send(error);
		}
	});

	return app;
}

module.exports = setupServer;
