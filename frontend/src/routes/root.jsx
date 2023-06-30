
import { Outlet, Link, useLocation } from 'react-router-dom';


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
	return (
		<>
			<button id="burger">
				<div className="line"></div>
				<div className="line"></div>
			</button>
			<div id="sidebar-page">
				<nav>
					<ul id="navbar-page">
						<Link to={`/`}>Home</Link>
						<Link to={`/login`}>Login</Link>
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

