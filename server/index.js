const express = require("express");
const path = require("path");

function setupServer() {
	app.use(express.static(path.resolve(__dirname, "../client/build")));
	app.use(express.json());
}
