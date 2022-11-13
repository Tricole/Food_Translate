import { useEffect, useState } from "react";
import axios from "axios";

export default function UsersTable() {
	const [usersTable, setUserTable] = useState([]);

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

	const usersList = usersTable.map((user) => {
		return <p>{user} </p>;
	});

	return (
		<>
			<div className="usersTable">
				<div>{usersList}</div>
			</div>
		</>
	);
}
