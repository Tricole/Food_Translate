import { useEffect, useState } from "react";
import axios from "axios";

export default function UsersTable() {
	const [usersTable, setUserTable] = useState([]);
	const [Name, setName] = useState("");

	useEffect(() => {
		getUsers();
	}, []);

	async function getUsers() {
		try {
			const fetchUsers = await axios.get("http://localhost:4000/users");
			setUserTable(fetchUsers.data);
		} catch (error) {
			console.log(error);
		}
	}

	async function removeUser(id) {
		try {
			await axios.delete("http://localhost:4000/users/id");
		} catch (error) {
			console.log(error);
		}
	}

	const usersList = usersTable.map((user) => {
		const fullName = user.first_name + " " + user.last_name;
		// setName("test");
		// setName(`${user.first_name} ${user.last_name}`);
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
				<div>{usersList}</div>
			</div>
		</>
	);
}
