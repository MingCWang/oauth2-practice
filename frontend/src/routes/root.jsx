
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import getJWT from '../utils/getJWT';

import PageSideBar from '../components/PageSideBar';
import HomeSideBar from '../components/HomeSideBar';

export default function Root() {


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
			{sidebar}
			<Outlet />

		</>
	)
}

