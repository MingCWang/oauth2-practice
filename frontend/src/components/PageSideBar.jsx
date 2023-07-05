import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function PageSideBar() {
	const [sidebar, setSidebar] = useState(false);

	function toggleSideBar() {
		setSidebar(!sidebar);
	}

	let sidebarStyle = sidebar ? 'sidebar-page' : 'sidebar-page-hidden';
	let burgerStyle = sidebar ? 'burger' : 'burger-hidden';
	let lineTopStyle = sidebar ? 'line-top' : 'line';
	let lineBottomStyle = sidebar ? 'line-bottom' : 'line';
	return (
		<>
			<button id={burgerStyle} onClick={toggleSideBar}>
				<div className={lineTopStyle}></div>
				<div className={lineBottomStyle}></div>
			</button>
			<div id={sidebarStyle}>
				<nav>
					<ul id="navbar-page">
						<Link className="link" to={`/`}>Home</Link>
						<Link className="link" to={`/login`}>Login</Link>
						<Link className="link" to={`/about`}>About</Link>
					</ul>
				</nav>
			</div>
		</>
	)
}
