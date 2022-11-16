const textToSpeech = require("@google-cloud/text-to-speech");
const { Translate } = require("@google-cloud/translate").v2;
const vision = require("@google-cloud/vision");
require("dotenv").config();
// require("axios");

const CREDENTIALS = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS);

const CONFIG = {
	credentials: {
		private_key: CREDENTIALS.private_key,
		client_email: CREDENTIALS.client_email,
	},
};

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

// detectLanguage("Oggi è lunedì")
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

const text =
	" 後は傾けずに " +
	"ださい。" +
	"上にはがすと" +
	"はがすと聞きます。上には" +
	"★新そば" +
	"野菜かき揚げそば" +
	"消費期限: 表面に記載" +
	"保存方法: 表面に記載" +
	"だて加熱" +
	"名称: レンジ麺" +
	"原材料名: そばつゆゼラチン (国内製造)、茹そば" +
	"野菜かき揚げ、七味唐辛子/加工澱粉、調味料(アミ" +
	"ノ酸等)、PH調整剤、糊料(アルギン酸エステル)" +
	"膨張剤、カロチノイド色素、(一部に小麦・そば・" +
	"ごま・さば・大豆・ゼラチンを含む) (本品製造工場" +
	"ではそば・卵を含む製品を生産しています)" +
	"ます。上に" +
	"製造者 日本クッカリー(株)伊勢崎工場 群馬県" +
	"伊勢崎市東上之宮町 1631-1" +
	"TEL 0120-487-986" +
	"栄養成分表示(1包装当り) 熱量445kcal 蛋白" +
	"質 21.1g脂質 11.9g 炭水化物65.9g(糖" +
	"質61.0g 食物繊維4.9g) 食塩相当量 4.73" +
	"g(推定値)";

// translateText(text, "en")
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});
const client = new vision.ImageAnnotatorClient(CONFIG);

async function picToText(inputFile) {
	try {
		const [result] = await client.textDetection(inputFile);
		return result.fullTextAnnotation.text;
	} catch (error) {
		console.log(error);
	} finally {
		console.log("Promise completed");
	}
}

function transPic(file) {
	return picToText(file)
		.then((data) => {
			return translateText(data, "en");
		})
		.then((translatedText) => {
			console.log(translatedText);
			return translatedText;
		});
}

const res = transPic(
	"./picTests/people-running-carrying-key-unlock-keyhole-sample-text_1262-19457.jpeg"
);
console.log(res);

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

module.exports = { translateText, detectLanguage };
