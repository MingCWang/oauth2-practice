
import { Outlet, useLocation } from 'react-router-dom';

import PageSideBar from '../components/PageSideBar';
import HomeSideBar from '../components/HomeSideBar';

export default function Root() {

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

