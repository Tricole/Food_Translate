import { useEffect } from "react";

export default function AddNavBar() {
	useEffect(() => {
		AddNavBar();
	}, []);

	return <h1>Navbar</h1>;
}
