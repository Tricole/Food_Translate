import { useEffect, useState } from "react";
import ComputeFeedback from "../ComputeFeedback";
import UserLogin from "./UserLogin";

export default function AddNavBar() {
	const [nav, setNav] = useState("on");
	useEffect(() => {}, []);

	return (
		<div>
			{nav === "on" ? (
				<>
					<h1>Navbar</h1>
					{/* <UserLogin></UserLogin> */}
					{/* <ComputeFeedback></ComputeFeedback> */}
				</>
			) : (
				<>
					<h2>Testing</h2>
				</>
			)}
		</div>
	);
}
