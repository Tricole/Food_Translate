const picToText = require("./ocrDetection");
const translateText = require("./translateText");

// function transPic(file) {
// 	return picToText(file)
// 		.then((data) => {
// 			return translateText(data, "en");
// 		})
// 		.then((translatedText) => {
// 			console.log(translatedText);
// 			return translatedText;
// 		});
// }

(async function transPic() {
	const data = await picToText("../../picTests/IMG_9599.JPG");
	const result = await translateText(data, "en");
	console.log(result);
})();
