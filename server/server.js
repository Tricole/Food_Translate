const express = require("express");
const path = require("path");

function setupServer() {
	const app = express();

	app.use(express.static(path.resolve(__dirname, "../client/build")));

	return app;
}

module.exports = setupServer;
