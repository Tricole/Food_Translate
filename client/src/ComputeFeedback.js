//uses cloud apis, the photo and the allergy list to find out if the food is appropriate for them or not
import Profile from "./Components/TakePhoto";
import { useState } from "react";

function ComputeFeedback() {
	// const [takenPhoto, setTakenPhoto] = useState("");

	function takenPhoto(base64) {
		console.log("🌏", base64);
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
