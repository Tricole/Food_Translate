// import { translateText, detectLanguage } from "./translateText";
const picToText = require("./ocrDetection");
const { detectLanguage, translateText } = require("./translateText");

const textFromPic = picToText("./picTests/IMG_9582.JPG");

console.log(textFromPic);
