import { useEffect, useRef, useState } from "react";
import axios from "axios";
import FormContainer from "./UserTableForms/FormContainer";
import Hashes from "jshashes";

export default function NewUser() {
	const [isCreated, setCreation] = useState(false);
	const addUserNow = useRef(null);

	useEffect(() => {}, [isCreated]);

	async function addUser(event) {
		console.log(event);
		alert(event);
		const username = event.target.username.value;
		const password = event.target.password.value;
		const first_name = event.target.first_name.value;
		const last_name = event.target.last_name.value;
		const age = event.target.age.value ? event.target.age.value : "";
		const height = event.target.height.value ? event.target.height.value : "";
		const activity = event.target.activity.value
			? event.target.activity.value
			: "";
		const diet_restrictions = event.target.diet_restrictions.value
			? JSON.stringify(event.target.diet_restrictions.value.split(" "))
			: "";

		const newUserData = {
			username: username,
			password: new Hashes.SHA1().b64(password),
			first_name: first_name,
			last_name: last_name,
			age: age,
			height: height,
			activity: activity,
			diet_restrictions: diet_restrictions,
		};

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
				ref={addUserNow}
				triggerText={"Register as a new user?"}
				onSubmit={(event) => addUser(event)}
			/>
		</>
	);
}
