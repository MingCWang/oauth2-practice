import { Link } from 'react-router-dom';
import { useAuth } from '../utils/auth.js';


export default function HomeSideBar() {
	const auth = useAuth();

	return (
		<>
			<div id="sidebar">
				<nav>
					<ul id="navbar">
						<Link to={`/`}>Home</Link>
						{!auth.user && (<Link to={`/login`}>Login</Link>)}

						<Link to={`/about`}>About</Link>
					</ul>
				</nav>
				<h1 id="title">OAuth2.0 practice</h1>

			</div>
		</>
	)
}