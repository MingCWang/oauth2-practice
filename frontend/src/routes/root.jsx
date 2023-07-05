
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getJWT from '../utils/getJWT';

import PageSideBar from '../components/PageSideBar';
import HomeSideBar from '../components/HomeSideBar';
import { AuthProvider } from '../utils/auth.jsx';

import { useAuth } from "../utils/auth.js";

export default function Root() {

	const auth = useAuth();
	const [user, setUser] = useState('');

	useEffect(() => {
		if (localStorage.getItem('jwt')) {
			setUser(localStorage.getItem('jwt'))
			auth.login(user)
		}
	}, [auth, user]);


	useEffect(() => {
		getJWT();
	}, []);


	let currentPath = useLocation().pathname;
	let sidebar
	if (currentPath === '/') {
		sidebar = <HomeSideBar />
	} else {
		sidebar = <PageSideBar />
	}

	return (
		<>
			<AuthProvider>
				{sidebar}
				<Outlet />
			</AuthProvider>

		</>
	)
}

