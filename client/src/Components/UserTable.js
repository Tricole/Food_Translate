import { useEffect, useState } from "react";
import axios from "axios";
import FormContainer from "./UserTableForms/FormContainer";

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

	async function updateUser(event, user) {
		event.preventDefault(event);
		// console.log(user);
		// console.log(event.target.first_name.value);
		console.log(user.diet_restrictions);

		const age = event.target.age.value ? event.target.age.value : user.age;
		const first_name = event.target.first_name.value
			? event.target.first_name.value
			: user.first_name;
		const last_name = event.target.last_name.value
			? event.target.last_name.value
			: user.last_name;
		const height = event.target.height.value
			? event.target.height.value
			: user.height;
		const activity = event.target.activity.value
			? event.target.activity.value
			: user.activity;
		const diet_restrictions = event.target.diet_restrictions.value
			? event.target.diet_restrictions.value
			: user.diet_restrictions;

		const updateUser = {
			first_name: first_name,
			last_name: last_name,
			age: age,
			height: height,
			activity: activity,
			diet_restrictions: JSON.stringify(diet_restrictions.split(" ")),
		};

		// const updatedUser = {
		// 	id: `${event.target.id.value}`,
		// 	first_name: `${event.target.first_name.value}`,
		// };

		console.log(updateUser);

		try {
			await axios.put(`/users/${1}`, updateUser);
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
					<FormContainer
						triggerText={"Edit"}
						onSubmit={(event) => updateUser(event, user)}
					/>
					{/* <button onClick={ updateUser} >Edit</button> */}
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
