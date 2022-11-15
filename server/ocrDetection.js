const vision = require("@google-cloud/vision");
const fs = require("fs");
const util = require("util");

/**
 * Detects text in an image file
 *
 * ARGS
 * inputFile: path to image file
 * RETURNS
 * string of text detected in the input image
 **/
async function picToText(inputFile) {
	// Creates a client
	console.log("🐓🐓🐓 ", "trying to convert image to text");
	const client = new vision.ImageAnnotatorClient();

	// Performs text detection on the local file
	const [result] = await client.textDetection(inputFile);
	return result.fullTextAnnotation.text;
}

module.exports = picToText;
