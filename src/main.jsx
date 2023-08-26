import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import HomeTree from './pages/HomeTree';
import Template from './pages/Template';
import './index.css';

const router = createBrowserRouter([
	{
		path: '/home-tree',
		element: <HomeTree />,
	},
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/template',
		element: <Template />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
