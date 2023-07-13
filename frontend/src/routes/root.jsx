import { Outlet, useLocation } from 'react-router-dom';

import { useState, useEffect } from 'react';
import getJWT from '../utils/getJWT';
import jwtDecode from 'jwt-decode';

import PageSideBar from '../components/PageSideBar';
import HomeSideBar from '../components/HomeSideBar';

// import { useAuth } from "../utils/auth.js";

export default function Root() {

	function isLogin() {
		const token = localStorage.getItem('jwt');
		if (token) {
			const { name } = jwtDecode(token);
			return name
		}
		return false
	}

	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState('');

	useEffect(() => {
		getJWT(setLoading)
			.then((result) => {
				const name = isLogin();
				if (name) {
					setUser(name);
				}
				if (result) {
					setLoading(false);
				}
			}).catch((err) => {
				console.log(err);
			})
	}, []);

	let currentPath = useLocation().pathname;
	let sidebar
	if (currentPath === '/') {
		sidebar = <HomeSideBar user={user} />
	} else {
		sidebar = <PageSideBar user={user} />
	}

	const pageComponent = (
		<>
			{sidebar}
			<Outlet />
		</>
	)
	return (
		<>
			{loading == true ? (<h1>loading</h1>) : pageComponent}

		</>
	)
}

