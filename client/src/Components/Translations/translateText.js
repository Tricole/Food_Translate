// const { Translate } = require("@google-cloud/translate").v2;
// require("dotenv").config();
// // require("axios");

// const CREDENTIALS = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS);

// // const CONFIG = {
// // 	credentials: {
// // 		private_key: CREDENTIALS.private_key,
// // 		client_email: CREDENTIALS.client_email,
// // 	},
// // };

// // console.log("ð", cred_objects);

// const gcloud = process.env.GCLOUD_PROJECT;
// console.log(gcloud);

// // Configuration for the client

// const translate = new Translate({
// 	credentials: CREDENTIALS,
// 	projectId: CREDENTIALS.project_id,
// });

// const detectLanguage = async (text) => {
// 	try {
// 		let response = await translate.detect(text);
// 		return response[0].language;
// 	} catch (error) {
// 		console.log(`Error at detectLanguage --> ${error}`);
// 		return 0;
// 	}
// };

// const translateText = async (text, targetLanguage) => {
// 	try {
// 		let [response] = await translate.translate(text, targetLanguage);
// 		return response;
// 	} catch (error) {
// 		console.log(`Error at translateText --> ${error}`);
// 		return 0;
// 	}
// };

// // detectLanguage("Oggi Ã¨ lunedÃ¬")
// // 	.then((res) => {
// // 		console.log(res);
// // 	})
// // 	.catch((err) => {
// // 		console.log(err);
// // 	});

// const text =
// 	" å¾ã¯å¾ããã« " +
// 	"ã ããã" +
// 	"ä¸ã«ã¯ããã¨" +
// 	"ã¯ããã¨èãã¾ããä¸ã«ã¯" +
// 	"âæ°ãã°" +
// 	"éèããæããã°" +
// 	"æ¶è²»æé: è¡¨é¢ã«è¨è¼" +
// 	"ä¿å­æ¹æ³: è¡¨é¢ã«è¨è¼" +
// 	"ã ã¦å ç±" +
// 	"åç§°: ã¬ã³ã¸éºº" +
// 	"åææå: ãã°ã¤ãã¼ã©ãã³ (å½åè£½é )ãè¹ãã°" +
// 	"éèããæããä¸å³åè¾å­/å å·¥æ¾±ç²ãèª¿å³æ(ã¢ã" +
// 	"ãé¸ç­)ãPHèª¿æ´å¤ãç³æ(ã¢ã«ã®ã³é¸ã¨ã¹ãã«)" +
// 	"è¨å¼µå¤ãã«ã­ããã¤ãè²ç´ ã(ä¸é¨ã«å°éº¦ã»ãã°ã»" +
// 	"ãã¾ã»ãã°ã»å¤§è±ã»ã¼ã©ãã³ãå«ã) (æ¬åè£½é å·¥å ´" +
// 	"ã§ã¯ãã°ã»åµãå«ãè£½åãçç£ãã¦ãã¾ã)" +
// 	"ã¾ããä¸ã«" +
// 	"è£½é è æ¥æ¬ã¯ãã«ãªã¼(æ ª)ä¼å¢å´å·¥å ´ ç¾¤é¦¬ç" +
// 	"ä¼å¢å´å¸æ±ä¸ä¹å®®çº 1631-1" +
// 	"TEL 0120-487-986" +
// 	"æ é¤æåè¡¨ç¤º(1åè£å½ã) ç±é445kcal èç½" +
// 	"è³ª 21.1gèè³ª 11.9g ç­æ°´åç©65.9g(ç³" +
// 	"è³ª61.0g é£ç©ç¹ç¶­4.9g) é£å¡©ç¸å½é 4.73" +
// 	"g(æ¨å®å¤)";

// // translateText(text, "en")
// // 	.then((res) => {
// // 		console.log(res);
// // 	})
// // 	.catch((err) => {
// // 		console.log(err);
// // 	});

// // function transPic(file) {
// // 	return picToText(file)
// // 		.then((data) => {
// // 			return translateText(data, "en");
// // 		})
// // 		.then((translatedText) => {
// // 			console.log(translatedText);
// // 			return translatedText;
// // 		});
// // }

// // const res = transPic(
// // 	"../../picTests/people-running-carrying-key-unlock-keyhole-sample-text_1262-19457.jpeg"
// // );
// // console.log(res);

// // (async function transPic() {
// // 	const data = await picToText("../../picTests/IMG_9589.JPG");
// // 	const result = await translateText(data, "en");
// // 	console.log(result);
// // })();

// module.exports = translateText;
