import React from "react";
import { useDispatch } from "react-redux";

import "./Auth.css";
import { authActions } from "../store/authSlice";

const Auth = () => {
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		const id = e.target.id.value;
		const password = e.target.password.value;
		dispatch(authActions.login({ id, password }));
	};
	return (
		<div className="container">
			<h1>Login</h1>{" "}
			<form onSubmit={handleSubmit}>
				<label htmlFor="id">Id</label>
				<input type="text" name="id" id="id" />
				<label htmlFor="password">Password</label>
				<input type="password" name="password" id="password" />
				<button className="login-btn" type="submit">
					Login
				</button>
			</form>
		</div>
	);
};

export default Auth;
