// Imports the Google Cloud client library
const textToSpeech = require("@google-cloud/text-to-speech");
const Translate = require("@google-cloud/translate").v3beta1;
const vision = require("@google-cloud/vision");
require("dotenv").config({ path: "./.env" });

const CREDENTIALS = GOOGLE_APPLICATION_CREDENTIALS;
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
const translationClient = new Translate({
	credentials: CREDENTIALS,
	projectId: CREDENTIALS.project_id,
});

async function translateText() {
	// Construct request
	const request = {
		parent: `projects/${projectId}/locations/${location}`,
		contents: [text],
		mimeType: "text/plain", // mime types: text/plain, text/html
		sourceLanguageCode: "en",
		targetLanguageCode: "sr-Latn",
	};

	// Run request
	try {
		const [response] = await translationClient.translate("Oggi è lunedì", "en");
		for (const translation of response.translations) {
			console.log(`Translation: ${translation.translatedText}`);
		}
		// return response;
	} catch (error) {
		console.log(`Error at translateText: ${error} `);
	}
}

translateText();
