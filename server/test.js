// // import { translateText, detectLanguage } from "./translateText";
// const picToText = require("./ocrDetection");
// const { detectLanguage, translateText } = require("./translateText");

// // require("./picTests/");
// const textFromPic = picToText("./picTests/IMG_9582.JPG");

// console.log(textFromPic);

const isVegan = require("is-vegan");

let treeNutAllergies = [
	"Almonds",
	"Brazil nuts",
	"Cashews",
	"Chestnuts",
	"Filberts",
	"Hazelnuts",
	"Hickory nuts",
	"Macadamia nuts",
	"Pecans",
	"Pistachios",
	"Walnuts",
];

let text =
	"Do not tilt afterward. I hear it peels off and peels off on top. On top: New buckwheat vegetable kakiage soba Expiration date: written on the surface Preservation method: written on the surface Heating name: Microwave noodles Ingredients (amino acid, etc.), PH adjuster, paste (alginate ester) swelling agent, carotenoid pigment, (contains wheat, buckwheat, sesame, mackerel, soybean, gelatin in part) We produce products containing Manufacturer Nippon Cookery Co., Ltd. Isesaki Factory 1631-1 Higashi-Kaminomiyacho, Isesaki City, Gunma Prefecture TEL 0120-487-986Nutritional information (per package) Calories 445kcal Protein 21.1g Lipid 11.9g Carbohydrate 65.9g (Sugar 61.0g Food Fiber 4.9g) Salt equivalent 4.73g (estimate)";

let textArr = text.split(" ");
console.log(textArr);

let result = isVegan.isVeganIngredientList(textArr);

console.log(result);
