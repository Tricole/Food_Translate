import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Hashes from "jshashes";

const UserLogin = (props) => {
	const { registerNewUser } = props;

	const [userName, setUserName] = useState(" ");
	const [Password, setPassword] = useState("");

	function checkUsername(e) {
		e.preventDefault();
		// console.log(e.target.value);
		setUserName(e.target.value);
	}
	function checkPassword(e) {
		e.preventDefault();
		// console.log(e.target.value);
		var SHA1 = new Hashes.SHA1().b64(e.target.value);
		console.log(SHA1);

		setPassword(SHA1);
	}

	async function getUser() {
		try {
			const fetchUser = await axios.get(`/users/${userName.trim()}`);

			if (fetchUser.data[0].password !== Password)
				alert("Wrong Password! Please try again");
			else {
				alert("Successful login");
			}
		} catch (error) {
			alert("Please check your credentials and try again");
			console.log(error);
		}
	}

	return (
		<>
			<form>
				<label className="username credentials">
					Username
					<input
						type="text"
						onChange={checkUsername}
						name="username"
						value={userName}
					/>
				</label>
				<label className="username credentials">
					password
					<input
						type="text"
						onChange={checkPassword}
						name="password"
						value={Password}
					/>
				</label>
				<button
					onClick={(e) => {
						e.preventDefault();
						getUser();
					}}
				>
					{" "}
					Login
				</button>
			</form>
			<a href="" onClick={registerNewUser}></a>
		</>
	);
};

export default UserLogin;
