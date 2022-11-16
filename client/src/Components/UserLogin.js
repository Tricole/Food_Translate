import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Hashes from "jshashes";

const UserLogin = ({ registerNewUser, loginSuccess }) => {
	// const { registerNewUser, loginSuccess } = props;
	// const usernameRef = useRef("");
	// const passwordRef = useRef("");

	const [userName, setUserName] = useState("");
	const [Password, setPassword] = useState("");

	function checkUsername(e) {
		e.preventDefault();
		// console.log(e.target.value);
		setUserName(e.target.value);
	}
	function checkPassword(e) {
		e.preventDefault();
		// console.log(e.target.value);

		setPassword(e.target.value);
	}

	async function getUser() {
		var SHA1 = new Hashes.SHA1().b64(Password);

		try {
			const fetchUser = await axios.get(`/users/${userName.trim()}`);

			if (fetchUser.data[0].password !== SHA1)
				alert("Wrong Password! Please try again");
			else {
				alert("Successful login");
				loginSuccess("mainPage");
				return true;
			}
		} catch (error) {
			alert("Please check your credentials and try again");
			console.log(error);
			return false;
		}
	}

	return (
		<>
			<form>
				<label htmlFor="username" className="username credentials">
					Username
					<input
						type="text"
						// ref ={usernameRef}
						id="username"
						onChange={checkUsername}
						name="username"
						value={userName}
					/>
				</label>
				<label htmlFor="password" className="username credentials">
					Password
					<input
						type="password"
						// ref ={passwordRef}
						onChange={checkPassword}
						name="password"
						id="password"
						value={Password}
					/>
				</label>
				<button
					onClick={(e) => {
						e.preventDefault();
						getUser();
					}}
				>
					{/* {" "} */}
					Login
				</button>
			</form>
			<a href="" onClick={registerNewUser}>
				Register as a new user?
			</a>
		</>
	);
};

export default UserLogin;
