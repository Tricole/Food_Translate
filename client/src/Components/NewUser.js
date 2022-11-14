import { useEffect, useState } from "react";
import axios from "axios";
import FormContainer from "./UserTableForms/FormContainer";

export default function NewUser() {
	const [isCreated, setCreation] = useState(false);

	useEffect(() => {}, [isCreated]);

	async function addUser(event) {
		console.log(event);
		alert(event);
		const age = event.target.age.value ? event.target.age.value : "";
		const first_name = event.target.first_name.value;
		const last_name = event.target.last_name.value;
		const height = event.target.height.value ? event.target.height.value : "";
		const activity = event.target.activity.value
			? event.target.activity.value
			: "";
		const diet_restrictions = event.target.diet_restrictions.value
			? JSON.stringify(event.target.diet_restrictions.value.split(" "))
			: "";

		const newUserData = {
			first_name: first_name,
			last_name: last_name,
			age: age,
			height: height,
			activity: activity,
			diet_restrictions: diet_restrictions,
		};
		// const newUserData = {
		// 	first_name: "Salih",
		// 	last_name: "Huseyin",
		// 	age: "61",
		// 	height: 176,
		// 	activity: "Active",
		// 	diet_restrictions: JSON.stringify(["beets", "carrots"]),
		// };

		// console.log(JSON.stringify(newUserData));

		try {
			const response = await axios.post("/new_user", newUserData);
			console.log(response.data);
			alert(response.data);
			isCreated(true);
		} catch (error) {
			console.log(error);
			setTimeout(() => {}, 5000);

			isCreated(false);
		}
	}

	return (
		<>
			<FormContainer
				triggerText={"Add User"}
				onSubmit={(event) => addUser(event)}
			/>
		</>
	);
}
