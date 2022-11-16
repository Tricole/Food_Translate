import { useEffect, useState } from "react";
import ComputeFeedback from "../ComputeFeedback";
import UserLogin from "./UserLogin";

export default function AddNavBar(props) {
	const { logout, profile } = props;

	const [nav, setNav] = useState("on");
	useEffect(() => {}, []);

	return (
		<div>
			{nav === "on" ? (
				<>
					<div className="navBar">
						<h1>Navbar</h1>
						<div className="logout">
							<a href="" onClick={logout}>
								Logout
							</a>
						</div>
						<div className="profile">
							<a href="" onClick={profile}>
								profile
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
