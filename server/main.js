// Imports the Google Cloud client library
const textToSpeech = require("@google-cloud/text-to-speech");
const { Translate } = require("@google-cloud/translate").v2;
const vision = require("@google-cloud/vision");
require("dotenv").config();
const gcloud = process.env.GCLOUD_PROJECT;
console.log(gcloud);

const CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS;
let cred_objects = JSON.parse(CREDENTIALS);
// for (let item of CREDENTIALS) console.log(item);
console.log(cred_objects);

const projectId = "food_translate";

// Import other required libraries
const fs = require("fs");
//const escape = require('escape-html');
const util = require("util");

/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const location = 'global';
// const text = 'text to translate';

// Instantiates a client
const translate = new Translate();

const text = "The text to translate, e.g. Hello, world!";
const target = "The target language, e.g. ru";

async function translateText() {
	// Construct request
	// const request = {
	// 	parent: `projects/${projectId}/locations/${location}`,
	// 	contents: [text],
	// 	mimeType: "text/plain", // mime types: text/plain, text/html
	// 	sourceLanguageCode: "en",
	// 	targetLanguageCode: "sr-Latn",
	// };

	// Run request
	let [translations] = await translate.translate(text, target);
	translations = Array.isArray(translations) ? translations : [translations];
	console.log("Translations:");
	translations.forEach((translation, i) => {
		console.log(`${text[i]} => (${target}) ${translation}`);
	});
}

translateText();
