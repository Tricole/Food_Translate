//uses cloud apis, the photo and the allergy list to find out if the food is appropriate for them or not
import Profile from "./Components/TakePhoto";
import axios from "axios";

const picToText = require("./Components/Translations/ocrDetection");
const translateText = require("./Components/Translations/translateText");

function ComputeFeedback() {
	// const [takenPhoto, setTakenPhoto] = useState("");

	function takenPhoto(base64) {
		console.log("🤪", base64);
		// var image = new Image();
		// image.src = base64;
		// console.log(image);

		async function getResults(base64) {
			console.log(JSON.stringify(base64));
			const json = JSON.stringify({ data: base64 });

			const result = await axios.post("/api", json, {
				headers: {
					// Overwrite Axios's automatically set Content-Type
					"Content-Type": "application/json",
				},
			});
			console.log(result);
		}

		getResults(base64);
	}
	// console.log(takenPhoto);
	return (
		<>
			<div className="container mt-5">
				<Profile selected={takenPhoto} />
			</div>
		</>
	);
}

export default ComputeFeedback;
