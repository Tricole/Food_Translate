// const vision = require("@google-cloud/vision");
// require("dotenv").config();

// // const fs = require("fs");
// // const util = require("util");

// let origCredentials = process.env.GOOGLE_APPLICATION_CREDENTIALS;

// const CREDENTIALS = JSON.parse(origCredentials);

// const CONFIG = {
// 	credentials: {
// 		private_key: CREDENTIALS.private_key,
// 		client_email: CREDENTIALS.client_email,
// 	},
// };

// const client = new vision.ImageAnnotatorClient(CONFIG);

// const picToText = async function (inputFile) {
// 	try {
// 		const [result] = await client.textDetection(inputFile);
// 		return result.fullTextAnnotation.text;
// 	} catch (error) {
// 		console.log(error);
// 	} finally {
// 		console.log("Promise completed");
// 	}
// };

// module.exports = picToText;
