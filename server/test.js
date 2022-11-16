// const picToText = require("./ocrDetection");
require("dotenv").config();
const CREDENTIALS = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS);

const { translateText, picToText } = require("./translateText");

(async function transPic() {
	const data = await picToText("./picTests/IMG_9599.JPG");
	const result = await translateText(data, "en");
	console.log(result);
})();
