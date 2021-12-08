import React from 'react';
import SignUp from './SignUp';
import Login from './Login';
import Forgot from './Forgot';
import { Routes, Route } from 'react-router-dom';

function Link() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<SignUp />} />
				<Route path="/login" element={<Login />} />
				<Route path="/forgot" element={<Forgot />} />
			</Routes>
		</div>
	);
}

export default Link;
