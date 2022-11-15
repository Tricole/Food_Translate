// Imports the Google Cloud client library
const textToSpeech = require("@google-cloud/text-to-speech");
const { Translate } = require("@google-cloud/translate").v2;
const vision = require("@google-cloud/vision");
require("dotenv").config();

const CREDENTIALS = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS);

// console.log("🌏", cred_objects);

const gcloud = process.env.GCLOUD_PROJECT;
console.log(gcloud);

const projectId = "food_translate";

const fs = require("fs");
//const escape = require('escape-html');
const util = require("util");

// Configuration for the client

const translate = new Translate({
	credentials: CREDENTIALS,
	projectId: CREDENTIALS.project_id,
});

const detectLanguage = async (text) => {
	try {
		let response = await translate.detect(text);
		return response[0].language;
	} catch (error) {
		console.log(`Error at detectLanguage --> ${error}`);
		return 0;
	}
};

const translateText = async (text, targetLanguage) => {
	try {
		let [response] = await translate.translate(text, targetLanguage);
		return response;
	} catch (error) {
		console.log(`Error at translateText --> ${error}`);
		return 0;
	}
};

detectLanguage("Oggi è lunedì")
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});

translateText("Oggi è lunedì", "en")
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});
