import { useEffect, useState } from "react";

export default function UserLogin() {
	function authenticate() {}

	return (
		<>
			<form>
				<label className="username credentials">
					Username
					<input type="text" />
				</label>
				<label className="username credentials">
					password
					<input type="text" />
				</label>
			</form>
		</>
	);
}
