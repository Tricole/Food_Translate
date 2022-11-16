import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Hashes from "jshashes";

const UserProfile = (props) => {
	const { userName } = props;

	const username = useRef("");
	const password = useRef("");
	const age = useRef(null);
	const height = useRef(null);
	const activity = useRef("");
	const diet_restrictions = useRef([]);

	useEffect(() => {
		getUserData();
	}, []);

	async function getUserData() {
		try {
			const fetchUser = await axios.get(`/users/${userName.trim()}`);
			username = fetchUser.username;
			age = fetchUser.age;
			height = fetchUser.height;
			activity = fetchUser.activity;
			diet_restrictions = fetchUser.diet_restrictions;
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

	return (
		<>
			<label for="username" className="username credentials">
				Username
				<input
					type="text"
					// ref ={usernameRef}
					id="username"
					placeholder={username}
					// ref ={usernameRef}
					// onChange={checkUsername}
					name="username"
					// value={userName}
				/>
			</label>
			<label for="password" className="password credentials">
				Password
				<input
					type="password"
					id="password"
					// placeholder={username}
					// ref ={usernameRef}
					// onChange={checkUsername}
					name="password"
					// value={userName}
				/>
			</label>

			<label for="age" className="age">
				Age
				<input
					type="text"
					placeholder={age}
					id="age"
					// ref ={usernameRef}
					// onChange={checkUsername}
					name="age"
					// value={userName}
				/>
			</label>

			<label for="height" className="height">
				Age
				<input
					type="text"
					id="height"
					placeholder={height}
					// ref ={usernameRef}
					// onChange={checkUsername}
					name="height"
					// value={userName}
				/>
			</label>

			<label for="activity" className="height">
				Activity
				<input
					type="text"
					placeholder={activity}
					id="activity"
					// ref ={usernameRef}
					// onChange={checkUsername}
					name="activity"
					// value={userName}
				/>
			</label>

			<label for="diet_restrictions" className="height">
				Diet Restrictions
				<input
					type="text"
					id="diet_restrictions"
					placeholder={diet_restrictions}
					// ref ={usernameRef}
					// onChange={checkUsername}
					name="activity"
					// value={userName}
				/>
			</label>

			<button>Update</button>
		</>
	);
};

export default UserProfile;
