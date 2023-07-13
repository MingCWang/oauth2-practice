import { useState } from 'react';
import { Link } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
export default function PageSideBar({ user }) {
	const [sidebar, setSidebar] = useState(false);

	function toggleSideBar() {
		setSidebar(!sidebar);
	}

	function Logout() {
		localStorage.removeItem('jwt');
		window.location.reload();
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
						{user == '' && (
							<Link className="link" to={`/login`}>Login</Link>
						)}
						{user != '' && (
							<Link className="link" onClick={() => Logout()}>Logout</Link>
						)}
						<Link className="link" to={`/about`}>About</Link>
					</ul>
					{user != '' && (
						<div id="userOther">{user}</div>
					)}
				</nav>
			</div>
		</>
	)
}
