import { useEffect, useState } from "react";
import ComputeFeedback from "../ComputeFeedback";
import UserLogin from "./UserLogin";
import UserProfile from "./UserProfile";

export default function AddNavBar(props) {
	const { goToLogout, goToProfile } = props;

	const [nav, setNav] = useState("on");
	useEffect(() => {}, []);

	return (
		<div>
			{nav === "on" ? (
				<>
					<div className="navBar">
						<h1>Navbar</h1>
						<div className="logout">
							<a href="" onClick={goToLogout}>
								Logout
							</a>
						</div>
						<div className="profile">
							<a href="" onClick={goToProfile}>
								Profile
							</a>
						</div>
					</div>

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
