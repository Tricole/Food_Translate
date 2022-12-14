const textToSpeech = require("@google-cloud/text-to-speech");
const { Translate } = require("@google-cloud/translate").v2;
const vision = require("@google-cloud/vision");
require("dotenv").config();

const CREDENTIALS = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS);

// const CONFIG = {
// 	credentials: {
// 		private_key: CREDENTIALS.private_key,
// 		client_email: CREDENTIALS.client_email,
// 	},
// };

// console.log("π", cred_objects);

const gcloud = process.env.GCLOUD_PROJECT;

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

const CONFIG = {
	credentials: {
		private_key: CREDENTIALS.private_key,
		client_email: CREDENTIALS.client_email,
	},
};

const client = new vision.ImageAnnotatorClient(CONFIG);

const picToText = async function (inputFile) {
	try {
		const [result] = await client.textDetection(inputFile);
		return result.fullTextAnnotation.text;
	} catch (error) {
		console.log(error);
	} finally {
		console.log("Promise completed");
	}
};
// detectLanguage("Oggi Γ¨ lunedΓ¬")
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

const text =
	" εΎγ―εΎγγγ« " +
	"γ γγγ" +
	"δΈγ«γ―γγγ¨" +
	"γ―γγγ¨θγγΎγγδΈγ«γ―" +
	"βζ°γγ°" +
	"ιθγγζγγγ°" +
	"ζΆθ²»ζι: θ‘¨ι’γ«θ¨θΌ" +
	"δΏε­ζΉζ³: θ‘¨ι’γ«θ¨θΌ" +
	"γ γ¦ε η±" +
	"εη§°: γ¬γ³γΈιΊΊ" +
	"εζζε: γγ°γ€γγΌγ©γγ³ (ε½εθ£½ι )γθΉγγ°" +
	"ιθγγζγγδΈε³εθΎε­/ε ε·₯ζΎ±η²γθͺΏε³ζ(γ’γ" +
	"γιΈη­)γPHθͺΏζ΄ε€γη³ζ(γ’γ«γ?γ³ιΈγ¨γΉγγ«)" +
	"θ¨εΌ΅ε€γγ«γ­γγγ€γθ²η΄ γ(δΈι¨γ«ε°ιΊ¦γ»γγ°γ»" +
	"γγΎγ»γγ°γ»ε€§θ±γ»γΌγ©γγ³γε«γ) (ζ¬εθ£½ι ε·₯ε ΄" +
	"γ§γ―γγ°γ»ε΅γε«γθ£½εγηη£γγ¦γγΎγ)" +
	"γΎγγδΈγ«" +
	"θ£½ι θ ζ₯ζ¬γ―γγ«γͺγΌ(ζ ͺ)δΌε’ε΄ε·₯ε ΄ ηΎ€ι¦¬η" +
	"δΌε’ε΄εΈζ±δΈδΉε??ηΊ 1631-1" +
	"TEL 0120-487-986" +
	"ζ ι€ζεθ‘¨η€Ί(1εθ£ε½γ) η±ι445kcal θη½" +
	"θ³ͺ 21.1gθθ³ͺ 11.9g η­ζ°΄εη©65.9g(η³" +
	"θ³ͺ61.0g ι£η©ηΉηΆ­4.9g) ι£ε‘©ηΈε½ι 4.73" +
	"g(ζ¨ε?ε€)";

// translateText(text, "en")
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

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

// const res = transPic(
// 	"./picTests/people-running-carrying-key-unlock-keyhole-sample-text_1262-19457.jpeg"
// );
// console.log(res);

// (async function transPic() {
// 	const data = await picToText("./picTests/IMG_9589.JPG");
// 	const result = await translateText(data, "en");
// 	console.log(result);
// })();

// console.log(result);
// console.log(result.text);
// detectLanguage(result);
// translateText(result, "en");

// console.log(result);

module.exports = { translateText, picToText };
