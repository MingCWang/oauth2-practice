
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';



function HomeSideBar() {
	return (
		<>
			<div id="sidebar">
				<nav>
					<ul id="navbar">
						<Link to={`/`}>Home</Link>
						<Link to={`/login`}>Login</Link>
					</ul>
				</nav>
				<h1 id="title">OAuth2.0 practice</h1>

			</div>
		</>
	)
}



function PageSideBar() {

	const [sidebar, setSidebar] = useState(false);

	function toggleSideBar() {
		setSidebar(!sidebar);
	}

	let sidebarStyle = sidebar ? 'sidebar-page' : 'sidebar-page-hidden';
	let burgerStyle = sidebar ? 'burger' : 'burger-hidden';
	return (
		<>
			<button id={burgerStyle} onClick={toggleSideBar}>
				<div className="line"></div>
				<div className="line"></div>
			</button>
			<div id={sidebarStyle}>
				<nav>
					<ul id="navbar-page">
						<Link className="link" to={`/`}>Home</Link>
						<Link className="link" to={`/login`}>Login</Link>
					</ul>
				</nav>
			</div>
		</>
	)
}
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

