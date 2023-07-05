import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom'
/** 
 * Pages Import 
 * */
import Root from './routes/root.jsx'
import ErrorPage from './error-page.jsx'
import Login from './routes/login.jsx'
import About from './routes/about.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'about',
				element: <About />,
			}
		],
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
