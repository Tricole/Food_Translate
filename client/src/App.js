import "./App.css";
import AddNavBar from "./Components/Navbar";
import UsersTable from "./Components/UserTable";
import NewUser from "./Components/NewUser";
import UserLogin from "./Components/UserLogin";

import { useEffect, useState } from "react";

function App() {
	const [newUser, checkNewUser] = useState(false);

	useEffect(() => {}, [newUser]);

	function registerUser(e) {
		e.preventDefault();

		checkNewUser(true);

		console.log(e);
	}

	return (
		<div className="App">
			<UserLogin registerNewUser={registerUser}></UserLogin>
			<AddNavBar />
			<UsersTable />
			{/* <header className="App-header">
				<p>Hello</p>
			</header> */}
			<NewUser />
		</div>
	);
}

export default App;
