import AddNavBar from "./Navbar";
import ComputeFeedback from "../ComputeFeedback";
import { useState } from "react";

const UserMainPage = () => {
	const [mainPage, setMainPage] = useState("");

	function renderSwitch() {
		// console.log(e);
		// e.preventDefault();
		console.log("tried to switch");
		switch (mainPage) {
			case "getPhoto":
				return <ComputeFeedback onReturn={returnFromPhoto}></ComputeFeedback>;

			case "buttonView":
				return <button onClick={runCheck}>Check this food</button>;

			default:
				return <button onClick={runCheck}>Check this food</button>;
		}
	}

	function runCheck() {
		setMainPage("getPhoto");
	}

	function returnFromPhoto() {
		//get back from my photo page
	}

	return (
		<>
			<div>{renderSwitch()}</div>
		</>
	);
};

export default UserMainPage;
