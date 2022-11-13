import { useEffect, useState } from "react";

export default function AddNavBar() {
	const [nav, setNav] = useState("on");
	useEffect(() => {}, []);

	return (
		<div>
			{nav === "on" ? (
				<>
					<h1>Navbar</h1>
				</>
			) : (
				<>
					<h2>Testing</h2>
				</>
			)}
		</div>
	);
}
