import { useEffect, useState } from "react";
import Profile from "./TakePhoto";

export default function AddNavBar() {
	const [nav, setNav] = useState("on");
	useEffect(() => {}, []);

	return (
		<div>
			{nav === "on" ? (
				<>
					<h1>Navbar</h1>
					{/* <div className="container mt-5">
						<Profile />
					</div> */}
				</>
			) : (
				<>
					<h2>Testing</h2>
				</>
			)}
		</div>
	);
}
