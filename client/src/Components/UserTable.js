import { useEffect, useState } from "react";
import axios from "axios";
import FormContainer from "./UserTableForms/FormContainer";
import Hashes from "jshashes";

export default function UsersTable() {
	const [usersTable, setUserTable] = useState([]);

	useEffect(() => {
		getUsers();
	}, [JSON.stringify(usersTable)]);

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

		const username = event.target.username.value
			? event.target.username.value
			: user.username;

		const password = event.target.password.value
			? new Hashes.SHA1().b64(event.target.password.value)
			: user.password;
		const first_name = event.target.first_name.value
			? event.target.first_name.value
			: user.first_name;
		const last_name = event.target.last_name.value
			? event.target.last_name.value
			: user.last_name;
		const age = event.target.age.value ? event.target.age.value : user.age;
		const height = event.target.height.value
			? event.target.height.value
			: user.height;
		const activity = event.target.activity.value
			? event.target.activity.value
			: user.activity;
		const diet_restrictions = event.target.diet_restrictions.value
			? JSON.stringify(event.target.diet_restrictions.value.split(" "))
			: user.diet_restrictions;

		const updateUser = {
			username: username,
			password: password,
			first_name: first_name,
			last_name: last_name,
			age: age,
			height: height,
			activity: activity,
			diet_restrictions: diet_restrictions,
		};

		console.log(updateUser);

		try {
			await axios.put(`/users/${user.id}`, updateUser);
		} catch (error) {
			console.log(error);
		}
	}

	async function removeUser(id) {
		await axios.delete(`/users/${id}`);
		setUserTable(usersTable.filter((el) => el.id !== id));
		console.log("🌏");
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
				<div>{usersList}</div>
			</div>
		</>
	);
}
