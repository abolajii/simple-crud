import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { All, Create, Edit, Header } from './components';
import * as ROUTES from './constants/routes';

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path={ROUTES.HOME} element={<All />} />
				<Route path={ROUTES.EDIT} element={<Edit />} />
				<Route path={ROUTES.CREATE} element={<Create />} />
			</Routes>
		</>
	);
};

export default App;
