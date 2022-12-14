import "./App.css";
import AddNavBar from "./Components/Navbar";
import UsersTable from "./Components/UserTable";
import NewUser from "./Components/NewUser";
import UserLogin from "./Components/UserLogin";
import UserProfile from "./Components/UserProfile";
import UserMainPage from "./Components/UserMainPage";

import { useEffect, useState } from "react";

function App() {
	const [newUser, checkNewUser] = useState(false);
	const [userProfile, wantUserProfile] = useState(false);
	const [pageStatus, setPageStatus] = useState("userLogin");

	useEffect(() => {
		renderSwitch();
	}, [pageStatus]);

	function registerUser(e) {
		e.preventDefault();
		setPageStatus("newUser");
		checkNewUser(true);

		console.log(e);
	}

	function userProfilePage(e) {
		e.preventDefault();
		setPageStatus("userProfile");
		// userProfile(true);
	}

	function userLoginPage(e) {
		e.preventDefault();
		setPageStatus("userLogin");
	}

	function toUserMainPage() {
		// e.preventDefault();
		setPageStatus("mainPage");
	}

	function renderSwitch() {
		// console.log(e);
		// e.preventDefault();
		console.log("tried to switch");
		switch (pageStatus) {
			case "userLogin":
				return (
					<UserLogin
						loginSuccess={toUserMainPage}
						registerNewUser={registerUser}
					></UserLogin>
				);

			case "userProfile":
				return (
					<>
						<AddNavBar goToProfile={userProfilePage} goToLogout={userLoginPage} />
						<UserProfile></UserProfile>
					</>
				);

			case "newUser":
				return <NewUser goToMainPage={toUserMainPage}></NewUser>;

			case "mainPage":
				return (
					<>
						<AddNavBar goToProfile={userProfilePage} goToLogout={userLoginPage} />
						<UserMainPage></UserMainPage>;
					</>
				);

			default:
				return <h1>Landing Page</h1>;
		}
	}

	return (
		<div className="App">
			<div>
				{renderSwitch()}
				{/* {pageStatus === "newUser" ? (
					<UserLogin registerNewUser={registerUser}></UserLogin>
				) : (
					<NewUser></NewUser>
				)} */}
			</div>
			{/* <UsersTable /> */}
			{/* <header className="App-header">
				<p>Hello</p>
			</header> */}
			{/* <NewUser /> */}
		</div>
	);
}

export default App;
