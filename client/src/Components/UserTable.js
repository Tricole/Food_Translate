import { useEffect, useState } from "react";
import axios from "axios";

export default function UsersTable() {
	const [usersTable, setUserTable] = useState([]);
	const [Name, setName] = useState("");

	useEffect(() => {
		getUsers();
	}, [usersTable]);

	async function getUsers() {
		try {
			const fetchUsers = await axios.get("/users");
			setUserTable(fetchUsers.data);
		} catch (error) {
			console.log(error);
		}
	}

	async function removeUser(id) {
		await axios.delete(`/users/${id}`);
		setUserTable(usersTable.filter((el) => el.id !== id));
	}

	const usersList = usersTable.map((user) => {
		const fullName = user.first_name + " " + user.last_name;
		return (
			<p>
				<span>
					{fullName} {user.age}
					<button onClick={() => removeUser(user.id)}>Remove</button>
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
