import React from 'react';
import { Route } from 'react-router-dom';
import Sidebar from './sidebar';
import Users from './users';
import Posts from './posts';

const Dashboard = ({ match }) => {
	return (
		<div>
			<h1>Admin Dashboard</h1>
			<Sidebar />

			<div>
				<Route path='/admin/users' component={Users} />
				<Route path='/admin/posts' component={Posts} />
			</div>
		</div>
	);
};

export default Dashboard;
