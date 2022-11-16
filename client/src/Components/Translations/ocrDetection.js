// const vision = require("@google-cloud/vision");
// require("dotenv").config();

// const CREDENTIALS = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS);

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

// // export { default as picToText } from "./ocrDetection";
