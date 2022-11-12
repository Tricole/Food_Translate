const express = require("express");
const path = require("path");

function createServer() {
	const app = express();
	app.use(express.static(path.resolve(__dirname, "../client/build")));
	app.use(express.json());

	return app;
}

module.exports = createServer;
