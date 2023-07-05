import { Link } from 'react-router-dom';

export default function HomeSideBar() {
	return (
		<>
			<div id="sidebar">
				<nav>
					<ul id="navbar">
						<Link to={`/`}>Home</Link>
						<Link to={`/login`}>Login</Link>
						<Link to={`/about`}>About</Link>
					</ul>
				</nav>
				<h1 id="title">OAuth2.0 practice</h1>

			</div>
		</>
	)
}