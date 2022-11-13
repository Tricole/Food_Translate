import { useEffect, useState } from "react";
import axios from "axios";

export default function UsersTable() {
	const [usersTable, setUserTable] = useState([]);

	useEffect(() => {
		getUsers();
	}, []);

	async function getUsers() {
		try {
			const fetchUsers = await axios.get("/users");
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
				<tbody>{usersList}</tbody>
			</div>
		</>
	);
}
