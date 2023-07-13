import { Link } from 'react-router-dom';


function Logout() {
	localStorage.removeItem('jwt');
	window.location.reload();
}
// eslint-disable-next-line react/prop-types
export default function HomeSideBar({ user }) {



	return (
		<>
			<div id="sidebar">
				<nav>
					<ul id="navbar">
						<Link to={`/`}>Home</Link>
						{user == '' && (
							<Link to={`/login`}>Login</Link>
						)}
						{user != '' && (
							<Link onClick={() => Logout()}>Logout</Link>
						)}
						<Link to={`/about`}>About</Link>
					</ul>

				</nav>
				<div className="titleContainer">
					<h1 id="title">OAuth2.0 practice</h1>
					{user != '' && (
						<div id="user">{user}</div>
					)}
				</div>


			</div>
		</>
	)
}