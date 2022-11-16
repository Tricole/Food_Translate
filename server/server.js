// require("dotenv").config();
// import path from "path";
const path = require("path");
// require("dotenv").config({ path: require("find-config")(".env") });
require("dotenv").config();

// dotenv.load({ path: path.join(__dirname, ".env") });
const express = require("express");
const db = require("./knex");
var cors = require("cors");
const textToSpeech = require("@google-cloud/text-to-speech");
const { Translate } = require("@google-cloud/translate").v2;
const vision = require("@google-cloud/vision");

// require("dotenv").config();
const CREDENTIALS = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS);

const picToText = require("./ocrDetection");
const translateText = require("./translateText");

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

	app.post("/api", async (req, res) => {
		try {
			const payload = req.body;
			console.log("🐓", payload);

			const request = {
				image: {
					content: Buffer.from(payload.data, "base64"),
				},
			};

			console.log(request);

			(async function transPic() {
				const data = await picToText("./picTests/IMG_9589.JPG");
				const result = await translateText(data, "en");
				res.status(200).send(result);
			})();

			res.status(200).send();
		} catch (error) {
			console.log(error);
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
