import { useEffect, useState } from "react";
import axios from "axios";

export default function UsersTable() {
	const [usersTable, setUserTable] = useState([]);
	const [Name, setName] = useState("");
	const [temp, setTemp] = useState("no");

	useEffect(() => {
		getUsers();
	}, []);

	async function getUsers() {
		try {
			const fetchUsers = await axios.get("/users");
			setUserTable(fetchUsers.data);
			setTemp("yes");
		} catch (error) {
			console.log(error);
		}
	}

	// async function removeUser(id) {
	// 	try {
	// 		await axios.delete(`/users/${id}`);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }

	async function removeUser(id) {
		// e.preventDefault();
		await axios.delete(`/users/${id}`);
		console.log(id);
	}

	// if (temp === "yes") {
	const usersList = usersTable.map((user) => {
		const fullName = user.first_name + " " + user.last_name;
		return (
			<p>
				<span>
					{fullName} {user.age}
					<button onClick={removeUser}>Remove</button>
					<button>Edit</button>
				</span>
			</p>
		);
	});

	return (
		<>
			<div className="usersTable">
				Hello World
				<div>{usersList}</div>
			</div>
		</>
	);
}
