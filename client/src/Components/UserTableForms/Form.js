import React from "react";

export const Form = ({ onSubmit }) => {
	return (
		<form onSubmit={onSubmit}>
			<div className="form-group">
				<label htmlFor="username">Username</label>
				<input className="form-control" id="username" />
			</div>
			<div className="form-group">
				<label htmlFor="password">Password</label>
				<input className="form-control" id="password" />
			</div>

			<div className="form-group">
				<label htmlFor="first_name">First Name</label>
				<input className="form-control" id="first_name" />
			</div>
			<div className="form-group">
				<label htmlFor="last_name">Last Name</label>
				<input className="form-control" id="last_name" />
			</div>
			<div className="form-group">
				<label htmlFor="age">Age</label>
				<input className="form-control" id="age" />
			</div>
			<div className="form-group">
				<label htmlFor="height">Height</label>
				<input className="form-control" id="height" />
			</div>
			<div className="form-group">
				<label htmlFor="actvity">Activity</label>
				<input className="form-control" id="activity" />
			</div>
			<div className="form-group">
				<label htmlFor="diet_restrictions">Diet Restrictions</label>
				<input className="form-control" id="diet_restrictions" />
			</div>

			<div className="form-group">
				<button className="form-control btn btn-primary" type="submit">
					Submit
				</button>
			</div>
		</form>
	);
};
export default Form;
